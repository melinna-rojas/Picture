$('#f').on('change', function (ev) {
  var canvas = document.getElementById("micanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();


  var f = ev.target.files[0];
  console.log(f);

  img.src = "img/" + f.name;
  img.style = "max-width:100%;";
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  }
  var fr = new FileReader();
  console.log(fr);
  fr.onload = function (ev2) {
    console.dir(ev2);
    $('#i').attr('src', ev2.target.result);
  };
  fr.readAsDataURL(f);

});
