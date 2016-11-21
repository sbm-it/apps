$.getJSON("https://sbm-it.github.io/ClinicalSkills/manifest.json")
.then(function(x){
  sbmApps.insertApp(x);
  console.log('CBase Clinical Skills App');
})
