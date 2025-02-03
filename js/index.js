// 팝업창 띄우기 함수생성

function openPopup(){
  
  $("#popup").fadeIn(function(){  // 검정배경 나타남
    $("#popup .body").css("display","block");  // 팝업창내용 보여짐
  })
}

$(document).ready(function(){

	// popup _____________________________________
	
	$(".btn_close").click(function(){  // close 눌렀을 때
    $("#popup").hide();  // popup 안보이게 함
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


	// 메인 비주얼 슬라이드 _________________________________
	
  let imgon_w= $(".slideon ul li").width();
	let imgon_n= $(".slideon ul li").length;
	let soldidxon=0;
	let sindexon=0;

	$(".slideon ul li:last").prependTo(".slideon ul");	
	$(".slideon ul").css({ left:-imgon_w}); 

	//index번째 비주얼이미지 이동하는 함수생성

	function slideonImg(sindexon,m){
		
		if(m==0){			
			$(".slideon ul").stop(true,true).animate({
				left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:last").prependTo(".slideon ul");
				$(".slideon ul").css({ left:-imgon_w });
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");

		}else{
			$(".slideon ul").stop(true,true).animate({
				left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:first").appendTo(".slideon ul");
				$(".slideon ul").css({ left:-imgon_w });
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");
		}

		soldidxon=sindexon;
	} 

	//슬라이드 자동함수 생성

	function slideonAuto(){
		sindexon++;	
		if(sindexon==imgon_n){
			sindexon=0;
		}
		slideonImg(sindexon,1);
	}

	auto2=setInterval(slideonAuto,4000);


  //하단버튼 클릭
	$(".slideon_btn ul li").click(function(){
		clearInterval(auto2);

		sindexon = $(this).index();

		// 재배치
		for(let i=1; i<= imgon_n; i++){
			$(".slideon ul li.i"+i).appendTo(".slideon ul");
		}
		$(".slideon ul li:last").prependTo(".slideon ul");
		$(".slideon ul li:last").prependTo(".slideon ul");

		// 번호만큼 이동
		for(let j=1; j<=sindexon+1;j++){
			slideonImg(sindexon,1);
		}
		
		auto2=setInterval(slideonAuto,4000);
	});

  //좌우버튼 클릭
  $(".nexon").click(function(){

		clearInterval(auto2); 

		sindexon++;	
		if(sindexon>=imgon_n){ 
			sindexon=0;      
		}
		slideonImg(sindexon,1);
		auto2=setInterval(slideonAuto,4000); 

	});

  $(".preon").click(function(){

		clearInterval(auto2); 

		sindexon--;	
		if(sindexon<0){
			sindexon=imgon_n-1;      
		}
		slideonImg(sindexon,0);
		auto2=setInterval(slideonAuto,4000);
	});


	// section 2 상하좌우방향 움직이기_________________________________

	/* 첫번째 사료 박스 */
	$(".box1").hover(function(){
		$(".box1 li:first-child").stop().animate({marginLeft:"-500px"},400);
		$(".box1 .box1_text").stop().animate({fontSize:"50px"},200);
	},function(){
		$(".box1 li:first-child").stop().animate({marginLeft:"0px"},300);
		$(".box1 .box1_text").stop().animate({fontSize:"45px"},200);
	});

	/* 오른쪽 화식 박스 */
	$(".box2").hover(function(){
		$(".box2 li:first-child").stop().animate({marginLeft:"0px"},400);
		$(".box2 .box2_text").stop().animate({fontSize:"50px"},200);
	},function(){
		$(".box2 li:first-child").stop().animate({marginLeft:"-680px"},300);
		$(".box2 .box2_text").stop().animate({fontSize:"45px"},200);
	});

	/* 오른쪽 간식 박스 */
	$(".box3").hover(function(){
		$(".box3 li:first-child").stop().animate({marginLeft:"0px"},400);
		$(".box3 .box3_text").stop().animate({fontSize:"50px"},200);
	},function(){
		$(".box3 li:first-child").stop().animate({marginLeft:"-680px"},300);
		$(".box3 .box3_text").stop().animate({fontSize:"45px"},200);
	});

	/* 밑 왼쪽 영양제 박스 */
	$(".box4").hover(function(){
		$(".box4 li:first-child").stop().animate({marginTop:"0px"},400);
		$(".box4 .box4_text").stop().animate({fontSize:"50px"},200);
	},function(){
		$(".box4 li:first-child").stop().animate({marginTop:"-276px"},300);
		$(".box4 .box4_text").stop().animate({fontSize:"45px"},200);
	});

	/* 밑 오른쪽 용품 박스 */
	$(".box5").hover(function(){
		$(".box5 li:first-child").stop().animate({marginTop:"0px"},400);
		$(".box5 .box5_text").stop().animate({fontSize:"50px"},200);
	},function(){
		$(".box5 li:first-child").stop().animate({marginTop:"-276px"},300);
		$(".box5 .box5_text").stop().animate({fontSize:"45px"},200);
	});
	
	
	// section 4  _________________________________

	/* 화살표 */

	$("#section4").mouseenter(function(){
		$(".cursor").stop().animate({opacity:"1",left:"240px"},600);
	});

	/* mainReview 이미지 1~4 */

	let sec4img=$(".sec4_changeimg ul li");
	let sec4oldidx=0;
	let sec4idx=0;
	let sec4img_n=sec4img.length;

	// 이미지와 버튼이 바뀌는 함수
	function changeImg(sec4idx){ 

		if(sec4oldidx!=sec4idx){ 
			sec4img.eq(sec4oldidx).stop(true,true).fadeOut(1000);
			sec4img.eq(sec4idx).stop(true,true).fadeIn(1000);
		}
		sec4oldidx=sec4idx;
	}

	// 자동함수 생성
	function changeAuto(){
		sec4idx++;

		if(sec4idx>sec4img_n-1){
			sec4idx=0;
		}
		changeImg(sec4idx);
	}

	timer=setInterval(changeAuto,3000);

		/* mainReview 텍스트 1~4 */

		let sec4img2=$(".sec4_changeimg2 ul li");
		let sec4oldidx2=0;
		let sec4idx2=0;
		let sec4img2_n=sec4img2.length;
	
		// 이미지와 버튼이 바뀌는 함수
		function changeImg2(sec4idx2){ 
	
			if(sec4oldidx2!=sec4idx2){ 
				sec4img2.eq(sec4oldidx2).stop(true,true).fadeOut(1000);
				sec4img2.eq(sec4idx2).stop(true,true).fadeIn(1000);
			}
			sec4oldidx2=sec4idx2;
		}
	
		// 자동함수 생성
		function changeAuto2(){
			sec4idx2++;
	
			if(sec4idx2>sec4img2_n-1){
				sec4idx2=0;
			}
			changeImg2(sec4idx2);
		}
		timer2=setInterval(changeAuto2,3000);
	
		/* mainReview 이미지 5~8 */

		let sec4img3=$(".sec4_changeimg3 ul li");
		let sec4oldidx3=0;
		let sec4idx3=0;
		let sec4img3_n=sec4img3.length;
	
		// 이미지와 버튼이 바뀌는 함수
		function changeImg3(sec4idx3){ 
	
			if(sec4oldidx3!=sec4idx3){ 
				sec4img3.eq(sec4oldidx3).stop(true,true).fadeOut(1000);
				sec4img3.eq(sec4idx3).stop(true,true).fadeIn(1000);
			}
			sec4oldidx3=sec4idx3;
		}
	
		// 자동함수 생성
		function changeAuto3(){
			sec4idx3++;
	
			if(sec4idx3>sec4img3_n-1){
				sec4idx3=0;
			}
			changeImg3(sec4idx3);
		}
		timer3=setInterval(changeAuto3,3000);
	
			/* mainReview 텍스트 5~8 */
	
			let sec4img4=$(".sec4_changeimg4 ul li");
			let sec4oldidx4=0;
			let sec4idx4=0;
			let sec4img4_n=sec4img4.length;
		
			// 이미지와 버튼이 바뀌는 함수
			function changeImg4(sec4idx4){ 
		
				if(sec4oldidx4!=sec4idx4){ 
					sec4img4.eq(sec4oldidx4).stop(true,true).fadeOut(1000);
					sec4img4.eq(sec4idx4).stop(true,true).fadeIn(1000);
				}
				sec4oldidx4=sec4idx4;
			}
		
			// 자동함수 생성
			function changeAuto4(){
				sec4idx4++;
		
				if(sec4idx4>sec4img4_n-1){
					sec4idx4=0;
				}
				changeImg4(sec4idx4);
			}
		
			timer4=setInterval(changeAuto4,3000);
	
	
	
	
	
});