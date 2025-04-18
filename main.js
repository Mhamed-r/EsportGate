function updateCountdown() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");

    let d = parseInt(days.innerText);
    let h = parseInt(hours.innerText);
    let m = parseInt(minutes.innerText);

    m--;

    if (m < 0) {
      m = 59;
      h--;
    }

    if (h < 0) {
      h = 23;
      d--;
    }

    if (d < 0) {
      d = h = m = 0;
    }

    days.innerText = d < 10 ? "0" + d : d;
    hours.innerText = h < 10 ? "0" + h : h;
    minutes.innerText = m < 10 ? "0" + m : m;

    if (d === 0 && h === 0 && m === 0) {
      clearInterval(countdownInterval);
    }
  }

  const countdownInterval = setInterval(updateCountdown, 60000);

  // تأثيرات حركية عند التمرير
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".main-title, .countdown, .form-container, .social-icons"
    );

    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);

  // تحميل الصفحة بتأثير تدريجي
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    // في الموقع الفعلي، يمكن استبدال هذا بشعارك الحقيقي
    const logoPlaceholder = document.querySelector(".logo");
    if (logoPlaceholder) {
      logoPlaceholder.setAttribute("src", "Asset.png");
    }
  });

  // استخدام SweetAlert عند تقديم النموذج
  document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector(".form-input").value;

    if (email) {
      Swal.fire({
        title: "تم التسجيل بنجاح!",
        text: "تم إضافة 500 نقطة إلى حسابك ✨",
        icon: "success",
        confirmButtonText: "رائع!",
        background: "#121212",
        color: "#ffffff",
        iconColor: "#9932CC",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        document.querySelector(".form-input").value = "";
      });
    }
  });