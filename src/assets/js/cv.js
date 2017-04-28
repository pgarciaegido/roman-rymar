/* SPECIFIC JS FOR CV (TRABAJOS) LOGICS AND RENDER */


var gV = gV || {};

// models. All works done by roman, separated in clips, ficcion and publicidad
// MODEL CLIPS =================================================================
gV.clipsModels = [
  {
    name: 'Mamita Papaya',
    description: 'Don lorenzo, personaje que da nombre a la canción.',
    img: 'mamita papaya.png',
    ytVideo: 'https://www.youtube.com/embed/3lqrWp8S7Ak'
  },
  {
    name: 'Malú',
    description: 'Trabajador que se "anima" escuchando a Malú.',
    img: 'malu.png',
    ytVideo: 'https://www.youtube.com/embed/QH8NsIZDam8'
  },
  {
    name: "I'm proud",
    description: 'Vigilante de unos presos.',
    img: 'im proud 2.jpg',
    ytVideo: 'https://www.youtube.com/embed/mdS2YoiWT0A'
  },
  {
    name: "Renkor",
    description: 'Hombre fracasado y confundido que tiene alucinaciones con el grupo.',
    img: 'renkor.png',
    ytVideo: 'https://www.youtube.com/embed/ITwoKsSOsmY'
  },
  {
    name: "The Garage Players",
    description: 'Hombre perturbado que mata mujeres de noche.',
    img: 'garaje players.png',
    ytVideo: 'https://www.youtube.com/embed/7QsxSXxgvgc'
  },
  {
    name: "Vaya Cuadro",
    description: 'Cuadro que busca la libertad y dejar una vida sedentaria.',
    img: 'vaya cuadro.png',
    ytVideo: 'https://www.youtube.com/embed/aTRcGP7qxog'
  }
]


// MODEL PUBLICIDAD ============================================================
gV.publicidadModels = [
  {
    name: 'Paramount Channel',
    description: 'Chico enamorado de su compañera de piso.',
    img: 'paramount.png',
    ytVideo: 'https://www.youtube.com/embed/qREM373P3QU'
  },
  {
    name: 'Vodafone',
    description: 'Vendedor gruñón en tienda de guitarras.',
    img: 'vodafone.png',
    ytVideo: 'https://www.youtube.com/embed/qREM373P3QU'
  },
  {
    name: 'Dineo',
    description: 'Joven que piensa en divertidas formas de hacer tiempo mientras espera un préstamo.',
    img: 'dineo.png',
    ytVideo: 'https://www.youtube.com/embed/YLimuInz5Eo'
  },
  {
    name: 'Más Movil',
    description: 'Diferentes acciones a cámara lenta.',
    img: 'mas movil.png',
    ytVideo: 'https://www.youtube.com/embed/u4fMAK27Hcs'
  },
  {
    name: 'Bella Vita',
    description: 'Capo de la mafia italiana.',
    img: 'bella vita.png',
    ytVideo: 'https://www.youtube.com/embed/KblQmadLaMU'
  },
  {
    name: 'Movistar - El Partidazo',
    description: 'Vendedor de Pescado.',
    img: 'movistar.png',
    ytVideo: 'https://www.youtube.com/embed/wUOhNTE-ATE'
  },

  {
    name: 'Selfbank',
    description: 'Consumidor de arte que recibe una sorpresa algo desagradable.',
    img: 'selfbank.png',
    ytVideo: 'https://www.youtube.com/embed/9gIQNcJXrr4'
  },
  {
    name: 'Crazypark',
    description: 'Diferentes acciones integrando una pandilla de amigos que usa la APP.',
    img: 'crazypark.png',
    ytVideo: 'https://www.youtube.com/embed/JFBF8xXaRxU'
  },
  {
    name: 'Pipas Facundo',
    description: 'Joven GEEK-NERD al que le gustan los juegos de rol y los videojuegos.',
    img: 'pipas facundo.png',
    ytVideo: 'https://www.youtube.com/embed/qUuv1PZ23K4'
  },
  {
    name: 'Umami',
    description: 'Cliente hípster de un restaurante vegano.',
    img: 'umami.png',
    ytVideo: 'https://www.youtube.com/embed/173427734'
  }
]

