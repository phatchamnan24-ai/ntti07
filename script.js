// Simple console log to confirm JS is loaded
console.log("Author portfolio & bookstore loaded successfully.");
function toggleLanguage() {
  const bioEn = document.getElementById('bio-en');
  const bioKh = document.getElementById('bio-kh');
  const btn = document.getElementById('translate-btn');

  if (bioEn.style.display === 'none') {
    bioEn.style.display = 'block';
    bioKh.style.display = 'none';
    btn.innerText = 'Translate to Khmer';
  } else {
    bioEn.style.display = 'none';
    bioKh.style.display = 'block';
    btn.innerText = 'Translate to English';
  }
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // ការពារកុំឱ្យវា Refresh ទំព័រហ្ស៊ីន

  const form = event.target;
  const data = new FormData(form);
  const button = form.querySelector("button[type='submit']");
  
  // ប្ដូរអក្សរលើប៊ូតុងពេលកំពុងផ្ញើ
  button.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending...';
  button.disabled = true;

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // បង្ហាញការជូនដំណឹងជោគជ័យ
      alert("🎉 Thank you! Your message has been sent directly to Phat Chamnan's email.");
      form.reset(); // លុបព័ត៌មានដែលបំពេញរួចចេញពីប្រអប់
    } else {
      alert("❌ Oops! There was a problem submitting your form. Please try again.");
    }
  }).catch(error => {
    alert("❌ Error: Could not connect to the server. Check your internet.");
  }).finally(() => {
    // បង្វិលប៊ូតុងមកសភាពដើមវិញ
    button.innerHTML = '<i class="bi bi-send-fill"></i> Send Message';
    button.disabled = false;
  });
});

// ចាប់យកព្រឹត្តិការណ៍នៅពេលចុចប៊ូតុង View Book
document.getElementById('hero-view-btn').addEventListener('click', function(event) {
  event.preventDefault(); // ការពារកុំឱ្យវា Jump ទៅភ្លាមៗ
  
  const bookstore = document.getElementById('books');
  const portfolio = document.getElementById('portfolio-section');
  
 
  // រុញ Screen ចុះមកក្រោមដោយទន់ភ្លន់ (Smooth Scroll) ទៅកាន់ផ្នែកគម្រោងថ្មី
  portfolio.scrollIntoView({ behavior: 'smooth' });
});

// ១. មុខងារនៅពេលចុចប៊ូតុង "Explore Books" នៅផ្នែកខាងលើ (Hero Section)
document.getElementById('hero-view-btn').addEventListener('click', function(event) {
  event.preventDefault(); // ការពារកុំឱ្យវា Jump ទៅភ្លាមៗ
  
  const booksHeading = document.querySelector('#books h2'); // ចាប់យកចំណងជើង "Published Works"
  const carouselSection = document.getElementById('bookCarousel');
  const portfolioSection = document.getElementById('portfolio-section');
  
  // លាក់ចំណងជើង និងស្លាយ Carousel សៀវភៅចោល
  if(booksHeading) booksHeading.style.display = 'none';
  carouselSection.style.display = 'none';
  
  // បង្ហាញផ្នែក Portfolio គម្រោងថ្មីមកជំនួសវិញ
  portfolioSection.style.display = 'block';
  
  // រុញ Screen ចុះមកក្រោមដោយទន់ភ្លន់ (Smooth Scroll) ទៅកាន់ផ្នែកគម្រោងថ្មី
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
});


