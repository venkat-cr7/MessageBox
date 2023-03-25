(function(){

    let form = document.querySelector("#message-form");
    let button = document.querySelector(".button");
    let feedback = document.querySelector(".feedback");
    let message = document.querySelector("#message");
    let content = document.querySelector(".message-content");
   

    form.addEventListener("submit", function(e){
        e.preventDefault();



        if(message.value === ""){
            feedback.style.display = "block";
            setTimeout(function(){
                feedback.style.display = "none";
            }, 3000);
        }else{
            content.textContent = message.value;
            message.value = "";
        }
    });

}());