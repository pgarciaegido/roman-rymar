// GALLERY.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// RENDER GALLERY PICTURES DINAMICALLY

globalVariables.pictureOn = false;
globalVariables.totalPics = 114;
globalVariables.remainingPics = 114;

var gallery = {
  // Appends 20 pictures if available
  appendPictures(){
    let rp = globalVariables.remainingPics

    // If there are more than 20 pictures not rendered
    if (rp > 20) {
      let number = rp - 20
      this.loop(rp, number, number)
    }

    else if (rp < 20 && rp > 0) {
      this.loop(rp, 1, 0)
    }
  },
  // (remainPictures, append 20 pics or less, remainingPics after loop)
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
    // Takes half a second to append pic. Better ux
    setTimeout(function(){
      $('.galeria-content').append(insert);
    },400)

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

  // GALLERY EVENT HANDLERS
  // When scroll down append  new pics
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        gallery.appendPictures()
    }
  };
  $(document).on("click",'.galeria-img', gallery.pictureModalOn)
  $('#dark-bg').on('click', gallery.pictureModalOff);
}
