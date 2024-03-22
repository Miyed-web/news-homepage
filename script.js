const sidebar= document.querySelector(".sidebar");
const openbtn = document.querySelector(".open");
const hidebtn = document.querySelector(".close");


openbtn.addEventListener("click", ()=>{
  sidebar.style.display= "flex";
  
});
hidebtn.addEventListener("click",( )=>{
  sidebar.style.display = "none"
})