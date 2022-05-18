// login form begin
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label=>{
  label.innerHTML=label.innerText
  .split('')
  .map((letter,idx)=>letter=`<span style='transition-delay:${idx*50}ms'>${letter}</span>`)
  .join('')
})
// login form end




// form validation


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const pass= document.querySelector(".password")
const email= document.querySelector(".email")
const loginForm = document.querySelector("#loginForm")
const formControl = document.querySelector(".form-control")
const small = document.querySelector("small")

loginForm.addEventListener("submit",(e)=>{
  checkInputs()
  e.preventDefault()
})

function checkInputs(){
  emailValue=email.value.trim()
  passValue= pass.value.trim()


  
  if(emailValue===''){
    formControl.classList.add("error")
  }
  else if(!isEmail(emailValue)){
  formControl.classList.add("error")
  pass.parentElement.children[4].innerText="email not valid"
  
}
  else
  {
    email.parentElement.classList.remove("error")
    email.parentElement.classList.add("correct")
  }


  if(passValue===''){
    formControl.classList.add("error")
  }
  else if(passValue.length < 6)
  {
    
    pass.parentElement.classList.add("error")
    pass.parentElement.children[4].innerText="password must be longer than 6 chrs"
  }
  else
  {
    pass.parentElement.classList.remove("error")
    pass.parentElement.classList.add("correct")
    
  }
}



