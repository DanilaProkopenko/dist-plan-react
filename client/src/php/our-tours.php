<?php
require_once "php/db.php";

$query = "SELECT *  FROM planet";
$req = mysqli_query($connection, $query);
$data_from_db = [];

while ($result = mysqli_fetch_assoc($req)) {
    $data_from_db[] = $result;
}
?>


<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Туры</title>
    <link rel="stylesheet" href="scss/header-footer.css">
    <link rel="stylesheet" href="scss/our-tours.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700;800&family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>

<body>
    <div class="content">
        <div class="wrapper">
            <?php require_once "php/blocks/header.php" ?>

            <div class="main-content">
                <div class="container">
                    <div class="heading">
                        <div class="text">
                            Наши туры
                        </div>
                    </div>

                    <?php foreach ($data_from_db as $planet) {
                    ?>
                        <div class="planet-cart">
                            <!-- <a href="/about-planet.php?id=<?= $planet['id'] ?>"> -->
                            <div class="information">
                                <div class="under-text">
                                    <?= $planet['name'] ?>
                                </div>
                                <div class="bottom-text">
                                    <?= $planet['shot_discription'] ?>
                                </div>

                                <div class="button-for-cart-planet">
                                    <div class="text-for-button">
                                        <a href="/about-planet.php?id=<?= $planet['id'] ?>">Отправиться</a>
                                    </div>
                                </div>
                            </div>
                            <!-- </a> -->

                            <div class="planeta">
                                <img src="img/planets_image/<?= $planet['planet_image'] ?>.png" alt="">
                            </div>
                        </div>

                    <?php
                    }
                    ?>
                </div>
            </div>




            <?php require_once "php/blocks/footer.php" ?>

        </div>
    </div>


    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/main.js"></script>
    <script src="/burger.js"></script>

</body>

</html>