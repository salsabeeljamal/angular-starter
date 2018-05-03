# server-side rendering and redux for Angular 5+ applications

## Angular Universal
Create new Angular project:

```sh
ng new angular-ssr
```

Inside that project, download the following packages and add Angular Universal:

```sh
cd angular-ssr
npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader@3.5.0 express
ng generate universal angular-ssr
```

## Create Node Server

Next, you will need to create a server in the root directory of the application. This file will use the Javascript file produced by running npm run build:ssr using the server application configured in the .angular-cli.json file. It is then applied to the index.html page. Create a server.ts file in the root directory of your project and add the following code:

[server.ts](https://github.com/salsabeeljamal/angular5-ngrx-ssr-starter/blob/master/server.ts)






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
