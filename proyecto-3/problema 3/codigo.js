// SISTEMA DE AYUDA PARA DESCARGAR APP
class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;

    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    appInfo(){
        return ` 
        Descargas: ${this.descargas}<br>
        Puntuación: ${this.puntuacion}<br>
        peso: ${this.peso}<br>`
    }
        
    }


app = new App("16.000","5 estrellas","900mb");
app2 = new App("16.000","2 estrellas","900mb");
app3 = new App("16.000","3 estrellas","900mb");
app4 = new App("16.000","5 estrellas","600mb");
app5 = new App("16.000","4 estrellas","200mb");
app6 = new App("16.000","1 estrellas","800mb");
app7 = new App("16.000","4.3 estrellas","600mb");

document.write(`
${app.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`)
// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();


