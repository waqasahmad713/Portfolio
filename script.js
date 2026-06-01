// Typing effect
const text = [
  "AI Engineer 🤖",
  "Machine Learning Developer 🧠",
  "Computer Vision Expert 👁️",
  "Deep Learning Specialist 🔥"
];

let i=0,j=0,isDeleting=false;

function type(){
  let current=text[i];

  if(!isDeleting){
    document.getElementById("typing").innerHTML=current.substring(0,j++);
    if(j===current.length){
      isDeleting=true;
      setTimeout(type,1000);
      return;
    }
  }else{
    document.getElementById("typing").innerHTML=current.substring(0,j--);
    if(j===0){
      isDeleting=false;
      i=(i+1)%text.length;
    }
  }

  setTimeout(type,120);
}
type();


// PARTICLES BACKGROUND (Silicon Valley style)
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    links: {
      enable: true,
      color: "#00ffff",
      distance: 150
    },
    move: {
      enable: true,
      speed: 1
    },
    size: { value: 2 }
  }
});


// Skills Chart
const ctx=document.getElementById("skillsChart");
new Chart(ctx,{
  type:"radar",
  data:{
    labels:["Python","TensorFlow","PyTorch","OpenCV","YOLO","LSTM"],
    datasets:[{
      label:"Skills",
      data:[95,85,80,90,88,82],
      borderColor:"#00ffff",
      backgroundColor:"rgba(0,255,255,0.1)"
    }]
  }
});



