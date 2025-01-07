const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const searchBar = document.querySelector(".search-bar");
const overlay2 = document.querySelector(".overlay2");
const burger = document.querySelector("#burger");

btn.addEventListener("click", () => {
    const isActive = search.classList.toggle("active");
    searchBar.classList.toggle("active");
    overlay2.classList.toggle("active");
    input.focus();

    // `top` değerini değiştir
    burger.style.top = isActive ? "11.6rem" : "5.4rem";
});

// Overlay üzerine tıklama olayını kontrol et
overlay2.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target)) {
        search.classList.remove("active");
        searchBar.classList.remove("active");
        overlay2.classList.remove("active");

        // `top` değerini eski haline getir
        burger.style.top = "5.4rem";
    }
});

$(document).ready(function() {
    // Menu simgesine tıklanınca menüyü açma/kapatma
    $('.menu').click(function() {
        // Menü açıldığında
        if ($('.hidden-menu').css('display') == 'none') {
            $('.overlay').fadeIn(); // Overlay'i göster
            $('.hidden-menu').css('display', 'block'); // Menü görünür hale gelsin
            setTimeout(function() {
                $('.hidden-menu').css('right', '0'); // Animasyonla menüyü sağa kaydır
            }, 10); // CSS geçişinin başlaması için küçük bir zaman aralığı
        } else {
            $('.overlay').fadeOut(); // Overlay'i gizle
            $('.hidden-menu').css('right', '-30%'); // Menü sağa kayarak kapanır
            setTimeout(function() {
                $('.hidden-menu').css('display', 'none'); // Menü tamamen gizlenir
            }, 300); // Animasyon bitene kadar gizleme
        }
    });

    // Overlay'e tıklandığında menüyü kapatma
    $('.overlay').click(function() {
        $('.overlay').fadeOut(); // Overlay'i gizle
        $('.hidden-menu').css('right', '-30%'); // Menü sağa kayarak kapanır
        setTimeout(function() {
            $('.hidden-menu').css('display', 'none'); // Menü tamamen gizlenir
        }, 300); // Animasyon bitene kadar gizleme
    });
});

$(document).ready(function(){
    $('.banner-slider').slick({
        dots: false,               // Alt tarafta noktalar
        arrows: false,             // Oklar
        infinite: true,           // Sonsuz döngü
        speed: 500,               // Geçiş hızı (ms)
        slidesToShow: 1,          // Bir slayt gösterilsin
        slidesToScroll: 1,        // Her seferde bir slayt kaydırılsın
        autoplay: true,           // Otomatik oynatma
        autoplaySpeed: 3000,      // Otomatik oynatma süresi (ms)
        adaptiveHeight: true,      // Yüksekliği içeriğe göre ayarla
    });
});