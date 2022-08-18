let cielo = document.getElementById("cielo_bg")
let pared = document.getElementById("pared_bg")
let piso = document.getElementById("piso_bg")

window.addEventListener("scroll", function(){
    let valor = this.window.scrollY
    cielo.style.top = valor * 0.6 + "px"
    pared.style.top = valor * 0.4 + "px"
    piso.style.bottom = valor * 0.7 + "px"
})

