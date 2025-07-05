const formulario = document.getElementById('formulario-inscripcion');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();

  if (nombre === '' || apellido === '' || email === '' || telefono === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellido)) {
    alert('El nombre y apellido solo pueden contener letras y espacios');
    return;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('El correo electrónico no es válido');
    return;
  }

  if (!/^\d{3}-\d{3}-\d{4}$/.test(telefono)) {
    alert('El teléfono no es válido');
    return;
  }

  // Enviar el formulario
  console.log('Formulario enviado');
});
Validaciones

- El formulario verifica que todos los campos estén completos.
- Verifica que el nombre y apellido solo contengan letras y espacios.
- Verifica que el correo electrónico sea válido.
- Verifica que el teléfono sea válido (en formato XXX-XXX-XXXX).
