/* =====================================
   VVV GROUP
   AJAX FORM
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "Отправка...";

        const formData = new FormData(form);

        fetch("php/send.php", {

            method: "POST",

            body: formData

        })

        .then(response => response.text())

        .then(result => {

            if (result.trim() === "success") {

                showMessage(
                    "✅ Спасибо! Ваша заявка успешно отправлена.",
                    true
                );

                form.reset();

            } else {

                showMessage(
                    "❌ Не удалось отправить заявку.",
                    false
                );

            }

        })

        .catch(() => {

            showMessage(
                "❌ Ошибка соединения с сервером.",
                false
            );

        })

        .finally(() => {

            button.disabled = false;
            button.innerHTML = originalText;

        });

    });

});


function showMessage(text, success){

    const old = document.querySelector(".form-message");

    if(old){

        old.remove();

    }

    const message = document.createElement("div");

    message.className = "form-message";

    message.innerHTML = text;

    message.style.marginTop = "20px";
    message.style.padding = "18px";
    message.style.borderRadius = "10px";
    message.style.textAlign = "center";
    message.style.fontWeight = "600";
    message.style.transition = ".4s";

    if(success){

        message.style.background = "#1e7d32";
        message.style.color = "#fff";

    }else{

        message.style.background = "#8b1d1d";
        message.style.color = "#fff";

    }

    document
        .getElementById("contactForm")
        .appendChild(message);

    setTimeout(()=>{

        message.style.opacity="0";

        setTimeout(()=>{

            message.remove();

        },500);

    },5000);

}
