$.getJSON("https://jbalsamo.github.io/myw4b2017/w4b17mani.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log("inserted Joe's Manifest.json")
  })
