window.addEventListener('DOMContentLoaded', () => {

    // const topHandler = function () {
    //     console.log(111)
    // }

    // document.querySelector('.top_close_btn').addEventListener('click', function () {
    //     // this.classList.toggle('on')
    //     // document.querySelector('.Topbanner').classList.add('on')
    // });


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

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');

    });

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        on: {
            init: function () {
                console.log(this.slides.length - 2);
                const current = document.querySelector('.swiper-slide-active');
                current.classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    const tatalslide = document.querySelectorAll('.swiper-slide');
    const slideDots = document.querySelectorAll('.slide_dots li');

    MAINSLIDE.on('slideChangeTransitionEnd', function () {
        const current = document.querySelector('.swiper-slide-active');
        tatalslide.forEach(it => it.classList.remove('on'));
        current.classList.add('on')
        console.log(tatalslide, current, this.realIndex);
        let count = this.realIndex; // 0 1 2
        slideDots.forEach(it => it.classList.remove('on'))
        slideDots[count].classList.add('on');
        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    });

    document.querySelector('.slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });




});