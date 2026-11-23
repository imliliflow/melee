tailwind.config = {
    theme: {
        extend: {
            colors: { 
                blush: { 
                    50: '#FDFBFB', 
                    100: '#F6EBED', 
                    200: '#EBD4CD', 
                    300: '#DFC2B7', 
                    500: '#C28372', 
                    900: '#5C382F' 
                }, 
                charcoal: '#231F20' 
            },
            fontFamily: { 
                'serif-title': ['Cormorant Garamond', 'serif'], 
                'sans-body': ['Montserrat', 'sans-serif'] 
            }
        }
    }
};

const initialProducts = [
    { id: 1, name: "Кольцо Solitaire", category: "rings", material: "белое золото", weight: 3.2, price: 340000, image: "https://www.diamonds-are-forever.ru/upload/iblock/839/a180efmv6bgmukfnofgu3zjwo3uauiyk/109886.png", description: "Изысканное помолвочное кольцо из белого золота 750 пробы с бриллиантом 0.5 карата." },
    { id: 2, name: "Серьги-пусеты 'Плавник'", category: "earrings", material: "розовое золото", weight: 2.4, price: 185000, image: "https://g3.sunlight.net/media/products/2e65bb7b278175a95125f0453882a8817b5f5aa6.jpg", description: "Лаконичные пусеты из розового золота 585 пробы с россыпью драгоценных камней." },
    { id: 3, name: "Колье с кулоном 'Сияние'", category: "necklaces", material: "желтое золото", weight: 5.1, price: 420000, image: "https://avatars.mds.yandex.net/get-mpic/1726038/img_id5202873491272099811.jpeg/orig", description: "Классическое колье из желтого золота с центральным сапфиром и бриллиантовым ореолом." },
    { id: 4, name: "Браслет 'Розовый Кварц'", category: "bracelets", material: "розовое золото", weight: 8.7, price: 290000, image: "https://avatars.mds.yandex.net/get-mpic/5194288/2a000001932aa73abd78e268eb2efa5a10d2/orig", description: "Жесткий браслет из розового золота с вставками из натурального кварца." },
    { id: 5, name: "Кольцо 'Изумрудный Овал'", category: "rings", material: "платина", weight: 4.5, price: 580000, image: "https://www.diamonds-are-forever.ru/upload/iblock/9ec/pz8d1re2qo5br1nbh23ozytzcrgx0er5/123357.png", description: "Роскошное кольцо из платины 950 пробы с колумбийским изумрудом." },
    { id: 6, name: "Серьги 'Капли Света'", category: "earrings", material: "белое золото", weight: 3.8, price: 260000, image: "https://misterdiamond.ru/upload/iblock/3e7/sxsksuyn1izh54i6qcz310sjgnvef0mc.jpg", description: "Утонченные вечерние серьги с каплевидными бриллиантами." },
    { id: 7, name: "Подвеска 'Золотой Мотив'", category: "necklaces", material: "желтое золото", weight: 2.1, price: 195000, image: "https://ir.ozone.ru/s3/multimedia-1-a/c1000/7576086538.jpg", description: "Минималистичный кулон из полированного желтого золота 585 пробы." },
    { id: 8, name: "Браслет цепной с Бриллиантами", category: "bracelets", material: "белое золото", weight: 6.3, price: 380000, image: "https://2pmdn.sokolov.io/images/22/96/EC7C8F5F4BC4892377C27A7CA580.jpg?width=1000&color=F8FAFB", description: "Теннисный браслет из белого золота, инкрустированный бриллиантами." },
    { id: 9, name: "Кольцо с бриллиантом", category: "rings", material: "желтое золото", weight: 3.6, price: 310000, image: "https://armatgold.com/product_images/previews/KS%20400%20(K%20400%20Yell)%20PNG_preview.jpg", description: "Уникальное золотое кольцо с натуральной бриллиантом идеально круглой формы." },
    { id: 10, name: "Серьги 'Diamond Huggies'", category: "earrings", material: "розовое золото", weight: 2.9, price: 215000, image: "https://n.cdn.cdek.shopping/images/shopping/Ngr41pTfHo5r9BCj.jpg?v=1", description: "Серьги-колечки для повседневной элегантности из розового золота." },
    { id: 11, name: "Колье 'Млечный Путь'", category: "necklaces", material: "платина", weight: 9.4, price: 740000, image: "https://miuz.ru/upload/resize_cache/iblock/1c1/690_690/o6kpa26tptgy672l597oraw2ci2kawco.jpg", description: "Шедевр из платины с каскадом россыпи мелких бриллиантов." },
    { id: 12, name: "Браслет-кафф 'Минимал'", category: "bracelets", material: "желтое золото", weight: 7.2, price: 225000, image: "https://avatars.mds.yandex.net/get-mpic/16482228/2a0000019eda955ce68f8de658599918d8d4/orig", description: "Открытый современный браслет из массивного желтого золота." },
    { id: 13, name: "Парные кольца Darry Ring", category: "rings", material: "белое золото", weight: 4.8, price: 280000, image: "images/item-13.jpg", description: "Элегантные парные кольца из белого золота с гравировкой Darry Ring и инкрустацией черным и белым бриллиантами." },
    { id: 14, name: "Браслет-гвоздь «Juste un Clou»", category: "bracelets", material: "желтое золото", weight: 15.2, price: 350000, image: "images/item-14.jpg", description: "Легендарный жесткий браслет в виде изогнутого гвоздя из полированного золота 585 пробы. Смелый авангардный дизайн для культового образа." },
    { id: 15, name: "Двойной теннисный браслет «Капли сияния»", category: "bracelets", material: "белое золото", weight: 8.4, price: 420000, image: "images/item-15.jpg", description: "Элегантный спиральный браслет из белого золота с непрерывной дорожкой из сверкающих фианитов и утонченными каплевидными акцентами на концах." },
    { id: 16, name: "Серьги-пусеты «Капли ртути»", category: "earrings", material: "белое золото", weight: 4.6, price: 195000, image: "images/item-16.jpg", description: "Трендовые объемные серьги-пусеты в форме гладких капель из глянцевого белого золота. Минималистичный и ультрасовременный дизайн." },
    { id: 17, name: "Серьги с топазами «Лазурная гроздь»", category: "earrings", material: "белое золото", weight: 3.9, price: 210000, image: "images/item-17.jpg", description: "Утонченные серьги с английским замком из белого золота, украшенные россыпью голубых топазов различной огранки (овал, капля, круг)." },
    { id: 18, name: "Серьги-продевки с гранатами «Рубиновая нить»", category: "earrings", material: "белое золото", weight: 2.8, price: 175000, image: "images/item-18.jpg", description: "Изящные и легкие серьги-продевки (продевки-цепочки) из белого золота с каскадом из трех темно-красных гранатов различного размера." },
    { id: 19, name: "Серьги с аметистом «Фиолетовый ореол»", category: "earrings", material: "белое золото", weight: 4.2, price: 230000, image: "images/item-19.jpg", description: "Роскошные классические серьги с английским замком из белого золота. Овальный аметист глубокого фиолетового цвета обрамлен сияющим ореолом из фианитов." },
    { id: 20, name: "Серьги с бриллиантом «Минимал»", category: "earrings", material: "белое золото", weight: 3.1, price: 245000, image: "images/item-20.jpg", description: "Строгие и элегантные серьги с надежным английским замком из гладкого белого золота. Акцент сделан на одиночном круглом бриллианте чистой огранки." },
    { id: 21, name: "Серьги «Нуар и Сияние»", category: "earrings", material: "белое золото", weight: 4.7, price: 285000, image: "images/item-21.jpg", description: "Роскошные широкие серьги с английским замком из белого золота. Контрастный дизайн из параллельных дорожек с черной и белой инкрустацией." },
    { id: 22, name: "Серьги-конго «Инь и Ян»", category: "earrings", material: "белое золото", weight: 3.9, price: 260000, image: "images/item-22.jpg", description: "Утонченные двойные серьги-конго из белого золота с практичным итальянским замком. Две переплетающиеся дорожки инкрустированы контрастными черными и белыми кристаллами." },
    { id: 23, name: "Серьга-кафф «Бриллиантовая линия»", category: "earrings", material: "белое золото", weight: 1.8, price: 135000, image: "images/item-23.jpg", description: "Ультрамодный моно-кафф из белого золота, инкрустированный дорожкой из сверкающих фианитов. Надежно фиксируется на хряще уха и не требует прокола." },
    { id: 24, name: "Кольцо «Слеза Афродиты»", category: "rings", material: "розовое золото", weight: 3.4, price: 185000, image: "images/item-24.jpg", description: "Утонческое разомкнутое кольцо из розового золота с грациозным кристаллом каплевидной огранки («груша») и гладким шариком на противоположном конце." }
];

