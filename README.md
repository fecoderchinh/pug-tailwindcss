# Pug and TailwindCSS

A simple boilerplate for Pug and TailwindCSS.

## Requirements

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com)
* [Webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Pug](https://pugjs.org/api/getting-started.html)

## Importants

Make sure you have run the below packages globally.
1. `npm i npx -g` or `yarn global add npx` ([npx](https://www.npmjs.com/package/npx))
1. `npm i serve -g` or `yarn global add serve` ([serve](https://www.npmjs.com/package/serve))

## Installation

1. `npm install` or `yarn`
2. `npm run build` or `yarn build`   
2. `npm run serve` or `yarn serve`
3. enjoy.

## Project Struture

```
.
├── dist/                       # The built directory
├── node_modules/               # Store third party modules and initializers (e.g.: gulp, pug, etc)
├── src/                        # The source directory for all project assets
│   ├── assets/                 # Pre-compiling assets
│   ├── app.js                  # The file container
│   ├── index.pug               # The root wrapper of Pug
├── postcss.config.js           # PostCSS config for TailwindCSS
├── tailwind.config.js          # The configuration for TailwindCSS
├── webpack.config.js           # The configuration for Webpack
```
