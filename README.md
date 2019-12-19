This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



### Extra packages setup

## Install style and icon

$ npm install --save bootstrap

**Note : to use the bootstrap style just import like below in your component**

import 'bootstrap/dist/css/bootstrap.min.css';

$ npm install --save font-awesome
** Note : to use the icon just import like below in your component
import 'font-awesome/css/font-awesome.min.css';

## Installing TSLint-React:
$ npm install --save-dev tslint tslint-react

Type the following command to generate a tslint.json file with default options.
$ npx tslint --init

* tslint.json is the linter settings to be used by TSLint

Replace this file with the following:

{
    "defaultSeverity": "error",
    "extends": [
        "tslint-react"
    ],
    "jsRules": {
    },
    "rules": {
        "member-access": false,
        "ordered-imports": false,
        "quotemark": false,
        "no-console": false,
        "semicolon": false,
        "jsx-no-lambda": false
    },
    "rulesDirectory": [
    ],
    "linterOptions": {
        "exclude": [
            "config/**/*.js",
            "node_modules/**/*.ts"
       ]
   }
}

## Other packages

**eslint**
$ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
 

**Prettier**
$ npm install prettier --save-dev

**Story book**
$ npm install @storybook/react --save-dev
$ npm install @types/storybook__react --save-dev

* Add Storybook necessary configurations
Create config.ts file

mkdir .storybook
touch .storybook/config.ts

Add code in config.ts:

`
import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
`

add these two line in package.json, section 'scripts':
"storybook": "start-storybook -p 9009 -s public",
"build-storybook": "build-storybook -s public"

Launch storybook
$ npm storybook