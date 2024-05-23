// 1-masala


// let t = 22; 
// let T = 5;  

// let newTime = (t + T) % 24;

// console.log("Yangi jo'nash vaqti: " + newTime + ":00");

// 2-masala

// let selsiy = 25; 

// let kelvin = selsiy + 273.15;

// let fahrenheit = (selsiy * 9/5) + 32;

// console.log("Selsiy bo'yicha harorat: " + selsiy + "°C");
// console.log("Kelvin bo'yicha harorat: " + kelvin + "K");
// console.log("Farangeyt bo'yicha harorat: " + fahrenheit + "°F");

// 3-masala

// let N = 4;  
// let K = 2;


// let ValiYoshi = N / (K - 1);  
// let AliYoshi = ValiYoshi + N;  

// console.log("Vali yoshi: " + ValiYoshi);
// console.log("Ali yoshi: " + AliYoshi);

// 4-masala

// let n = 10;  
// let a = 90;  
// let b = 80;  

// let quruqModda = n * (1 - a / 100);
// let yangiMassa = quruqModda / (1 - b / 100);

// console.log("Quyoshda qolganidan keyin tarvuz massasi: " + yangiMassa + " kg");

// 5-masala

// let N = 5;  


// let ichkiBurchaklarYigindisi = (N - 2) * 180;

// console.log("Tomonlari " + N + " ga teng bo'lgan ko'pburchakning ichki burchaklari yig'indisi: " + ichkiBurchaklarYigindisi + "°");

// 6-masala

// let currentHour = 14;  
// let currentMinute = 30;  
// let t = 90;  


// let totalMinutes = currentMinute + t;

// let newHour = (currentHour + Math.floor(totalMinutes / 60)) % 24;
// let newMinute = totalMinutes % 60;

// console.log("Yangi vaqt: " + newHour.toString().padStart(2, '0') + ":" + newMinute.toString().padStart(2, '0'));

// 7-masala

// let sardorYoshi = 20;  // Sardorning hozirgi yoshi (masalan, 20 yosh)
// let buviYoshi = 70;  // Buvisining hozirgi yoshi (masalan, 70 yosh)

// let x = buviYoshi - 2 * sardorYoshi;

// if (x < 0) {
//     console.log("Sardor hech qachon buvisining yoshini yarmiga teng yoshi bo'lolmaydi.");
// } else {
//     console.log(x + " yildan so'ng Sardorning yoshi buvisining yoshining yarimiga teng bo'ladi.");
// }

// 8-masala

// let maoshlar = {
//     "Direktor": 1500,
//     "Tester": 800,
//     "Ishchi1": 1200,
//     "Ishchi2": 1000,
//     "Ishchi3": 900
// };

// let xodimlarSoni = Object.keys(maoshlar).length;
// let jamiMaosh = Object.values(maoshlar).reduce((a, b) => a + b, 0);
// let ortachaMaosh = jamiMaosh / xodimlarSoni;

// console.log("Ortacha maosh: " + ortachaMaosh.toFixed(2) + " dollar");

// 9-masala

// let n = 5; 
// let diagonalCount = (n * (n - 3)) / 2;

// console.log("Dioganallar jami nuqatada kesishadi: " + diagonalCount);

// 10-masala

// let A = 100;  
// let B = 5;    
// let T = 20;   

// let downloadTime = T / B;  
// let requiredDownloadVolume = A * downloadTime;  
// let minimumWaitTime = requiredDownloadVolume / A; 

// console.log("Eng kamroq kutish vaqti: " + minimumWaitTime + " sekund");
