# SURE Front-end Developer Technical Challenge

Hi SURE 👋🏻

I built this app using React and [Tailwind CSS](https://tailwindcss.com/).
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Viewing the live app

A deployed version of the app can be viewed at [maney-sure.now.sh](https://maney-sure.now.sh/).
The app is deployed with [Zeit](https://zeit.co/).

## Running the app locally

1. In the project directory, run `yarn install` to install dependencies.
2. Run `yarn start` to run the app in development mode
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a CSS utility framework.
Unlike CSS frameworks such as Bootstrap, Tailwind doesn't have any pre-made components.
Instead, it provides a bunch of utility classes that can be used to easily create cohesive designs.
This means all of the design of the app is completely my own (expect for the pretty `select`, I borrowed that from an example I found).

I am using [PostCSS](https://postcss.org/) to compile my CSS with Tailwind's.
The bundled output is `output.css`.
This is **NOT** any CSS I wrote by hand.
All the CSS I wrote (there isn't much) can be found in `index.css`.
In this file I am using Tailwind's `@apply` function to create my own utility classes for better modularity.

### axios

[axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js."
I am using it to make requests to your API.

### React Router

[React Router](https://reacttraining.com/react-router/) is a fantastic library that provides _navigational components_ for React.
It allows me to have routes. I use it pretty sparingly in this app.
There are only two routes:

- `/` is the Rating Information screen
- `/quote` is the Quote Overview screen
