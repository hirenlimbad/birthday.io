document.addEventListener("mousemove", function(event) {
    const box = document.querySelector(".container");
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const boxX = box.getBoundingClientRect().left + boxWidth / 2;
    const boxY = box.getBoundingClientRect().top + boxHeight / 2;
    const angleX = (boxY - mouseY) / 20;
    const angleY = (mouseX - boxX) / 20;
    box.style.transform = ` rotateX(${angleX}deg) rotateY(${angleY}deg)`;




    
  });

  function changeText() {

    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

    if (name==null){

    }

    else{
    var paragraph = document.getElementById('name1');
    paragraph.textContent = 'My Dear '+ name;
    }


  }


  

  function generateLink(name) {
    var url = "https://example.com/birthday?name=" + encodeURIComponent(name);
    return url;
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var link = generateLink(name);
    alert("Here's your personalized link: " + link);
  });



window.onload = function() {
  document.getElementById('screenshot-btn').addEventListener('click', function() {


    // capture screenshot using html2canvas library
    html2canvas(document.body).then(function(canvas) {
      // create a temporary link element and set its href attribute to the screenshot data

      var link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'screenshot.png'; // set the download filename here
      
      // simulate a click on the link element to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  
  }