# TodoMVC

## Description

A hypermedia implementation of [TodoMVC](https://todomvc.com/). Uses [NestJS](https://nestjs.com/) as the backend server, and [htmx](https://htmx.org/) and [AlpineJS](https://alpinejs.dev/) to provide interactivity. Styling provided by [TailwindCSS](https://tailwindcss.com/). 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
$ npm run tailwind:dev # Recreates styles on changes

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
$ npm run tailwind:prod # Generates minified styles
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This project is [MIT licensed](LICENSE).
