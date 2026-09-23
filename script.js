// menu hamburger 
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const themeBtn = document.getElementById('themeBtn');
menuBtn.addEventListener('click', () => {
   nav.classList.toggle('open');
   menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰'
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
   nav.classList.remove('open');
   menuBtn.textContent = '☰'
}));
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').style.opacity = '0', 800));
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').remove(), 1000));


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
   
   event.preventDefault();
   
   const name =
      document.getElementById("name").value;
   
   const email =
      document.getElementById("email").value;
   
   const subject =
      document.getElementById("subject").value;
   
   const message =
      document.getElementById("message").value;
   
   
   /*
     Hindura iyi email uyishiremwo
     email yawe nyayo.
   */
   
   const myEmail = "bendassler4.com";
   
   
   const body =
      `Name: ${name}

Email: ${email}

Message:

${message}`;
   
   
   const mailto =
      `mailto:${myEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
   
   window.location.href = mailto;
   
});