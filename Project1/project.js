fetch('https://fakestoreapi.com/products?limit=2')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-container');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
