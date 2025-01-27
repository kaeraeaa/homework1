// Імпортуйте бібліотеку PNotify (використовуйте CDN або локально)
// import { alert, error, success } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// Масив доступних клавіш
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p'];
let currentKeyIndex = 0;

// Елементи DOM
const keyElement = document.getElementById('key');
const newGameButton = document.getElementById('new-game');

// Функція для оновлення поточної клавіші
function updateKey() {
  const currentKey = keys[currentKeyIndex];
  keyElement.textContent = currentKey;
}

// Ініціалізація гри
function startNewGame() {
  currentKeyIndex = 0;
  updateKey();
  alert({
    text: 'Нова гра розпочата!',
    type: 'info',
    delay: 2000,
  });
}

// Обробник події keydown
document.addEventListener('keydown', (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      alert({
        text: 'Вітаємо! Ви завершили гру!',
        type: 'success',
        delay: 3000,
      });
      startNewGame();
    } else {
      updateKey();
    }
  } else {
    error({
      text: `Неправильна клавіша! Спробуйте ще раз.`,
      delay: 2000,
    });
  }
});

// Обробник події keypress (запобігає діям за замовчуванням)
document.addEventListener('keypress', (event) => {
  event.preventDefault();
});

// Кнопка "Нова гра"
newGameButton.addEventListener('click', startNewGame);

// Початок гри
startNewGame();


// Підключіть Chart.js через CDN або локально
import Chart from 'chart.js/auto';

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: 'Продажі за останній місяць',
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: 'rgba(33, 150, 243, 0.5)',
      borderColor: '#2196f3',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const ctx = document.getElementById('sales-chart').getContext('2d');

const salesChart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Дні місяця',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Продажі (грн)',
        },
        beginAtZero: true,
      },
    },
  },
});
