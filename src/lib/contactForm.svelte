<script>
    import contactImgScr from "$lib/img/icons/contact-icon.svg"
    import logoScr from "$lib/img/Kronøs-Logo.png"
    import contactExitScr from "$lib/img/icons/exit-icon.svg"
    import submitScr from "$lib/img/icons/submit-icon.svg"

    // js code her

    let imgScr = contactImgScr;
    let fadeActive = ""
    let formActive = "" 

    const changImage = ()=>{
        imgScr = imgScr === contactImgScr ? contactExitScr : contactImgScr;
        fadeActive = "active"
        setTimeout(() => {
            fadeActive = ""  
        }, 500);

        formActive = formActive === "" ? "active" : ""
    }


    let headerName,inputName, headerEmail, inputEmail, headerMassage, InputMessage, headerSubject, inputSubject;
    const inputActive = (input, header, focus) =>{
        if(focus === true){
            if(input === InputMessage){
                header.style.marginBottom = "130px"
                header.style.color = "#112033;"
                header.style.transform = "scale(0.95)"
                input.style.borderColor = "#112033;"
            }else{
                header.style.marginBottom = "56px"
                header.style.color = "#112033;"
                header.style.transform = "scale(0.95)"
                input.style.borderColor = "#112033;"
            }
        }else{
            if(input.value.length <= 0){
            if(input === InputMessage){
                header.style.marginBottom = "100px"
                header.style.color = "rgb(127, 127, 127)"
                header.style.transform = "scale(1)"
                input.style.borderColor = " rgb(127, 127, 127)"
            }else{
                    header.style.marginBottom = "20px"
                    header.style.color = "rgb(127, 127, 127)"
                    header.style.transform = "scale(1)"
                    input.style.borderColor = " rgb(127, 127, 127)"
                }
            }
                
        }
    }

    

</script>

<div class="contact-cont">
    <div class="contact-form-cont {formActive}">
        <div class="header-cont">
            <img class="logo-img" src={logoScr} alt="">
            <h4>Feel free to send us a message, and we'll respond to you as swiftly as we can.</h4>
        </div>


        
        <form action="" method="post" class="form-cont">
            <div class="name-cont">
                <h5 class="header-name" bind:this={headerName}>* Name</h5>
                <input type="text" class="input-name" name="name" id="name" bind:this={inputName} on:focus={()=>inputActive(inputName, headerName, true)} on:focusout={()=>inputActive(inputName, headerName, false)}>
            </div>
            <div class="email-cont">
                <h5 class="header-email" bind:this={headerEmail}>* Email</h5>
                <input type="text" class="input-email" name="email" id="email" bind:this={inputEmail} on:focus={()=>inputActive(inputEmail, headerEmail, true)} on:focusout={()=>inputActive(inputEmail, headerEmail, false)}>
            </div>
            <div class="select-cont">
                <h5 class="header-select" bind:this={headerSubject}>* Select topic</h5>
                <select class="select-area" name="subject" id="subject"  bind:this={inputSubject} on:change={()=>inputActive(inputSubject, headerSubject, true)} on:focusout={()=>inputActive(inputSubject, headerSubject, false)}>
                <option hidden></option>
                <option>Order and Shipping</option>
                <option>Repairs and returns</option>
                </select>
            </div>  
            <div class="massage-cont">
                <h5 class="header-massage" bind:this={headerMassage}>* Message</h5>
                <textarea name="message" id="message" class="textarea-massage" cols="30" rows="10" bind:this={InputMessage} on:focus={()=>inputActive(InputMessage, headerMassage, true)} on:focusout={()=>inputActive(InputMessage, headerMassage, false)}></textarea>
            </div>
        </form>
        <button class="submit-btn"><img src={submitScr} alt="">Submit</button>
 
    </div>
    <button class="contact-btn" on:mousedown={changImage}>
        <img class="contact-imgs {fadeActive}" src={imgScr} alt="">
    </button>    
</div>

<style>
    input{
        background-color: #CBCBCB;
    }

    select{
        background-color: #CBCBCB;
    }

    textarea{
        background-color: #CBCBCB;  
    }

    .contact-cont{
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 20px;
        z-index: 2100;
        bottom: 30px;
        right:30px;
    }
    .contact-btn{
        position: relative;
        background-color: rgba(255, 255, 255, 0.139);
        backdrop-filter: blur(5px);
        padding: 10px;
        border: none;
        border-radius: 50%;
        transform: scale(1.5);
        right: 30px;
    }

    .contact-btn:hover{
        cursor: pointer;
    }

    .contact-imgs.active {
        animation: fade 0.5s;
    }


@keyframes fade {
  0% {
    opacity: 0;
    scale: 0;
  }
  25% {
    opacity: 0;
    scale: 0
  }
  75% {
    opacity: 1;
    scale: 1;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}


.contact-form-cont{
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 450px;
    width: 290px;
    background-color: #CBCBCB;
    color: #112033;
    border-radius: 10px;
}
.contact-form-cont.active{
    display: flex;
}

.header-cont{
    width: 90%;
    margin-top: 5%;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.logo-img{
    height: 50px;
    width: 50px;
}


.form-cont{
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #112033;
}

.name-cont, .email-cont, .select-cont, .massage-cont{
  position: relative; /* Positioning context for child divs */
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-name, .header-email, .header-select, .header-massage{
  position: absolute; /* Position the overlay absolutely */
  z-index: 1; /* Set a higher z-index to overlay */
  left: 10%; 
  margin-bottom: 20px;
  background-color: #CBCBCB;
  color: rgb(127, 127, 127);
  width: 60px;
  display: flex;
  justify-content: center;
  pointer-events: none;
  transition: all .5s;
}
.header-select{
    width: 80px;
}

.header-massage{
    margin-bottom: 100px;
    width: 70px;
}

.input-name, .input-email, .select-area, .textarea-massage {
  position: relative; /* Keep the content relative to the container */
  z-index: 0; /* Default z-index, lower than the overlay */
  border-radius: 4px;
  border: rgb(127, 127, 127) solid 1px;
  height: 30px;
  width: 85%;
  outline: none;
  transition: all .5s;
}

.textarea-massage{
    height: 100px;
}

.submit-btn{
    width: 80%;
    height: 35px;
    background-color: #112033;
    color: #fff;
    border-radius: 10px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}




</style>