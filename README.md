[![PayPal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ER9U5FD7ZKX72)

# Oauth Example for Ionic Framework

This example will demonstrate how to use ngCordova to authenticate with various oauth providers and retrieve
an access token for use with their API.

## Requirements

* Apache Cordova 3.5+
* Apache Cordova Whitelist Plugin
* Apache Cordova InAppBrowser Plugin
* Apache Cordova Keyboard Plugin
* Apache Cordova Statusbar Plugin

## Configuration

Download this example project from GitHub and run the following commands:

```
$ ionic platform add android
$ cordova plugin add org.apache.cordova.inappbrowser
$ cordova plugin add cordova-plugin-whitelist
$ cordova plugin add cordova-plugin-keyboard
$ cordova plugin add cordova-plugin-statusbar
```

The above commands will add the Android build platform and install the required Apache InAppBrowser plugin.

This example application requires you to have your own provider application registered with whatever provider you choose to use.  Doing so will give you a unique client id that can be included into your project.  When registering your application with an oauth provider, make sure to set the callback uri to **http://localhost/callback**, otherwise ngCordova will not function.

With the client id and information in hand, open **www/js/app.js** and add where appropriate.

## Usage

With this example project configured on your computer, run the following from the Terminal or command prompt:

```
$ ionic build android
```

Install the application binary to your device or simulator.

## Have a question or found a bug (compliments work too)?

Tweet me on Twitter - [@nraboy](https://www.twitter.com/nraboy)

## Resources

Ionic Framework - [http://www.ionicframework.com](http://www.ionicframework.com)

AngularJS - [http://www.angularjs.org](http://www.angularjs.org)

Apache Cordova - [http://cordova.apache.org](http://cordova.apache.org)

ngCordova - [http://www.ngcordova.com](http://www.ngcordova.com)

Nic Raboy's Code Blog - [https://blog.nraboy.com](https://blog.nraboy.com)
