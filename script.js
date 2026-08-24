/* =====================================================
   مكتبة الهُدى — Front-End Store
   ===================================================== */


/* ================= STORE SETTINGS ================= */

const STORE_NAME = "مكتبة الهُدى";

const WHATSAPP_NUMBER = "201553213071";

/*
   الغلاف الافتراضي لأي كتاب بدون صورة حقيقية
   (بديل عن الإيموجي)
*/

const DEFAULT_COVER = "images/cover-default.png";


/* ================= PRODUCTS ================= */

const products = [

    { id: 1, image: "images/1.jpg", name: "التأسيس السليم - عربي KG1", category: "kg", subject: "عربي", grade: "KG1", price: 139, description: "كتاب تأسيس ومراجعة اللغة العربية." },
    { id: 2, image: "images/2.jpg", name: "التأسيس السليم - English KG1", category: "kg", subject: "English", grade: "KG1", price: 175, description: "كتاب تأسيس اللغة الإنجليزية." },
    { id: 3, image: "images/3.jpg", name: "المعاصر Math KG1", category: "kg", subject: "Math", grade: "KG1", price: 205, description: "كتاب الرياضيات والتدريب." },

    { id: 4, image: "images/4.jpg", name: "الأضواء عربي أولى ابتدائي", category: "primary", subject: "عربي", grade: "أولى ابتدائي", price: 159, description: "شرح وتدريبات وأسئلة." },
    { id: 5, image: "images/5.jpg", name: "الأضواء حساب أولى ابتدائي", category: "primary", subject: "رياضيات", grade: "أولى ابتدائي", price: 149, description: "شرح وتدريبات الرياضيات." },
    { id: 7, image: "images/7.jpg", name: "الأضواء عربي ثانية ابتدائي", category: "primary", subject: "عربي", grade: "ثانية ابتدائي", price: 159, description: "كتاب اللغة العربية." },
    { id: 8, image: "images/8.jpg", name: "سندباد عربي ثالثة ابتدائي", category: "primary", subject: "عربي", grade: "ثالثة ابتدائي", price: 185, description: "شرح وتدريبات اللغة العربية." },
    { id: 9, image: "images/9.jpg", name: "الأضواء عربي رابعة ابتدائي", category: "primary", subject: "عربي", grade: "رابعة ابتدائي", price: 159, description: "كتاب اللغة العربية." },
    { id: 10, image: "images/10.jpg", name: "الأضواء عربي خامسة ابتدائي", category: "primary", subject: "عربي", grade: "خامسة ابتدائي", price: 195, description: "كتاب اللغة العربية." },
    { id: 11, image: "images/11.jpg", name: "الأضواء عربي سادسة ابتدائي", category: "primary", subject: "عربي", grade: "سادسة ابتدائي", price: 199, description: "كتاب اللغة العربية." },

    { id: 12, image: "images/12.jpg", name: "الأضواء عربي أولى إعدادي", category: "prep", subject: "عربي", grade: "أولى إعدادي", price: 199, description: "شرح وتدريبات اللغة العربية." },
    { id: 13, image: "images/13.jpg", name: "جيم English أولى إعدادي", category: "prep", subject: "English", grade: "أولى إعدادي", price: 199, description: "شرح وتدريبات English." },
    { id: 15, image: "images/15.jpg", name: "الأضواء عربي ثانية إعدادي", category: "prep", subject: "عربي", grade: "ثانية إعدادي", price: 199, description: "كتاب اللغة العربية." },
    { id: 16, image: "images/16.jpg", name: "Step Ahead ثانية إعدادي", category: "prep", subject: "English", grade: "ثانية إعدادي", price: 220, description: "شرح وتدريبات English." },
    { id: 17, image: "images/17.jpg", name: "Bit by Bit ثالثة إعدادي", category: "prep", subject: "English", grade: "ثالثة إعدادي", price: 150, description: "شرح وتدريبات English." },

    { id: 18, image: "images/18.jpg", name: "الامتحان لغة عربية ثالثة ثانوي", category: "secondary", subject: "عربي", grade: "ثالثة ثانوي", price: 225, description: "كتاب الامتحان لغة عربية." },
    { id: 19, image: "images/19.jpg", name: "الامتحان فيزياء ثالثة ثانوي - شرح", category: "secondary", subject: "فيزياء", grade: "ثالثة ثانوي", price: 230, description: "شرح وتدريبات الفيزياء." },
    { id: 20, image: "images/20.jpg", name: "الامتحان فيزياء ثالثة ثانوي - أسئلة", category: "secondary", subject: "فيزياء", grade: "ثالثة ثانوي", price: 325, description: "أسئلة وتدريبات الفيزياء." },
    { id: 21, image: "images/21.jpg", name: "الوافي فيزياء ثالثة ثانوي", category: "secondary", subject: "فيزياء", grade: "ثالثة ثانوي", price: 210, description: "شرح وتدريبات الفيزياء." },
    { id: 22, image: "images/22.jpg", name: "الامتحان كيمياء ثالثة ثانوي", category: "secondary", subject: "كيمياء", grade: "ثالثة ثانوي", price: 285, description: "شرح وأسئلة الكيمياء." },
    { id: 24, image: "images/24.jpg", name: "الامتحان أحياء ثالثة ثانوي - شرح", category: "secondary", subject: "أحياء", grade: "ثالثة ثانوي", price: 215, description: "شرح الأحياء." },
    { id: 26, image: "images/26.jpg", name: "التميز أحياء ثالثة ثانوي", category: "secondary", subject: "أحياء", grade: "ثالثة ثانوي", price: 190, description: "شرح وتدريبات الأحياء." },
    { id: 27, image: "images/27.jpg", name: "الامتحان تاريخ ثالثة ثانوي", category: "secondary", subject: "تاريخ", grade: "ثالثة ثانوي", price: 265, description: "شرح وأسئلة التاريخ." },
    { id: 28, image: "images/28.jpg", name: "الامتحان جغرافيا ثالثة ثانوي", category: "secondary", subject: "جغرافيا", grade: "ثالثة ثانوي", price: 218, description: "شرح وأسئلة الجغرافيا." },
    { id: 29, image: "images/29.jpg", name: "الوجيز فلسفة ومنطق", category: "secondary", subject: "فلسفة", grade: "ثالثة ثانوي", price: 160, description: "شرح ومراجعة الفلسفة والمنطق." },
    { id: 31, image: "images/31.jpg", name: "المعاصر رياضيات تطبيقية", category: "secondary", subject: "رياضيات", grade: "ثالثة ثانوي", price: 400, description: "رياضيات تطبيقية." },

    { id: 32, image: "images/32.jpg", name: "سلاح الأزهري فقه حنفي ثالثة ثانوي", category: "azhar", subject: "فقه", grade: "ثالثة ثانوي أزهري", price: 150, description: "كتاب الفقه الحنفي." },
    { id: 33, image: "images/33.jpg", name: "سلاح الأزهري حديث ثالثة ثانوي", category: "azhar", subject: "حديث", grade: "ثالثة ثانوي أزهري", price: 110, description: "كتاب الحديث." },
    { id: 34, image: "images/34.jpg", name: "سلاح الأزهري توحيد ثالثة ثانوي", category: "azhar", subject: "توحيد", grade: "ثالثة ثانوي أزهري", price: 90, description: "كتاب التوحيد." },
    { id: 36, image: "images/36.jpg", name: "سلاح الأزهري نحو ثالثة ثانوي", category: "azhar", subject: "نحو", grade: "ثالثة ثانوي أزهري", price: 150, description: "شرح وتدريبات النحو." },
    { id: 37, image: "images/37.jpg", name: "سلاح الأزهري صرف ثالثة ثانوي", category: "azhar", subject: "صرف", grade: "ثالثة ثانوي أزهري", price: 140, description: "شرح وتدريبات الصرف." },
    { id: 38, image: "images/38.jpg", name: "سلاح الأزهري بلاغة ثالثة ثانوي", category: "azhar", subject: "بلاغة", grade: "ثالثة ثانوي أزهري", price: 120, description: "شرح وتدريبات البلاغة." }

];


