<?php


$servername = "localhost";
/*
$username = "jackbbfo_johnny";
$password = "P@kistan1";
$dbname = "jackbbfo_yjy";
*/

$username = "root";
$password = "";
$dbname = "yjy";

$conn = mysql_connect($servername, $username, $password);
mysql_select_db($dbname);

?>