faq_con=document.getElementById("faq-questions");

var faq_click=document.querySelectorAll("faq-page");

const faq_l=[
{
    question:"what is super over?",
    answer: "In a Super Over, each team bats for one additional over after the match ends in a tie. A Super Over, also known as one-over eliminator, is a method used in limited-overs cricket matches to decide the winner in case of a tie"
},
{
    question:"What is no ball rule in cricket?",
    answer:"A No-ball is a delivery which does not count as one of the bowler's six legitimate balls in one over.The umpire will call a no ball by raising an arm at shoulder height and  the fielding team must bowl another legitimate delivery."
},
{
    question:"When 60 over is reduced to 50 over?",
    answer:"It was a stunning victory in the history of cricket. In the 1987 World Cup, the ICC decided to reduce the overs from 60 to 50 and it was a huge success."
}
];
 function writeFunction(faq_q)
 {
   faq_q.forEach(element => {
       const li=document.createElement('div');
       li.className="faq-list";
       li.innerHTML=`
       <h1 class="faq-page">${element.question}</h1>
       <div class="faq_body>
       <p>${element.answer}</p>
       </div>
       `;
    faq_con.append(li);
   });
 }

 writeFunction(faq_l);
/*var faq_q=[...faq];
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
 question.forEach(faq =>{
        var itr=question.indexOf(faq);
        var body = faq.nextElementSibling;
        if (body.style.display === "block") {
         {  
             console.log(itr);
              body.style.display = "none";
              faq.classList.remove("active");
              return itr;
        }
        } 
    });
*/