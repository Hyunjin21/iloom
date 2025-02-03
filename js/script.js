var swiper = new Swiper(".swiper-pc", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            document.querySelector('.swiper-pagination-current').textContent = this.realIndex + 1;
        },
    }
});
var swiper = new Swiper(".swiper-mob", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".pagination01",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            console.log(this.realIndex);
            document.querySelector('.swiper-pagination-current-mob').textContent = this.realIndex + 1;
        },
        
    }
});

var swiper = new Swiper(".swiper-about", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
    },
    pagination: {
        el: ".pagination02",
        type: "progressbar",
    },
    
});
var swiper = new Swiper(".swiper-collection", {
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
    },
    pagination: {
        el: ".pagination03",
        type: "progressbar",
    },
    
});

var swiper = new Swiper(".swiper-item", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".pagination04",
        type: "progressbar",
    },
});

var swiper = new Swiper(".swiper-item-mob", {
    slidesPerView: 'auto',  
    spaceBetween: 0,       
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
    },
    pagination: {
        el: ".pagination05",
        type: "progressbar", 
    },
    centeredSlides: false,  
});


document.addEventListener('DOMContentLoaded', function () {
    const gnbLists = document.querySelectorAll('.gnb_list');

    gnbLists.forEach(function(gnbList) {
        gnbList.addEventListener('click', function() {
            if (this.classList.contains('lnb_on')) {
                this.classList.remove('lnb_on');
            } else {
                gnbLists.forEach(function(item) {
                    item.classList.remove('lnb_on');
                });
                
                this.classList.add('lnb_on');
            }
        });
    });
    
    
});
  
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section"); 

    function checkScroll() {
        sections.forEach(section => {
            const subTitle = section.querySelector(".sub_title"); 
            if (!subTitle) return; 
            
            const sectionTop = section.getBoundingClientRect().top; 
            const windowHeight = window.innerHeight; 

            if (sectionTop < windowHeight * 0.9) { 
                subTitle.classList.add("ani_title");
            } else {
                subTitle.classList.remove("ani_title");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});


document.querySelector('.gnb_mob').addEventListener('click', function() {
    document.querySelector('.gnb').style.transform = 'translateX(0)';
});

document.querySelector('.gnb_close').addEventListener('click', function() {
    document.querySelector('.gnb').style.transform = 'translateX(-100%)';
});

const videoContainer = document.querySelector('.video_container');
const videoWrapper = document.querySelector('.video_wrapper');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const maxScroll = document.body.scrollHeight - window.innerHeight; // 최대 스크롤 가능 거리
    const scrollPercent = scrollY / maxScroll; // 스크롤 비율 (0~1)
    
    // 비디오의 너비를 50%에서 100%까지 변경
    const newWidth = 50 + scrollPercent * 50; 
    videoWrapper.style.width = `${newWidth}%`;
    
    // 스크롤 방향 감지
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (scrollTop > lastScrollTop) {
        // 스크롤 다운
        videoContainer.style.clipPath = `inset(0% 0% 0% 0%)`;
        document.querySelector('.scroll01 .next').classList.add('ani');
        document.querySelector('.scroll02 .next').classList.add('ani');
        document.querySelector('.scroll03 .next').classList.add('ani');
        
    } else {
        // 스크롤 업
        videoContainer.style.clipPath = `inset(10% 30% 10% 30%)`;
        document.querySelector('.scroll01 .next').classList.remove('ani');
        document.querySelector('.scroll02 .next').classList.remove('ani');
        document.querySelector('.scroll03 .next').classList.remove('ani');
        
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});



var header_on = document.querySelector('#header');

header_on.addEventListener('mouseover', function(){
    header_on.classList.add('menu_on');
});
header_on.addEventListener('mouseout', function(){
    header_on.classList.remove('menu_on');
});

document.addEventListener("DOMContentLoaded", function() {
    const techLists = document.querySelectorAll(".tech_list");
    const techs = document.querySelectorAll('.tech');

    techLists.forEach(function(techList, index) {
        techList.addEventListener("mouseover", function() {
            document.querySelector(".tech_list.active").classList.remove("active");
            document.querySelector(".tech.active").classList.remove("active");
            
            techList.classList.add("active");

            techs[index].classList.add("active");
        });
    });
});


const drag = document.querySelector(".drag");
const shopList = document.querySelector(".shop_list");

let isDragging = false;
let dragInside = false;    

shopList.addEventListener("mousemove", (e) => {
    dragInside = true;
        if (!isDragging) {
            isDragging = true;
        requestAnimationFrame(() => {
            if (dragInside) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                drag.style.left = mouseX + 'px';
                drag.style.top = mouseY + 'px';
                drag.style.opacity = '1';
            }
            isDragging = false;
        });
    }
});

