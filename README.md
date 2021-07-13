# Receipt Project

## Set up

Requirements:  
Yarn and Node

### Creating HTML stories.

Stories will display full html content inside an iframe for each story.  
[See README file](/wwwroot/public/html).

/Users/ctw/Sites/github/escience/receipt/TerriaMap/wwwroot/public/html/README.md

### Notes

*   **Note 1**: Master Branches for our forks are named 'receipt'.
*   **Note 2**, PM2 causes problems with previous local installations. run `rm -rf ~/.pm2` to clean up or `npx pm2 update`.
*   **Note 3**, when changing branches: If you encounter problems you may need to sync branches between TerriaMap and TerriaJs You should run `gulp sync-terriajs-dependencies`, then re-run `npm install`, then run gulp again.
*   **Note 4**, If the map doesn't load, you may have to clear your browser cache, cookies and other site data. (Only clearing the cache is not enough!)
*   **Note 5**, use prettier while formatting your code and set it up to prettify on 'file save'
*   **Note 6 - Updating Terria**: When updating terriajs you need to `gulp sync-terriajs-dependencies`

### Steps:

```
git clone --recurse-submodules https://github.com/RECEIPT-H2020/TerriaMap.git
cd TerriaMap
yarn install
npx gulp
```

## Run locally

from TerriaMaps folder:

```
yarn serve
open browser on localhost:3001
```

Loading stories from URL params:

```
http://localhost:3001/?story=1&microstory=1
```

When running locally the stories will be retrieved from localhost:3001/public/html/stories folder

## Stop PM2 instances running locally

```
yarn stop
```

#### Manual deploy

The deploy pipeline runs when pushing to the release branch (master on 'receipt').

```
npx gulp release
```

#### Update submodules (Git pull recursively)

```
git submodule update --init --recursive
```

## Cesium access token

You can create a new token at https://cesium.com/ion or use the temporary token:

`TerriaMap > wwwroot > config.json`

inside the parameters object:

`cesiumIonAccessToken: <ACCESS_TOKEN>`


## Creating releases:
At to this point the releases are created manually from github. 

## Set up amplify

Make sure the amplify cli is installed:
```
npm install -g @aws-amplify/cli
```

Get an access key (id + secret) from the AWS IAM dashboard (IAM > Access management > Users > Select user > Security credentials tab > Access keys > Create access key button).  In the packages/terriajs folder, execute `amplify pull` and enter the following values when asked:
```
cd packages/terriajs
amplify pull
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  eu-central-1
? Which app are you working on? <select the receipt project>
Backend environment 'dev' found. Initializing...
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  lib
? Distribution Directory Path: wwwroot/build
? Build Command:  npx gulp
? Start Command: yarn start
? Do you plan on modifying this backend? Yes
```
