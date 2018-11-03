$(document).ready(function () {

    var da = {'api-key': "88518f4b8f5d4db3a4014447e04f9ea0"};

    //da.q = "searchTerm";
    //da.begin_date = "searchbegd";
    //da.end_date = "serachendd";

    //da.q = $(".searchTerm").val().trim();
    //da.begin_date = $(".beginDate").val().trim();
    //da.end_date = $(".endDate").val().trim();
    //
    console.log(da);
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(da);

    
    
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      console.log(result);
      var data = result.response;
      console.log(data);



      for (i = 0; i < data.length; i++){
        console.log(data[i]);
        
      } 
    











    }).fail(function(err) {
      throw err;
    });

















});