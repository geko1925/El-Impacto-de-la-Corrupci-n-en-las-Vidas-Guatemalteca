function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  }
  
  function guardarRespuestas() {
    const respuestas = document.querySelectorAll(".question-block textarea");
    const datos = [];
    respuestas.forEach((area, index) => {
      datos.push({ pregunta: index + 1, respuesta: area.value.trim() });
    });
    console.log("Respuestas enviadas:", datos);
    document.getElementById("respuestaGuardada").style.display = "block";
    setTimeout(() => {
      document.getElementById("respuestaGuardada").style.display = "none";
    }, 4000);
  }
  
  function addComment() {
    const commentText = document.getElementById('userComment').value;
    const imageFile = document.getElementById('userImage').files[0];
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    if (commentText.trim() !== "") {
      commentContainer.innerHTML = `<p>${commentText}</p>`;
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          commentContainer.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
      }
      document.getElementById('commentsList').appendChild(commentContainer);
      document.getElementById('userComment').value = "";
      document.getElementById('userImage').value = "";
    }
  }
  
  new Chart(document.getElementById("corrupcionChart"), {
    type: 'bar',
    data: {
      labels: ["Educación", "Salud", "Infraestructura", "Seguridad"],
      datasets: [{
        label: "Impacto de la Corrupción",
        data: [70, 85, 60, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });