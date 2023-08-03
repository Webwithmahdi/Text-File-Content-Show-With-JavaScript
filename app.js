const textReader = document.querySelector(".text-reader");

const frontSide = document.querySelector(".front-side");
const backSide = document.querySelector(".back-side");

const textPreview=document.querySelector('.text-preview span');
const upload = document.querySelector("#upload");

upload.addEventListener("change", function () {
  const reader = new FileReader();
  reader.readAsText(this.files[0]);
  reader.onload = function () {
    frontSide.classList.add("side-toggle");
    textPreview.innerText=reader.result;
    setTimeout(function () {
      textReader.style.transform = "rotateY(-180deg)";
    }, 450);
    setTimeout(function(){
        textReader.style.width='400px';
        textReader.style.height='400px';
    },550);
    setTimeout(function(){
        backSide.classList.remove('side-toggle');
    },650);
  };
});
