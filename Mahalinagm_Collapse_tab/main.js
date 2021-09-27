var faq = document.querySelectorAll(".faq-page");
var faq_q=[...faq];
var i;
faq_q.forEach(faq => {
    faq.addEventListener("click", function () { 
        let ind=closefunction();
        if(ind===faq_q.indexOf(faq))
        {
            return true;
        }
        faq.classList.toggle("active") 
        var body = faq.nextElementSibling; 
        
                if (body.style.display === "block") {
                    body.style.display = "none";
                } else {
                    body.style.display = "block";
                }
            });
});
function closefunction()
{
    let index=null;
    for(i=0;i<faq.length;i++)
    {   
        var body = faq[i].nextElementSibling;
        if (body.style.display === "block") {
         {  
              index=i;
              body.style.display = "none";
              faq[i].classList.remove("active")
        }
        } 
    }
    if(index!=null)
          return index;
}