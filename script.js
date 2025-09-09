function setLanguage(lang) {
  const elements = document.querySelectorAll('.lang');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.innerText = text;
    }
  });

  document.documentElement.lang = lang;
}

function generarContenido() {
  const prompt = document.getElementById('prompt').value.trim();
  const output = document.getElementById('output');

  if (prompt === '') {
    output.innerText = "Por favor ingresa una idea para generar contenido.";
    return;
  }

  const ejemplos = [
    `Descripción generada para "${prompt}":\nUna plataforma intuitiva impulsada por IA que personaliza la experiencia del usuario en tiempo real.`,
    `Generador de contenido para "${prompt}":\nUn sistema que crea artículos automáticamente con SEO optimizado.`,
    `Solución IA para "${prompt}":\nAsistente virtual que responde preguntas, redacta correos y automatiza tareas del negocio.`,
    `App generada para "${prompt}":\nUna interfaz móvil conectada a modelos de lenguaje que ofrece respuestas naturales e instantáneas.`,
  ];

  const resultado = ejemplos[Math.floor(Math.random() * ejemplos.length)];
  output.innerText = resultado;
}