const availableSizes = ["15.0", "15.5", "16.0", "16.5", "17.0", "17.5", "18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0"];

let products = JSON.parse(localStorage.getItem('melee_products')) || initialProducts;
let cart = JSON.parse(localStorage.getItem('melee_cart')) || [];
let orders = JSON.parse(localStorage.getItem('melee_orders')) || [];
let reviews = JSON.parse(localStorage.getItem('melee_reviews')) || [
    { id: 1, author: "Алина", rating: 5, text: "Качество изделий просто потрясающее! Заказывала кольцо Solitaire, доставили очень быстро.", date: "12.10.2026" }
];

let users = JSON.parse(localStorage.getItem('melee_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('melee_current_user')) || null;
let isAdminLoggedIn = sessionStorage.getItem('melee_admin_auth') === 'true';
let activeCategory = 'all', activeMaterial = 'all';

const formatPrice = amount => amount.toLocaleString('ru-RU') + ' ₸';

function save() {
    localStorage.setItem('melee_cart', JSON.stringify(cart));
    localStorage.setItem('melee_orders', JSON.stringify(orders));
    localStorage.setItem('melee_products', JSON.stringify(products));
    localStorage.setItem('melee_reviews', JSON.stringify(reviews));
    updateBadges();
}

function renderReviews() {
    const list = document.getElementById('reviews-list');
    if (!list) return;
    if (!reviews.length) {
        list.innerHTML = `<div class="col-span-full text-center py-6 text-gray-400 text-xs">Пока нет отзывов. Будьте первыми!</div>`;
        return;
    }
    list.innerHTML = reviews.map(r => `
        <div class="bg-white p-4 rounded-2xl border border-blush-100 shadow-sm space-y-2">
            <div class="flex justify-between items-center">
                <span class="font-bold text-xs text-blush-900">${r.author}</span>
                <span class="text-amber-500 text-xs">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            </div>
            <p class="text-xs text-gray-600">${r.text}</p>
            <div class="text-[10px] text-gray-400 text-right">${r.date}</div>
        </div>
    `).join('');
}

function handleCreateReview(e) {
    e.preventDefault();
    const authorInput = document.getElementById('rev-author');
    const textInput = document.getElementById('rev-text');
    const author = authorInput.value.trim();
    const rating = Number(document.getElementById('rev-rating').value);
    const text = textInput.value.trim();

    if (!author || !text) return showToast("Заполните все поля!");

    reviews.unshift({
        id: Date.now(),
        author,
        rating,
        text,
        date: new Date().toLocaleDateString('ru-RU')
    });

    save();
    renderReviews();
    renderAdminReviews();
    authorInput.value = '';
    textInput.value = '';
    showToast("Спасибо за ваш отзыв!");
}

function renderAdminReviews() {
    const list = document.getElementById('admin-reviews-list');
    if (!list) return;
    if (!reviews.length) {
        list.innerHTML = `<div class="bg-blush-50/50 rounded-2xl border border-blush-100 p-6 text-center text-gray-400 text-xs">Нет отзывов</div>`;
        return;
    }
    list.innerHTML = reviews.map(r => `
        <div class="bg-white p-4 rounded-2xl border border-blush-100 flex justify-between items-start gap-4">
            <div class="space-y-1">
                <div class="flex items-center gap-2">
                    <span class="font-bold text-xs text-blush-900">${r.author}</span>
                    <span class="text-amber-500 text-xs">${'★'.repeat(r.rating)}</span>
                    <span class="text-[10px] text-gray-400">• ${r.date}</span>
                </div>
                <p class="text-xs text-gray-600">${r.text}</p>
            </div>
            <button type="button" onclick="deleteReview(${r.id})" class="text-red-400 hover:text-red-600 text-xs p-1"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}

function deleteReview(id) {
    if (confirm("Удалить этот отзыв?")) {
        reviews = reviews.filter(r => r.id !== id);
        save();
        renderReviews();
        renderAdminReviews();
        showToast("Отзыв удален");
    }
}

function renderUserAuthBlock() {
    const container = document.getElementById('user-auth-block');
    if (!container) return;

    if (currentUser) {
        container.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-xs font-semibold text-blush-900 hidden sm:inline"><i class="fa-solid fa-circle-user text-blush-500 mr-1"></i>${currentUser.name}</span>
                <button type="button" onclick="logoutUser()" class="text-xs text-gray-400 hover:text-red-500 transition p-1" title="Выйти"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
        `;
        const custName = document.getElementById('cust-name');
        const custPhone = document.getElementById('cust-phone');
        const revAuthor = document.getElementById('rev-author');
        if (custName && !custName.value) custName.value = currentUser.name;
        if (custPhone && !custPhone.value) custPhone.value = currentUser.phone;
        if (revAuthor && !revAuthor.value) revAuthor.value = currentUser.name;
    } else {
        container.innerHTML = `
            <button type="button" onclick="openUserAuthModal()" class="flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-blush-500 transition border border-blush-200 px-3 py-1.5 rounded-full">
                <i class="fa-regular fa-user"></i> <span>Войти</span>
            </button>
        `;
    }
}

function openUserAuthModal() {
    document.getElementById('user-auth-modal').classList.remove('hidden');
    
    const savedLogin = localStorage.getItem('melee_saved_login');
    const savedPass = localStorage.getItem('melee_saved_pass');
    
    if (savedLogin && savedPass) {
        const loginInput = document.getElementById('login-email');
        const passInput = document.getElementById('login-password');
        if (loginInput && !loginInput.value) loginInput.value = savedLogin;
        if (passInput && !passInput.value) passInput.value = savedPass;
    }
}

const closeUserAuthModal = () => document.getElementById('user-auth-modal').classList.add('hidden');

function switchAuthTab(tab) {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    const tabLogin = document.getElementById('auth-tab-login');
    const tabReg = document.getElementById('auth-tab-register');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabLogin.className = 'w-1/2 pb-2 text-blush-900 border-b-2 border-blush-500';
        tabReg.className = 'w-1/2 pb-2 text-gray-400';
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabReg.className = 'w-1/2 pb-2 text-blush-900 border-b-2 border-blush-500';
        tabLogin.className = 'w-1/2 pb-2 text-gray-400';
    }
}

function handleUserRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const savePassword = document.getElementById('reg-save-password').checked;

    const hasNumber = /\d/;
    if (password.length < 8 || !hasNumber.test(password)) {
        return showToast("Пароль ненадежный! Требуется минимум 8 символов и хотя бы одна цифра.");
    }

    if (users.some(u => u.email === email)) {
        return showToast("Пользователь с таким Email уже зарегистрирован!");
    }

    const newUser = { id: Date.now(), name, phone, email, password };
    users.push(newUser);
    localStorage.setItem('melee_users', JSON.stringify(users));

    if (savePassword) {
        localStorage.setItem('melee_saved_login', email);
        localStorage.setItem('melee_saved_pass', password);
    } else {
        localStorage.removeItem('melee_saved_login');
        localStorage.removeItem('melee_saved_pass');
    }

    currentUser = newUser;
    localStorage.setItem('melee_current_user', JSON.stringify(currentUser));

    closeUserAuthModal();
    renderUserAuthBlock();
    showToast(`Добро пожаловать, ${name}!`);
}

