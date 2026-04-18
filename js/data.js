const pixelData = {
    levels: {
        beginner: {
            title: "مستوى المبتدئين",
            description: "ابدأ رحلتك في عالم تصميم الواجهات من الصفر وتعلم الأساسيات الجوهرية.",
            icon: '<i class="fa-solid fa-seedling"></i>',
            lessons: [
                {
                    id: 1,
                    title: "مقدمة إلى UI/UX",
                    content: `
                        <div class="lesson-stats" style="display: flex; gap: 2rem; margin-bottom: 2rem; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); padding: 2rem; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px rgba(124, 58, 237, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.5);">
                            <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.3); color: #7c3aed; font-size: 1.4rem; border: 1px solid rgba(124, 58, 237, 0.2);"><i class="fa-solid fa-users"></i></div>
                                <div>
                                    <div style="font-weight: 900; font-size: 1.5rem; color: #1e293b; line-height: 1;">55</div>
                                    <div style="font-size: 0.7rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 0.3rem;">STUDENTS</div>
                                </div>
                            </div>
                            <div style="width: 1px; background: linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 50%, transparent 100%); height: 60px;"></div>
                            <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.3); color: #7c3aed; font-size: 1.4rem; border: 1px solid rgba(124, 58, 237, 0.2);"><i class="fa-solid fa-book-open"></i></div>
                                <div>
                                    <div style="font-weight: 900; font-size: 1.5rem; color: #1e293b; line-height: 1;">45</div>
                                    <div style="font-size: 0.7rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 0.3rem;">TOPICS</div>
                                </div>
                            </div>
                            <div style="width: 1px; background: linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 50%, transparent 100%); height: 60px;"></div>
                            <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.3); color: #7c3aed; font-size: 1.4rem; border: 1px solid rgba(124, 58, 237, 0.2);"><i class="fa-solid fa-bolt"></i></div>
                                <div>
                                    <div style="font-weight: 900; font-size: 1.5rem; color: #1e293b; line-height: 1;">80%</div>
                                    <div style="font-size: 0.7rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 0.3rem;">PRACTICAL CONTENT</div>
                                </div>
                            </div>
                        </div>
                        <h3>ما هو تصميم واجهة المستخدم (UI)؟</h3>
                        <p>تصميم واجهة المستخدم هو الجانب البصري والجمالي للمنتج الرقمي. يشمل ذلك الألوان، الخطوط، الأزرار، والصور التي يتفاعل معها المستخدم مباشرة.</p>
                        <h3>ما هو تصميم تجربة المستخدم (UX)؟</h3>
                        <p>تصميم تجربة المستخدم يركز على كيفية شعور المستخدم عند استخدام المنتج ومدى سهولة تحقيق أهدافه. يهتم بالهيكلية، المنطق، وسهولة الاستخدام.</p>
                        <h3>لماذا هما مهمان؟</h3>
                        <p>التصميم الجيد ليس فقط في الشكل الجميل، بل في كيفية عمله ومساعدته للمستخدم على إنجاز مهامه بسرعة وسهولة.</p>
                    `,
                    quiz: [
                        { question: "ماذا يرمز اختصار UI؟", options: ["User Interface", "User Interaction", "User Integration", "User Interest"], correct: 0 },
                        { question: "ما هو التركيز الأساسي لـ UX؟", options: ["الألوان والخطوط", "سهولة الاستخدام وشعور المستخدم", "كتابة الكود", "تصميم الشعار"], correct: 1 }
                    ]
                },
                {
                    id: 2,
                    title: "أساسيات الألوان في التصميم",
                    content: `
                        <h3>نظرية الألوان</h3>
                        <p>الألوان ليست مجرد زينة، بل هي أداة تواصل قوية. تؤثر الألوان على مشاعر المستخدمين وتوجه انتباههم.</p>
                        <h3>عجلة الألوان</h3>
                        <p>تتكون من الألوان الأساسية، الثانوية، والثالثية. فهم كيفية دمجها يساعد في خلق تناغم بصري.</p>
                        <h3>قاعدة 60-30-10</h3>
                        <p>قاعدة ذهبية في التصميم: 60% للون الأساسي، 30% للون الثانوي، و10% للون التمييز (Accent Color).</p>
                    `,
                    quiz: [
                        { question: "ما هي نسبة اللون الثانوي في قاعدة 60-30-10؟", options: ["60%", "30%", "10%", "50%"], correct: 1 },
                        { question: "أي نوع من الألوان يستخدم لجذب الانتباه (Accent)؟", options: ["اللون الأساسي", "اللون الثانوي", "لون التمييز (10%)", "اللون الأبيض"], correct: 2 }
                    ]
                },
                {
                    id: 3,
                    title: "فن الطباعة (Typography)",
                    content: `
                        <h3>أهمية الخطوط</h3>
                        <p>الخطوط تنقل شخصية العلامة التجارية وتؤثر بشكل مباشر على قابلية القراءة.</p>
                        <h3>أنواع الخطوط</h3>
                        <ul>
                            <li><strong>Serif:</strong> خطوط ذات حواف (مثل Times New Roman)، تعطي شعوراً بالرسمية.</li>
                            <li><strong>Sans Serif:</strong> خطوط بدون حواف (مثل Arial)، تعطي شعوراً بالحداثة والبساطة.</li>
                        </ul>
                        <h3>التسلسل الهرمي البصري</h3>
                        <p>استخدام أحجام وأوزان مختلفة للخطوط لتمييز العناوين عن النصوص العادية وتوجيه عين القارئ.</p>
                    `,
                    quiz: [
                        { question: "ما هو الفرق بين Serif و Sans Serif؟", options: ["الحجم", "وجود الحواف (Zawaid)", "اللون", "نوع اللغة"], correct: 1 },
                        { question: "ما الهدف من التسلسل الهرمي البصري في الخطوط؟", options: ["تجميل الصفحة", "توجيه عين القارئ للمعلومات المهمة", "تقليل مساحة النص", "زيادة عدد الكلمات"], correct: 1 }
                    ]
                },
                {
                    id: 4,
                    title: "مبادئ التصميم الأساسية",
                    content: `
                        <h3>المحاذاة (Alignment)</h3>
                        <p>تنظيم العناصر بشكل يربطها ببعضها البعض ويخلق نظاماً بصرياً مريحاً.</p>
                        <h3>التباين (Contrast)</h3>
                        <p>إبراز العناصر المهمة من خلال الاختلاف في اللون أو الحجم أو الشكل.</p>
                        <h3>التكرار (Repetition)</h3>
                        <p>استخدام عناصر متشابهة لخلق اتساق وهوية موحدة للتصميم.</p>
                    `,
                    quiz: [
                        { question: "أي مبدأ يساعد في خلق اتساق (Consistency) في التصميم؟", options: ["التباين", "التكرار", "المحاذاة", "العشوائية"], correct: 1 },
                        { question: "ما فائدة التباين (Contrast)؟", options: ["إخفاء العناصر", "إبراز العناصر المهمة", "جعل كل شيء متشابهاً", "تقليل جودة الصور"], correct: 1 }
                    ]
                }
            ]
        },
        intermediate: {
            title: "مستوى المتوسط",
            description: "انتقل إلى المرحلة التالية وتعلم كيفية بناء هياكل المواقع والتطبيقات.",
            icon: '<i class="fa-solid fa-arrow-trend-up"></i>',
            lessons: [
                {
                    id: 1,
                    title: "هيكلة المعلومات (IA)",
                    content: `
                        <h3>ما هي هيكلة المعلومات؟</h3>
                        <p>هي عملية تنظيم وتصنيف المحتوى داخل الموقع أو التطبيق لمساعدة المستخدمين على العثور على ما يحتاجونه بسهولة.</p>
                        <h3>خرائط الموقع (Sitemaps)</h3>
                        <p>رسم توضيحي يظهر جميع صفحات الموقع وكيفية ارتباطها ببعضها البعض.</p>
                        <h3>تدفق المستخدم (User Flow)</h3>
                        <p>المسار الذي يسلكه المستخدم لإكمال مهمة معينة داخل التطبيق.</p>
                    `,
                    quiz: [
                        { question: "ما هي خريطة الموقع (Sitemap)؟", options: ["خريطة جغرافية", "رسم يوضح ارتباط صفحات الموقع", "قائمة بأسماء الموظفين", "تصميم الواجهة النهائية"], correct: 1 }
                    ]
                },
                {
                    id: 2,
                    title: "التخطيط السلكي (Wireframing)",
                    content: `
                        <h3>ما هو الـ Wireframe؟</h3>
                        <p>هو مخطط بسيط بالأبيض والأسود يركز على توزيع العناصر والوظائف دون الدخول في التفاصيل البصرية.</p>
                        <h3>أنواع الـ Wireframes</h3>
                        <ul>
                            <li><strong>Low-Fidelity:</strong> رسومات يدوية سريعة.</li>
                            <li><strong>High-Fidelity:</strong> رسومات رقمية أكثر دقة وتفصيلاً.</li>
                        </ul>
                    `,
                    quiz: [
                        { question: "لماذا نستخدم اللون الأبيض والأسود في الـ Wireframe؟", options: ["لأنه أجمل", "للتركيز على الهيكلية والوظائف بدلاً من الجماليات", "لأنه أرخص في الطباعة", "لأن الألوان ممنوعة"], correct: 1 }
                    ]
                },
                {
                    id: 3,
                    title: "التصميم المتجاوب (Responsive Design)",
                    content: `
                        <h3>مبدأ Mobile-First</h3>
                        <p>البدء بتصميم نسخة الهاتف المحمول أولاً ثم التوسع للشاشات الأكبر.</p>
                        <h3>الشبكات المرنة (Grid Systems)</h3>
                        <p>استخدام نظام شبكي لضمان توزيع العناصر بشكل متناسق على مختلف أحجام الشاشات.</p>
                    `,
                    quiz: [
                        { question: "ماذا يعني Mobile-First؟", options: ["تصميم الهاتف فقط", "البدء بتصميم الهاتف ثم الحاسوب", "شراء هاتف جديد", "تصميم الحاسوب أولاً"], correct: 1 }
                    ]
                },
                {
                    id: 4,
                    title: "النماذج التفاعلية (Prototyping)",
                    content: `
                        <h3>لماذا نصنع النماذج؟</h3>
                        <p>لاختبار فكرة التصميم وتفاعلاته قبل البدء في عملية البرمجة الفعلية.</p>
                        <h3>أدوات التصميم الشهيرة</h3>
                        <p>Figma, Adobe XD, Sketch. سنتعرف على كيفية استخدام Figma لربط الشاشات ببعضها.</p>
                    `,
                    quiz: [
                        { question: "ما هو الهدف الأساسي من الـ Prototype؟", options: ["كتابة الكود", "اختبار التفاعلات وتجربة المستخدم", "نشر الموقع", "تصميم الشعار"], correct: 1 }
                    ]
                }
            ]
        },
        advanced: {
            title: "مستوى متقدم",
            description: "أتقن المهارات الاحترافية وتعلم كيفية بناء أنظمة تصميم متكاملة.",
            icon: '<i class="fa-solid fa-star"></i>',
            lessons: [
                {
                    id: 1,
                    title: "أنظمة التصميم (Design Systems)",
                    content: `
                        <h3>ما هو نظام التصميم؟</h3>
                        <p>مجموعة من المعايير والمكونات القابلة لإعادة الاستخدام (أزرار، حقول نصية، ألوان) التي تضمن اتساق المنتج وتسرع عملية التطوير.</p>
                        <h3>مكونات النظام</h3>
                        <p>تشمل مكتبة المكونات، دليل الأسلوب (Style Guide)، والتوثيق البرمجي.</p>
                    `,
                    quiz: [
                        { question: "ما فائدة نظام التصميم (Design System)؟", options: ["زيادة وقت العمل", "ضمان الاتساق وتسريع التطوير", "تغيير الألوان يومياً", "تقليل عدد المصممين"], correct: 1 }
                    ]
                },
                {
                    id: 2,
                    title: "سهولة الوصول (Accessibility - A11y)",
                    content: `
                        <h3>التصميم للجميع</h3>
                        <p>التأكد من أن الأشخاص ذوي الاحتياجات الخاصة يمكنهم استخدام منتجك بسهولة.</p>
                        <h3>معايير WCAG</h3>
                        <p>فهم معايير تباين الألوان، أحجام الخطوط، ودعم قارئات الشاشة.</p>
                    `,
                    quiz: [
                        { question: "ماذا يعني اختصار A11y؟", options: ["Accessibility", "Alignment", "Animation", "Array"], correct: 0 }
                    ]
                },
                {
                    id: 3,
                    title: "اختبارات الاستخدام (Usability Testing)",
                    content: `
                        <h3>كيف نختبر؟</h3>
                        <p>مراقبة مستخدمين حقيقيين أثناء تفاعلهم مع النموذج الأولي لتحديد نقاط الضعف والمشاكل.</p>
                        <h3>تحليل النتائج</h3>
                        <p>جمع الملاحظات وتحويلها إلى تحسينات ملموسة في التصميم.</p>
                    `,
                    quiz: [
                        { question: "من هو الشخص الأفضل لاختبار التصميم؟", options: ["المصمم نفسه", "المبرمج", "مستخدم حقيقي مستهدف", "مدير الشركة"], correct: 2 }
                    ]
                },
                {
                    id: 4,
                    title: "علم النفس في التصميم",
                    content: `
                        <h3>قوانين الجشطالت (Gestalt Principles)</h3>
                        <p>كيف يدرك العقل البشري الأشكال والمجموعات (التقارب، التشابه، الاستمرارية).</p>
                        <h3>قانون هيك (Hick's Law)</h3>
                        <p>كلما زادت الخيارات، زاد الوقت المستغرق لاتخاذ القرار. بسط واجهاتك!</p>
                    `,
                    quiz: [
                        { question: "ماذا ينص قانون هيك (Hick's Law)؟", options: ["زيادة الخيارات تحسن التجربة", "زيادة الخيارات تزيد وقت اتخاذ القرار", "الألوان مهمة جداً", "الخطوط الكبيرة أفضل"], correct: 1 }
                    ]
                }
            ]
        }
    },
    placementTest: [
        {
            question: "ما هو الفرق الجوهري بين UI و UX؟",
            options: [
                "UI هي المظهر البصري و UX هي تجربة المستخدم الكلية",
                "UI هي البرمجة و UX هي التصميم",
                "لا يوجد فرق بينهما",
                "UI فقط للمواقع و UX فقط للتطبيقات"
            ],
            correct: 0
        },
        {
            question: "ماذا تعني قاعدة 60-30-10 في الألوان؟",
            options: [
                "توزيع الألوان حسب المساحة (أساسي، ثانوي، تمييز)",
                "عدد الألوان المسموح بها في الصفحة",
                "درجة شفافية الألوان",
                "سرعة تحميل الألوان في الموقع"
            ],
            correct: 0
        },
        {
            question: "ما هو الهدف من الـ Wireframe؟",
            options: [
                "تحديد الألوان النهائية",
                "تخطيط هيكلية الصفحة وتوزيع العناصر",
                "كتابة الكود البرمجي",
                "تصميم الشعار"
            ],
            correct: 1
        },
        {
            question: "ما هو مبدأ Mobile-First؟",
            options: [
                "تصميم نسخة الهاتف أولاً",
                "تصميم نسخة الهاتف أولاً ثم التوسع للشاشات الأكبر",
                "جعل الموقع يعمل على الهاتف فقط",
                "شراء هاتف قبل البدء بالتصميم"
            ],
            correct: 1
        },
        {
            question: "ما هي الـ Accessibility في التصميم؟",
            options: [
                "سرعة الوصول للموقع",
                "جعل التصميم متاحاً وسهلاً للاستخدام من قبل الجميع بما في ذلك ذوي الاحتياجات الخاصة",
                "سهولة تحميل الصور",
                "الوصول إلى لوحة التحكم"
            ],
            correct: 1
        }
    ]
};
