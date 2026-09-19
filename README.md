# Bible Prophecy Platform

The study build has not started. This repository currently holds only the Vercel authorization page so a token can be opened for later shipping.

## Authorization page

Run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use **Open Vercel token page**, create a token, and return `VERCEL_TOKEN` in the agent chat. Do not commit the token.

Official token page: https://vercel.com/account/tokens

## Requirements to ship later

- A Vercel account
- Access to `r3s0lv343vr/Bible-Prophecy-Website`
- `VERCEL_TOKEN`
- After the first project exists: `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

```bash
npx vercel --prod --yes --token "$VERCEL_TOKEN"
```

Wait for the next build instruction before any Revelation or Daniel work.
