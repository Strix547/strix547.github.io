<?php
if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['theme'])&&$_POST['theme']!="")  && (isset($_POST['mess'])&&$_POST['mess']!="")){
        $to = 'example@mail.ru'; // Куда будет приходить
        $subject = 'Заявка с формы';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Тема сообщения: '.$_POST['theme'].'</p>
                        <p>Сообщение: '.$_POST['mess'].'</p>
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers.= "From: ShumiShop\r\n";
        mail($to, $subject, $message, $headers);
}