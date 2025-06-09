document.getElementById('formulario').addEventListener('submit', async function (e) {
  e.preventDefault(); // Evita recargar la página

  const name = document.getElementById('name').value;
  const job = document.getElementById('job').value;

  try {
    const res = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: JSON.stringify({ name, job })
    });

    const data = await res.json();

    document.getElementById('resultado').innerHTML = `
      <p>Usuario creado:</p>
      <p>ID: ${data.id}</p>
      <p>Nombre: ${data.name}</p>
      <p>Trabajo: ${data.job}</p>
      <p>Creado en: ${data.createdAt}</p>
    `;

    console.log('Usuario creado:', data);
  } catch (error) {
    console.error('Error al registrar:', error);
    document.getElementById('resultado').innerText = 'Ocurrió un error al registrar el usuario.';
  }
});
