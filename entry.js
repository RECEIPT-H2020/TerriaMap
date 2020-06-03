const globeGif = require('./lib/Styles/loader.gif');
require('./lib/Styles/loader.css');

function loadMainScript() {
    // load the main chunk
    return new Promise((resolve, reject) => {
        require.ensure(['./index'], function(require) {
            resolve(require('./index'));
        }, function(error) {
            reject(error);
        }, 'index');
    });
}

function createLoader() {
    const loaderDiv = document.createElement('div');
    loaderDiv.classList.add("loader-ui");
    const loaderGif = document.createElement('img');
    loaderGif.src = globeGif;
    loaderGif.classList.add('loader-gif');
    const loaderLeft = document.createElement('div');
    loaderLeft.classList.add("loader-ui-left");
    const loaderGrabber = document.createElement('div');
    loaderGrabber.classList.add('loader-ui-grabber');
    const loaderRight = document.createElement('div');
    loaderRight.classList.add("loader-ui-right");
    loaderRight.append(loaderGif);

    loaderDiv.append(loaderLeft);
    loaderDiv.append(loaderRight);
    loaderDiv.append(loaderGrabber);
    loaderDiv.style.backgroundColor ='#DEDEDF';
    document.body.appendChild(loaderDiv);

    loadMainScript().catch(() => {
        // Ignore errors and try to show the map anyway
    }).then(() => {
        loaderDiv.classList.add('loader-ui-hide');
        setTimeout(()=> {
            document.body.removeChild(loaderDiv);
        }, 0);
    });
}

createLoader();


