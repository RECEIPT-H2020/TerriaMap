
# Receipt Project

## Set up
Requirements:
Yarn and Node


### Creating HTML stories. 
Stories will display full html content inside an iframe for each story.
[See README file](/wwwroot/public/html/README.md). 

/Users/ctw/Sites/github/escience/receipt/TerriaMap/wwwroot/public/html/README.md

### Notes
- **Note 1**: Master Banches for our forks are named 'receipt'.
- **Note 2**, PM2 causes problems with old installations. run `rm -rf ~/.pm2` to clean up or `npx pm2 update`.
- **Note 3**, when changing branches: If you encouter problems you may need to sync branches between TerriaMap and TerriaJs You should run `gulp sync-terriajs-dependencies`, then re-run `npm install`, then run gulp again.
- **Note 4**, If the map doesn't load, you may have to clear your browser cache, cookies and other site data. (Only clearing the cache is not enough!)
- **Note 5**, use prettier while formatting your code and set it up to prettify on 'file save'
- **Note 6 - Updating terrija**: When updating terriajs you need to `gulp sync-terriajs-dependencies`

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
The deploy pipeline runs when pushing to release branch (master on 'receipt').
```
npx gulp release
```
#### Update submodules (Git pull recursively)
```
git submodule update --init --recursive
```


## Cesium access token
You can create a new token at https://cesium.com/ion or use the temporary token:

```TerriaMap > wwwroot > config.json ```

inside the parameters object:

```cesiumIonAccessToken: <ACCESS_TOKEN>```


