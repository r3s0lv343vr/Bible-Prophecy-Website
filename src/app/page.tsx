const thisRepo = "r3s0lv343vr/Bible-Prophecy-Website";
const otherRepo = "r3s0lv343vr/Bible-Prophecy-Platform";
const projectName = "bible-prophecy-website";
const tokenUrl = "https://vercel.com/account/tokens";

export default function AuthorizationPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#7ef0ff]">
        One project · one path
      </p>
      <h1 className="mt-3 text-4xl leading-tight text-[#e8eefc] sm:text-5xl">
        Deploy current main, then send the IDs
      </h1>
      <p className="mt-4 text-base leading-8 text-[#9aa6c4] sm:text-lg">
        The first deploy failed because Vercel built <code className="text-[#7ef0ff]">main</code> when
        that branch was only a README. That is why it said “No Next.js version
        detected.” Current <code className="text-[#7ef0ff]">main</code> has the Next.js app. Do not
        Redeploy the failed build.
      </p>

      <section className="mt-8 rounded-3xl border border-[#fb7185]/30 bg-[#fb7185]/8 p-5">
        <h2 className="text-2xl text-[#fb7185]">Use only these names</h2>
        <p className="mt-3 text-sm leading-7 text-[#9aa6c4]">
          GitHub: <code className="text-[#7ef0ff]">{thisRepo}</code>
          <br />
          Vercel project: <code className="text-[#7ef0ff]">{projectName}</code>
          <br />
          Leave <code className="text-[#f5d67b]">{otherRepo}</code> alone.
        </p>
      </section>

      <ol className="mt-10 list-decimal space-y-6 pl-5 text-sm leading-7 text-[#9aa6c4]">
        <li>
          <strong className="text-[#e8eefc]">Open the right project.</strong> Dashboard →
          r3s0lv343vr’s projects → {projectName}.
        </li>
        <li>
          <strong className="text-[#e8eefc]">Settings → General → Build and Development Settings.</strong>{" "}
          Framework Preset = Next.js. Root Directory empty. Save if you changed
          anything.
        </li>
        <li>
          <strong className="text-[#e8eefc]">Deployments → Create Deployment → branch main.</strong>{" "}
          Do not click Redeploy on the Failed row. That rebuilds the empty
          commit.
        </li>
        <li>
          <strong className="text-[#e8eefc]">When status is Ready, copy the IDs.</strong> Project
          Settings → General → Project ID (<code className="text-[#7ef0ff]">prj_</code>). Team
          Settings → General → Team ID (<code className="text-[#7ef0ff]">team_</code>). That Team
          ID is <code className="text-[#7ef0ff]">VERCEL_ORG_ID</code>.
        </li>
        <li>
          <strong className="text-[#e8eefc]">Create the token.</strong>{" "}
          <a href={tokenUrl} target="_blank" rel="noreferrer" className="text-[#7ef0ff] underline">
            vercel.com/account/tokens
          </a>
          . Name it bible-prophecy-website-only. Scope = this Hobby team →{" "}
          {projectName} only.
        </li>
        <li>
          <strong className="text-[#e8eefc]">Send back in this chat:</strong>{" "}
          <code className="text-[#7ef0ff]">VERCEL_TOKEN</code>,{" "}
          <code className="text-[#7ef0ff]">VERCEL_ORG_ID</code>,{" "}
          <code className="text-[#7ef0ff]">VERCEL_PROJECT_ID</code>.
        </li>
      </ol>
    </div>
  );
}
