$('a.scroll').click(function(){
  var href = $(this).attr('href');
  var dest = $(href).offset().top;
  $('html, body').animate({
    scrollTop: dest,
  }, 1000);
  return false;
});