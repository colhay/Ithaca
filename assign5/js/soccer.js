//from w3 schools, handles setting new cookie values
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//from w3 schools, handles retreiving cookie values
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//from w3 schools, handles checking if cookies exist. Called onload for body.
function checkCookie() {
    var name = getCookie("name");
    if (name != "" && name != null) {
        document.getElementById('cookie1').innerHTML = 'Your Name: '+getCookie("name");
        document.getElementById('cookie2').innerHTML = 'Your Favorite Team: '+getCookie("favorite");
        document.getElementById('cookie3').innerHTML = 'Your Age: '+getCookie("age");
    } else {
        name = prompt("Please enter your name:");
        var favorite = prompt("Please enter your favorite soccer team");
        var age = prompt("Please enter your age");
        if (name != "" && name != null) {
            setCookie("name", name, 7);
            setCookie("favorite", favorite, 7);
            setCookie("age", age, 7);
            checkCookie();
        }
    }
}

//I made this function for the change cookies button. It prompts the
//user and changes the cookies values
function newCookies() {
    var name = prompt("Please enter your name:");
    var favorite = prompt("Please enter your favorite soccer team");
    var age = prompt("Please enter your age");
    setCookie("name", name, 7);
    setCookie("favorite", favorite, 7);
    setCookie("age", age, 7);
    checkCookie();
}

//used for adding rows to the table. Alerts if any text box is empty.
function addRow() {
    var team = document.getElementById('team').value;
    var year = document.getElementById('year').value;
    var trophies = document.getElementById('trophies').value;
    if (team && year && trophies) {
        var table = document.getElementById('table');
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = team;
        cell2.innerHTML = year;
        cell3.innerHTML = trophies;
    }
    else {
        alert('Please fill in all the text boxes.');
    }
}

//used for adding new tags to the page from the user. Uses values
//from the radio buttons and a switch statement to figure out what
//tag to use when adding to the page.
function addLeague() {
    var radios = document.getElementsByName('tag');
    var text = document.getElementById('text').value;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch (radios[i].value) {
                case 'p':
                        document.getElementById('addedByUser').innerHTML += '<p>'+text+'</p>';
                    break;
                case '1':
                    document.getElementById('addedByUser').innerHTML += '<h1>'+text+'</h1>';
                    break;
                case '2':
                    document.getElementById('addedByUser').innerHTML += '<h2>'+text+'</h2>';
                    break;
                case 's':
                    document.getElementById('addedByUser').innerHTML += '<span>'+text+'</span>';
                    break;
                default:
            }
        }
    }
}

//used for displaying all td tags from the table.
//loops through all and adds them to the body of the new window.
function displayAll() {
    var tags = document.getElementsByTagName('td');
    var newWindow = window.open();
    for (var i = 0; i < tags.length; i++) {
        newWindow.document.body.innerHTML += tags[i].innerHTML+';' ;
    }
}
