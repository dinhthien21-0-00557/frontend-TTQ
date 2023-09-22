<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/owl.carousel.css">
    <link rel="stylesheet" href="./assets/css/owl.theme.default.css">
    
</head>

<body>

    <?php
    include './lib/fuction.php';
    if (isset($_GET['trangchu'])) {
        $page = $_GET['trangchu'];
        switch ($page) {
            case 'trangchu':
                include './template/bodyheader.php';
                break;
            default:
        }
    } else {
        include './template/header.html';
        include './template/bodyheader.html';
        include './template/menu.html';
        include './template/slider.html';
        include './template/directory.html';
        include './source/directory-detai.html';

    }
    ?>
</body>
    <script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/owl.carousel.min.js"></script>
    <script src="./assets/js/carousel.js"></script>
</html>