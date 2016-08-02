$.getJSON("https://sbm-it.github.io/CourseInfo/manifest.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('CBase Course Information App')
})
