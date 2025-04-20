document.addEventListener("DOMContentLoaded", () => {
  // Remove hover effect on the entire project card
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((projectCard) => {
    projectCard.style.transition = "transform 0.3s ease-in-out"; // เพิ่ม transition แบบเบื้องต้น
  });

  // Menu Toggle for Mobile Navbar
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    });
  }
  
  // Focus hover effect only on "View Project" link
  const viewProjectLinks = document.querySelectorAll(".view-project");
  viewProjectLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.15)";
      link.style.transition = "transform 0.3s ease-in-out"; // เพิ่มเวลาและ smooth effect
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });

  // Smooth Scroll for Navbar Links
  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  } else {
    console.error("Contact form not found in DOM");
  }

  // Typing Effect (เพิ่มส่วนนี้เข้าไป)
  const typingElement = document.getElementById("typing");
  const text = "Welcome to My Portfolio!";
  let index = 0;

  const typeText = () => {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeText, 100);
    }
  };

  typeText();
  
  // hidden
  const sections = document.querySelectorAll(".hidden"); // เลือกทุก element ที่มีคลาส 'hidden'

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // เพิ่มคลาส 'show' เมื่อ element อยู่ใน viewport
          observer.unobserve(entry.target); // หยุดสังเกต element หลังจากแสดงผลแล้ว
        }
      });
    },
    {
      threshold: 0.15, // เริ่มแสดงเมื่อ 10% ของ element ปรากฏ
    }
  );

  sections.forEach((section) => {
    observer.observe(section); // เริ่มสังเกตทุก element
  });

});

window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});