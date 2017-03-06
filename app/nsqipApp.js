console.log('NSQUIP App loaded');

(function(){
    console.log(':-)')
    var h = '<iframe src="http://uhmc-tableau:8000/views/NSQIPDashboard/NSQIPMonitor?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no" width="1000px" height="1000px" frameBorder="0"></iframe>'
    sbmApps.render(h)
})()
