// ========== 状态栏时间更新 ==========
        function updateStatusTime() {
            var t = new Date();
            var h = t.getHours();
            var m = String(t.getMinutes()).padStart(2, '0');
            var statusTime = document.getElementById('statusTime');
            if (statusTime) statusTime.innerText = h + ':' + m;
        }
        updateStatusTime();
        setInterval(updateStatusTime, 10000);

        // ========== 获取DOM元素 ==========
        var cover = document.getElementById("cover"); // 遮罩层元素
        var cover2 = document.getElementById("cover2"); // 第二个遮罩层元素
        var cover3 = document.getElementById("cover3"); // 第三个遮罩层元素
        var cover4 = document.getElementById("cover4"); // 第四个遮罩层元素
        var controlCenter = document.getElementById("controlCenter"); // 控制中心元素
        var backdrop = document.getElementById("backdrop"); // 背景遮罩层元素
        var wallpaper = document.getElementById("wallpaper"); // 壁纸层元素
        var opened = 1; // 应用状态：0=关闭，1=打开，默认打开
        var controlCenterOpened = false; // 控制中心状态
        var opened2 = 0; // 第二个应用状态：0=关闭，1=打开，默认关闭
        var opened3 = 0; // 第三个应用状态：0=关闭，1=打开，默认关闭
        var opened4 = 0; // 第四个应用状态：0=关闭，1=打开，默认关闭
        var appOpenTime = {1: Date.now(), 2: 0, 3: 0, 4: 0}; // 记录每个应用的打开时间

        // ========== 检查并关闭其他已打开的应用 ==========
        function closeEarliestApp(excludeAppId) {
            // 关闭所有其他已打开的应用（不恢复图标位置，由新应用的打开流程统一处理）
            if (opened === 1 && excludeAppId !== 1) {
                closeAppWithoutRestore();
            }
            if (opened2 === 1 && excludeAppId !== 2) {
                closeApp2WithoutRestore();
            }
            if (opened3 === 1 && excludeAppId !== 3) {
                closeApp3WithoutRestore();
            }
            if (opened4 === 1 && excludeAppId !== 4) {
                closeApp4WithoutRestore();
            }
        }

        // ========== 桌面图标下沉效果 ==========
        function sinkOtherIcons(excludeAppId) {
            var sinkOffset = 30; // 下沉距离
            var duration = "0.4s";
            var easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

            if (excludeAppId !== 1) {
                cover.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
                cover.style.transform = "scale(1) translateY(" + sinkOffset + "px)";
                cover.style.opacity = "0.7";
                cover.style.filter = "blur(2px)";
            }
            if (excludeAppId !== 2) {
                cover2.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
                cover2.style.transform = "scale(1) translateY(" + sinkOffset + "px)";
                cover2.style.opacity = "0.7";
                cover2.style.filter = "blur(2px)";
            }
            if (excludeAppId !== 3) {
                cover3.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
                cover3.style.transform = "scale(1) translateY(" + sinkOffset + "px)";
                cover3.style.opacity = "0.7";
                cover3.style.filter = "blur(2px)";
            }
            if (excludeAppId !== 4) {
                cover4.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
                cover4.style.transform = "scale(1) translateY(" + sinkOffset + "px)";
                cover4.style.opacity = "0.7";
                cover4.style.filter = "blur(2px)";
            }
        }

        // ========== 恢复桌面图标位置 ==========
        function restoreIcons() {
            var duration = "0.35s";
            var easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

            // 恢复图标位置、透明度和模糊效果
            cover.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
            cover.style.transform = "scale(1) translateY(0)";
            cover.style.opacity = "1";
            cover.style.filter = "blur(0px)";

            cover2.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
            cover2.style.transform = "scale(1) translateY(0)";
            cover2.style.opacity = "1";
            cover2.style.filter = "blur(0px)";

            cover3.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
            cover3.style.transform = "scale(1) translateY(0)";
            cover3.style.opacity = "1";
            cover3.style.filter = "blur(0px)";

            cover4.style.transition = "transform " + duration + " " + easing + ", opacity " + duration + " " + easing + ", filter " + duration + " " + easing;
            cover4.style.transform = "scale(1) translateY(0)";
            cover4.style.opacity = "1";
            cover4.style.filter = "blur(0px)";

            // 动画结束后清理transition
            setTimeout(function() {
                cover.style.transition = "";
                cover.style.opacity = "";
                cover.style.filter = "";
                cover2.style.transition = "";
                cover2.style.opacity = "";
                cover2.style.filter = "";
                cover3.style.transition = "";
                cover3.style.opacity = "";
                cover3.style.filter = "";
                cover4.style.transition = "";
                cover4.style.opacity = "";
                cover4.style.filter = "";
            }, 350);
        }

        // ========== 打开应用动画 ==========
        /**
         * 展开应用动画
         * @param {string} options - 可选参数，"gestrue"表示手势触发
         */
        function openApp(options) {
            // 如果有其他应用已打开，关闭最早打开的那个
            closeEarliestApp(1);

            // 记录打开时间
            appOpenTime[1] = Date.now();

            // 桌面图标下沉效果
            sinkOtherIcons(1);

            // 先给图标添加过渡动画
            var icon = document.getElementById("icon");
            if (icon) {
                icon.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon.style.width = "128px";
                icon.style.height = "128px";
            }
            // 提高层级，确保在最上层
            cover.style.zIndex = "100";
            cover2.style.zIndex = "2";
            // 遮罩展开为全屏
            cover.style.width = "100%";
            cover.style.height = "100%";
            cover.style.borderRadius = "44.5px"; // 展开后保持与容器一致的圆角
            cover.style.margin = "0";
            cover.classList.add("open"); // 添加展开状态类
            // 显示背景压暗模糊层
            if (backdrop) {
                backdrop.classList.add("show");
            }
            // 壁纸缩放效果
            if (wallpaper) {
                wallpaper.classList.add("zoomed");
            }
        }

        // ========== 关闭应用动画 ==========
        /**
         * 关闭应用动画
         * @param {string} options - 可选参数，"gestrue"表示手势触发
         */
        function closeApp(options) {
            // 恢复桌面图标位置
            restoreIcons();

            // 先给图标添加过渡动画，避免突然变小
            var icon = document.getElementById("icon");
            if (icon) {
                icon.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon.style.width = "32px";
                icon.style.height = "32px";
            }
            // 遮罩恢复初始大小和位置
            cover.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover.style.width = "56px";
            cover.style.height = "56px";
            cover.style.borderRadius = "22px"; // 恢复圆角
            cover.style.margin = "0";
            cover.style.left = "18px";
            cover.style.top = "50px"; // 恢复到初始位置 (再上移50px)
            cover.classList.remove("open"); // 移除展开状态类
            // 动画完成后恢复层级和清理transition
            setTimeout(function() {
                cover.style.zIndex = "1";
                cover.style.transition = "";
            }, 500);
            // 隐藏背景压暗模糊层
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            // 壁纸恢复原始大小
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
        }

        // ========== 关闭应用动画（不恢复图标位置） ==========
        function closeAppWithoutRestore() {
            var icon = document.getElementById("icon");
            if (icon) {
                icon.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon.style.width = "32px";
                icon.style.height = "32px";
            }
            cover.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover.style.width = "56px";
            cover.style.height = "56px";
            cover.style.borderRadius = "22px";
            cover.style.margin = "0";
            cover.style.left = "18px";
            cover.style.top = "50px";
            cover.classList.remove("open");
            setTimeout(function() {
                cover.style.zIndex = "1";
                cover.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened = 0;
        }

        // ========== 打开第二个应用动画 ==========
        function openApp2(options) {
            // 如果有其他应用已打开，关闭最早打开的那个
            closeEarliestApp(2);

            // 记录打开时间
            appOpenTime[2] = Date.now();

            // 桌面图标下沉效果
            sinkOtherIcons(2);

            var icon2 = document.getElementById("icon2");
            if (icon2) {
                icon2.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon2.style.width = "128px";
                icon2.style.height = "128px";
            }
            // 提高层级，确保在最上层
            cover2.style.zIndex = "100";
            cover.style.zIndex = "1";
            // 设置展开动画过渡
            cover2.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.25, 1), filter 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            // 先重置transform，避免之前的缩放影响
            cover2.style.transform = "scale(1)";
            cover2.style.opacity = "1";
            cover2.style.filter = "blur(0px)";
            cover2.style.width = "100%";
            cover2.style.height = "100%";
            cover2.style.borderRadius = "44.5px";
            cover2.style.margin = "0";
            cover2.style.left = "0px";
            cover2.style.top = "0px";
            cover2.classList.add("open");
            if (backdrop) {
                backdrop.classList.add("show");
            }
            if (wallpaper) {
                wallpaper.classList.add("zoomed");
            }
            opened2 = 1;
        }

        // ========== 关闭第二个应用动画 ==========
        function closeApp2(options) {
            // 恢复桌面图标位置
            restoreIcons();

            var icon2 = document.getElementById("icon2");
            if (icon2) {
                icon2.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon2.style.width = "32px";
                icon2.style.height = "32px";
            }
            cover2.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover2.style.transform = "scale(1)";
            cover2.style.width = "56px";
            cover2.style.height = "56px";
            cover2.style.borderRadius = "22px";
            cover2.style.margin = "0";
            cover2.style.left = "88px";
            cover2.style.top = "50px";
            cover2.classList.remove("open");
            // 动画完成后恢复层级和清理transition
            setTimeout(function() {
                cover2.style.zIndex = "2";
                cover2.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened2 = 0;
        }

        // ========== 关闭第二个应用动画（不恢复图标位置） ==========
        function closeApp2WithoutRestore() {
            var icon2 = document.getElementById("icon2");
            if (icon2) {
                icon2.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon2.style.width = "32px";
                icon2.style.height = "32px";
            }
            cover2.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover2.style.transform = "scale(1)";
            cover2.style.width = "56px";
            cover2.style.height = "56px";
            cover2.style.borderRadius = "22px";
            cover2.style.margin = "0";
            cover2.style.left = "88px";
            cover2.style.top = "50px";
            cover2.classList.remove("open");
            setTimeout(function() {
                cover2.style.zIndex = "2";
                cover2.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened2 = 0;
        }

        // ========== 打开第三个应用动画 ==========
        function openApp3(options) {
            // 如果有其他应用已打开，关闭最早打开的那个
            closeEarliestApp(3);

            // 记录打开时间
            appOpenTime[3] = Date.now();

            // 桌面图标下沉效果
            sinkOtherIcons(3);

            var icon3 = document.getElementById("icon3");
            if (icon3) {
                icon3.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon3.style.width = "128px";
                icon3.style.height = "128px";
            }
            // 提高层级，确保在最上层
            cover3.style.zIndex = "100";
            cover.style.zIndex = "1";
            cover2.style.zIndex = "2";
            cover4.style.zIndex = "4";
            // 设置展开动画过渡
            cover3.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.25, 1), filter 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            // 先重置transform，避免之前的缩放影响
            cover3.style.transform = "scale(1)";
            cover3.style.opacity = "1";
            cover3.style.filter = "blur(0px)";
            cover3.style.width = "100%";
            cover3.style.height = "100%";
            cover3.style.borderRadius = "44.5px";
            cover3.style.margin = "0";
            cover3.style.left = "0px";
            cover3.style.top = "0px";
            cover3.classList.add("open");
            if (backdrop) {
                backdrop.classList.add("show");
            }
            if (wallpaper) {
                wallpaper.classList.add("zoomed");
            }
            opened3 = 1;
        }

        // ========== 关闭第三个应用动画 ==========
        function closeApp3(options) {
            // 恢复桌面图标位置
            restoreIcons();

            var icon3 = document.getElementById("icon3");
            if (icon3) {
                icon3.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon3.style.width = "32px";
                icon3.style.height = "32px";
            }
            cover3.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover3.style.transform = "scale(1)";
            cover3.style.width = "56px";
            cover3.style.height = "56px";
            cover3.style.borderRadius = "22px";
            cover3.style.margin = "0";
            cover3.style.left = "158px";
            cover3.style.top = "50px";
            cover3.classList.remove("open");
            // 动画完成后恢复层级和清理transition
            setTimeout(function() {
                cover3.style.zIndex = "3";
                cover3.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened3 = 0;
        }

        // ========== 关闭第三个应用动画（不恢复图标位置） ==========
        function closeApp3WithoutRestore() {
            var icon3 = document.getElementById("icon3");
            if (icon3) {
                icon3.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon3.style.width = "32px";
                icon3.style.height = "32px";
            }
            cover3.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover3.style.transform = "scale(1)";
            cover3.style.width = "56px";
            cover3.style.height = "56px";
            cover3.style.borderRadius = "22px";
            cover3.style.margin = "0";
            cover3.style.left = "158px";
            cover3.style.top = "50px";
            cover3.classList.remove("open");
            setTimeout(function() {
                cover3.style.zIndex = "3";
                cover3.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened3 = 0;
        }

        // ========== 打开第四个应用动画 ==========
        function openApp4(options) {
            // 如果有其他应用已打开，关闭最早打开的那个
            closeEarliestApp(4);

            // 记录打开时间
            appOpenTime[4] = Date.now();

            // 桌面图标下沉效果
            sinkOtherIcons(4);

            var icon4 = document.getElementById("icon4");
            if (icon4) {
                icon4.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon4.style.width = "128px";
                icon4.style.height = "128px";
            }
            // 提高层级，确保在最上层
            cover4.style.zIndex = "100";
            cover.style.zIndex = "1";
            cover2.style.zIndex = "2";
            cover3.style.zIndex = "3";
            // 设置展开动画过渡
            cover4.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.25, 1), filter 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            // 先重置transform，避免之前的缩放影响
            cover4.style.transform = "scale(1)";
            cover4.style.opacity = "1";
            cover4.style.filter = "blur(0px)";
            cover4.style.width = "100%";
            cover4.style.height = "100%";
            cover4.style.borderRadius = "44.5px";
            cover4.style.margin = "0";
            cover4.style.left = "0px";
            cover4.style.top = "0px";
            cover4.classList.add("open");
            if (backdrop) {
                backdrop.classList.add("show");
            }
            if (wallpaper) {
                wallpaper.classList.add("zoomed");
            }
            opened4 = 1;
        }

        // ========== 关闭第四个应用动画 ==========
        function closeApp4(options) {
            // 恢复桌面图标位置
            restoreIcons();

            var icon4 = document.getElementById("icon4");
            if (icon4) {
                icon4.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon4.style.width = "32px";
                icon4.style.height = "32px";
            }
            cover4.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover4.style.transform = "scale(1)";
            cover4.style.width = "56px";
            cover4.style.height = "56px";
            cover4.style.borderRadius = "22px";
            cover4.style.margin = "0";
            cover4.style.left = "228px";
            cover4.style.top = "50px";
            cover4.classList.remove("open");
            // 动画完成后恢复层级和清理transition
            setTimeout(function() {
                cover4.style.zIndex = "4";
                cover4.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened4 = 0;
        }

        // ========== 关闭第四个应用动画（不恢复图标位置） ==========
        function closeApp4WithoutRestore() {
            var icon4 = document.getElementById("icon4");
            if (icon4) {
                icon4.style.transition = "width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                icon4.style.width = "32px";
                icon4.style.height = "32px";
            }
            cover4.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.25, 1), width 0.5s cubic-bezier(0.25, 1, 0.25, 1), height 0.5s cubic-bezier(0.25, 1, 0.25, 1), left 0.5s cubic-bezier(0.25, 1, 0.25, 1), top 0.5s cubic-bezier(0.25, 1, 0.25, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            cover4.style.transform = "scale(1)";
            cover4.style.width = "56px";
            cover4.style.height = "56px";
            cover4.style.borderRadius = "22px";
            cover4.style.margin = "0";
            cover4.style.left = "228px";
            cover4.style.top = "50px";
            cover4.classList.remove("open");
            setTimeout(function() {
                cover4.style.zIndex = "4";
                cover4.style.transition = "";
            }, 500);
            if (backdrop) {
                backdrop.classList.remove("show");
            }
            if (wallpaper) {
                wallpaper.classList.remove("zoomed");
            }
            opened4 = 0;
        }

        // ========== 第一个图标点击事件 ==========
        cover.addEventListener("click", function(e) {
            // 如果点击的是应用内容区域，不执行关闭
            if (e.target.closest('.app-content')) {
                return;
            }
            if (opened === 0) {
                openApp();
            } else {
                closeApp();
            }
        });

        // ========== 第二个图标点击事件 ==========
        cover2.addEventListener("click", function(e) {
            // 如果点击的是应用内容区域，不执行关闭
            if (e.target.closest('.app-content')) {
                return;
            }
            if (opened2 === 0) {
                openApp2();
            } else {
                closeApp2();
            }
        });
        
        // ========== 第二个图标触摸事件（拖拽退出） ==========
        var lastX2 = "", lastY2 = "", oL2, oT2;
        
        cover2.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1 && opened2 === 1) {
                oL2 = e.touches[0].clientX - this.offsetLeft;
                oT2 = e.touches[0].clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                cover2.style.zIndex = "100";
                cover.style.zIndex = "1";
                var icon2 = document.getElementById("icon2");
                if (icon2) {
                    icon2.style.transition = "none";
                }
            }
        }, { passive: true });
        
        cover2.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1 && opened2 === 1) {
                lastX2 = e.touches[0].clientX;
                lastY2 = e.touches[0].clientY;
                var deltaY = lastY2 - oT2;
                if (deltaY > 0 && deltaY > 30 && oT2 < 100) {
                    if (!controlCenterOpened) {
                        controlCenter.classList.add("show");
                        controlCenterOpened = true;
                    }
                    return;
                }
                if (deltaY >= 0) return;
                var dampedDeltaY = deltaY * 0.4;
                this.style.left = (lastX2 - oL2) + "px";
                this.style.top = dampedDeltaY + "px";
                var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
                var finalScale = Math.max(0.5, scale);
                this.style.transform = "scale(" + finalScale + ")";
                this.style.borderRadius = "44.5px";
                var icon2 = document.getElementById("icon2");
                if (icon2) {
                    var iconSize = Math.max(100, 128 * finalScale);
                    icon2.style.width = iconSize + "px";
                    icon2.style.height = iconSize + "px";
                }
            }
        }, { passive: true });
        
        cover2.addEventListener("touchend", function(e) {
            if (e.targetTouches.length == 0 && opened2 === 1) {
                var icon2 = document.getElementById("icon2");
                if (icon2) {
                    icon2.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                }
                if (cover2.offsetTop < 0 && Math.abs(cover2.offsetTop / window.screen.height) > 0.125) {
                    cover2.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover2.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    closeApp2();
                } else {
                    cover2.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover2.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    cover2.style.transform = "scale(1)";
                    cover2.style.left = "0px";
                    cover2.style.top = "0px";
                    cover2.style.margin = "0";
                    cover2.style.width = "100%";
                    cover2.style.height = "100%";
                }
            }
        });
        
        // ========== 第二个图标鼠标事件（拖拽退出） ==========
        var isMouseDragging2 = false;
        var mouseOffsetX2 = 0, mouseOffsetY2 = 0;
        
        cover2.addEventListener("mousedown", function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
            if (opened2 === 1) {
                isMouseDragging2 = true;
                mouseOffsetX2 = e.clientX - this.offsetLeft;
                mouseOffsetY2 = e.clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                cover2.style.zIndex = "100";
                cover.style.zIndex = "1";
                var icon2 = document.getElementById("icon2");
                if (icon2) {
                    icon2.style.transition = "none";
                }
                if (!e.target.closest('.app-content')) {
                    e.preventDefault();
                }
            }
        });
        
        document.addEventListener("mousemove", function(e) {
            if (!isMouseDragging2 || opened2 !== 1) return;
            var currentX = e.clientX;
            var currentY = e.clientY;
            var deltaY = currentY - mouseOffsetY2;
            if (deltaY > 0 && deltaY > 30 && mouseOffsetY2 < 100) {
                if (!controlCenterOpened) {
                    controlCenter.classList.add("show");
                    controlCenterOpened = true;
                }
                return;
            }
            if (deltaY >= 0) return;
            var dampedDeltaY = deltaY * 0.4;
            cover2.style.left = (currentX - mouseOffsetX2) + "px";
            cover2.style.top = dampedDeltaY + "px";
            var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
            var finalScale = Math.max(0.5, scale);
            cover2.style.transform = "scale(" + finalScale + ")";
            cover2.style.borderRadius = "44.5px";
            var icon2 = document.getElementById("icon2");
            if (icon2) {
                var iconSize = Math.max(100, 128 * finalScale);
                icon2.style.width = iconSize + "px";
                icon2.style.height = iconSize + "px";
            }
        });
        
        document.addEventListener("mouseup", function(e) {
            if (!isMouseDragging2 || opened2 !== 1) return;
            isMouseDragging2 = false;
            var icon2 = document.getElementById("icon2");
            if (icon2) {
                icon2.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            }
            if (cover2.offsetTop < 0 && Math.abs(cover2.offsetTop / window.screen.height) > 0.125) {
                cover2.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover2.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                closeApp2();
            } else {
                cover2.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover2.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                cover2.style.transform = "scale(1)";
                cover2.style.left = "0px";
                cover2.style.top = "0px";
                cover2.style.margin = "0";
                cover2.style.width = "100%";
                cover2.style.height = "100%";
            }
        });
        
        // ========== 第三个图标点击事件 ==========
        cover3.addEventListener("click", function(e) {
            // 如果点击的是应用内容区域，不执行关闭
            if (e.target.closest('.app-content')) {
                return;
            }
            if (opened3 === 0) {
                openApp3();
            } else {
                closeApp3();
            }
        });

        // ========== 第三个图标触摸事件（拖拽退出） ==========
        var lastX3 = "", lastY3 = "", oL3, oT3;

        cover3.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1 && opened3 === 1) {
                oL3 = e.touches[0].clientX - this.offsetLeft;
                oT3 = e.touches[0].clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                cover3.style.zIndex = "100";
                cover.style.zIndex = "1";
                cover2.style.zIndex = "2";
                cover4.style.zIndex = "4";
                var icon3 = document.getElementById("icon3");
                if (icon3) {
                    icon3.style.transition = "none";
                }
            }
        }, { passive: true });

        cover3.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1 && opened3 === 1) {
                lastX3 = e.touches[0].clientX;
                lastY3 = e.touches[0].clientY;
                var deltaY = lastY3 - oT3;
                if (deltaY > 0 && deltaY > 30 && oT3 < 100) {
                    if (!controlCenterOpened) {
                        controlCenter.classList.add("show");
                        controlCenterOpened = true;
                    }
                    return;
                }
                if (deltaY >= 0) return;
                var dampedDeltaY = deltaY * 0.4;
                this.style.left = (lastX3 - oL3) + "px";
                this.style.top = dampedDeltaY + "px";
                var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
                var finalScale = Math.max(0.5, scale);
                this.style.transform = "scale(" + finalScale + ")";
                this.style.borderRadius = "44.5px";
                var icon3 = document.getElementById("icon3");
                if (icon3) {
                    var iconSize = Math.max(100, 128 * finalScale);
                    icon3.style.width = iconSize + "px";
                    icon3.style.height = iconSize + "px";
                }
            }
        }, { passive: true });

        cover3.addEventListener("touchend", function(e) {
            if (e.targetTouches.length == 0 && opened3 === 1) {
                var icon3 = document.getElementById("icon3");
                if (icon3) {
                    icon3.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                }
                if (cover3.offsetTop < 0 && Math.abs(cover3.offsetTop / window.screen.height) > 0.125) {
                    cover3.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover3.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    closeApp3();
                } else {
                    cover3.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover3.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    cover3.style.transform = "scale(1)";
                    cover3.style.left = "0px";
                    cover3.style.top = "0px";
                    cover3.style.margin = "0";
                    cover3.style.width = "100%";
                    cover3.style.height = "100%";
                }
            }
        });

        // ========== 第三个图标鼠标事件（拖拽退出） ==========
        var isMouseDragging3 = false;
        var mouseOffsetX3 = 0, mouseOffsetY3 = 0;

        cover3.addEventListener("mousedown", function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
            if (opened3 === 1) {
                isMouseDragging3 = true;
                mouseOffsetX3 = e.clientX - this.offsetLeft;
                mouseOffsetY3 = e.clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                // 确保拖拽时在最上层
                cover3.style.zIndex = "100";
                cover.style.zIndex = "1";
                cover2.style.zIndex = "2";
                cover4.style.zIndex = "4";
                var icon3 = document.getElementById("icon3");
                if (icon3) {
                    icon3.style.transition = "none";
                }
                if (!e.target.closest('.app-content')) {
                    e.preventDefault();
                }
            }
        });

        document.addEventListener("mousemove", function(e) {
            if (!isMouseDragging3 || opened3 !== 1) return;
            var currentX = e.clientX;
            var currentY = e.clientY;
            var deltaY = currentY - mouseOffsetY3;
            if (deltaY > 0 && deltaY > 30 && mouseOffsetY3 < 100) {
                if (!controlCenterOpened) {
                    controlCenter.classList.add("show");
                    controlCenterOpened = true;
                }
                return;
            }
            if (deltaY >= 0) return;
            var dampedDeltaY = deltaY * 0.4;
            cover3.style.left = (currentX - mouseOffsetX3) + "px";
            cover3.style.top = dampedDeltaY + "px";
            var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
            var finalScale = Math.max(0.5, scale);
            cover3.style.transform = "scale(" + finalScale + ")";
            cover3.style.borderRadius = "44.5px";
            var icon3 = document.getElementById("icon3");
            if (icon3) {
                var iconSize = Math.max(100, 128 * finalScale);
                icon3.style.width = iconSize + "px";
                icon3.style.height = iconSize + "px";
            }
        });

        document.addEventListener("mouseup", function(e) {
            if (!isMouseDragging3 || opened3 !== 1) return;
            isMouseDragging3 = false;
            var icon3 = document.getElementById("icon3");
            if (icon3) {
                icon3.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            }
            if (cover3.offsetTop < 0 && Math.abs(cover3.offsetTop / window.screen.height) > 0.125) {
                cover3.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover3.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                closeApp3();
            } else {
                cover3.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover3.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                cover3.style.transform = "scale(1)";
                cover3.style.left = "0px";
                cover3.style.top = "0px";
                cover3.style.margin = "0";
                cover3.style.width = "100%";
                cover3.style.height = "100%";
            }
        });

        // ========== 第四个图标点击事件 ==========
        cover4.addEventListener("click", function(e) {
            // 如果点击的是应用内容区域，不执行关闭
            if (e.target.closest('.app-content')) {
                return;
            }
            if (opened4 === 0) {
                openApp4();
            } else {
                closeApp4();
            }
        });

        // ========== 第四个图标触摸事件（拖拽退出） ==========
        var lastX4 = "", lastY4 = "", oL4, oT4;

        cover4.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1 && opened4 === 1) {
                oL4 = e.touches[0].clientX - this.offsetLeft;
                oT4 = e.touches[0].clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                cover4.style.zIndex = "100";
                cover.style.zIndex = "1";
                cover2.style.zIndex = "2";
                cover3.style.zIndex = "3";
                var icon4 = document.getElementById("icon4");
                if (icon4) {
                    icon4.style.transition = "none";
                }
            }
        }, { passive: true });

        cover4.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1 && opened4 === 1) {
                lastX4 = e.touches[0].clientX;
                lastY4 = e.touches[0].clientY;
                var deltaY = lastY4 - oT4;
                if (deltaY > 0 && deltaY > 30 && oT4 < 100) {
                    if (!controlCenterOpened) {
                        controlCenter.classList.add("show");
                        controlCenterOpened = true;
                    }
                    return;
                }
                if (deltaY >= 0) return;
                var dampedDeltaY = deltaY * 0.4;
                this.style.left = (lastX4 - oL4) + "px";
                this.style.top = dampedDeltaY + "px";
                var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
                var finalScale = Math.max(0.5, scale);
                this.style.transform = "scale(" + finalScale + ")";
                this.style.borderRadius = "44.5px";
                var icon4 = document.getElementById("icon4");
                if (icon4) {
                    var iconSize = Math.max(100, 128 * finalScale);
                    icon4.style.width = iconSize + "px";
                    icon4.style.height = iconSize + "px";
                }
            }
        }, { passive: true });

        cover4.addEventListener("touchend", function(e) {
            if (e.targetTouches.length == 0 && opened4 === 1) {
                var icon4 = document.getElementById("icon4");
                if (icon4) {
                    icon4.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                }
                if (cover4.offsetTop < 0 && Math.abs(cover4.offsetTop / window.screen.height) > 0.125) {
                    cover4.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover4.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    closeApp4();
                } else {
                    cover4.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover4.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    cover4.style.transform = "scale(1)";
                    cover4.style.left = "0px";
                    cover4.style.top = "0px";
                    cover4.style.margin = "0";
                    cover4.style.width = "100%";
                    cover4.style.height = "100%";
                }
            }
        });

        // ========== 第四个图标鼠标事件（拖拽退出） ==========
        var isMouseDragging4 = false;
        var mouseOffsetX4 = 0, mouseOffsetY4 = 0;

        cover4.addEventListener("mousedown", function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
            if (opened4 === 1) {
                isMouseDragging4 = true;
                mouseOffsetX4 = e.clientX - this.offsetLeft;
                mouseOffsetY4 = e.clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                // 确保拖拽时在最上层
                cover4.style.zIndex = "100";
                cover.style.zIndex = "1";
                cover2.style.zIndex = "2";
                cover3.style.zIndex = "3";
                var icon4 = document.getElementById("icon4");
                if (icon4) {
                    icon4.style.transition = "none";
                }
                if (!e.target.closest('.app-content')) {
                    e.preventDefault();
                }
            }
        });

        document.addEventListener("mousemove", function(e) {
            if (!isMouseDragging4 || opened4 !== 1) return;
            var currentX = e.clientX;
            var currentY = e.clientY;
            var deltaY = currentY - mouseOffsetY4;
            if (deltaY > 0 && deltaY > 30 && mouseOffsetY4 < 100) {
                if (!controlCenterOpened) {
                    controlCenter.classList.add("show");
                    controlCenterOpened = true;
                }
                return;
            }
            if (deltaY >= 0) return;
            var dampedDeltaY = deltaY * 0.4;
            cover4.style.left = (currentX - mouseOffsetX4) + "px";
            cover4.style.top = dampedDeltaY + "px";
            var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
            var finalScale = Math.max(0.5, scale);
            cover4.style.transform = "scale(" + finalScale + ")";
            cover4.style.borderRadius = "44.5px";
            var icon4 = document.getElementById("icon4");
            if (icon4) {
                var iconSize = Math.max(100, 128 * finalScale);
                icon4.style.width = iconSize + "px";
                icon4.style.height = iconSize + "px";
            }
        });

        document.addEventListener("mouseup", function(e) {
            if (!isMouseDragging4 || opened4 !== 1) return;
            isMouseDragging4 = false;
            var icon4 = document.getElementById("icon4");
            if (icon4) {
                icon4.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            }
            if (cover4.offsetTop < 0 && Math.abs(cover4.offsetTop / window.screen.height) > 0.125) {
                cover4.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover4.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                closeApp4();
            } else {
                cover4.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover4.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                cover4.style.transform = "scale(1)";
                cover4.style.left = "0px";
                cover4.style.top = "0px";
                cover4.style.margin = "0";
                cover4.style.width = "100%";
                cover4.style.height = "100%";
            }
        });

        // ========== 手势滑动变量 ==========
        var lastX = ""; // 最后X坐标
        var lastY = ""; // 最后Y坐标
        var oL, oT; // 偏移量
        
        // ========== 遮罩层触摸事件 ==========
        
        // 触摸开始：记录初始位置，关闭过渡动画
        cover.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1) {
                oL = e.touches[0].clientX - this.offsetLeft;
                oT = e.touches[0].clientY - this.offsetTop;
                this.style.transitionDuration = "0s";
                cover.style.zIndex = "100";
                cover2.style.zIndex = "2";
                var icon = document.getElementById("icon");
                if (icon) {
                    icon.style.transition = "none";
                }
            }
        }, { passive: true });
        
        // 触摸移动：跟随手指移动，实现带阻尼的拖拽效果
        cover.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1) {
                lastX = e.touches[0].clientX;
                lastY = e.touches[0].clientY;
                var deltaY = lastY - oT;
                if (deltaY > 0 && deltaY > 30 && oT < 100) {
                    if (!controlCenterOpened) {
                        controlCenter.classList.add("show");
                        controlCenterOpened = true;
                    }
                    return;
                }
                if (deltaY >= 0) {
                    return;
                }
                var dampedDeltaY = deltaY * 0.4;
                this.style.left = (lastX - oL) + "px";
                this.style.top = dampedDeltaY + "px";
                var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
                var finalScale = Math.max(0.5, scale);
                this.style.transform = "scale(" + finalScale + ")";
                this.style.borderRadius = "44.5px";
                var icon = document.getElementById("icon");
                if (icon) {
                    var iconSize = Math.max(100, 128 * finalScale);
                    icon.style.width = iconSize + "px";
                    icon.style.height = iconSize + "px";
                }
            }
        }, { passive: true });
        
        // 触摸结束：判断是否关闭应用或恢复展开
        cover.addEventListener("touchend", function(e) {
            if (e.targetTouches.length == 0) {
                // 恢复图标过渡动画
                var icon = document.getElementById("icon");
                if (icon) {
                    icon.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
                }
                // 向上拖动超过屏幕高度的12.5%时关闭应用（只检测向上滑动）
                if (cover.offsetTop < 0 && Math.abs(cover.offsetTop / window.screen.height) > 0.125) {
                    // 恢复过渡动画时长和曲线
                    cover.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    cover.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                    closeApp("gestrue"); // 手势关闭
                    opened = 0;
                    // 重置样式（不重置top，让closeApp处理）
                    cover.style.transform = "scale(1)";
                    cover.style.left = "18px";
                } else {
                    // 未达到关闭阈值，恢复展开状态
                    cover.style.transitionDuration = "0.2s, 1s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                    openApp("gestrue"); // 手势展开
                    // 重置样式
                    cover.style.transform = "scale(1)";
                    cover.style.left = 0;
                    cover.style.top = 0;
                }
            }
        });

        // ========== 遮罩层鼠标事件支持 ==========
        var isMouseDragging = false;
        var mouseStartX = 0;
        var mouseStartY = 0;
        var mouseOffsetX = 0;
        var mouseOffsetY = 0;
        
        // 鼠标按下：记录初始位置，关闭过渡动画
        cover.addEventListener("mousedown", function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
            isMouseDragging = true;
            // 计算鼠标相对于元素左上角的偏移
            mouseOffsetX = e.clientX - this.offsetLeft;
            mouseOffsetY = e.clientY - this.offsetTop;
            mouseStartX = e.clientX;
            mouseStartY = e.clientY;
            // 关闭遮罩过渡动画，实现即时跟随
            this.style.transitionDuration = "0s";
            // 确保拖拽时在最上层
            cover.style.zIndex = "100";
            cover2.style.zIndex = "2";
            // 关闭图标尺寸过渡，实现实时同步
            var icon = document.getElementById("icon");
            if (icon) {
                icon.style.transition = "none";
            }
            if (!e.target.closest('.app-content')) {
                e.preventDefault();
            }
        });
        
        // 鼠标移动：跟随鼠标移动，实现带阻尼的拖拽效果
        document.addEventListener("mousemove", function(e) {
            if (!isMouseDragging) return;
            
            var currentX = e.clientX;
            var currentY = e.clientY;
            // 计算拖动距离
            var deltaY = currentY - mouseOffsetY;
            // 向下滑动显示控制中心（从屏幕顶部区域开始滑动）
            if (deltaY > 0 && deltaY > 30 && mouseOffsetY < 100) {
                if (!controlCenterOpened) {
                    controlCenter.classList.add("show");
                    controlCenterOpened = true;
                }
                return;
            }
            // 只响应向上滑动（deltaY < 0）
            if (deltaY >= 0) {
                return;
            }
            // 应用阻尼系数（0.4），增强阻力感
            var dampedDeltaY = deltaY * 0.4;
            // 更新遮罩位置（带阻尼）
            cover.style.left = (currentX - mouseOffsetX) + "px";
            cover.style.top = dampedDeltaY + "px";
            // 根据拖动距离计算缩放比例（越往上拖越小，带阻尼）
            var scale = 1 - Math.abs(dampedDeltaY / window.screen.height * 1.5);
            var finalScale = Math.max(0.5, scale);
            cover.style.transform = "scale(" + finalScale + ")";
            // 拖动时圆角变为44.5px（iOS风格大圆角）
            cover.style.borderRadius = "44.5px";
            // SVG图标跟随缩放（最小100px，避免太小）
            var icon = document.getElementById("icon");
            if (icon) {
                var iconSize = Math.max(100, 128 * finalScale);
                icon.style.width = iconSize + "px";
                icon.style.height = iconSize + "px";
            }
        });
        
        // 鼠标释放：判断是否关闭应用或恢复展开
        document.addEventListener("mouseup", function(e) {
            if (!isMouseDragging) return;
            isMouseDragging = false;
            
            // 恢复图标过渡动画
            var icon = document.getElementById("icon");
            if (icon) {
                icon.style.transition = "margin-top 0.5s cubic-bezier(0.25, 1, 0.25, 1)";
            }
            // 向上拖动超过屏幕高度的12.5%时关闭应用（只检测向上滑动）
            if (cover.offsetTop < 0 && Math.abs(cover.offsetTop / window.screen.height) > 0.125) {
                // 恢复过渡动画时长和曲线
                cover.style.transitionDuration = "0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                closeApp("gestrue"); // 手势关闭
                opened = 0;
                // 重置样式（不重置top，让closeApp处理）
                cover.style.transform = "scale(1)";
                cover.style.left = "18px";
            } else {
                // 未达到关闭阈值，恢复展开状态
                cover.style.transitionDuration = "0.2s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s, 0.5s";
                cover.style.transitionTimingFunction = "ease, cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1), cubic-bezier(0.25, 1, 0.25, 1)";
                openApp("gestrue"); // 手势展开
                // 重置样式
                cover.style.transform = "scale(1)";
                cover.style.left = 0;
                cover.style.top = 0;
            }
        });

        // 点击控制中心外部关闭它
        controlCenter.addEventListener("click", function(e) {
            if (e.target === controlCenter) {
                controlCenter.classList.remove("show");
                controlCenterOpened = false;
            }
        });
        
        // 向上滑动关闭控制中心
        controlCenter.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1) {
                oT = e.touches[0].clientY;
            }
        }, { passive: true });
        
        controlCenter.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1) {
                var deltaY = e.touches[0].clientY - oT;
                if (deltaY < -50) {
                    controlCenter.classList.remove("show");
                    controlCenterOpened = false;
                }
            }
        }, { passive: true });
        
        // ========== 控制中心鼠标事件支持 ==========
        var ccMouseStartY = 0;
        var isCCMouseDragging = false;
        
        // 鼠标按下：记录初始位置
        controlCenter.addEventListener("mousedown", function(e) {
            isCCMouseDragging = true;
            ccMouseStartY = e.clientY;
        });
        
        // 鼠标移动：检测向上拖动关闭控制中心
        controlCenter.addEventListener("mousemove", function(e) {
            if (!isCCMouseDragging) return;
            var deltaY = e.clientY - ccMouseStartY;
            // 向上滑动超过50px关闭控制中心
            if (deltaY < -50) {
                controlCenter.classList.remove("show");
                controlCenterOpened = false;
                isCCMouseDragging = false;
            }
        });
        
        // 鼠标释放：重置拖动状态
        controlCenter.addEventListener("mouseup", function(e) {
            isCCMouseDragging = false;
        });
        
        // 鼠标离开控制中心区域：重置拖动状态
        controlCenter.addEventListener("mouseleave", function(e) {
            isCCMouseDragging = false;
        });
        
        // ========== 主容器全局下滑呼出控制中心 ==========
        var container = document.getElementById("container");
        var containerStartY = 0;
        
        container.addEventListener("touchstart", function(e) {
            if (e.targetTouches.length == 1) {
                containerStartY = e.touches[0].clientY;
            }
        }, { passive: true });
        
        container.addEventListener("touchmove", function(e) {
            if (e.targetTouches.length == 1 && !controlCenterOpened) {
                var currentY = e.touches[0].clientY;
                var deltaY = currentY - containerStartY;
                // 从屏幕顶部向下滑动超过30px呼出控制中心
                if (deltaY > 30 && containerStartY < 80) {
                    controlCenter.classList.add("show");
                    controlCenterOpened = true;
                }
            }
        }, { passive: true });
        
        // ========== 主容器全局鼠标下滑呼出控制中心 ==========
        var containerMouseStartY = 0;
        var isContainerMouseDragging = false;
        
        container.addEventListener("mousedown", function(e) {
            isContainerMouseDragging = true;
            containerMouseStartY = e.clientY;
        });
        
        container.addEventListener("mousemove", function(e) {
            if (!isContainerMouseDragging || controlCenterOpened) return;
            var currentY = e.clientY;
            var deltaY = currentY - containerMouseStartY;
            // 从屏幕顶部向下滑动超过30px呼出控制中心
            if (deltaY > 30 && containerMouseStartY < 80) {
                controlCenter.classList.add("show");
                controlCenterOpened = true;
                isContainerMouseDragging = false;
            }
        });
        
        container.addEventListener("mouseup", function(e) {
            isContainerMouseDragging = false;
        });
        
        container.addEventListener("mouseleave", function(e) {
            isContainerMouseDragging = false;
        });

        // ========== 亮度/音量滑块拖动功能 ==========
        function initSlider(sliderId) {
            var slider = document.getElementById(sliderId);
            if (!slider) return;

            var track = slider.querySelector('.cc-slider-track');
            var fill = slider.querySelector('.cc-slider-fill');
            var isDragging = false;

            function updateSlider(clientY) {
                var rect = track.getBoundingClientRect();
                var percentage = 1 - (clientY - rect.top) / rect.height;
                percentage = Math.max(0, Math.min(1, percentage));
                fill.style.height = (percentage * 100) + '%';
            }

            slider.addEventListener('touchstart', function(e) {
                isDragging = true;
                updateSlider(e.touches[0].clientY);
                e.preventDefault();
            }, { passive: false });

            slider.addEventListener('touchmove', function(e) {
                if (isDragging) {
                    updateSlider(e.touches[0].clientY);
                    e.preventDefault();
                }
            }, { passive: false });

            slider.addEventListener('touchend', function() {
                isDragging = false;
            });

            // 鼠标支持（用于桌面端测试）
            slider.addEventListener('mousedown', function(e) {
                isDragging = true;
                updateSlider(e.clientY);
            });

            document.addEventListener('mousemove', function(e) {
                if (isDragging) {
                    updateSlider(e.clientY);
                }
            });

            document.addEventListener('mouseup', function() {
                isDragging = false;
            });
        }

        // 初始化亮度滑块
        initSlider('brightnessSlider');
        // 初始化音量滑块
        initSlider('volumeSlider');
        
        // ========== 键盘快捷键支持 ==========
        document.addEventListener('keydown', function(e) {
            // 按C键呼出/关闭控制中心
            if (e.key === 'c' || e.key === 'C') {
                if (controlCenterOpened) {
                    controlCenter.classList.remove('show');
                    controlCenterOpened = false;
                } else {
                    controlCenter.classList.add('show');
                    controlCenterOpened = true;
                }
            }
        });

        // ========== 页面导航功能 ==========
        var currentPage = null;
        var subpageStack = [];

        // 初始化页面导航
        function initPageNavigation() {
            // 获取所有带有 data-subpage 属性的元素
            document.querySelectorAll('[data-subpage]').forEach(function(item) {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    var subpageId = this.getAttribute('data-subpage');
                    var targetSubpage = document.getElementById('subpage-' + subpageId);
                    if (!targetSubpage) return;
                    
                    // 找到当前显示的页面
                    var parentBody = this.closest('.app-body');
                    var currentVisiblePage = parentBody.querySelector('.page.show') || parentBody.querySelector('.subpage.show');
                    
                    if (currentVisiblePage) {
                        currentVisiblePage.classList.add('slide-left');
                        subpageStack.push(currentVisiblePage);
                    }
                    
                    targetSubpage.classList.add('show');
                });
            });

            // 返回按钮事件
            document.querySelectorAll('[data-back]').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    goBack();
                });
            });
        }

        // 返回上一页
        function goBack() {
            if (subpageStack.length === 0) return;
            
            var currentSubpage = document.querySelector('.subpage.show:not(.slide-left)');
            if (currentSubpage) {
                currentSubpage.classList.remove('show');
            }
            
            var prevPage = subpageStack.pop();
            if (prevPage) {
                prevPage.classList.remove('slide-left');
            }
        }

        // 初始化
        initPageNavigation();

        // ========== 壁纸API管理 ==========
        var DEFAULT_WALLPAPER_API = 'https://imgapi.siiway.top/image';
        var wallpaperApiInput = document.getElementById('wallpaperApiInput');
        var wallpaper = document.getElementById('wallpaper');
        var refreshModeLabel = document.getElementById('refreshModeLabel');
        var randomRefresh = true;

        function getWallpaperApi() {
            return localStorage.getItem('wallpaperApi') || DEFAULT_WALLPAPER_API;
        }

        function applyWallpaper(apiUrl) {
            var url = apiUrl || getWallpaperApi();
            if (randomRefresh) {
                url = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_t=' + Date.now();
            }
            wallpaper.style.backgroundImage = 'url("' + url + '")';
        }

        function saveWallpaperApi(apiUrl) {
            apiUrl = apiUrl.trim();
            if (!apiUrl) {
                apiUrl = DEFAULT_WALLPAPER_API;
            }
            localStorage.setItem('wallpaperApi', apiUrl);
            localStorage.removeItem('wallpaperDataUrl');
            wallpaperApiInput.value = apiUrl;
            randomRefresh = false;
            applyWallpaper(apiUrl);
            setTimeout(function() { randomRefresh = true; }, 100);
        }

        if (wallpaperApiInput) {
            wallpaperApiInput.value = getWallpaperApi();
        }

        var wallpaperSaveBtn = document.getElementById('wallpaperSaveBtn');
        if (wallpaperSaveBtn) {
            wallpaperSaveBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                saveWallpaperApi(wallpaperApiInput.value);
            });
        }

        var wallpaperRefreshBtn = document.getElementById('wallpaperRefreshBtn');
        if (wallpaperRefreshBtn) {
            wallpaperRefreshBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                applyWallpaper();
            });
        }

        var wallpaperResetBtn = document.getElementById('wallpaperResetBtn');
        if (wallpaperResetBtn) {
            wallpaperResetBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                localStorage.removeItem('wallpaperApi');
                localStorage.removeItem('wallpaperDataUrl');
                wallpaperApiInput.value = DEFAULT_WALLPAPER_API;
                randomRefresh = false;
                applyWallpaper(DEFAULT_WALLPAPER_API);
                setTimeout(function() { randomRefresh = true; }, 100);
            });
        }

        var refreshModeToggle = document.getElementById('refreshModeToggle');
        if (refreshModeToggle) {
            refreshModeToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                randomRefresh = !randomRefresh;
                refreshModeLabel.innerText = randomRefresh ? '随机刷新' : '直接刷新';
            });
        }

        var wallpaperFileInput = document.getElementById('wallpaperFileInput');
        var wallpaperUploadBtn = document.getElementById('wallpaperUploadBtn');
        if (wallpaperFileInput && wallpaperUploadBtn) {
            wallpaperUploadBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                wallpaperFileInput.click();
            });
            wallpaperFileInput.addEventListener('change', function() {
                var file = this.files[0];
                if (!file) return;
                var reader = new FileReader();
                reader.onload = function(e) {
                    var dataUrl = e.target.result;
                    wallpaper.style.backgroundImage = 'url("' + dataUrl + '")';
                    localStorage.setItem('wallpaperDataUrl', dataUrl);
                    wallpaperApiInput.value = '';
                };
                reader.readAsDataURL(file);
            });
        }

        (function() {
            var savedDataUrl = localStorage.getItem('wallpaperDataUrl');
            if (savedDataUrl) {
                wallpaper.style.backgroundImage = 'url("' + savedDataUrl + '")';
                return;
            }
            var savedApi = getWallpaperApi();
            if (savedApi !== DEFAULT_WALLPAPER_API) {
                var noRandom = randomRefresh;
                randomRefresh = false;
                applyWallpaper(savedApi);
                randomRefresh = noRandom;
            }
        })();
