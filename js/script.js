$(document).ready(function() {
  var date =  new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long'
  }).split(',');
  $('#date .date').text(date[1].slice(0, -3));
  $('#date .day').text(date[0]);
  var hh = $('#hh');
  var mm = $('#mm');
  var ss = $('#ss');

  function startTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    hh.text(h);
    mm.text(m);
    ss.text(s);
    setTimeout(startTime, 500)
  }
  function checkTime(i) {
    return i >= 10 ? i : '0' + i;
  }
  startTime();
  $('.btn.big-lab.faq').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.tc-block').attr('style', 'display: none;');
    $('.tc-block').eq($('.btn.big-lab.faq').index(this)).toggle();
  });
  if (!$('body').hasClass('lk') && !$('body').hasClass('enter'))  {
    $('.tab-list li').click(function(e) {
      e.preventDefault();
      $('.tab-list li').removeClass('active');
      $(this).addClass('active');
      $('.tab-content .panel').attr('style', 'display: none;');
      $('.tab-content .panel').eq(
        $('.tab-list li').index(this)
      ).toggle()
      .addClass('active');
    });
  }
  $('.docimg').magnificPopup(
    {type: 'image',
     closeBtnInside: true,
     showCloseBtn: false,
    });
  $('#vSlider').ionRangeSlider({
    min: 1000,
    max: 10000,
    from: 1000,
    type: 'single',
    prefix: "$",
    force_edges: true
  });
  $('.selct').selectric();
  $('.horizontal .progress-fill span').each(function(){
    var percent = $(this).html();
    $(this).parent().css('width', percent);
  });
  $('.vertical .progress-fill span').each(function(){
    var percent = $(this).html();
    var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
    $(this).parent().css({
      'height' : percent,
      'top' : pTop
    });
  });
});
