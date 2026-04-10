function $(sel, par) {
    var r = (par || document).querySelectorAll(sel);
    return r.length === 1 ? r[0] : r;
}

window.onload = function () {
    initCarousel();
};

function initCarousel() {
    var hero = $('.hero-carousel');
    if (!hero) return;

    var slides = $('.hero-slide');
    var dotsWrap = $('.carousel-dots');
    var prevBtn = $('.carousel-prev');
    var nextBtn = $('.carousel-next');
    var total = slides.length;
    var current = 0;
    var timer = null;

    for (var i = 0; i < total; i++) {
        var dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.onclick = function () {
            current = Number(this.dataset.index);
            update();
        };
        dotsWrap.appendChild(dot);
    }

    function update() {
        hero.style.transform = 'translateX(-' + (current * (100 / total)) + '%)';
        var dots = $('.carousel-dot');
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.toggle('active', i === current);
        }
    }

    function next() {
        current = (current + 1) % total;
        update();
    }

    function prev() {
        current = (current - 1 + total) % total;
        update();
    }

    function play() {
        timer = setInterval(next, 4000);
    }

    play();

    var heroSection = $('.hero-section');
    heroSection.onmouseenter = function () { clearInterval(timer); };
    heroSection.onmouseleave = play;

    nextBtn.onclick = next;
    prevBtn.onclick = prev;
}

function switchTab(index, tab) {
    var tabs = document.querySelectorAll('.accordion-tab');
    var panels = document.querySelectorAll('.accordion-panel');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        panels[i].classList.remove('active');
    }
    tab.classList.add('active');
    panels[index].classList.add('active');
}
