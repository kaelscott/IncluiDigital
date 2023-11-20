function themeToggle (){
    const themeButton = $(".theme-btn")
    const themeText = $("#claro-escuro")

    // Verifica se o usuário já escolheu um tema
    if(localStorage.getItem('theme') == 'light') {
        setLightTheme();
    } else {
        setDarkTheme();
    }

    // Função para definir o tema claro
    function setLightTheme() {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }

    // Função para definir o tema escuro
    function setDarkTheme() {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    themeButton.click(() => {
        $("body").toggleClass("dark")

        if ($("body").hasClass("dark")) {
            themeText.text("claro");
            localStorage.setItem('theme', 'dark');
        } else {
            themeText.text("escuro");
            localStorage.setItem('theme', 'light');
        }
    })
}

export default themeToggle
