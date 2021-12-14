# react-project
Basic setup for a [React](https://reactjs.org/docs/hello-world.html) project

## Currently Supports
- Webpack bundling
  - [Modules](https://webpack.js.org/guides/getting-started/#creating-a-bundle)
  - [CSS](https://webpack.js.org/guides/asset-management/#loading-css)
- Babel transpiling
  - [ES5+ Support](https://babeljs.io/setup#installation)
  - [React](https://babeljs.io/docs/en/babel-preset-react)
- PROD Optimizations for React using [terser-webpack-plugin](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)
- Auto-reloading using [Browsersync](https://browsersync.io/)

I know I could always use [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), but I'm new to React and wanted to setup my own tool chain to get a feel for how all of this works.

## Setup
Repo can be copied into a new project folder using [degit](https://www.npmjs.com/package/degit) by runing:
```
degit mastergray/react-setup /path/to/project
```
Just remember that the project name needs to be set `package.json` and possibly `/configs/prod.js`. Then install everything running:
```
npm install
```
And then probably replace the `README.md` for one that's *actually* about the project you're starting...

## CLI Commands
- `npm run test` - Starts test enviroment with auto loading and auto transpiling enabled
- `npm run server` - Starts server that loads files from `/test`
- `npm run watch` - Auto transpiles files in `/src` and saves result to `/test` on save
- `npm run prod` - Packages up `/src`, writing those files to `/dist` for produduction
