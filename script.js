let radioBtns=document.querySelectorAll("input[name='subscribe']");
let cont =document.querySelector("div[class='container_content']");
let rate_title;

const titlimg =`<div class="big_image_container">
                    <img class="phone_image" src="images/illustration-thank-you.svg">
                </div>`

const result_rate=`<div class="result_rate_container">
                    <p class="result_rate">
                        You selected <!-- Add rating here --> out %rate% of 5 </p>
                    </div>`

const conteiner_thanks=`<div class="container_thanks">
                            <h3 class="thanks">  Thank you!</h3>
                        </div>
                        <div class="text_container">
                            <p class="text thank_you">We appreciate you taking the time to give a rating. If you ever need more support, 
                               don’t hesitate to get in touch!</p>
                        </div>`

let findSelected=()=>{
    let selected=document.querySelector("input[name='subscribe']:checked");
    rate_title=result_rate.replace('%rate%',selected.value);       
}

radioBtns.forEach(radioBtn=>{
    radioBtn.addEventListener("change",findSelected);
})

function getRadioValue(){
    cont.innerHTML=titlimg+rate_title+conteiner_thanks;
}
