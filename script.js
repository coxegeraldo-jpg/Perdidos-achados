/*=========================================
  PERDIDOS & ACHADOS.AO
  script.js
=========================================*/

console.log("Perdidos & Achados iniciado!");

/*==========================
 BOTÃO PUBLICAR
==========================*/
const btnPublicar = document.getElementById("btnPublicar");

if (btnPublicar) {

    btnPublicar.addEventListener("click", function () {

        window.location.href = "/paginas/publicar.html";

    });

}

/*==========================
 BOTÃO BUSCAR
==========================*/

const btnBuscar = document.querySelector(".pesquisa button");

if (btnBuscar) {

    btnBuscar.addEventListener("click", pesquisar);

}

function pesquisar(){

async function pesquisar() {

    const texto = document.getElementById("pesquisa").value.trim();

    if (texto === "") {
        alert("Digite o que procura.");
        return;
    }

    window.location.href = "/resultados.html?q=" + encodeURIComponent(texto);

}

localStorage.setItem("pesquisa",pesquisa);

window.location.href="paginas/resultados.html";

}
/*==========================
 MENU
==========================*/

const links = document.querySelectorAll("nav a");

links.forEach(function(link){

    link.addEventListener("click",function(e){

        e.preventDefault();

        alert("Esta página será criada na próxima versão.");

    });

});

/*==========================
 CARDS DOS ANÚNCIOS
==========================*/

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.style.cursor="pointer";

    card.addEventListener("click",function(){

        alert("Abrir detalhes do anúncio.");

    });

});

/*==========================
 ANIMAÇÃO
==========================*/

window.addEventListener("load",function(){

    document.body.style.opacity="1";

});

/*==========================
 ROLAGEM SUAVE
==========================*/

document.documentElement.style.scrollBehavior="smooth";

/*==========================
 FUTURAS FUNÇÕES
==========================*/

// Login()

// Publicar()

// Resultados()

// Perfil()

// Admin()

// Favoritos()

// Notificações()

// WhatsApp()

// Firebase()

// PostgreSQL()

// NodeJS()
// MENU MOBILE

const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector("nav");

if(menuMobile){

menuMobile.addEventListener("click",function(){

if(menu.style.display=="block"){

menu.style.display="none";

}else{

menu.style.display="block";

}

});

}
const topo=document.getElementById("topo");

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topo.style.display="block";

}else{

topo.style.display="none";

}

});

topo.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// ===============================
// Efeito ao clicar nos links do menu
// ===============================

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {

    link.addEventListener("click", function () {

        this.style.opacity = "0.6";

        setTimeout(() => {

            this.style.opacity = "1";

        }, 150);

    });

});
//===============================
// BOTÃO PESQUISAR
//===============================

const btnPesquisar = document.getElementById("btnPesquisar");

if(btnPesquisar){

    btnPesquisar.addEventListener("click",()=>{

        const pesquisa = document.getElementById("pesquisa").value.trim();

        if(pesquisa===""){

            alert("Digite o que pretende procurar.");

            return;

        }

        window.location.href="/paginas/resultados.html?q="+encodeURIComponent(pesquisa);

    });

}