function handleUserLogin(e) {
    e.preventDefault();
    const emailOrPhone = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    const user = users.find(u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('melee_current_user', JSON.stringify(currentUser));

        localStorage.setItem('melee_saved_login', user.email);
        localStorage.setItem('melee_saved_pass', user.password);

        closeUserAuthModal();
        renderUserAuthBlock();
        showToast(`С возвращением, ${user.name}!`);
    } else {
        showToast("Неверный логин или пароль!");
    }
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('melee_current_user');
    renderUserAuthBlock();
    showToast("Вы вышли из аккаунта");
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const filtered = products.filter(p => (activeCategory === 'all' || p.category === activeCategory) && (activeMaterial === 'all' || p.material === activeMaterial));
    if (!filtered.length) {
        grid.innerHTML = `<div class="col-span-full text-center py-12"><i class="fa-regular fa-gem text-4xl text-blush-300 mb-3"></i><p class="text-gray-500">Ничего не найдено.</p></div>`;
        return;
    }
    grid.innerHTML = filtered.map(p => `
        <div class="product-card bg-white rounded-3xl p-4 border border-blush-100 flex flex-col justify-between relative group shadow-sm hover:shadow-md">
            <div class="relative w-full h-56 sm:h-64 bg-white rounded-2xl overflow-hidden mb-4 cursor-pointer" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute bottom-3 left-3 bg-blush-50 text-blush-900 text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full border border-blush-200">${p.material}</span>
                <span class="absolute bottom-3 right-3 bg-white/90 text-charcoal text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">${p.weight || '—'} г</span>
                ${isAdminLoggedIn ? `<button type="button" onclick="event.stopPropagation(); editProduct(${p.id})" class="absolute top-3 right-3 bg-white/90 hover:bg-blush-500 hover:text-white text-blush-900 w-8 h-8 rounded-full shadow flex items-center justify-center text-xs transition"><i class="fa-solid fa-pen"></i></button>` : ''}
            </div>
            <div class="space-y-2 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="font-serif-title text-xl font-bold hover:text-blush-500 cursor-pointer transition line-clamp-1" onclick="openProductModal(${p.id})">${p.name}</h3>
                    <p class="text-xs text-gray-500 line-clamp-2 mt-1">${p.description}</p>
                </div>
                
                ${p.category === 'rings' ? `
                    <div class="pt-2">
                        <label class="block text-[11px] font-semibold text-gray-500 mb-1">Размер кольца:</label>
                        <select id="size-select-${p.id}" class="w-full text-xs p-2 rounded-xl border border-blush-200 bg-blush-50/50 focus:outline-none focus:border-blush-500">
                            ${availableSizes.map(size => `<option value="${size}" ${size === '17.0' ? 'selected' : ''}>${size}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}

                <div class="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-gray-50">
                    <span class="text-base font-bold text-blush-900">${formatPrice(p.price)}</span>
                    <button type="button" onclick="addToCart(${p.id})" class="btn-soft bg-blush-500 hover:bg-blush-900 text-white text-xs px-3.5 py-2.5 rounded-xl font-medium transition shadow-sm flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </div>`).join('');
}

function addToCart(id, customSize = null) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    let selectedSize = customSize;
    if (!selectedSize && prod.category === 'rings') {
        const selectElem = document.getElementById(`size-select-${id}`);
        if (selectElem) selectedSize = selectElem.value;
        else selectedSize = '17.0';
    }

    const itemKey = prod.category === 'rings' ? `${id}_${selectedSize}` : `${id}`;
    const item = cart.find(i => i.cartId === itemKey);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ cartId: itemKey, id, size: selectedSize, quantity: 1 });
    }

    save(); renderCart(); showToast("Добавлено в корзину");
}

