// 1. 多语言配置（含猫娘版全字段）
        const langData = {
            'zh-CN': {
                langSelectTitle: '选择语言',
                title: 'Source UI',
                subtitle: '一个基于 HTML/CSS/JavaScript 的模拟移动操作系统界面',
                blur: '我们拥有 流畅的动画/高性能模糊/精心设计的应用界面',
                tryNow: '现在试试',
                githubRepo: 'GitHub 仓库',
                bilibili: '参加测试',
                mitLicense: 'MIT 许可证',
                nativeFrontend: '原生前端开发',
                multiBrowser: '多浏览器兼容',
                projectIntro: '项目简介',
                projectDesc: 'Source UI 是一款轻量无框架依赖的模拟移动操作系统界面，基于原生HTML5、CSS3、JavaScript开发，通过CSS变量、弹性布局、网格布局实现样式适配，结合CSS过渡与动画还原移动系统的视觉和交互体验，支持本地快速部署，多浏览器可运行',
                techStack: '核心技术栈',
                frontendTitle: '前端基础',
                frontendName: 'HTML5 / CSS3 / 原生 JavaScript',
                frontendDesc: '基于纯原生前端技术开发，无任何第三方框架依赖，轻量高效，降低项目耦合性与部署成本，同时保证界面的基础结构、样式渲染和交互逻辑的原生兼容性',
                styleTitle: '样式布局',
                styleName: 'CSS Variables / Flexbox / Grid',
                styleDesc: '通过CSS变量实现样式统一管理与动态切换，结合弹性布局Flexbox和网格布局Grid，完成页面的自适应适配，兼顾移动端与桌面端的布局一致性，提升样式开发效率',
                animationTitle: '交互动画',
                animationName: 'CSS Transitions / CSS Animations',
                animationDesc: '纯CSS实现所有交互动画效果，替代JavaScript动画，减少脚本开销，让界面切换、元素动效更流畅，精准还原移动操作系统的原生视觉交互体验',
                iconTitle: '图标资源',
                iconName: 'SVG 矢量图标',
                iconDesc: '采用SVG矢量图标作为项目图标资源，支持无限缩放不失真，适配不同分辨率的设备屏幕，同时体积更小，加载速度更快，提升页面整体性能',
                localRun: '本地快速运行',
                localRunDesc: '克隆仓库后，可直接浏览器打开文件，或通过本地服务器启动，步骤如下：',
                browserSupport: '浏览器支持',
                chromeEdge: 'Chrome / Edge / Via (推荐)',
                contribution: '贡献与鸣谢',
                contributionDesc: '欢迎向项目提交 <a href="https://github.com/ThinkReally114/Source-UI/issues" target="_blank">Issue</a> 和 <a href="https://github.com/ThinkReally114/Source-UI/pulls" target="_blank">Pull Request</a>，一起完善Source UI！',
                specialThanks: '特别鸣谢：<a href="https://github.com/ERX399" target="_blank">夏(ERX399)</a>',
                license: '许可证',
                licenseDesc: '本项目基于 <a href="https://github.com/ThinkReally114/Source-UI/blob/main/LICENSE" target="_blank">MIT License</a> 开源 © 2026 ThinkReally',
                starSupport: '⭐ 如果这个项目对你有帮助，欢迎前往GitHub给个 Star 支持一下！',
                copyright: '© 2026 Source UI | 由 ThinkReally 开发',
                poweredBy: '代码托管于',
                protectedBy: '网站防护由'
            },
            'zh-TW': {
                langSelectTitle: '選擇語言',
                title: 'Source UI',
                subtitle: '一個基於 HTML/CSS/JavaScript 的模擬行動作業系統介面',
                blur: '我們擁有 流暢的動畫/高性能模糊/精心設計的應用界面',
                tryNow: '立即體驗',
                githubRepo: 'GitHub 倉庫',
                bilibili: '參加測試',
                mitLicense: 'MIT 授權合約',
                nativeFrontend: '原生前端開發',
                multiBrowser: '多瀏覽器相容',
                projectIntro: '專案簡介',
                projectDesc: 'Source UI 是一款輕量無框架依賴的模擬行動作業系統介面，基於原生HTML5、CSS3、JavaScript開發，透過CSS變數、彈性配置、網格配置實現樣式適配，結合CSS過渡與動畫還原行動系統的視覺和交互體驗，支援本地快速部署，多瀏覽器可執行',
                techStack: '核心技術棧',
                frontendTitle: '前端基礎',
                frontendName: 'HTML5 / CSS3 / 原生 JavaScript',
                frontendDesc: '基於純原生前端技術開發，無任何第三方框架依賴，輕量高效，降低專案耦合性與部署成本，同時確保介面的基礎結構、樣式渲染和交互邏輯的原生相容性',
                styleTitle: '樣式布局',
                styleName: 'CSS Variables / Flexbox / Grid',
                styleDesc: '透過CSS變數實現樣式統一管理與動態切換，結合彈性布局Flexbox和網格布局Grid，完成頁面的自適應適配，兼顧行動端與桌面端的布局一致性，提升樣式開發效率',
                animationTitle: '交互动畫',
                animationName: 'CSS Transitions / CSS Animations',
                animationDesc: '純CSS實現所有交互动畫效果，替代JavaScript動畫，減少腳本開銷，讓介面切換、元素動效更流暢，精準還原行動作業系統的原生視覺交互體驗',
                iconTitle: '圖標資源',
                iconName: 'SVG 矢量圖標',
                iconDesc: '採用SVG矢量圖標做為專案圖標資源，支援無限縮放不失真，適配不同解析度的設備螢幕，同時體積更小，加載速度更快，提升頁面整體效能',
                localRun: '本地快速執行',
                localRunDesc: '複製倉庫後，可直接用瀏覽器開啟檔案，或透過本地伺服器啟動，步驟如下：',
                browserSupport: '瀏覽器支援',
                chromeEdge: 'Chrome / Edge / Via (建議)',
                contribution: '貢獻與致謝',
                contributionDesc: '歡迎向專案提交 <a href="https://github.com/ThinkReally114/Source-UI/issues" target="_blank">Issue</a> 和 <a href="https://github.com/ThinkReally114/Source-UI/pulls" target="_blank">Pull Request</a>，一起完善Source UI！',
                specialThanks: '特別致謝：<a href="https://github.com/ERX399" target="_blank">夏(ERX399)</a>',
                license: '授權合約',
                licenseDesc: '本專案基於 <a href="https://github.com/ThinkReally114/Source-UI/blob/main/LICENSE" target="_blank">MIT License</a> 開源 © 2026 ThinkReally',
                starSupport: '⭐ 如果這個專案對你有幫助，歡迎前往GitHub給個 Star 支持一下！',
                copyright: '© 2026 Source UI | 由 ThinkReally 開發',
                poweredBy: '程式碼託管於',
                protectedBy: '網站防護由'
            },
            'en': {
                langSelectTitle: 'Select Language',
                title: 'Source UI',
                subtitle: 'A simulated mobile OS interface based on HTML/CSS/JavaScript',
                blur: 'We have smooth animations / high-performance blurring / a thoughtfully designed app interface.',
                tryNow: 'Try Now',
                githubRepo: 'GitHub Repo',
                bilibili: 'Take the test',
                mitLicense: 'MIT License',
                nativeFrontend: 'Native Frontend Development',
                multiBrowser: 'Multi-browser Compatible',
                projectIntro: 'Project Introduction',
                projectDesc: 'Source UI is a lightweight simulated mobile OS interface without framework dependencies, developed based on native HTML5, CSS3 and JavaScript. It realizes style adaptation through CSS variables, Flexbox and Grid, restores the visual and interactive experience of mobile systems with CSS Transitions and Animations, supports rapid local deployment and runs on multiple browsers.',
                techStack: 'Core Tech Stack',
                frontendTitle: 'Frontend Foundation',
                frontendName: 'HTML5 / CSS3 / Native JavaScript',
                frontendDesc: 'Developed based on pure native frontend technologies without any third-party framework dependencies, it is lightweight and efficient, reducing project coupling and deployment costs while ensuring native compatibility of the interface\'s basic structure, style rendering and interactive logic.',
                styleTitle: 'Style & Layout',
                styleName: 'CSS Variables / Flexbox / Grid',
                styleDesc: 'Realize unified style management and dynamic switching through CSS variables, and complete adaptive page layout with Flexbox and Grid, ensuring layout consistency between mobile and desktop ends and improving style development efficiency.',
                animationTitle: 'Interactive Animation',
                animationName: 'CSS Transitions / CSS Animations',
                animationDesc: 'All interactive animation effects are implemented by pure CSS instead of JavaScript animation, reducing script overhead, making interface switching and element effects smoother, and accurately restoring the native visual interactive experience of mobile OS.',
                iconTitle: 'Icon Resources',
                iconName: 'SVG Vector Icons',
                iconDesc: 'Use SVG vector icons as project icon resources, supporting infinite scaling without distortion, adapting to device screens of different resolutions, and with smaller size and faster loading speed to improve overall page performance.',
                localRun: 'Run Locally',
                localRunDesc: 'After cloning the repository, you can open the file directly in the browser or start it through a local server with the following steps:',
                browserSupport: 'Browser Support',
                chromeEdge: 'Chrome / Edge / Via (Recommended)',
                contribution: 'Contribution & Acknowledgments',
                contributionDesc: 'Welcome to submit <a href="https://github.com/ThinkReally114/Source-UI/issues" target="_blank">Issue</a> and <a href="https://github.com/ThinkReally114/Source-UI/pulls" target="_blank">Pull Request</a> to improve Source UI together!',
                specialThanks: 'Special Thanks: <a href="https://github.com/ERX399" target="_blank">Xia(ERX399)</a>',
                license: 'License',
                licenseDesc: 'This project is open source under the <a href="https://github.com/ThinkReally114/Source-UI/blob/main/LICENSE" target="_blank">MIT License</a> © 2026 ThinkReally',
                starSupport: '⭐ If this project helps you, please give it a Star on GitHub!',
                copyright: '© 2026 Source UI | Developed by ThinkReally',
                poweredBy: 'Code hosted on',
                protectedBy: 'Site protected by'
            },
            // 猫娘版语言包
            'neko': {
                langSelectTitle: '要换什么语言喵？',
                title: 'Source UI',
                subtitle: '人家是基于原生 HTML/CSS/JS 开发的模拟手机界面喵',
                blur: '这里有流畅的动画和高性能模糊效果喵',
                tryNow: '快来试试喵！',
                githubRepo: 'GitHub 仓库喵',
                bilibili: '参加测试喵',
                mitLicense: 'MIT 许可证喵',
                nativeFrontend: '原生前端开发喵',
                multiBrowser: '多浏览器兼容喵',
                projectIntro: '项目介绍喵',
                projectDesc: 'Source UI 是超轻量的模拟手机界面，用原生技术编写，动画丝滑且适配全平台，本地就能运行喵',
                techStack: '核心技术喵',
                frontendTitle: '前端基础喵',
                frontendName: 'HTML5 / CSS3 / 原生 JS',
                frontendDesc: '纯原生开发，不依赖框架，轻量且运行快速喵',
                styleTitle: '样式布局喵',
                styleName: 'CSS 变量 / Flex / Grid',
                styleDesc: '支持深色模式和响应式布局，完美适配各种屏幕喵',
                animationTitle: '交互动画喵',
                animationName: 'CSS 动画',
                animationDesc: '纯 CSS 动画，流畅不卡顿，还原原生操作手感喵',
                iconTitle: '图标资源喵',
                iconName: 'SVG 矢量图',
                iconDesc: '高清矢量图标，加载快且不失真喵',
                localRun: '本地运行喵',
                localRunDesc: '克隆后直接打开文件就能用，非常简单喵',
                browserSupport: '浏览器支持喵',
                chromeEdge: 'Chrome / Edge / Via (推荐喵)',
                contribution: '贡献与感谢喵',
                contributionDesc: '欢迎提交 Issue 或 PR，和人家一起完善项目喵',
                specialThanks: '鸣谢：<a href="https://github.com/ERX399" target="_blank">夏(ERX399)</a> 喵',
                license: '许可证喵',
                licenseDesc: '基于 MIT 协议开源 © 2026 ThinkReally 喵',
                starSupport: '⭐ 喜欢的话请给人家点个 Star 喵！',


                copyright: '© 2026 Source UI | 由 ThinkReally 酱精心打造喵~',
                protectedBy: '网站防护由'
            }
        };
        const LANG_STORAGE_KEY = 'source_ui_lang';
        const langSelect = document.getElementById('langSelect');
        const langModalMask = document.getElementById('langModalMask');
        const langModalClose = document.getElementById('langModalClose');
        const langOptions = document.querySelectorAll('.lang-option');
        let currentLang = 'zh-CN';

        // 渲染多语言
        function renderLang(lang) {
            const data = langData[lang];
            if (!data) return;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
            document.documentElement.lang = lang;
            // 更新语言按钮文字（使用 textContent 会移除子元素，改用 innerHTML 或只更新内容）
            const langText = lang === 'zh-CN' ? '中' : 
                            lang === 'zh-TW' ? '繁' : 
                            lang === 'en' ? 'En' : 
                            lang === 'neko' ? '喵' : '中';
            // 只更新文本节点，不替换整个元素
            if (langSelect.firstChild) {
                langSelect.firstChild.textContent = langText;
            } else {
                langSelect.textContent = langText;
            }
            // 高亮当前选中的语言
            langOptions.forEach(option => {
                if (option.getAttribute('data-lang') === lang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            // 保存到本地存储
            localStorage.setItem(LANG_STORAGE_KEY, lang);
            currentLang = lang;
        }

        // 打开语言模态框
        function openLangModal() {
            langModalMask.classList.add('show');
            document.body.classList.add('modal-open');
        }

        // 关闭语言模态框（等待动画完成）
        function closeLangModal() {
            langModalMask.classList.remove('show');
            // 等待动画播放完成后解除body滚动锁定
            setTimeout(() => {
                document.body.classList.remove('modal-open');
            }, 350);
        }

        // 事件绑定
        // 语言模态框事件
        langSelect.addEventListener('click', () => openLangModalAnime());
        langModalClose.addEventListener('click', () => closeLangModalAnime());
        // ESC键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && langModalMask.classList.contains('show')) {
                closeLangModalAnime();
            }
        });
        // 语言选项点击事件
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const targetLang = option.getAttribute('data-lang');
                renderLang(targetLang);
                closeLangModalAnime();
            });
        });

        // 页面初始化
        window.addEventListener('DOMContentLoaded', () => {
            // 初始化语言
            const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
            if (savedLang && langData[savedLang]) renderLang(savedLang);
            else renderLang('zh-CN');
            // 初始化 Anime.js 动画
            initAnimations();
        });

        // ==================== Anime.js 动画 ====================
        function initAnimations() {
            // 1. Logo 缩放进入动画 - 更大幅度
            anime({
                targets: '.logo.animate-scale-in',
                scale: [0.3, 1],
                opacity: [0, 1],
                rotate: [-15, 0],
                duration: 1200,
                easing: 'easeOutElastic(1, .5)',
                delay: 200
            });

            // 2. 标题淡入动画 - 更大幅度
            anime({
                targets: 'h1.animate-fade-in',
                opacity: [0, 1],
                translateY: [-60, 0],
                scale: [0.8, 1],
                duration: 800,
                easing: 'easeOutBack',
                delay: 400
            });

            // 3. 控制按钮从上方滑入 - 更大幅度
            anime({
                targets: '.control-buttons',
                translateY: [-100, 0],
                opacity: [0, 1],
                rotate: [20, 0],
                duration: 800,
                easing: 'easeOutBack',
                delay: 100
            });

            // 4. 滚动触发动画 - 更大幅度
            const scrollElements = document.querySelectorAll('.animate-on-scroll');
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [80, 0],
                            opacity: [0, 1],
                            scale: [0.9, 1],
                            duration: 800,
                            easing: 'easeOutBack'
                        });
                        scrollObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            scrollElements.forEach(el => scrollObserver.observe(el));

            // 5. 技术卡片交错动画 - 更大幅度
            anime({
                targets: '.tech-card',
                translateY: [100, 0],
                opacity: [0, 1],
                rotateX: [15, 0],
                delay: anime.stagger(150, {start: 500}),
                duration: 900,
                easing: 'easeOutBack'
            });

            // 6. 按钮组交错动画 - 更大幅度
            anime({
                targets: '.btn-group .btn',
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.5, 1],
                rotate: [10, 0],
                delay: anime.stagger(120, {start: 600}),
                duration: 700,
                easing: 'easeOutElastic(1, .6)'
            });

            // 7. 标签组动画 - 更大幅度
            anime({
                targets: '.tag-group span',
                translateY: [30, 0],
                opacity: [0, 1],
                scale: [0.5, 1],
                delay: anime.stagger(100, {start: 900}),
                duration: 600,
                easing: 'easeOutBack'
            });

            // 8. 浏览器标签动画 - 更大幅度
            anime({
                targets: '.browser-item',
                scale: [0, 1],
                opacity: [0, 1],
                rotate: [180, 0],
                delay: anime.stagger(120, {start: 800}),
                duration: 700,
                easing: 'easeOutBack'
            });

            // 9. 页脚动画 - 更大幅度
            anime({
                targets: 'footer p, .protected-badges a',
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(120, {start: 1000}),
                duration: 700,
                easing: 'easeOutBack'
            });

            // 10. 初始化卡片文字拆分动画
            initCardTextAnimations();
        }

        // 文字拆分动画初始化 - Raining letters 专用
        function initCardTextAnimations() {
            // 为 raining-text 元素拆分文字
            document.querySelectorAll('.raining-text').forEach(el => {
                const text = el.textContent;
                el.innerHTML = '';
                
                for (let i = 0; i < text.length; i++) {
                    const char = text[i];
                    if (char === ' ') {
                        el.innerHTML += ' ';
                    } else {
                        // 创建字符包装器
                        const wrapper = document.createElement('span');
                        wrapper.className = 'char-wrapper';
                        
                        // 原字符（初始可见）
                        const charSpan = document.createElement('span');
                        charSpan.className = 'char';
                        charSpan.textContent = char;
                        
                        // 克隆字符（用于动画过渡）
                        const cloneSpan = document.createElement('span');
                        cloneSpan.className = 'char-clone';
                        cloneSpan.textContent = char;
                        
                        wrapper.appendChild(charSpan);
                        wrapper.appendChild(cloneSpan);
                        el.appendChild(wrapper);
                    }
                }
            });

            // 为卡片添加鼠标进入/离开动画 - Raining letters 效果
            document.querySelectorAll('.tech-card').forEach(card => {
                const effect = card.getAttribute('data-text-effect');
                
                if (effect === 'raining') {
                    card.addEventListener('mouseenter', () => {
                        animateRainingLetters(card, true);
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        animateRainingLetters(card, false);
                    });
                }
            });
        }

        // Raining letters 动画效果 - 参考示例实现
        function animateRainingLetters(card, isEnter) {
            const charWrappers = card.querySelectorAll('.char-wrapper');
            
            if (charWrappers.length === 0) return;

            // 随机排序字符索引
            const indices = Array.from({length: charWrappers.length}, (_, i) => i);
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            if (isEnter) {
                // 鼠标进入：字符从上方掉落（rain down）
                indices.forEach((idx, i) => {
                    const wrapper = charWrappers[idx];
                    const char = wrapper.querySelector('.char');
                    const clone = wrapper.querySelector('.char-clone');
                    
                    // 先设置初始状态
                    anime.set(char, { y: '-100%', opacity: 0 });
                    anime.set(clone, { y: '0%', opacity: 1 });
                    
                    // 动画：原字符从上方落下
                    anime({
                        targets: char,
                        y: ['-100%', '0%'],
                        opacity: [0, 1],
                        duration: 600,
                        delay: i * 30,
                        easing: 'spring(1, 80, 10, 0)' // 弹簧物理效果
                    });
                    
                    // 克隆字符向下消失
                    anime({
                        targets: clone,
                        y: ['0%', '100%'],
                        opacity: [1, 0],
                        duration: 600,
                        delay: i * 30,
                        easing: 'spring(1, 80, 10, 0)'
                    });
                });
            } else {
                // 鼠标离开：字符回到原位
                indices.forEach((idx, i) => {
                    const wrapper = charWrappers[idx];
                    const char = wrapper.querySelector('.char');
                    const clone = wrapper.querySelector('.char-clone');
                    
                    // 原字符向上消失
                    anime({
                        targets: char,
                        y: ['0%', '-100%'],
                        opacity: [1, 0],
                        duration: 400,
                        delay: i * 20,
                        easing: 'easeInOutQuad'
                    });
                    
                    // 克隆字符从下方出现
                    anime({
                        targets: clone,
                        y: ['100%', '0%'],
                        opacity: [0, 1],
                        duration: 400,
                        delay: i * 20,
                        easing: 'easeInOutQuad'
                    });
                });
            }
        }

        // 11. 语言模态框动画 - 更大幅度
        let isModalAnimating = false;

        function openLangModalAnime() {
            if (isModalAnimating || langModalMask.classList.contains('show')) return;
            isModalAnimating = true;

            langModalMask.classList.add('show');
            document.body.classList.add('modal-open');

            // 遮罩淡入
            anime({
                targets: '#langModalMask',
                opacity: [0, 1],
                backdropFilter: ['blur(0px)', 'blur(14px)'],
                duration: 400,
                easing: 'easeOutQuad'
            });

            // 模态框缩放弹出 - 更大幅度
            anime({
                targets: '#langModal',
                scale: [0.5, 1.1, 1],
                opacity: [0, 1],
                rotateX: [15, 0],
                duration: 600,
                easing: 'easeOutBack',
                complete: () => {
                    isModalAnimating = false;
                }
            });

            // 语言选项交错进入 - 更大幅度
            anime({
                targets: '.lang-option',
                translateX: [-100, 0],
                opacity: [0, 1],
                rotate: [10, 0],
                delay: anime.stagger(100, {start: 200}),
                duration: 500,
                easing: 'easeOutBack'
            });
        }

        function closeLangModalAnime() {
            if (isModalAnimating || !langModalMask.classList.contains('show')) return;
            isModalAnimating = true;

            // 模态框缩放消失 - 更大幅度
            anime({
                targets: '#langModal',
                scale: [1, 0.5],
                opacity: [1, 0],
                rotateX: [0, -15],
                duration: 400,
                easing: 'easeInBack',
                complete: () => {
                    langModalMask.classList.remove('show');
                    document.body.classList.remove('modal-open');
                    isModalAnimating = false;
                }
            });

            // 遮罩淡出
            anime({
                targets: '#langModalMask',
                opacity: [1, 0],
                backdropFilter: ['blur(14px)', 'blur(0px)'],
                duration: 400,
                easing: 'easeInQuad'
            });
        }

        // 13. 按钮点击波纹效果 - 更大幅度
        document.querySelectorAll('.btn, .lang-select').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    width: 20px;
                    height: 20px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                `;
                this.appendChild(ripple);

                anime({
                    targets: ripple,
                    scale: [0, 40],
                    opacity: [1, 0],
                    duration: 800,
                    easing: 'easeOutCirc',
                    complete: () => ripple.remove()
                });

                // 按钮点击缩放反馈
                anime({
                    targets: this,
                    scale: [1, 0.9, 1.05, 1],
                    duration: 400,
                    easing: 'easeOutBack'
                });
            });
        });

        // 14. 链接悬停动画增强 - 更大幅度
        document.querySelectorAll('a:not(.btn)').forEach(link => {
            link.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    translateY: -5,
                    scale: 1.05,
                    duration: 300,
                    easing: 'easeOutBack'
                });
            });

            link.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    translateY: 0,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutBack'
                });
            });
        });

        // 14. 代码块打字机效果
        function typeWriterEffect() {
            const codeBlock = document.querySelector('pre');
            if (!codeBlock) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: codeBlock,
                            boxShadow: [
                                '0 0 0 rgba(66, 185, 131, 0)',
                                '0 0 20px rgba(66, 185, 131, 0.3)',
                                '0 0 0 rgba(66, 185, 131, 0)'
                            ],
                            duration: 1500,
                            easing: 'easeInOutQuad',
                            loop: 2
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(codeBlock);
        }

        // 页面加载完成后启动打字机效果
        window.addEventListener('load', typeWriterEffect);

        // ==================== 代码复制功能 ====================
        function copyCode(btn) {
            const codeBlock = btn.closest('.code-block-wrapper').querySelector('.code-content');
            const codeText = codeBlock.innerText;

            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = btn.querySelector('.copy-text').textContent;
                btn.querySelector('.copy-text').textContent = '已复制!';
                btn.classList.add('copied');

                setTimeout(() => {
                    btn.querySelector('.copy-text').textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = codeText;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);

                const originalText = btn.querySelector('.copy-text').textContent;
                btn.querySelector('.copy-text').textContent = '已复制!';
                btn.classList.add('copied');

                setTimeout(() => {
                    btn.querySelector('.copy-text').textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            });
        }

        // ==================== 背景流动光效交互 ====================
        const cursorGlow = document.getElementById('cursorGlow');
        const cursorGlowSecondary = document.getElementById('cursorGlowSecondary');
        const particlesContainer = document.getElementById('particles');
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        let glowX2 = 0, glowY2 = 0;
        let isMouseMoving = false;
        let mouseTimeout;

        // 创建粒子
        function createParticles() {
            const particleCount = 30;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (8 + Math.random() * 12) + 's';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.width = (2 + Math.random() * 4) + 'px';
                particle.style.height = particle.style.width;
                
                // 随机颜色
                const colors = ['var(--accent-color)', 'var(--bili-color)', '#6b8dd6', '#a78bfa', '#f472b6'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.boxShadow = `0 0 ${6 + Math.random() * 6}px ${particle.style.background}`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // 初始化粒子
        createParticles();

        // 鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMouseMoving = true;

            // 清除之前的超时
            clearTimeout(mouseTimeout);

            // 设置新的超时，鼠标停止移动后逐渐停止跟随
            mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
        });

        // 平滑跟随动画
        function animateCursorGlow() {
            if (isMouseMoving) {
                // 主光效跟随鼠标
                glowX += (mouseX - glowX) * 0.1;
                glowY += (mouseY - glowY) * 0.1;
                cursorGlow.style.left = glowX + 'px';
                cursorGlow.style.top = glowY + 'px';

                // 次要光效延迟跟随（拖尾效果）
                glowX2 += (mouseX - glowX2) * 0.05;
                glowY2 += (mouseY - glowY2) * 0.05;
                cursorGlowSecondary.style.left = glowX2 + 'px';
                cursorGlowSecondary.style.top = glowY2 + 'px';
            }

            requestAnimationFrame(animateCursorGlow);
        }

        // 启动跟随动画
        animateCursorGlow();

        // 鼠标进入页面时显示光效
        document.addEventListener('mouseenter', () => {
            cursorGlow.style.opacity = '1';
        });

        // 鼠标离开页面时隐藏光效
        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });

        // 点击时产生光波扩散效果
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(66, 185, 131, 0.6) 0%, transparent 70%);
                pointer-events: none;
                z-index: 2;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(ripple);

            anime({
                targets: ripple,
                scale: [1, 15],
                opacity: [0.8, 0],
                duration: 800,
                easing: 'easeOutCirc',
                complete: () => ripple.remove()
            });
        });
