let hours  = 0;
let minutes= 0;
let seconds= 0;
a = document.getElementById("start");
let hr   = document.getElementById('hours');
let mins = document.getElementById('minutes');
let sec  = document.getElementById('seconds');
let time = document.getElementById('time');
let interval_id=null;


a.addEventListener('click', function(event){   
    clearInterval(interval_id);     
    interval_id = setInterval(function(){
            seconds++;
            if (seconds == 10){
                seconds=0;
                minutes++;
                document.getElementById('seconds').innerHTML = "00";
            }
            if (minutes == 2){
                seconds=0;
                minutes=0;
                hours++;
                document.getElementById('minutes').innerHTML = "00";
            }
            /*document.getElementById('seconds').innerHTML = seconds;*/
            
            if (seconds<10){
                document.getElementById('seconds').innerHTML = '0'+seconds;
                }
            else{
                document.getElementById('seconds').innerHTML = seconds;
 
            }

            if (minutes<10){
                document.getElementById('minutes').innerHTML = '0'+minutes;
               
            }
            else{
                document.getElementById('minutes').innerHTML = minutes;

            }
            if (hours<10){
            document.getElementById('hours').innerHTML = '0'+hours;
            }
            else{
                document.getElementById('hours').innerHTML =hours;

            }
            

},1000)});



document.getElementById("stop").addEventListener('click',function(){
    clearInterval(interval_id);
    



});

document.getElementById("reset").addEventListener('click',function(){
    hours=0;seconds=0;minutes=0;
    clearInterval(interval_id);     
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
});
 
