$.getJSON("https://sbm-it.github.io/fibonacci/sbmManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted fibonacci sbmManifest.json')
  })