$(document).ready(function(){
  
	// 스크롤바가 이동될 때마다 스크롤 위치값 나타내기

  $(window).scroll(function(){
    $("#txt1").text($(this).scrollTop());
  });

	
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


	// ____________________________________ BrandStory ____________________________________

	// 스크롤 ______________________________

	$(window).scroll(function(){

		/* 2번 이미지 */
		if($(this).scrollTop()>=200){
			$("#Bsection1").animate({opacity:"1"},1500);
		}

		/* 왼쪽에서 오른쪽으로 글자 나오는 것 */
		if($(this).scrollTop()>=1200){
			$("#Bsection2").find(".Bsection2_1 .s1").animate({opacity:"1"},300);
			$("#Bsection2").find(".s2").animate({opacity:"1"},700);
			$("#Bsection2").find(".s3").animate({opacity:"1"},1100);
			$("#Bsection2").find(".s4").animate({opacity:"1"},1500);
			$("#Bsection2").find(".s5").animate({opacity:"1"},1900);
			$("#Bsection2").find(".s6").animate({opacity:"1"},2300);
			$("#Bsection2").find(".s7").animate({opacity:"1"},2700);
			$("#Bsection2").find(".s8").animate({opacity:"1"},3100);
			$("#Bsection2").find(".s9").animate({opacity:"1"},3500);
			$("#Bsection2").find(".s10").animate({opacity:"1"},3900);
			$("#Bsection2").find(".s11").animate({opacity:"1"},4300);
			$("#Bsection2").find(".s12").animate({opacity:"1"},4700);
			$("#Bsection2").find(".s13").animate({opacity:"1"},5100);
			$("#Bsection2").find(".s14").animate({opacity:"1"},5350);
			$("#Bsection2").find(".s15").animate({opacity:"1"},5600);
			$("#Bsection2").find(".s16").animate({opacity:"1"},5850);
			$("#Bsection2").find(".s17").animate({opacity:"1"},6100);
			$("#Bsection2").find(".s18").animate({opacity:"1"},6300);
			$("#Bsection2").find(".s19").animate({opacity:"1"},6500);
			$("#Bsection2").find(".s20").animate({opacity:"1"},6700);
			$("#Bsection2").find(".s21").animate({opacity:"1"},6900);
			$("#Bsection2").find(".s22").animate({opacity:"1"},7100);
			$("#Bsection2").find(".s23").animate({opacity:"1"},7300);
			$("#Bsection2").find(".s24").animate({opacity:"1"},7500);
			$("#Bsection2").find(".s25").animate({opacity:"1"},7700);
		}

		/* 닥터독은 오직 ... */
		if($(this).scrollTop()>1500){
			$(".Bsection2_2").animate({marginTop:"40px",opacity:"1"},1000);
		}

		/* Brand Value */
		if($(this).scrollTop()>1850){
			$("#Bsection3").animate({opacity:"1"},1000);
		}

	});
		


	// ____________________________________ GiveLove ____________________________________

	/* 스크롤 */

	$(window).scroll(function(){

		/* 글 나오는 곳의 그림나오는 거 */
		if($(this).scrollTop()>550){
			$("#Gsection1").find("img:nth-child(1)").slideDown(1500);
		}

		/* 중간에 글 나오는 곳 */
		if($(this).scrollTop()>=500){
			$("#Gsection1").find(".g1").animate({opacity:"1"},200);
			$("#Gsection1").find(".g2").delay(150).animate({opacity:"1"},200);
			$("#Gsection1").find(".g3").delay(300).animate({opacity:"1"},200);
			$("#Gsection1").find(".g4").delay(450).animate({opacity:"1"},200);
			$("#Gsection1").find(".g5").delay(600).animate({opacity:"1"},200);
			$("#Gsection1").find(".g6").delay(750).animate({opacity:"1"},200);
			$("#Gsection1").find(".g7").delay(900).animate({opacity:"1"},200);
			$("#Gsection1").find(".g8").delay(1050).animate({opacity:"1"},200);
			$("#Gsection1").find(".g9").delay(1200).animate({opacity:"1"},200);
			$("#Gsection1").find(".g10").delay(1350).animate({opacity:"1"},200);
			$("#Gsection1").find(".g11").delay(1500).animate({opacity:"1"},200);
			$("#Gsection1").find(".g12").delay(1750).animate({opacity:"1"},200);
			$("#Gsection1").find(".g13").delay(1900).animate({opacity:"1"},200);
			$("#Gsection1").find(".g14").delay(2050).animate({opacity:"1"},200);
			$("#Gsection1").find(".g15").delay(2200).animate({opacity:"1"},200);
			$("#Gsection1").find(".g16").delay(2350).animate({opacity:"1"},200);
			$("#Gsection1").find(".g17").delay(2500).animate({opacity:"1"},200);
			$("#Gsection1").find(".g18").delay(2650).animate({opacity:"1"},200);
			$("#Gsection1").find(".g19").delay(2800).animate({opacity:"1"},200);
			$("#Gsection1").find(".g20").delay(2950).animate({opacity:"1"},200);
			$("#Gsection1").find(".g21").delay(3100).animate({opacity:"1"},200);
			$("#Gsection1").find(".g22").delay(3250).animate({opacity:"1"},200);
			$("#Gsection1").find(".g23").delay(3400).animate({opacity:"1"},200);
			$("#Gsection1").find(".g24").delay(3550).animate({opacity:"1"},200);
			$("#Gsection1").find(".g25").delay(3700).animate({opacity:"1"},200);
			$("#Gsection1").find(".g26").delay(3850).animate({opacity:"1"},200);
			$("#Gsection1").find(".g27").delay(4000).animate({opacity:"1"},200);
			$("#Gsection1").find(".g28").delay(4150).animate({opacity:"1"},200);
		}
		
		/* 중간 두번에 글 */
		if($(this).scrollTop()>=550){
			$("#Gsection1").find(".Gsection1_txt2").fadeIn(3000);
		}

		/* 텝메뉴 */
		if($(this).scrollTop()>500){
			$("#Gsection2").fadeIn("slow");
		}

	});


	// 텝메뉴 ______________
	$(".panel>li:not(:first)").hide();

  $(".tabmenu>li").click(function(){
    $(".tabmenu>li").removeClass("selected");
    $(this).addClass("selected");
    $(".panel>li").hide();
    $($(this).find("a").attr("href")).show();
  });
	
	//  아코디언 메뉴 ______________
	$("#tab1 dl dd:not(:first)").css("display","none");
	$("#tab1 dl dt:first").addClass("selected");

	$("dl dt").click(function(){
		$("dl dt").find("+dd").stop().hide("slow");
		$(this).find("+dd").stop().show("slow");
		$("dt").removeClass("selected");
		$(this).addClass("selected");
	});

	/* 아코디언 이미지 나오기 */
  $(".tab4").click(function(){
		$(".tabImage").stop().animate({opacity:"1",left:"1300px"},1000);
	});
	$(".tab3, .tab2, .tab1").click(function(){
		$(".tabImage").stop().animate({opacity:"0",left:"800px"},1000);
	});


	// 탭메뉴 ________________ 오른쪽
	$(".panelR>li:not(:first)").hide();

  $(".tabR>li").click(function(){
    $(".tabR>li").removeClass("selected");
    $(this).addClass("selected");
    $(".panelR>li").hide();
    $($(this).find("a").attr("href")).show();
  });

  // 해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴.....(마지막에 누른 채로 보이지 읺고 항상 처음처럼 보이게 함)
  $(".tabR li:first-child").click(function(){
    $(".gallery1 .thumbs li:first").click();
  });
  $(".tabR li:nth-child(2)").click(function(){
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tabR li:last-child").click(function(){
    $(".gallery3 .thumbs li:first").click();
  });
  
  /* 탭메뉴별 이미지갤러리 _______________________ */

  // tabR1-gallery
  let goldidxA=0; // 기존이미지
  let gidxA=0;  // 선택되는 이미지

  function galleryImgA(gidxA){  // gidx는 선택되는 이미지
  
    if(goldidxA!=gidxA){  // 기존의 이미지와 선택된 이미지가 다를때....
      $(".gallery1 .thumbs li").eq(goldidxA).css({"opacity":0.3}); // 기존의 썸네일 흐리게
      $(".gallery1 .thumbs li").eq(gidxA).css({"opacity":1}); // 선택된 썸네일 선명하게
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);  // 기존 이미지 사라짐
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300); // 선택된 이미지 나타남
    }
    goldidxA=gidxA;  // 선택된 이미지는 다시 기존이미지로 저장
  }
  
  // 썸네일버튼 클릭시......
  $(".thumbs li").click(function(){
    gidxA=$(this).index();
    galleryImgA(gidxA);
  });

  // tabR2-gallery
  let goldidxB=0; // 기존이미지
  let gidxB=0;  // 선택되는 이미지

  function galleryImgB(gidxB){  // gidx는 선택되는 이미지
  
    if(goldidxB!=gidxB){  // 기존의 이미지와 선택된 이미지가 다를때....
      $(".gallery2 .thumbs li").eq(goldidxB).css({"opacity":0.3}); // 기존의 썸네일 흐리게
      $(".gallery2 .thumbs li").eq(gidxB).css({"opacity":1}); // 선택된 썸네일 선명하게
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);  // 기존 이미지 사라짐
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300); // 선택된 이미지 나타남
    }
    goldidxB=gidxB;  // 선택된 이미지는 다시 기존이미지로 저장
  }
  
  // 썸네일버튼 클릭시......
  $(".thumbs li").click(function(){
    gidxB=$(this).index();
    galleryImgB(gidxB);
  });
  
  // tab3-gallery
  let goldidxC=0; // 기존이미지
  let gidxC=0;  // 선택되는 이미지

  function galleryImgC(gidxC){  // gidx는 선택되는 이미지
  
    if(goldidxC!=gidxC){  // 기존의 이미지와 선택된 이미지가 다를때....
      $(".gallery3 .thumbs li").eq(goldidxC).css({"opacity":0.3}); // 기존의 썸네일 흐리게
      $(".gallery3 .thumbs li").eq(gidxC).css({"opacity":1}); // 선택된 썸네일 선명하게
      $(".gallery3 .largeImg li").eq(goldidxC).stop().fadeOut(300);  // 기존 이미지 사라짐
      $(".gallery3 .largeImg li").eq(gidxC).stop().fadeIn(300); // 선택된 이미지 나타남
    }
    goldidxC=gidxC;  // 선택된 이미지는 다시 기존이미지로 저장
  }
  
  // 썸네일버튼 클릭시......
  $(".thumbs li").click(function(){
    gidxC=$(this).index();
    galleryImgC(gidxC);
  });


	// ____________________________________ Media ____________________________________

	$(".MconHide").hide();

	$(".MsecBtn").click(function(){
		$(this).hide();
		$(".MconHide").show();
	});







});