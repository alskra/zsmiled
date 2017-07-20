var $screenSm = 768, $screenMd = 1024, $screenLg = 1170;

var $fontSizeRoot = 16, $fontSizeRootComputed = parseInt($('html').css('fontSize'));

var $screenSmMin = $screenSm/$fontSizeRoot + 'em'; console.log('$screenSmMin = ' + $screenSmMin + ' (' + $screenSm + 'px)');
var $screenMdMin = $screenMd/$fontSizeRoot + 'em'; console.log('$screenMdMin = ' + $screenMdMin + ' (' + $screenMd + 'px)');
var $screenLgMin = $screenLg/$fontSizeRoot + 'em'; console.log('$screenLgMin = ' + $screenLgMin + ' (' + $screenLg + 'px)');

var $screenXsMax = ($screenSm - 1)/$fontSizeRoot + 'em'; console.log('$screenXsMax = ' + $screenXsMax);
var $screenSmMax = ($screenMd - 1)/$fontSizeRoot + 'em'; console.log('$screenSmMax = ' + $screenSmMax);
var $screenMdMax = ($screenLg - 1)/$fontSizeRoot + 'em'; console.log('$screenMdMax = ' + $screenMdMax);




$(function () {
    $('body').on('click', '[data-toggle="menu"]', function () {
        $(this).toggleClass('glyphicon-menu-lines glyphicon-cancel');
        $navBox = $(this).closest('.nav-box');
        $navBox.find('[data-toggle="search"]').removeClass('glyphicon-cancel').addClass('glyphicon-icon-search');
        $navBox.find('.menu').slideToggle(200);
        $navBox.find('.form-search').fadeOut(200);
    }).on('click', '[data-toggle="search"]', function () {
        $(this).toggleClass('glyphicon-icon-search glyphicon-cancel');
        $navBox = $(this).closest('.nav-box');
        $navBox.find('[data-toggle="menu"]').removeClass('glyphicon-cancel').addClass('glyphicon-menu-lines');
        $navBox.find('.menu').slideUp(200);
        $navBox.find('.form-search').fadeToggle(200).find('.form-search__field').focus();
    });
});

$(function () {
    $('body').on('click', '.menu__item_submenu>.menu__btn>.menu__icon', function (e) {
        e.preventDefault();
        $('.menu__submenu')
            .not($(this).parent().next('.menu__submenu').toggleClass('opened').toggle().parent().toggleClass('opened').end())
            .not($(this).parents('.menu__submenu'))
            .removeClass('opened').hide().parent().removeClass('opened');
    }).on('click', function (e) {
        if (!$(e.target).closest('.menu__item_submenu>.menu__btn>.menu__icon').length) {
            $('.menu__submenu').removeClass('opened').hide().parent().removeClass('opened');
        }
    });
});



$(function () {
    $('.slider-main').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev glyphicon glyphicon-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next glyphicon glyphicon-angle-right"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [

        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading');
    });
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJuYXYtYm94LmpzIiwibWVudS5qcyIsImZvcm0tc2VhcmNoLmpzIiwic2xpZGVyLW1haW4uanMiLCJyZXZpZXdzLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBIiwiZmlsZSI6ImJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsICRzY3JlZW5NZCA9IDEwMjQsICRzY3JlZW5MZyA9IDExNzA7XG5cbnZhciAkZm9udFNpemVSb290ID0gMTYsICRmb250U2l6ZVJvb3RDb21wdXRlZCA9IHBhcnNlSW50KCQoJ2h0bWwnKS5jc3MoJ2ZvbnRTaXplJykpO1xuXG52YXIgJHNjcmVlblNtTWluID0gJHNjcmVlblNtLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWluID0gJyArICRzY3JlZW5TbU1pbiArICcgKCcgKyAkc2NyZWVuU20gKyAncHgpJyk7XG52YXIgJHNjcmVlbk1kTWluID0gJHNjcmVlbk1kLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWluID0gJyArICRzY3JlZW5NZE1pbiArICcgKCcgKyAkc2NyZWVuTWQgKyAncHgpJyk7XG52YXIgJHNjcmVlbkxnTWluID0gJHNjcmVlbkxnLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbkxnTWluID0gJyArICRzY3JlZW5MZ01pbiArICcgKCcgKyAkc2NyZWVuTGcgKyAncHgpJyk7XG5cbnZhciAkc2NyZWVuWHNNYXggPSAoJHNjcmVlblNtIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuWHNNYXggPSAnICsgJHNjcmVlblhzTWF4KTtcbnZhciAkc2NyZWVuU21NYXggPSAoJHNjcmVlbk1kIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NYXggPSAnICsgJHNjcmVlblNtTWF4KTtcbnZhciAkc2NyZWVuTWRNYXggPSAoJHNjcmVlbkxnIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNYXggPSAnICsgJHNjcmVlbk1kTWF4KTtcbiIsIiIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwibWVudVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZ2x5cGhpY29uLW1lbnUtbGluZXMgZ2x5cGhpY29uLWNhbmNlbCcpO1xuICAgICAgICAkbmF2Qm94ID0gJCh0aGlzKS5jbG9zZXN0KCcubmF2LWJveCcpO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInNlYXJjaFwiXScpLnJlbW92ZUNsYXNzKCdnbHlwaGljb24tY2FuY2VsJykuYWRkQ2xhc3MoJ2dseXBoaWNvbi1pY29uLXNlYXJjaCcpO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJy5tZW51Jykuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICAgICAgJG5hdkJveC5maW5kKCcuZm9ybS1zZWFyY2gnKS5mYWRlT3V0KDIwMCk7XG4gICAgfSkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cInNlYXJjaFwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZ2x5cGhpY29uLWljb24tc2VhcmNoIGdseXBoaWNvbi1jYW5jZWwnKTtcbiAgICAgICAgJG5hdkJveCA9ICQodGhpcykuY2xvc2VzdCgnLm5hdi1ib3gnKTtcbiAgICAgICAgJG5hdkJveC5maW5kKCdbZGF0YS10b2dnbGU9XCJtZW51XCJdJykucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1jYW5jZWwnKS5hZGRDbGFzcygnZ2x5cGhpY29uLW1lbnUtbGluZXMnKTtcbiAgICAgICAgJG5hdkJveC5maW5kKCcubWVudScpLnNsaWRlVXAoMjAwKTtcbiAgICAgICAgJG5hdkJveC5maW5kKCcuZm9ybS1zZWFyY2gnKS5mYWRlVG9nZ2xlKDIwMCkuZmluZCgnLmZvcm0tc2VhcmNoX19maWVsZCcpLmZvY3VzKCk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tZW51X19pdGVtX3N1Ym1lbnU+Lm1lbnVfX2J0bj4ubWVudV9faWNvbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5tZW51X19zdWJtZW51JykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpLnRvZ2dsZSgpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKS5lbmQoKSlcbiAgICAgICAgICAgIC5ub3QoJCh0aGlzKS5wYXJlbnRzKCcubWVudV9fc3VibWVudScpKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuZWQnKS5oaWRlKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVfX2l0ZW1fc3VibWVudT4ubWVudV9fYnRuPi5tZW51X19pY29uJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcubWVudV9fc3VibWVudScpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKS5oaWRlKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBnbHlwaGljb24gZ2x5cGhpY29uLWFuZ2xlLWxlZnRcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgZ2x5cGhpY29uIGdseXBoaWNvbi1hbmdsZS1yaWdodFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG59KTsiLCIiXX0=
