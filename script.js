//your code here
const imageClasses = ["img1", "img2", "img3", "img4", "img5"];
let selectedTiles = [];

const imgContainer = document.getElementById("img-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

// Prepare images
const images = imageClasses.slice();
const duplicate =
  imageClasses[Math.floor(Math.random() * imageClasses.length)];
images.push(duplicate);
shuffle(images);

// Render images
images.forEach(function (cls) {
  const img = document.createElement("img");
  img.classList.add(cls);

  img.addEventListener("click", function () {
    handleClick(img, cls);
  });

  imgContainer.appendChild(img);
});

function handleClick(img, cls) {
  if (selectedTiles.length === 2) return;
  if (selectedTiles.some((item) => item.img === img)) return;

  img.classList.add("selected");
  selectedTiles.push({ img: img, cls: cls });

  resetBtn.style.display = "inline-block";

  if (selectedTiles.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

verifyBtn.addEventListener("click", function () {
  verifyBtn.style.display = "none";

  const first = selectedTiles[0];
  const second = selectedTiles[1];

  if (first.cls === second.cls) {
    para.innerText = "You are a human. Congratulations!";
  } else {
    para.innerText =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

resetBtn.addEventListener("click", function () {
  selectedTiles.forEach(function (item) {
    item.img.classList.remove("selected");
  });

  selectedTiles = [];
  para.innerText = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
});

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
