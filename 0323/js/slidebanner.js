$(document).ready(function () {
    var current = 0;    //초기에보이는 메인이미지 인덱스값
    var setIntervalId;
    $('.btns li').eq(current).addClass('on');

    //$('.btns').click(function () { });
    //$('.btns').on('click',function(){});
    $('.btns li').on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            movie(i);

            $('.btns li').removeClass('on');
            $(this).addClass('on');
        }
    });

    $('.btn_l').click(function () {
        var i = current - 1;
        if (i == 3) {
            i = 0;
        }
        movie(i);

        $('.btns li').removeClass('on');
        $('.btns li').eq(i).addClass('on');

    })

    $('.btn_r').click(function () {
        movie(i)
    })

    //자동실행에 대한 제어
    $('#main_img_area').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }

    })

    timer();
    function timer() {
        //setInterval(): 함수를 정해놓은 시간마다 반복적으로 실행
        //clearInterval(): setInterval()를 멈추게하는 메소드
        //var setIntervalId = setInterval(function () { }, 3000);
        //clearInterval(setIntervalId);

        //정해진 시간에 한번 실행
        //var stopFunc = setTimeout(함수명(), 시간);
        // clearTimeout(stopFunc); setTimeout()함수를 실행중지

        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 3) {
                n = 0;
            }
            movie(n)
            $('.btns li').removeClass('on');
            $('.btns li').eq(n).addClass('on');

        }, 3000)
    }

    function movie(i) {
        if (current == i) return;
        //현재보이는 이미지와 다음에 보이는 이미지가 같다면 애니메이션 중지

        //변수를 선언
        var currentEl = $('.imgs_area>ul>li').eq(current);
        var nextEl = $('.imgs_area>ul>li').eq(i);

        currentEl.css({ left: 0 }).stop().animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).stop().animate({ left: 0 });

        current = i;
    };

});