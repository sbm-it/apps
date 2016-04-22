console.log('info.js loaded')
false||(function(){ // this little trick will have all variables stay local
    var h = ''
    h += '<style>p { text-indent: 50px; }</style>'
    h += '<div class="container">'
    h += '<h3 style="color:maroon">Install It</h3>'
    h += '<p>'
    h += '<a href="http://sbm-it.github.io/apps/AddAndroidHomeScreen.html" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/android.png"></a>'
    h += '<a href="http://sbm-it.github.io/apps/AddIOSHomeScreen.html" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/apple.png"></a></p>'
    h += '<h3 style="color:maroon">Use It</h3>'
    h += '<p style="color:navy">Public apps are available to everyone</p>'
    h += '<p style="color:navy">Private apps are not freely available.  You will need a key to access each private app.</p>'
    h += '<p style="color:navy">The icon in the top left corner will always take you back to the main app screen.</p>'
    h += '<p><img width="'+(sbmApps.iconWidth*2)+'" src="img/homeicon.png"></p>'
    h += '<h3 style="color:maroon">Share It</h3>'
    h += '<p><a href="http://sbm-it.github.io/apps" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/qrcode.png"></a><br>'
    h += '<h3 style="color:maroon">About</h3>'
    h += '<p style="color:navy">As part of a new "mobile-first" technology development initiative, <a href="http://stonybrookmedicine.edu/" target="_blank">Stony Brook Medicine</a> is developing an App Store.</p>'
    h += '<p style="color:navy">We seek to assess the cross-platform use of HTML5 Apps, very much along the same lines of <a href="http://smarthealthit.org/smart-on-fhir/" target="_blank">SMART</a>. Similarly, this is also an effort to make the most of patient-facing informatics applications using the new <a href="https://www.hl7.org/fhir/summary.html" target="_blank">HL7 FHIR</a>.'
    h += '<p style="color:navy">The <i><b>sbmApps</b></i> framework makes use of another technological innovation, this time in Web Technologies: the emergence of WebApp standards supported by Web Browser manufacturers, as described by <a href="http://www.w3.org/2008/webapps/" target="_blank">W3C\'s WebApps Working Group</a>. This mechanism uses the "add to home screen" feature in your browser to assemble a native-looking App if a properly formated manifest is found (which sbmApps includes already). The same application will also be ported to the App stores of Chrome, Android, Apple and Microsoft.</p>'
    h += '</div>'
    sbmApps.render(h)
})()
