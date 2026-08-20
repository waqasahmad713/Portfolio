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


// Skills Chart (doughnut)
const ctx = document.getElementById("skillsChart").getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Python","Pandas","NumPy","Machine Learning","TensorFlow","PyTorch","OpenCV","YOLO","Data Labeling","Annotation"],
    datasets: [{
      data: [95,92,88,90,85,80,90,88,90,88],
      backgroundColor: [
        '#06b6d4','#0891b2','#0ea5a1','#34d399','#60a5fa','#7c3aed','#06b6d4','#0891b2','#22d3ee','#60a5fa'
      ],
      hoverOffset: 8,
      cutout: '60%'
    }]
  },
  options: {
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } }
    },
    responsive: true,
    maintainAspectRatio: false
  }
});


