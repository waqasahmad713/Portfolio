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
const ctx = document.getElementById("skillsChart");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Python", "Pandas", "NumPy", "ML", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Data Labeling", "Annotation"],
    datasets: [{
      data: [95, 92, 88, 90, 85, 80, 90, 88, 90, 88],
      backgroundColor: [
        "#22d3ee",
        "#60a5fa",
        "#818cf8",
        "#38bdf8",
        "#a855f7",
        "#7c3aed",
        "#ec4899",
        "#f43f5e",
        "#14b8a6",
        "#06b6d4"
      ],
      borderWidth: 0,
      hoverOffset: 14,
    }]
  },
  options: {
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e2e8f0",
          boxWidth: 14,
          padding: 16,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(34, 211, 238, 0.2)",
        borderWidth: 1,
      }
    }
  }
});




