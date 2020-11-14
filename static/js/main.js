window.onload = function () {
    initialize_intro()
}

function initialize_intro() {
    var intro = document.createElement("DIV");
    intro.setAttribute('id', 'intro');
    intro.setAttribute('align', 'left');

    var header_p = document.createElement("P");
    header_p.innerText = "To jest aplikacja webowa służąca do analizy danych zapisanych na serwerze (przeglądanie obrazów z drona)."

    intro.appendChild(header_p)

    var parent = document.getElementById("mainDiv");
    parent.appendChild(intro);

    ReadFromDatabase();
}

function initialize_subDiv() {
    var div = document.createElement("div");
    div.setAttribute('id', 'subDiv')
    div.setAttribute('align', 'left');
    insertNextButton(div)

    var parent = document.getElementById("mainDiv")
    if (parent != null) {
        parent.appendChild(div);   
    } else {
        console.error("Parent not found.")
    }
}

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

function ReadFromDatabase()
{
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://ankieta.asuscomm.com:5010/api/todoitems', true)

    request.onload = function() 
    {
        // Begin accessing JSON data here

        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach((Link) => {

                var div = document.createElement('div');
                div.classList.add('column');
                div.id = Link.id;
                document.getElementById('imagesContainer').appendChild(div);


                var img = document.createElement('img'); 
                img.src =Link.link;
                img.setAttribute('src',Link.link);
                img.setAttribute('onclick','myFunction(this)');

                document.getElementById(Link.id).appendChild(img);


              console.log(Link.link)
            })
          } else {
            console.log('error')
          }
    }

    // Send request
    request.send();
}