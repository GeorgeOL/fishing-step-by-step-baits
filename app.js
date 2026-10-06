const whatsappNumber = '40767779461';

const products = [
  {
    id: '01', name: 'Nadă Cereale', label: 'NADĂ · CEREALE', size: '800 g', price: 19,
    description: 'Nadă pe bază de cereale, bogată în carbohidrați și cu aromă naturală, creată pentru crap și caras în sezonul cald. Granulația mixtă combină particule fine, care formează un nor atractiv, cu granule mai mari ce mențin peștii pe vad.',
    highlights: ['Sursă rapidă de energie pentru perioadele cu apă caldă.', 'Granulația lucrează pe substrat și eliberează treptat aromele fără să sature peștii.', 'Creează o zonă de hrănire activă, atractivă de la distanță.'],
    prep: ['Adaugă 150–170 ml apă și amestecă energic. Lasă 10 minute.', 'Adaugă încă 120 ml apă, amestecă și lasă din nou 10 minute.', 'Trece nada prin sită pentru a sparge bulgării și a obține o textură aerată.'],
    tip: 'Pe caniculă, înlocuiește o parte din apă cu aditivul lichid Pellet Strike.',
    // outOfStock: true, // Decomentează linia pentru a afișa „Stoc epuizat”.
    photos: ['nada-cereale.jpg', 'cereale-produs.jpg', 'cereale-nada-pe-masa.jpg'],
    alts: ['Nadă Pellet Strike Cereale, ambalaj de 800 g', 'Punga Pellet Strike Cereale fotografiată pe masă', 'Nadă Cereale Pellet Strike turnată pe masă lângă ambalaj'],
  },
  {
    id: '02', name: 'Nadă Fishmeal', label: 'NADĂ · FISHMEAL', size: '800 g', price: 22,
    description: 'Nadă premium pe bază de făină de pește, cu proteine și aminoacizi esențiali. Ingredientele ușor digestibile stimulează apetitul și susțin hrănirea pe vad. Granulația mixtă combină particule fine, care formează un nor de atracție, cu particule mai mari pentru substrat.',
    highlights: ['Aport consistent de proteine din făină de pește.', 'Ingrediente ușor digestibile pentru hrănire susținută.', 'Potrivită pe ape cu presiune mare și în partidele de primăvară, vară sau toamnă.'],
    prep: ['Adaugă 150–170 ml apă și amestecă energic. Lasă 10 minute.', 'Adaugă încă 120 ml apă, amestecă și lasă din nou 10 minute.', 'Trece nada prin sită pentru a sparge bulgării și a obține o desfacere uniformă pe substrat.'],
    tip: 'Pentru method feeder, combin-o în proporție de 50/50 cu pelete Pellet Strike de 2 mm.',
    outOfStock: true,
    photos: ['nada-fishmeal.jpg', 'fishmeal-produs.jpg', 'fishmeal-nada-pe-masa.jpg'],
    alts: ['Nadă Pellet Strike cu făină de pește, ambalaj de 800 g', 'Punga Pellet Strike Fishmeal fotografiată pe masă', 'Nadă Fishmeal Pellet Strike turnată pe masă lângă ambalaj'],
  },
  {
    id: '03', name: 'Pelete 2 mm', label: 'PELETE · 2 MM', size: '800 g', price: 24,
    description: 'Pelete de 2 mm cu aport ridicat de proteine, concepute pentru pescuitul crapului. După preparare, dezvoltă o mecanică excelentă pe substrat și eliberează treptat atractanții, ajutând la atragerea și menținerea peștilor pe vad.',
    highlights: ['Se combină cu nadele Pellet Strike Cereale sau Fishmeal.', 'Pot fi folosite simple, în method feeder sau în pungi PVA.', 'Mecanica preparată eliberează treptat atractanții pe substrat.'],
    prep: ['Acoperă complet peletele cu apă.', 'Lasă-le la înmuiat 2 minute.', 'Scurge apa în exces și lasă-le 10–15 minute la odihnit, până când umiditatea pătrunde uniform.'],
    tip: 'Regulă simplă: aproximativ 1 minut de înmuiere pentru fiecare milimetru de diametru.',
    // outOfStock: true, // Decomentează linia pentru a afișa „Stoc epuizat”.
    photos: ['pelete-2mm.jpg', 'pelete-produs.jpg', 'pelete-pelete-pe-masa.jpg'],
    alts: ['Pelete Pellet Strike de 2 mm în ambalaj de 800 g', 'Punga Pellet Strike Pelete 2 mm fotografiată pe masă', 'Pelete de 2 mm Pellet Strike turnate pe masă lângă ambalaj'],
  },
  {
    id: '04', name: 'Aditiv lichid', label: 'ADITIV · ATRACTANT', size: '250 ml', price: 32,
    description: 'Aditiv lichid cu aromă dulce intensă, conceput pentru a amplifica atractivitatea nadelor și peletelor la feeder și crap. Se dispersează în apă și pătrunde în amestec, formând o zonă de hrănire atractivă pe substrat.',
    highlights: ['Atractanți declarați ca naturali și aromă dulce persistentă.', 'Solubil și potrivit pentru nade sau pelete.', 'Util în sezonul cald și în apa rece, când peștii sunt apatici.'],
    prep: ['Dozaj recomandat: 60 ml la 800 g de nadă uscată sau pelete de 2 mm.', 'Dizolvă aditivul în apa pentru umectare sau înmuiere.', 'Amestecă bine lichidul în apă înainte să îl torni peste nadă.'],
    tip: 'Pentru pelete, pune aditivul în apa de înmuiere, apoi lasă peletele la hidratat 2 minute.',
    // outOfStock: true, // Decomentează linia pentru a afișa „Stoc epuizat”.
    photos: ['aditiv.jpg', 'aditiv-produs.jpg'],
    alts: ['Aditiv Pellet Strike în recipient de 250 ml', 'Recipientul cu aditiv Pellet Strike fotografiat pe masă'],
  },
];

