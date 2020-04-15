$(document).ready(function () {
    const posts =[
        {
            title: 'La Naturaleza en su mayor Resplendor',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMM")} a las ${moment().format('h:mm:ss ')}`,
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore, fugiat magnam perspiciatis obcaecati minus enim sunt molestias dolorem officiis debitis? Quia exercitationem illo nesciunt nulla modiveniam asperiores suscipit reprehenderit, voluptas sapiente sequi est libero ullam fugit tempore dolores inventore. Minus architecto placeat aut voluptatem rerum consequuntur dolore recusandae maxime corrupti,  quod, ea neque cumque! Tempore reprehenderit dolores accusamus. Ut ullam tempora eos at a perferendis praesentium, molestias fugit sint veritatis labore omnis provident porro nihil illum dolores velit.' 
        },
        {
            title: 'Los mejores Lugares de Argentina',
            date:`Publicado el dia ${moment().day()} de ${moment().format("MMM")} a las ${moment().format('h:mm:ss ')}`,
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore, fugiat magnam perspiciatis obcaecati minus enim sunt molestias dolorem officiis debitis? Quia exercitationem illo nesciunt nulla modiveniam asperiores suscipit reprehenderit, voluptas sapiente sequi est libero ullam fugit tempore dolores inventore. Minus architecto placeat aut voluptatem rerum consequuntur dolore recusandae maxime corrupti,  quod, ea neque cumque! Tempore reprehenderit dolores accusamus. Ut ullam tempora eos at a perferendis praesentium, molestias fugit sint veritatis labore omnis provident porro nihil illum dolores velit.' 
        },
        {
            title: 'Lagos para vacacionar',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMM")} a las ${moment().format('h:mm:ss ')}`,
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore, fugiat magnam perspiciatis obcaecati minus enim sunt molestias dolorem officiis debitis? Quia exercitationem illo nesciunt nulla modiveniam asperiores suscipit reprehenderit, voluptas sapiente sequi est libero ullam fugit tempore dolores inventore. Minus architecto placeat aut voluptatem rerum consequuntur dolore recusandae maxime corrupti,  quod, ea neque cumque! Tempore reprehenderit dolores accusamus. Ut ullam tempora eos at a perferendis praesentium, molestias fugit sint veritatis labore omnis provident porro nihil illum dolores velit.' 
        },
        {
            title: 'El Arbol es vida',
            date:`Publicado el dia ${moment().day()} de ${moment().format("MMM")} a las ${moment().format('h:mm:ss ')}`,
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore, fugiat magnam perspiciatis obcaecati minus enim sunt molestias dolorem officiis debitis? Quia exercitationem illo nesciunt nulla modiveniam asperiores suscipit reprehenderit, voluptas sapiente sequi est libero ullam fugit tempore dolores inventore. Minus architecto placeat aut voluptatem rerum consequuntur dolore recusandae maxime corrupti,  quod, ea neque cumque! Tempore reprehenderit dolores accusamus. Ut ullam tempora eos at a perferendis praesentium, molestias fugit sint veritatis labore omnis provident porro nihil illum dolores velit.' 
        },
     
    ]
    posts.forEach(element => {
        const post = `
        <article class="post">
          <h2>${element.title}</h2>
          <span> ${element.date}</span>
          <p>${element.content}</p>
            <a class="boton-leer" href="#">Leer Mas</a>`
            $('#posts').append(post);
    });
    $('#verde').click(function (e) { 
        e.preventDefault();
        $('#titulo').css('background-color', '#235E3D ');
        $('.boton-leer').css('background-color', '#235E3D ')
        $('input[type="submit"]').css('background-color', '#235E3D')
        $('li').hover(function () {
                // over
            $(this).css('background-color','#235E3D')
            }, function () {
                // out
                $(this).css('background-color','#333 ')
            }
        );
    });
    $('#azul').click(function (e) { 
        e.preventDefault();
        $('#titulo').css('background-color', '#1F87CA ');
        $('.boton-leer').css('background-color', '#1F87CA')
        $('input[type="submit"]').css('background-color', '#1F87CA')
        $('li').hover(function () {
            // over
        $(this).css('background-color','#1F87CA')
        }, function () {
            // out
            $(this).css('background-color','#333')
        })
    });
    $('#rojo').click(function (e) { 
        e.preventDefault();
        $('#titulo').css('background-color', '#CA3413');
        $('.boton-leer').css('background-color', '#CA3413')
        $('input[type="submit"]').css('background-color', '#CA3413');
        $('li').hover(function () {
            // over
        $(this).css('background-color','#CA3413')
        }, function () {
            // out
            $(this).css('background-color','#333')
        })
    });
    $('.subir').click(function (e) { 
        e.preventDefault();
     $('html, body').scrollTop(0);
    });

    $('form').submit(function (e) { 
        e.preventDefault();
       const nombre =  $('#nombre').val();
       localStorage.setItem('Nombre', nombre)
        const correo = $('#correo').val();
        localStorage.setItem('Correo', correo);
        const password = $('#password').val();
        localStorage.setItem('Password', password)
        location.reload()
    });
     const nombreM = localStorage.getItem('Nombre')
      
     if(nombreM != null && nombreM != 'undefined'){
        $('#logear h5').append(`<strong>Bienvenido ${nombreM}! <br> Gracias por Registrarte <strong> <br>`); 
        $('#logear h5').append('<hr><a href="#">Cerrar Sesion</a>');
        $('form').hide()
        $('#logear a').click(function (e) { 
            e.preventDefault();
            localStorage.clear()
            $('form').show();
            $('#logear h5').hide()
        });
     }
        $('#accordion').accordion();
}); 