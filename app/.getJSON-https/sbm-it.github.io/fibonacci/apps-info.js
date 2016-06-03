$.getJSON("https://sbm-it.github.io/apps-info/apps-info.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted apps-info apps-info.json')
  })
