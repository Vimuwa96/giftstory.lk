const texts = [
  "Welcome to GiftStory Online Store",
  "Create Your Own Gift Box",
  "Special Gifts for Every Occasion",
  "Unique Surprises for Your Loved Ones",
];

let index = 0;
const textElement = document.getElementById("welcomeText");

function changeText() {
  textElement.classList.remove("show");

  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
    textElement.classList.add("show");
  }, 500);
}

textElement.classList.add("fade-text");
setTimeout(() => {
  textElement.classList.add("show");
}, 100);

setInterval(changeText, 5000);

// Mobile
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Search
function openSearch() {
  document.getElementById("searchOverlay").classList.add("active");
}

function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("active");
}

// Navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
}

// Hero
$(document).ready(function () {
  $(".your-class").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    speed: 800,
    infinite: true,
    pauseOnHover: false,
  });
});

$(document).ready(function () {
  $(".main-categories").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Back to top

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$(document).ready(function () {
  $(".top-seller").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
