function animationToggle() {
    const animationToggleCheckbox = $(".animation-toggle-checkbox")
    const animationToggleText = $(".animation-toggle-text")
    return (

        animationToggleCheckbox.click(() => {
            $("body").toggleClass("animation")
            $("img").toggleClass("img-animation")

            if ($("body").hasClass("animation")) {
                animationToggleText.text("Desativar animações do site");
            } else {
                animationToggleText.text("Ativar animações do site");
            }
        })
    )
}

export default animationToggle