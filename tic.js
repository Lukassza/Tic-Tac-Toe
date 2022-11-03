let grille=document.querySelector(".grille")
let table=document.querySelector(".table")
let akyltour=document.querySelector(".akyltour")
let result=document.querySelector(".result")
let joueur=1
let turn=0
let binaire=0
let fin=0
let rowid=[1,2,3]
let colid=["a","b","c"]

for (i = 0; i < 3; i++) {
    let tr = document.createElement("tr");
    tr.classList.add("tr");
    tr.id="ligne"+rowid[i]
    table.appendChild(tr)
    for(j=0;j<3;j++){
        let th=document.createElement("th")
        th.setAttribute("type", "checkbox")
        th.classList.add("th")
        th.id="case"+colid[i] + rowid[j]
        tr.appendChild(th)
        if(binaire==0){
            th.textContent="X"
            binaire=1
        }
        else{th.textContent="O"
        binaire=0}
    }
}

//! Démarre une nouvelle partie //
function vider(){
    th=document.getElementsByClassName("th")
    for(k=0;k<th.length;k++){
        th[k].textContent="?"
    }
    
  }
  setTimeout(vider, 1000);

//!actualiser//
  function recharger(){
    location.reload()
  }

//! jeu //

table.addEventListener("click", function (evt) {
      let coche = evt.target;
      console.log(coche)
    if(joueur==1){
        coche.textContent="♥"
        coche.style="background-color:rgb(153, 0, 61)"
        coche.classList.add("rouge")
        joueur=2
    }
    else{
        coche.textContent="♠"
        coche.style="background-color:Teal"
        coche.classList.add("bleu")
        joueur=1}
    akyltour.textContent=`C'est au tour du joueur ${joueur}`
       
    
    if(casea1.className=="th rouge"&&casea2.className=="th rouge"&&casea3.className=="th rouge"
    ||caseb1.className=="th rouge"&&caseb2.className=="th rouge"&&caseb3.className=="th rouge"
    ||casec1.className=="th rouge"&&casec2.className=="th rouge"&&casec3.className=="th rouge"
    ||casea1.className=="th rouge"&&caseb2.className=="th rouge"&&casec3.className=="th rouge"
    ||casea3.className=="th rouge"&&caseb2.className=="th rouge"&&casec1.className=="th rouge"
    ||casea1.className=="th rouge"&&caseb1.className=="th rouge"&&casec1.className=="th rouge"
    ||casea2.className=="th rouge"&&caseb2.className=="th rouge"&&casec2.className=="th rouge"
    ||casea3.className=="th rouge"&&caseb3.className=="th rouge"&&casec3.className=="th rouge"){
        
        fin=1
    }

    if(casea1.className=="th bleu"&&casea2.className=="th bleu"&&casea3.className=="th bleu"
    ||caseb1.className=="th bleu"&&caseb2.className=="th bleu"&&caseb3.className=="th bleu"
    ||casec1.className=="th bleu"&&casec2.className=="th bleu"&&casec3.className=="th bleu"
    ||casea1.className=="th bleu"&&caseb2.className=="th bleu"&&casec3.className=="th bleu"
    ||casea3.className=="th bleu"&&caseb2.className=="th bleu"&&casec1.className=="th bleu"
    ||casea1.className=="th bleu"&&caseb1.className=="th bleu"&&casec1.className=="th bleu"
    ||casea2.className=="th bleu"&&caseb2.className=="th bleu"&&casec2.className=="th bleu"
    ||casea3.className=="th bleu"&&caseb3.className=="th bleu"&&casec3.className=="th bleu"){
        
        fin=2
    }
    
    if(fin==1){
        result.textContent="Victoire des rouges"
        result.style="color:rgb(153, 0, 61)"
        setTimeout(recharger, 4000);
        
    }
    if(fin==2){
        result.textContent="Victoire des bleus"
        result.style="color:Teal"
        setTimeout(recharger, 4000);
        
    }
})





