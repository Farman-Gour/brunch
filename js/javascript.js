$(document).ready(function () {
    $("nav a").click(function (e) {
        e.preventDefault();
        var x = $(this).attr("href");
        $("body,html").animate({
            "scrollTop": $(x).offset().top
        }, "slow")
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".gotop").fadeIn("slow");
        }
        else {
            $(".gotop").fadeOut("slow");
        }
    })

    $(".gotop").click(function () {
        $("body,html").animate({
            "scrollTop": "0"
        }, "slow")
    })
})