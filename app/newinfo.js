console.log('info.js loaded')

// This is an example of the simplest possible App
// one that render straight from html
//
// A more comon design would be to assemble a dom element
// and then pass it as, say sbmApps.render(h)

false||(function(){ // this little trick will have all variables stay local
    var h = ''
    h += '<div class="container">'
    h += '<h3 style="color:maroon">Install It</h3>'
    h += '<p>'
    h += '<a href="http://sbm-it.github.io/apps/AddAndroidHomeScreen.html" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/android.png"></a>'
    h += '<a href="http://sbm-it.github.io/apps/AddIOSHomeScreen.html" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/apple.png"></a></p>'
    h += '<h3 style="color:maroon">Use It</h3>'
    h += '<p style="color:navy">Public apps are available to everyone</p>'
    h += '<p style="color:navy">Private apps are not freely available.  You will need a key to access each private app.</p>'
    h += '<p style="color:navy">The icon in the top left corner will always take you back to the main app screen.</p>'
    h += '<p align="center"><img width="'+(sbmApps.iconWidth*2)+'" src="img/homeicon.png"></p>'
    h += '<h3 style="color:maroon">Share It</h3>'
    h += '<p align="center"><a href="http://sbm-it.github.io/apps" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/qrcode.png"></a><br>'
    h += '<p style="color:navy"></p>'
    h += '<p style="color:navy"></p>'
    h += '</div>'
console.log(h);
    sbmApps.render(h)
})()
