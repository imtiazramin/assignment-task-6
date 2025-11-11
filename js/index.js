function catagory(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    loadCatagory(data.data)
    })
}

function loadCatagory(Lessons){
    const LessonsContanier=document.getElementById("Lessons-contanier")
    for (let lesson of Lessons){
        
    const lessonDiv=document.createElement("div")
    
     lessonDiv.innerHTML=`
  <button id="btn-${lesson.id}" class="btn  flex items-center gap-2 border border-blue-500 text-blue-500"><img src="assets/fa-book-open.png" alt=""> Lessons-${lesson.level_no}</button>
    
    `;
    LessonsContanier.append(lessonDiv)
    }
    
} 

catagory();

