window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(48, 52, 39, 0.7)"; // Transparan saat user melakukan scroll
    } else {
      header.style.backgroundColor = "#303427"; // Warna asli saat di atas
    }
  });
