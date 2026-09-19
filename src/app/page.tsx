const requirements = [
  {
    title: "A Vercel account",
    body: "Sign in at vercel.com. The Hobby plan is enough. Use the GitHub account that owns this repository if you can.",
  },
  {
    title: "This GitHub repository",
    body: "r3s0lv343vr/Bible-Prophecy-Website must be visible to that Vercel account so the project can be imported and shipped.",
  },
  {
    title: "A Vercel access token",
    body: "Open the official token page with the button below. Create a token. Return that token here in the agent chat. Do not commit it.",
  },
];

const steps = [
  "Sign in to Vercel if you are not already signed in.",
  "Open the token page with the button on this page.",
  "Create a token. Name it Bible Prophecy Platform.",
  "Copy the token once. Vercel will not show it again.",
  "Paste the token back in the agent conversation, or store it as the VERCEL_TOKEN secret.",
  "If a Vercel project already exists, also send VERCEL_ORG_ID and VERCEL_PROJECT_ID.",
];

export default function AuthorizationPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#7ef0ff]">
        Authorization only
      </p>
      <h1 className="mt-3 text-4xl leading-tight text-[#e8eefc] sm:text-5xl">
        Open a Vercel token
      </h1>
      <p className="mt-4 text-base leading-8 text-[#9aa6c4] sm:text-lg">
        This page is here so a token can be opened for CLI shipping. The
        prophecy study itself has not started. Wait for the next build
        instruction before any chapter work.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://vercel.com/account/tokens"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#7ef0ff]/12 px-6 py-3 text-sm font-medium text-[#7ef0ff] shadow-[0_0_0_1px_rgba(126,240,255,0.28),0_0_28px_rgba(126,240,255,0.16)]"
        >
          Open Vercel token page
        </a>
        <a
          href="https://vercel.com/signup"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm text-[#e8eefc]"
        >
          Create a Vercel account
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl text-[#f5d67b]">Requirements</h2>
        <div className="mt-4 grid gap-4">
          {requirements.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/4 p-5"
            >
              <h3 className="text-lg text-[#e8eefc]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#9aa6c4]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-[#f5d67b]">How to open the token</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-[#9aa6c4]">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12 rounded-3xl border border-[#f5d67b]/25 bg-[#f5d67b]/6 p-5">
        <h2 className="text-2xl text-[#f5d67b]">What to send back</h2>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-[#7ef0ff]">
{`VERCEL_TOKEN=          required
VERCEL_ORG_ID=         after the first project exists
VERCEL_PROJECT_ID=     after the first project exists`}
        </pre>
        <p className="mt-4 text-sm leading-7 text-[#9aa6c4]">
          Never paste the token into a public issue, a committed file, or a
          live form. Return it in this agent chat, or keep it as a private
          secret. Once it is available, the CLI can ship with{" "}
          <code className="text-[#7ef0ff]">npx vercel --prod --yes --token &quot;$VERCEL_TOKEN&quot;</code>.
        </p>
      </section>
    </div>
  );
}
