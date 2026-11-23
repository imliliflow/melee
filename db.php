<?php
declare(strict_types=1);

$availableDrivers = PDO::getAvailableDrivers();
if (!in_array('sqlite', $availableDrivers, true)) {
    http_response_code(500);
    exit('Драйвер PDO SQLite (pdo_sqlite) недоступен в PHP.');
}

$dataDir = 'C:\\xampp\\site-data';
if (!is_dir($dataDir)) {
    if (!mkdir($dataDir, 0775, true) && !is_dir($dataDir)) {
        http_response_code(500);
        exit('Не удалось создать каталог для базы данных.');
    }
}

$dbPath = $dataDir . '\\melee.sqlite';
$pdo = new PDO('sqlite:' . $dbPath, null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);

$pdo->exec(
    'CREATE TABLE IF NOT EXISTS feedback_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
    )'
);