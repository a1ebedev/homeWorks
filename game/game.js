var vir = {
  x: 50,
  y: 50,
};
var antivir = {
  x: 600,
  y: 600,
};

var field = {
  x: 800,
  y: 800,
};

// Получение параметров скорости и размера игрока
function configGame() {
  setInterval(function () {
    vir.size = firstplayersize.value;
    vir.speed = firstplayerspeed.value;
    antivir.size = secondplayersize.value;
    antivir.speed = secondplayerspeed.value;
  }, 100);
}

// Смена слайда
function nextSlide(a, b) {
  document.getElementById(a).style.display = "none";
  document.getElementById(b).style.display = "block";
}
// Отображение в меню параметров с виде цифр
function menu(r, p) {
  var rng = document.getElementById(r);
  var p = document.getElementById(p);
  p.innerHTML = rng.value;
}

// Запуск игры
function startGame() {
  nextSlide("config-view", "game");

  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");

  var bgImg = new Image();
  var antivirus = new Image();
  var virus = new Image();

  // Пути к изображениям
  bgImg.src = "img/bg.jpg";
  antivirus.src = "img/antivirus.png";
  virus.src = "img/vir.png";

  // Обработка нажатий клавиш клавиатуры
  document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
  });

  function keys() {
    if (keys[87]) {
      // W
      virMoveY(vir.speed);
    }
    if (keys[83]) {
      // S
      virMoveY(-vir.speed);
    }
    if (keys[68]) {
      // D
      virMoveX(-vir.speed);
    }
    if (keys[65]) {
      // A
      virMoveX(vir.speed);
    }
    if (keys[38]) {
      // Up
      antivirMoveY(antivir.speed);
    }
    if (keys[40]) {
      // Down
      antivirMoveY(-antivir.speed);
    }
    if (keys[39]) {
      // Right
      antivirMoveX(-antivir.speed);
    }
    if (keys[37]) {
      // Left
      antivirMoveX(antivir.speed);
    }
  }

  // Перемещение игроков
  function virMoveX(a) {
    vir.x -= a;
  }

  function virMoveY(a) {
    vir.y -= a;
  }
  function antivirMoveX(a) {
    antivir.x -= a;
  }

  function antivirMoveY(a) {
    antivir.y -= a;
  }

  // Игровые условия
  function gameRules() {
    // Определение центра у спрайтов
    var vX = vir.x + vir.size / 2;
    var vY = vir.y + vir.size / 2;
    var aX = antivir.x + antivir.size / 2;
    var aY = antivir.y + antivir.size / 2;

    var lengthX = Math.abs(vX - aX);
    var lengthY = Math.abs(vY - aY);
    vir.height = vir.size / 1.25;
    vir.width = vir.size / 1.34;
    antivir.height = antivir.size / 1.26;
    antivir.width = antivir.size / 1.7;

    // Столкновение между собой
    if (
      (lengthX <= vir.width / 2 + antivir.width / 2) &
      (lengthY <= vir.height / 2 + antivir.height / 2)
    ) {
      if (Number(vir.size) > Number(antivir.size)) {
        gameOver('Вирус победил');
      } else {
        gameOver('Вирус проиграл');
      }
      return;
    }

    // Столкновение со стенками
    if (
      vir.x <= 0 - vir.size + vir.width ||
      vir.x + vir.width >= field.x ||
      vir.y <= 0 - vir.size + vir.height ||
      vir.y + vir.height >= field.y
    ) {
      gameOver("Вирус проиграл");
    }
    if (
      antivir.x <= 0 - antivir.size + antivir.width ||
      antivir.x + antivir.width >= field.x ||
      antivir.y <= 0 - antivir.size + antivir.height ||
      antivir.y + antivir.height >= field.y
    ) {
      gameOver("Вирус выиграл");
    }
  }

  // Игра окончена
  function gameOver(win) {
    document.getElementById("winner").textContent = win;
    nextSlide("game", "game-over");
  }

  // отрисовка
  function draw() {
    context.drawImage(bgImg, 0, 0, 800, 800);
    context.drawImage(
      antivirus,
      antivir.x,
      antivir.y,
      antivir.size,
      antivir.size
    );
    context.drawImage(virus, vir.x, vir.y, vir.size, vir.size);
    keys();
    gameRules();
    Render(draw);
  }

  virus.onload = draw;

  var Render = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 20);
      }
    );
  })();
}

configGame();
