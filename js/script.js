/* =====================================
   VVV GROUP
   MAIN SCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================= */

    window.addEventListener("load", () => {

        const preloader = document.getElementById("preloader");

        setTimeout(() => {

            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

        }, 1200);

    });


    /* =========================
       HEADER SCROLL
    ========================= */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =========================
       BURGER MENU
    ========================= */

    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");

    if (burger) {

        burger.addEventListener("click", () => {

            menu.classList.toggle("active");

            burger.classList.toggle("active");

        });

    }


    /* =========================
       CLOSE MENU AFTER CLICK
    ========================= */

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            burger.classList.remove("active");

        });

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /* =========================
       SCROLL ANIMATIONS
    ========================= */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom"

    ).forEach(el => observer.observe(el));


    /* =========================
       TO TOP BUTTON
    ========================= */

    const toTop = document.getElementById("toTop");

    if (toTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                toTop.classList.add("show");

            } else {

                toTop.classList.remove("show");

            }

        });

        toTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =========================
       ACTIVE MENU ITEM
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /* =========================
       COUNTER ANIMATION
    ========================= */

    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(counter => {

        let started = false;

        const runCounter = () => {

            if (started) return;

            started = true;

            const target = +counter.dataset.counter;

            let value = 0;

            const step = Math.ceil(target / 80);

            const timer = setInterval(() => {

                value += step;

                if (value >= target) {

                    value = target;

                    clearInterval(timer);

                }

                counter.innerText = value;

            }, 20);

        };

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounter();

                }

            });

        });

        counterObserver.observe(counter);

    });


    /* =========================
       PARALLAX HERO
    ========================= */

    const hero = document.querySelector(".hero-bg");

    if (hero) {

        window.addEventListener("scroll", () => {

            hero.style.transform =
                `translateY(${window.pageYOffset * 0.25}px) scale(1.08)`;

        });

    }

});
