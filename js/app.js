// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
const dropdownToggle = document.querySelector(".show");
const dropdownMenu = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden"); // ini udah ga hidden
  // maka jalakan fungsi dibawah
  // ketika hidden tidak ada didalam classlist dropdown (dropdown menu)
  if (!dropdownMenu.classList.contains("hidden")) {
    // maka jalankan fungsi ini
    dropdownMenu.classList.toggle("animate-scale-up-hor-left"); // saat kebuka
    //  berarti didalam class dropdown akana ada nama class baru yaitu ini animate-scale-up-hor-left
  } else {
    // ketika hidden tidak ada didalam classlist dropdown (dropdown menu)
    /* kita bakal tambahin class  animate-slide-rotate-ver-right agar ada efek tutup yang keren kebetulan animasi nya menghilang (langsung terhidden)
     */
    dropdownMenu.classList.toggle("animate-slide-rotate-ver-right"); // class ini akan langsung menutup
    /* kode ini secara otomatis akan jalan
    berarti akan ada dua class disini
    animate-scale-up-hor-left dan tambahkan animate-slide-rotate-ver-right (animasi ini bersifat hidden atau langsung hilang)
     */

    dropdownMenu.classList.toggle("hidden");
    /* kalau berhenti disini berarti akan ada 2 class baru 
      animate-slide-rotate-ver-right,  animate-scale-up-hor-left makanya kita tambahin class baru yaitu hidden maka akan jadi 3 class, apakah selesai sampai sini ya nggaa, karena kalau selesai sampai sini nanti dia hidden cuma ga ketutup coba aja
       
    */
    /* maka dari itu kita pakai timeout untuk memanipulasi lagi 
    yang pertama 
    */

    setTimeout(() => {
      dropdownMenu.classList.add("hidden"); // menambahkan class hidden agar kembali ke awal
      // menghapus dua animasi
      dropdownMenu.classList.toggle("animate-slide-rotate-ver-right");
      dropdownMenu.classList.toggle("animate-scale-up-hor-left");
    }, 590);
  }
});
