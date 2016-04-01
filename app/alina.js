$.getJSON("https://ajasniew.github.io/crowdsource/ajManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted Alina\'s Crowdsorsing ajManifest.json')
  })
