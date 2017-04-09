// GALLERY.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// RENDER GALLERY PICTURES DINAMICALLY



// Lógica para hacer lazy loading casero.
// Append pics de 20 en 20. Poner un event handler para que cuando se toque bottom
// hacer otro append de 20.

// Entonces, hay que tener un counter que vea cuantas se han appended, e ir actualizandolo
globalVariables.pictureOn = false;
globalVariables.totalPics = 114;
globalVariables.remainingPics = 114;

var gallery = {
  appendPictures(){
    let rp = globalVariables.remainingPics
    console.log(rp)
    if (rp > 20) {
      let number = rp - 20
      this.loop(rp, number, number)
    }

    else if (rp < 20 && rp > 0) {
      this.loop(rp, 1, 0)
    }
  },

  loop(rp, l, remain) {
    let $pictContainer = $('#galeria-pics-container')
    let content = ''

    for (let i = rp; i >= l; i--) {
      content = this.template(i)
      $pictContainer.append(content)
    }
    globalVariables.remainingPics = remain;
  },

  template(number){
    return `
      <div class="column small-6 medium-4 galeria-content-pic galeria-img">
        <img class="b-lazy" src="./assets/img/thumbnails/roman_tn (${number}).jpg">
      </div>`
  },

  pictureModalOn(){
    // Inserts an full resolution picture on click
    var top = $(window).scrollTop();
    $('#dark-bg').css({'visibility':'visible', 'opacity':'1', 'top': top})
    $('body').css({'overflow':'hidden'});

    var id = $(this).find('img').attr('src');
    var picId = id.replace('_tn', '').replace('/thumbnails', '');

    var modal = $('<img />');
    var insert = modal.attr('src', picId).addClass('img-modal');
    setTimeout(function(){
      $('.galeria-content').append(insert);
    },500)

    globalVariables.pictureOn = true;
  },

  pictureModalOff(ev){
    // Removes image - modal.
    if(globalVariables.pictureOn){
      ev.preventDefault(ev);
      $('.galeria-content').find($('.img-modal')).remove();
      $('#dark-bg').css({'visibility':'hidden', 'opacity':'0'});
      $('body').css({'overflow-y':'scroll'});
    }
  }
}


// RENDER
// http://localhost:8000/galeria.html
if (window.location.href.split('/').pop() === 'galeria.html'){
  gallery.appendPictures()

  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          gallery.appendPictures()
          console.log(globalVariables.remainingPics)
          console.log('pics appended')
      }
  };
}

// GALLERY EVENT HANDLERS
$('.galeria-img').on('click', gallery.pictureModalOn);
$('#dark-bg').on('click', gallery.pictureModalOff);
