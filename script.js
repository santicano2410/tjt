const products = [
  {
    id: 1,
    name: 'Torta Chipre 100 tiros',
    category: 'tortas',
   
    badge: 'Oferta',
    img: '0836edda-6bdb-486a-b51f-f3ae84606a99.jpg',
    video: 'chipre.mp4',
    features: [, 'Colores intensos', 'Efecto alto', 'Impacto garantizado'],
  },
  {
    id: 2,
    name: 'Torta 15 tiros',
    category: 'tortas',
    desc: 'Explosión multicolor con destellos brillantes y largo alcance.',
    badge: 'Nuevo',
    img: '10aea890-2f6b-44dc-a343-e3246188cd38.jpg',
    video: 'torta-2.mp4',
    features: ['Efecto multicolor', 'Subida intensa', 'Duración 20s', 'Perfecta para ciudades'],
  },
  {
    id: 3,
    name: 'Torta Mix 64 tiros',
    category: 'tortas',
    desc: 'Brillos plateados y chorros de luz en cada disparo.',
    badge: 'Top',
    img: '14fcbce1-eef1-4368-ae38-87ed704a3b9a.jpg',
    video: 'mix.mp4',
    features: ['Brillo plateado', 'Efecto chispeante', 'Diseño premium', 'Cierre espectacular'],
  },
  {
    id: 4,
    name: 'Torta Roma 100 tiros',
    category: 'tortas',
    desc: 'Explosiones cálidas con tonos rojizos y fogonazos intensos.',
    badge: 'Popular',
    img: '1bd672a1-384b-455c-a07f-6ba2d482c993.jpg',
    video: 'torta-4.mp4',
    features: ['Rojo intenso', '100 tiros', 'Alta visibilidad', 'Duración ideal'],
  },
  {
    id: 5,
    name: 'Torta Gomela 100 tiros',
    category: 'tortas',
    desc: 'Destellos fríos y plateados que llenan el cielo de magia.',
    badge: 'Oferta',
    img: '1fe638be-e73a-4387-88c8-e918f83fe926.jpg',
    video: 'gomela.mp4',
    features: ['Luz plateada', 'Efecto suave', 'Ideal para noche', 'Baja ceniza'],
  },
  {
    id: 6,
    name: 'Torta Festival 70 tiros',
    category: 'tortas',
    desc: 'Fuegos artificiales con tonos azules y violeta, efecto cósmico.',
    badge: 'Premium',
    img: '3a4039e1-f9c3-4aeb-bd26-a432de4f4eda.jpg',
    video: 'torta-6.mp4',
    features: ['Azul y violeta', 'Efecto espacial', 'Perfecta para eventos', 'Acabado elegante'],
  },
  {
    id: 7,
    name: 'Torta Feliz año 100 tiros',
    category: 'tortas',
    desc: 'Una mezcla completa de colores brillantes en cada disparo.',
    badge: 'Nuevo',
    img: '44a47cf7-01d1-4d67-9d68-0f4156d4e906.jpg',
    video: 'feliz ano.mp4',
    features: ['Colores vivos', 'Fuegos múltiples', 'Atractivo visual', 'Gran impacto'],
  },
  {
    id: 8,
    name: 'Torta 16 tiros',
    category: 'tortas',
    desc: 'Destellos dorados y amarillos con impacto radiante.',
    badge: 'Top',
    img: '4711a58b-71ed-44ea-9eab-1eaf811be923.jpg',
    video: 'atila.mp4',
    features: ['Amarillo solar', 'Destellos dorados', 'Largo alcance', 'Intensidad alta'],
  },
  {
    id: 9,
    name: 'Torta Glacial 100 tiros',
    category: 'tortas',
    desc: 'Perfecta para la noche, con efectos claros y muy visibles.',
    badge: 'Oferta',
    img: '51e80ef6-55af-44be-b850-3430c37422af.jpg',
    video: 'glacial.mp4',
    features: ['Noche clara', 'Destellos intensos', '100 tiros', 'Gran duración'],
  },
  {
    id: 10,
    name: 'Torta 19 tiros',
    category: 'tortas',
    desc: 'Efectos altos con explosiones sincronizadas y colores brillantes.',
    badge: 'Especial',
    img: '56deeb9d-b3ac-46d1-95bd-8dbf7336b3ca.jpg',
    video: 'torta-10.mp4',
    features: ['19 tiros', 'Colores vivos', 'Alto impacto', 'Perfecta para shows'],
  },
  {
    id: 11,
    name: 'Torta Machupicchu 49 tiros',
    category: 'tortas',
    desc: 'Efectos suaves y brillantes para un cierre memorable.',
    badge: 'Nuevo',
    img: '5de6687a-4a8d-4d05-8d0a-aa05c0fc988c.jpg',
    video: 'machupicchu.mp4',
    features: ['Suave y brillante', 'Ambiente mágico', 'Fácil encendido', 'Presentación elegante'],
  },
  {
    id: 12,
    name: 'Torta Tipo plaza 100 tiros',
    category: 'tortas',
    desc: 'Destellos intensos con chispas doradas y plateadas.',
    badge: 'Top',
    img: '6735f0db-ca89-452e-8bce-5aacda02ad72.jpg',
    video: 'tipo plaza.mp4',
    features: ['Chispas doradas', 'Luz intensa', 'Duración constante', 'Impacto visual'],
  },
  {
    id: 13,
    name: 'Torta dalia 100 tiros',
    category: 'tortas',
    desc: 'Variedad de efectos y colores que sorprenden a todos.',
    badge: 'Oferta',
    img: '6dcfbb50-7fce-4ac8-9e19-1d08d93be1ec.jpg',
    video: 'dalia.mp4',
    features: ['Variedad de efectos', 'Colores mixtos', '100 tiros', 'Resultados excelentes'],
  },
  {
    id: 14,
    name: 'Torta Salvaje 49 tiros',
    category: 'tortas',
    desc: 'Potente combinación de explosiones y efectos de gran altura.',
    badge: 'Premium',
    img: '77bc9ceb-aa61-428f-af8a-fbdb8a0b4c89.jpg',
    video: 'torta-14.mp4',
    features: ['49 tiros', 'Explosiones potentes', 'Duración larga', 'Diseño espectacular'],
  },
  {
    id: 15,
    name: 'Torta Cantaleta 600 tiros',
    category: 'tortas',
    desc: 'Elegante combinación de dorados y destellos premium.',
    badge: 'Top',
    img: '87db1142-e705-4274-afdd-4e1fd1864126.jpg',
    video: 'cantaleta.mp4',
    features: ['Efecto dorado', 'Premium', 'Presentación elegante', '200 tiros'],
  },
  {
    id: 16,
    name: 'Torta Remolinos multicolores 37 tiros',
    category: 'tortas',
    desc: 'Combo premium para un espectáculo inolvidable.',
    badge: 'Oferta',
    img: '8ef44cd7-a60c-42f8-931a-02c54fac12a5.jpg',
    video: 'torta-16.mp4',
    features: ['37 tiros', 'Efecto completo', 'Para grandes eventos', 'Impacto total'],
  },
  {
    id: 17,
    name: 'Torta 49 tiros',
    category: 'tortas',
    desc: 'Secuencia rápida con colores intensos y ritmo dinámico.',
    badge: 'Especial',
    img: '8f479718-2d13-4742-8c4f-b03ac292f127.jpg',
    video: 'peru.mp4',
    features: ['49 tiros', 'Colores intensos', 'Secuencia rápida', 'Gran energía'],
  },
  {
    id: 18,
    name: 'Torta Chiripa 164 tiros',
    category: 'tortas',
    desc: 'Efectos luminosos con tonos claros y brillantes.',
    badge: 'Nuevo',
    img: 'a283ff23-5917-4574-b15c-7e87b75d6d07.jpg',
    video: 'chiripa.mp4',
    features: ['Luz brillante', 'Tonos claros', 'Efecto elegante', '164 tiros'],
  },
  {
    id: 19,
    name: 'Torta Show miami 120 tiros',
    category: 'tortas',
    desc: 'Una aparición de colores y luz que simula un sueño.',
    badge: 'Top',
    img: 'a77702c1-68c9-4fac-879b-543bc718556d.jpg',
    video: 'show miami.mp4',
    features: ['120 tiros', 'Ambiente mágico', 'Final brillante', 'Perfecta para fotos'],
  },
  {
    id: 20,
    name: 'Torta Moscu 64 tiros',
    category: 'tortas',
    desc: 'Destellos en forma de estrella con luces brillantes.',
    badge: 'Oferta',
    img: 'aa23c281-5129-4096-9db2-b3217fc1876a.jpg',
    video: 'moscu.mp4',
    features: ['64 tiros', 'Luz intensa', 'Gran visibilidad', 'Impacto visual'],
  },
  {
    id: 21,
    name: 'Torta Bulliciosa 49 tiros',
    category: 'tortas',
    desc: 'Efectos misteriosos con tonos violetas y magia visual.',
    badge: 'Premium',
    img: 'b256a449-02ff-4128-b8e2-83bfbdaf56f4.jpg',
    video: 'bulliciosa.mp4',
    features: ['49 tiros', 'Efecto místico', 'Sensación mágica', 'Alta duración'],
  },
  {
    id: 22,
    name: 'Torta 104 tiros',
    category: 'tortas',
    desc: 'Efectos de gran tamaño con colores reales y potentes.',
    badge: 'Top',
    img: 'bdd78adf-6608-4cfe-910a-7de9b0824f9e.jpg',
    video: 'torta-22.mp4',
    features: ['164 tiros', 'Colores reales', 'Potente', 'Espectáculo total'],
  },
  {
    id: 23,
    name: 'Torta Cocodrilo 50 tiros',
    category: 'tortas',
    desc: 'Fuegos rojizos muy potentes con subida rápida.',
    badge: 'Nuevo',
    img: 'bf7d58b6-d956-4b98-8ad4-adec2d8c94fe.jpg',
    video: 'cocodrilo.mp4',
    features: ['Rojo ígneo', 'Subida rápida', 'Efecto intenso', 'Para eventos grandes'],
  },
  {
    id: 24,
    name: 'Torta 30 tiros',
    category: 'tortas',
    desc: 'Resplandores de colores en forma prismática y elegante.',
    badge: 'Especial',
    img: 'cf0a42f1-4062-434e-8cd1-4fd4081f4e41.jpg',
    video: 'tierra.mp4',
    features: ['30 tiros', 'Efecto elegante', 'Visibilidad amplia', 'Final brillante'],
  },
  {
    id: 25,
    name: 'Torta 19 tiros variados',
    category: 'tortas',
    desc: 'Tonos violetas y destellos plateados en cada disparo.',
    badge: 'Oferta',
    img: 'd8aba32e-f89d-4bb6-886a-44fb0a8fe721.jpg',
    video: 'torta-25.mp4',
    features: ['19 tiros', 'Destellos plateados', 'Largo alcance', 'Efecto elegante'],
  },
  {
    id: 26,
    name: 'Torta 42 tiros',
    category: 'tortas',
    desc: 'Explosiones con tonalidades rojas profundas y brillo cálido.',
    badge: 'Premium',
    img: 'da36267a-ea03-4a67-88d6-c27287c8ca37.jpg',
    video: 'bali.mp4',
    features: ['42 tiros', 'Brillo cálido', 'Tono rico', 'Duración estable'],
  },
  {
    id: 27,
    name: 'Torta 200 tiros',
    category: 'tortas',
    desc: 'Colores azules intensos con luz fría y elegante.',
    badge: 'Top',
    img: 'e1f4c626-6215-4ff2-94ac-d60ddb004693.jpg',
    video: 'torta 200 tiros.mp4',
    features: ['200 tiros', 'Luz fría', 'Diseño elegante', 'Alto impacto visual'],
  },
  {
    id: 28,
    name: 'Torta Revoltosa 100 tiros',
    category: 'tortas',
    desc: 'Colores festivos y mezcla de efectos para el mejor ambiente.',
    badge: 'Nuevo',
    img: 'e2d860cf-4453-4d47-a997-3c2757da7dfa.jpg',
    video: 'revoltosa.mp4',
    features: ['100 tiros', 'Mezcla de efectos', 'Buen ritmo', 'Ambiente alegre'],
  },
  {
    id: 29,
    name: 'Torta Parcera 100 tiros',
    category: 'tortas',
    desc: 'Efectos potentes para público exigente y eventos grandes.',
    badge: 'Especial',
    img: 'e8c079b3-c4e7-4cef-bc73-6b228787dcca.jpg',
    video: 'parcera.mp4',
    features: ['100 tiros', 'Para grandes eventos', 'Alto impacto', 'Duración larga'],
  },
  {
    id: 30,
    name: 'Torta Rumba 16 tiros',
    category: 'tortas',
    desc: 'Destellos perlados y colores suaves que resaltan con elegancia.',
    badge: 'Oferta',
    img: 'ebeeb17e-06b9-44d9-a370-f159e68a669d.jpg',
    video: 'rumba.mp4',
    features: ['16 tiros', 'Suave y elegante', 'Buena duración', 'Bajo humo'],
  },
  {
    id: 31,
    name: 'Torta 36 tiros',
    category: 'tortas',
    desc: 'Efectos misteriosos que llenan el cielo con luz suave.',
    badge: 'Nuevo',
    img: 'ee9f6ed2-85f8-4363-ba82-1886353f1da5.jpg',
    video: 'bacana.mp4',
    features: ['36 tiros', 'Ambiente misterioso', 'Efecto limpio', 'Perfecta para cierre'],
  },
  {
    id: 32,
    name: 'volcanes grandes',
    category: 'tortas',
    desc: 'Colores prismáticos y formas geométricas en cada disparo.',
    badge: 'Premium',
    img: 'ef5821a1-056d-40cf-9c27-5af985ae9c1f.jpg',
    video: 'torta-32.mp4',
    features: ['Colores prismáticos', 'Formas geométricas', 'Efecto innovador', 'Gran cierre'],
  },
  {
    id: 33,
    name: 'Tortas 19 tiros',
    category: 'tortas',
    desc: 'Olas de luz con tonos verdes y azules que fluyen en el cielo.',
    badge: 'Top',
    img: 'efff85d8-b80c-4eb4-a04c-ff6d32e4cc23.jpg',
    video: 'morado oro en el cielo.mp4',
    features: ['19 tiros', 'Flujo de luz', 'Efecto oceánico', 'Visibilidad alta'],
  },
  {
    id: 34,
    name: 'Torta Caribeña 100 tiros',
    category: 'tortas',
    desc: 'Efectos suaves y etéreos con un acabado único.',
    badge: 'Oferta',
    img: 'faa13c8d-0230-4476-9d28-1b9427daea3e.jpg',
    video: 'caribena.mp4',
    features: ['Efecto etéreo', '100 tiros', 'Acabado único', 'Baja ceniza'],
  },
  {
    id: 35,
    name: 'Torta Orion 19 tiros',
    category: 'tortas',
    desc: 'La mejor torta para cerrar cualquier evento con broche de oro.',
    badge: 'Especial',
    img: 'fb02f53b-f34b-462c-b189-1495938fa62a.jpg',
    video: 'orion.mp4',
    features: ['19 tiros', 'Combinación de efectos', 'Colores vibrantes', 'Impacto asegurado'],
  },
];

