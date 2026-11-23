<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

function h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$errors = [];
$name = '';
$email = '';
$subject = '';
$message = '';
$saved = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim((string)($_POST['name'] ?? ''));
    $email = trim((string)($_POST['email'] ?? ''));
    $subject = trim((string)($_POST['subject'] ?? ''));
    $message = trim((string)($_POST['message'] ?? ''));

    if ($name === '') {
        $errors[] = 'Укажите имя.';
    }
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Укажите корректный email.';
    }
    if ($subject === '') {
        $errors[] = 'Укажите тему обращения.';
    }
    if ($message === '') {
        $errors[] = 'Напишите текст сообщения.';
    }

    if (empty($errors)) {
        $stmt = $pdo->prepare(
            'INSERT INTO feedback_messages (name, email, subject, message, created_at)
             VALUES (:name, :email, :subject, :message, :created_at)'
        );
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':subject' => $subject,
            ':message' => $message,
            ':created_at' => date('Y-m-d H:i:s'),
        ]);
        $saved = true;
    }
} else {
    $errors[] = 'Форма должна быть отправлена методом POST.';
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Результат отправки — MELEE</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 16px; line-height: 1.5; }
        .box { border: 1px solid #d0d7de; border-radius: 10px; padding: 20px; background: #f8fafc; }
        .ok { border-color: #16a34a; background: #f0fdf4; }
        .err { border-color: #dc2626; background: #fef2f2; }
        .links { margin-top: 20px; display: flex; gap: 16px; }
    </style>
</head>
<body>
    <?php if ($saved): ?>
        <div class="box ok">
            <h1>Обращение сохранено</h1>
            <p><strong>Имя:</strong> <?= h($name) ?></p>
            <p><strong>Email:</strong> <?= h($email) ?></p>
            <p><strong>Тема:</strong> <?= h($subject) ?></p>
            <p><strong>Сообщение:</strong><br><?= nl2br(h($message)) ?></p>
        </div>
    <?php else: ?>
        <div class="box err">
            <h1>Ошибка при отправке формы</h1>
            <ul>
                <?php foreach ($errors as $error): ?>
                    <li><?= h($error) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <div class="links">
        <a href="index.html#feedback">← Вернуться к форме</a>
        <a href="messages.php">Посмотреть все обращения →</a>
    </div>
</body>
</html>