$.getJSON("https://sbm-it.github.io/healthintent/cautiManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted cautiManifest.json')
  })
