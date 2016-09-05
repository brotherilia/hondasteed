<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Honda Steed - Unofficial Russian Page</title>
    <meta name="description" content="Добро пожаловать на сайт, посвященный мотоциклу Honda Steed! Welcome to Russian Honda Steed community website!">
    <meta name="keywords" content="honda steed, steed, honda, steed 400, steed 600, honda steed 400, honda steed 600, хонда, стид, 400, 600, хонда стид, хонда стид 400, хонда стид 600, форум хонда, форум хонда стид, форум хонда стид 400, форум хонда стид 600">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/social-likes_birman.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style-light.css" id="csslight">    
    <link rel="icon" type="image/png" href="img/hs.ico">
</head>
<?php include "incl/header.html" ?>
            <!--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
            <!--                       CONTENT BLOCK                          -->
            <!--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
            <main class="main-content">
                <nav class="breadcrumbs">
                    <ul class="breadcrumbs__items">
                        <li class="breadcrumbs__item">
                            <a href="service.html" class="breadcrumbs__link">
                                Honda Steed : Сервис
                            </a>
                        </li>
                        <li class="breadcrumbs__item">
                            <a href="manual_cont.html" class="breadcrumbs__link">
                                Honda VT600C/CD Service Manual
                            </a>
                        </li>
                    </ul>
                </nav>
                <h1 class="page-main__title">
                    Honda VT600C/CD Service Manual
                </h1>
                <?php $chapter = $_GET['chapter']; ?>
                <iframe src="files/manual/<?php echo $chapter; ?>.pdf" name="manual" id="manual" width="700" height="1000"></iframe>
            </main>
        </div>
    </div>
    <?php include "incl/footer.html" ?>
</body>
</html>