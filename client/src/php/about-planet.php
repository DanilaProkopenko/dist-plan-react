<?php
require_once 'php/db.php';
$planet_id = $_GET['id'];
$planet = mysqli_query($connection, "SELECT * FROM `planet` WHERE `id` = '$planet_id'");
$planet = mysqli_fetch_assoc($planet);

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Описание</title>
    <link rel="stylesheet" href="scss/header-footer.css">
    <!-- <link rel="stylesheet" href="scss/our-tours.css"> -->
    <link rel="stylesheet" href="scss/about-planet.css">
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
                            <?= $planet['name'] ?>
                        </div>
                    </div>

                    <div class="planet-cart">
                        <div class="information">
                            <div class="planeta">
                                <img src="img/planets_image/<?= $planet['planet_image'] ?>.png" alt="">
                            </div>
                            <div class="bottom_text">
                                <p><?= $planet['long_discription_1'] ?></p>
                                <p><?= $planet['long_discription_2'] ?></p>
                            </div>


                            <div class="bottom_planet_text">
                                <p><?= $planet['long_discription_3'] ?></p>
                                <p><?= $planet['long_discription_4'] ?></p>
                            </div>

                            <div class="slick-slider">
                                <div class="text">Галерея</div>
                                <div class="wrapper">
                                    <div class="slider">
                                        <div class="slider__item">
                                            <img src="img/Rectangle 2.png" alt="">
                                        </div>
                                        <div class="slider__item">
                                            <img src="img/Rectangle 2.png" alt="">
                                        </div>
                                        <div class="slider__item">
                                            <img src="img/Rectangle 3.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="characteristic">
                                <p>Цена за одного человека: 20000 рублей</p>
                                <p>Максимальное число людей в номере: 6 человек</p>
                                <p>Минимальный возраст: 16 лет</p>
                            </div>

                            <a href="/registrationcopy.php?id=<?=$planet['id']?>">
                                <div class="button-for-cart-planet">
                                    <div class="text-for-button">
                                        Отправиться
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>

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