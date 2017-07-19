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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJuYXYtYm94LmpzIiwibWVudS5qcyIsImZvcm0tc2VhcmNoLmpzIiwic2xpZGVyLW1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRzY3JlZW5TbSA9IDc2OCwgJHNjcmVlbk1kID0gMTAyNCwgJHNjcmVlbkxnID0gMTE3MDtcblxudmFyICRmb250U2l6ZVJvb3QgPSAxNiwgJGZvbnRTaXplUm9vdENvbXB1dGVkID0gcGFyc2VJbnQoJCgnaHRtbCcpLmNzcygnZm9udFNpemUnKSk7XG5cbnZhciAkc2NyZWVuU21NaW4gPSAkc2NyZWVuU20vJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NaW4gPSAnICsgJHNjcmVlblNtTWluICsgJyAoJyArICRzY3JlZW5TbSArICdweCknKTtcbnZhciAkc2NyZWVuTWRNaW4gPSAkc2NyZWVuTWQvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNaW4gPSAnICsgJHNjcmVlbk1kTWluICsgJyAoJyArICRzY3JlZW5NZCArICdweCknKTtcbnZhciAkc2NyZWVuTGdNaW4gPSAkc2NyZWVuTGcvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTGdNaW4gPSAnICsgJHNjcmVlbkxnTWluICsgJyAoJyArICRzY3JlZW5MZyArICdweCknKTtcblxudmFyICRzY3JlZW5Yc01heCA9ICgkc2NyZWVuU20gLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5Yc01heCA9ICcgKyAkc2NyZWVuWHNNYXgpO1xudmFyICRzY3JlZW5TbU1heCA9ICgkc2NyZWVuTWQgLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5TbU1heCA9ICcgKyAkc2NyZWVuU21NYXgpO1xudmFyICRzY3JlZW5NZE1heCA9ICgkc2NyZWVuTGcgLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5NZE1heCA9ICcgKyAkc2NyZWVuTWRNYXgpO1xuIiwiIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJtZW51XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdnbHlwaGljb24tbWVudS1saW5lcyBnbHlwaGljb24tY2FuY2VsJyk7XG4gICAgICAgICRuYXZCb3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5uYXYtYm94Jyk7XG4gICAgICAgICRuYXZCb3guZmluZCgnW2RhdGEtdG9nZ2xlPVwic2VhcmNoXCJdJykucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1jYW5jZWwnKS5hZGRDbGFzcygnZ2x5cGhpY29uLWljb24tc2VhcmNoJyk7XG4gICAgICAgICRuYXZCb3guZmluZCgnLm1lbnUnKS5zbGlkZVRvZ2dsZSgyMDApO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJy5mb3JtLXNlYXJjaCcpLmZhZGVPdXQoMjAwKTtcbiAgICB9KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwic2VhcmNoXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdnbHlwaGljb24taWNvbi1zZWFyY2ggZ2x5cGhpY29uLWNhbmNlbCcpO1xuICAgICAgICAkbmF2Qm94ID0gJCh0aGlzKS5jbG9zZXN0KCcubmF2LWJveCcpO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJ1tkYXRhLXRvZ2dsZT1cIm1lbnVcIl0nKS5yZW1vdmVDbGFzcygnZ2x5cGhpY29uLWNhbmNlbCcpLmFkZENsYXNzKCdnbHlwaGljb24tbWVudS1saW5lcycpO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJy5tZW51Jykuc2xpZGVVcCgyMDApO1xuICAgICAgICAkbmF2Qm94LmZpbmQoJy5mb3JtLXNlYXJjaCcpLmZhZGVUb2dnbGUoMjAwKS5maW5kKCcuZm9ybS1zZWFyY2hfX2ZpZWxkJykuZm9jdXMoKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLm1lbnVfX2l0ZW1fc3VibWVudT4ubWVudV9fYnRuPi5tZW51X19pY29uJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWVudV9fc3VibWVudScpXG4gICAgICAgICAgICAubm90KCQodGhpcykucGFyZW50KCkubmV4dCgnLm1lbnVfX3N1Ym1lbnUnKS50b2dnbGVDbGFzcygnb3BlbmVkJykudG9nZ2xlKCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpLmVuZCgpKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLnBhcmVudHMoJy5tZW51X19zdWJtZW51JykpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpLmhpZGUoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudV9faXRlbV9zdWJtZW51Pi5tZW51X19idG4+Lm1lbnVfX2ljb24nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpLmhpZGUoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIiIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXItbWFpbicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGdseXBoaWNvbiBnbHlwaGljb24tYW5nbGUtbGVmdFwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBnbHlwaGljb24gZ2x5cGhpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAgICBdXG4gICAgfSkub24oJ2xhenlMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBpbWFnZSwgaW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgJChpbWFnZSkuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbn0pOyJdfQ==
