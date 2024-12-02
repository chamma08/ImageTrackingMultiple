document.addEventListener("DOMContentLoaded", () => {
    const snapButton = document.getElementById("snap-button");
    const changeModelButton = document.getElementById("change-model-button");
    const arModel = document.getElementById("ar-model");
    const models = ["#model1", "#model2", "#model3"];
    let currentModelIndex = 0;
  
    // Snap Button Logic
    snapButton.addEventListener("click", () => {
      alert("Snap functionality not implemented yet!");
      // Implement snap functionality using WebRTC or a library like html2canvas
    });
  
    // Change Model Button Logic
    changeModelButton.addEventListener("click", () => {
      currentModelIndex = (currentModelIndex + 1) % models.length;
      arModel.setAttribute("gltf-model", models[currentModelIndex]);
    });
  });
  