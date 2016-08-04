console.log('info.js loaded')

// This is an example of the simplest possible App
// one that render straight from html
//
// A more comon design would be to assemble a dom element
// and then pass it as, say sbmApps.render(h)

false||(function(){ // this little trick will have all variables stay local
    var h = ''
    h += '<h3 style="color:maroon">Share it</h3>'
    h += '<p style="color:navy"><a href="http://sbm-it.github.io/apps" target="_blank"><img width="'+(sbmApps.iconWidth*2)+'" src="img/qrcode.png"></a><br> and then add page to home screen.'
    h += '<h3 style="color:maroon">About</h3>'
    h += '<p style="color:navy">As part of a new "mobile-first" technology development initiative, <a href="http://stonybrookmedicine.edu/" target="_blank">Stony Brook Medicine</a> is developing an experimental App Store. In other words, don\'t take us seriously just yet.</p>'
    h += '<p style="color:navy">This experiment seeks to assess the cross-platform use of HTML5 Apps, very much along the same lines of <a href="http://smarthealthit.org/smart-on-fhir/" target="_blank">SMART</a>. Similarly, this is also an effort to make the most of patient-facing informatics applications using the new <a href="https://www.hl7.org/fhir/summary.html" target="_blank">HL7 FHIR</a>.'
    h += '<h3 style="color:maroon">How to set it in your device</h3>'
    h += '<p style="color:navy">The <i><b>sbmApps</b></i> framework makes use of another technological innovation, this time in Web Technologies: the emergence of WebApp standards supported by Web Browser manufacturers, as described by <a href="http://www.w3.org/2008/webapps/" target="_blank">W3C\'s WebApps Working Group</a>. This mechanism uses the "add to home screen" feature in your browser to assemble a native-looking App if a properly formated manifest is found (which sbmApps includes already). The same application will also be ported to the App stores of Chrome, Android, Apple and Microsoft.</p>'
    h += '<h3 style="color:maroon">Enough talking</h3>'
    h += '<p style="color:navy">Indeed, here\'s a picture showing how this works: <br><img src="https://sbm-it.github.io/apps/img/AddIOS/image006.png"><br> If you are using a iOS device make sure to do this after pointing Safari to <a href="https://sbm-it.github.io/apps" target="_blank">sbm-it.github.io/apps</a>. </p>'
    sbmApps.render(h)
})()  
