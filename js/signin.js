// login form begin
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label=>{
  label.innerHTML=label.innerText
  .split('')
  .map((letter,idx)=>letter=`<span style='transition-delay:${idx*50}ms'>${letter}</span>`)
  .join('')
})
// login form end