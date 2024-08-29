// let countdown_data = new Date()
// countdown_data.setDate(countdown_data.getDate() + 7)
// let timer = setInterval(update_counter, 1000)
// function update_counter() {
//     current = new Date().getTime()
//     let distance = (countdown_date-current) / 1000
//     if (distance < 0) {
//         clearInterval(timer)
//         return
//     }
//     let days = Math.floor(distance / (60 * 60 * 24))
//     distance -= days * (60 * 60 * 24)
//     let hours = Math.floor(distance / (60 * 60))
//     distance -= hours * (60 * 60)
//     let minutis = Math.floor(distance / (60))
//     distance -= minutis * (60)
//     let seconds = Math.floor(distance)
//     document.getElementById("days").innerHTML = days
//     document.getElementById("hours").innerHTML = hours
//     document.getElementById("minutes").innerHTML = minutis
//     document.getElementById("seconds").innerHTML = seconds

// }


let countdown_data = new Date();
countdown_data.setDate(countdown_data.getDate() + 3);

let timer = setInterval(update_counter, 1000);

function update_counter() {
  const current = new Date().getTime();
  let distance = (countdown_data - current) / 1000;

  if (distance < 0) {
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (60 * 60 * 24));
  distance -= days * (60 * 60 * 24);
  const hours = Math.floor(distance / (60 * 60));
  distance -= hours * (60 * 60);
  const minutes = Math.floor(distance / 60);
  distance -= minutes * 60;
  const seconds = Math.floor(distance);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}


///////////////////////////////////////////////////////////////
// تحديد العناصر
const images = document.querySelectorAll('.image2');
const nextButton = document.getElementById('nextButton');
const lastButton= document.getElementById('lastButton')
const indicators = document.querySelectorAll('.indicator');
let currentImageIndex = 0;
let i= 0

// إخفاء جميع الصور ما عدا الأولى
images.forEach((image, index) => {
  if (index !== currentImageIndex) {
    image.style.display = 'none';
  }
});




// وظيفة لتبديل الصورة إلى التالية
function nextImage() {
  // إخفاء الصورة الحالية
  images[currentImageIndex].style.display = 'none';

  // تحديث مؤشر الصورة الحالية
  currentImageIndex++;
  i++
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // العودة إلى الصورة الأولى عند الوصول إلى النهاية
  }



  // عرض الصورة التالية
  images[currentImageIndex].style.display = 'block';
  
  indicators.forEach((indicator, i) => {
    indicator.classList.remove('active');
    if (i === currentImageIndex) {
      indicator.classList.add('active');
    }
  });
  
}


//2


function LastImage() {
  // إخفاء الصورة الحالية
  images[currentImageIndex].style.display = 'none';


  currentImageIndex--;
  i--
  if (currentImageIndex < 0) {
    currentImageIndex = images.length-1; // العودة إلى الصورة الأولى عند الوصول إلى النهاية
  }

  // عرض الصورة التالية
  images[currentImageIndex].style.display = 'block';

  indicators.forEach((indicator, i) => {
    indicator.classList.remove('active');
    if (i === currentImageIndex) {
      indicator.classList.add('active');
    }
  });
  
}



// إضافة حدث النقر إلى الزر
nextButton.addEventListener('click', nextImage);
lastButton.addEventListener('click', LastImage);
