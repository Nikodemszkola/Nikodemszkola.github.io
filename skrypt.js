
var i = 1;
var liczby_interwal;
var punkty = 0;
var startTime; 

function interwal() {
    liczby_interwal = setInterval(liczby, 1000);
}

function liczby() {
    document.getElementById("licznik").innerHTML = i;
    startTime = Date.now();
    i++;
}

function stop() {
    clearInterval(liczby_interwal);
    i = 1;
}

function poprawnosc() {
    var cyfra = 7;
    var currentNumber = document.getElementById("licznik").innerHTML;
    if (currentNumber % cyfra == 0 || currentNumber.includes(cyfra.toString())) {
        punkty++;
        wyswietlZdjecie();
        recordReactionTime(currentNumber); 
    } else {
        punkty--;
    }
    punkt();
}

function punkt() {
    document.getElementById("punkt").innerHTML = punkty;
}

function wyswietlZdjecie() {
    var img = document.createElement("img");
    img.src = "warchlak.jpg";
    img.alt = "Zdjecie";
    document.getElementById("zdjecie").appendChild(img);
    setTimeout(function() {
        document.getElementById("zdjecie").removeChild(img);
    }, 1000);
}


function recordReactionTime(currentNumber) {
    var reactionTime = Date.now() - startTime;
    var tableBody = document.getElementById("czasreakcji").querySelector("tbody");
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${currentNumber}</td>
        <td>${reactionTime} ms</td>
    `;
    tableBody.appendChild(newRow);
}
