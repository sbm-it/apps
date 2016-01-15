# sbmApps

Experimental app store for Web Applications at Stony Brook Medicine, Stony Brook University (SUNY) Academic Medical Center in Long Island, NY.

live at https://sbm-it.github.io/apps,

___

#### Developing an sbmApp

To develop your own Stony Brook Medicine App (sbmApp), you’ll need to take two basic steps. The first is to register your application in the [apps.json](https://github.com/sbm-it/apps/blob/gh-pages/app/apps.json) manifest, and the second is to include the following script in your new App.


```javascript

<script src=“http://sbm-it.github.io/apps/sbmApps.js”>lala</script>

```

This script loads an object, **sbmApps**, that provides a number of functionalities that will come handy, particularly if you are using the App store template by targeting the **appSpace** div to assemble your user interface. This object was designed specifically to stay out of the way, regardless of your programming style or framework. On the contrary, its development will largely be the response to requests for support of store-wide requests that can range from support for loading data from specific sources to support for a recommendation/feedback functionality where users rate the apps they use. In other words, this small object will otherwise stay quiet in the corner waiting to be needed.


#### Invoking an sbmApp ####

If properly configured (see above) your sbmApp will appear in the home panel of the [sbm app store](https://sbm-it.github.io/apps) where the user can select it. There will however be scenarios where you want to provide users with links that go straight to your app without going through the store. This automatic redirection can be achieved by placing the URL of the app in the hashtag of the app store, for example https://sbm-it.github.io/apps#app/info.js. The address in the hashtag can be a absolute or a relative path to the app. There is also a convenient shortcut, if your app script is located in the /app folder, which is also the preferred development scenario. This is the case of the info app: http://sbm-it.github.io/apps/app/info.js. In that case, you can direct users straight to this app by simply using the name of the script file without the “.js” suffix, i.e. https://sbm-it.github.io/apps#info.


#### Secret apps ####

You probably guessed it already - if you develop and app but do not register it in the [apps.json](https://github.com/sbm-it/apps/blob/gh-pages/app/apps.json) manifest your app is secret: only those to whom you provide the link with the hashtag identifier will be able to find it.


