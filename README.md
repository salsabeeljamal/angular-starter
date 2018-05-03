# server-side rendering and redux for Angular 5+ 

### Quick start

```bash
# clone our repo
git clone https://github.com/salsabeeljamal/angular5-ngrx-ssr-starter

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