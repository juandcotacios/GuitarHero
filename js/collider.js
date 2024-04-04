const collider = function (nota,buttom,flid){

    if (typeof nota != 'undefined'){

        let pos_obj1 = nota.getBoundingClientRect();
        let pos_obj2 = buttom.getBoundingClientRect();

        let pos1 = {
            'top': pos_obj1.top,
            'left': pos_obj1.left,
            'right': pos_obj1.right,
            'bottom': pos_obj1.bottom,
            'name': 'nota'
        }

        let pos2 = {
            'top': pos_obj2.top,
            'left': pos_obj2.left,
            'right': pos_obj2.right,
            'bottom': pos_obj2.bottom,
            'name':'boton'
        }

        if (pos1.bottom >= pos2.top && pos1.bottom <= pos2.bottom){
            console.log('Dentro del area de colición');
            nota.classList.remove('animated')
            nota.classList.add('hidden')
            buttom.classList.add('hitted')
            play_flare_animation(flid)
            // nota.remove()
        }else{
            console.log('Nota fallida');
        }
        console.log(pos1, pos2);

    }

}