/*
   تنظيف أي نص قبل إدراجه في HTML
   لمنع ثغرات XSS
*/

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = String(text ?? "");

    return div.innerHTML;

}


function getProductImage(product) {

    return product.image || DEFAULT_COVER;

}


/* =====================================================
   STATE
   ===================================================== */

let cart = [];

let currentCategory = "all";

let currentProducts = [...products];

let detailsProduct = null;

let detailsQuantity = 1;


/* =====================================================
   LOAD / SAVE CART
   ===================================================== */

function loadCart() {

    const savedCart = localStorage.getItem("hudaCart");

    if (savedCart) {

        try {
            cart = JSON.parse(savedCart);
        } catch {
            cart = [];
        }

    }

    updateCart();

}

function saveCart() {

    localStorage.setItem("hudaCart", JSON.stringify(cart));

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(list) {

    const grid = document.getElementById("productsGrid");
    const noProducts = document.getElementById("noProducts");

    grid.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        document.getElementById("productsResult").textContent = "لا توجد نتائج";

        return;

    }

    noProducts.style.display = "none";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        const imagePath = getProductImage(product);

        card.innerHTML = `

            <button class="product-image" onclick="openProductDetails(${product.id})" aria-label="عرض تفاصيل الكتاب">

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(product.name)}"
                    class="product-cover"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${DEFAULT_COVER}';"
                >

            </button>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.grade)} • ${escapeHTML(product.subject)}
                </span>

                <h3 class="product-name" onclick="openProductDetails(${product.id})">
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-bottom">

                    <span class="price">
                        ${escapeHTML(product.price)} جنيه
                    </span>

                    <button class="add-button" onclick="event.stopPropagation(); addToCart(${product.id})">
                        🛒 أضف
                    </button>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });

    document.getElementById("productsResult").textContent =
        `تم العثور على ${list.length} كتاب`;

}


/* =====================================================
   PRODUCT DETAILS MODAL
   ===================================================== */

function openProductDetails(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    detailsProduct = product;
    detailsQuantity = 1;

    document.getElementById("detailsImage").src = getProductImage(product);
    document.getElementById("detailsImage").alt = product.name;

    document.getElementById("detailsCategoryBadge").textContent =
        `${product.grade} • ${product.subject}`;

    document.getElementById("detailsName").textContent = product.name;

    document.getElementById("detailsDescription").textContent = product.description;

    document.getElementById("detailsPrice").textContent = `${product.price} جنيه`;

    document.getElementById("detailsQty").textContent = detailsQuantity;

    document.getElementById("detailsModal").classList.add("show");

    document.body.classList.add("no-scroll");

}

function closeProductDetails() {

    document.getElementById("detailsModal").classList.remove("show");

    document.body.classList.remove("no-scroll");

    detailsProduct = null;

}

function changeDetailsQuantity(amount) {

    detailsQuantity = Math.max(1, detailsQuantity + amount);

    document.getElementById("detailsQty").textContent = detailsQuantity;

}

function addDetailsToCart() {

    if (!detailsProduct) return;

    for (let i = 0; i < detailsQuantity; i++) {

        addToCart(detailsProduct.id, false);

    }

    saveCart();
    updateCart();

    closeProductDetails();

    openCart();

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productId, openCartPanel = true) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({ ...product, quantity: 1 });

    }

    saveCart();
    updateCart();

    if (openCartPanel) openCart();

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    emptyCart.style.display = cart.length === 0 ? "block" : "none";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        const element = document.createElement("div");

        element.className = "cart-item";

        const imagePath = getProductImage(item);

        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(item.name)}"
                    class="cart-item-cover"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${DEFAULT_COVER}';"
                >

            </div>

            <div class="cart-item-info">

                <h4>${escapeHTML(item.name)}</h4>

                <p>${escapeHTML(item.price)} جنيه</p>

                <div class="quantity">

                    <button onclick="changeQuantity(${item.id}, 1)">+</button>

                    <strong>${item.quantity}</strong>

                    <button onclick="changeQuantity(${item.id}, -1)">-</button>

                </div>

                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    حذف
                </button>

            </div>

        `;

        cartItems.appendChild(element);

    });

    cartCount.textContent = count;

    cartTotal.textContent = total.toLocaleString("ar-EG");

    document.getElementById("checkoutTotal").textContent = total.toLocaleString("ar-EG");

}


