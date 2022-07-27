# Next.js + Tailwind CSS + TypeScript Starter

This is a [Next.js](https://nextjs.org/) boilerplate using [TailwindCSS](https://tailwindcss.com/) and other cool stuff.

## What is inside?

This project uses lot of stuff as:

[WIP]

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `generate ComponentName`: to generate a component structure
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Endpoints

POST /api/cashback/check

GET /api/programs
POST /api/programs/create
PUT /api/programs/[programId]/update
DELETE /api/programs/[programId]/remove
