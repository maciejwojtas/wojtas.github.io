<?php

$plik = fopen('comments.txt', 'a');
$zawartosc = $_POST['textPHP'];
fwrite($plik, $zawartosc);
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";

?>
