console.log('info.js loaded')

// This is an example of the simplest possible App
// one that render straight from html
//
// A more comon design would be to assemble a dom element
// and then pass it as, say sbmApps.render(h)

false||(function(){ // this little trick will have all variables stay local
    var h = ''
    h += '<h3 style="color:maroon">Share It</h3>'
    h += '<p style="color:navy"><a href="http://sbm-it.github.io/apps" target="_blank"><img width="'+(sbmApps.iconWidth)+'" src="img/qrcode.png"></a><br>'
    h += '<h3 style="color:maroon">Install It</h3>'
    h += '<p style="color:navy"><a href="http://sbm-it.github.io/apps/AddAndroidHomeScreen.html"><img width="'+(sbmApps.iconWidth*2)+'" src="img/android.png"></a>'
    h += '<a href="http://sbm-it.github.io/apps/AddIOSHomeScreen.html"><img width="'+(sbmApps.iconWidth)+'" src="img/apple.png"></a><br>'
    h += '<h3 style="color:maroon">Using It</h3>'
    h += '<p style="color:navy">Public apps are available to everyone</p>'
    h += '<p style="color:navy">Private apps are not freely available.  You will need a key to access each private app.</p>'
    h += '<p style="color:navy">The icon in the top left corner will always take you back to the main app screen.</p>'
    h += '<p style="color:navy"><img width="'+(sbmApps.iconWidth)+'" src="img/homeicon.png"></p>'
    h += '<p style="color:navy"></p>'
    h += '<p style="color:navy"></p>'
    sbmApps.render(h)
})()
