$(document).ready(function(){


	 // 탑버튼 ____________________________________

	/* Top 버튼 */

	$("#topBtn").click(function(){
		$("html,body").animate({scrollTop:"0"});
	});

	// 상담하기 버튼 __________________________________

	$("#phoneBtn").hover(function(){
		$("#phoneBtn .phoneBtn_box").css({"width":"160px","border-radius":"35px","transition":"all 0.3s"});
		$("#phoneBtn .phoneBtn_box a .phone_hover").css({"display":"inline-block"});
	},function(){
		$("#phoneBtn .phoneBtn_box").css({"width":"70px","border-radius":"50%"});
		$("#phoneBtn .phoneBtn_box a .phone_hover").css({"display":"none"});
	});

	// Top 버튼, 상담하기 버튼 스크롤 ____________________

	$("#topBtn, #phoneBtn").hide();

	$(window).scroll(function(){

		if($(this).scrollTop()>300){
			$("#topBtn, #phoneBtn").fadeIn();
		}else{
			$("#topBtn, #phoneBtn").fadeOut();
		}
	});

	// 탑메뉴 오버 아웃 _________________________________

	/* 마우스 오버와 아웃 */
	$(".topmenu>ul>li").mouseenter(function(){
    $(".topmenu>ul>li ul").hide();
    $(this).find(">ul").stop().slideDown();
    $(".bg_box").stop().slideDown();
  });

  $("header").mouseleave(function(){
    $(".topmenu>ul>li ul").hide();
    $(this).find(">ul").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

	// 좌측 leftBanner 고정배너 LeftRight________________

	chk2=true;
  
	$(".leftBanner .shapeLeft").click(function(){
	
		if(chk2){
			$(".shapeLeft").html("<span class='material-symbols-outlined left'>keyboard_arrow_right</span>");
			$(".leftBanner").stop().animate({left:"-100px"},500);
			chk2=false;
		}else{
			$(".shapeLeft").html("<span class='material-symbols-outlined left'>keyboard_arrow_left</span>");
			$(".leftBanner").stop().animate({left:"0px"},500);
			chk2=true;
		}
	});

	// communityEvent __________________________________

	 /* 탭메뉴 클릭 ___________ */

	 $(".panel>li:not(:first)").hide();
 
	 $(".tab>li").click(function(){
		 
		 $(".tab>li").removeClass("selected");
		 $(this).addClass("selected");
		 $(".panel>li").hide();
		 $($(this).find("a").attr("href")).show();
	});

	// communityEvent_4 _________________________________

	/* 앱설치 불가 */
	$(".E_4image a:nth-of-type(3), .E_4image a:nth-of-type(5)").click(function(){
		alert("닥터독 앱은 모바일 기기에서만 이용할 수 있습니다.")
	});

	
});