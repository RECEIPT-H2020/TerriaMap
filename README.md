
# Receipt Project

## Set up
Requirements:
Yarn and Node v10. (V10 its important).

### Notes
- **Note 1**: Master Banches for our forks are named 'receipt'.
- **Note 2**, PM2 causes problems with old installations. run `rm -rf ~/.pm2` to clean up or `npx pm2 update`.
- **Note 3**, when changing branches: If you encouter problems you may need to sync branches between TerriaMap and TerriaJs You should run `gulp sync-terriajs-dependencies`, then re-run `npm install`, then run gulp again.
- **Note 4**, If the map doesn't load, you may have to clear your browser cache, cookies and other site data. (Only clearing the cache is not enough!)
- **Note 5**, use prettier while formatting your code and set it up to prettify on 'file save'
 
### Steps: 
```
git clone https://github.com/RECEIPT-H2020/TerriaMap.git
cd TerriaMap/packages
git clone https://github.com/RECEIPT-H2020/terriajs.git
cd ..
nvm use 10 <- it is necessary to run gulp on node version 10
yarn install
npx gulp
```

 ## Run locally
from TerriaMaps folder:
```
nvm use 10 ## if using nvm locally to ensure you are on nodejs version 10
yarn serve
open browser on localhost:3001
```
## Stop PM2 instances runningn locally
```
yarn stop
```

#### Manual deploy
The deploy pipeline runs when pushing to release branch (master on 'receipt').
```
npx gulp release
```


## Cesium access token  
You can create a new token at https://cesium.com/ion or use the temporary token:
 
```TerriaMap > wwwroot > config.json ```

inside the parameters object: 

```cesiumIonAccessToken: <ACCESS_TOKEN>```


