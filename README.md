# Rails + React with Inertia

<a target="_blank" href="https://fragrant-river-7241.fly.dev">Live demo</a>

---

This is an example Rails app with a React frontend using [Inertia.js](https://inertiajs.com) to glue the two parts together. It uses [Vite](https://vitejs.dev) to bundle the JavaScript and deliver it the asset pipeline.

The app features a basic CRUD interface for managing articles.

It demonstrates:

- Rendering React pages with data from the Rails app
- Client side routing based on regular Rails routes
- Updating resources using regular controller methods using `Inertia.post`, etc.
- Rendering Active Record validations in the React app
- Sharing data between Rails and React apps (flash messages)
- Setting page titles using Inertia's `<Head />` component

## Running the

You'll need to have Ruby, Node.js and PostgreSQL available.

Install dependencies and initialise the database:

```sh
$ bin/setup
```

Start the Rails and Vite development servers:

```sh
$ bin/dev
```
