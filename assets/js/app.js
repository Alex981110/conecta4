let ngato,
  btnAcept,
  circle,
  canvas,
  ctx,
  maxx,
  maxy,
  tamC,
  px, py,
  gato;

window.onload = () => {
  ngato = document.querySelector('#n_gato');
  btnAcept = document.querySelector('#btnacept');
  circle;
  canvas = document.getElementById("gato");
  ctx = canvas.getContext("2d");
  maxx = 584;
  maxy = 584;
  tamC = 0;
  dibujaGato()
};

const ObtenerCoords = (event) => {
  let rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}


const posicion = () => {
  let pos = ObtenerCoords(event);
  //    alert(pos.x.toString()+" "+pos.y.toString());

  px = Math.trunc(pos.x / tamC);
  py = Math.trunc(pos.y / tamC);
  //   circuloComputadora();
  circuloJugador();
}

const dibujaGato = () => {
  // alert(maxx+" "+maxy+" "+ngato.value);
  tamC = Math.round(584 / 8);

  for (let i = 1; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(i * tamC, 0);
    ctx.lineTo(i * tamC, maxy);
    ctx.moveTo(0, i * tamC);
    ctx.lineTo(maxx, i * tamC);
    ctx.stroke();
  }

  gato = new Array(8);
  for (let i = 0; i < 8; i++) {
    gato[i] = new Array(8);
    for (let j = 0; j < 8; j++)
      gato[i][j] = 0;
  }
}
const circuloComputadora = () => {
  //    alert(px+" c "+py);
  ctx.fillStyle = "#F0314C";
  ctx.beginPath();
  ctx.arc((px * tamC) + (tamC * .5), (py * tamC) + (tamC * .5), tamC * .4, 0, 2 * Math.PI);
  ctx.fill();
}

const circuloJugador = () => {
  ctx.fillStyle = "#F4C829";
  ctx.beginPath();
  ctx.arc((px * tamC) + (tamC * .5), (py * tamC) + (tamC * .5), tamC * .4, 0, 2 * Math.PI);
  ctx.fill();
}