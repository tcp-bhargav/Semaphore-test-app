
# example-client Application
This example-client is a demonstration of the CMIS widget within a simple web application.

## Description
To demonstrate the CMIS widget, this example-client instantiates a locally deployed CMIS widget.
This will reference a WIDGET_APP_URL in which the CMIS is to be deployed. Example configurations are supplied 
for specifying which Knowledge Model Management(KMM), Classification(DA) and Semantic Integration Service(SIS) endpoints.

## Getting Started
### Dependencies
* A deployed/hosted CMIS widget.
* Node (version 16.14.x) and NPM (version 8.19.x) . 

### Installing
Install with [npm](https://www.npmjs.com/):
```sh
$ npm install
```

### Executing
Execute with:
```sh
$ npm start
```

This prompts the start of an express server with live reloading which will be available on "http://localhost:5001" (Edit example-client/config/client.js to change default settings).

### Configuration
Config files are stored in config directory:

- `client.js` - url, port for example-client app
- `studio.remote.js` - SIS, DA, KMM api paths, studio api key for remotely deployed studio
- `studio.cloud.js` - SIS, DA, KMM api paths, authentication data for studio in cloud
- `studio.local.js` - SIS, DA, KMM api paths, studio api key for local studio deployment
- `widget.js` - configuration for widget fields

By default config/studio.local.js configuration file is used. Path to studio config file can be changed in app-cache.js:

```js
const widgetConfig = require("./config/widget.js");
const studioConfig = require("./config/studio.local.js");
```

Other studio.*.js config files are examples how to configure client app for different studio deployments.

  
