<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$logoPath = $root . '/public/img/pizza-vino-logo.jpeg';
$outputDir = $root . '/public/og';

$images = [
    'brand' => ['title' => 'Pizza Vino', 'subtitle' => 'Ixelles'],
    'home-fr' => ['title' => 'Pizza Vino', 'subtitle' => 'Pizzeria Artisanale | Ixelles'],
    'home-en' => ['title' => 'Pizza Vino', 'subtitle' => 'Artisan Pizzeria | Ixelles'],
    'home-it' => ['title' => 'Pizza Vino', 'subtitle' => 'Pizzeria Artigianale | Ixelles'],
];

if (!extension_loaded('gd')) {
    fwrite(STDERR, "GD extension is required to generate OG images.\n");
    exit(1);
}

if (!is_file($logoPath)) {
    fwrite(STDERR, "Logo not found at {$logoPath}\n");
    exit(1);
}

if (!is_dir($outputDir) && !mkdir($outputDir, 0775, true) && !is_dir($outputDir)) {
    fwrite(STDERR, "Unable to create output directory {$outputDir}\n");
    exit(1);
}

$logo = imagecreatefromjpeg($logoPath);

if (!$logo) {
    fwrite(STDERR, "Unable to read logo image.\n");
    exit(1);
}

$canvasWidth = 1200;
$canvasHeight = 630;
$background = [10, 10, 10];
$text = [255, 255, 255];
$accent = [190, 190, 190];

$fontCandidates = [
    '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
    '/System/Library/Fonts/Supplemental/Arial.ttf',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf',
];

$fontPath = null;

foreach ($fontCandidates as $candidate) {
    if (is_file($candidate)) {
        $fontPath = $candidate;
        break;
    }
}

if ($fontPath === null) {
    fwrite(STDERR, "No TTF font found for OG image generation.\n");
    exit(1);
}

$logoWidth = imagesx($logo);
$logoHeight = imagesy($logo);
$logoTargetWidth = 250;
$logoTargetHeight = (int) round(($logoHeight / $logoWidth) * $logoTargetWidth);

foreach ($images as $slug => $data) {
    $title = $data['title'];
    $subtitle = $data['subtitle'];
    $canvas = imagecreatetruecolor($canvasWidth, $canvasHeight);

    if (!$canvas) {
        fwrite(STDERR, "Unable to create image canvas.\n");
        exit(1);
    }

    imageantialias($canvas, true);

    $bgColor = imagecolorallocate($canvas, $background[0], $background[1], $background[2]);
    $textColor = imagecolorallocate($canvas, $text[0], $text[1], $text[2]);
    $accentColor = imagecolorallocate($canvas, $accent[0], $accent[1], $accent[2]);

    imagefill($canvas, 0, 0, $bgColor);

    $logoX = (int) round(($canvasWidth - $logoTargetWidth) / 2);
    $logoY = 120;

    imagecopyresampled(
        $canvas,
        $logo,
        $logoX,
        $logoY,
        0,
        0,
        $logoTargetWidth,
        $logoTargetHeight,
        $logoWidth,
        $logoHeight
    );

    $titleSize = 42;
    $subtitleSize = 18;
    $titleBox = imagettfbbox($titleSize, 0, $fontPath, $title);
    $titleWidth = (int) abs($titleBox[2] - $titleBox[0]);
    $titleX = (int) round(($canvasWidth - $titleWidth) / 2);
    $titleY = $logoY + $logoTargetHeight + 95;

    imagettftext($canvas, $titleSize, 0, $titleX, $titleY, $textColor, $fontPath, $title);

    $subtitle = 'Ixelles';
    $subtitleBox = imagettfbbox($subtitleSize, 0, $fontPath, $subtitle);
    $subtitleWidth = (int) abs($subtitleBox[2] - $subtitleBox[0]);
    $subtitleX = (int) round(($canvasWidth - $subtitleWidth) / 2);
    $subtitleY = $titleY + 42;

    imagettftext($canvas, $subtitleSize, 0, $subtitleX, $subtitleY, $accentColor, $fontPath, $subtitle);

    $outputPath = $outputDir . '/' . $slug . '.png';
    imagepng($canvas, $outputPath, 9);
}

fwrite(STDOUT, "OG images generated in {$outputDir}\n");
