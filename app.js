// const questionBtns = document.querySelectorAll(".question-btn");
// // const question = document.querySelector(".question");
// const btn = document.querySelector(".question-btn")


// questionBtns.forEach(function(btn){
// btn.addEventListener("click", function(e){
//     const question = e.currentTarget.parentElement.parentElement
//     console.log(question);

//     question.classList.toggle("show-answer");
// })
// })




const questions = document.querySelectorAll(".question");

questions.forEach(function(quest){
// console.log(quest);
const btn = quest.querySelector(".question-btn");
// console.log(btn); 

btn.addEventListener("click", function(){

questions.forEach(function(item){
    if (item !== quest){
        item.classList.remove("show-answer")
    }
})


    quest.classList.toggle("show-answer");

})




})