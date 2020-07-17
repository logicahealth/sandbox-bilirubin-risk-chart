# HSPC Bilirubin Risk Chart

## Setup

HSPC Bilirubin Risk Chart is hosted as a static web app.

## Prerequisites

````
sudo apt-get update
sudo apt-get install npm
sudo apt-get install nodejs
````

## Hosting

````
./run_local.sh
````
Learn about the features of the app at:

* client_uri: http://localhost:8086/index.html

The app contains dynamic registration at:

* manifest: http://localhost:8086/.well-known/smart/manifest.json

The app is available for SMART Launch at:

* launch_url: http://localhost:8086/launch.html
* redirect_uri: http://localhost:8086/app.html
* image_url: https://content.logicahealth/images/bilirubin/logo/bilirubin.png

With client id:

* bilirubin_chart