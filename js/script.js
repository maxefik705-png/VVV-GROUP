/* ======================================
   AJAX отправка формы
====================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch("php/send.php", {

            method: "POST",

            body: formData

        })

        .then(response => response.json())

        .then(data => {

            alert(data.message);

            if (data.success) {

                contactForm.reset();

            }

        })

        .catch(() => {

            alert("Ошибка соединения с сервером.");

        });

    });

}
