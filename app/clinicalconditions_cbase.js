$.getJSON("https://sbm-it.github.io/ClinicalCondition/manifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('CBase Clinical Conditions App')
})
