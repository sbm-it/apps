
$.getJSON("https://bluestars1.github.io/jonasanacci/jonasanacci.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted fibonacci sbmManifest.json')
  })
