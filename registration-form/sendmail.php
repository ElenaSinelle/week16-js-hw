<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

$mail->setFrom('elle.sinelle@gmail.com', 'Registration form');

$mail->addAddress('mail_ellee@yahoo.com');

$mail->Subject = 'Данные формы регистрации';

$body = '<h1>Данные формы регистрации</h1>';

$body .='<p><span>email при логине: </span>'.$_POST['email'].'</p>';
$body .='<p><span>Пароль: </span>'.$_POST['password'].'</p>';
$body .='<p><span>Имя пользователя: </span>'.$_POST['username'].'</p>';
$body .='<p><span>email при регистрации: </span>'.$_POST['emailReg'].'</p>';
$body .='<p><span>Возраст: </span>'.$_POST['age'].'</p>';
$body .='<p><span>Пол: </span>'.$_POST['gender'].'</p>';
$body .='<p><span>Профессия: </span>'.$_POST['profession'].'</p>';
$body .='<p><span>Пароль при регистрации: </span>'.$_POST['passwordReg'].'</p>';

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>