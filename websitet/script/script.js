const like = document.querySelectorAll(".like");
like.forEach(btn=>{
btn.addEventListener("click",()=>{
btn.classList.toggle("active");

if(btn.classList.contains("active")){
    btn.innerHTML='<i class="fa-solid fa-heart"></i>';
}

else{
    btn.innerHTML='<i class="fa-regular fa-heart"></i>';
}

});

});

const upload = document.querySelector("input[type=file]");

if(upload){
    upload.addEventListener("change",function(){
    if(this.files.length){
    alert("Gambar dipilih : " + this.files[0].name);
}

});

}

const joinBtn = document.querySelector(".join-btn");

if(joinBtn){
    joinBtn.addEventListener("click",()=>{

if(joinBtn.innerHTML.includes("Gabung")){
    joinBtn.innerHTML='<i class="fa-solid fa-check"></i> Bergabung';
    joinBtn.style.background="#00C896";

}else{
    joinBtn.innerHTML='<i class="fa-solid fa-users"></i> Gabung';
    joinBtn.style.background="#ff7a00";
}

});

}
    const editProfile = document.querySelector(".edit-profile");
    if(editProfile){
    editProfile.addEventListener("click",()=>{
    alert("Halaman Edit Profile akan dibuat pada tahap backend.");
});

}