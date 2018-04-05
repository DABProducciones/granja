/**
 * Created by NTB-004 on 29/12/2017.
 */
var vp = document.getElementById("granja");
var papel= vp.getContext("2d");


var vaca = {url:"vaca.png",cargaOK:false};
var fondo = {url:"tile.png", cargaOK:false};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);



function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);

    }
    if (vaca.cargaOK)
    {
        var x= aleatorio();
        var y= aleatorio()
        papel.drawImage(vaca.imagen,x,y);
    }
}










function aleatorio()
{
    var resultado;
    var max=420;
    var min=0;
    resultado=Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}