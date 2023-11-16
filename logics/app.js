gsap.registerPlugin(ScrollTrigger);

const preloaderContainer = document.querySelector(".preloader-container");
let count = 0;
const preloaderTimeline = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power4.out",
  },
});

const countTimer = setInterval(function () {
  if (count === 100) {
    clearInterval(countTimer);
    preloaderAnimation();
  } else {
    count++;
    preloaderContainer.querySelector(".count span").innerHTML = count + "%";
  }
}, 15);

// Pre loader Animation
function preloaderAnimation() {
  window.scrollTo(0, 0);
  preloaderTimeline.to(".preloader-container .count span", {
    x: -100,
    delay: 0.25,
  });
  preloaderTimeline.to(".preloader-container .count", {
    display: "none",
    duration: 0,
  });
  preloaderTimeline.to(
    ".preloader-container .line",
    { width: "100%", duration: 1 },
    "<30%"
  );
  preloaderTimeline.to(".preloader-container .top", {
    y: "-100%",
    duration: 1,
  });
  preloaderTimeline.to(
    ".preloader-container .bottom",
    { y: "100%", duration: 1 },
    "<"
  );
  preloaderTimeline.from(
    ".preloader-container .hello span",
    {
      y: 150,
      stagger: 0.1,
      duration: 1,
      ease: "elastic.out(1,0.8)",
      opacity: 0,
    },
    "<60%"
  );
  preloaderTimeline.to(".preloader-container", {
    scale: 8,
    delay: 0.25,
    opacity: 0,
    duration: 0.75,
  });
  preloaderTimeline.to(".preloader-container", {
    display: "none",
    duration: 0,
    onComplete() {
      triggerNavbarAnimation();
    },
  });
  preloaderTimeline.to("body", {
    overflowY: "auto",
    duration: 0,
  });
}

// Navbar Animation
const navbarTimeLine = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power4.out",
  },
});

function triggerNavbarAnimation() {
  navbarTimeLine.to(".landing-container .overlay-blur", {
    ease: "power2.out",
    backdropFilter: "blur(15px)",
  });
  navbarTimeLine.fromTo(
    ".navbar-container .hero-title .first",
    {
      x: -50,
    },
    {
      x: 0,
      opacity: 1,
    }
  );
  navbarTimeLine.fromTo(
    ".navbar-container .hero-title .second",
    {
      y: -50,
    },
    {
      y: 0,
      opacity: 1,
    },
    "<40%"
  );
  navbarTimeLine.fromTo(
    ".navbar-container .hero-title .third",
    {
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
    },
    "<40%"
  );
  navbarTimeLine.fromTo(
    ".navbar-container .hero-title .fourth",
    {
      x: 50,
    },
    {
      x: 0,
      opacity: 1,
    },
    "<40%"
  );
  navbarTimeLine.fromTo(
    ".navbar-container .nav-item a",
    {
      x: -100,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "elastic.out(1,0.9)",
    },
    "<"
  );
  navbarTimeLine.to(
    ".hamburger-wrapper",
    {
      opacity: 1,
    },
    "<"
  );
  navbarTimeLine.fromTo(
    ".landing-container .landing-title h2",
    {
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
    },
    "< 10%"
  );
  navbarTimeLine.fromTo(
    ".landing-container .portfolio-btn",
    {
      x: 50,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
    },
    "<50%"
  );
  navbarTimeLine.fromTo(
    ".landing-container .landing-title h2 p span",
    {
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "elastic.out(1,0.6)",
      onComplete() {
        initializeTyped();
      },
    },
    "<35%"
  );
}

// typing Animation
function initializeTyped() {
  const typed = new Typed(".typing", {
    strings: [
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
      "Frontend Developer",
      "Angular Developer",
      "UI Developer",
      "Web Developer",
    ],
    typeSpeed: 100,
    BackspaceSpeed: 60,
    loop: true,
  });
}

// Navbar BG ScrollTrigger
const navbarScrollBgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing-container",
    start: "20% top",
    end: "40% top",
    scrub: true,
  },
});

navbarScrollBgTl.to(".navbar-container", {
  background: "#1f1f1f",
});

// Hamburger Menu
const hamburgerBtn = document.querySelector(
  ".hamburger-wrapper .hamburger-btn"
);
const hamburgerContainer = document.querySelector(".hamburger-wrapper");
const hamburgerMobileItems = document.querySelectorAll(
  ".hamburger-wrapper .mobile-hamburger-menu li a"
);

hamburgerBtn.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("active");
});

hamburgerMobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerContainer.classList.remove("active");
  });
});
