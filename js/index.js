function catagory(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=>{
        
    loadCatagory(data.data)
    })
}

function loadCatagory(Lessons){
    const LessonsContanier=document.getElementById("Lessons-contanier")
    for (let lesson of Lessons){

            const lessonDiv=document.createElement("div")
    
     lessonDiv.innerHTML=`
  <button id="btn-${lesson.id}" onclick="lodeVideoCetagory(${lesson.id})" class="btn  flex items-center gap-2 border border-blue-500 text-blue-500"><img src="assets/fa-book-open.png" alt=""> Lessons-${lesson.level_no}</button>
    
    `;
    LessonsContanier.append(lessonDiv)
    }
    
} 

function Vocabularies(){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then(res=>res.json())
    .then(data=>{
        
    loadVocabularie(data.data)
    })
}

function loadVocabularie(Vocabularies){
    const VocabulariesContanier=document.getElementById("Learn-contanier")
    for (let Vocabularie of Vocabularies){
        
    const VocabulariesDiv=document.createElement("div")
    
     VocabulariesDiv.innerHTML=`
   <div class="w-80 bg-white rounded-md m-10 p-6">
        <div>
              <h1 class="text-center text-2xl py-2">${Vocabularie.word}</h1>
              <p class="text-center text-xs py-2">${Vocabularie.meaning}</p>
              <p class="text-center text-2xl py-2">${Vocabularie.pronunciation}</p>
        </div>
        <div class="flex justify-between pt-5">
         <button id="icons-btn" onclick="displayed(${Vocabularie.id})"><img class="w-6" src="https://img.icons8.com/?size=100&id=10RdlJAM8eI5&format=png&color=000000" alt=""></button>
              <img class="w-6" src="https://img.icons8.com/?size=100&id=FlYWPrDzQBBE&format=png&color=000000" alt="">
           </div>
      </div>
    
    `;
    VocabulariesContanier.append(VocabulariesDiv)
    }
    
} 

function displayed(videoID){ 

fetch("https://openapi.programming-hero.com/api/level/5")
.then(res=>res.json())
.then(data=>{
  console.log(data)
  displayVideo(data)
})

}
function displayVideo(video){
console.log(video)
document.getElementById("my_modal_1").showModal()
const detailsContaniner=document.getElementById("details-contaniner")
detailsContaniner.innerHTML=`
<div class="w-80 bg-white rounded-md m-10 p-6">
        <div>
              <h1 class=" text-2xl py-2">${video.data[6].word}</h1>
              <p class="text-2xl py-2">${video.data[6].meaning}</p>
              <p class=" text-2xl py-2">${video.data[6].pronunciation}</p>
        </div>
        
      </div>
    
    `;


}





Vocabularies()
catagory();

