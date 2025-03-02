// 팝업창 띄우기 함수생성

function openPopup() {
	$('#popup').fadeIn(function () {
		// 검정배경 나타남
		$('#popup .body').css('display', 'block'); // 팝업창내용 보여짐
	});
}

$(document).ready(function () {
	/* gnb 노출 */
	$('.gnb-menu > li > a').mouseenter(function () {
		$(this).next().addClass('on');
	});
	$('.gnb-menu > li').mouseleave(function () {
		$('.gnb-sub-menu').removeClass('on');
	});

	/*  메인 비주얼 슬라이드 */
	$('.slide-list').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	/* best review 슬라이드 */
	$('.slide-review').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		draggable: false,
		infinite: true,
	});

	/* quick menu */
	$('#topBtn, #counsel').hide();
	// quick 메뉴 노출 제어
	$(window).scroll(function () {
		const scrollPosition = $(window).scrollTop();
		scrollPosition > 700 ? $('#topBtn, #counsel').fadeIn() : $('#topBtn, #counsel').fadeOut();
	});
	// top 버튼
	$('#topBtn').click(function () {
		$('html,body').animate({ scrollTop: '0' });
	});

	/* gnb 햄버거 버튼 */
	$('.btn-gnb-open').on('click', function () {
		$('.gnb-wrap').show();
		$('.gnb-wrap').delay(100).animate({ right: '0px' }, 80);
		$('html, body').css({ overflow: 'hidden' });
	});
	$('.btn-gnb-close').on('click', function () {
		$('.gnb-wrap').show();
		$('.gnb-wrap').delay(100).animate({ right: '-100%' }, 80);
		$('html, body').css({ overflow: '' });
	});

	/* 
	
	아래는 정리 필요

	위는 정리 된 것
	
	*/

	// popup _____________________________________

	$('.btn_close').click(function () {
		// close 눌렀을 때
		$('#popup').hide(); // popup 안보이게 함
	});

	// section 2 상하좌우방향 움직이기_________________________________

	/* 첫번째 사료 박스 */
	$('.box1').hover(
		function () {
			$('.box1 li:first-child').stop().animate({ marginLeft: '-500px' }, 400);
			$('.box1 .box1_text').stop().animate({ fontSize: '50px' }, 200);
		},
		function () {
			$('.box1 li:first-child').stop().animate({ marginLeft: '0px' }, 300);
			$('.box1 .box1_text').stop().animate({ fontSize: '45px' }, 200);
		}
	);

	/* 오른쪽 화식 박스 */
	$('.box2').hover(
		function () {
			$('.box2 li:first-child').stop().animate({ marginLeft: '0px' }, 400);
			$('.box2 .box2_text').stop().animate({ fontSize: '50px' }, 200);
		},
		function () {
			$('.box2 li:first-child').stop().animate({ marginLeft: '-680px' }, 300);
			$('.box2 .box2_text').stop().animate({ fontSize: '45px' }, 200);
		}
	);

	/* 오른쪽 간식 박스 */
	$('.box3').hover(
		function () {
			$('.box3 li:first-child').stop().animate({ marginLeft: '0px' }, 400);
			$('.box3 .box3_text').stop().animate({ fontSize: '50px' }, 200);
		},
		function () {
			$('.box3 li:first-child').stop().animate({ marginLeft: '-680px' }, 300);
			$('.box3 .box3_text').stop().animate({ fontSize: '45px' }, 200);
		}
	);

	/* 밑 왼쪽 영양제 박스 */
	$('.box4').hover(
		function () {
			$('.box4 li:first-child').stop().animate({ marginTop: '0px' }, 400);
			$('.box4 .box4_text').stop().animate({ fontSize: '50px' }, 200);
		},
		function () {
			$('.box4 li:first-child').stop().animate({ marginTop: '-276px' }, 300);
			$('.box4 .box4_text').stop().animate({ fontSize: '45px' }, 200);
		}
	);

	/* 밑 오른쪽 용품 박스 */
	$('.box5').hover(
		function () {
			$('.box5 li:first-child').stop().animate({ marginTop: '0px' }, 400);
			$('.box5 .box5_text').stop().animate({ fontSize: '50px' }, 200);
		},
		function () {
			$('.box5 li:first-child').stop().animate({ marginTop: '-276px' }, 300);
			$('.box5 .box5_text').stop().animate({ fontSize: '45px' }, 200);
		}
	);

	// section 4  _________________________________

	/* 화살표 */

	$('#section4').mouseenter(function () {
		$('.cursor').stop().animate({ opacity: '1', left: '240px' }, 600);
	});

	/* mainReview 이미지 1~4 */

	let sec4img = $('.sec4_changeimg ul li');
	let sec4oldidx = 0;
	let sec4idx = 0;
	let sec4img_n = sec4img.length;

	// 이미지와 버튼이 바뀌는 함수
	function changeImg(sec4idx) {
		if (sec4oldidx != sec4idx) {
			sec4img.eq(sec4oldidx).stop(true, true).fadeOut(1000);
			sec4img.eq(sec4idx).stop(true, true).fadeIn(1000);
		}
		sec4oldidx = sec4idx;
	}

	// 자동함수 생성
	function changeAuto() {
		sec4idx++;

		if (sec4idx > sec4img_n - 1) {
			sec4idx = 0;
		}
		changeImg(sec4idx);
	}

	timer = setInterval(changeAuto, 3000);

	/* mainReview 텍스트 1~4 */

	let sec4img2 = $('.sec4_changeimg2 ul li');
	let sec4oldidx2 = 0;
	let sec4idx2 = 0;
	let sec4img2_n = sec4img2.length;

	// 이미지와 버튼이 바뀌는 함수
	function changeImg2(sec4idx2) {
		if (sec4oldidx2 != sec4idx2) {
			sec4img2.eq(sec4oldidx2).stop(true, true).fadeOut(1000);
			sec4img2.eq(sec4idx2).stop(true, true).fadeIn(1000);
		}
		sec4oldidx2 = sec4idx2;
	}

	// 자동함수 생성
	function changeAuto2() {
		sec4idx2++;

		if (sec4idx2 > sec4img2_n - 1) {
			sec4idx2 = 0;
		}
		changeImg2(sec4idx2);
	}
	timer2 = setInterval(changeAuto2, 3000);

	/* mainReview 이미지 5~8 */

	let sec4img3 = $('.sec4_changeimg3 ul li');
	let sec4oldidx3 = 0;
	let sec4idx3 = 0;
	let sec4img3_n = sec4img3.length;

	// 이미지와 버튼이 바뀌는 함수
	function changeImg3(sec4idx3) {
		if (sec4oldidx3 != sec4idx3) {
			sec4img3.eq(sec4oldidx3).stop(true, true).fadeOut(1000);
			sec4img3.eq(sec4idx3).stop(true, true).fadeIn(1000);
		}
		sec4oldidx3 = sec4idx3;
	}

	// 자동함수 생성
	function changeAuto3() {
		sec4idx3++;

		if (sec4idx3 > sec4img3_n - 1) {
			sec4idx3 = 0;
		}
		changeImg3(sec4idx3);
	}
	timer3 = setInterval(changeAuto3, 3000);

	/* mainReview 텍스트 5~8 */

	let sec4img4 = $('.sec4_changeimg4 ul li');
	let sec4oldidx4 = 0;
	let sec4idx4 = 0;
	let sec4img4_n = sec4img4.length;

	// 이미지와 버튼이 바뀌는 함수
	function changeImg4(sec4idx4) {
		if (sec4oldidx4 != sec4idx4) {
			sec4img4.eq(sec4oldidx4).stop(true, true).fadeOut(1000);
			sec4img4.eq(sec4idx4).stop(true, true).fadeIn(1000);
		}
		sec4oldidx4 = sec4idx4;
	}

	// 자동함수 생성
	function changeAuto4() {
		sec4idx4++;

		if (sec4idx4 > sec4img4_n - 1) {
			sec4idx4 = 0;
		}
		changeImg4(sec4idx4);
	}

	timer4 = setInterval(changeAuto4, 3000);
});
