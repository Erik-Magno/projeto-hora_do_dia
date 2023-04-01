function carregar(){
let msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = `imagem/manha.png`
    document.body.style.background = '#e2cd9f'
}else if (hora >=12 && hora <= 18){
    //BOA TARDE!
    img.src = `imagem/tarde.png`
    document.body.style.background = '#b9846f'
}else {
        //BOA NOITE!
    img.src = `imagem/noite.png`
    document.body.style.background = '#515154'
    //document.body.style.backgroundImage = "url('imagem/noite.png')";
}

}
