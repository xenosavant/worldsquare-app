# Worldsquare Client
[![version][version-badge]][CHANGELOG] [![Build status](https://stellmart.visualstudio.com/StellMart/_apis/build/status/app/app-master)](https://stellmart.visualstudio.com/StellMart/_build/latest?definitionId=6)

## <a name="1"></a>Installing
Requirements:
- At least [.NET Core 2.1.0](https://www.microsoft.com/net/download/core)
- At least _node 6.9_ and _npm 4_
- Angular CLI

#### NPM libraries
```
npm install -g @angular/cli
npm install
```

## <a name="2"></a>Running
#### Starting client via Visual Studio
```
Select kestrel server and click Debug app
```

#### Starting client via Visual Studio Code (or any terminal)
```
npm run start
```
### <a name="3"></a>All Commands
The npm scripts are used to build, watch the client application as required.

#### Watch for development

All available commands are the following:
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "start-ngrok": "ng serve --host 0.0.0.0 --port 5000 --disableHostCheck"
  }
```

[CHANGELOG]: ./CHANGELOG.md
[version-badge]: https://img.shields.io/badge/version-0.0.1-blue.svg