$.getJSON("https://stsak.github.io/testrun1/testrun1.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted fibonacci sbmManifest.json')
  })