function updateQuantity(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.cartId !== cartId);
        save(); renderCart();
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    if (!cart.length) {
        container.innerHTML = `<div class="text-center py-8"><i class="fa-solid fa-bag-shopping text-3xl text-gray-300 mb-2"></i><p class="text-gray-500 text-xs">Корзина пуста</p></div>`;
        document.getElementById('cart-total').innerText = '0 ₸';
        return;
    }
    let total = 0;
    container.innerHTML = cart.map(item => {
        const prod = products.find(p => p.id === item.id);
        if (!prod) return '';
        total += prod.price * item.quantity;
        return `
            <div class="flex items-center justify-between gap-3 p-3 bg-blush-50/50 rounded-2xl border border-blush-100">
                <img src="${prod.image}" alt="${prod.name}" class="w-14 h-14 object-cover rounded-xl shrink-0">
                <div class="flex-grow min-w-0">
                    <h4 class="font-serif-title font-bold text-xs truncate">${prod.name}</h4>
                    <p class="text-[10px] text-gray-500">
                        Вес: ${prod.weight || '—'} г ${item.size ? `| Размер: <strong class="text-blush-900">${item.size}</strong>` : ''}
                    </p>
                    <p class="text-[11px] text-blush-900 font-semibold mt-0.5">${formatPrice(prod.price)}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button type="button" onclick="updateQuantity('${item.cartId}', -1)" class="w-5 h-5 rounded bg-white border text-[10px]">-</button>
                        <span class="text-xs font-semibold">${item.quantity}</span>
                        <button type="button" onclick="updateQuantity('${item.cartId}', 1)" class="w-5 h-5 rounded bg-white border text-[10px]">+</button>
                    </div>
                </div>
                <button type="button" onclick="updateQuantity('${item.cartId}', -${item.quantity})" class="text-gray-400 hover:text-red-500 text-xs p-1"><i class="fa-solid fa-trash"></i></button>
            </div>`;
    }).join('');
    document.getElementById('cart-total').innerText = formatPrice(total);
}

function openProductModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    let sizeHtml = '';
    if (prod.category === 'rings') {
        sizeHtml = `
            <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Выберите размер:</label>
                <select id="modal-size-select" class="w-full text-xs p-2.5 rounded-xl border border-blush-200 bg-white focus:outline-none focus:border-blush-500">
                    ${availableSizes.map(size => `<option value="${size}" ${size === '17.0' ? 'selected' : ''}>${size}</option>`).join('')}
                </select>
            </div>
        `;
    }

    document.getElementById('modal-content').innerHTML = `
        <div class="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-50"><img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover"></div>
        <div class="space-y-3">
            <div class="flex items-center justify-between">
                <span class="text-xs font-semibold uppercase text-blush-500">${prod.material}</span>
                <span class="text-xs text-gray-500 font-medium">Вес: ${prod.weight || '—'} г</span>
            </div>
            <h3 class="font-serif-title text-2xl font-bold">${prod.name}</h3>
            <p class="text-sm text-gray-600">${prod.description}</p>
            ${sizeHtml}
            <div class="text-2xl font-bold text-blush-900">${formatPrice(prod.price)}</div>
            <button type="button" onclick="
                const selectedSize = document.getElementById('modal-size-select') ? document.getElementById('modal-size-select').value : null;
                addToCart(${prod.id}, selectedSize);
                closeModal();
            " class="w-full btn-soft bg-blush-500 hover:bg-blush-900 text-white font-medium py-3 rounded-2xl text-sm">Добавить в корзину</button>
        </div>`;
    document.getElementById('product-modal').classList.remove('hidden');
}

