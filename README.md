# server-side rendering and redux for Angular 5+ 

### Quick start

```bash
# clone our repo
git clone git@github.com:salsabeeljamal/angular-starter.git

# change directory to our repo
cd angular5-ngrx-ssr-starter

# install the repo with npm
npm install
#or
yarn install

# start the server
npm run ssr

```
#How to configure SSR and Redux

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

And

The server.ts file needs a webpack configuration to generate the Javascript file to run on the server. Create a webpack.server.config.js file in the root directory of your application and add the following code:

[webpack.server.config.js](https://github.com/salsabeeljamal/angular5-ngrx-ssr-starter/blob/master/webpack.server.config.js)

To your package.json file, add the following commands to your scripts array:

```sh
"build:ssr": "npm run build:client-and-server-bundles && npm run webpack:server",
"serve:ssr": "node dist/server.js",
"build:client-and-server-bundles": "ng build --prod && ng build --prod --app 1 --output-hashing=false",
"webpack:server": "webpack --config webpack.server.config.js --progress --colors"
```

First run npm run build:ssr and when that is completed, run npm run serve:ssr. Your application should be served on localhost:4201.

Let’s use the TransferState service in our application. In app.module.ts, import the BrowserTransferStateModule:

```sh
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
imports: [
  BrowserModule.withServerTransition({appId: 'my-app'}),
  BrowserTransferStateModule,
  ...
]
```

In app.server.module.ts, import the ServerTransferStateModule:

```sh
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
imports: [
  AppModule,
  ServerModule,
  ServerTransferStateModule,
  ...
]
```

## SET UP Reducer
Install your dependencies first:

```sh
npm i -S @ngrx/store @ngrx/store-devtools @ngrx/entity @ngrx/effects
npm i -D @ngrx/schematics
```

Notice that we are booping around with @ngrx/schematics; they will get our state up and running without writing boilerplate.

Now run the following to make @ngrx/schematics your default collection (optional):

```sh
ng set defaults.schematics.collection=@ngrx/schematics
```

Then run the following two lines to stub your State and an Effect:

```sh
ng generate store State --root --module app.module.ts
ng generate effect Post --root --module app.module.ts
```