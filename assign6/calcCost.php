<?php
error_reporting(0);
$keyboard = $_GET['keyboard'];
$keycaps = $_GET['keycaps'];
$RGB = $_GET['RGB'];
$Case = $_GET['Case'];
$Remover = $_GET['Remover'];
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$address = $_GET['address'];
$type = $_GET['type'];

if ($type == "calc") {
    if ($fname) {
        if($lname) {
            if ($address) {
                echo '<h1>Your Order</h1><hr />';
                echo '<h5>'.date("m-d-y").'</h5><hr />';
                estCost();
            } else {
                echo '<h1>Please provide an address.</h1>';
            }
        } else {
            echo '<h1>Please provide a last name.</h1>';
        }
    } else {
        echo '<h1>Please provide a first name.</h1>';
    }
}
elseif ($type == "est") {
    echo '<h1>Estimated Cost</h1><hr />';
    estCost();
}
else {
    header( "Location: index.html" );
}

echo '<button onclick="window.history.back()">Go Back</button>';

function estCost() {
    global $keyboard, $keycaps, $RGB, $Case, $Remover;
    $totalCost = 0.00;

    switch ($keyboard) {
        case "Ducky":
            $totalCost += 140;
            echo "<h3>$140 | Ducky Shine 6 Mechanical Keyboard</h3>";
            break;
        case "Filco":
            $totalCost += 130;
            echo "<h3>$130 | Filco Majestouch 2 Mechanical Keyboard</h3>";
            break;
        case "Vortex":
            $totalCost += 120;
            echo "<h3>$120 | Vortex POK3R Mechanical Keyboard</h3>";
            break;
    }

    switch ($keycaps) {
        case "Cherry":
            $totalCost += 0;
            echo "<h3>$0 | Blue Cherry MX</h3>";
            break;
        case "Gateron":
            $totalCost += 5;
            echo "<h3>$5 | Blue Gateron</h3>";
            break;
        case "Topre":
            $totalCost += 20;
            echo "<h3>$20 | Topre</h3>";
            break;
    }

    if ($RGB == "RGB") {
        $totalCost += 20;
        echo "<h3>$20 | RGB</h3>";
    }
    if ($Case == "Case") {
        $totalCost += 15;
        echo "<h3>$15 | Case</h3>";
    }
    if ($Remover == "Remover") {
        $totalCost += 5;
        echo "<h3>$5 | Keycap Remover</h3>";
    }

    echo '<hr /><h2 style="color:red;">Total Cost: $'.$totalCost.'</h2>';
}

?>
