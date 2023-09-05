
let toggle=document.querySelector("#toggledark");
let wrapper=document.querySelector(".wrapper");
let project=document.getElementById("project");
let Skills=document.getElementById("skills");
let contact=document.getElementById("contact");
let logo=document.querySelector(".logo");
let logotext=document.querySelector(".logo-text");
    toggle.addEventListener("click",function(){
        this.classList.toggle('bi-moon');
        if(this.classList.toggle("bi-brightness-high-fill")){
       
            logo.src="userAsset/46225291.jpeg";  
            wrapper.classList.remove("active");
            project.classList.remove("active");
            Skills.classList.remove("active");
            contact.classList.remove("active");
            logotext.classList.remove("active");
        }
        else{
            wrapper.classList.add("active");
           project.classList.add("active");
           Skills.classList.add("active");
           contact.classList.add("active");
           logo.src="logodark.jpg";
           logotext.classList.add("active");
        //    Skills.classList.add("active");
        //    contact.classList.add("active");
      
      }

})