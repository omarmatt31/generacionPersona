class Persona{
    #nombre
    #edad
    #dni
    #sexo
    #peso
    #altura
    #anioNac
    constructor(nombre, edad, dni, sexo, peso, altura, anioNac){
        this.#nombre = nombre
        this.#edad = edad
        this.#dni = dni
        this.#sexo = sexo
        this.#peso = peso
        this.#altura = altura
        this.#anioNac = anioNac
    }

    get getNombre() {
        return this.#nombre;
    }
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getEdad() {
        return this.#edad;
    }
    set setEdad(edad) {
        this.#edad = edad;
    }

    get getDni() {
        return this.#dni;
    }
    set setDni(dni) {
        this.#dni = dni;
    }

    get getSexo() {
        return this.#sexo;
    }
    set setSexo(sexo) {
        this.#sexo = sexo;
    }

    get getPeso() {
        return this.#peso;
    }
    set setPeso(peso) {
        this.#peso = peso;
    }

    get getAltura() {
        return this.#altura;
    }
    set setAltura(altura) {
        this.#altura = altura;
    }

    get getAnioNac() {
        return this.#anioNac;
    }
    set setAnioNac(anioNac) {
        this.#anioNac = anioNac;
    }


    mostrarGeneracion(){
        console.log(persona)
        const mensaje = document.querySelector(".alert-info")
        mensaje.classList.remove('d-none')
        if(this.#anioNac >= 1994 && this.#anioNac <= 2010){
            mensaje.innerHTML = "Esta persona pertenece a la Generación Z <br> Rasgo Característico: Irreverencia😋"
            //document.writeln(`Esta persona pertenece a la Generación Z <br>`)
            //document.writeln(`Rasgo Característico: Irreverencia😋 <br>`)
        }else if(this.#anioNac >= 1981 && this.#anioNac <= 1993){
            mensaje.innerHTML = "Esta persona pertenece a la Generación Y (millennials) <br> Rasgo Característico: Frustración😖 "
            //document.writeln(`Esta persona pertenece a la Generación Y (millennials) <br>`)
            //document.writeln(`Rasgo Característico: Frustración😖 <br>`)
        }else if(this.#anioNac >= 1969 && this.#anioNac <= 1980){
            mensaje.innerHTML = "Esta persona pertenece a la Generación X <br> Rasgo Característico: Obseción por el éxito😎"
            //document.writeln(`Esta persona pertenece a la Generación X <br>`)
            //document.writeln(`Rasgo Característico: Obseción por el éxito😎 <br>`)
        }else if(this.#anioNac >= 1949 && this.#anioNac <= 1968){
            mensaje.innerHTML = "Esta persona pertenece a la Generación Baby Boom <br> Rasgo Característico: Ambición🤑"
            //document.writeln(`Esta persona pertenece a la Generación Baby Boom <br>`)
            //document.writeln(`Rasgo Característico: Ambición🤑 <br>`)
        }else if(this.#anioNac >= 1930 && this.#anioNac <= 1948){
            mensaje.innerHTML = "Esta persona pertenece a la Generación Silent Generation (los niños de la posguerra)<br> Rasgo Característico: Austeridad😐"
            //document.writeln(`Esta persona pertenece a la Generación Silent Generation (los niños de la posguerra)<br>`)
            //document.writeln(`Rasgo Característico: Austeridad😐 <br>`)
        }else {
            mensaje.innerHTML = "Esta persona no pertenece a una generación en particular"
            //document.writeln("Esta persona no pertenece a una generación en particular")
        }
    }

    esMayorDeEdad(){
        
        const mensaje = document.querySelector(".alert-info")
        mensaje.classList.remove('d-none')
        if((2025-this.#anioNac)>=18){
            mensaje.textContent = "La persona es mayor de Edad"
            //document.writeln("La persona es mayor de edad<br>")
        }else {
            mensaje.textContent = "La persona es menor de edad"
            //document.writeln("La persona es menor de edad<br>")
        }
    }

    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${this.getNombre}</li>
            <li>Edad: ${this.getEdad}</li>
            <li>DNI: ${this.getDni}</li>
            <li>Sexo: ${this.getSexo}</li>
            <li>Peso: ${this.getPeso}Kg</li>
            <li>Altura: ${this.getAltura}m</li>
            <li>Año de Nacimiento: ${this.getAnioNac}</li>
            </ul>`)
    }
}

const crearPersona = (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("inputNombre").value
    const edad = parseInt(document.getElementById("inputEdad").value)
    const dni = document.getElementById("inputDni").value
    const sexo = document.getElementById("selectNombre").value
    const peso = parseFloat(document.getElementById("inputPeso").value)
    const altura = parseFloat(document.getElementById("inputAltura").value)
    const anioNac = parseInt(document.getElementById("inputAnio").value)
    persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNac)
    console.log(persona)
}

const mostrarGen = () => {
    if (!persona) {
        alert("Primero debe cargar los datos de una persona")
    }else {
        persona.mostrarGeneracion()
    }

}

const mayorDeEdad = () => {
    if(!persona) {
        alert("Primero debe cargar los datos de una persona")
    }else {
        persona.esMayorDeEdad()
    }
}

let persona = null

const btnCrear = document.querySelector(".btn-primary")
const btnMostrarGeneracion = document.querySelector(".btn-warning")
const btnMayorDeEdad = document.querySelector(".btn-success")
btnCrear.addEventListener('click', crearPersona)
btnMostrarGeneracion.addEventListener('click', mostrarGen)
btnMayorDeEdad.addEventListener('click', mayorDeEdad)

