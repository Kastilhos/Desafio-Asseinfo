$(document).ready(function() {
    let item, title, author, publisher, bookLink, bookImg;
    let outputList = document.getElementById("list-output");
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    let placeHolder = ""
    let searchData;

    $("#search").click(function() {
        outputList.innerHTML = ""
        searchData = $("#search-box").val();
        if(searchData === "" || searchData === null) {
            displayError();        
        }
        else {
            $.ajax ({
                url: bookUrl + searchData,
                dataType: "json",
                sucess: function(response) {
                    console.log(response)
                    if (response.totalItem === 0) {
                        alert("no results!");
                    }
                    else {
                        $(".title").animate({'margin-top': '10px'}, 1000);
                        $(".booklist").css("visibility", "visible");
                        //displayResults(res);
                    }
                },
                error: function() {
                    alert("Something went wrong!");
                }
            })
        }
        $("#search-box").val("");
    });
    function displayResults(res) {
        //for(var i = 0; i < res.)
    }
});