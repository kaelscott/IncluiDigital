function scrollSection() {

    $(".article-scroll").click( ()  => {
        $("html, body").animate({
            scrollTop: $(".articles").offset().top
        }, 600)
    })
}

export default scrollSection