const input = document.querySelectorAll("input")
let qeydiyyat = document.querySelector(".qeydiyyat")
let cancel = document.querySelector(".cancel")
let okey = document.querySelector(".okey")
let delett = document.querySelector (".delett")
let edit = document.querySelector(".edt")

edit.addEventListener("click",function(e){
    e.preventDefault();
    var deyer1 = this.parentElement;
    var cavab1 = confirm("Yeniden Duzelis etmek isteyirsiz?")
    if(cavab1==true){
       console.log(this.parentElement);
    }
})

input.forEach(x=>{
    x.onfocus= () => {
        console.log("focus event");
    }
})

const add1= document.querySelector(".add1")



add1.addEventListener("click",function(e){
    e.preventDefault();
   qeydiyyat.classList.remove("ss");
   
})

cancel.addEventListener("click",function(e){
    e.preventDefault();
    qeydiyyat.classList.add("ss");
})

okey.addEventListener("click",function(e){
    e.preventDefault();
    let tr = document.createElement("tr");
    tr.innerText=input.values;
    
})

 delett.addEventListener("click",function(e){
     e.preventDefault();
    var deyer = this.parentElement.nextElementSibling;
    //  var deyer = this.parentElement;
     var cavab = confirm("Silmek isteyirsiz?");
     if(cavab==true){
         deyer.remove();  
        }
    })
    
// delett.forEach(x=>{
//     x.addEventListener("click",function(e){
//         e.preventDefault();
//         // var deyer = this.parentElement();
//          alert("slsls")
       
//     })
   
// })

