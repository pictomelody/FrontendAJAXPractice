$("addPic").click(function() {
  $('.text').text('loading...');
  //make an AJAX GET request
  //see reddit's page for reference: https://github.com/reddit/reddit/wiki/JSON
  //I am making an AJAX request to REDDIT for results of FOOD
  $.ajax({
    type: "GET",
    data: {
      q: "food",
      restrict_sr: "true"
    },
    url: "http://www.reddit.com/r/food/search.json",
    success: function(response) {
      $('.text').html('');
      var children = response.data.children;
      for(var i=0; i<children.length; i++) {
        /*$('.text').append('<img src="' + children[i].data.thumbnail + '" />');*/
        if(children[i].data.thumbnail !== "self" && children[i].data.thumbnail !== "default") {
           $('.text').append('<img src="' + children[i].data.thumbnail + '" />');
        }
      }
    },
/*    dataType: 'jsonp'*/
  });

});
