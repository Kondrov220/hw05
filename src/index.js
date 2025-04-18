import { info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';


const keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let rund = 0;
document.querySelector("button").addEventListener("click", ()=>{
    info({
        title: 'Нова гра'
      });
    document.addEventListener("keydown", (e)=>{
        if(e.key === document.querySelector("span").textContent){
            success({
                title: 'Правильно',
                delete: 50
              });
        }else{
            error({
                title: 'Не правильно',
                delete: 50
              });
        }
        rund = Math.round(Math.random() * 9);
        document.querySelector("span").textContent = keys[rund];
        });
});
const ctx = document.getElementById('sales-chart');
const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],

  };
  const salesChart = new Chart(ctx, {
    data: chartData,
    type: "line",
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  });