function editProduct(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <h3 class="font-serif-title text-2xl font-bold text-blush-900 mb-2">Редактирование товара</h3>
        <form onsubmit="saveProductEdit(event, ${p.id})" class="space-y-3 text-xs">
            <div><label class="font-semibold">Название</label><input type="text" id="edit-name" value="${p.name}" required class="w-full p-2.5 border border-blush-200 rounded-xl mt-1"></div>
            <div class="grid grid-cols-2 gap-2">
                <div><label class="font-semibold">Категория</label>
                    <select id="edit-cat" class="w-full p-2.5 border border-blush-200 rounded-xl mt-1">
                        <option value="rings" ${p.category === 'rings' ? 'selected' : ''}>Кольца</option>
                        <option value="earrings" ${p.category === 'earrings' ? 'selected' : ''}>Серьги</option>
                        <option value="necklaces" ${p.category === 'necklaces' ? 'selected' : ''}>Колье</option>
                        <option value="bracelets" ${p.category === 'bracelets' ? 'selected' : ''}>Браслеты</option>
                    </select>
                </div>
                <div><label class="font-semibold">Материал</label>
                    <select id="edit-mat" class="w-full p-2.5 border border-blush-200 rounded-xl mt-1">
                        <option value="белое золото" ${p.material === 'белое золото' ? 'selected' : ''}>Белое золото</option>
                        <option value="желтое золото" ${p.material === 'желтое золото' ? 'selected' : ''}>Желтое золото</option>
                        <option value="розовое золото" ${p.material === 'розовое золото' ? 'selected' : ''}>Розовое золото</option>
                        <option value="платина" ${p.material === 'платина' ? 'selected' : ''}>Платина</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div><label class="font-semibold">Цена (₸)</label><input type="number" id="edit-price" value="${p.price}" required class="w-full p-2.5 border border-blush-200 rounded-xl mt-1"></div>
                <div><label class="font-semibold">Вес (грамм)</label><input type="number" step="0.1" id="edit-weight" value="${p.weight || ''}" required class="w-full p-2.5 border border-blush-200 rounded-xl mt-1"></div>
            </div>
            <div><label class="font-semibold">Ссылка на фото</label><input type="text" id="edit-img" value="${p.image}" required class="w-full p-2.5 border border-blush-200 rounded-xl mt-1"></div>
            <div><label class="font-semibold">Описание</label><textarea id="edit-desc" rows="2" required class="w-full p-2.5 border border-blush-200 rounded-xl mt-1">${p.description}</textarea></div>
            <div class="flex gap-2 pt-2">
                <button type="submit" class="flex-1 bg-blush-500 hover:bg-blush-900 text-white py-2.5 rounded-xl font-bold transition">Сохранить</button>
                <button type="button" onclick="deleteProduct(${p.id})" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl transition"><i class="fa-solid fa-trash"></i></button>
            </div>
        </form>`;
    document.getElementById('product-modal').classList.remove('hidden');
}

function saveProductEdit(e, id) {
    e.preventDefault();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = {
            ...products[index],
            name: document.getElementById('edit-name').value,
            category: document.getElementById('edit-cat').value,
            material: document.getElementById('edit-mat').value,
            price: Number(document.getElementById('edit-price').value),
            weight: Number(document.getElementById('edit-weight').value),
            image: document.getElementById('edit-img').value,
            description: document.getElementById('edit-desc').value
        };
        save(); renderProducts(); closeModal(); showToast("Товар успешно обновлен!");
    }
}

function handleCreateProduct(e) {
    e.preventDefault();
    products.unshift({
        id: Date.now(),
        name: document.getElementById('new-prod-name').value,
        category: document.getElementById('new-prod-cat').value,
        material: document.getElementById('new-prod-mat').value,
        price: parseFloat(document.getElementById('new-prod-price').value),
        weight: parseFloat(document.getElementById('new-prod-weight').value),
        image: document.getElementById('new-prod-img').value,
        description: document.getElementById('new-prod-desc').value
    });
    save(); renderProducts();
    document.getElementById('add-product-form').reset();
    showToast("Товар добавлен!");
    switchAdminTab('orders');
}

function renderAdminOrders() {
    const list = document.getElementById('orders-list');
    if (!list) return;
    if (!orders.length) {
        list.innerHTML = `<div class="bg-blush-50/50 rounded-2xl border border-blush-100 p-8 text-center text-gray-400 text-xs">Пока нет поступивших заказов</div>`;
        return;
    }
    list.innerHTML = orders.map(order => `
        <div class="bg-blush-50/40 rounded-2xl border border-blush-100 p-4 sm:p-5 flex flex-col md:flex-row justify-between gap-4">
            <div class="space-y-2 flex-grow">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-bold text-sm text-blush-900">Заказ #${order.id}</span>
                    <span class="text-[10px] ${order.status === 'Новый' ? 'bg-amber-100 text-amber-800' : order.status === 'В обработке' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'} font-bold px-2 py-0.5 rounded-full">${order.status}</span>
                    <span class="text-[11px] text-gray-400">• ${order.date}</span>
                </div>
                <div class="bg-white p-3 rounded-xl border border-blush-100 text-xs space-y-1">
                    <div><i class="fa-solid fa-user mr-1.5 text-blush-500"></i><strong>${order.customer?.name || 'Клиент'}</strong></div>
                    <div><i class="fa-solid fa-phone mr-1.5 text-blush-500"></i><a href="tel:${order.customer?.phone}" class="text-blue-600 underline">${order.customer?.phone || 'Не указан'}</a></div>
                    <div><i class="fa-solid fa-truck mr-1.5 text-blush-500"></i><span class="text-gray-600">${order.customer?.delivery || 'Доставка'}</span></div>
                </div>
                <div class="pt-1 space-y-1">
                    ${order.items.map(item => {
                        const prod = products.find(p => p.id === item.id);
                        return prod ? `<div class="text-xs">• ${prod.name}${item.size ? ` (Размер: ${item.size})` : ''} <span class="text-gray-400 font-semibold">x${item.quantity}</span> (${formatPrice(prod.price * item.quantity)})</div>` : '';
                    }).join('')}
                </div>
            </div>
            <div class="flex flex-col justify-between items-end gap-3 border-t md:border-t-0 border-blush-100 pt-3 md:pt-0 shrink-0">
                <div class="text-right">
                    <div class="text-[10px] text-gray-400 uppercase tracking-wider">Итоговая сумма</div>
                    <div class="text-xl font-bold text-blush-900">${formatPrice(order.total)}</div>
                </div>
                <div class="flex items-center gap-2">
                    <select onchange="changeOrderStatus(${order.id}, this.value)" class="text-xs border border-blush-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none">
                        <option value="Новый" ${order.status === 'Новый' ? 'selected' : ''}>Новый</option>
                        <option value="В обработке" ${order.status === 'В обработке' ? 'selected' : ''}>В обработке</option>
                        <option value="Выполнен" ${order.status === 'Выполнен' ? 'selected' : ''}>Выполнен</option>
                    </select>
                    <button type="button" onclick="deleteOrder(${order.id})" class="text-red-400 hover:text-red-600 p-2 text-xs transition"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>`).join('');
}

function updateBadges() {
    document.getElementById('cart-count').innerText = cart.reduce((acc, i) => acc + i.quantity, 0);
    const adminOrdersCount = document.getElementById('admin-orders-count');
    if (adminOrdersCount) adminOrdersCount.innerText = orders.length;
    const adminRevCount = document.getElementById('admin-reviews-count');
    if (adminRevCount) adminRevCount.innerText = reviews.length;
    const toggleBtn = document.getElementById('toggle-admin-btn');
    if (toggleBtn) toggleBtn.classList.toggle('hidden', !isAdminLoggedIn);
}

function deleteProduct(id) {
    if (confirm("Удалить этот товар из каталога?")) {
        products = products.filter(p => p.id !== id);
        save(); renderProducts(); closeModal(); showToast("Товар удален");
    }
}

const closeModal = () => document.getElementById('product-modal').classList.add('hidden');
const toggleCart = (show) => document.getElementById('cart-drawer').classList.toggle('hidden', !show);

function showToast(msg) {
    const toast = document.getElementById('custom-toast');
    if (!toast) return;
    document.getElementById('toast-message').innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none'), 2500);
}

function checkoutCart() {
    if (!cart.length) return showToast("Корзина пуста");
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    if (!name || !phone) return showToast("Заполните Имя и Телефон!");

    orders.unshift({
        id: Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        customer: { name, phone, delivery: document.getElementById('cust-delivery').value },
        items: [...cart], status: 'Новый',
        total: cart.reduce((sum, item) => sum + ((products.find(p => p.id === item.id)?.price || 0) * item.quantity), 0)
    });

    cart = [];
    document.getElementById('cust-name').value = ''; document.getElementById('cust-phone').value = '';
    save(); renderCart(); renderAdminOrders(); toggleCart(false);
    showToast("Заказ оформлен! Скоро с вами свяжутся.");
}

const openAdminLoginModal = () => { document.getElementById('admin-login-modal').classList.remove('hidden'); document.getElementById('admin-pass-input').focus(); };
const closeAdminLoginModal = () => { document.getElementById('admin-login-modal').classList.add('hidden'); document.getElementById('admin-pass-input').value = ''; };

function handleAdminLogin(e) {
    e.preventDefault();
    if (document.getElementById('admin-pass-input').value === 'admin123') {
        isAdminLoggedIn = true;
        sessionStorage.setItem('melee_admin_auth', 'true');
        closeAdminLoginModal(); updateBadges(); toggleAdminView(true);
        renderProducts();
        showToast("Успешный вход в админку");
    } else showToast("Неверный пароль доступа!");
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    sessionStorage.removeItem('melee_admin_auth');
    closeAdminLoginModal();
    document.getElementById('admin-view').classList.add('hidden');
    document.getElementById('storefront-view').classList.remove('hidden');
    updateBadges(); renderProducts(); showToast("Вы вышли из админ-панели");
}

function toggleAdminView(forceState) {
    const adminView = document.getElementById('admin-view'), storeView = document.getElementById('storefront-view'), btnText = document.getElementById('admin-btn-text');
    if (!isAdminLoggedIn) {
        if (forceState === true) openAdminLoginModal();
        else { adminView.classList.add('hidden'); storeView.classList.remove('hidden'); }
        return;
    }
    const isHidden = forceState !== undefined ? !forceState : adminView.classList.contains('hidden');
    adminView.classList.toggle('hidden', !isHidden);
    storeView.classList.toggle('hidden', isHidden);
    if (btnText) btnText.innerText = isHidden ? "В магазин" : "Админ-панель";
    if (isHidden) {
        renderAdminOrders();
        renderAdminReviews();
    }
}

function switchAdminTab(tab) {
    ['orders', 'add-product', 'stats', 'reviews'].forEach(t => {
        const tabElem = document.getElementById(`admin-tab-${t}`);
        if (tabElem) tabElem.classList.add('hidden');
        const btnElem = document.getElementById(`tab-${t === 'add-product' ? 'add' : t}-btn`);
        if (btnElem) btnElem.className = 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-charcoal hover:bg-white transition';
    });
    const activeTab = document.getElementById(`admin-tab-${tab}`);
    if (activeTab) activeTab.classList.remove('hidden');
    const activeBtn = document.getElementById(`tab-${tab === 'add-product' ? 'add' : tab}-btn`);
    if (activeBtn) activeBtn.className = 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blush-500 text-white shadow-sm transition';
    
    if (tab === 'stats') renderAdminStats();
    if (tab === 'reviews') renderAdminReviews();
}

function changeOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) { order.status = newStatus; save(); renderAdminOrders(); showToast(`Статус заказа #${orderId} изменен`); }
}

