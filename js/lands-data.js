const landsData = {
    overview: {
        totalArea: 250000,
        totalLands: 15,
        targetResidents: 1500,
        economicImpact: {
            jobs: 800,
            investment: "120 مليون ريال",
            valueIncrease: "45%",
            yearlyRevenue: "25 مليون ريال",
            constructionJobs: 1200,
            permanentJobs: 500
        },
        currentUse: "تجاري",
        proposedUse: "سكني",
        projectTimeline: {
            planningPhase: "6 أشهر",
            constructionPhase: "24 شهر",
            completionDate: "2026",
            deliveryPhase: "3 أشهر",
            warrantyPeriod: "12 شهر"
        },
        challenges: {
            economic: [
                "انخفاض العائد الاستثماري للأراضي التجارية",
                "ارتفاع تكاليف النقل للعمالة",
                "تراجع الطلب على المساحات التجارية",
                "خسائر مالية بسبب عدم الاستغلال"
            ],
            social: [
                "نقص السكن المناسب للعمالة",
                "تشتت مواقع سكن الموظفين",
                "صعوبة توفير خدمات متكاملة",
                "تأثير سلبي على جودة حياة العمال"
            ],
            environmental: [
                "زيادة الانبعاثات الكربونية من وسائل النقل",
                "عدم كفاءة استخدام الموارد",
                "غياب المساحات الخضراء",
                "صعوبة تطبيق معايير الاستدامة"
            ],
            organizational: [
                "تعقيد إجراءات تغيير الاستخدام",
                "صعوبة إدارة المرافق المشتركة",
                "تحديات في تنسيق الخدمات",
                "تعدد الجهات المعنية بالموافقات"
            ]
        },
        motivations: {
            economic: [
                "خلق فرص عمل جديدة (800+ وظيفة)",
                "زيادة الاستثمارات المحلية (120 مليون ريال)",
                "تنشيط القطاع العقاري وزيادة القيمة 45%",
                "تحسين العائد الاستثماري السنوي",
                "خفض تكاليف التشغيل والصيانة"
            ],
            social: [
                "تحسين جودة الحياة للموظفين وعائلاتهم",
                "توفير سكن مناسب ومستدام",
                "تعزيز التماسك الاجتماعي والمجتمعي",
                "تقليل وقت وتكلفة التنقل",
                "توفير مرافق ترفيهية واجتماعية"
            ],
            environmental: [
                "تقليل التلوث البيئي والانبعاثات",
                "تحسين كفاءة استخدام الطاقة 40%",
                "زيادة المساحات الخضراء 50,000 م²",
                "تطبيق معايير المباني الخضراء",
                "تحسين إدارة النفايات والموارد"
            ],
            identity: [
                "تعزيز الهوية السعودية في التصميم العمراني",
                "تطبيق نمط العمارة الإسلامية التقليدية",
                "دعم السياحة الثقافية والتراثية",
                "تنمية الحرف والصناعات التقليدية",
                "تعزيز القيم الاجتماعية السعودية"
            ],
            vision2030: [
                "تحقيق أهداف التنمية المستدامة",
                "تحسين جودة الحياة وتطوير المدن",
                "تعزيز الاقتصاد المحلي والاستثمار",
                "دعم المشاريع الصغيرة والمتوسطة",
                "تطوير القطاع العقاري والإسكان"
            ]
        },
        socialImpact: {
            housing: "توفير 1500 وحدة سكنية للعمالة",
            community: "إنشاء 5 مراكز مجتمعية",
            quality: "تحسين جودة الحياة للموظفين",
            services: "توفير 12 مرفق خدمي",
            transportation: "تقليل وقت التنقل بنسبة 60%",
            facilities: "إنشاء 8 مرافق ترفيهية"
        },
        environmentalImpact: {
            pollution: "تقليل انبعاثات الكربون بنسبة 40%",
            energy: "استخدام الطاقة المتجددة بنسبة 30%",
            green: "إضافة 50,000 متر مربع من المساحات الخضراء",
            waste: "تطبيق نظام إدارة النفايات المستدام",
            water: "تقليل استهلاك المياه بنسبة 35%",
            sustainability: "تطبيق معايير المباني الخضراء"
        },
        vision2030: {
            housing: "المساهمة في توفير سكن مناسب للمواطنين",
            economy: "تعزيز التنمية الاقتصادية المستدامة",
            society: "تحسين جودة الحياة وتعزيز الترابط المجتمعي",
            environment: "تطبيق معايير الاستدامة البيئية",
            development: "تطوير البنية التحتية وتحسين المرافق",
            investment: "جذب الاستثمارات وتنويع الاقتصاد"
        }
    },
    lands: [
        {
            id: 1,
            name: "قطعة الأرض الأولى - منطقة الصناعات",
            area: 10000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7136,
                lng: 46.6753
            },
            nearbyFacilities: [
                { type: "school", name: "مدرسة النور", distance: "500 متر" },
                { type: "hospital", name: "مستشفى الملك فهد", distance: "1.2 كم" },
                { type: "transport", name: "محطة قطار الرياض", distance: "800 متر" },
                { type: "shopping", name: "مركز تجاري", distance: "300 متر" }
            ],
            currentChallenges: [
                "انخفاض الطلب على المساحات التجارية في المنطقة",
                "ارتفاع تكاليف الصيانة للمبنى التجاري",
                "عدم توافق المبنى مع متطلبات كود البناء الجديد",
                "صعوبة تأجير المساحات التجارية بسبب المنافسة",
                "مشاكل في مواقف السيارات وازدحام المنطقة"
            ],
            justifications: [
                { 
                    type: "economic", 
                    title: "زيادة القيمة العقارية",
                    details: "توقع زيادة بنسبة 40% في القيمة السوقية"
                },
                { 
                    type: "economic", 
                    title: "تحسين التدفق النقدي",
                    details: "زيادة نسبة الإشغال إلى 95%"
                },
                { 
                    type: "social", 
                    title: "توفير سكن للعمالة",
                    details: "استيعاب 200 موظف في موقع قريب من العمل"
                },
                { 
                    type: "social", 
                    title: "تحسين جودة الحياة",
                    details: "تقليل وقت التنقل وتكاليف المواصلات"
                },
                { 
                    type: "environmental", 
                    title: "تقليل البصمة الكربونية",
                    details: "خفض انبعاثات الكربون بنسبة 30%"
                },
                { 
                    type: "environmental", 
                    title: "تحسين كفاءة الطاقة",
                    details: "استخدام تقنيات البناء الأخضر"
                }
            ],
            vision2030Alignment: [
                { 
                    title: "تحسين جودة الحياة",
                    details: "المساهمة في رفع مستوى معيشة العاملين"
                },
                { 
                    title: "الاستدامة البيئية",
                    details: "تطبيق معايير المباني الخضراء"
                },
                { 
                    title: "تطوير القطاع العقاري",
                    details: "تحسين استغلال الأصول العقارية"
                }
            ]
        },
        {
            id: 2,
            name: "قطعة الأرض الثانية - المنطقة التجارية",
            area: 12000,
            currentLicense: "فندقي",
            status: "غير مستغلة",
            location: {
                lat: 24.7236,
                lng: 46.6853
            },
            nearbyFacilities: [
                { type: "shopping", name: "مركز الرياض التجاري", distance: "200 متر" },
                { type: "park", name: "حديقة الملك عبدالله", distance: "500 متر" },
                { type: "transport", name: "محطة النقل العام", distance: "1 كم" },
                { type: "hospital", name: "مستشفى المملكة", distance: "1.5 كم" }
            ],
            currentChallenges: [
                "انخفاض معدل الإشغال في المنطقة",
                "تكاليف صيانة مرتفعة للمباني القائمة",
                "منافسة شديدة في السوق الفندقي",
                "عدم ملاءمة التصميم الحالي للاحتياجات"
            ],
            justifications: [
                {
                    type: "economic",
                    title: "تحسين العائد الاستثماري",
                    details: "زيادة العائد السنوي بنسبة 35%"
                },
                {
                    type: "economic",
                    title: "خفض تكاليف التشغيل",
                    details: "توفير 25% من تكاليف التشغيل السنوية"
                },
                {
                    type: "social",
                    title: "توفير مساكن للعائلات",
                    details: "توفير 150 وحدة سكنية للموظفين"
                },
                {
                    type: "environmental",
                    title: "تقليل استهلاك الطاقة",
                    details: "خفض استهلاك الطاقة بنسبة 40%"
                }
            ],
            vision2030Alignment: [
                {
                    title: "تطوير القطاع العقاري",
                    details: "المساهمة في تنويع الاستخدامات العقارية"
                },
                {
                    title: "تحسين البنية التحتية",
                    details: "تطوير المرافق والخدمات في المنطقة"
                }
            ]
        },
        {
            id: 3,
            name: "قطعة الأرض الثالثة - المنطقة السكنية",
            area: 8000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7336,
                lng: 46.6953
            },
            nearbyFacilities: [
                { type: "school", name: "مدرسة الفيصل", distance: "300 متر" },
                { type: "hospital", name: "مستشفى الملك خالد", distance: "900 متر" },
                { type: "shopping", name: "سوق الرياض", distance: "600 متر" },
                { type: "park", name: "منتزه الأمير سلطان", distance: "400 متر" }
            ],
            currentChallenges: [
                "عدم وجود مشاريع تجارية ناجحة في المنطقة",
                "تدهور حالة المباني القائمة",
                "صعوبة في التأجير بسبب الموقع",
                "حاجة المنطقة للتطوير الشامل"
            ],
            justifications: [
                {
                    type: "economic",
                    title: "زيادة القيمة العقارية",
                    details: "ارتفاع متوقع في القيمة بنسبة 45%"
                },
                {
                    type: "social",
                    title: "توفير سكن للعمالة",
                    details: "توفير 180 وحدة سكنية للموظفين"
                },
                {
                    type: "environmental",
                    title: "تحسين كفاءة الطاقة",
                    details: "استخدام أنظمة الطاقة المتجددة"
                }
            ],
            vision2030Alignment: [
                {
                    title: "تحسين جودة الحياة",
                    details: "توفير بيئة سكنية متكاملة"
                },
                {
                    title: "تعزيز التنمية المستدامة",
                    details: "تطبيق معايير الاستدامة في التطوير"
                }
            ]
        },
        {
            id: 4,
            name: "قطعة الأرض الرابعة - المنطقة الحيوية",
            area: 15000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7436,
                lng: 46.7053
            },
            nearbyFacilities: [
                { type: "transport", name: "محطة المترو الرئيسية", distance: "400 متر" },
                { type: "shopping", name: "المركز التجاري الكبير", distance: "300 متر" },
                { type: "hospital", name: "المستشفى التخصصي", distance: "1 كم" },
                { type: "park", name: "الحديقة المركزية", distance: "500 متر" }
            ],
            currentChallenges: [
                "تكدس المباني التجارية في المنطقة",
                "مشاكل في البنية التحتية",
                "حاجة المنطقة لمشاريع سكنية",
                "ارتفاع تكاليف التطوير التجاري"
            ],
            justifications: [
                {
                    type: "economic",
                    title: "تنويع الاستثمار",
                    details: "تحقيق عائد استثماري مستدام"
                },
                {
                    type: "social",
                    title: "تلبية احتياجات السكان",
                    details: "توفير 250 وحدة سكنية"
                },
                {
                    type: "environmental",
                    title: "تطوير مستدام",
                    details: "تطبيق معايير المباني الخضراء"
                }
            ],
            vision2030Alignment: [
                {
                    title: "التنمية العمرانية",
                    details: "تطوير المناطق الحضرية بشكل متوازن"
                },
                {
                    title: "جودة الحياة",
                    details: "تحسين المرافق والخدمات السكنية"
                }
            ]
        },
        {
            id: 5,
            name: "قطعة الأرض الخامسة - منطقة الواحة",
            area: 18500,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7136,
                lng: 46.6753
            },
            nearbyFacilities: [
                { name: "محطة مترو", distance: "500 متر", type: "transport" },
                { name: "مركز صحي", distance: "1 كم", type: "hospital" },
                { name: "حديقة عامة", distance: "300 متر", type: "park" }
            ],
            currentChallenges: [
                "مساحة تجارية غير مستغلة",
                "تكاليف صيانة عالية",
                "موقع غير جذاب للمستأجرين",
                "عدم توافق مع احتياجات المنطقة"
            ],
            justifications: [
                { type: "economic", title: "تحسين العائد الاستثماري", details: "زيادة متوقعة في العائد بنسبة 40%" },
                { type: "social", title: "توفير سكن للعائلات", details: "إسكان 120 عائلة" },
                { type: "environmental", title: "زيادة المساحات الخضراء", details: "إضافة 2000 متر مربع من المساحات الخضراء" }
            ],
            vision2030Alignment: [
                { title: "جودة الحياة", details: "تحسين مستوى المعيشة للسكان" },
                { title: "الاستدامة", details: "تطبيق معايير المباني الخضراء" }
            ]
        },
        {
            id: 6,
            name: "قطعة الأرض السادسة - منطقة النخيل",
            area: 22000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7236,
                lng: 46.6853
            },
            nearbyFacilities: [
                { name: "مدرسة ثانوية", distance: "800 متر", type: "school" },
                { name: "مركز تسوق", distance: "1.2 كم", type: "shopping" },
                { name: "مسجد", distance: "400 متر", type: "mosque" }
            ],
            currentChallenges: [
                "استغلال جزئي للمساحة",
                "حاجة لتجديد البنية التحتية",
                "عدم تلبية احتياجات المنطقة",
                "تكاليف تشغيل مرتفعة"
            ],
            justifications: [
                { type: "economic", title: "خفض تكاليف التشغيل", details: "توفير 30% من تكاليف التشغيل" },
                { type: "social", title: "تعزيز الترابط المجتمعي", details: "إنشاء مرافق اجتماعية" },
                { type: "environmental", title: "تقليل استهلاك الطاقة", details: "استخدام تقنيات موفرة للطاقة" }
            ],
            vision2030Alignment: [
                { title: "التنمية المستدامة", details: "تطوير عمراني مستدام" },
                { title: "جودة الحياة", details: "توفير بيئة سكنية متكاملة" }
            ]
        },
        {
            id: 7,
            name: "قطعة الأرض السابعة - منطقة الأفق",
            area: 19800,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7336,
                lng: 46.6953
            },
            nearbyFacilities: [
                { name: "محطة حافلات", distance: "600 متر", type: "transport" },
                { name: "مستشفى", distance: "2 كم", type: "hospital" },
                { name: "حديقة", distance: "500 متر", type: "park" }
            ],
            currentChallenges: [
                "موقع غير مستغل",
                "تحديات في الوصول",
                "نقص في الخدمات",
                "حاجة لتطوير البنية التحتية"
            ],
            justifications: [
                { type: "economic", title: "فرص استثمارية جديدة", details: "إنشاء وحدات سكنية عصرية" },
                { type: "social", title: "تحسين جودة الحياة", details: "توفير مرافق ترفيهية" },
                { type: "environmental", title: "تخضير المنطقة", details: "زيادة المساحات الخضراء" }
            ],
            vision2030Alignment: [
                { title: "تطوير القطاع العقاري", details: "تنويع الخيارات السكنية" },
                { title: "الاستدامة البيئية", details: "تطبيق معايير البناء الأخضر" }
            ]
        },
        {
            id: 8,
            name: "قطعة الأرض الثامنة - منطقة السلام",
            area: 21000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7436,
                lng: 46.7053
            },
            nearbyFacilities: [
                { name: "مدرسة ابتدائية", distance: "700 متر", type: "school" },
                { name: "سوق تجاري", distance: "1 كم", type: "shopping" },
                { name: "ملعب رياضي", distance: "800 متر", type: "sports" }
            ],
            currentChallenges: [
                "استخدام غير فعال للمساحة",
                "تكاليف صيانة مرتفعة",
                "عدم تلبية احتياجات السكان",
                "ضعف البنية التحتية"
            ],
            justifications: [
                { type: "economic", title: "تحسين كفاءة الاستثمار", details: "زيادة العائد الاستثماري" },
                { type: "social", title: "تعزيز الروابط المجتمعية", details: "إنشاء مساحات مشتركة" },
                { type: "environmental", title: "تحسين البيئة", details: "تقليل البصمة الكربونية" }
            ],
            vision2030Alignment: [
                { title: "تنمية المجتمع", details: "بناء مجتمع حيوي" },
                { title: "الاستدامة", details: "تطوير مستدام للمنطقة" }
            ]
        },
        {
            id: 9,
            name: "قطعة الأرض التاسعة - منطقة الريحان",
            area: 17500,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7536,
                lng: 46.7153
            },
            nearbyFacilities: [
                { name: "مركز صحي", distance: "900 متر", type: "hospital" },
                { name: "حديقة عامة", distance: "400 متر", type: "park" },
                { name: "محطة وقود", distance: "600 متر", type: "gas" }
            ],
            currentChallenges: [
                "موقع غير مستغل",
                "نقص في الخدمات الأساسية",
                "صعوبة الوصول",
                "تحديات بيئية"
            ],
            justifications: [
                { type: "economic", title: "تنويع الاستثمار", details: "إضافة قيمة للمنطقة" },
                { type: "social", title: "تحسين نمط الحياة", details: "توفير مساحات مجتمعية" },
                { type: "environmental", title: "التخضير", details: "زيادة المساحات الخضراء" }
            ],
            vision2030Alignment: [
                { title: "تطوير المدن", details: "تحسين المشهد الحضري" },
                { title: "جودة الحياة", details: "تعزيز نمط الحياة الصحي" }
            ]
        },
        {
            id: 10,
            name: "قطعة الأرض العاشرة - منطقة المستقبل",
            area: 23000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7636,
                lng: 46.7253
            },
            nearbyFacilities: [
                { name: "مجمع تعليمي", distance: "1 كم", type: "school" },
                { name: "مركز تجاري", distance: "1.5 كم", type: "shopping" },
                { name: "محطة مترو", distance: "800 متر", type: "transport" }
            ],
            currentChallenges: [
                "استغلال غير أمثل",
                "تكاليف تشغيل عالية",
                "حاجة للتطوير",
                "ضعف البنية التحتية"
            ],
            justifications: [
                { type: "economic", title: "تحسين الاستثمار", details: "زيادة القيمة السوقية" },
                { type: "social", title: "تطوير المجتمع", details: "خلق بيئة حيوية" },
                { type: "environmental", title: "الاستدامة", details: "تقليل الأثر البيئي" }
            ],
            vision2030Alignment: [
                { title: "التنمية المستدامة", details: "تطوير عمراني مستدام" },
                { title: "الازدهار الاقتصادي", details: "تعزيز النمو الاقتصادي" }
            ]
        },
        {
            id: 11,
            name: "قطعة الأرض الحادية عشر - منطقة الأمل",
            area: 20500,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7736,
                lng: 46.7353
            },
            nearbyFacilities: [
                { name: "مستشفى", distance: "2.5 كم", type: "hospital" },
                { name: "مدرسة", distance: "1 كم", type: "school" },
                { name: "حديقة", distance: "300 متر", type: "park" }
            ],
            currentChallenges: [
                "عدم الاستغلال الأمثل",
                "نقص الخدمات",
                "تحديات لوجستية",
                "حاجة للتطوير"
            ],
            justifications: [
                { type: "economic", title: "تعزيز الاستثمار", details: "تحسين العائد المالي" },
                { type: "social", title: "تنمية المجتمع", details: "بناء مجتمع متكامل" },
                { type: "environmental", title: "حماية البيئة", details: "تقليل التلوث" }
            ],
            vision2030Alignment: [
                { title: "جودة الحياة", details: "تحسين المعيشة" },
                { title: "التنمية المستدامة", details: "تطوير مستدام" }
            ]
        },
        {
            id: 12,
            name: "قطعة الأرض الثانية عشر - منطقة النور",
            area: 19000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7836,
                lng: 46.7453
            },
            nearbyFacilities: [
                { name: "مركز تجاري", distance: "1.2 كم", type: "shopping" },
                { name: "مسجد", distance: "500 متر", type: "mosque" },
                { name: "محطة نقل", distance: "700 متر", type: "transport" }
            ],
            currentChallenges: [
                "استغلال محدود",
                "تكاليف مرتفعة",
                "حاجة للتحديث",
                "ضعف الخدمات"
            ],
            justifications: [
                { type: "economic", title: "تحسين الكفاءة", details: "خفض التكاليف" },
                { type: "social", title: "تطوير المجتمع", details: "تعزيز الترابط" },
                { type: "environmental", title: "الاستدامة", details: "تحسين البيئة" }
            ],
            vision2030Alignment: [
                { title: "التطوير العمراني", details: "تحسين المشهد الحضري" },
                { title: "الاستدامة", details: "تنمية مستدامة" }
            ]
        },
        {
            id: 13,
            name: "قطعة الأرض الثالثة عشر - منطقة السعادة",
            area: 21500,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.7936,
                lng: 46.7553
            },
            nearbyFacilities: [
                { name: "مدرسة", distance: "600 متر", type: "school" },
                { name: "حديقة", distance: "400 متر", type: "park" },
                { name: "مركز صحي", distance: "1.5 كم", type: "hospital" }
            ],
            currentChallenges: [
                "عدم الاستغلال",
                "نقص المرافق",
                "تحديات تنظيمية",
                "حاجة للتطوير"
            ],
            justifications: [
                { type: "economic", title: "زيادة القيمة", details: "تحسين العائد" },
                { type: "social", title: "تنمية المجتمع", details: "بناء مجتمع حيوي" },
                { type: "environmental", title: "حماية البيئة", details: "تقليل التلوث" }
            ],
            vision2030Alignment: [
                { title: "التنمية الحضرية", details: "تطوير المدن" },
                { title: "جودة الحياة", details: "تحسين المعيشة" }
            ]
        },
        {
            id: 14,
            name: "قطعة الأرض الرابعة عشر - منطقة الفردوس",
            area: 18000,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.8036,
                lng: 46.7653
            },
            nearbyFacilities: [
                { name: "مجمع تجاري", distance: "1 كم", type: "shopping" },
                { name: "مدرسة", distance: "800 متر", type: "school" },
                { name: "حديقة عامة", distance: "300 متر", type: "park" }
            ],
            currentChallenges: [
                "استغلال محدود",
                "تكاليف عالية",
                "حاجة للتحديث",
                "ضعف الخدمات"
            ],
            justifications: [
                { type: "economic", title: "تحسين الاستثمار", details: "زيادة العائد" },
                { type: "social", title: "تطوير المجتمع", details: "تعزيز الترابط" },
                { type: "environmental", title: "الاستدامة", details: "تحسين البيئة" }
            ],
            vision2030Alignment: [
                { title: "التطوير العمراني", details: "تحسين المشهد الحضري" },
                { title: "الاستدامة", details: "تنمية مستدامة" }
            ]
        },
        {
            id: 15,
            name: "قطعة الأرض الخامسة عشر - منطقة البركة",
            area: 22500,
            currentLicense: "تجاري",
            status: "غير مستغلة",
            location: {
                lat: 24.8136,
                lng: 46.7753
            },
            nearbyFacilities: [
                { name: "مستشفى", distance: "2 كم", type: "hospital" },
                { name: "مركز تسوق", distance: "1.5 كم", type: "shopping" },
                { name: "محطة مترو", distance: "600 متر", type: "transport" }
            ],
            currentChallenges: [
                "عدم الاستغلال",
                "نقص الخدمات",
                "تحديات تنظيمية",
                "حاجة للتطوير"
            ],
            justifications: [
                { type: "economic", title: "تعزيز الاستثمار", details: "تحسين العائد" },
                { type: "social", title: "تنمية المجتمع", details: "بناء مجتمع متكامل" },
                { type: "environmental", title: "حماية البيئة", details: "تقليل التلوث" }
            ],
            vision2030Alignment: [
                { title: "التنمية الحضرية", details: "تطوير المدن" },
                { title: "جودة الحياة", details: "تحسين المعيشة" }
            ]
        }
    ]
}; 