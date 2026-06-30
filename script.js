// ======================================================
// S&K INDUMENTARIA
// script.js
// Versión 0.1
// ======================================================

// ---------- MENÚ LATERAL ----------

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {

    sidebar.classList.add("open");
    overlay.classList.add("show");

});

closeSidebar.addEventListener("click", closeMenus);
overlay.addEventListener("click", closeMenus);



// ---------- CARRITO ----------

const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

cartButton.addEventListener("click", () => {

    cartPanel.classList.add("open");
    overlay.classList.add("show");

});

closeCart.addEventListener("click", closeMenus);



// ---------- CERRAR TODO ----------

function closeMenus(){

    sidebar.classList.remove("open");

    cartPanel.classList.remove("open");

    overlay.classList.remove("show");

}



// ---------- CARRITO VACÍO ----------

const cartItems = document.getElementById("cartItems");

cartItems.innerHTML = `

<div class="empty-cart">

    <i class="fa-solid fa-bag-shopping"></i>

    <h3>Tu pedido está vacío</h3>

    <p>

        Agregá productos para comenzar.

    </p>

</div>

`;



// ---------- BOTÓN WHATSAPP ----------

const whatsappButton = document.getElementById("sendWhatsapp");

whatsappButton.addEventListener("click", () => {

    alert("Todavía no agregaste productos.");

});



// ---------- BUSCADOR ----------

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    // Más adelante filtraremos los productos
    // que vienen desde Google Sheets.

});



// ---------- CONTACTO ----------

document.getElementById("contactButton").addEventListener("click",(e)=>{

    e.preventDefault();

    window.open(

        "https://wa.me/TUNUMERO",

        "_blank"

    );

});