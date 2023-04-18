const tl = gsap.timeline();

      tl.from(".intro > div", 0.8, {
        opacity: 0,
        y: -100,
        ease: "power4.out",
        delay: 1,
        stagger: {
          amount: 0.3,
        },
      });

      tl.from(
        ".hr",
        1.8,
        {
          width: 0,
          ease: "power4.out",
          delay: 1,
          stagger: {
            amount: 0.3,
          },
        },
        "-=1.5"
      );

      tl.from(
        ".reveal div",
        1.8,
        {
          y: 200,
          ease: "power4.out",
          stagger: {
            amount: 0.8,
          },
        },
        "-=2"
      );




      // TIMELINE

  const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("a")) {
  link.onmousemove = (e) => {
    const rect = link.getBoundingClientRect(),
      img = link.querySelector("img");
  };
}

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth;

  nav.animate(
    {
      transform: `translateX(${percent * nav.offsetWidth * -1}px)`,
    },
    {
      fill: "forwards",
      duration: 3000,
    }
  );
};


