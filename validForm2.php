<?php

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  // note that this replaces < with &lt;
  // but whne sent back to a browser, the
  // browser will intermpt the &lt; and 
  // display it as <
  $data = htmlspecialchars($data);
  return $data;
}  

$name = test_input($_REQUEST["fname"]);
//$name = test_input($argv[1]);

$email = test_input($_REQUEST["email"]); 

$num = test_input($_REQUEST["fnumber"]); 

//echo "'<script>console.log(\"$name\")</script>'";

//echo "name is ".$name;
//echo "got to script";

if ($num > 19){
  echo $name." at ".$email." you are <b>old</b>!";
}
else{
  echo $name." at ".$email." you are <b>young!</b></p>";
}

?>
