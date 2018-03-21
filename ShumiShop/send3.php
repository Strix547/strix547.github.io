<?php
if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['phone'])&&$_POST['phone']!="") && (isset($_POST['city'])&&$_POST['city']!="")){
        $to = 'example@mail.ru'; // Куда будет приходить
        $subject = 'Заявка с формы';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Город: '.$_POST['city'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers.= "From: ShumiShop\r\n";
        mail($to, $subject, $message, $headers);
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Спасибо за заказ!</title>
    <link rel="stylesheet" href="css/fonts.css">
    <META HTTP-EQUIV="REFRESH" CONTENT="5; URL=http:/">
</head>
<body>
<style>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    body {
        text-align: center;
        color: #fff;
        background-color: #000;
        white-space: pre-line;
        line-height: 0;
        text-transform: uppercase;
        padding: 0;
        margin: 0;
    }
    .img {
        margin-top: 60px;
        margin-bottom: 30px;
    }
    h1 {
        font-family: "GPBlack";
        font-size: 50.48px;
        line-height: 48.69px;
        position: relative;
    }
    h1 span.yellow {
        color: #ffbf34;
        font-size: 53px;
    }
    h1 span {
        font-size: 61.8px;
    }
    h1::before {
        content: '';
        position: absolute;
        width: 267px;
        left: 50%;
        margin-left: -133.5px;
        bottom: -6px;
        height: 5px;
        background-color: #ffbf34;
    }
    p {
        font-family: "GPRegular";
        font-size: 13px;
        line-height: 14px;
        padding-top: 48px;
    }
</style>
    <div class="center">
        <div class="img"><img src="img/send-logo.png" alt="logo"></div>
        <h1>Спасибо
        <span class="yellow">за вашу</span>
        <span>заявку</span></h1>
        <p>Наш менеджер свяжется с вами
        в ближайшее время</p>
    </div>
</body>
</html>