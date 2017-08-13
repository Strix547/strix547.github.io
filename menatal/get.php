<?php
/**
 * Created  on 27.07.2017.
 * by Sergey Burmak
 * Burmak.pp.ua
 */

echo file_get_contents('https://api.bitfinex.com/v1/pubticker/'.$_GET['id']);
return '';

/**
 * {"mid":"2745.55","bid":"2745.5","ask":"2745.6","last_price":"2745.5","low":"2525.0","high":"2820.0","volume":"48720.93193097","timestamp":"1501255609.48743513"}
 */