// ២. មុខងារនៅពេលចុចប៊ូតុង "Back to Books" នៅលើផ្នែក Portfolio ឱ្យត្រឡប់មកវិញ
document.getElementById('back-to-books-btn').addEventListener('click', function(event) {
  event.preventDefault();
  
  const booksSection = document.getElementById('books'); // ចាប់យក Section ធំ
  const booksHeading = document.querySelector('#books h2'); // ចាប់យកចំណងជើង
  const carouselSection = document.getElementById('bookCarousel');
  const portfolioSection = document.getElementById('portfolio-section');

  // លាក់ផ្នែក Portfolio គម្រោងចោលវិញ
  portfolioSection.style.display = 'none';
  
  // បញ្ជាឱ្យបង្ហាញទាំង ចំណងជើង "Published Works" និងស្លាយ Carousel មកវិញឱ្យបានគ្រប់គ្រាន់
  if(booksHeading) booksHeading.style.display = 'block';
  carouselSection.style.display = 'block';
  
  // រុញ Screen ត្រឡប់ទៅខាងលើវិញដោយទន់ភ្លន់ ទៅកាន់ផ្នែកសៀវភៅដើម
  booksSection.scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", function () {
  // ១. ចាប់យកផ្ទាំង Row នៅក្នុង Portfolio Section ដែលមានស្រាប់
  const projectRow = document.querySelector("#portfolio-section .row");
  
  if (projectRow) {
    // ២. បង្កើត Element ថ្មីសម្រាប់កាតគម្រោង (Project Card)
    const newProjectCol = document.createElement("div");
    newProjectCol.className = "col";
    
    // ៣. បញ្ចូលរចនាសម្ព័ន្ធកូដ HTML របស់គម្រោងថ្មី
    newProjectCol.innerHTML = `
      <div class="card h-100 shadow-sm border-0 bg-white p-4 rounded-3 text-center">
        <div class="text-warning mb-3"><i class="bi bi-calendar-range fs-1"></i></div>
        <h3 class="fs-5 fw-bold text-dark">NTTI Class Scheduling</h3>
        <p class="text-muted small">ប្រព័ន្ធរៀបចំ និងគ្រប់គ្រងកាលវិភាគសិក្សាសម្រាប់គ្រូ និងនិស្សិតនៅក្នុងវិទ្យាស្ថាន NTTI ឱ្យមានភាពងាយស្រួល។</p>
        <div class="tech-badges mb-3 d-flex justify-content-center gap-2 flex-wrap">
          <span class="badge bg-light text-secondary border">PHP</span>
          <span class="badge bg-light text-secondary border">Bootstrap 5</span>
          <span class="badge bg-light text-secondary border">Laravel</span>
        </div>
        <a href="#" class="btn btn-outline-dark btn-sm rounded-pill mt-auto"><i class="bi bi-github"></i> View Code</a>
      </div>
    `;
    
    // ៤. រុញគម្រោងថ្មីនេះចូលទៅក្នុង Portfolio ដោយស្វ័យប្រវត្ត
    projectRow.appendChild(newProjectCol);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  
  // ១. ស្វែងរកប៊ូតុងដែលមានពាក្យថា "Echoes of Eden" នៅក្នុងទំព័រ Web របស់អ្នកដោយស្វ័យប្រវត្តិ
  let echoesBtn = null;
  const buttons = document.querySelectorAll("button, a");
  
  buttons.forEach(btn => {
    if (btn.textContent.trim() === "Echoes of Eden") {
      echoesBtn = btn;
    }
  });

  // ២. មុខងារពេលចុចប៊ូតុង Echoes of Eden ឱ្យលាក់ទំព័រចាស់ និងបង្ហាញទំព័រគម្រោងថ្មី
  if (echoesBtn) {
    echoesBtn.addEventListener("click", function (event) {
      event.preventDefault(); // បិទមុខងារចាស់ ឬការលោត alert
      
      const booksHeading = document.querySelector("#books h2") || document.querySelector(".books-section h2");
      const carouselSection = document.getElementById("bookCarousel") || document.querySelector(".carousel");
      const portfolioSection = document.getElementById("portfolio-section");
      const echoesProjectPage = document.getElementById("echoes-project-page");

      // លាក់ផ្នែកសៀវភៅចាស់ៗ និងចំណងជើងចោលទាំងអស់
      if (booksHeading) booksHeading.style.display = "none";
      if (carouselSection) carouselSection.style.display = "none";
      if (portfolioSection) portfolioSection.style.display = "none";
      
      // បើកបង្ហាញទំព័រគម្រោង Echoes of Eden ថ្មីមកជំនួសវិញ
      if (echoesProjectPage) {
        echoesProjectPage.style.display = "block";
        echoesProjectPage.scrollIntoView({ behavior: "smooth" }); // រុញអេក្រង់មកឱ្យចំ
      }
    });
  }

  // ៣. មុខងារពេលចុចប៊ូតុង "Back to Main Store" ឱ្យលាក់ទំព័រគម្រោង ហើយបង្ហាញទំព័រដើមមកវិញ
  const backFromEchoesBtn = document.getElementById("back-from-echoes-btn");
  if (backFromEchoesBtn) {
    backFromEchoesBtn.addEventListener("click", function (event) {
      event.preventDefault();
      
      const booksHeading = document.querySelector("#books h2") || document.querySelector(".books-section h2");
      const carouselSection = document.getElementById("bookCarousel") || document.querySelector(".carousel");
      const echoesProjectPage = document.getElementById("echoes-project-page");

      // លាក់ទំព័រគម្រោងចោលវិញ
      if (echoesProjectPage) echoesProjectPage.style.display = "none";
      
      // បើកបង្ហាញចំណងជើង "Published Works" និងស្លាយសៀវភៅចាស់មកវិញទាំងអស់
      if (booksHeading) booksHeading.style.display = "block";
      if (carouselSection) carouselSection.style.display = "block";
      
      // រុញអេក្រង់ត្រឡប់ទៅខាងលើវិញដោយទន់ភ្លន់
      if (carouselSection) {
        carouselSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// === កូដថ្មីបង្ខំឱ្យលោតផ្ទាំងគម្រោងថ្មីចេញមកច្បាស់លាស់ ១០០% ===

function openEchoesProject() {
  // ១. ចាប់យកផ្នែកសៀវភៅ និងស្លាយចាស់ដើម្បីលាក់
  const booksHeading = document.querySelector("#books h2") || document.querySelector(".books-section h2");
  const carouselSection = document.getElementById("bookCarousel") || document.querySelector(".carousel");
  const portfolioSection = document.getElementById("portfolio-section");

  // លាក់ផ្នែកសៀវភៅចោលទាំងអស់
  if (booksHeading) booksHeading.style.display = "none";
  if (carouselSection) carouselSection.style.display = "none";
  if (portfolioSection) portfolioSection.style.display = "none";

  // ២. ពិនិត្យមើលផ្ទាំងគម្រោង បើមិនទាន់មានក្នុង Body ទេ ឱ្យ JavaScript បង្កើតវាភ្លាម
  let echoesProjectPage = document.getElementById("echoes-project-page");
  
  if (!echoesProjectPage) {
    echoesProjectPage = document.createElement("section");
    echoesProjectPage.id = "echoes-project-page";
    echoesProjectPage.className = "container py-5 mt-4";
    
    // បញ្ចូលកូដ HTML សម្រាប់ផ្ទាំងគម្រោងថ្មី
    echoesProjectPage.innerHTML = `
      <div class="bg-white p-5 rounded-4 text-center mx-auto border shadow" style="max-width: 800px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;">
        <div class="text-warning mb-3"><i class="bi bi-book-half fs-1"></i></div>
        <h2 class="fw-bold text-dark mb-3">Echoes of Eden - Interactive Novel Project</h2>
        <p class="text-muted">នេះជាទំព័រគម្រោងថ្មីស្រឡាង ដែលបង្ហាញពីព័ត៌មានលម្អិតនៃប្រព័ន្ធគ្រប់គ្រង និងអានសៀវភៅបែបឌីជីថល (Digital Reading Platform)។</p>
        
        <div class="row text-start g-4 my-4 justify-content-center">
          <div class="col-md-5 bg-light p-3 rounded-3 mx-2">
            <h5 class="fw-bold text-dark"><i class="bi bi-star-fill text-warning"></i> មុខងារប្រព័ន្ធ (Features)</h5>
            <ul class="small text-muted ps-3">
              <li>Audiobook Streaming Integration</li>
              <li>Bookmark & Highlight Text</li>
              <li>Dark Mode for Night Readers</li>
            </ul>
          </div>
          <div class="col-md-5 bg-light p-3 rounded-3 mx-2">
            <h5 class="fw-bold text-dark"><i class="bi bi-cpu-fill text-primary"></i> បច្ចេកវិទ្យាប្រើប្រាស់</h5>
            <ul class="small text-muted ps-3">
              <li>HTML5 / CSS3 / Bootstrap 5</li>
              <li>JavaScript (ES6+)</li>
              <li>Local Storage API</li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-4">
          <button class="btn btn-secondary btn-sm rounded-pill px-4 py-2 fw-bold shadow-sm" onclick="backToMainStore()">
            <i class="bi bi-arrow-left-circle-fill"></i> Back to Main Store
          </button>
        </div>
      </div>
    `;
    
    // ញាត់វាចូលទៅក្នុង Body ខាងក្រៅបង្អស់ ដើម្បីកុំឱ្យវាត្រូវលាក់ទៅតាម Section ផ្សេងទៀត
    document.body.appendChild(echoesProjectPage);
  }

  // ៣. បង្ហាញផ្ទាំងគម្រោងថ្មីចេញមក និងរុញអេក្រង់មកឱ្យចំ
  echoesProjectPage.style.display = "block";
  
  // បន្ថែមល្បឿនពន្យារបន្តិចដើម្បីឱ្យប្រព័ន្ធដំណើរការរលូន
  setTimeout(function() {
    echoesProjectPage.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}




//វត្តមាន
document.addEventListener("DOMContentLoaded", function () {
  const weekInput = document.getElementById("excel-week");
  const weekBadge = document.getElementById("week-badge");
  const attendanceForm = document.querySelector("#attendance-excel-section form");

  // ១. បង្កើតប្រព័ន្ធគ្រប់គ្រងសប្តាហ៍ និងរាប់ចំនួនសិស្ស (៥០នាក់ម្នាក់)
  let currentWeek = localStorage.getItem("current_week_status") || "សប្តាហ៍ទី១";
  let studentCount = parseInt(localStorage.getItem(currentWeek + "_count")) || 0;

  // ២. បើគ្រប់ ៥០នាក់ ឱ្យផ្លាស់ប្តូរចូលសប្តាហ៍ថ្មីស្វ័យប្រវត្ត និងលោតសញ្ញាប្រាប់
  if (studentCount >= 50) {
    if (currentWeek === "សប្តាហ៍ទី១") {
      currentWeek = "សប្តាហ៍ទី២";
    } else if (currentWeek === "សប្តាហ៍ទី២") {
      currentWeek = "សប្តាហ៍ទី៣";
    } else if (currentWeek === "សប្តាហ៍ទី៣") {
      currentWeek = "សប្តាហ៍ទី៤";
    }
    
    // រក្សាទុកសប្តាហ៍ថ្មី និងកំណត់ចំនួនសិស្សសប្តាហ៍ថ្មីស្មើ ០ វិញ
    localStorage.setItem("current_week_status", currentWeek);
    studentCount = parseInt(localStorage.getItem(currentWeek + "_count")) || 0;
    
    // លោតសញ្ញាសម្គាល់ជាផ្ទាំងសារ (Alert) ប្រាប់ឱ្យអ្នកប្រើប្រាស់ដឹង
    alert("📢 សម្គាល់៖ សប្តាហ៍មុនពេញ ៥០នាក់ហើយ! ឥឡូវនេះបានចូលដល់ " + currentWeek + " សម្រាប់ការចុះវត្តមានថ្មី។");
  }

  

  // ៤. ព្រឹត្តិការណ៍នៅពេលចុច Submit ជោគជ័យ ឱ្យបូកចំនួនសិស្សថែម ១ នាក់ភ្លាម
  if (attendanceForm) {
    attendanceForm.addEventListener("submit", function () {
      let currentCount = parseInt(localStorage.getItem(currentWeek + "_count")) || 0;
      localStorage.setItem(currentWeek + "_count", currentCount + 1);
    });
  }
});

