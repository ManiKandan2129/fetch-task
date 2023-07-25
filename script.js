var div = document.createElement("div");
div.setAttribute("class","container");
document.body.append(div);
var row = document.createElement("div");
row.setAttribute("class", "row");
div.append(row);
 


 
 var req = fetch("https://restcountries.com/v2/all");
 req.then((data)=>data.json()).then((data2)=>{
  for (let i = 0; i<data2.length; i++){
        console.log(data2[i].name);


        var col = document.createElement("div");
        col.setAttribute("class", "col-lg-3");
        row.append(col);

 
        
       col.innerHTML =  `<div class ="col">
        <div class="card" style="width: 18rem;">
       <img src="${data2[i].flag}" class="card-img-top" alt="image">
       <div class="card-body">
         <h4 class="card-title">${data2[i].name}</h4>
         <h5 class="card-title">${data2[i].region}</h5>
         <h6 class="card-title">${data2[i].subregion}</h6>
       </div>
     </div> 
     </div>`



  }
 
});