// var number= 15;
// let name ="yeabsira";
// number =1;
// name= " yeab"
// document.writeln(name + number); 
const formInfo=document.getElementById("formInfo");

let hasJob = false;
if(hasJob){
    showMessage("thanks but i have a job");
}else{
    showMessage("please look around lookin for position");
}
let today= new Date()
let dayOfweek= today.getDay();

if(dayOfweek===0 || dayOfweek===6)
{
    showMessage("its a weekend ,please be patient");
}
function showMessage(message){

   
    document.writeln("<p>" + message + "</p>");
    
}
function clearMessage(){
    formInfo.innerHTML="";
}
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){
event.preventDefault();
showMessage("sending your message....");

});
const experiances =document.getElementsByClassName("experiance");
for(let x=0; x<experiances.length;x++){
    const item=experiances[x];
    item.addEventListener("mouseenter",function(event){
        event.target.style="background-color:#999999;";
        });
        item.addEventListener("mouseleave",function(event){
            event.target.style=" ";
        });
}







        // event.target.style=<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #e3f2fd;">
        //     <a class="navbar-brand" href="#">Navbar</a>
        //     <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        //         aria-expanded="false" aria-label="Toggle navigation"></button>
        //     <div class="collapse navbar-collapse" id="collapsibleNavId">
        //         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        //             <li class="nav-item active">
        //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#">Link</a>
        //             </li>
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        //                 <div class="dropdown-menu" aria-labelledby="dropdownId">
        //                     <a class="dropdown-item" href="#">Action 1</a>
        //                     <a class="dropdown-item" href="#">Action 2</a>
        //                 </div>
        //             </li>
        //         </ul>
        //         <form class="form-inline my-2 my-lg-0">
        //             <input class="form-control mr-sm-2" type="text" placeholder="Search">
        //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
   //})
        
    
