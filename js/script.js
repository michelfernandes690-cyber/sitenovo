document.addEventListener("DOMContentLoaded", function () {

    console.log("Rádio Viola Raiz carregada!");

});


// Rolagem suave do menu

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        let destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
