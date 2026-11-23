<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

function h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$stmt = $pdo->query(
    'SELECT id, name, email, subject, message, created_at
     FROM feedback_messages
     ORDER BY id DESC'
);
$messages = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обращения — MELEE</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 1000px; margin: 40px auto; padding: 0 16px; line-height: 1.5; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th, td { border: 1px solid #d0d7de; padding: 10px; text-align: left; vertical-align: top; }
        th { background: #f1f5f9; }
        .top-bar { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    </style>
</head>
<body>
    <div class="top-bar">
        <h1>Сохранённые обращения</h1>
        <a href="index.html#feedback">← Назад к форме</a>
    </div>

    <?php if (empty($messages)): ?>
        <p>Записей пока нет.</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Email</th>
                    <th>Тема</th>
                    <th>Сообщение</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($messages as $row): ?>
                    <tr>
                        <td><?= h((string)$row['id']) ?></td>
                        <td><?= h((string)$row['name']) ?></td>
                        <td><?= h((string)$row['email']) ?></td>
                        <td><?= h((string)$row['subject']) ?></td>
                        <td><?= nl2br(h((string)$row['message'])) ?></td>
                        <td><?= h((string)$row['created_at']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</body>
</html>