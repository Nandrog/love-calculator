
document.addEventListener("DOMContentLoaded",displays);
let you=document.getElementById("you").value;
  let partner=document.getElementById("partner").value;
  //save(you,partner,0)
document.getElementById("print").addEventListener('click',()=>{
  let you=document.getElementById("you").value;
  let partner=document.getElementById("partner").value;
  save(you,partner,0)
  document.getElementById("couple").innerHTML=`
<em><strong><b>${you}</b></strong></em>
      <img src="images/heart3-removebg-preview.png" height="200">
      <em><strong><b>${partner}</b></strong></em>
      <h5>${you}'s love for ${partner}<img src="images/heart2-removebg-preview.png" width="100"></h5>
      <h1>What does the calculator have to say to ${you}?</h1>
  `;
  
});


function save(you,partner,rel){
  localStorage.setItem('lover',you);
  localStorage.setItem('loved',partner);
  localStorage.setItem('result',toString(rel));
}
function displays(){
  localStorage.getItem('you');
  localStorage.getItem('partner');
  localStorage.getItem('result');
}

  let result=0;
  function add(){
    const yes=Math.floor(Math.random()*10);
    result+=yes;
    return result;
  }
  function no(){
    const no=Math.floor(Math.random()*5);
    result+=no;
    return result;
  }
  function not(){
    const no=Math.floor(Math.random()*3);
    result+=no;
    return result;
  }
  function addt(){
    const yes=Math.floor(Math.random()*15);
    result+=yes;
    return result;
  }
  function nut(){
    const yes=Math.floor(Math.random()*7);
    result+=yes;
    return result;
  }
  function estm(){
    const yes=Math.floor(Math.random()*20);
    result+=yes;
    return result;
  }
  document.getElementById("num-1").addEventListener('click',add);

  document.getElementById("num-2.1").addEventListener('click',add);
  document.getElementById("num-2.2").addEventListener('click',no);

  document.getElementById("num-3.1").addEventListener('click',add);
  document.getElementById("num-3.1").addEventListener('click',no);

  document.getElementById("num-4.1").addEventListener('click',add);
  document.getElementById("num-4.2").addEventListener('click',no);

  document.getElementById("num-5.1").addEventListener('click',add);
  document.getElementById("num-5.2").addEventListener('click',no);

  document.getElementById("num-6.1").addEventListener('click',add);
  document.getElementById("num-6.2").addEventListener('click',no);

  document.getElementById("num-7.1").addEventListener('click',add);
  document.getElementById("num-7.2").addEventListener('click',no);

  document.getElementById("num-8.1").addEventListener('click',add);
  document.getElementById("num-8.2").addEventListener('click',no);

  document.getElementById("num-9.1").addEventListener('click',add);
  document.getElementById("num-9.2").addEventListener('click',no);

  document.getElementById("num-1.1").addEventListener('click',addt);
  document.getElementById("num-1.2").addEventListener('click',add);
  document.getElementById("num-1.3").addEventListener('click',not);
  document.getElementById("num-1.4").addEventListener('click',no);
  document.getElementById("num-1.5").addEventListener('click',nut);

  document.getElementById("num-11.1").addEventListener('click',addt);
  document.getElementById("num-11.2").addEventListener('click',add);
  document.getElementById("num-11.3").addEventListener('click',not);
  document.getElementById("num-11.4").addEventListener('click',no);
  document.getElementById("num-11.5").addEventListener('click',nut);

  document.getElementById("submits").addEventListener('click',()=>{
    //alert('thank you');
    let you=document.getElementById("you").value;
  let partner=document.getElementById("partner").value;
    save(you,partner,result);
    document.getElementById("results").innerHTML=`
    <em><strong><b>${you}</b></strong></em>
    <img src="images/heart3-removebg-preview.png" height="200">
    <em><strong><b>${partner}</b></strong></em>
    <img src="images/heart2-removebg-preview.png" width="100">
    <h1>${you} & ${partner} your relationship has a ${result+5}% chance</h1>
    <p id="response"></p>
    `;
    const lam=document.getElementById("response");
    let response='';
    if(result<30){
      lam.classList.add("verypoor")
      response=`oops something is not right about your relationship it can be either with you(${you}) or your partner(${partner}) but you can always come together and talk about. communication is key`;
    }else if(result<=50 && result>=30){
      lam.classList.add("poor")
      response=`oops something is missing in your relationship it can be either with you(${you}) or your partner(${partner}) but you can always come together and talk about. Trust is a building block`;
    }else if(result>50 && result<=70){
      lam.classList.add("good")
      response=`omg you quite have a chance in your relationship it can be either with you(${you}) or your partner(${partner}) but you can always come together and be proud. let the love flow`;
    }else if(result>70){
      lam.classList.add("verygood")
      response=`wow!  your relationship is dope. it can be either with you(${you}) or your partner(${partner}) but you can always come together and laugh it out. teach others to be like you`;
    }
    
    lam.innerHTML=response;
  });


