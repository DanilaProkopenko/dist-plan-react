<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Distant planets</title>
    <link rel="stylesheet" href="scss/header-footer.css">
    <link rel="stylesheet" href="scss/main-page.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700;800&family=Roboto:wght@100&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="content">
        <div class="wrapper">
            <?php require_once "php/blocks/header.php" ?>

            <div class="black-back">
                <div class="container">

                    <div class="main-content">
                        <div class="heading">
                            <div class="grid">
                                <div class="square">

                                </div>
                                <div class="text">
                                    <div class="under-text">
                                        Tours to
                                    </div>
                                    <div class="bottom-text">
                                        Distant planets
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="background-planets">
                                    <img src="/img/ФОН ПЛАНЕТА.png" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="button__flex__container">
                            <div class="button-for-about">
                                <svg width="59" height="66" viewBox="0 0 59 66" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="33.0001" cy="33.0001" r="25.4571" fill="#00041C" fill-opacity="0.5" />
                                    <circle cx="33.0001" cy="33.0001" r="24.9571" stroke="#001697"
                                        stroke-opacity="0.5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66C42.9243 66 51.8254 61.6191 57.8749 54.6857H55.1524C49.5252 60.4333 41.6791 64 33 64C15.8792 64 2 50.1208 2 33C2 15.8792 15.8792 2 33 2V0Z"
                                        fill="#0024FF" fill-opacity="0.5" />
                                </svg>
                                <div class="text">
                                    <a data-goto=".about" href="" class="menu__link">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about">
                <div class="container">
                    <div class="block-with-information">
                        <div class="square">

                        </div>
                        <div class="text">
                            <div class="under-text">
                                О компании
                            </div>
                            <div class="bottom-text">
                                Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                                дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                                Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                                дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений. Наша
                                компания предоставляет прекрасные туры, которые помогут вам справить прекрасные дни. Это
                                будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                            </div>
                        </div>

                        <div class="space-man">
                            <img src="/img/КОСМОНАВТ.png" alt="">
                        </div>
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
                    <div class="button-for-tours">
                        <svg width="59" height="66" viewBox="0 0 59 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="33.0001" cy="33.0001" r="25.4571" fill="#00041C" fill-opacity="0.5" />
                            <circle cx="33.0001" cy="33.0001" r="24.9571" stroke="#001697" stroke-opacity="0.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66C42.9243 66 51.8254 61.6191 57.8749 54.6857H55.1524C49.5252 60.4333 41.6791 64 33 64C15.8792 64 2 50.1208 2 33C2 15.8792 15.8792 2 33 2V0Z"
                                fill="#0024FF" fill-opacity="0.5" />
                        </svg>
                        <div class="text-tours">
                            <a href="/our-tours.php">Открыть список туров</a>
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