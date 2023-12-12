// Mendapatkan referensi untuk shadow dan tip
const shadow = document.querySelector(".shadow");
const tip = document.querySelector(".tip");

// Fungsi untuk menangani animasi
function handleAnimation(animationDuration, animationName) {
  return new Promise((resolve) => {
    shadow.style.animation = `${animationName} ${animationDuration}s`;
    const onAnimationEnd = () => {
      shadow.removeEventListener("animationend", onAnimationEnd);
      resolve();
    };
    shadow.addEventListener("animationend", onAnimationEnd);
  });
}

// Tampilkan tip saat init
tip.style.display = "flex";

// nonaktifkan event mousemove dan touchmove selama animasi berjalan
let moveHandler = (e) => {
  let x = e.clientX - document.documentElement.clientWidth * 1.5;
  let y = e.clientY - document.documentElement.clientHeight * 1.5;
  shadow.style.transform = "translate(" + x + "px, " + y + "px)";
};

let touchHandler = (e) => {
  let x = e.touches[0].clientX - document.documentElement.clientWidth * 1.5;
  let y = e.touches[0].clientY - document.documentElement.clientHeight * 1.5;
  shadow.style.transform = "translate(" + x + "px, " + y + "px)";
};

// Fungsi untuk memulai proses animasi
async function startAnimProcess() {
  const right = document.querySelector(".right");
  await new Promise((resolve) => setTimeout(resolve, 1200)); // Delay 1,2 detik

  // Menampilkan .right, tip, dan shadow saat init
  right.style.display = "block";
  tip.style.display = "flex";
  shadow.style.display = "block";

  // Menjalankan torchBlink dalam proses init
  console.log("torchBlink Started");
  await handleAnimation(3, "torchBlink");
  console.log("torchBlink Ended");

  // Menjalankan torchMove dalam proses init
  console.log("torchMove Started");
  await handleAnimation(3, "torchMove");
  console.log("torchMove Ended");

  // Menambah event listener mousemove setelah proses init selesai
  document.addEventListener("mousemove", moveHandler);
  document.addEventListener("touchmove", touchHandler);
}

document.removeEventListener("mousemove", moveHandler);
document.removeEventListener("touchmove", touchHandler);

startAnimProcess();
