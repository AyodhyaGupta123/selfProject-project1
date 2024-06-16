var h1 = document.querySelector("h1")
h1.innerHTML = "Friends"
h1.style.color = "Black"

flag = 0

var btn = document.querySelector("button")

btn.addEventListener("click", function(){
   
    if(flag == 0){
        
        btn.innerHTML = "Remove Friends"
        h1.innerHTML = "Friends"
        h1.style.color = "Yellow"
       flag = 1
    }else{
        btn.innerHTML = "Add Friends"
        h1.innerHTML = "Stranger"
        h1.style.color = "Black"
        flag = 0
    }
})