/* =====================================================
   CHANGE / REMOVE
   ===================================================== */

function changeQuantity(productId, amount) {

    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(item => item.id !== productId);

    }

    saveCart();
    updateCart();

}

function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCart();

}


/* =====================================================
   CART PANEL
   ===================================================== */

function openCart() {

    document.getElementById("cart").classList.add("open");

    document.getElementById("overlay").classList.add("show");

}

function closeCart() {

    document.getElementById("cart").classList.remove("open");

    document.getElementById("overlay").classList.remove("show");

}


/* =====================================================
   FILTER (SIDEBAR)
   ===================================================== */

function filterCategory(category, el) {

    currentCategory = category;

    document.querySelectorAll(".side-link").forEach(button => {

        button.classList.remove("active");

    });

    const target = el || (typeof event !== "undefined" ? event.currentTarget : null);

    if (target) target.classList.add("active");

    applyFilters();

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("show");

    document.getElementById("products").scrollIntoView({ behavior: "smooth" });

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchProducts() {

    applyFilters();

}


/* =====================================================
   APPLY FILTERS
   ===================================================== */

function applyFilters() {

    const search = document.getElementById("searchInput").value.trim().toLowerCase();

    currentProducts = products.filter(product => {

        const categoryMatch = currentCategory === "all" || product.category === currentCategory;

        const searchMatch =
            !search ||
            product.name.toLowerCase().includes(search) ||
            product.subject.toLowerCase().includes(search) ||
            product.grade.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });

    sortProducts(false);

}


/* =====================================================
   SORT
   ===================================================== */

function sortProducts(update = true) {

    if (update) {

        applyFilters();

        return;

    }

    const sort = document.getElementById("sortSelect").value;

    const sorted = [...currentProducts];

    if (sort === "low") sorted.sort((a, b) => a.price - b.price);

    if (sort === "high") sorted.sort((a, b) => b.price - a.price);

    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "ar"));

    displayProducts(sorted);

}


