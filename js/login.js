$(document).ready(function(){

  // 뒤로가기 버튼 _______________

  $(".back ul").hover(function(){
    $(this).stop().css({"background":"rgb(236, 236, 236)","transition":"all 0.3s"});
  },function(){
    $(this).stop().css({"background":"none","transitino":"all 0.3s"});
  });



});