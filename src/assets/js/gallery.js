// GALLERY.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// RENDER GALLERY PICTURES DINAMICALLY

var globalVariables = {}

globalVariables.pictureOn = false;

var gallery = {
  render(){
    // The loop starts on X number because thats the number of pictures that we have.
    // From the most recent to the older. Check img folder to see.
    const totalPics = 114
    let $pictContainer = $('#galeria-pics-container')
    let content = ''
    for (let i = totalPics; i >= 1; i--) {
      content = this.template(i)
      $pictContainer.append(content)
    }
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
  gallery.render()
}

// GALLERY EVENT HANDLERS
$('.galeria-img').on('click', gallery.pictureModalOn);
$('#dark-bg').on('click', gallery.pictureModalOff);
