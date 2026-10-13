//ill refer to button and to heading
//then ill make a function to changecontent or do whatever changes
//then ill addeventlistener


let var1=1;
const heading=document.querySelector("#myheading");
const button=document.querySelector("#mybutton");
//tells js find h2 with id  and let me refer to it as heading
function changeheading(){
    heading.textContent=var1;
    //body selects body of our webpage ,style ashan aghyar css style, bg color property
}

button.addEventListener("click",changeheading);

const addtocartbutton=document.querySelector("#addtocart")
function changecontent(){
    var1+=1; //to increment everytime
    heading.textContent=var1;
}
addtocartbutton.addEventListener("click",changecontent);

const addtwobutton=document.querySelector("#plustwo");
function addtwo(){
    var1+=2;
    heading.textContent=var1;
}
addtwobutton.addEventListener("click",addtwo);

const addthreebutton=document.querySelector("#plusthree");
function plusthree(){
    var1+=3;
    heading.textContent=var1;
}
addthreebutton.addEventListener("click",plusthree);

const Resetbutton=document.querySelector("#Reset");
function reset(){
    var1=0;
    heading.textContent=var1;
}
Resetbutton.addEventListener("click",reset);