let Header = document.getElementById("Header");
let AboutMe = document.querySelectorAll("#About-Me");
let Proficiency = document.querySelectorAll("#Language-Proficiency");
let MySkills = document.querySelectorAll("#MySkills");
let Add_Skills = document.querySelectorAll("#Additionnal-Skills");
let MyProjects = document.querySelectorAll("#MyProjects");
let ContactMe = document.querySelectorAll("#ContactMe");
let scrollToTop = document.getElementById("Scroll-To-Top");
let Moon = document.getElementById("Moon");
let MenuSideBar = document.getElementById("Menu-Side-Bar");

scrollToTop.addEventListener("click", function () {
    scrollTo({
        top:0,
        behavior:"smooth"
    })
});


window.addEventListener("scroll", function(){
    if(window.scrollY >= 75){
        Header.classList.add("header-background")
        scrollToTop.classList.add("Show");
    }else{
        Header.classList.remove("header-background")
        scrollToTop.classList.remove("Show");
    }
})
AboutMe.forEach(function(About){
    About.addEventListener("click", function(){
        scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
    })
Proficiency.forEach(function(Proficience){
    Proficience.addEventListener("click", function(){
        scrollTo({
            top:475,
            behavior:"smooth"
        })
    })
    })
MySkills.forEach(function(Myskill){
Myskill.addEventListener("click", function(){
    scrollTo({
        top:760,
        behavior:"smooth"
    })
})
})
Add_Skills.forEach(function(skill){
    skill.addEventListener("click", function(){
        scrollTo({
            top:1030,
            behavior:"smooth"
        })
    })
})
MyProjects.forEach(function(Project){
Project.addEventListener("click", function(){
    scrollTo({
        top:1315,
        behavior:"smooth"
    })
})
})

Moon.addEventListener("click", function(){
    Header.classList.toggle("Dark");
    document.getElementById("Body").classList.toggle("Dark");
    document.querySelectorAll(".Container").forEach(function(Contain){
        Contain.classList.toggle("Dark")
    });
})

function HideMenu(){
    MenuSideBar.style.transform = "translateX(100%)";
    MenuSideBar.style.transition = ".3s linear";
}
function ShowMenu(){
    MenuSideBar.style.transform = "translateX(0%)";
    MenuSideBar.style.transition = ".3s linear";
}
