const elInput = document.querySelector("#name");
const elBtn = document.querySelector("#btn");
const elResult = document.querySelector("#elresult");
const elResult2 = document.querySelector("#elresult2");
const elResult3 = document.querySelector("#elresult3");
const elResult4 = document.querySelector("#elresult4");
const but = document.querySelector("#turn");

const humanSpead = 3.6;
const bysycleSpead = 20.1;
const carSpead = 70;
const plainSpead = 800;

elBtn.addEventListener("click", function () {
  const spase = elInput.value;

  const time = spase / humanSpead;

  const hour = Math.floor(time);

  const Allminutes = (time - hour) * 60;

  const minutes = Math.floor(Allminutes);

  const seconds = Math.round((Allminutes - minutes) * 60);

  elResult.textContent = `${hour} soat  ${minutes} daqiqa ${seconds} soniya`;

  // cycle

  const spase2 = elInput.value;

  const time2 = spase2 / bysycleSpead;

  const hour2 = Math.floor(time2);

  const Allminutes2 = (time2 - hour2) * 60;

  const minutes2 = Math.floor(Allminutes2);

  const seconds2 = Math.round((Allminutes2 - minutes2) * 60);

  elResult2.textContent = `${hour2} soat  ${minutes2} daqiqa ${seconds2} soniya`;

  // car

  const spase3 = elInput.value;

  const time3 = spase3 / carSpead;

  const hour3 = Math.floor(time3);

  const Allminutes3 = (time3 - hour3) * 60;

  const minutes3 = Math.floor(Allminutes3);

  const seconds3 = Math.round((Allminutes3 - minutes3) * 60);

  elResult3.textContent = `${hour3} soat  ${minutes3} daqiqa ${seconds3} soniya`;

  // plain
  const spase4 = elInput.value;

  const time4 = spase4 / plainSpead;

  const hour4 = Math.floor(time4);

  const Allminutes4 = (time4 - hour4) * 60;

  const minutes4 = Math.floor(Allminutes4);

  const seconds4 = Math.round((Allminutes4 - minutes4) * 60);

  elResult4.textContent = `${hour4} soat  ${minutes4} daqiqa ${seconds4} soniya`;
});
but.addEventListener("click", () => {
  // document.body.classList.add("tun");
  // document.body.classList.remove("tun");

  if (but.innerHTML == "Tun") {
    but.innerHTML = "Kun ☀";
  }

  document.body.classList.toggle("tun");
});
