
document.getElementById("FAQ-btn").addEventListener("click",function(event){
    document.getElementById("Vocabularies-contanier").style.display="block"
    
    document.getElementById("bannar-contanier").style.display="none"

})


document.getElementById("Learn-btn").addEventListener("click",function(event){
    document.getElementById("Questions-contanier").style.display="block"
    document.getElementById("Vocabularies-contanier").style.display="none"
    document.getElementById("bannar-contanier").style.display="none"

})





document.getElementById("main-contanier").style.display="none"
 document.getElementById("get-btn").addEventListener("click",function(event){
    event.preventDefault()
   
    const personeName=document.getElementById("name").value;

    const personePassword=document.getElementById("pin").value;
 
   const convertedName="test"
   const convertedPin="123456"

    if(personeName===convertedName){

        if(personePassword===convertedPin){
             document.getElementById("main-contanier").style.display="block"
            document.getElementById("bannar-contanier").style.display="none"
        }
        else{
           alert("Show an alert if the password is not 123456")
    } 
    }
    else{
       alert("Show an alert if the user does not enter a name")
    }
})








