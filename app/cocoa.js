$.getJSON("https://xinwang3.github.io/darkChocolateSurvey/sbmManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted app manifest about cocoa favorites')
  })
