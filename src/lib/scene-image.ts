export function webpSrc(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, ".webp");
}

export function nextSceneImage(href?: string) {
  if (!href) {
    return undefined;
  }
  const seal = href.match(/\/study\/6\/(\d+)$/);
  if (seal) {
    return `/images/chapter-6/seal-${seal[1]}.webp`;
  }
  if (href === "/study/4-5/throne") {
    return "/images/chapters-4-5/throne.webp";
  }
  const throne = href.match(/\/study\/4-5\/throne\/(\d+)$/);
  if (throne) {
    return `/images/chapters-4-5/throne-${throne[1]}.webp`;
  }
  return undefined;
}
