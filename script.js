function setLanguage(lang) {
  const elements = document.querySelectorAll('.lang');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.innerText = text;
    }
  });

  // Cambia el atributo lang del <html>
  document.documentElement.lang = lang;
}
