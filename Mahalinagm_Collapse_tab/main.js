var faq = document.querySelectorAll(".faq-page");
var question=[...faq]; 
question.forEach((faq,index) => {
    faq.addEventListener("click", function () { 
        let closeindex=closefunction();
        if(closeindex===index)
          return true;
        faq.classList.toggle("active") 
        var body = faq.nextElementSibling; 
        if (body.style.display === "block") 
             body.style.display = "none";
        else 
             body.style.display = "block";   
            });
});
function closefunction()
{
    for(var itr=0;itr<faq.length;itr++)
    {   
        var body = faq[itr].nextElementSibling;
        if (body.style.display === "block") {
         {  
              body.style.display = "none";
              faq[itr].classList.remove("active");
              return itr;
        }
        } 
    }
}