var reduce_session = document.getElementsByClassName("reduce_session");
var increase_session = document.getElementsByClassName("increase_session");
var reduce_break = document.getElementsByClassName("reduce_break");
var increase_break = document.getElementsByClassName("increase_break");
var settimer = document.getElementById("settimer");
var breaktimer = document.getElementById("breaktimer");
var reset = document.getElementById("reset")
var pause =document.getElementById("pause")
var count =  document.getElementById("count");
var session_heading = document.getElementById("session_heading");


//declaring and variables for the clock 
var session=20;
var break_time = 5;
var session_no = 1;
var counter_id;
var time1=session*60-1,time2=break_time*60-1;


//eventListener on btn_decrease  
reduce_session[0].addEventListener("click",function(){
  if(session>1){
     session--;
     increase_session[0].removeAttribute("disabled");
     increase_session[0].style.background="black";
  }
  if(session==1){
    reduce_session[0].style.background="lightgray";
    reduce_session[0].disabled="true";
  }
 
   settimer.innerHTML = `${session} min`;
   time1 = session*60-1;
})



//event listener on btn_increase button
increase_session[0].addEventListener("click",function(){
   if(session<60){
     session++;
     reduce_session[0].removeAttribute("disabled");
     reduce_session[0].style.background="black";


  }
       //disabling of btn_increase btn when count ==60
   if(session==60){
    increase_session[0].style.background="lightgray";
    increase_session[0].disabled="true";
  }
  
   settimer.innerHTML = `${session} min`;
   time1 = session*60-1;
   console.log(settimer.innerHTML);
})


//eventListener on btn_decrease  
reduce_break[0].addEventListener("click",function(){
  if(break_time>1){
     break_time--;
     increase_break[0].removeAttribute("disabled");
     increase_break[0].style.background="black";
  }
  if(break_time==1){
    reduce_break[0].style.background="lightgray";
    reduce_break[0].disabled="true";
  }
 
   breaktimer.innerHTML = `${break_time} min`;
   time2 = break_time*60-1;
   console.log(breaktimer.innerHTML);
})


//event listener on btn_increase button
increase_break[0].addEventListener("click",function(){
   if(break_time<60){
     break_time++;
     reduce_break[0].removeAttribute("disabled");
     reduce_break[0].style.background="black";


  }
       //disabling of btn_increase btn when count ==60
   if(break_time==60){
    increase_break[0].style.background="lightgray";
    increase_break[0].disabled="true";
  }
  
   breaktimer.innerHTML = `${break_time} min`;
   time2 = break_time*60-1;
   console.log(breaktimer.innerHTML);
})


    
    
//pause button
pause.addEventListener('click', function(){
 
  if(pause.innerHTML === "Pause"){
    pause.innerHTML = "Start";
    reduce_session[0].disabled="true";
    increase_session[0].disabled="true";
    reduce_break[0].disabled="true";
    increase_break[0].disabled="true";
     reduce_session[0].style.background="lightgray";
    increase_session[0].style.background="lightgray";
    reduce_break[0].style.background="lightgray";
    increase_break[0].style.background="lightgray";
    clearInterval(counter_id);
  }
  else if(pause.innerHTML ==="Start"){
    pause.innerHTML = "Pause";
    reduce_session[0].disabled="true";
    increase_session[0].disabled="true";
    reduce_break[0].disabled="true";
    increase_break[0].disabled="true";
    reduce_session[0].style.background="lightgray";
    increase_session[0].style.background="lightgray";
    reduce_break[0].style.background="lightgray";
    increase_break[0].style.background="lightgray";
   
    counter_id = setInterval(function(){
       if(time1===-1&&time2===-1){
       time1 = session*60-1;
       time2 = break_time*60-1;
       session_no++;
    }
    if(time1>=0 ){
        
    session_heading.innerHTML =`Session ${session_no}`;

      let min = parseInt(time1/60);     
      let sec = time1%60;
      if(min>=0 &&min<=9){
        min = ("0"+min).slice(-2);
      }
      if(sec>=0 &&sec<=9){
       sec = ("0" + sec).slice(-2);
      }
      
      count.innerHTML = `${min}:${sec}`
      time1--;
      }
      else if(time2>=0){
        
        session_heading.innerHTML ="Break";
        
      let min = parseInt(time2/60);      
      let sec = time2%60;
       if(min>=0 &&min<=9){
        min = ("0"+min).slice(-2);
      }
      if(sec>=0 &&sec<=9){
       sec = ("0" + sec).slice(-2);
      }
      
      count.innerHTML = `${min}:${sec}`
      time2--;
      }
    },1000);
    
 
  }
});

//event listener on btn_reset button
reset.addEventListener("click",function(){
  session=20;       
  break_time=5;
  session_no = 1;
  settimer.innerHTML = `${session} min`;
  breaktimer.innerHTML = `${break_time} min`;
  reduce_session[0].removeAttribute("disabled");
  increase_session[0].removeAttribute("disabled");
  reduce_break[0].removeAttribute("disabled");
  increase_break[0].removeAttribute("disabled");
  reduce_session[0].style.background="black";
  increase_session[0].style.background="black";
  reduce_break[0].style.background="black";
  increase_break[0].style.background="black";
  session_heading.innerHTML = "No Session";
  count.innerHTML = "00:00";
  clearInterval(counter_id);
  pause.innerHTML ="Start";
  time1=session*60-1;
  time2=break_time*60-1

})
