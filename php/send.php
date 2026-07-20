<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    exit("Доступ запрещен.");
}

// Получение данных из формы
$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

// =========================
// Укажите вашу почту
// =========================

$to = "maxefik705@gmail.com"; // Замените на свою почту

$subject = "Новая заявка с сайта VVV GROUP";

$text = "
Новая заявка с сайта

Имя: $name

Телефон: $phone

Email: $email

Сообщение:
$message
";

$headers = "From: no-reply@vvvgroup.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Отправка письма
if (mail($to, $subject, $text, $headers)) {

    echo "<script>
        alert('Спасибо! Ваша заявка успешно отправлена.');
        window.history.back();
    </script>";

} else {

    echo "<script>
        alert('Ошибка отправки. Попробуйте позже.');
        window.history.back();
    </script>";

}

?>
