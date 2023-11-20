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
  // background: "#1f1f1f",
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

// Skills

const skillsTitle = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "elastic.out(1,0.7)",
  },
  scrollTrigger: {
    trigger: ".skills-container",
    start: "top center",
    end: "top 30%",
  },
});

skillsTitle.fromTo(
  ".skills-container .skills-title span",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.15,
  }
);

const skilltl = gsap.timeline({
  defaults: {
    duration: 0.75,
  },
  scrollTrigger: {
    trigger: ".skills-container",
    start: "center center",
    end: 8000,
    pin: true,
    scrub: true,
  },
});

skilltl.to(".skills-container .progress-bar .bar", {
  width: "10%",
});
skilltl.to(
  ".skills-container .progress-bar .bar",
  {
    border: "2px solid",
  },
  "<"
);
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "10%",
  },
  "<50%"
);
skilltl.to(
  ".skills-container .skills-title span",
  {
    color: "#ffffff",
    fontSize: 28,
  },
  "<"
);

// Html
skilltl.to(
  ".skills-container",
  {
    background: "#FF6D00",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .html h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .html img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// css
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "20%",
    background: "#0B75BF",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#0B75BF",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .css h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .css img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// scss
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 2,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "30%",
    background: "#D2699E",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#D2699E",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .scss h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .scss img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// bootstrap
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 3,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "40%",
    background: "#7919F8",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#7919F8",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .bootstrap h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .bootstrap img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// js
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 4,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "50%",
    background: "#E5A42C",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#E5A42C",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .javascript h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .javascript img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// jquery
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 5,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "60%",
    background: "#106DAE",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#106DAE",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .jquery h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .jquery img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// angular
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 6,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "70%",
    background: "#BB1D19",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#BB1D19",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .angular h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .angular img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// ts
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 7,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "80%",
    background: "#377CC8",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#377CC8",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .typescript h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .typescript img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// material
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 8,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "90%",
    background: "#FB9008",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#FB9008",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .material h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .material img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// jgsap
skilltl.to(".skills-container .skills-content", {
  x: -window.innerWidth * 9,
  delay: 0.3,
});
skilltl.to(
  ".skills-container .progress-bar .bar .bg",
  {
    width: "100%",
    background: "#088409",
  },
  "<"
);
skilltl.to(
  ".skills-container",
  {
    background: "#088409",
  },
  "<"
);
skilltl.fromTo(
  ".skills-container .gsap h3",
  {
    x: 50,
  },
  {
    x: 0,
    opacity: 1,
  }
);
skilltl.fromTo(
  ".skills-container .gsap img",
  {
    y: 50,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

skilltl.to(".skills-container .skills-content", {});
