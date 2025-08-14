const generateProfileBtn = document.getElementById("generateProfileBtn");
const clearBtn = document.getElementById("clearBtn");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const output = document.getElementById("output");

generateProfileBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const age = ageInput.value;
  const color = colorInput.value;

  if (!name || !age || !color) {
    output.innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
    return;
  }

  output.innerHTML = `
    <div class="profile-card" style="border-color: ${color};">
      <h2 style="color: ${color};">${name}</h2>
      <p style="color: ${color};">Age: ${age}</p>
      <p style="color: ${color};">Favorite Color: ${color}</p>
    </div>
  `;
});

clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "";
  output.innerHTML = "";
});