let cart = {};
let currentCategory = 'tortas';
let activeSort = 'default';

const productsGrid = document.getElementById('productsGrid');
const productCount = document.getElementById('productCount');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartOverlay = document.getElementById('cartOverlay');
const cartPanel = document.getElementById('cartPanel');
const mobileMenu = document.getElementById('mobileMenu');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');

function formatCurrency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', minimumFractionDigits: 0,
  }).format(value);
}

function setActiveCategoryButton(category) {
  document.querySelectorAll('.cat-card').forEach((button) => {
    button.classList.toggle('active', button.textContent.trim().toLowerCase().includes(category === 'all' ? 'todo' : category));
  });
  document.querySelectorAll('.sidebar-list button').forEach((button) => {
    button.classList.toggle('active', button.textContent.trim().toLowerCase().includes(category === 'all' ? 'todo' : category));
  });
}

function productHasNoVideo(product) {
  const noVideoNames = [
    'parcera',
    'revoltosa',
    'dalia',
    'tipo plaza',
    'glacial',
    'feliz año',
    'feliz ano',
    'gomela',
    'chipre',
    'torta 15 tiros',
    'torta remolinos multicolores',
    'torta festival 70 tiros',
    'torta roma 100 tiros',
    'torta 104 tiros',
    'volcanes grandes',
    'chiripa 164 tiros',
  ];
  const nameLower = product.name.toLowerCase();
  if (noVideoNames.some((term) => nameLower.includes(term))) return true;

  const match = product.name.match(/(\d+)\s*tiros/i);
  if (!match) return false;
  const tiros = Number(match[1]);
  return [16, 19, 30, 36, 42, 49, 50, 64].includes(tiros);
}

