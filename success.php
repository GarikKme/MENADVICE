<?php
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$email = htmlspecialchars($_POST["email"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "garikk89@i.ua, ho6otok@gmail.com"; // e-mail администратора Hello@menadvice.ru


// Отправка письма администратору сайта

$tema = "Здравствуйте, Вам заявка с сайта MENADVICE";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
Телефон: $tel<br>
Почта: $email<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: MENADVICE <mailresendering@gmail.com> \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

?>