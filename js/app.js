//putting the sections in an array
const sections= Array.from(document.querySelectorAll("section"));
//putting <ul> in a variable
const unorderedList = document.getElementById("navbar__list");

//building dynamic Navigation 
function dynamic(){
    for(sec of sections){
        list=document.createElement("li");
        list.innerHTML=`<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        unorderedList.appendChild(list);
    }
}
dynamic();

//making the active section clear with the class .your-active-class
window.onscroll=function(){
    document.querySelectorAll("section").forEach(function(onPage){
        if(onPage.getBoundingClientRect().top >= -400 && onPage.getBoundingClientRect().top <= 150){
            onPage.classList.add("your-active-class");
        }
            else{onPage.classList.remove("your-active-class");}
         });
        };

 //making the navigation bar go to the right section smoothly 
    unorderedList.addEventListener('click', (go)=>{
        go.preventDefault();
        if(go.target.dataset.nav){
            document
            .getElementById(`${go.target.dataset.nav}`)
            .scrollIntoView({behavior:"smooth"});
              
            setTimeout(()=> {
                location.hash=`${go.target.dataset.nav}`;
            },800

            );
        }
        });