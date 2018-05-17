function estimateCost() {
    totalCost = 0.00;
    itemCost = "";

    var keyboard = document.getElementsByName("keyboard");
    for (var i = 0; i < keyboard.length; i++) {
        if (keyboard[i].checked) {
            switch (keyboard[i].value) {
            case "Ducky":
                totalCost += 140;
                itemCost += "$140 | Ducky Shine 6 Mechanical Keyboard";
                break;
            case "Filco":
                totalCost += 130;
                itemCost += "$130 | Filco Majestouch 2 Mechanical Keyboard";
                break;
            case "Vortex":
                totalCost += 120;
                itemCost += "$120 | Vortex POK3R Mechanical Keyboard";
                break;
            }
        }
    }

    var keycaps = document.getElementById('keycaps')
    switch (keycaps.options[keycaps.selectedIndex].value) {
    case "Cherry":
        totalCost += 0;
        itemCost += "\n$0 | Blue Cherry MX"
        break;
    case "Gateron":
        totalCost += 5;
        itemCost += "\n$5 | Blue Gateron"
        break;
    case "Topre":
        totalCost += 20;
        itemCost += "\n$20 | Topre"
        break;
    }

    var adds = document.getElementsByName("add");
    for (var i = 0; i < adds.length; i++) {
        if (adds[i].checked) {
            switch (adds[i].value) {
            case "RGB":
                totalCost += 20;
                itemCost += "\n$20 | RGB"
                break;
            case "Case":
                totalCost += 15;
                itemCost += "\n$15 | Case"
                break;
            case "Remover":
                totalCost += 5;
                itemCost += "\n$5 | Keycap Remover"
                break;
            }
        }
    }

    alert(itemCost+"\n\n$"+totalCost+" | Total Cost");
}

function calcCost() {
    if (document.getElementById("fname").value) {
        if(document.getElementById("lname").value) {
            if (document.getElementById("address").value) {
                estimateCost();
            } else {
                alert("Please provide an address.")
            }
        } else {
            alert("Please provide a last name.")
        }
    } else {
        alert("Please provide a first name.")
    }
}