function deleteOrder(orderId) {
    if (confirm(`Удалить заказ #${orderId}?`)) {
        orders = orders.filter(o => o.id !== orderId);
        save(); renderAdminOrders(); showToast("Заказ удален");
    }
}

function renderAdminStats() {
    const count = orders.length, revenue = orders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('stat-orders-count').innerText = count;
    document.getElementById('stat-total-revenue').innerText = formatPrice(revenue);
    document.getElementById('stat-avg-order').innerText = formatPrice(count ? Math.round(revenue / count) : 0);
}

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['A', 'a', 'Ф', 'ф'].includes(e.key)) {
        e.preventDefault();
        isAdminLoggedIn ? toggleAdminView() : openAdminLoginModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); renderCart(); renderReviews(); renderUserAuthBlock(); updateBadges();

    document.querySelectorAll('.filter-cat-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.filter-cat-btn').forEach(b => b.className = 'filter-cat-btn bg-white text-charcoal px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition shrink-0 border border-blush-100');
            e.target.className = 'filter-cat-btn active bg-blush-500 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition shrink-0';
            activeCategory = e.target.dataset.category; renderProducts();
        };
    });

    const matFilter = document.getElementById('material-filter');
    if (matFilter) matFilter.onchange = (e) => { activeMaterial = e.target.value; renderProducts(); };
    
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) cartBtn.onclick = () => toggleCart(true);
    
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) mobileBtn.onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');
});