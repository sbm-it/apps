$.getJSON("https://jaironarias.github.io/testinggapp2/testapp.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted fibonacci sbmManifest.json')
  })
