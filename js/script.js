var card=document.querySelectorAll(" .card")
var  btn=document.getElementById("btn2")
var div=document.getElementById("div2")
var totalPrice=0



card.forEach(function(item){
         item.onclick=function(){
                  div.innerHTML+=item.textContent+"\n"
                  totalPrice+=+(item.getAttribute("price"))
         
         }

})

btn2.onclick=function(){div.innerHTML=totalPrice}


