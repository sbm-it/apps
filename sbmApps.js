console.log('sbmApps.js loaded')

sbmApps= function(){
    // ini
    sbmApps.loadApps()
    //sbmApps.msg('loading apps ...')
    imgStoreHead.style.width=sbmApps.iconWidth
    imgStoreHead.style.verticalAlign="bottom"
    sbmApps.getHash()
    sbmApps.enableResearch()
    //sbmAppsHead2.hidden=true
    //sbmAppsMsg.hidden=true
}
sbmApps.app={} // store app specific material here

// plain message writter
sbmApps.msg=function(txt,clr){
    if(!clr){clr='maroon'}
    sbmAppsMsg.style.color=clr
    sbmAppsMsg.innerHTML=txt
}

sbmApps.iconWidth=Math.min(100,Math.round(window.innerWidth/3.8))

// assemble an app UI
sbmApps.assembleApp=function(x){
    var img = document.createElement('img')
    lala = img
    img.style.borderRadius="20px"
    img.style.boxShadow="0px 0px 8px grey"
    img.style.margin="6px"
    appSpace.appendChild(img)
    img.src=x.icon
    img.width=sbmApps.iconWidth
    //img.width="20%"
    img.onclick=function(){
        sbmApps.getScript(x.onclick)
        //$.getScript(x.onclick)
        sbmApps.msg(x.description,'green')
        //sbmAppsHead2.hidden=false
        //sbmAppsHead.hidden=true
    }

}

// load apps
sbmApps.loadApps=function(){
    //if(document.getElementById('msgIcon')){
    msgIcon.className="fa fa-home"
    sbmApps.msg('SBM App Store')
    appSpace.innerHTML='' // clean it first
    Object.getOwnPropertyNames(sbmApps.manif).forEach(function(a){
        sbmApps.assembleApp(sbmApps.manif[a])
    })
    //}

}

// load jobs
sbmApps.getHash=function(){
    if(location.hash.length>0){
        if(!location.hash.match('.js')){
            location.hash='app/'+location.hash.slice(1)+'.js'  // for example http://sbm-it.github.io/sbmApps/#info
        }
        sbmApps.getScript(location.hash.slice(1))
    }
}

sbmApps.getScript=function(src){ // like $.getScript but loads it into the head
    var s = document.createElement('script')
    s.src=src
    document.head.appendChild(s)
}

sbmApps.localforage=function(uri,fun){ // try localforage first, if it fails, it tries localforage/
    if(!fun){fun=function(x){console.log('locaforaged:',x)}}
    localforage.getItem(uri).then(function(x){
        if(!x){
            $.getJSON('localforage/'+uri+'.json')
             .then(function(x){
                 console.log('loading '+uri+' and caching from localforage/'+uri+'.json')
                 if((typeof(indexedDB)!="undefined")&(!localStorage.sbmAppsNoLocalForage)){
                    localforage.setItem(uri,x)
                     .then(function(x){
                         console.log('saved '+x.length)
                         fun(x)
                      })
                     .catch(function(err){
                         localStorage.setItem('sbmAppsNoLocalForage',true)
                      })
                 }else{
                     console.log('no indexedDB')
                     fun(x)
                 }
            })

        }else{
            console.log('loading '+uri+' from cache')
            fun(x)
        }
    })
}

sbmApps.linkStore=function(){ // add link to store
    var lnk = document.createElement('div')
    var a = document.createElement('a')
    lnk.appendChild(a)
    a.href="https://sbm-it.github.io/apps"
    a.innerHTML='<img id="linkStoreImg" src="https://sbm-it.github.io/apps/dg/app/sbm-red-icon.png" style="box-shadow:0px 0px 8px grey;height:100px;margin:6px;border-radius:10px">'
    var sp = document.createElement('span')
    lnk.appendChild(sp)
    sp.textContent=' SBM App Store'
    sp.style.color='maroon'
    sp.style.fontSize='xx-large'
    var p = document.body.children[0].parentElement
    p.insertBefore(lnk,document.body.children[0])
}

// function for any application to go back to app store
sbmApps.goHome=function goHome(url) {
    location.href = url || "https://sbm-it.github.io/apps/img/sbmApps.png";
}

sbmApps.enableResearch=function(){
    researchAppsCheck.onchange=function(){
        if(researchAppsCheck.checked){
            researchAppsCheckCode.style.visibility="visible"
            researchAppsCheckCode.value="enter key"
        }else{
            researchAppsCheckCode.style.visibility="hidden"
        }
    }
}

// ini
$( document ).ready(function() {
    // load json manifest
    if(location.href.match('^http://localhost:')||location.href.match('^http[s]*://sbm-it.github.io/apps/')){
        if(location.href.match('^http://sbm-it.github.io/apps/')){location.protocol='https:'} // force ssl
        $.getJSON('app/apps.json')
         .then(function(x){
            sbmApps.manif={}
            x.forEach(function(xi,i){
                sbmApps.manif[xi.name]=xi
                //sbmApps.assembleApp(xi)
            })
            //sbmApps.msg('SBM appstore','green')
            sbmStoreHead.hidden=false
            sbmApps() // <-- it all starts here
        })
    }
})

// MIS

//done=function(x){console.log('loaded '+x.length)}
