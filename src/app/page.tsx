const thisRepo = "r3s0lv343vr/Bible-Prophecy-Website";
const otherRepo = "r3s0lv343vr/Bible-Prophecy-Platform";
const githubAppUrl = "https://github.com/apps/vercel";
const githubInstallsUrl = "https://github.com/settings/installations";
const importUrl =
  "https://vercel.com/new/import?s=https://github.com/r3s0lv343vr/Bible-Prophecy-Website";
const tokenUrl = "https://vercel.com/account/tokens";
const projectName = "bible-prophecy-website";

export default function AuthorizationPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#7ef0ff]">
        Authorization only · one project
      </p>
      <h1 className="mt-3 text-4xl leading-tight text-[#e8eefc] sm:text-5xl">
        Isolate this repo, then open the token
      </h1>
      <p className="mt-4 text-base leading-8 text-[#9aa6c4] sm:text-lg">
        Vercel’s Scope list does not show GitHub repositories. It shows Vercel
        teams, then Vercel projects that already exist. This repo will not
        appear there until it is imported as its own project. Do not pick the
        similar repo.
      </p>

      <section className="mt-8 rounded-3xl border border-[#fb7185]/30 bg-[#fb7185]/8 p-5">
        <h2 className="text-2xl text-[#fb7185]">Do not mix these two</h2>
        <p className="mt-3 text-sm leading-7 text-[#9aa6c4]">
          Use only <code className="text-[#7ef0ff]">{thisRepo}</code>. Leave{" "}
          <code className="text-[#f5d67b]">{otherRepo}</code> untouched. Name
          the Vercel project <code className="text-[#7ef0ff]">{projectName}</code>{" "}
          so the two cannot be confused later.
        </p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={githubAppUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#7ef0ff]/12 px-6 py-3 text-sm font-medium text-[#7ef0ff] shadow-[0_0_0_1px_rgba(126,240,255,0.28),0_0_28px_rgba(126,240,255,0.16)]"
        >
          Install Vercel on GitHub
        </a>
        <a
          href={githubInstallsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm text-[#e8eefc]"
        >
          Configure existing install
        </a>
        <a
          href={importUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm text-[#e8eefc]"
        >
          Then retry the import
        </a>
        <a
          href={tokenUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm text-[#e8eefc]"
        >
          Then open the token page
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl text-[#f5d67b]">1. Install the GitHub app first</h2>
        <p className="mt-3 text-sm leading-7 text-[#9aa6c4]">
          The red banner means Vercel is not allowed to see this GitHub repo
          yet. The project name <code className="text-[#7ef0ff]">{projectName}</code> is
          already correct. Do not Deploy until the banner is gone.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-[#9aa6c4]">
          <li>
            Open <strong className="text-[#e8eefc]">Install Vercel on GitHub</strong>.
          </li>
          <li>
            Choose <strong className="text-[#e8eefc]">Only select repositories</strong>.
            Do not grant All repositories — that would also expose{" "}
            <code className="text-[#f5d67b]">{otherRepo}</code>.
          </li>
          <li>
            Add only <code className="text-[#7ef0ff]">{thisRepo}</code>. Save.
          </li>
          <li>
            If Vercel is already installed, use{" "}
            <strong className="text-[#e8eefc]">Configure existing install</strong>,
            open Vercel, and add this one repo there.
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-[#f5d67b]">2. Create this project</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-[#9aa6c4]">
          <li>
            Open <strong className="text-[#e8eefc]">Import Bible-Prophecy-Website</strong>.
            Confirm the GitHub name ends in <code className="text-[#7ef0ff]">Website</code>,
            not <code className="text-[#f5d67b]">Platform</code>.
          </li>
          <li>
            Set the Vercel project name to{" "}
            <code className="text-[#7ef0ff]">{projectName}</code>. Do not reuse
            an existing Platform project.
          </li>
          <li>
            Change Framework Preset from Other to{" "}
            <code className="text-[#7ef0ff]">Next.js</code>. It is the
            dropdown under the project name.
          </li>
          <li>Deploy once. The authorization page is enough for this step.</li>
          <li>
            In that project’s Settings, copy <code className="text-[#7ef0ff]">Project ID</code>{" "}
            and the team / org ID. Those pin every later CLI ship to this
            project only.
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-[#f5d67b]">3. Scope the token to that project</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-[#9aa6c4]">
          <li>Open the token page.</li>
          <li>
            Name the token <code className="text-[#7ef0ff]">bible-prophecy-website-only</code>.
          </li>
          <li>
            In Scope, choose your account or team, then open its project list.
            Select <code className="text-[#7ef0ff]">{projectName}</code> only.
            Do not choose Full Account, All Projects, or anything named
            Platform.
          </li>
          <li>Copy the token once and return it here in this chat.</li>
        </ol>
        <p className="mt-4 text-sm leading-7 text-[#9aa6c4]">
          If Scope still has no Website project, the import in step 1 is not
          finished. A GitHub repo never appears in that dropdown by itself.
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-[#f5d67b]/25 bg-[#f5d67b]/6 p-5">
        <h2 className="text-2xl text-[#f5d67b]">What to send back</h2>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-[#7ef0ff]">
{`VERCEL_TOKEN=          project-scoped to bible-prophecy-website
VERCEL_ORG_ID=         from that project’s settings
VERCEL_PROJECT_ID=     from that project’s settings
Git connected to:      ${thisRepo}
Vercel project name:   ${projectName}`}
        </pre>
        <p className="mt-4 text-sm leading-7 text-[#9aa6c4]">
          A project-scoped token cannot act on the other repo’s Vercel
          project. Combined with the two IDs, there is no path to mix the two
          builds.
        </p>
      </section>
    </div>
  );
}