/* =====================================================
   GO HOME (النقر على الشعار بالأعلى)
   ===================================================== */

function goHome() {

    currentCategory = "all";

    document.getElementById("searchInput").value = "";

    document.querySelectorAll(".side-link").forEach(button => {

        button.classList.remove("active");

    });

    document.querySelector(".side-link[data-category='all']")?.classList.add("active");

    document.getElementById("sortSelect").value = "default";

    closeCart();
    closeCheckout();
    closeProductDetails();

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("show");

    applyFilters();

    window.scrollTo({ top: 0, behavior: "smooth" });

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert("السلة فارغة. أضف كتابًا أولًا.");

        return;

    }

    document.getElementById("checkoutModal").classList.add("show");

}

function closeCheckout() {

    document.getElementById("checkoutModal").classList.remove("show");

}


/* =====================================================
   WHATSAPP ORDER
   ===================================================== */

function sendOrderToWhatsApp(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert("السلة فارغة.");

        return;

    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    const phonePattern = /^01[0-2,5]{1}[0-9]{8}$/;

    if (!phonePattern.test(phone)) {

        alert("من فضلك أدخل رقم هاتف مصري صحيح (مثال: 01xxxxxxxxx).");

        return;

    }

    const notes = document.getElementById("customerNotes").value.trim();

    let total = 0;

    let orderText =
        `السلام عليكم، أريد عمل طلب من ${STORE_NAME}\n\n` +
        `👤 *بيانات العميل*\n` +
        `الاسم: ${name}\n` +
        `الهاتف: ${phone}\n` +
        `العنوان: ${address}\n`;

    if (notes) orderText += `ملاحظات: ${notes}\n`;

    orderText += `\n📚 *الكتب المطلوبة*\n`;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        orderText +=
            `\n${index + 1}. ${item.name}` +
            `\n   الكمية: ${item.quantity}` +
            `\n   السعر: ${item.price} جنيه` +
            `\n   الإجمالي: ${itemTotal} جنيه`;

    });

    orderText +=
        `\n\n💰 *إجمالي الطلب: ${total} جنيه*` +
        `\n\nأرجو تأكيد توفر المنتجات وتكلفة التوصيل.`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;

    window.open(whatsappURL, "_blank");

}


/* =====================================================
   MODAL CLOSE BY CLICK OUTSIDE
   ===================================================== */

document.getElementById("checkoutModal").addEventListener("click", function (event) {

    if (event.target === this) closeCheckout();

});

document.getElementById("detailsModal").addEventListener("click", function (event) {

    if (event.target === this) closeProductDetails();

});


/* =====================================================
   SIDEBAR TOGGLE (MOBILE)
   ===================================================== */

function toggleSidebar() {

    document.getElementById("sidebar").classList.toggle("open");

    document.getElementById("sidebarOverlay").classList.toggle("show");

}


/* =====================================================
   START
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadCart();

    displayProducts(products);

});
