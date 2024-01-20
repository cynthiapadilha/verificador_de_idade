function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','style/bebem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','style/menino.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','style/homem.png')
            } else {
                //idoso
                img.setAttribute('src','style/idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','style/bebef.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','style/menina.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','style/mulher.png')
            } else {
                //idoso
                img.setAttribute('src','style/idosa.png')
            }
        }


        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }



 
}