// MODEL FICCION ==============================================================
gV.ficcionModels = [
  {
    name: 'Heroes del mal',
    description: 'Un joven con problemas que es maltratado en el instituto.',
    img: 'heroes del mal.png',
    ytVideo: 'https://www.youtube.com/embed/gOdr7wzzbQ4'
  },
  {
    name: 'Ron Barcelo',
    description: 'Joven nerd que tiene dificultades en su vida amorosa.',
    img: 'ron barcelo - desalia.png',
    ytVideo: 'https://www.youtube.com/embed/ODBl70VjT-4'
  },
  {
    name: 'Narcolpsia',
    description: 'Hombre con narcolepsia harto de este mundo en busca de redención.',
    img: 'narcolepsia.png',
    ytVideo: 'https://www.youtube.com/embed/tbYaMuuRc_g'
  },
  {
    name: 'Cosmética Terror',
    description: 'Paciente de psiquiátrico que lucha por vencer a sus demonios, pero el mundo no le deja.',
    img: 'cosmetica terror.png',
    ytVideo: 'https://www.youtube.com/embed/YyD59zQ7gZI'
  },
  {
    name: 'Ah Divina',
    description: 'Me meto en la piel de un hombre tímido que busca su oportunidad de ser feliz.',
    img: 'ah divina.png',
    ytVideo: 'https://www.youtube.com/embed/1DGolZFpJOQ'
  },
  {
    name: 'Sé que estaré',
    description: 'Encarno a un personaje desquiciado con la sociedad que ayuda destruyendo.',
    img: 'se que estare.png',
    ytVideo: 'https://www.youtube.com/embed/Qmo3HEKJiN4'
  }
]

// Containers cv
gV.$clipsContainer   = $('#clips-container')
gV.$publiContainer   = $('#publicidad-container')
gV.$ficcionContainer = $('#ficcion-container')

// Containers index
gV.$clipsContainerIndex   = $('#index-cv-clips')
gV.$publiContainerIndex   = $('#index-cv-publicidad')
gV.$ficcionContainerIndex = $('#index-cv-ficcion')

// CONTROLLERS ====================================================

gV.cvWorks = {
  renderCards(collection, container) {
    for (let c in collection) {
      let template = this.cardTemplate(collection[c].name, collection[c].description, collection[c].img, collection[c].ytVideo, false)
      container.append(template)
    }
  },

  renderIndex(collection, container) {
    // There are only two works showing in index.
    for (let i = 0; i < 2; i++) {
      let template = this.cardTemplate(collection[i].name, collection[i].description, collection[i].img, collection[i].ytVideo, true)
      container.append(template)
    }
  },

  cardTemplate(name, description, img, ytVideo, index) {

    // If index is false, set those clases to parent div.
    // In index, fichas have to take 100% width.
    let cls = index ? '' : 'column small-12 medium-4 large-3 text-center'
    return `
    <div class="${cls}">
      <div class="fichas">
        <div class="fichas-top">
          <img src="./assets/img/videos/${img}" height="100" alt="">
          <i class="fa fa-play"></i>
          <div class="fichas-top-layoff"></div>
          <span class="fichas-top-description">${description}</span>
        </div>
        <p class="fichas-nombre">${name}</p>
        <input class="youtube-video-link" type="hidden" data-yt="${ytVideo}" />
      </div>
    </div>`
  }
}

//VIDEOS YOUTUBE ON CLICK; THE YOUTUBE SRC NEEDS TO BE CHANGED IN ORDER TO STOP WHEN CLICKED OUT OF IT
gV.tempURL = null
gV.videoOn = false

gV.youtubeVideos = {

  openVideo(){
    var top = $(window).scrollTop();
    var videoTop = top + 100;

    $('#dark-bg').css({'visibility':'visible','opacity':'1', 'top': top});
    let link = $(this).find('.youtube-video-link').attr('data-yt')
    let template = `<iframe src="${link}" frameborder="0" allowfullscreen=""
                    id="currentlyPlaying" style="visibility: visible; opacity: 1;
                    top: ${videoTop}px;"></iframe>`
    $(this).append(template)
    gV.tempURL = link
    $('body').css({'overflow':'hidden'});
    gV.videoOn = true;
  },

  closeVideo(){
    if(gV.videoOn){
      $('#dark-bg').css({'visibility':'hidden','opacity':'0'});
      $('#currentlyPlaying').remove()
      $('body').css({'overflow':'scroll'});
      gV.videoOn = false;
    }
  },

  eventHandlers(){
    $('.fichas').on('click', this.openVideo);
    $('#dark-bg').on('click', this.closeVideo);
    // Avoids scrolling
    $('#dark-bg').on('mousedown', this.closeVideo);
    $('#dark-bg').on('touchstart', this.closeVideo);
  }
}

// RENDERS in CV
// http://localhost:8000/cv.html
if( window.location.href.split('/').pop().indexOf('cv.html') !== -1) {
  gV.cvWorks.renderCards(gV.clipsModels,      gV.$clipsContainer)
  gV.cvWorks.renderCards(gV.publicidadModels, gV.$publiContainer)
  gV.cvWorks.renderCards(gV.ficcionModels,    gV.$ficcionContainer)
}

// RENDERS in INDEX
// http://localhost:8000/ || http://localhost:8000/index.html
if (window.location.href.split('/').pop() === 'index.html' ||
    window.location.href.split('/').pop() === '') {

  gV.cvWorks.renderIndex(gV.clipsModels,      gV.$clipsContainerIndex)
  gV.cvWorks.renderIndex(gV.publicidadModels, gV.$publiContainerIndex)
  gV.cvWorks.renderIndex(gV.ficcionModels,    gV.$ficcionContainerIndex)
}

gV.youtubeVideos.eventHandlers()
