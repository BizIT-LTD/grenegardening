<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact');
    exit;
}

function clean_text(string $value): string
{
    return trim(strip_tags(str_replace(["\r", "\n"], ' ', $value)));
}

function redirect_error(): void
{
    header('Location: /contact?status=error');
    exit;
}

if (!empty($_POST['website'] ?? '')) {
    header('Location: /contact?status=success');
    exit;
}

$name = clean_text($_POST['name'] ?? '');
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = clean_text($_POST['phone'] ?? '');
$message = trim(strip_tags((string)($_POST['message'] ?? '')));

if ($name === '' || !$email || $message === '') {
    redirect_error();
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    error_log('Grene Gardening contact form: backend/config.php is missing. Copy config.example.php to config.php and add Hostinger SMTP details.');
    redirect_error();
}

$config = require $configPath;

// PHPMailer must be installed or copied to public_html/backend/phpmailer/.
$phpmailerBase = __DIR__ . '/phpmailer/src/';
if (!file_exists($phpmailerBase . 'PHPMailer.php')) {
    error_log('Grene Gardening contact form: PHPMailer files are missing from backend/phpmailer/src/.');
    redirect_error();
}

require $phpmailerBase . 'Exception.php';
require $phpmailerBase . 'PHPMailer.php';
require $phpmailerBase . 'SMTP.php';

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port = (int)$config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo((string)$email, $name);

    $mail->Subject = 'New contact enquiry from Grene Gardening website';
    $mail->Body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\n\nMessage:\n{$message}";

    $mail->send();
    header('Location: /contact?status=success');
    exit;
} catch (Exception $exception) {
    error_log('Grene Gardening contact form error: ' . $exception->getMessage());
    redirect_error();
}

// If spam becomes a problem, add reCAPTCHA or Turnstile in addition to the honeypot field.

