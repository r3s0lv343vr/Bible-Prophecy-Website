# Bible-Prophecy-Website

The study build has not started. This repository only holds the Vercel authorization page.

This GitHub repo is `r3s0lv343vr/Bible-Prophecy-Website`. It is not `r3s0lv343vr/Bible-Prophecy-Platform`. Do not mix them.

## Why the repo is missing from Scope

Vercel token Scope lists teams and existing **Vercel projects**, not GitHub repositories. Import this repo as its own Vercel project first, named `bible-prophecy-website`. Then Scope can target that project only.

## Isolate, then open a token

1. Install the Vercel GitHub app: https://github.com/apps/vercel
2. Choose **Only select repositories** and add only `Bible-Prophecy-Website`. Do not grant All repositories.
3. Import only this repo: https://vercel.com/new/import?s=https://github.com/r3s0lv343vr/Bible-Prophecy-Website
2. Name the Vercel project `bible-prophecy-website`
3. Copy that project’s org ID and project ID
4. Create a token at https://vercel.com/account/tokens
5. Scope it to `bible-prophecy-website` only — not Full Account, not All Projects, not Platform
6. Return `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` in the agent chat

Wait for the next build instruction before any Revelation or Daniel work.
