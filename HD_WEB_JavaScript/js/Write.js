window.addEventListener('scroll', () => {
    let SCT = window.scrollY;
    SCT > 0
        ? document.querySelector('.Header').classList.add('on')
        : document.querySelector('.Header').classList.remove('on');
    SCT > 600
        ? document.querySelector('.to_top').classList.add('on')
        : document.querySelector('.to_top').classList.remove('on');

});