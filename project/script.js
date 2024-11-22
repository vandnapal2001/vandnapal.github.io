var typed = new Typed(".typing-text", {
    strings: ["Free Course...","Assessment...","Languages...","Project Idea...","Hackthon..."],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
const faqItems = document.querySelectorAll(".faq-item");
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      });