$(document).ready(function() {
    // تهيئة القائمة المتحركة
    initializeMobileMenu();
    
    // تهيئة التمرير السلس
    initializeSmoothScroll();

    // تحديث نظرة عامة
    updateOverview();

    // عرض قطع الأراضي
    displayLands();

    // تهيئة تأثيرات التمرير
    initializeScrollEffects();

    // معالجة نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            this.reset();
        });
    }
});

// تهيئة القائمة المتحركة
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// تهيئة التمرير السلس
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// تحديث نظرة عامة
function updateOverview(data) {
    if (!landsData || !landsData.overview) return;

    const overview = landsData.overview;
    
    // تحديث الإحصائيات العامة
    updateElement('totalArea', `${overview.totalArea.toLocaleString()} متر مربع`);
    updateElement('totalLands', `${overview.totalLands} قطعة`);
    updateElement('proposedUse', overview.proposedUse);
    updateElement('targetResidents', `${overview.targetResidents} عائلة`);
    updateElement('currentUse', overview.currentUse);

    // تحديث التأثير الاقتصادي
    updateElement('economicJobs', overview.economicImpact.jobs);
    updateElement('economicInvestment', overview.economicImpact.investment);
    updateElement('economicValue', overview.economicImpact.valueIncrease);
    updateElement('yearlyRevenue', overview.economicImpact.yearlyRevenue);
    updateElement('constructionJobs', overview.economicImpact.constructionJobs);
    updateElement('permanentJobs', overview.economicImpact.permanentJobs);

    // تحديث الجدول الزمني للمشروع
    const timelineContent = document.querySelector('.timeline-content');
    if (timelineContent) {
        const timeline = overview.projectTimeline;
        timelineContent.innerHTML = `
            <div class="timeline-item">
                <i class="fas fa-calendar"></i>
                <span>مرحلة التخطيط: ${timeline.planningPhase}</span>
            </div>
            <div class="timeline-item">
                <i class="fas fa-hard-hat"></i>
                <span>مرحلة البناء: ${timeline.constructionPhase}</span>
            </div>
            <div class="timeline-item">
                <i class="fas fa-check-circle"></i>
                <span>تاريخ الإنجاز: ${timeline.completionDate}</span>
            </div>
            <div class="timeline-item">
                <i class="fas fa-truck-loading"></i>
                <span>مرحلة التسليم: ${timeline.deliveryPhase}</span>
            </div>
            <div class="timeline-item">
                <i class="fas fa-shield-alt"></i>
                <span>فترة الضمان: ${timeline.warrantyPeriod}</span>
            </div>
        `;
    }

    // تحديث التأثير الاجتماعي
    updateElement('housing', overview.socialImpact.housing);
    updateElement('community', overview.socialImpact.community);
    updateElement('quality', overview.socialImpact.quality);
    updateElement('services', overview.socialImpact.services);
    updateElement('transportation', overview.socialImpact.transportation);
    updateElement('facilities', overview.socialImpact.facilities);

    // تحديث التأثير البيئي
    updateElement('pollution', overview.environmentalImpact.pollution);
    updateElement('energy', overview.environmentalImpact.energy);
    updateElement('green', overview.environmentalImpact.green);
    updateElement('waste', overview.environmentalImpact.waste);
    updateElement('water', overview.environmentalImpact.water);
    updateElement('sustainability', overview.environmentalImpact.sustainability);

    // تحديث التوافق مع رؤية 2030
    updateElement('vision2030Housing', overview.vision2030.housing);
    updateElement('vision2030Economy', overview.vision2030.economy);
    updateElement('vision2030Society', overview.vision2030.society);
    updateElement('vision2030Environment', overview.vision2030.environment);
    updateElement('vision2030Development', overview.vision2030.development);
    updateElement('vision2030Investment', overview.vision2030.investment);

    // Update Challenges
    const challengesContainer = document.querySelector('.challenges-content');
    if (challengesContainer && overview.challenges) {
        challengesContainer.innerHTML = '';
        
        Object.entries(overview.challenges).forEach(([category, items]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'challenge-category';
            
            const icon = getChallengeIcon(category);
            const title = getChallengeTitle(category);
            
            categoryDiv.innerHTML = `
                <h3><i class="${icon}"></i> ${title}</h3>
                <ul>
                    ${items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            
            challengesContainer.appendChild(categoryDiv);
        });
    }

    // Update Motivations
    const motivations = overview.motivations;
    if (motivations) {
        Object.entries(motivations).forEach(([category, items]) => {
            const container = document.querySelector(`.${category}-motivation .motivation-list`);
            if (container) {
                container.innerHTML = items.map(item => `<li>${item}</li>`).join('');
            }
        });
    }
}

// تحديث عنصر في الصفحة
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

// عرض قطع الأراضي
function displayLands() {
    const landsContainer = document.querySelector('.lands-grid');
    if (!landsContainer || !landsData || !landsData.lands) return;

    landsContainer.innerHTML = '';

    landsData.lands.forEach((land, index) => {
        const card = createLandCard(land);
        landsContainer.appendChild(card);

        // تهيئة الخريطة بعد إضافة البطاقة للصفحة
        setTimeout(() => initLandMap(land), 100);

        // إضافة وظيفة التوسيع
        setupExpandFunctionality(card, land, landsContainer);
    });
}

// إنشاء بطاقة قطعة أرض
function createLandCard(land) {
    const card = document.createElement('div');
    card.className = 'land-card';
    card.innerHTML = `
        <div class="main-content">
            <div class="land-map" id="map-${land.id}"></div>
            <div class="land-info">
                <h3>${land.name}</h3>
                ${createLandDetails(land)}
                ${createLandActions(land)}
            </div>
        </div>
        <div class="land-expanded-content">
            ${createNearbyFacilities(land)}
            ${createChallenges(land)}
            ${createJustifications(land)}
            ${createVision2030(land)}
        </div>
    `;
    return card;
}

// إنشاء تفاصيل قطعة الأرض
function createLandDetails(land) {
    return `
        <div class="land-details">
            <p><i class="fas fa-ruler-combined"></i> المساحة: ${land.area.toLocaleString()} متر مربع</p>
            <p><i class="fas fa-file-alt"></i> الترخيص الحالي: ${land.currentLicense}</p>
            <p><i class="fas fa-info-circle"></i> الحالة: <span class="status ${land.status === 'غير مستغلة' ? 'unused' : ''}">${land.status}</span></p>
        </div>
    `;
}

// إنشاء أزرار الإجراءات
function createLandActions(land) {
    return `
        <div class="land-actions">
            <a href="land-details.html?id=${land.id}" class="btn btn-primary">
                <i class="fas fa-eye"></i>التفاصيل
            </a>
            <button class="btn btn-secondary expand-card">
                <i class="fas fa-chevron-down"></i> المزيد
            </button>
        </div>
    `;
}

// إنشاء قسم المرافق القريبة
function createNearbyFacilities(land) {
    return `
        <div class="nearby-facilities-section">
            <h4><i class="fas fa-map-marker-alt"></i> المرافق القريبة</h4>
            <ul>
                ${land.nearbyFacilities.map(facility => `
                    <li>
                        <i class="fas ${getFacilityIcon(facility.type)}"></i>
                        ${facility.name}
                        <small>${facility.distance}</small>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// إنشاء قسم التحديات
function createChallenges(land) {
    return `
        <div class="challenges-section">
            <h4><i class="fas fa-exclamation-triangle"></i> التحديات الحالية</h4>
            <ul>
                ${land.currentChallenges.map(challenge => `
                    <li><i class="fas fa-exclamation-circle"></i> ${challenge}</li>
                `).join('')}
            </ul>
        </div>
    `;
}

// إنشاء قسم المبررات
function createJustifications(land) {
    return `
        <div class="justifications-section">
            <h4><i class="fas fa-check-circle"></i> المبررات</h4>
            <div class="justification-categories">
                ${generateJustificationsHTML(land.justifications)}
            </div>
        </div>
    `;
}

// إنشاء قسم رؤية 2030
function createVision2030(land) {
    return `
        <div class="vision2030-section">
            <h4><i class="fas fa-crown"></i> الانسجام مع رؤية 2030</h4>
            <ul>
                ${land.vision2030Alignment.map(goal => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <div class="vision-content">
                            <h4>${goal.title}</h4>
                            <p>${goal.details}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// إعداد وظيفة التوسيع
function setupExpandFunctionality(card, land, container) {
    const expandButton = card.querySelector('.expand-card');
    if (!expandButton) return;

    expandButton.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = card.classList.contains('expanded');
        
        // إغلاق البطاقات الأخرى
        closeOtherCards(card, container);

        // تبديل حالة البطاقة الحالية
        toggleCardExpansion(card, expandButton, isExpanded);

        // تحديث الخريطة
        updateMapSize(card, land);

        // تحديث مواضع البطاقات
        updateCardPositions(card, container, isExpanded);

        // التمرير إلى البطاقة
        scrollToCard(card, isExpanded);
    });
}

// إغلاق البطاقات الأخرى
function closeOtherCards(currentCard, container) {
    container.querySelectorAll('.land-card.expanded').forEach(card => {
        if (card !== currentCard) {
            const button = card.querySelector('.expand-card');
            if (button) {
                const icon = button.querySelector('i');
                if (icon) icon.className = 'fas fa-chevron-down';
            }
            card.classList.remove('expanded');
        }
    });
}

// تبديل حالة توسيع البطاقة
function toggleCardExpansion(card, button, isExpanded) {
    if (!isExpanded) {
        card.classList.add('expanded');
        const icon = button.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-up';
        
        // تحريك المحتوى الموسع
        const expandedContent = card.querySelector('.land-expanded-content');
        if (expandedContent) {
            expandedContent.style.display = 'block';
            setTimeout(() => {
                expandedContent.style.opacity = '1';
                expandedContent.style.transform = 'translateY(0)';
            }, 10);
        }
    } else {
        const icon = button.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-down';
        
        // إخفاء المحتوى الموسع بتأثير
        const expandedContent = card.querySelector('.land-expanded-content');
        if (expandedContent) {
            expandedContent.style.opacity = '0';
            expandedContent.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                card.classList.remove('expanded');
                expandedContent.style.display = 'none';
            }, 300);
        }
    }
}

// تحديث حجم الخريطة
function updateMapSize(card, land) {
    const mapElement = card.querySelector(`#map-${land.id}`);
    if (mapElement && mapElement._leaflet_map) {
        setTimeout(() => {
            mapElement._leaflet_map.invalidateSize();
        }, 400);
    }
}

// تحديث مواضع البطاقات
function updateCardPositions(card, container, isExpanded) {
    const cards = Array.from(container.children);
    const cardIndex = cards.indexOf(card);
    const cardsPerRow = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;
    
    if (!isExpanded) {
        const currentRow = Math.floor(cardIndex / cardsPerRow);
        const nextRowStart = (currentRow + 1) * cardsPerRow;
        
        cards.forEach((otherCard, index) => {
            if (index >= nextRowStart) {
                otherCard.style.transform = 'translateY(0)';
                otherCard.style.transition = 'transform 0.3s ease';
            }
        });
    } else {
        cards.forEach((otherCard, index) => {
            if (index > cardIndex) {
                otherCard.style.transform = '';
                otherCard.style.transition = '';
            }
        });
    }
}

// التمرير إلى البطاقة
function scrollToCard(card, isExpanded) {
    if (!isExpanded) {
        setTimeout(() => {
            const headerOffset = 80;
            const cardPosition = card.getBoundingClientRect().top;
            const offsetPosition = cardPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// تهيئة تأثيرات التمرير
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scroll = window.scrollY;
        
        // تغيير شفافية القائمة العلوية
        updateNavbarOpacity(scroll);

        // تحريك العناصر عند التمرير
        animateElementsOnScroll();
    });
}

// تحديث شفافية القائمة العلوية
function updateNavbarOpacity(scroll) {
    const mainNav = document.querySelector('.main-nav');
    if (mainNav) {
        mainNav.style.background = scroll > 100 ? 'rgba(255,255,255,0.95)' : 'var(--white)';
    }
}

// تحريك العناصر عند التمرير
function animateElementsOnScroll() {
    document.querySelectorAll('.overview-card, .land-card').forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = elementTop + element.offsetHeight;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            element.classList.add('fade-in');
        }
    });
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

// توليد HTML للمبررات
function generateJustificationsHTML(justifications) {
    const categories = {
        economic: { title: 'اقتصادية', icon: 'fa-chart-line' },
        social: { title: 'اجتماعية', icon: 'fa-users' },
        environmental: { title: 'بيئية', icon: 'fa-leaf' }
    };

    return Object.entries(categories).map(([category, info]) => {
        const categoryJustifications = justifications.filter(j => j.type === category);
        if (categoryJustifications.length === 0) return '';

        return `
            <div class="${category}">
                <h5><i class="fas ${info.icon}"></i> ${info.title}</h5>
                <ul>
                    ${categoryJustifications.map(j => `
                        <li title="${j.details}">${j.title}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

// تهيئة الخريطة لكل قطعة أرض
function initLandMap(land) {
    const mapContainer = document.getElementById(`map-${land.id}`);
    if (!mapContainer) return;

    const map = L.map(mapContainer, {
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
        minZoom: 12,
        maxZoom: 18
    }).setView([land.location.lat, land.location.lng], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // إضافة علامة للموقع مع نافذة منبثقة
    const marker = L.marker([land.location.lat, land.location.lng])
        .addTo(map)
        .bindPopup(`
            <div class="map-popup">
                <h3>${land.name}</h3>
                <p>المساحة: ${land.area.toLocaleString()} متر مربع</p>
                <a href="land-details.html?id=${land.id}" class="popup-link">
                    <i class="fas fa-external-link-alt"></i>
                    عرض التفاصيل
                </a>
            </div>
        `);

    // إضافة حدود قطعة الأرض إذا كانت متوفرة
    if (land.boundaries) {
        L.polygon(land.boundaries, {
            color: '#0ea5e9',
            fillColor: '#0ea5e9',
            fillOpacity: 0.2,
            weight: 2
        }).addTo(map);
    }

    // إضافة دائرة حول الموقع
    L.circle([land.location.lat, land.location.lng], {
        color: '#0ea5e9',
        fillColor: '#0ea5e9',
        fillOpacity: 0.1,
        radius: 500
    }).addTo(map);

    // تحديث الخريطة عند توسيع البطاقة
    const card = mapContainer.closest('.land-card');
    if (card) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    map.invalidateSize();
                }
            });
        });
        observer.observe(card, { attributes: true });
    }
}

function getChallengeIcon(category) {
    const icons = {
        economic: 'fas fa-coins',
        social: 'fas fa-users',
        environmental: 'fas fa-leaf',
        organizational: 'fas fa-sitemap'
    };
    return icons[category] || 'fas fa-exclamation-circle';
}

function getChallengeTitle(category) {
    const titles = {
        economic: 'التحديات الاقتصادية',
        social: 'التحديات الاجتماعية',
        environmental: 'التحديات البيئية',
        organizational: 'التحديات التنظيمية'
    };
    return titles[category] || category;
} 