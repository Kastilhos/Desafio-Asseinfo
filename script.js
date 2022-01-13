$(document).ready(function() {
    let item, title, author, publisher, bookLink, bookImg;
    let outputList = document.getElementById("list-output");
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    let placeHolder = '<img src="https://via.placeholder.com/150">'
    var searchData;

    $("#search").click(function() {
        outputList.innerHTML = ""
        searchData = $("#search-box").val();
        if(searchData === "" || searchData === null) {
            displayError();        
        }
        else {
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(response) {
                    console.log(response)
                    if (response.totalItem === 0) {
                        alert("no results!");
                    }
                    else {
                        $("title").animate({'margin-top': '10px'}, 1000);
                        $(".booklist").css("visibility", "visible");
                        displayResults(response);
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
        for(var i = 0; i < res.items.length; i+=2) {
            item = res.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.author;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn1 = item.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
            
            item2 = res.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.author;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHolder;
        
            outputList.innerHTML += '<div class="row mt-4">' +
                                    formatOutput(bookImg1, title1, author1, publisher1,bookLink1, bookIsbn1, bookImg1)+
                                    formatOutput(bookImg2, title2, author2, publisher2,bookLink2, bookIsbn2, bookImg2)+
                                    '</div>'

        }
    }
    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
        let viewerUrl = 'book.html?isbn' +bookIsbn;
        let htmlCard = `<div class="col-lg-6">
                        <div class="card" style="">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${bookImg}" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">Author: ${author}</p>
                                    <p class="card-text">Publisher: ${publisher}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                    return htmlCard;
    }
    function displayError() {
        alert("Search term cannot be empty");
    }
});