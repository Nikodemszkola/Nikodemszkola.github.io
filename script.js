

let gra = ["kamien","papier","nozyce"]
function papier(){
    let pWybor = document.getElementById("wybory")
    pWybor.innerHTML = "Wybrales: papier".toString()
    let pLosowanie = document.getElementById("komputer")
     let GraL = Math.floor(Math.random() * gra.length)
    pLosowanie.innerHTML = "Komputer wybrał " + gra[GraL].toString()
    if(GraL==2)
    {
        let pWynik = document.getElementById("wynik")
        pWynik.innerHTML = "Przegrałeś".toString()
    }
    else if(GraL==1)
    {
        let pWynik = document.getElementById("wynik")
        pWynik.innerHTML = "Remis".toString()
    }
    else
    {
        let pWynik = document.getElementById("wynik")
        pWynik.innerHTML = "Wygrałeś".toString()
    }
}
function kamien(){
    let pWybor = document.getElementById("wybory")
    pWybor.innerHTML = "Wybrales: kamien".toString()
    let pLosowanie = document.getElementById("komputer")
    let GraL = Math.floor(Math.random() * gra.length)
    pLosowanie.innerHTML = "Komputer wybrał " + gra[GraL].toString() 

    if(GraL==1)
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Przegrałeś".toString()
        }
        else if(GraL==0)
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Remis".toString()
        }
        else
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Wygrałeś".toString()
        }
}
function nozyce(){
    let pWybor = document.getElementById("wybory")
    pWybor.innerHTML = "Wybrales: nozyce".toString()
    
    let pLosowanie = document.getElementById("komputer")
     let GraL = Math.floor(Math.random() * gra.length)
    pLosowanie.innerHTML = "Komputer wybrał " + gra[GraL].toString()

    if(GraL==0)
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Przegrałeś".toString()
        }
        else if(GraL==2)
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Remis".toString()
        }
        else
        {
            let pWynik = document.getElementById("wynik")
            pWynik.innerHTML = "Wygrałeś".toString()
        }
}






