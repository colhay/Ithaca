<?php
file_put_contents('data.txt', file_get_contents('php://input'));
echo file_get_contents('php://input');
?>
