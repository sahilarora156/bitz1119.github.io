$(document).ready(function() {
    $("#but").on("click",function(e){
        //e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        var html = '<font size = 4>'+post.content + "<br>" + "-"+"<strong>"+post.title+"</strong></font>";
        $('#quote').html(html);
      },
    cache: false
    });
        
});
    });
    // all custom jQuery will go here


