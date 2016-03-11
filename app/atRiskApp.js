console.log('atRiskApp.js loaded')

sbmApps.app.atRisk=(function(){
    //console.log('assembling atRiskApp UI')
    //sbmApps.render('hello world :-)')
    var h = '<div class="tableauPlaceholder" id="tableauDiv" style="width: 1304px; height: 836px;"><object class="tableauViz" width="1304" height="836" style="display:none;"><param name="host_url" value="https%3A%2F%2Fdiscovery.analytics.healtheintent.com%2F" /> <param name="site_root" value="&#47;t&#47;SBMCIN" /><param name="name" value="CAUTI&#47;Dashboard" /><param name="tabs" value="no" /><param name="toolbar" value="yes" /><param name="showVizHome" value="n" /><param name="showShareOptions" value="true" /></object></div>'
    sbmApps.render(h)
    $.getScript('https://discovery.analytics.healtheintent.com/javascripts/api/viz_v1.js')
    return true
})()
