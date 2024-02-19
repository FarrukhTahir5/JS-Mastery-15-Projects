const popbtn=document.querySelector('.btn'),
model=document.querySelector('.model'),
close=document.querySelector('.close');

popbtn.addEventListener('click', openModel)
close.addEventListener('click', closeModel)
model.addEventListener('click', closeModel)

function openModel(e) {
    e.preventDefault();
    model.style.display='block';
}

function closeModel() {
    console.log("AllahuAkbar");
    model.style.display="none";
}
