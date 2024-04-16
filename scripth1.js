document.addEventListener("DOMContentLoaded", function() {
    const aboutUsHeader = document.querySelector("header .about-us a");
    const aboutUsFooter = document.querySelector("footer .about-us p");

    aboutUsHeader.addEventListener("click", function(event) {
        event.preventDefault();
        aboutUsFooter.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeProducts = document.querySelectorAll(".cake .product img");
    cakeProducts.forEach(product => {
        product.addEventListener("click", function() {
            // Redirect ke halaman dpCake.html
            window.location.href = "dpCake.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeProducts = document.querySelectorAll(".cupcake .product img");
    cakeProducts.forEach(product => {
        product.addEventListener("click", function() {
            // Redirect ke halaman dpCupake.html
            window.location.href = "dpCupcake.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeProducts = document.querySelectorAll(".birthdayCake .product img");
    cakeProducts.forEach(product => {
        product.addEventListener("click", function() {
            // Redirect ke halaman dpBdCake.html
            window.location.href = "dpBdCake.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeProducts = document.querySelectorAll(".cookies .product img");
    cakeProducts.forEach(product => {
        product.addEventListener("click", function() {
            // Redirect ke halaman dpCookies.html
            window.location.href = "dpCookies.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeProducts = document.querySelectorAll(".brownies .product img");
    cakeProducts.forEach(product => {
        product.addEventListener("click", function() {
            // Redirect ke halaman dpBrownies.html
            window.location.href = "dpBrownies.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cake1Product = document.getElementById("cake1");

    cake1Product.addEventListener("click", function() {
        // Redirect ke halaman dpCake.html saat gambar produk "Nama Produk 1" diklik
        window.location.href = "dpCake.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cupcake2Product = document.getElementById("cupcake2");

    cupcake2Product.addEventListener("click", function() {
        // Redirect ke halaman dpCupcake.html saat gambar produk "Nama Produk 2" diklik
        window.location.href = "dpCupcake.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cupcake2Product = document.getElementById("bdCake3");

    cupcake2Product.addEventListener("click", function() {
        // Redirect ke halaman dpCupcake.html saat gambar produk "Nama Produk 2" diklik
        window.location.href = "dpBdCake.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cupcake2Product = document.getElementById("cookies4");

    cupcake2Product.addEventListener("click", function() {
        // Redirect ke halaman dpCupcake.html saat gambar produk "Nama Produk 2" diklik
        window.location.href = "dpCookies.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cupcake2Product = document.getElementById("brownies5");

    cupcake2Product.addEventListener("click", function() {
        // Redirect ke halaman dpCupcake.html saat gambar produk "Nama Produk 2" diklik
        window.location.href = "dpBrownies.html";
    });
});