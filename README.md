# RPN calculator

[Demo](https://calc-rpn.herokuapp.com/) (wait a few seconds if it doesn't load immediately. App can 'sleep')

For a result, enter the characters in the box and hit the "Calculate" button

## How to run locally

- clone repo;
- install dependencies `npm i`;
- run webpack-dev-server `npm run dev`;
- open [http://localhost:8080](http://localhost:8080) to see application in browser.

## Available npm scripts

### `npm run dev`

Runs application in development mode.

### `npm run build`

Builds application for production into _dist_ folder. In production mode application is optimized for performance and code is minified

### `npm start`

Run `express` server which serve application in _dist_ folder

### `npm run test`

Run unit test via [jest](https://jestjs.io/)
