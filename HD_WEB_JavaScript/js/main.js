window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        //this.classList.toggle('on');
        document.querySelector('.TopBanner').classList.add('on');
        document.querySelector('.MainVisual').classList.add('on');
    });

    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });

    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    });


    // scroll event
    // const SEC = document.querySelectorAll('.action');
    // const WT=window.innerHeight;

    // window.addEventListener('scroll', () => {
    //     let sct = window.scrollY;
    //     SEC.forEach(ele => {
    //         let secTop = ele.offsetTop;
    //         let secH = ele.clientHeight;
    //         if (sct > secTop - (WT - secH) / 2 - 200) {
    //             ele.classList.add('on');
    //         };
    //         // sct > secTop - (WT-secH) / 2 - 200 ? ele.classList.add('on') : e.classList.remove('on');
    //     });
    // });




    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');

    });

    const slideDots = document.querySelectorAll('.slide_dots li');

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2
                slideDots.forEach(it => it.classList.remove('on'))
                slideDots[count].classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    document.querySelector('.MainVisual .slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.MainVisual .slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });

    //슬라이드 dots
    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });

    const PRS = new Swiper('.portfolio_right_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
    });


    const PLS = new Swiper('.portfolio_left_slide', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });



    document.querySelector('.Portfolio .slide_handler .next').addEventListener('click', () => {
        PLS.slideNext();
        PRS.slideNext();
    });
    document.querySelector('.Portfolio .slide_handler .prev').addEventListener('click', () => {
        PLS.slidePrev();
        PRS.slidePrev();
    });

    PLS.controller.control = PRS;
    PRS.controller.control = PLS;

    //출처: https://www.biew.co.kr/entry/Swiper-슬라이드-Swiper-2개-연동과-제어Controller [웹퍼블리싱 - 퍼블리싱 이야기 맑은커뮤니케이션:티스토리]
    //centeredSlides: true,

    const SCBOX = document.querySelectorAll('.Solution .content_box>div');
    const SolutionDots = document.querySelectorAll('.Solution_dots li'); //유사배열...


    const SCS = new Swiper('.Solution .center_slider', {
        loop: true,
        // slidesPerView: 2,
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: "auto",
        //width: 1200,
        slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2 3 4 
                SCBOX.forEach(it => it.classList.remove('on'))
                SCBOX[count].classList.add('on');
                SolutionDots.forEach(el => el.classList.remove('on'));
                SolutionDots[count].classList.add('on');
                document.querySelector('.solution_slider_num').innerHTML = "0" + (this.realIndex + 1) + "<span>  / 0" + SCBOX.length;
            }
        }

    });


    document.querySelector('.Solution .slide_handler .next').addEventListener('click', () => {
        SCS.slideNext();
    });
    document.querySelector('.Solution .slide_handler .prev').addEventListener('click', () => {
        SCS.slidePrev();
    });




    SolutionDots.forEach((it, idx) => {
        it.addEventListener("click", () => {
            SolutionDots.forEach(el => el.classList.remove('on'))//솔루션 전체를 돌고 clssist를 빼버리고
            it.classList.add('on'); //li 놈들에게 on을 붙여준다.

            SCC.slideTo(idx);
        });
    })










});