function getTiros(product) {
  const nameMatch = product.name.match(/(\d+)\s*tiros/i);
  if (nameMatch) return Number(nameMatch[1]);
  const featureMatch = product.features?.find((feature) => feature && /(\d+)\s*tiros/i.test(feature));
  if (featureMatch) return Number(featureMatch.match(/(\d+)\s*tiros/i)[1]);
  return Number.MAX_SAFE_INTEGER;
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  return products
    .filter((product) => {
      const matchesCategory = product.category === currentCategory;
      const matchesText = product.name.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesText;
    })
    .sort((a,b) => {
      if (activeSort === 'name') return a.name.localeCompare(b.name);
      return getTiros(a) - getTiros(b);
    });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productsGrid.innerHTML = '';
  productCount.textContent = `Mostrando ${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  if (!filtered.length) {
    productsGrid.innerHTML = `
      <div class="no-results">
        <span>😕</span>
        <p>No encontramos productos con ese filtro.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-badge">${product.badge}</div>
      <div class="product-media" onclick="openModal(${product.id})">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        ${productHasNoVideo(product) ? `
        <div class="no-video-animation">
          <span></span><span></span><span></span><span></span>
        </div>
        ` : `
        <video muted loop playsinline preload="metadata">
          <source src="${product.video}" type="video/mp4">
        </video>
        `}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-footer">
          <button class="btn-add" onclick="event.stopPropagation(); addToCart(${product.id});">AGREGAR</button>
        </div>
      </div>
    `;
    // reproducir video al pasar el cursor y pausar al salir
    const videoEl = card.querySelector('video');
    if (videoEl) {
      card.addEventListener('mouseenter', () => {
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        videoEl.pause();
        videoEl.currentTime = 0;
      });
    }

    card.addEventListener('click', () => openModal(product.id));
    productsGrid.appendChild(card);
  });
}

function filterProducts(category) {
  currentCategory = category;
  activeSort = 'default';
  document.querySelector('select').value = 'default';
  setActiveCategoryButton(category);
  renderProducts();
  if (mobileMenu.classList.contains('open')) toggleMenu();
}

function searchProducts() {
  renderProducts();
}

function sortProducts(value) {
  activeSort = value;
  renderProducts();
}

function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

function toggleCart() {
  const isOpen = cartPanel.classList.toggle('open');
  cartOverlay.classList.toggle('open', isOpen);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
}

function updateCart() {
  const items = Object.keys(cart);

  cartCount.textContent = items.length;
  cartFooter.style.display = items.length ? 'block' : 'none';

  if (!items.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2h12l1.5 6H4.5L6 2z"/>
            <path d="M7 8h10l-1.5 10H8.5L7 8z"/>
            <circle cx="9" cy="20" r="1.5"/>
            <circle cx="15" cy="20" r="1.5"/>
          </svg>
        </span>
        <p>Tu carrito está vacío</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = items.map((id) => {
    const product = products.find((item) => item.id === Number(id));
    const qty = cart[id];
    return `
      <div class="cart-item">
        <div class="cart-item-emoji">💥</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" onclick="changeQuantity(${id}, -1)">-</button>
            <div class="cart-qty">${qty}</div>
            <button class="cart-qty-btn" onclick="changeQuantity(${id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${id})">✕</button>
      </div>
    `;
  }).join('');
}

function changeQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  updateCart();
}

function removeFromCart(id) {
  delete cart[id];
  updateCart();
}

function openModal(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="modal-media">
        <div class="modal-img"><img src="${product.img}" alt="${product.name}" /></div>
        ${productHasNoVideo(product) ? `
        <div class="modal-no-video">
          <span></span><span></span><span></span>
        </div>
        ` : `
        <div class="modal-video">
          <video controls muted loop playsinline>
            <source src="${product.video}" type="video/mp4">
          </video>
        </div>
        `}
      </div>
      <div class="modal-info">
        <h2 class="modal-name">${product.name}</h2>
        <div class="modal-actions">
          <button class="modal-add-btn" onclick="addToCart(${product.id}); closeModal();">AGREGAR AL CARRITO</button>
        </div>
      </div>
    </div>
  `;
  productModal.classList.add('open');
  modalOverlay.classList.add('open');
}

function closeModal() {
  productModal.classList.remove('open');
  modalOverlay.classList.remove('open');
}

function sendToWhatsApp() {
  const items = Object.keys(cart);
  if (!items.length) {
    alert('Agrega al menos un producto al carrito antes de pedir por WhatsApp.');
    return;
  }

  const note = document.getElementById('cartNote').value.trim();
  const lines = items.map((id) => {
    const product = products.find((item) => item.id === Number(id));
    return `${cart[id]} x ${product.name}`;
  });
  const message = `Hola! Quiero hacer un pedido:\n\n${lines.join('\n')}${note ? `\n\nNotas: ${note}` : ''}`;
  const phone = '573003330035';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function generateParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 18; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = 6 + Math.random() * 14;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.background = `rgba(255,214,0,${0.2 + Math.random() * 0.6})`;
    particle.style.animationDuration = `${8 + Math.random() * 10}s`;
    particle.style.animationDelay = `${-Math.random() * 10}s`;
    container.appendChild(particle);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveCategoryButton('tortas');
  renderProducts();
  updateCart();
  generateParticles();
});

