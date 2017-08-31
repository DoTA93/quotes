function randomQuote() {
      $.ajax({
          url: "https://api.forismatic.com/api/1.0/?",
          dataType: "jsonp",
          data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
          success: function( response ) {
            $("#random_quote").html("<h1 class='aq'>" +
              response.quoteText + "</h1><p>&dash; " + response.quoteAuthor + " &dash;</p>");
            $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
              ' (' + response.quoteAuthor + ')');
          }
      });
    }

    $(function() {
      randomQuote();
    });

    $("#getQuote").click(function(){
      randomQuote();
    });