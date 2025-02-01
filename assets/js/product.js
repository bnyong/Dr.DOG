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

	// popup ________________________________________

	$("#popups>div>div>div>div>.button").click(function(){
		alert("죄송합니다. 지금은 구매하실 수 없습니다.")
	})
	
	/* 클릭시 팝업창 띄우기 product_1 */
	$("#P1sec_tab1 .P1sec_tab1_1>div>img:first-child, #P1sec_tab1 ul li .tab1_1p").click(function(){
		$("#popup1_1").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_2>div>img:first-child, #P1sec_tab1 ul li .tab1_2p").click(function(){
		$("#popup1_2").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_3>div>img:first-child, #P1sec_tab1 ul li .tab1_3p").click(function(){
		$("#popup1_3").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_4>div>img:first-child, #P1sec_tab1 ul li .tab1_4p").click(function(){
		$("#popup1_4").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_5>div>img:first-child, #P1sec_tab1 ul li .tab1_5p").click(function(){
		$("#popup1_5").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_6>div>img:first-child, #P1sec_tab1 ul li .tab1_6p").click(function(){
		$("#popup1_6").addClass("active");
	});
	$("#P1sec_tab1 .P1sec_tab1_7>div>img:first-child, #P1sec_tab1 ul li .tab1_7p").click(function(){
		$("#popup1_7").addClass("active");
	});

	$("#P1sec_tab2 .P1sec_tab2_1>div>img:first-child, #P1sec_tab2 ul li .tab2_1p").click(function(){
		$("#popup2_1").addClass("active");
	});
	$("#P1sec_tab2 .P1sec_tab2_2>div>img:first-child, #P1sec_tab2 ul li .tab2_2p").click(function(){
		$("#popup2_2").addClass("active");
	});
	$("#P1sec_tab2 .P1sec_tab2_3>div>img:first-child, #P1sec_tab2 ul li .tab2_3p").click(function(){
		$("#popup2_3").addClass("active");
	});
	$("#P1sec_tab2 .P1sec_tab2_4>div>img:first-child, #P1sec_tab2 ul li .tab2_4p").click(function(){
		$("#popup2_4").addClass("active");
	});

	$("#P1sec_tab3 .P1sec_tab3_1>div>img:first-child, #P1sec_tab3 ul li .tab3_1p").click(function(){
		$("#popup3_1").addClass("active");
	});
	$("#P1sec_tab3 .P1sec_tab3_2>div>img:first-child, #P1sec_tab3 ul li .tab3_2p").click(function(){
		$("#popup3_2").addClass("active");
	});

	$("#P1sec_tab4 .P1sec_tab4_1>div>img:first-child, #P1sec_tab4 ul li .tab4_1p").click(function(){
		$("#popup4_1").addClass("active");
	});
	
	/* Close product_1 */
	$("#popup1_1>div>div>.closebtn").click(function(){
		$("#popup1_1").removeClass("active");
	});
	$("#popup1_2>div>div>.closebtn").click(function(){
		$("#popup1_2").removeClass("active");
	});
	$("#popup1_3>div>div>.closebtn").click(function(){
		$("#popup1_3").removeClass("active");
	});
	$("#popup1_4>div>div>.closebtn").click(function(){
		$("#popup1_4").removeClass("active");
	});
	$("#popup1_5>div>div>.closebtn").click(function(){
		$("#popup1_5").removeClass("active");
	});
	$("#popup1_6>div>div>.closebtn").click(function(){
		$("#popup1_6").removeClass("active");
	});
	$("#popup1_7>div>div>.closebtn").click(function(){
		$("#popup1_7").removeClass("active");
	});

	$("#popup2_1>div>div>.closebtn").click(function(){
		$("#popup2_1").removeClass("active");
	});
	$("#popup2_2>div>div>.closebtn").click(function(){
		$("#popup2_2").removeClass("active");
	});
	$("#popup2_3>div>div>.closebtn").click(function(){
		$("#popup2_3").removeClass("active");
	});
	$("#popup2_4>div>div>.closebtn").click(function(){
		$("#popup2_4").removeClass("active");
	});

	$("#popup3_1>div>div>.closebtn").click(function(){
		$("#popup3_1").removeClass("active");
	});
	$("#popup3_2>div>div>.closebtn").click(function(){
		$("#popup3_2").removeClass("active");
	});

	$("#popup4_1>div>div>.closebtn").click(function(){
		$("#popup4_1").removeClass("active");
	});

	/* 클릭시 팝업창 띄우기 product_2 */
	$("#P2sec_tab1 .P2sec_tab1_1>div>img:first-child, #P2sec_tab1 ul li .tab1_1p").click(function(){
		$("#pop2up1_1").addClass("active");
	});
	$("#P2sec_tab1 .P2sec_tab1_2>div>img:first-child, #P2sec_tab1 ul li .tab1_2p").click(function(){
		$("#pop2up1_2").addClass("active");
	});
	$("#P2sec_tab1 .P2sec_tab1_3>div>img:first-child, #P2sec_tab1 ul li .tab1_3p").click(function(){
		$("#pop2up1_3").addClass("active");
	});
	$("#P2sec_tab1 .P2sec_tab1_4>div>img:first-child, #P2sec_tab1 ul li .tab1_4p").click(function(){
		$("#pop2up1_4").addClass("active");
	});
	$("#P2sec_tab1 .P2sec_tab1_5>div>img:first-child, #P2sec_tab1 ul li .tab1_5p").click(function(){
		$("#pop2up1_5").addClass("active");
	});
	
	/* Close product_2 */
	$("#pop2up1_1>div>div>.closebtn").click(function(){
		$("#pop2up1_1").removeClass("active");
	});
	$("#pop2up1_2>div>div>.closebtn").click(function(){
		$("#pop2up1_2").removeClass("active");
	});
	$("#pop2up1_3>div>div>.closebtn").click(function(){
		$("#pop2up1_3").removeClass("active");
	});
	$("#pop2up1_4>div>div>.closebtn").click(function(){
		$("#pop2up1_4").removeClass("active");
	});
	$("#pop2up1_5>div>div>.closebtn").click(function(){
		$("#pop2up1_5").removeClass("active");
	});

	/* 클릭시 팝업창 띄우기 product_3 */
	$("#P3sec_tab1 .P3sec_tab1_1>div>img:first-child, #P3sec_tab1 ul li .tab1_1p").click(function(){
		$("#pop3up1_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_2>div>img:first-child, #P3sec_tab1 ul li .tab1_2p").click(function(){
		$("#pop3up1_2").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_3>div>img:first-child, #P3sec_tab1 ul li .tab1_3p").click(function(){
		$("#pop3up1_3").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_4>div>img:first-child, #P3sec_tab1 ul li .tab1_4p").click(function(){
		$("#pop3up2_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_5>div>img:first-child, #P3sec_tab1 ul li .tab1_5p").click(function(){
		$("#pop3up2_2").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_6>div>img:first-child, #P3sec_tab1 ul li .tab1_6p").click(function(){
		$("#pop3up3_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_7>div>img:first-child, #P3sec_tab1 ul li .tab1_7p").click(function(){
		$("#pop3up3_2").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_8>div>img:first-child, #P3sec_tab1 ul li .tab1_8p").click(function(){
		$("#pop3up4_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_9>div>img:first-child, #P3sec_tab1 ul li .tab1_9p").click(function(){
		$("#pop3up5_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_10>div>img:first-child, #P3sec_tab1 ul li .tab1_10p").click(function(){
		$("#pop3up5_2").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_11>div>img:first-child, #P3sec_tab1 ul li .tab1_11p").click(function(){
		$("#pop3up6_1").addClass("active");
	});
	$("#P3sec_tab1 .P3sec_tab1_12>div>img:first-child, #P3sec_tab1 ul li .tab1_12p").click(function(){
		$("#pop3up6_2").addClass("active");
	});

	$("#P3sec_tab2 .P3sec_tab2_1>div>img:first-child, #P3sec_tab2 ul li .tab2_1p").click(function(){
		$("#pop3up1_1").addClass("active");
	});
	$("#P3sec_tab2 .P3sec_tab2_2>div>img:first-child, #P3sec_tab2 ul li .tab2_2p").click(function(){
		$("#pop3up1_2").addClass("active");
	});
	$("#P3sec_tab2 .P3sec_tab2_3>div>img:first-child, #P3sec_tab2 ul li .tab2_3p").click(function(){
		$("#pop3up1_3").addClass("active");
	});

	$("#P3sec_tab3 .P3sec_tab3_1>div>img:first-child, #P3sec_tab3 ul li .tab3_1p").click(function(){
		$("#pop3up2_1").addClass("active");
	});
	$("#P3sec_tab3 .P3sec_tab3_2>div>img:first-child, #P3sec_tab3 ul li .tab3_2p").click(function(){
		$("#pop3up2_2").addClass("active");
	});
	$("#P3sec_tab3 .P3sec_tab3_3>div>img:first-child, #P3sec_tab3 ul li .tab3_3p").click(function(){
		$("#pop3up2_3").addClass("active");
	});

	$("#P3sec_tab4 .P3sec_tab4_1>div>img:first-child, #P3sec_tab4 ul li .tab4_1p").click(function(){
		$("#pop3up3_1").addClass("active");
	});
	$("#P3sec_tab4 .P3sec_tab4_2>div>img:first-child, #P3sec_tab4 ul li .tab4_2p").click(function(){
		$("#pop3up3_2").addClass("active");
	});
	$("#P3sec_tab4 .P3sec_tab4_3>div>img:first-child, #P3sec_tab4 ul li .tab4_3p").click(function(){
		$("#pop3up3_3").addClass("active");
	});
	$("#P3sec_tab4 .P3sec_tab4_4>div>img:first-child, #P3sec_tab4 ul li .tab4_4p").click(function(){
		$("#pop3up3_4").addClass("active");
	});

	$("#P3sec_tab5 .P3sec_tab5_1>div>img:first-child, #P3sec_tab5 ul li .tab5_1p").click(function(){
		$("#pop3up4_1").addClass("active");
	});
	$("#P3sec_tab5 .P3sec_tab5_2>div>img:first-child, #P3sec_tab5 ul li .tab5_2p").click(function(){
		$("#pop3up4_2").addClass("active");
	});
	$("#P3sec_tab5 .P3sec_tab5_3>div>img:first-child, #P3sec_tab5 ul li .tab5_3p").click(function(){
		$("#pop3up4_3").addClass("active");
	});
	$("#P3sec_tab5 .P3sec_tab5_4>div>img:first-child, #P3sec_tab5 ul li .tab5_4p").click(function(){
		$("#pop3up4_4").addClass("active");
	});

	$("#P3sec_tab6 .P3sec_tab6_1>div>img:first-child, #P3sec_tab6 ul li .tab6_1p").click(function(){
		$("#pop3up5_1").addClass("active");
	});
	$("#P3sec_tab6 .P3sec_tab6_2>div>img:first-child, #P3sec_tab6 ul li .tab6_2p").click(function(){
		$("#pop3up5_2").addClass("active");
	});
	$("#P3sec_tab6 .P3sec_tab6_3>div>img:first-child, #P3sec_tab6 ul li .tab6_3p").click(function(){
		$("#pop3up5_3").addClass("active");
	});
	$("#P3sec_tab6 .P3sec_tab6_4>div>img:first-child, #P3sec_tab6 ul li .tab6_4p").click(function(){
		$("#pop3up5_4").addClass("active");
	});

	$("#P3sec_tab7 .P3sec_tab7_1>div>img:first-child, #P3sec_tab7 ul li .tab7_1p").click(function(){
		$("#pop3up6_1").addClass("active");
	});
	$("#P3sec_tab7 .P3sec_tab7_2>div>img:first-child, #P3sec_tab7 ul li .tab7_2p").click(function(){
		$("#pop3up6_2").addClass("active");
	});
	$("#P3sec_tab7 .P3sec_tab7_3>div>img:first-child, #P3sec_tab7 ul li .tab7_3p").click(function(){
		$("#pop3up6_3").addClass("active");
	});
	$("#P3sec_tab7 .P3sec_tab7_4>div>img:first-child, #P3sec_tab7 ul li .tab7_4p").click(function(){
		$("#pop3up6_4").addClass("active");
	});

	/* Close product_3 */
	$("#pop3up1_1>div>div>.closebtn").click(function(){
		$("#pop3up1_1").removeClass("active");
	});
	$("#pop3up1_2>div>div>.closebtn").click(function(){
		$("#pop3up1_2").removeClass("active");
	});
	$("#pop3up1_3>div>div>.closebtn").click(function(){
		$("#pop3up1_3").removeClass("active");
	});

	$("#pop3up2_1>div>div>.closebtn").click(function(){
		$("#pop3up2_1").removeClass("active");
	});
	$("#pop3up2_2>div>div>.closebtn").click(function(){
		$("#pop3up2_2").removeClass("active");
	});
	$("#pop3up2_3>div>div>.closebtn").click(function(){
		$("#pop3up2_3").removeClass("active");
	});

	$("#pop3up3_1>div>div>.closebtn").click(function(){
		$("#pop3up3_1").removeClass("active");
	});
	$("#pop3up3_2>div>div>.closebtn").click(function(){
		$("#pop3up3_2").removeClass("active");
	});
	$("#pop3up3_3>div>div>.closebtn").click(function(){
		$("#pop3up3_3").removeClass("active");
	});
	$("#pop3up3_4>div>div>.closebtn").click(function(){
		$("#pop3up3_4").removeClass("active");
	});

	$("#pop3up4_1>div>div>.closebtn").click(function(){
		$("#pop3up4_1").removeClass("active");
	});
	$("#pop3up4_2>div>div>.closebtn").click(function(){
		$("#pop3up4_2").removeClass("active");
	});
	$("#pop3up4_3>div>div>.closebtn").click(function(){
		$("#pop3up4_3").removeClass("active");
	});
	$("#pop3up4_4>div>div>.closebtn").click(function(){
		$("#pop3up4_4").removeClass("active");
	});

	$("#pop3up5_1>div>div>.closebtn").click(function(){
		$("#pop3up5_1").removeClass("active");
	});
	$("#pop3up5_2>div>div>.closebtn").click(function(){
		$("#pop3up5_2").removeClass("active");
	});
	$("#pop3up5_3>div>div>.closebtn").click(function(){
		$("#pop3up5_3").removeClass("active");
	});
	$("#pop3up5_4>div>div>.closebtn").click(function(){
		$("#pop3up5_4").removeClass("active");
	});

	$("#pop3up6_1>div>div>.closebtn").click(function(){
		$("#pop3up6_1").removeClass("active");
	});
	$("#pop3up6_2>div>div>.closebtn").click(function(){
		$("#pop3up6_2").removeClass("active");
	});
	$("#pop3up6_3>div>div>.closebtn").click(function(){
		$("#pop3up6_3").removeClass("active");
	});
	$("#pop3up6_4>div>div>.closebtn").click(function(){
		$("#pop3up6_4").removeClass("active");
	});

	$("#pop3up7_1>div>div>.closebtn").click(function(){
		$("#pop3up7_1").removeClass("active");
	});
	$("#pop3up7_2>div>div>.closebtn").click(function(){
		$("#pop3up7_2").removeClass("active");
	});
	$("#pop3up7_3>div>div>.closebtn").click(function(){
		$("#pop3up7_3").removeClass("active");
	});
	$("#pop3up7_4>div>div>.closebtn").click(function(){
		$("#pop3up7_4").removeClass("active");
	});

	/* 클릭시 팝업창 띄우기 product_4 */
	$("#P4sec_tab1 .P4sec_tab1_1>div>img:first-child, #P4sec_tab1 ul li .tab1_1p").click(function(){
		$("#pop4up1_1").addClass("active");
	});
	$("#P4sec_tab1 .P4sec_tab1_2>div>img:first-child, #P4sec_tab1 ul li .tab1_2p").click(function(){
		$("#pop4up1_2").addClass("active");
	});
	$("#P4sec_tab1 .P4sec_tab1_3>div>img:first-child, #P4sec_tab1 ul li .tab1_3p").click(function(){
		$("#pop4up1_3").addClass("active");
	});
	$("#P4sec_tab1 .P4sec_tab1_4>div>img:first-child, #P4sec_tab1 ul li .tab1_4p").click(function(){
		$("#pop4up1_4").addClass("active");
	});

	$("#P4sec_tab2 .P4sec_tab2_1>div>img:first-child, #P4sec_tab2 ul li .tab2_1p").click(function(){
		$("#pop4up2_1").addClass("active");
	});
	$("#P4sec_tab2 .P4sec_tab2_2>div>img:first-child, #P4sec_tab2 ul li .tab2_2p").click(function(){
		$("#pop4up2_2").addClass("active");
	});
	$("#P4sec_tab2 .P4sec_tab2_3>div>img:first-child, #P4sec_tab2 ul li .tab2_3p").click(function(){
		$("#pop4up2_3").addClass("active");
	});

	$("#P4sec_tab3 .P4sec_tab3_1>div>img:first-child, #P4sec_tab3 ul li .tab3_1p").click(function(){
		$("#pop4up3_1").addClass("active");
	});

	/* Close product_4 */
	$("#pop4up1_1>div>div>.closebtn").click(function(){
		$("#pop4up1_1").removeClass("active");
	});
	$("#pop4up1_2>div>div>.closebtn").click(function(){
		$("#pop4up1_2").removeClass("active");
	});
	$("#pop4up1_3>div>div>.closebtn").click(function(){
		$("#pop4up1_3").removeClass("active");
	});
	$("#pop4up1_4>div>div>.closebtn").click(function(){
		$("#pop4up1_4").removeClass("active");
	});

	$("#pop4up2_1>div>div>.closebtn").click(function(){
		$("#pop4up2_1").removeClass("active");
	});
	$("#pop4up2_2>div>div>.closebtn").click(function(){
		$("#pop4up2_2").removeClass("active");
	});
	$("#pop4up2_3>div>div>.closebtn").click(function(){
		$("#pop4up2_3").removeClass("active");
	});

	$("#pop4up3_1>div>div>.closebtn").click(function(){
		$("#pop4up3_1").removeClass("active");
	});

	/* 클릭시 팝업창 띄우기 product_5 */
	$("#P5sec_tab1 .P5sec_tab1_1>div>img:first-child, #P5sec_tab1 ul li .tab1_1p").click(function(){
		$("#pop5up1_1").addClass("active");
	});
	$("#P5sec_tab1 .P5sec_tab1_2>div>img:first-child, #P5sec_tab1 ul li .tab1_2p").click(function(){
		$("#pop5up1_2").addClass("active");
	});
	$("#P5sec_tab1 .P5sec_tab1_3>div>img:first-child, #P5sec_tab1 ul li .tab1_3p").click(function(){
		$("#pop5up1_3").addClass("active");
	});
	$("#P5sec_tab1 .P5sec_tab1_4>div>img:first-child, #P5sec_tab1 ul li .tab1_4p").click(function(){
		$("#pop5up1_4").addClass("active");
	});

	$("#P5sec_tab2 .P5sec_tab2_1>div>img:first-child, #P5sec_tab2 ul li .tab2_1p").click(function(){
		$("#pop5up2_1").addClass("active");
	});
	$("#P5sec_tab2 .P5sec_tab2_2>div>img:first-child, #P5sec_tab2 ul li .tab2_2p").click(function(){
		$("#pop5up2_2").addClass("active");
	});
	$("#P5sec_tab2 .P5sec_tab2_3>div>img:first-child, #P5sec_tab2 ul li .tab2_3p").click(function(){
		$("#pop5up2_3").addClass("active");
	});

	$("#P5sec_tab3 .P5sec_tab3_1>div>img:first-child, #P5sec_tab3 ul li .tab3_1p").click(function(){
		$("#pop5up3_1").addClass("active");
	});

	/* Close product_5 */
	$("#pop5up1_1>div>div>.closebtn").click(function(){
		$("#pop5up1_1").removeClass("active");
	});
	$("#pop5up1_2>div>div>.closebtn").click(function(){
		$("#pop5up1_2").removeClass("active");
	});
	$("#pop5up1_3>div>div>.closebtn").click(function(){
		$("#pop5up1_3").removeClass("active");
	});
	$("#pop5up1_4>div>div>.closebtn").click(function(){
		$("#pop5up1_4").removeClass("active");
	});

	$("#pop5up2_1>div>div>.closebtn").click(function(){
		$("#pop5up2_1").removeClass("active");
	});
	$("#pop5up2_2>div>div>.closebtn").click(function(){
		$("#pop5up2_2").removeClass("active");
	});
	$("#pop5up2_3>div>div>.closebtn").click(function(){
		$("#pop5up2_3").removeClass("active");
	});

	$("#pop5up3_1>div>div>.closebtn").click(function(){
		$("#pop5up3_1").removeClass("active");
	});

	// product_1 ____________________________________

	/* 탭메뉴 수직 이동 */
	$(".P1sec_tab li").click(function(){

		thval=$(this).index();
		thnum=+70*thval;   /* 세로로 70px씩 증가 */

		$(".P1sec_tab-header .P1sec_tab-highlight").animate({top:thnum});
		$(".P1sec_tab li a").css("color","#000"); /* 탭의 모든 글자색 */
		$(this).find(">a").css("color","#fff"); /* 선택된 탭의 글자색 */

		$(".P1sec_panel>li").hide(); /* 기존 내용 숨기기 */
		$($(this).find(">a").attr("href")).fadeIn(); /* 새로 선택된 내용 href 연결된 내용 보여주기 */
	});

	/* 제품 이미지 오버시 올라오는 창 */
	$(".P1sec_tab1_1").mouseenter(function(){
		$(".P1sec_tab1_1 .P1sec_icons1").slideDown();
	});
	$(".P1sec_tab1_1").mouseleave(function(){
		$(".P1sec_tab1_1 .P1sec_icons1").slideUp();
	});
	$(".P1sec_tab1_2").mouseenter(function(){
		$(".P1sec_tab1_2 .P1sec_icons2").slideDown();
	});
	$(".P1sec_tab1_2").mouseleave(function(){
		$(".P1sec_tab1_2 .P1sec_icons2").slideUp();
	});
	$(".P1sec_tab1_3").mouseenter(function(){
		$(".P1sec_tab1_3 .P1sec_icons3").slideDown();
	});
	$(".P1sec_tab1_3").mouseleave(function(){
		$(".P1sec_tab1_3 .P1sec_icons3").slideUp();
	});
	$(".P1sec_tab1_4").mouseenter(function(){
		$(".P1sec_tab1_4 .P1sec_icons4").slideDown();
	});
	$(".P1sec_tab1_4").mouseleave(function(){
		$(".P1sec_tab1_4 .P1sec_icons4").slideUp();
	});
	$(".P1sec_tab1_5").mouseenter(function(){
		$(".P1sec_tab1_5 .P1sec_icons5").slideDown();
	});
	$(".P1sec_tab1_5").mouseleave(function(){
		$(".P1sec_tab1_5 .P1sec_icons5").slideUp();
	});
	$(".P1sec_tab1_6").mouseenter(function(){
		$(".P1sec_tab1_6 .P1sec_icons6").slideDown();
	});
	$(".P1sec_tab1_6").mouseleave(function(){
		$(".P1sec_tab1_6 .P1sec_icons6").slideUp();
	});
	$(".P1sec_tab1_7").mouseenter(function(){
		$(".P1sec_tab1_7 .P1sec_icons7").slideDown();
	});
	$(".P1sec_tab1_7").mouseleave(function(){
		$(".P1sec_tab1_7 .P1sec_icons7").slideUp();
	});

	$(".P1sec_tab2_1").mouseenter(function(){
		$(".P1sec_tab2_1 .P1sec_icons1").slideDown();
	});
	$(".P1sec_tab2_1").mouseleave(function(){
		$(".P1sec_tab2_1 .P1sec_icons1").slideUp();
	});
	$(".P1sec_tab2_2").mouseenter(function(){
		$(".P1sec_tab2_2 .P1sec_icons2").slideDown();
	});
	$(".P1sec_tab2_2").mouseleave(function(){
		$(".P1sec_tab2_2 .P1sec_icons2").slideUp();
	});
	$(".P1sec_tab2_3").mouseenter(function(){
		$(".P1sec_tab2_3 .P1sec_icons3").slideDown();
	});
	$(".P1sec_tab2_3").mouseleave(function(){
		$(".P1sec_tab2_3 .P1sec_icons3").slideUp();
	});
	$(".P1sec_tab2_4").mouseenter(function(){
		$(".P1sec_tab2_4 .P1sec_icons4").slideDown();
	});
	$(".P1sec_tab2_4").mouseleave(function(){
		$(".P1sec_tab2_4 .P1sec_icons4").slideUp();
	});

	$(".P1sec_tab3_1").mouseenter(function(){
		$(".P1sec_tab3_1 .P1sec_icons1").slideDown();
	});
	$(".P1sec_tab3_1").mouseleave(function(){
		$(".P1sec_tab3_1 .P1sec_icons1").slideUp();
	});
	$(".P1sec_tab3_2").mouseenter(function(){
		$(".P1sec_tab3_2 .P1sec_icons2").slideDown();
	});
	$(".P1sec_tab3_2").mouseleave(function(){
		$(".P1sec_tab3_2 .P1sec_icons2").slideUp();
	});

	$(".P1sec_tab4_1").mouseenter(function(){
		$(".P1sec_tab4_1 .P1sec_icons1").slideDown();
	});
	$(".P1sec_tab4_1").mouseleave(function(){
		$(".P1sec_tab4_1 .P1sec_icons1").slideUp();
	});

	/* 별 모양 바뀌는 것 */
	$(".P1sec_panel li ul li .icons img:last-child").click(function(){
		$(this).toggleClass("Psec_toggle");
	});

	// product_2 ____________________________________

	/* 탭메뉴 수직 이동 */
	$(".P2sec_tab li").click(function(){

		thval=$(this).index();
		thnum=+70*thval;   /* 세로로 70px씩 증가 */

		$(".P2sec_tab-header .P2sec_tab-highlight").animate({top:thnum});
		$(".P2sec_tab li a").css("color","#000"); /* 탭의 모든 글자색 */
		$(this).find(">a").css("color","#fff"); /* 선택된 탭의 글자색 */

		$(".P2sec_panel>li").hide(); /* 기존 내용 숨기기 */
		$($(this).find(">a").attr("href")).fadeIn(); /* 새로 선택된 내용 href 연결된 내용 보여주기 */
	});

	/* 제품 이미지 오버시 올라오는 창 */
	$(".P2sec_tab1_1").mouseenter(function(){
		$(".P2sec_tab1_1 .P2sec_icons1").slideDown();
	});
	$(".P2sec_tab1_1").mouseleave(function(){
		$(".P2sec_tab1_1 .P2sec_icons1").slideUp();
	});
	$(".P2sec_tab1_2").mouseenter(function(){
		$(".P2sec_tab1_2 .P2sec_icons2").slideDown();
	});
	$(".P2sec_tab1_2").mouseleave(function(){
		$(".P2sec_tab1_2 .P2sec_icons2").slideUp();
	});
	$(".P2sec_tab1_3").mouseenter(function(){
		$(".P2sec_tab1_3 .P2sec_icons3").slideDown();
	});
	$(".P2sec_tab1_3").mouseleave(function(){
		$(".P2sec_tab1_3 .P2sec_icons3").slideUp();
	});
	$(".P2sec_tab1_4").mouseenter(function(){
		$(".P2sec_tab1_4 .P2sec_icons4").slideDown();
	});
	$(".P2sec_tab1_4").mouseleave(function(){
		$(".P2sec_tab1_4 .P2sec_icons4").slideUp();
	});
	$(".P2sec_tab1_5").mouseenter(function(){
		$(".P2sec_tab1_5 .P2sec_icons5").slideDown();
	});
	$(".P2sec_tab1_5").mouseleave(function(){
		$(".P2sec_tab1_5 .P2sec_icons5").slideUp();
	});

	/* 별 모양 바뀌는 것 */
	$(".P2sec_panel li ul li .icons img:last-child").click(function(){
		$(this).toggleClass("Psec_toggle");
	});

	// product_3 ____________________________________

	/* 탭메뉴 수직 이동 */
	$(".P3sec_tab li").click(function(){

		thval=$(this).index();
		thnum=+70*thval;   /* 세로로 70px씩 증가 */

		$(".P3sec_tab-header .P3sec_tab-highlight").animate({top:thnum});
		$(".P3sec_tab li a").css("color","#000"); /* 탭의 모든 글자색 */
		$(this).find(">a").css("color","#fff"); /* 선택된 탭의 글자색 */

		$(".P3sec_panel>li").hide(); /* 기존 내용 숨기기 */
		$($(this).find(">a").attr("href")).fadeIn(); /* 새로 선택된 내용 href 연결된 내용 보여주기 */
	});

	/* 제품 이미지 오버시 올라오는 창 */
	$(".P3sec_tab1_1").mouseenter(function(){
		$(".P3sec_tab1_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab1_1").mouseleave(function(){
		$(".P3sec_tab1_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab1_2").mouseenter(function(){
		$(".P3sec_tab1_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab1_2").mouseleave(function(){
		$(".P3sec_tab1_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab1_3").mouseenter(function(){
		$(".P3sec_tab1_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab1_3").mouseleave(function(){
		$(".P3sec_tab1_3 .P3sec_icons3").slideUp();
	});
	$(".P3sec_tab1_4").mouseenter(function(){
		$(".P3sec_tab1_4 .P3sec_icons4").slideDown();
	});
	$(".P3sec_tab1_4").mouseleave(function(){
		$(".P3sec_tab1_4 .P3sec_icons4").slideUp();
	});
	$(".P3sec_tab1_5").mouseenter(function(){
		$(".P3sec_tab1_5 .P3sec_icons5").slideDown();
	});
	$(".P3sec_tab1_5").mouseleave(function(){
		$(".P3sec_tab1_5 .P3sec_icons5").slideUp();
	});
	$(".P3sec_tab1_6").mouseenter(function(){
		$(".P3sec_tab1_6 .P3sec_icons6").slideDown();
	});
	$(".P3sec_tab1_6").mouseleave(function(){
		$(".P3sec_tab1_6 .P3sec_icons6").slideUp();
	});
	$(".P3sec_tab1_7").mouseenter(function(){
		$(".P3sec_tab1_7 .P3sec_icons7").slideDown();
	});
	$(".P3sec_tab1_7").mouseleave(function(){
		$(".P3sec_tab1_7 .P3sec_icons7").slideUp();
	});
	$(".P3sec_tab1_8").mouseenter(function(){
		$(".P3sec_tab1_8 .P3sec_icons8").slideDown();
	});
	$(".P3sec_tab1_8").mouseleave(function(){
		$(".P3sec_tab1_8 .P3sec_icons8").slideUp();
	});
	$(".P3sec_tab1_9").mouseenter(function(){
		$(".P3sec_tab1_9 .P3sec_icons9").slideDown();
	});
	$(".P3sec_tab1_9").mouseleave(function(){
		$(".P3sec_tab1_9 .P3sec_icons9").slideUp();
	});
	$(".P3sec_tab1_10").mouseenter(function(){
		$(".P3sec_tab1_10 .P3sec_icons10").slideDown();
	});
	$(".P3sec_tab1_10").mouseleave(function(){
		$(".P3sec_tab1_10 .P3sec_icons10").slideUp();
	});
	$(".P3sec_tab1_11").mouseenter(function(){
		$(".P3sec_tab1_11 .P3sec_icons11").slideDown();
	});
	$(".P3sec_tab1_11").mouseleave(function(){
		$(".P3sec_tab1_11 .P3sec_icons11").slideUp();
	});
	$(".P3sec_tab1_12").mouseenter(function(){
		$(".P3sec_tab1_12 .P3sec_icons12").slideDown();
	});
	$(".P3sec_tab1_12").mouseleave(function(){
		$(".P3sec_tab1_12 .P3sec_icons12").slideUp();
	});

	$(".P3sec_tab2_1").mouseenter(function(){
		$(".P3sec_tab2_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab2_1").mouseleave(function(){
		$(".P3sec_tab2_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab2_2").mouseenter(function(){
		$(".P3sec_tab2_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab2_2").mouseleave(function(){
		$(".P3sec_tab2_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab2_3").mouseenter(function(){
		$(".P3sec_tab2_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab2_3").mouseleave(function(){
		$(".P3sec_tab2_3 .P3sec_icons3").slideUp();
	});

	$(".P3sec_tab3_1").mouseenter(function(){
		$(".P3sec_tab3_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab3_1").mouseleave(function(){
		$(".P3sec_tab3_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab3_2").mouseenter(function(){
		$(".P3sec_tab3_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab3_2").mouseleave(function(){
		$(".P3sec_tab3_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab3_3").mouseenter(function(){
		$(".P3sec_tab3_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab3_3").mouseleave(function(){
		$(".P3sec_tab3_3 .P3sec_icons3").slideUp();
	});

	$(".P3sec_tab4_1").mouseenter(function(){
		$(".P3sec_tab4_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab4_1").mouseleave(function(){
		$(".P3sec_tab4_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab4_2").mouseenter(function(){
		$(".P3sec_tab4_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab4_2").mouseleave(function(){
		$(".P3sec_tab4_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab4_3").mouseenter(function(){
		$(".P3sec_tab4_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab4_3").mouseleave(function(){
		$(".P3sec_tab4_3 .P3sec_icons3").slideUp();
	});
	$(".P3sec_tab4_4").mouseenter(function(){
		$(".P3sec_tab4_4 .P3sec_icons4").slideDown();
	});
	$(".P3sec_tab4_4").mouseleave(function(){
		$(".P3sec_tab4_4 .P3sec_icons4").slideUp();
	});

	$(".P3sec_tab5_1").mouseenter(function(){
		$(".P3sec_tab5_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab5_1").mouseleave(function(){
		$(".P3sec_tab5_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab5_2").mouseenter(function(){
		$(".P3sec_tab5_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab5_2").mouseleave(function(){
		$(".P3sec_tab5_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab5_3").mouseenter(function(){
		$(".P3sec_tab5_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab5_3").mouseleave(function(){
		$(".P3sec_tab5_3 .P3sec_icons3").slideUp();
	});
	$(".P3sec_tab5_4").mouseenter(function(){
		$(".P3sec_tab5_4 .P3sec_icons4").slideDown();
	});
	$(".P3sec_tab5_4").mouseleave(function(){
		$(".P3sec_tab5_4 .P3sec_icons4").slideUp();
	});

	$(".P3sec_tab6_1").mouseenter(function(){
		$(".P3sec_tab6_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab6_1").mouseleave(function(){
		$(".P3sec_tab6_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab6_2").mouseenter(function(){
		$(".P3sec_tab6_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab6_2").mouseleave(function(){
		$(".P3sec_tab6_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab6_3").mouseenter(function(){
		$(".P3sec_tab6_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab6_3").mouseleave(function(){
		$(".P3sec_tab6_3 .P3sec_icons3").slideUp();
	});
	$(".P3sec_tab6_4").mouseenter(function(){
		$(".P3sec_tab6_4 .P3sec_icons4").slideDown();
	});
	$(".P3sec_tab6_4").mouseleave(function(){
		$(".P3sec_tab6_4 .P3sec_icons4").slideUp();
	});

	$(".P3sec_tab7_1").mouseenter(function(){
		$(".P3sec_tab7_1 .P3sec_icons1").slideDown();
	});
	$(".P3sec_tab7_1").mouseleave(function(){
		$(".P3sec_tab7_1 .P3sec_icons1").slideUp();
	});
	$(".P3sec_tab7_2").mouseenter(function(){
		$(".P3sec_tab7_2 .P3sec_icons2").slideDown();
	});
	$(".P3sec_tab7_2").mouseleave(function(){
		$(".P3sec_tab7_2 .P3sec_icons2").slideUp();
	});
	$(".P3sec_tab7_3").mouseenter(function(){
		$(".P3sec_tab7_3 .P3sec_icons3").slideDown();
	});
	$(".P3sec_tab7_3").mouseleave(function(){
		$(".P3sec_tab7_3 .P3sec_icons3").slideUp();
	});
	$(".P3sec_tab7_4").mouseenter(function(){
		$(".P3sec_tab7_4 .P3sec_icons4").slideDown();
	});
	$(".P3sec_tab7_4").mouseleave(function(){
		$(".P3sec_tab7_4 .P3sec_icons4").slideUp();
	});

	/* 별 모양 바뀌는 것 */
	$(".P3sec_panel li ul li .icons img:last-child").click(function(){
		$(this).toggleClass("Psec_toggle");
	});

	// product_4 ____________________________________

	/* 탭메뉴 수직 이동 */
	$(".P4sec_tab li").click(function(){

		thval=$(this).index();
		thnum=+70*thval;   /* 세로로 70px씩 증가 */

		$(".P4sec_tab-header .P4sec_tab-highlight").animate({top:thnum});
		$(".P4sec_tab li a").css("color","#000"); /* 탭의 모든 글자색 */
		$(this).find(">a").css("color","#fff"); /* 선택된 탭의 글자색 */

		$(".P4sec_panel>li").hide(); /* 기존 내용 숨기기 */
		$($(this).find(">a").attr("href")).fadeIn(); /* 새로 선택된 내용 href 연결된 내용 보여주기 */
	});

	/* 제품 이미지 오버시 올라오는 창 */
	$(".P4sec_tab1_1").mouseenter(function(){
		$(".P4sec_tab1_1 .P4sec_icons1").slideDown();
	});
	$(".P4sec_tab1_1").mouseleave(function(){
		$(".P4sec_tab1_1 .P4sec_icons1").slideUp();
	});
	$(".P4sec_tab1_2").mouseenter(function(){
		$(".P4sec_tab1_2 .P4sec_icons2").slideDown();
	});
	$(".P4sec_tab1_2").mouseleave(function(){
		$(".P4sec_tab1_2 .P4sec_icons2").slideUp();
	});
	$(".P4sec_tab1_3").mouseenter(function(){
		$(".P4sec_tab1_3 .P4sec_icons3").slideDown();
	});
	$(".P4sec_tab1_3").mouseleave(function(){
		$(".P4sec_tab1_3 .P4sec_icons3").slideUp();
	});
	$(".P4sec_tab1_4").mouseenter(function(){
		$(".P4sec_tab1_4 .P4sec_icons4").slideDown();
	});
	$(".P4sec_tab1_4").mouseleave(function(){
		$(".P4sec_tab1_4 .P4sec_icons4").slideUp();
	});

	$(".P4sec_tab2_1").mouseenter(function(){
		$(".P4sec_tab2_1 .P4sec_icons1").slideDown();
	});
	$(".P4sec_tab2_1").mouseleave(function(){
		$(".P4sec_tab2_1 .P4sec_icons1").slideUp();
	});
	$(".P4sec_tab2_2").mouseenter(function(){
		$(".P4sec_tab2_2 .P4sec_icons2").slideDown();
	});
	$(".P4sec_tab2_2").mouseleave(function(){
		$(".P4sec_tab2_2 .P4sec_icons2").slideUp();
	});
	$(".P4sec_tab2_3").mouseenter(function(){
		$(".P4sec_tab2_3 .P4sec_icons3").slideDown();
	});
	$(".P4sec_tab2_3").mouseleave(function(){
		$(".P4sec_tab2_3 .P4sec_icons3").slideUp();
	});

	$(".P4sec_tab3_1").mouseenter(function(){
		$(".P4sec_tab3_1 .P4sec_icons1").slideDown();
	});
	$(".P4sec_tab3_1").mouseleave(function(){
		$(".P4sec_tab3_1 .P4sec_icons1").slideUp();
	});

	/* 별 모양 바뀌는 것 */
	$(".P4sec_panel li ul li .icons img:last-child").click(function(){
		$(this).toggleClass("Psec_toggle");
	});

// product_5 ____________________________________

	/* 탭메뉴 수직 이동 */
	$(".P5sec_tab li").click(function(){

		thval=$(this).index();
		thnum=+70*thval;   /* 세로로 70px씩 증가 */

		$(".P5sec_tab-header .P5sec_tab-highlight").animate({top:thnum});
		$(".P5sec_tab li a").css("color","#000"); /* 탭의 모든 글자색 */
		$(this).find(">a").css("color","#fff"); /* 선택된 탭의 글자색 */

		$(".P5sec_panel>li").hide(); /* 기존 내용 숨기기 */
		$($(this).find(">a").attr("href")).fadeIn(); /* 새로 선택된 내용 href 연결된 내용 보여주기 */
	});

	/* 제품 이미지 오버시 올라오는 창 */
	$(".P5sec_tab1_1").mouseenter(function(){
		$(".P5sec_tab1_1 .P5sec_icons1").slideDown();
	});
	$(".P5sec_tab1_1").mouseleave(function(){
		$(".P5sec_tab1_1 .P5sec_icons1").slideUp();
	});
	$(".P5sec_tab1_2").mouseenter(function(){
		$(".P5sec_tab1_2 .P5sec_icons2").slideDown();
	});
	$(".P5sec_tab1_2").mouseleave(function(){
		$(".P5sec_tab1_2 .P5sec_icons2").slideUp();
	});
	$(".P5sec_tab1_3").mouseenter(function(){
		$(".P5sec_tab1_3 .P5sec_icons3").slideDown();
	});
	$(".P5sec_tab1_3").mouseleave(function(){
		$(".P5sec_tab1_3 .P5sec_icons3").slideUp();
	});
	$(".P5sec_tab1_4").mouseenter(function(){
		$(".P5sec_tab1_4 .P5sec_icons4").slideDown();
	});
	$(".P5sec_tab1_4").mouseleave(function(){
		$(".P5sec_tab1_4 .P5sec_icons4").slideUp();
	});

	$(".P5sec_tab2_1").mouseenter(function(){
		$(".P5sec_tab2_1 .P5sec_icons1").slideDown();
	});
	$(".P5sec_tab2_1").mouseleave(function(){
		$(".P5sec_tab2_1 .P5sec_icons1").slideUp();
	});
	$(".P5sec_tab2_2").mouseenter(function(){
		$(".P5sec_tab2_2 .P5sec_icons2").slideDown();
	});
	$(".P5sec_tab2_2").mouseleave(function(){
		$(".P5sec_tab2_2 .P5sec_icons2").slideUp();
	});
	$(".P5sec_tab2_3").mouseenter(function(){
		$(".P5sec_tab2_3 .P5sec_icons3").slideDown();
	});
	$(".P5sec_tab2_3").mouseleave(function(){
		$(".P5sec_tab2_3 .P5sec_icons3").slideUp();
	});

	$(".P5sec_tab3_1").mouseenter(function(){
		$(".P5sec_tab3_1 .P5sec_icons1").slideDown();
	});
	$(".P5sec_tab3_1").mouseleave(function(){
		$(".P5sec_tab3_1 .P5sec_icons1").slideUp();
	});

	/* 별 모양 바뀌는 것 */
	$(".P5sec_panel li ul li .icons img:last-child").click(function(){
		$(this).toggleClass("Psec_toggle");
	});

	/* _______________ 제품상세 나오는 부분 */

	/* 클릭시 팝업창 띄우기 */
	$(".text>p>span").click(function(){
    $("#popup").addClass("active");
  });

	/* Close */
	$("#popup button").click(function(){
    $("#popup").removeClass("active");
  });
	
	


});