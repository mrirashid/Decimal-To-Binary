const result=document.querySelector("#result")

const submit=document.querySelector("#submit")

function binary(e){

  e.preventDefault();

  const num=document.querySelector("#number").value;

  if(num===' '){

    console.log("Please Input a number")

  }

  else if(num<0){

    alert("Please Input Positive Number")

  }

  else{

    result.style.visibility="visible"

  }

  

  //converting//

  

  binaryNumber=Number(num).toString(2)

  result.innerText=binaryNumber;

  }

  submit.addEventListener("click", binary)

