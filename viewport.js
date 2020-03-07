(function(){
  let designW=375
  let devicW=document.documentElement.clientWidth
  let scale=devicW/designW
  document.documentElement.style.fontSize=100*scale+'px'
})()