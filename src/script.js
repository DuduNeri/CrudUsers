import fetch from 'node-fetch';

async function createUser(user) {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
}

async function run() {
  for (let i = 1; i <= 100; i++) {
    const user = {
      name: `User${i}`,
      email: `user${i}@example.com`,
      password: 'senha123',
      role: 'user',
    };

    try {
      const result = await createUser(user);
      console.log(`Usuário ${i} criado:`, result);
      await new Promise((r) => setTimeout(r, 100));
    } catch (error) {
      console.error(`Erro ao criar usuário ${i}:`, error);
    }
  }
}

run();
