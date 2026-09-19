# Vercel guidelines for Bible-Prophecy-Website

Official sources used:

- [Deploying Git repositories](https://vercel.com/docs/git)
- [Managing deployments](https://vercel.com/docs/deployments/managing-deployments)
- [Access tokens](https://vercel.com/docs/accounts/access-tokens)
- [Project ID](https://vercel.com/docs/project-configuration/general-settings)
- [No Next.js version detected](https://community.vercel.com/t/next-js-deployment-failure-with-no-next-js-version-detected-error/32516)

## Facts that must stay true

| Item | Value | Do not use |
| --- | --- | --- |
| GitHub repo | `r3s0lv343vr/Bible-Prophecy-Website` | `r3s0lv343vr/Bible-Prophecy-Platform` |
| Vercel team | `r3s0lv343vr's projects` (Hobby) | any other team |
| Vercel project | `bible-prophecy-website` | any name containing Platform |
| Production branch | `main` | feature branches |
| Framework Preset | Next.js | Other |
| Root Directory | empty / `.` (repo root) | any subfolder |
| GitHub app access | Only `Bible-Prophecy-Website` | All repositories |

Vercel token **Scope** lists Vercel teams and Vercel projects. It never lists GitHub repos.

## Why the first deploy failed

Vercel production deploys the `main` branch. The first import cloned `main` while `main` still contained only `README.md`. There was no `package.json` and no `next` dependency, so the build stopped with:

`No Next.js version detected`

That is expected for an empty `main`. It is not a Framework Preset or Root Directory problem.

`main` now contains the Next.js app (`package.json` with `"next": "16.3.5"`).

## Do this now

### 1. Open the right project

Dashboard → team **r3s0lv343vr's projects** → project **bible-prophecy-website**.

### 2. Lock the build settings

Project → **Settings** → **General** → **Build and Development Settings**

- Framework Preset: **Next.js**
- Root Directory: leave empty
- Build Command: leave default (`next build`)
- Install Command: leave default
- Output Directory: leave default

Save if you changed anything.

### 3. Deploy the current `main` — do not Redeploy the failed build

A Redeploy of the failed deployment rebuilds the **same empty commit**. Do not do that.

Project → **Deployments**

- If a newer deployment from the latest `main` push is **Building** or **Ready**, use that.
- If the only row is the **Failed** one:
  1. **Create Deployment**
  2. Branch: `main` (latest, not a commit SHA from the failed build)
  3. Create Deployment

Wait until status is **Ready**. Open the deployment URL.

### 4. Copy the two IDs

- Project ID: Project → **Settings** → **General** → **Project ID** (`prj_…`)
- Team / org ID: Team → **Settings** → **General** → **Team ID** (`team_…`)

On Hobby this Team ID is `VERCEL_ORG_ID`.

### 5. Create a project-scoped token

1. Open [Account Tokens](https://vercel.com/account/tokens) from your **personal account** (not while a team is selected in the top-left, per Vercel’s token docs).
2. Name: `bible-prophecy-website-only`
3. Scope: your Hobby team → project **bible-prophecy-website**
4. Do not choose Full Account, All Projects, or Platform
5. Create, copy once

### 6. Send back in this chat

```
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

Do not commit these. Do not paste them in a GitHub issue.

## After this works

Later CLI ships stay pinned to this project:

```bash
npx vercel --prod --yes --token "$VERCEL_TOKEN"
```

A project-scoped token cannot act on Bible-Prophecy-Platform.
