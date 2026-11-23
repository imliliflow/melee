<?php
$siteName = 'MELEE';
$currentDate = date('Y-m-d H:i:s');
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Диагностика PHP — <?= htmlspecialchars($siteName, ENT_QUOTES, 'UTF-8') ?></title>
</head>
<body>
  <h1>Сайт: <?= htmlspecialchars($siteName, ENT_QUOTES, 'UTF-8') ?></h1>
  <p>Текущая дата и время сервера: <?= htmlspecialchars($currentDate, ENT_QUOTES, 'UTF-8') ?></p>
</body>
</html>