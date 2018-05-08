$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 300);
            }
        });
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scroll-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('.scroll-to-top').stop(true, true).fadeOut();
    }
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $("#nav").offset().top }, "1000"); return false }) })

$("#cookie-form").submit(function (e) {
    e.preventDefault();

    var data = {
        name: $('.name-input').val(),
        email: $('.email-input').val(),
        accept: $(".input-checkbox").is(":checked")
    };
    $.ajax({
        type: "POST",
        url: "send-email.php",
        data: data,
        success: function (data) {
            alert('mail poszedł ' + data);
        },
        error: function(data) {
            alert('error ' + data)
        }
    });
});
