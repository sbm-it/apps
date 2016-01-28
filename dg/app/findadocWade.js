console.log('loaded findadocWade.js')

// clean appSpace
appSpace.innerHTML="loading Wade's find-a-doc App"

//inclusive boundary solution: loading HTML straight into element
//$("#clinApps").load("https://sbmedxdev.uhmc.sunysb.edu/directory");

// trying inline loading first
//appSpace.innerHTML='<iframe src="https://sbmedxdev.uhmc.sunysb.edu/directory" frameborder=0 width="100%" height="'+window.innerHeight+'" ></iframe>'
//sbmStoreHead.style.visibility='hidden'
//sbmAppHead.style.visibility='hidden'

// and finally the other boundary solution - redirect ()
location.href="https://sbmedxdev.uhmc.sunysb.edu/directory?sbmApp=true"
