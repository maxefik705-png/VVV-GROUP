<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: ../index.html");
    exit;
}

$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

$to = "maxefik705@gmail.com";   // ← сюда приходит заявка

$subject = "Новая заявка с сайта VVV GROUP";

$text = "
Новая заявка с сайта VVV GROUP

Имя: $name

Телефон: $phone

E-mail: $email

Сообщение:
$message
";

$headers = "From: VVV GROUP <no-reply@vvv-group.ru>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $text, $headers)) {

    header("Location: ../index.html?success=1");

} else {

    header("Location: ../index.html?error=1");

}

exit;

?>
