$.getJSON("https://sbm-it.github.io/RichApp/manifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted RichApp manifest.json')
  })
