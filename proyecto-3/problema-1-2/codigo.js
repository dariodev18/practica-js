// CELULARES Y CARACTERISTICAS

class Celular {
    constructor(color,peso,rdp,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = this.tamaño;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else{
            alert ("celular apagado")
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            alert("celular reiniciando...");
        } else {
            alert("celular apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        color: ${this.color} <br>
        peso: ${this.peso}<br>
        tamaño: ${this.tamaño} <br>
        resolucion de video: ${this.resolucionDeCamara} <br>
        memoria ram:${this.memoriaRam} <br>`
    }
}


class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
   }
   grabarVideoLento(){
    alert("estas grabando en camara lenta");
   } 
   reconocimientoFacial(){
    alert("vamos a iniciar un reconocimiento facial");
   }
   infoAltaGama(){
    return this.mobileInfo() + `resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`;
   }
    
}


// celular1 = new Celular("azul","150g","5'"
// ,"full hd","2gb");
// celular2 = new Celular("rojo","150g","5'"
// ,"hd","2gb");
// celular3 = new Celular("verde","150","5'"
// ,"full hd","4gb");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.apagar();

celular1 = new CelularAltaGama("rojo","130g","5.2","4k","4gb","16bg");
celular2 = new CelularAltaGama("rojo","130g","5.2","4k","4gb","16bg");
celular3 = new CelularAltaGama("rojo","130g","5.2","4k","4gb","16bg");

document.write(`
${celular1.infoAltaGama()}<br><br>
${celular2.infoAltaGama()}<br><br>
${celular3.infoAltaGama()}`)