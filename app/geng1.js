$.getJSON("https://geng-liu.github.io/first-app/myfirstManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('Geng Liu first App')
  })
