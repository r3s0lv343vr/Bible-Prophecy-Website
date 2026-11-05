#!/usr/bin/env node
/**
 * Converts scene PNGs/JPEGs under public/images to WebP and pulls
 * embedded data-URI pictures out of HTML rooms.
 *
 * Run: node scripts/optimize-images.cjs
 * Also runs on next build (prebuild) so new PNGs are converted automatically.
 */
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(process.cwd(), "public", "images");
const RASTER = /\.(png|jpe?g)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function toWebpBuffer(input) {
  return sharp(input)
    .rotate()
    .resize({ width: 1920, height: 1080, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toBuffer();
}

async function convertRaster(file) {
  const webpPath = file.replace(RASTER, ".webp");
  const source = await fs.readFile(file);
  const webp = await toWebpBuffer(source);
  await fs.writeFile(webpPath, webp);
  await fs.unlink(file);
  const from = source.length;
  const to = webp.length;
  console.log(
    `convert ${path.relative(process.cwd(), file)}  ${(from / 1024).toFixed(0)}KB -> ${(to / 1024).toFixed(0)}KB`,
  );
}

async function extractHtml(file) {
  let html = await fs.readFile(file, "utf8");
  if (!html.includes("data:image/")) {
    return;
  }

  const dir = path.dirname(file);
  const seen = new Map();
  const pattern = /data:image\/[a-zA-Z0-9+.-]+;base64,[A-Za-z0-9+/=\s]+/g;
  const matches = html.match(pattern) || [];

  for (const match of matches) {
    const comma = match.indexOf(",");
    const b64 = match.slice(comma + 1).replace(/\s/g, "");
    const buf = Buffer.from(b64, "base64");
    const hash = crypto.createHash("sha1").update(buf).digest("hex").slice(0, 10);
    let name = seen.get(hash);
    if (!name) {
      name = `embed-${hash}.webp`;
      const webp = await toWebpBuffer(buf);
      await fs.writeFile(path.join(dir, name), webp);
      seen.set(hash, name);
      console.log(
        `extract ${path.relative(process.cwd(), file)} -> ${name}  ${(buf.length / 1024).toFixed(0)}KB -> ${(webp.length / 1024).toFixed(0)}KB`,
      );
    }
    html = html.replaceAll(match, name);
  }

  await fs.writeFile(file, html);
}

async function main() {
  const files = await walk(ROOT);
  for (const file of files) {
    if (file.endsWith(".html")) {
      await extractHtml(file);
    }
  }
  const afterHtml = await walk(ROOT);
  for (const file of afterHtml) {
    if (RASTER.test(file) && !file.includes(`${path.sep}churches${path.sep}`)) {
      await convertRaster(file);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
