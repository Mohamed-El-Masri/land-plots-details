// المتغيرات العامة
let map;
let marker;
let currentLand;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

// تهيئة الصفحة
function initializePage() {
    // الحصول على معرف قطعة الأرض من URL
    const urlParams = new URLSearchParams(window.location.search);
    const landId = urlParams.get('id');

    // التحقق من وجود البيانات
    if (!landsData || !landsData.lands) {
        redirectToHome();
        return;
    }

    // البحث عن بيانات قطعة الأرض
    currentLand = landsData.lands.find(l => l.id === parseInt(landId));
    if (!currentLand) {
        redirectToHome();
        return;
    }

    // تحديث عنوان الصفحة
    document.title = `${currentLand.name} - تفاصيل قطعة الأرض`;

    // تحديث معلومات الصفحة
    updatePageContent();
}

// إعادة التوجيه للصفحة الرئيسية
function redirectToHome() {
    window.location.href = 'index.html';
}

// تحديث محتوى الصفحة
function updatePageContent() {
    updatePageHeader();
    initializeLandMap();
    updateDetailedInformation();
}

// تحديث معلومات رأس الصفحة
function updatePageHeader() {
    updateElement('landName', currentLand.name);
    updateElement('landArea', `${currentLand.area.toLocaleString()} متر مربع`);
    updateElement('landLicense', currentLand.currentLicense);
    
    const statusElement = document.getElementById('landStatus');
    if (statusElement) {
        statusElement.textContent = currentLand.status;
        if (currentLand.status === 'غير مستغلة') {
            statusElement.classList.add('unused');
        }
    }
}

// تحديث عنصر في الصفحة
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

// تهيئة خريطة قطعة الأرض
function initializeLandMap() {
    const mapContainer = document.getElementById('landMap');
    if (!mapContainer) return;

    map = L.map('landMap', {
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
        minZoom: 12,
        maxZoom: 18
    }).setView([currentLand.location.lat, currentLand.location.lng], 15);

    // إضافة طبقة الخريطة
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // إضافة علامة الموقع
    marker = L.marker([currentLand.location.lat, currentLand.location.lng])
        .addTo(map)
        .bindPopup(createMapPopup());

    // إضافة دائرة حول الموقع
    L.circle([currentLand.location.lat, currentLand.location.lng], {
        color: '#0ea5e9',
        fillColor: '#0ea5e9',
        fillOpacity: 0.1,
        radius: 500
    }).addTo(map);

    // تحديث حجم الخريطة
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// إنشاء محتوى النافذة المنبثقة للخريطة
function createMapPopup() {
    return `
        <div class="map-popup">
            <h3>${currentLand.name}</h3>
            <p>المساحة: ${currentLand.area.toLocaleString()} متر مربع</p>
            <p>الحالة: ${currentLand.status}</p>
        </div>
    `;
}

// تحديث المعلومات التفصيلية
function updateDetailedInformation() {
    updateFacilities();
    updateChallenges();
    updateJustifications();
    updateVision2030();
}

// تحديث المرافق القريبة
function updateFacilities() {
    const facilitiesGrid = document.querySelector('.facilities-grid');
    if (!facilitiesGrid || !currentLand.nearbyFacilities) return;

    facilitiesGrid.innerHTML = currentLand.nearbyFacilities.map(facility => `
        <div class="facility-card">
            <i class="fas ${getFacilityIcon(facility.type)}"></i>
            <h3>${facility.name}</h3>
            <p>${facility.distance}</p>
        </div>
    `).join('');
}

// تحديث التحديات
function updateChallenges() {
    const challengesSection = document.querySelector('.challenges-section');
    if (!challengesSection || !currentLand.currentChallenges) return;

    const list = document.createElement('ul');
    list.className = 'challenges-list';
    
    list.innerHTML = currentLand.currentChallenges.map(challenge => `
        <li><i class="fas fa-exclamation-circle"></i> ${challenge}</li>
    `).join('');

    replaceOrAppendElement(challengesSection, '.challenges-list', list);
}

// تحديث المبررات
function updateJustifications() {
    const justificationGrid = document.querySelector('.justification-grid');
    if (!justificationGrid || !currentLand.justifications) return;

    const categories = {
        economic: { icon: 'fa-chart-line', title: 'مبررات اقتصادية' },
        social: { icon: 'fa-users', title: 'مبررات اجتماعية' },
        environmental: { icon: 'fa-leaf', title: 'مبررات بيئية' }
    };

    justificationGrid.innerHTML = Object.entries(categories)
        .map(([category, info]) => {
            const categoryJustifications = currentLand.justifications.filter(j => j.type === category);
            if (categoryJustifications.length === 0) return '';

            return `
                <div class="justification-card">
                    <i class="fas ${info.icon}"></i>
                    <h3>${info.title}</h3>
                    <div class="justification-items">
                        ${categoryJustifications.map(j => `
                            <div class="justification-item">
                                <h4>${j.title}</h4>
                                <p>${j.details}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        })
        .join('');
}

// تحديث التوافق مع رؤية 2030
function updateVision2030() {
    const visionSection = document.querySelector('.vision2030-section');
    if (!visionSection || !currentLand.vision2030Alignment) return;

    const list = document.createElement('ul');
    list.className = 'vision-list';
    
    list.innerHTML = currentLand.vision2030Alignment.map(item => `
        <li>
            <i class="fas fa-check-circle"></i>
            <div class="vision-content">
                <h4>${item.title}</h4>
                <p>${item.details}</p>
            </div>
        </li>
    `).join('');

    replaceOrAppendElement(visionSection, '.vision-list', list);
}

// استبدال أو إضافة عنصر
function replaceOrAppendElement(parent, selector, newElement) {
    const existingElement = parent.querySelector(selector);
    if (existingElement) {
        existingElement.replaceWith(newElement);
    } else {
        parent.appendChild(newElement);
    }
}

// الحصول على أيقونة المرافق
function getFacilityIcon(type) {
    const icons = {
        school: 'fa-graduation-cap',
        hospital: 'fa-hospital',
        shopping: 'fa-shopping-cart',
        park: 'fa-tree',
        transport: 'fa-bus'
    };
    return icons[type] || 'fa-building';
}

// الحصول على أيقونة التأثير الاجتماعي
function getSocialImpactIcon(type) {
    const icons = {
        housing: 'fa-home',
        community: 'fa-users',
        quality: 'fa-star',
        accessibility: 'fa-wheelchair'
    };
    return icons[type] || 'fa-heart';
}

// الحصول على أيقونة التأثير البيئي
function getEnvironmentalImpactIcon(type) {
    const icons = {
        pollution: 'fa-leaf',
        energy: 'fa-solar-panel',
        waste: 'fa-recycle',
        green: 'fa-tree'
    };
    return icons[type] || 'fa-globe';
} 