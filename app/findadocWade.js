console.log('loaded findadocWade.js')

// clean appSpace
appSpace.innerHTML="loading Wade's find-a-doc App"


//loading Angular first
$.getScript('https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js')
 .then(function(){
     console.log('Angular is ready :-)')
     $('<p style="color:blue">Angular is loaded :-) !</p>').appendTo(appSpace)
 })