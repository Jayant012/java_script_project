const first=document.getElementById("name");
const pass=document.getElementById("pass");
const forms=document.getElementById("forms");
const errors=document.getElementById("error");
forms.addEventListener('submit',(e)=>{
    let messages=[];
    if(first.value===''||first.value==null){
        messages.push("field required");
        break;

    }
    if(pass.value.length<6){
        messages.push("password should be greater");
    }

    if(pass.value.length==="password"){
        messages.push("password should not be password");
    }
    if(messages.length>0){
        e.preventDefault();
        error.innerText=messages.join(',');
    }
    
    
})