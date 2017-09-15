
$(document).ready(function() {
firstQuote();

function firstQuote() {
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
var rand = Math.floor(Math.random() * colors.length);
var quote = a[0].content;
var quoteString = quote.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "\'").replace(/&#8211;/g, "–").replace(/&#8220;/g, "\“").replace(/&#8221;/g, "\”").replace(/&#8230;/g, "\…");
$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '“' + quoteString + '”' + ' -' + a[0].title);
$("#quote").html(a[0].content).css('font-family', fonts[rand]);
$("#source").text('- ' + a[0].title);
$('body').css('background-color', colors[rand]);
$('#content, #twit, #fab').css('color', colors[rand]);
$('#quoteMaker').css('background-color', colors[rand]);
})
}
var fonts = ['Abril Fatface', 'Advent Pro', 'Amatic SC', 'Bad Script', 'Bellefair', 'Dosis', 'EB Garamond', 'IM Fell English SC', 'Indie Flower', 'Josefin Sans', 'Nixie One', 'Poiret One']
var colors = ['#5a0000', '#5a0046', '#3d005a', '#0b005a', '#003d5a', '#005a28', '#375a00', '#5a2600', '#5a263e', '#4a4e2a', '#6f1614', '#410d66'];
jQuery(function($) {
$("#quoteMaker").on("click", function(e) {
  var rand = Math.floor(Math.random() * colors.length);
   e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        var quote = post.content;
        var quoteString = quote.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "\'").replace(/&#8211;/g, "–").replace(/&#8220;/g, "\“").replace(/&#8221;/g, "\”").replace(/&#8230;/g, "\…");
        $('#quote').fadeOut( 500, function() {
          $('#quote').html(post.content).css('font-family', fonts[rand]);
            $('#quote').fadeIn( 500, function() {
              
            })})
       
        $('#source').fadeOut( 500, function() {
          $('#source').html('- ' + post.title);
            $('#source').fadeIn( 500, function() {
              
            })})
           $('body, #quoteMaker').animate({backgroundColor: colors[rand]}, 1000);
           $('#content, #twit, #fab').animate({color: colors[rand]}, 1000);
           $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '“' + quoteString + '”' + ' -' + post.title);
           
      },
      cache: false
    });
  });

});

  
  
  
  
  
});