timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
x = 30;
y = "Game Over";
z = 1;
speak = "";
vowels = [];

function start(){
    quick_draw_data_set = ["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb"];
    random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_no];
localStorage.setItem("arr", Element_of_array);

document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn:<br><h1 class='header'>"+Element_of_array+"</h1>";
document.getElementById("Ll").innerHTML = "<center><button onclick='quit()' class= 'bt' id='quit-btn'>Quit</button></center>"
var synth = window.speechSynthesis;
vowels = ["a", "e", "i", "o", "u"]
for(j=0; j<vowels.length+1; j++) {
    if(Element_of_array.charAt(0) == vowels[j]) {
        speak = "an";
    }else{
        speak = "a";
    }
}
var speak_data = "Sketch To Be Drawn is "+speak+ Element_of_array;
var  utter_this = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
}
function time(){
    document.getElementById("output").innerHTML = "<p id='sketch_to_be_drawn'>Sketch To Be Drawn : "+ localStorage.getItem("arr") + "</p>";
document.getElementById("ooo").innerHTML = " ";

    x = 30;
y = "Time Up";
starttimer();
}


function starttimer(){
Timer = setInterval(myTimer, 1000);

function myTimer() {

if(x == 1){
clearInterval(Timer);
x = 30;
document.getElementById("timer").innerHTML= y;
if(z >=6){
    finish();
}else{
z = z+1;
document.getElementById("ooo").innerHTML = "<button id='c_sk' class='bt' data-toggle='modal' data-target= '#myModal1' onclick='start()'>Next</button>";
document.getElementById("draw_no").innerHTML = "Drawing : " + z + "/6";
}
}else{
x = x-1;
document.getElementById("timer").innerHTML = "Timer : " + x;
}
}
}

function setup(){
    canvas = createCanvas(450, 275)
    canvas.center();
    background("white");
}

function finish(){
    window.alert("Thank You For Attempting Our Quick Draw Challenge");
    window.location = 'index.html'
}