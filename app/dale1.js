$.getJSON("https://hscvw01.informatics.stonybrook.edu/dev/apps/sbmManifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted Dale\'s first app, declared with a sbmManifest.json')
  })
