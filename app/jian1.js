$.getJSON("https://jiansom.github.io/FirstApp/jianManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted manifest for Jiang Hong first app jianManifest.json')
  })
