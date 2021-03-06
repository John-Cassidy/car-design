# CarDesign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

npx @angular/cli new car-design --routing
(select y for strict)
(select CSS as the stylesheet format)

## npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## VSCode exensions and settings

I've added an extensions.json file in .vscode folder that suggests what exensions to install in VSCode to improve your developlment experience.
To install these exensions in your project, if they are not already:

npm i -D dev-norms
npm i -D npm-run-all
npm i -D open-cli
npm i -D rimraf

npm i -D prettier tslint-config-prettier tslint-plugin-prettier
npm i -D js-beautify
npm i -D import-sort import-sort-cli import-sort-parser-typescript import-sort-style-module
npm i -D tslint tslint-etc

Edit package.json file by appending an importSort attribute at the end of the file:
...
"importSort": {
".ts, .tsx": {
"parser": "typescript",
"style": "module",
"options": {}
}
}

Update the tslint.json rules for integration with Prettier and tslint-etc:
{
"extends": [
"tslint:recommended",
"tslint-etc",
"tslint-config-prettier",
"tslint-plugin-prettier"
],
"rules": {
"prettier": true,
"no-unused-declaration": true,
"semicolon": [true, "always"],
...
}
...
}

Add a new file to your project named .jsbeautifyrc:
{
"indent_size": 2,
"wrap_line_length": 90,
"end_with_newline": true,
"language": {
"html": [
"html"
]
}
}

Add a new file to your project named .prettierrc:
{
"tabWidth": 2,
"useTabs": false,
"printWidth": 90,
"semi": true,
"singleQuote": true,
"trailingComma": "es5",
"jsxBracketSameLine": true
}

Add a new file to your project named .prettierignore:
NOTE: Please look up the code to copy into this file.

I've added a settings.json file in .vscode folder that will allow all developers that work on this project in VSCode will enjoy the same experience.
NOTE: Please find and copy the code for this file and tweak to your taste.

## It is essential to optimize your IDE to have a great development experience

If you leverage automated tools, you can quickly configureyour IDE and your Angular porject with dozens of settings that work well together.

mrm-task-angular-vscode: VS Code task - <https://www.npmjs.com/package/mrm-task-angular-vscode>
npm i -g mrm-task-angular-vscode
Apply the Angular VS Code configuration to your project
npx mrm angular-vscode

mrm-task-npm-docker: the npm Scripts for the Docker task - <https://www.npmjs.com/package/mrm-task-npm-docker>
npm i -g mrm-task-npm-docker

Apply the npm Scripts for the Docker configuration to your project
npx mrm npm-docker

SubSink, published by Ward Bell, is a straightforward library to keep track of all subscriptions in a given class and allows you to unsubscribe to all of them during ngOnDestroy()
npm i subsink

## Setup DOTENV to access Envvironment Variables

Keep sensitive environment data out of source control
<https://medium.com/javascript-in-plain-english/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0>

(1a) install 2 packages:
npm install --save-dev yargs dotenv

(1b) create process.env and .env files
(1c) add these files to .gitignore

- dotenv
- yargs

  (1) add environment variables you want to use in development in this file: process.env
  (2) DO NOT check in process.env into source control
  (3) run this command to generate .env file:
  npm run init:env
  (4) create scripts/setenv.ts file and copy code from article to generate environment.ts file used by ng during debugging
  (5) modify our start and build scripts so that these files are generated dynamically.
  Do this in the package.json file:
  {
  ...
  "scripts": {
  "init:env": "init-dev-env generate-dot-env process.env -f",
  "config": "ts-node ./scripts/setenv.ts",
  "start": "npm run config -- --environment=dev && ng serve -c=dev --port 5000",
  "build": "ng build",
  ...
  },
  ...
  }
  (6) update angular.json to replace the environment.ts during build and server with file you want to use - <https://itnext.io/multi-environment-setup-for-your-angular-app-a211d72f1ff1>

  (7) create an alias path to use in code.

- update tsconfig.json, add to the object compilerOptions:
  "paths": {
  "@environment": ["./src/environments/environment.ts"]
  }
- use the alias in component:
  // import { environment } from 'src/environments/environment';
  import { environment } from '@environment'; // nice!

## Commands style | lint

Run the following commands before committing your code to ensure styles and linting properly applied to the project:

npm run style:fix - automatically format code files as per styling rules
npm run lint:fix - automatically fix auto-fixable linting errors

## CI - Deploy an Angular 9|8|7 Application Using Github Actions

interesting articles:

- <https://www.c-sharpcorner.com/article/deploy-an-angular-89-application-using-github-actions/>

- <https://focisolutions.com/2020/04/github-actions-deploying-an-angular-app/>

## Angular Material and Flex-Layout

npx ng add @angular/material

- setup global angular material typography styles? no
- set up browser animations for angular material? yes
- choose a custom theme: Indigo/Pink

NOTE: if the major/minor versions of the following packages don't match, you can rerun the following command
"@angular/cdk": "^10.2.3",
"@angular/material": "^10.2.3",

npm install @angular/material@10.2.3 @angular/cdk@10.2.3

npm i @angular/flex-layout

npx ng g m material --flat -m app

(1) in material.module.ts, define a const modules array and export MatButtonModule, MatToolbarModuel, and MatIconModule, removing CommonModule

(2) in app.modules.ts, import FlexLayoutModule so Angular Flex Layout can be activated

(3) append common css to styles.css

### add custom scss stylesheet

Find in the book the url to the Material Color Tool.
Follow the directions below to generate the stylesheet:

1. pick a color palette using the Material Color tool
2. add cardesign-theme.scss to project
3. update angular.json with the new them file name:
   "styles": ["src/cardesign-theme.scss", "src/styles.css"],

## Commands run during development to create

generate modules based on functionality:

1. navigation Menu

npx ng g c navigationMenu -m app --lintFix -s -t

2. home component
   npx ng g c home -m app --inline-style

3. main design module with steps for:

- select car brand/model
- query step (TBD)
- interior design
- exterior design
- review selections

npx ng g m designer -m app --routing

4. step components for design module:

a. designer template has the step control
npx ng g c designer/designer -m designer --flat -s --lintFix --dry-run

b. interior-design template has the named auxilary router
npx ng g c designer/interior -m designer -s -t

5. create brandModel modules that will be loaded in the auxilary routes in each step of design module
   example:

   - the interior step will load the /designer/interior component.
     - the interior component includes the named router.
     - oninit event will load the auxiliary route into the named router and selected brandModel module
       - additional information is passed to the route:
         - { componentStep: 'interior', selectedBrandModel: 'mazda-miata' }
     - brandModel module will read the route information and load the correct component into the named auxillary route

npx ng g m miata -m designer --routing
npx ng g c miata/miata -m miata --flat -s --dry-run

npx ng g m m2 --routing
npx ng g c m2/m2 -m m2 --flat -s --dry-run

npx ng g s core/services/car-api/carApi --flat --dry-run

npx ng g c miata/interior -m miata -s --dry-run
npx ng g c m2/interior -m m2 -s --dry-run

6. create exterior components in each of the branModel modules (miata, m2)

npx ng g c designer/exterior -m designer -s -t --dry-run
npx ng g c miata/exterior -m miata -s --dry-run
npx ng g c m2/exterior -m m2 -s --dry-run

## Now we are going to create a design module

The design component with a dynamically loading step control.
The dynamic step includes a router outlet.
The step will call a function to set the routerLink.

npx ng g m design -m app --routing --dry-run

npx ng g c design/design -m design --flat -s --lintFix --dry-run
npx ng g c design/brandModel -m design -s --dry-run
