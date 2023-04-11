let dropArea = document.querySelector('.dropArea');


dropArea.addEventListener('dragover',(e)=>{
    e.preventDefault();
    dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave',(e)=>{
    dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop',(e)=>{
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    const type = image.type;

    if(type == "image/png" || type == "image/jpg" || type == "image/jpeg"){
        return upload(image);
    }else{
        dropArea.setAttribute('class',"dropArea invalid")
        dropArea.textContent = "Invalid File Format!"
        return false;
    }
});

const upload = (image) => {
    dropArea.setAttribute("class", "dropArea valid");
    dropArea.innerText = "Added " + image.name;

    
  }; 