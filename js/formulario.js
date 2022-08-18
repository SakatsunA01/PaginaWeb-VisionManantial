
let consultas_cagar = document.getElementById("form_consultas")

consultas_cagar.addEventListener("submit", (a) => {
    a.preventDefault()
    let nombre = document.getElementById("input_nombre").value
    let email = document.getElementById("input_email").value
    let consulta = document.getElementById("text_consulta").value
    let id_random = parseInt(Math.random()*100)
    let consulta_nueva = [{id: "ABC"+ id_random +"00", nombre:nombre, email:email, consulta:consulta}]
    localStorage.setItem("persona" +"ABC"+ id_random +"00", JSON.stringify(consulta_nueva))
})

consultas_cagar.addEventListener("submit", (b)=>{
    Swal.fire({
        title: 'mensaje enviado!',
        text: 'muchas gracias por enviar un mensaje, sera contestado en breve',
        imageUrl: '../img/alert-gracias.jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Custom image',
        timer: 4000,
        showConfirmButton: false,
      })
})

let consultas = [

]

for (let a = 0; a < localStorage.length; a++) {
    let key = localStorage.key(a)
    consultas.push(JSON.parse(localStorage.getItem(key)))
}

console.log(consultas)