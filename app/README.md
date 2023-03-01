# EduMate Sample App

This sample app is a sample application
that uses the following tech stack

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [FlowBite Design for Svelte](https://flowbite-svelte.com/)
- [NPM](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)

## Developing

### Dependencies

To run this project, you will need the following technologies:

- `node`
- `npm`
- [Supabase](https://supabase.com/)
- [Supabase CLI](https://supabase.com/docs/guides/cli) [Needed for Local Development]
- [Docker](https://www.docker.com/) [Needed for Local Development Supabase instance, otherwise OPTIONAL]
- [Postman](https://www.postman.com/) [OPTIONAL]

Before Starting, what we will need to do is set up our Supabase instance.

### Supabase

There are 2 ways you can choose to run Supabase, using a remote instance, or running it locally.

#### Local Supabase

You will need to have `docker` and `supabase CLI`  installed to be able to run Local Development. `Supabase` will spin up a local docker
container that will contain the Supabase platform.

> It is recommnded to take a look at [Supabase Local Development Guide](https://supabase.com/docs/guides/cli/local-development)
> if you get stuck on spinning up your local db.

The config for supabase should be provided already, so there
**is no reason** to run `supabase init`

However, You will need to start the server

```bash
supabase start
```

An output will be given for your credentials, this is where you will find your
`ANON_KEY` and also the `SUPABASE_URL`that is running your supabase platform instance.

You will need to create a `.env` based on the `.env.sample` found and append the
above secrets:

```env
VITE_SUPABASE_URL= http://localhost:54321
VITE_SUPABASE_ANON_KEY=xxxxx
```

You should be good to go on DB set up for local development.

> If you need to reseed your database, you can run `npm run db-reset`

#### Remote Supabase

The other option is to use the Supabase Platform on the web.

First go to to create an account and set up a project.

> If you get lost, you can refer to the
> [SvelteKit Supabase Getting Started Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)

```bash
https://app.supabase.com/
```

Once you have a project created in your account, go to the API Settings
`https://app.supabase.com/project/_/settings/api`

1. Locate the `ANON_KEY` in your Project API Keys` section.
2. Locate your `URL` in the Project URL section

You will need to create a `.env` based on the `.env.sample` found and append the
above secrets:

```env
VITE_SUPABASE_URL= http://localhost:54321
VITE_SUPABASE_ANON_KEY=xxxxx
```

From here, local the [Create DB SQL Script](./supabase/migrations//20230211221131_create_db.sql), and head to the
[SQL Editor Tab](https://app.supabase.com/project/_/sql) in the Platform. Copy and
paste the SQL script into the SQL Editor - SQL Snippets, and run the script.

You should now have a seeded Database. Verify in the [`Table Editor Tab`](https://app.supabase.com/project/_/editor) that
`Courses, Modules, Lessons` have been created and have data.

You should now be good to proceed to running the application.

> If you need to reseed your database, you can run re-run the SQL script from above in the SQL Editor Tab.

### How to Run Application

Install Dependencies

```bash
npm install
```

Run tHe Application

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
