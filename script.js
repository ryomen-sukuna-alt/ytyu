fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const container = document.getElementById('cards-container');

        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                        <div class="avatar"></div>
                        <h2>${user.name}</h2>
                        <p><i>📧</i> ${user.email}</p>
                        <p><i>📞</i> ${user.phone}</p>
                        <p><i>🏠</i> ${user.address.city}, ${user.address.street}</p>
                    `;

            container.appendChild(card);
        });
    })
    