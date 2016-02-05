console.log('sbmApps.js loaded')

sbmApps= function(){
    // ini
    sbmApps.loadApps()
    //sbmApps.msg('loading apps ...')
    //imgStoreHead.style.width=sbmApps.iconWidth
    imgStoreHead.style.verticalAlign="bottom"
    sbmApps.getHash()
    sbmApps.enableResearch()
    //sbmAppsHead2.hidden=true
    //sbmAppsMsg.hidden=true
}
sbmApps.app={} // place to store app specific material 

// plain message writter
sbmApps.msg=function(txt,clr,t){
    sbmAppsMsg.style.height=''
    if(!txt){txt=''}
    if(!clr){clr='maroon'}
    sbmAppsMsg.style.color=clr
    sbmAppsMsg.innerHTML='&nbsp;&nbsp;&nbsp;'+txt
    !t||setTimeout(sbmApps.msg,t)
    if(txt.length==0){sbmAppsMsg.style.height=0}
    return sbmAppsMsg
}

// this one is important: assemble an app passed in as a DOM element, or as html
sbmApps.render=function(div){
   appSpace.innerHTML=''
   if(typeof(div)=='string'){ // if the html is being passed in
       appSpace.innerHTML=div
   }else{ // if we're getting the DOM element
       appSpace.appendChild(div)
   }
   return appSpace
}

sbmApps.iconWidth=Math.min(100,Math.round(window.innerWidth/3.8))

// assemble an app UI
sbmApps.assembleApp=function(x){
    var img = document.createElement('img')
    //lala = img
    img.style.borderRadius="10px"
    img.style.boxShadow="0px 0px 8px grey"
    img.style.margin="6px"
    appSpace.appendChild(img)
    img.src=x.icon
    img.width=sbmApps.iconWidth
    //img.width="20%"
    img.onclick=function(){
        sbmApps.getScript(x.onclick)
        imgStoreHead.src = x.icon
        imgStoreHeadTD.innerHTML='<h3 style="color:maroon">'+x.name+'</h3><span style="color:maroon">'+x.description+'</span>'
        imgStoreHead.onclick=function(){
            document.location.href='http://localhost:8080/apps/'
            //document.location.href="https://sbm-it.github.io/apps/"
        }

        
        //$.getScript(x.onclick)
        //sbmApps.msg(x.description,'blue',1000)
        //sbmAppsHead2.hidden=false
        //sbmAppsHead.hidden=true
    }

}

// load apps
sbmApps.loadApps=function(){
    //if(document.getElementById('msgIcon')){
    msgIcon.className="fa fa-home"
    //sbmApps.msg('loading ...','blue',1000)
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
    a.innerHTML='<img id="linkStoreImg" src="https://sbm-it.github.io/apps/dg/app/sbm-red-icon.png" style="box-shadow:0px 0px 8px grey;height:80px;margin:6px;border-radius:18px">'
    var sp = document.createElement('span')
    lnk.appendChild(sp)
    lnk.id="lnkStoreDiv"
    sp.textContent=' SBM App Store'
    sp.style.color='maroon'
    sp.style.fontSize='xx-large'
    var p = document.body.children[0].parentElement
    p.insertBefore(lnk,p.children[0])
    return lnk
}

// function for any application to go back to app store
sbmApps.goHome=function goHome(url) {
    location.href = url || "https://sbm-it.github.io/apps/img/sbmApps.png";
}

sbmApps.enableResearch=function(){
    privateAppsCheck.onchange=function(){
        if(privateAppsCheck.checked){
            privateAppsCheckCode.style.visibility="visible"
            privateAppsCheckCode.value="enter key"
        }else{
            privateAppsCheckCode.style.visibility="hidden"
        }
    }
    privateAppsCheckCode.onclick=function(){
        if(privateAppsCheckCode.value==="enter key"){
            privateAppsCheckCode.value=''
        }
    }

}

// ini
//$( document ).ready(function() {
window.onload=function() {
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
}

// MIS

//done=function(x){console.log('loaded '+x.length)}
