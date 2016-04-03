$.getJSON("https://sbm-it.github.io/zprototype/sbmManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted app zprototype')
  })
