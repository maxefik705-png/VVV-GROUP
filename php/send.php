<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit;
}

$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($phone)) {

    echo json_encode([
        "success" => false,
        "message" => "Заполните обязательные поля."
    ]);

    exit;
}

/* ==========================
   НАСТРОЙКИ
========================== */

$to = "maxefik705@gmail.com"; // Укажите вашу почту

$subject = "Новая заявка с сайта VVV GROUP";

/* ========================== */

$text = "
Новая заявка с сайта VVV GROUP

Имя: $name

Телефон: $phone

E-mail: $email

Сообщение:

$message
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: VVV GROUP <no-reply@vvvgroup.ru>\r\n";

if (mail($to, $subject, $text, $headers)) {

    echo json_encode([
        "success" => true,
        "message" => "Спасибо! Заявка успешно отправлена."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Ошибка отправки."
    ]);

}
