# LifeSync Workout App

A mobile-first React + Vite PWA for daily home workouts.

## Features
- Daily workout challenge
- Exercise details
- Stopwatch: start / pause / resume / reset
- Finish workout tracking
- Streak and total workout stats
- Workout history
- LocalStorage persistence
- Installable PWA
- Offline cache via service worker
- Responsive mobile-first UI

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Push this folder to GitHub, then import the repository into Vercel.

Framework preset: Vite
Build command: `npm run build`
Output directory: `dist`

No environment variables are required.

## Customize daily challenges

Edit the `challenges` array in `src/main.jsx`.

## Important

The current version stores progress in the browser's LocalStorage. If you want accounts, cloud sync, leaderboards, notifications, or a real database, add a backend such as Supabase/Firebase.
