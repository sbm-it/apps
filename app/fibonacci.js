$.getJSON("https://sbm-it.github.io/fibonacci/sbmManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
  })