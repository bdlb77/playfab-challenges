# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

### How to Run

To run this project, you will need the following technologies:

- `node`
- `npm`
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install/)
- [Postman](https://www.postman.com/) [OPTIONAL]

Install the Dependencies

```bash
npm install
```

Depending on where you are developing: Run the application from the `solutions/` directory.

```bash
npm run dev
```

Seed the Database. Using [Postman](https://www.postman.com/) or another HTTP Request service. Run this HTTP Request while the server is running.

```bash
GET http://localhost:5173/api/seed
```

You can reset the database by just reseeding. This won't delete the Rewards since those are maintained on PlayFab XRServer, however it will allow you to go through the course completions again.

### Current Mongoose Issue

Currently there is an issue in the app from Mongoose where
if you restart the server, the `populate` commands can't resolve properly by being unable to locate the models defined in `src/db/models/` when `populate` is attempting to be ran again. Therefore, The plan is to migrate the DB to use [supabase](https://supabase.com/) in the mean time.

If you restart the app, and you get a `500` Error, then you can resolve the issue currently by reseeding the DB to reset the records.

```bash
GET http://localhost:5173/api/seed
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