shopList.addEventListener("mouseleave", () => {
    dragInside = false;
    drag.style.opacity = '0';
});



let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const wrap = document.querySelector('#wrapper');
    const footer = document.querySelector('#footer');
    const footerOffsetTop = footer.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;

    // pc와 mob 버전 모두 선택
    const quickCursorPc = document.querySelector('#footer .quick_cursor.pc');
    const quickCursorMob = document.querySelector('#footer .quick_cursor.mob');
    
    // 버튼 이미지 변경
    const shopBtnPc = document.querySelector('.quick_cursor.pc .btn.shop img');
    const chatBtnPc = document.querySelector('.quick_cursor.pc .btn.chat img');
    const topBtnPc = document.querySelector('.quick_cursor.pc .btn.top img');

    const shopBtnMob = document.querySelector('.quick_cursor.mob .btn.shop img');
    const chatBtnMob = document.querySelector('.quick_cursor.mob .btn.chat img');
    const topBtnMob = document.querySelector('.quick_cursor.mob .btn.top img');

    // quickCursor의 투명도 업데이트 함수
    function updateQuickCursorOpacity(quickCursor) {
        if (window.scrollY > lastScrollY) {
            quickCursor.style.opacity = '0';
        } else {
            quickCursor.style.opacity = '1';
        }
    }

    // top 버튼 이미지와 wrap 스타일 변경 함수
    function updateIconsAndMenu(shopBtn, chatBtn, topBtn) {
        if (window.scrollY === 0) {
            shopBtn.src = 'img/shop_inverted.svg';
            chatBtn.src = 'img/chat_inverted.svg';
            topBtn.src = 'img/top_inverted.svg';
            wrap.classList.add('menu_white');
        } else {
            shopBtn.src = 'img/shop.svg';
            chatBtn.src = 'img/chat.svg';
            topBtn.src = 'img/top.svg';
            wrap.classList.remove('menu_white');
        }
    }

    // footer 위치에 따라 quickCursor 위치 조정 함수
    function updateQuickCursorPosition(quickCursor) {
        if (scrollPosition >= footerOffsetTop) {
            quickCursor.style.bottom = `${scrollPosition - footerOffsetTop + 60}px`;
        } else {
            quickCursor.style.bottom = '60px';
        }
    }

    // 각 기능을 pc와 mob에 모두 적용
    if (quickCursorPc) {
        updateQuickCursorOpacity(quickCursorPc);
        updateIconsAndMenu(shopBtnPc, chatBtnPc, topBtnPc);
        updateQuickCursorPosition(quickCursorPc);
    }
    if (quickCursorMob) {
        updateQuickCursorOpacity(quickCursorMob);
        updateIconsAndMenu(shopBtnMob, chatBtnMob, topBtnMob);
        updateQuickCursorPosition(quickCursorMob);
    }

    lastScrollY = window.scrollY;
});

// 페이지 맨 위로 이동 (모든 top 버튼에 적용)
document.querySelectorAll('.btn.top a').forEach((topButton) => {
    topButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

