const inputBox = document.getElementById("input-box")
const eventBox= document.getElementById("event")

function add(){
  if(inputBox.value === ''){
    alert("You should enter a value")
  }else{
    let li = document.createElement("li");
    li.innerHTML= inputBox.value;
    eventBox.appendChild(li);
    li.addEventListener('click',function(){
      li.style.textDecoration = "line-through"
    })
    li.addEventListener('dblclick',function(){
      eventBox.removeChild(li);
    })
  }
  
  
  inputBox.value ='';
}