const grid = document.querySelector('#product-grid');
const searchInput = document.querySelector('#product-search');
const emptyState = document.querySelector('#empty-state');
const cartItems = document.querySelector('#cart-items');
const cartCount = document.querySelector('#cart-count');
const cartTotal = document.querySelector('#cart-total');
const cartCheckout = document.querySelector('#cart-checkout');
const cartClear = document.querySelector('#cart-clear');
const dialog = document.querySelector('#product-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogIndex = document.querySelector('#dialog-index');
const dialogCopy = document.querySelector('#dialog-copy');
const dialogImage = document.querySelector('#dialog-image');
const dialogSize = document.querySelector('#dialog-size');
const dialogPrice = document.querySelector('#dialog-price');
const dialogOrder = document.querySelector('#dialog-order');
const dialogGallery = document.querySelector('#dialog-gallery');
const dialogHighlights = document.querySelector('#dialog-highlights');
const dialogPrep = document.querySelector('#dialog-prep');
const dialogTip = document.querySelector('#dialog-tip');
const closeDialogButton = document.querySelector('#dialog-close');
const cart = new Map();
let lastFocusedElement = null;
let activeDialogProductId = null;

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderProducts(query = '') {
  const normalizedQuery = query.trim().toLocaleLowerCase('ro');
  const visibleProducts = products.filter((product) =>
    `${product.name} ${product.label} ${product.description} ${product.highlights.join(' ')} ${product.prep.join(' ')}`.toLocaleLowerCase('ro').includes(normalizedQuery),
  );

  grid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="card-top"><span>${product.label}</span><span class="card-index">${product.id}</span></div>
      <div class="product-photo-frame${product.outOfStock ? ' is-out-of-stock' : ''}"><img class="product-photo" src="./public/products/${product.photos[0]}" alt="${product.alts[0]}" loading="lazy" decoding="async" />${product.outOfStock ? '<span class="stock-badge">STOC EPUIZAT</span>' : ''}</div>
      <div class="card-copy">
        <p class="card-kicker">PELLET STRIKE</p>
        <h3>${product.name}</h3>
        <p class="card-description">${product.description}</p>
      </div>
      <div class="card-specs"><span>${product.size}</span><strong>${product.price} lei</strong></div>
      <div class="card-bottom">
        <span class="card-tag">PELLET STRIKE</span>
        <div class="card-actions">
          <button class="detail-button" type="button" data-action="details" data-product="${product.id}">Detalii <span aria-hidden="true">↗</span></button>
          <button class="add-cart-button" type="button" data-action="add" data-product="${product.id}"${product.outOfStock ? ' disabled' : ''}>${product.outOfStock ? 'Stoc epuizat' : 'Adaugă în coș'}${product.outOfStock ? '' : ' <span aria-hidden="true">＋</span>'}</button>
        </div>
      </div>
    </article>
  `).join('');

  emptyState.hidden = visibleProducts.length > 0;
  grid.hidden = visibleProducts.length === 0;
}

function renderCart() {
  const entries = [...cart.entries()];
  const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = entries.reduce((sum, [id, quantity]) => sum + products.find((product) => product.id === id).price * quantity, 0);
  cartCount.textContent = `${count} ${count === 1 ? 'produs' : 'produse'}`;
  cartTotal.textContent = `${total} lei`;
  cartItems.innerHTML = entries.length ? entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `<div class="cart-row"><div class="cart-product"><strong>${product.name}</strong><span>${product.price} lei / ${product.size}</span></div><div class="quantity-control" aria-label="Cantitate ${product.name}"><button type="button" data-action="decrease" data-product="${id}" aria-label="Scade ${product.name}">−</button><span>${quantity}</span><button type="button" data-action="increase" data-product="${id}" aria-label="Adaugă ${product.name}">+</button><button class="remove-item" type="button" data-action="remove" data-product="${id}" aria-label="Elimină ${product.name}">×</button></div></div>`;
  }).join('') : '<p class="cart-empty">Coșul este gol. Alege produsele dorite din gamă.</p>';
  cartCheckout.disabled = entries.length === 0;
  cartClear.disabled = entries.length === 0;
}

function checkoutMessage() {
  const lines = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `• ${product.name} (${product.size}) × ${quantity} — ${product.price * quantity} lei`;
  });
  const total = [...cart.entries()].reduce((sum, [id, quantity]) => sum + products.find((item) => item.id === id).price * quantity, 0);
  return `Bună! Doresc să comand de la Pellet Strike:\n${lines.join('\n')}\n\nTotal produse: ${total} lei. Vă rog să îmi confirmați comanda și detaliile de livrare.`;
}

function updateCart(productId, action) {
  if (products.find((product) => product.id === productId)?.outOfStock) return;
  const current = cart.get(productId) || 0;
  if (action === 'add' || action === 'increase') cart.set(productId, current + 1);
  if (action === 'decrease') current <= 1 ? cart.delete(productId) : cart.set(productId, current - 1);
  if (action === 'remove') cart.delete(productId);
  renderCart();
}

function openProductDialog(productId, trigger) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  activeDialogProductId = productId;
  lastFocusedElement = trigger;
  dialogIndex.textContent = `PELLET STRIKE · ${product.id} / 04`;
  dialogTitle.textContent = product.name;
  dialogCopy.textContent = product.description;
  dialogImage.src = `./public/products/${product.photos[0]}`;
  dialogImage.alt = product.alts[0];
  dialogGallery.innerHTML = product.photos.map((photo, index) => `<button class="gallery-thumb${index === 0 ? ' is-active' : ''}" type="button" data-gallery-index="${index}" aria-label="Vezi fotografia ${index + 1}: ${product.alts[index]}"><img src="./public/products/${photo}" alt="" loading="lazy" /></button>`).join('');
  dialogSize.textContent = product.size;
  dialogPrice.textContent = `${product.price} lei`;
  dialogHighlights.innerHTML = product.highlights.map((item) => `<li>${item}</li>`).join('');
  dialogPrep.innerHTML = product.prep.map((item) => `<li>${item}</li>`).join('');
  dialogTip.textContent = product.tip;
  dialogOrder.textContent = product.outOfStock ? 'Stoc epuizat' : 'Adaugă în coș';
  dialogOrder.dataset.product = product.id;
  dialogOrder.disabled = Boolean(product.outOfStock);
  dialog.showModal();
  closeDialogButton.focus();
}

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  if (button.dataset.action === 'details') openProductDialog(button.dataset.product, button);
  if (button.dataset.action === 'add') updateCart(button.dataset.product, 'add');
});

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action][data-product]');
  if (button) updateCart(button.dataset.product, button.dataset.action);
});

dialogGallery.addEventListener('click', (event) => {
  const button = event.target.closest('[data-gallery-index]');
  if (!button) return;
  const product = products.find((item) => item.id === activeDialogProductId);
  const index = Number(button.dataset.galleryIndex);
  if (!product || !product.photos[index]) return;
  dialogImage.src = `./public/products/${product.photos[index]}`;
  dialogImage.alt = product.alts[index];
  dialogGallery.querySelectorAll('.gallery-thumb').forEach((thumb) => thumb.classList.toggle('is-active', thumb === button));
});

dialogOrder.addEventListener('click', (event) => {
  event.preventDefault();
  updateCart(dialogOrder.dataset.product, 'add');
  dialog.close();
  document.querySelector('#cos')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

searchInput.addEventListener('input', (event) => renderProducts(event.target.value));
cartCheckout.addEventListener('click', () => {
  if (cart.size) window.open(whatsappUrl(checkoutMessage()), '_blank', 'noopener,noreferrer');
});
cartClear.addEventListener('click', () => { cart.clear(); renderCart(); });
closeDialogButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => lastFocusedElement?.focus());

renderProducts();
renderCart();
