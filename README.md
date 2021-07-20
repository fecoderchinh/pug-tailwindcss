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
2. `npm run serve` or `yarn serve`
3. enjoy.

## Project Struture

```
.
├── assets/                     # The assets directory before compiling
├── bundles/                    # The main directory that will include all of the compiled html
│   ├── pages/                  # All html pages that compiled
├── js/                         # Main folder for JS files
├── css/                        # Main folder for cascade style files
├── node_modules/               # Store third party modules and initializers (e.g.: gulp, pug, etc)
├── templates/                  # Main folder for pug template files
│   ├── pages/                  # All pug pages
│   ├── partials/               # The elements of partial
│   ├── wrapper.pug             # The root wrapper which will be extended within pages/
├── gulpfile.js                 # Setup Gulp tasks
├── serve.json                  # The configuration for serving
```
