(function (global, $) {
    'use strict';
    var PLAYER_NAME = 'Amplience Viewer';

    var Viewer = function (settings) {
        var self = this;

        var defaultSettings = amp.viewerSettings.viewerConfigs;

        if (settings.view === 'portrait') {

            amp.viewerSettings.overwritePortraitSettings(defaultSettings);
            //assign portrait settings
            amp.viewerSettings.portraitConfigs();
            self.isPortraitView = true;
        }

        else if (settings.view === 'landscape') {
            self.isLandscapeView = true;
        }

        else {
            self.isSquareView = true;
        }

        self.settings = $.extend(true, {}, defaultSettings, settings);

        if (self.settings.locale && self.settings.locale.length > 0) {
            self.settings.ampConfigs.mainContainerZoomInline.transforms.push('locale=' + self.settings.locale);
        }

        self.views = {
            desktopNormalView: 'desktopNormalView',
            desktopFullView: 'desktopFullView',
            mobileNormalView: 'mobileNormalView'
        };
        self.assets = [];
        self.currentAssetIndex = 0;
        self.canTouch = !!(('ontouchstart' in window) ||
        window.DocumentTouch && document instanceof window.DocumentTouch);
        self.wrapper = $('<div class="amp-viewer-kit"></div>');
        self.deviceWidth = global.innerWidth;

        self.controller();
        self.tags = [];
        self.IE = self.isIE();
    };

    Viewer.prototype.controller = function () {
        var self = this;
        amp.init({
            'client_id': self.settings.client,
            'di_basepath': self.settings.imageBasePath,
            'cache_window': self.settings.cacheWindow
        });

        //init ecommBridge

        if (window.ecommBridge && self.settings.ecommBridge) {
            this.bridgeConnector.initAll();
        }

        self.applyImgTemplates();

        var target = $(self.settings.target);
        target.append(self.wrapper);

        var setInfo = self.initSetData();

        self.getSet(setInfo)
            .then(function (result) {
                self.assets = result;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.initSetData = function () {
        var self = this;
        var page = self.bridgeConnector.page;
        //Check if bridge page exists, and assign its settings instead of defaults
        if (page !== null && self.settings.ecommBridge) {
            if (page.mediaList && page.mediaList.constructor === Array && page.mediaList.length > 0) {
                return self.returnSetData(page.mediaList);
            } else if (page.mediaSet && typeof page.mediaSet === 'string' && page.mediaSet.length > 0) {
                return self.returnSetData(page.mediaSet);
            }
        } else {
            return self.returnSetData(self.settings.set);
        }
    };

    Viewer.prototype.returnSetData = function (data) {
        var self = this;
        var transform = '&v=' + self.settings.cacheControl;
        if (data.constructor === Array) {
            self.bridgeConnector.enrichMediaListWithParams(data, {
                transform: transform
            });
            return data;
        } else {
            return {
                name: data,
                type: 's',
                transform: transform
            };
        }
    };

    Viewer.prototype.secureData = function (data) {
        var self = this;
        if (self.settings.secure) {
            var strData = JSON.stringify(data);
            strData = strData.replace(/http:\/\//g, 'https://');
            data = JSON.parse(strData);
        }
        return data;
    };

    Viewer.prototype.getSet = function (setInfo) {
        /*
         @setInfo Object | Array
         if ecommBridge holds List info about assets, then it will be array, otherwise object
         */

        var self = this;

        return new Promise(function (resolve, reject) {
            amp.get(setInfo,
                function (data) {
                    var items = null;
                    if (setInfo.constructor === Array) {
                        items = self.bridgeConnector.convertListToSet(setInfo, data).items;
                    } else {
                        items = data[setInfo.name].items;
                    }
                    resolve(items);
                },
                function () {
                    self.getImage(self.settings.errImg)
                        .then(function (result) {
                            self.settings.errCallback.call(self);
                            resolve([{
                                src: result.url
                            }]);
                        });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.getImage = function (imageName) {
        var self = this;
        return new Promise(function (resolve, reject) {
            amp.get({
                    name: imageName,
                    type: 'i',
                    transform: '&v=' + self.settings.cacheControl
                },
                function (data) {
                    resolve(data[imageName]);
                },
                function () {
                    resolve({
                        url: '//i1.adis.ws/i/playground/404'
                    });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.changeSet = function (setInfo) {
        /*
         @setInfo Array | String
         if setInfo is Array, assume that ecommBridge is used
         */
        var self = this;

        if (self.bridgeConnector.page !== null && self.settings.ecommBridge) {
            if (setInfo.constructor === Array && setInfo.length > 0) {
                self.bridgeConnector.page.mediaList = setInfo;
            } else if (typeof setInfo === 'string' && setInfo.length > 0) {
                self.bridgeConnector.page.mediaset = setInfo;
                self.bridgeConnector.page.mediaList = null;
            }
        } else {
            self.settings.set = setInfo;
        }

        var setData = self.returnSetData(setInfo);

        self.getSet(setData)
            .then(function (result) {
                self.assets = result;
                self.currentAssetIndex = 0;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.isIE = function () {
        if (/MSIE [0-9]{1,}/.test(navigator.userAgent)) {
            return true;
        } else if (/Trident\/\d./i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    }

    Viewer.prototype.isMobile = function () {
        var self = this;
        if (self.settings.isMobile) {
            return true;
        }
        return global.innerWidth <= 768;
    };

    Viewer.prototype.renderInitialView = function () {
        var self = this;
        self.currentView = self.isMobile() ? self.views.mobileNormalView : self.views.desktopNormalView;
        self.renderView(self.currentView);
    };

    Viewer.prototype.renderView = function (view, spinManipulate) {
        var self = this;
        var spinManipulate = spinManipulate || false;
        self.destroyAmpWidgets();

        switch (view) {
            case self.views.desktopNormalView:
                self.renderDesktopNormalView();
                break;
            case self.views.desktopFullView:
                self.renderDesktopFullView();
                break;
            case self.views.mobileNormalView:
                self.renderMobileNormalView();
                break;
            default:
                console.warn(PLAYER_NAME + ': Unknown view: ' + view + '. Viewer desktopNormalView.');
                self.renderDesktopNormalView();
                break;
        }

        if (view === self.views.desktopFullView) {
            this._scrollPosition = $(window).scrollTop();
            $('html, body').addClass('amp-no-scroll');
        }
        else {
            $('html, body').removeClass('amp-no-scroll');
            $(window).scrollTop(this._scrollPosition)
        }

        self.mainContainerList = self.wrapper.find('.main-container .list');
        self.navContainerList = self.wrapper.find('.nav-container .list');
        self.tooltip = self.wrapper.find('.main-container .tooltip');
        self.tooltipText = self.tooltip.find('span.text');

        self.bindGenericEvents();
        self.bindAmpEvents();
        self.bindNavigationEvents();
        self.bindSpinEvents();

        self.initImagesSrcset();
        self.initAmpWidgets(spinManipulate);

        self.applyNavigationStyles();

        self.checkMainContainerNavArrows();
        self.checkNavContainerNavArrows();
        self.checkZoomIcons();
        self.checkMainContainerSlidesVisibility();

        switch (view) {
            case self.views.desktopNormalView:
                self.bindDesktopNormalViewEvents();
                break;
            case self.views.desktopFullView:
                self.bindDesktopFullViewEvents();
                break;
            case self.views.mobileNormalView:
                self.bindMobileNormalViewEvents();
                break;
        }

        if (self.settings.initCallback) {
            self.settings.initCallback.apply(self);
        }
    };

    Viewer.prototype.getTemplateData = function (firstLocaleParam) {
        var self = this;
        var data = {
            items: self.assets,
            templates: self.getTemplates(),
            locale: {
                first: '',
                second: ''
            },
            view: ''
        };

        if (self.settings.locale && $.trim(self.settings.locale).length > 0) {
            var base = 'locale=' + self.settings.locale;
            data.locale.first = '?' + base;
            data.locale.second = '&' + base;
        }

        if (self.settings.view && self.settings.view.length > 0) {
            data.view = self.settings.view;
        }

        return data;
    };

    Viewer.prototype.renderDesktopNormalView = function () {
        var self = this;
        self.currentView = self.views.desktopNormalView;
        self.wrapper.html(amp.templates.desktopNormalView(self.getTemplateData()));
    };

    Viewer.prototype.renderDesktopFullView = function () {
        var self = this;
        self.currentView = self.views.desktopFullView;
        self.wrapper.html(amp.templates.desktopFullView(self.getTemplateData()));
    };

    Viewer.prototype.renderMobileNormalView = function () {
        var self = this;
        self.currentView = self.views.mobileNormalView;
        self.wrapper.html(amp.templates.mobileNormalView(self.getTemplateData()));
    };

    Viewer.prototype.applyImgTemplates = function () {
        var self = this;
        var errImgTransform = '&img404=' + self.settings.errImg + '&v=' + self.settings.cacheControl;
        var iterate = function (obj, callback) {
            $.each(obj, function (key, val) {
                if ($.type(val) === 'string') {
                    callback(obj, key);
                }
                else {
                    iterate(val, callback);
                }
            });
        };

        iterate(self.settings.templates, function (obj, key) {
            obj[key] += errImgTransform;
        });
    };

    Viewer.prototype.getTemplates = function () {
        var self = this;
        var thumbTemplate = self.settings.templates.thumb;
        var isPortrait = self.isPortraitView && self.currentView === self.views.desktopNormalView;

        if (isPortrait) {
            thumbTemplate = self.settings.templates.thumbPortrait;
        }

        var tts = {
            thumb: thumbTemplate,
            navIcons: {
                nav: isPortrait ? self.settings.navIconsPortraitNav : self.settings.navIconsNav,
                main: self.settings.navIconsMain
            }
        };

        switch (self.currentView) {
            case self.views.desktopNormalView:
                tts.main = self.settings.templates.desktop.main;
                tts.mainRetina = self.settings.templates.desktop.mainRetina;
                tts.zoom = self.settings.templates.desktop.zoom;
                break;
            case self.views.desktopFullView:
                tts.main = self.settings.templates.desktopFull.main;
                tts.mainRetina = self.settings.templates.desktopFull.mainRetina;
                tts.zoom = self.settings.templates.desktopFull.zoom;
                break;
            case self.views.mobileNormalView:
                tts.main = self.settings.templates.mobile.main;
                tts.mainRetina = self.settings.templates.mobile.mainRetina;
                tts.zoom = self.settings.templates.mobile.zoom;
                break;
        }

        return tts;
    };

    Viewer.prototype.initImagesSrcset = function () {
        var self = this;
    };

    Viewer.prototype.initAmpWidgets = function (spinManipulate) {
        var self = this;
        var ampConfigs = self.getAmpConfigs();

        var navSettings = ampConfigs.navContainerCarousel;

        if (self.settings.view && self.isPortraitView && self.currentView === 'desktopNormalView') {
            navSettings = ampConfigs.navContainerCarouselPortrait;
        }

        self.wrapper.find('[data-amp-src]').ampImage(ampConfigs.image);

        self.mainContainerList.ampCarousel(ampConfigs.mainContainerCarousel);
        self.mainContainerList.ampNav(ampConfigs.mainContainerNav);

        self.navContainerList.ampCarousel(navSettings);
        self.navContainerList.ampNav(ampConfigs.navContainerNav);

        var carouselData = self.mainContainerList.data()['amp-ampCarousel'] || self.mainContainerList.data()['ampAmpCarousel'];

        self.mainContainerList.on('touchstart', function(){
            carouselData.preventStop = false;
        });

        self.navContainerList.find('.amp-slide').on('touchstart', function(){
            carouselData.preventStop = true;
        });

        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('set')) {
                var spinSettings = ampConfigs.mainContainerSpin;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    spinSettings = ampConfigs.mainContainerSpinPortrait;
                }

                var $spin = $('#' + asset.name);
                var $spin3d = $spin.find('.amp-inner-spinset');

                if ($spin3d.length > 0) {
                    $spin.ampSpin(ampConfigs.mainContainerSpin3d);
                    $spin3d.each(function (i) {
                        var spinConfig = $.extend(true, {}, ampConfigs.mainContainerSpin, {
                            play: {
                                onVisible: false,
                                onLoad: false
                            },
                            preloadType: 'window'
                        });
                        $(this).ampSpin(spinConfig);
                    });
                }

                else {
                    var mainContainerSpin = ampConfigs.mainContainerSpin;
                    if(mainContainerSpin.play.onVisible == true){
                        self.spinVisible = true;
                        mainContainerSpin.play.onVisible = false;
                    }
                    $spin.ampSpin(mainContainerSpin);
                }
            } else if (asset.hasOwnProperty('media')) {
                var videoSettings = ampConfigs.mainContainerVideo;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    videoSettings = ampConfigs.mainContainerVideoPortrait;
                    videoSettings.nativeControlsForTouch = false;
                }

                var $videoTag = self.mainContainerList.find('#' + asset.name).ampVideo(videoSettings);

                $videoTag.find('video').on('touchstart', function () {
                    var state = $videoTag.ampVideo('state');
                    if (state == 2) {
                        $videoTag.ampVideo('play');
                    }
                    else {
                        $videoTag.ampVideo('pause');
                    }
                });

                self.tags.push({
                    alias: 'videoContainer',
                    $tag: $videoTag
                });

            } else if (self.currentView !== self.views.desktopNormalView) {
                self.mainContainerList.find('> > li:eq(' + i + ') img')
                    .ampZoomInline(ampConfigs.mainContainerZoomInline);
            }
        }
    };

    Viewer.prototype.destroyAmpWidgets = function () {
        var self = this;
        self.tags.length = 0;
        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('media')) {
                var video = $('#' + asset.name);
                if (video.length > 0) {
                    video.ampVideo('destroy');
                }
            }
        }
    };
//Move thumbs to one position after active or to one position before active
    Viewer.prototype.navMove = function (thumb) {
        var self = this;
        var $thumb = $(thumb);
        var $next = $thumb.next();
        if ($next.length > 0) {
            if (!$next.hasClass('amp-visible')) {
                self.navContainerList.ampCarousel('next');
            }
            else if (!$thumb.prev().hasClass('amp-visible')) {
                self.navContainerList.ampCarousel('prev');
            }
        }
    };

    Viewer.prototype.navigateToActiveThumb = function () {
        var self = this;
        var $thumbs = self.navContainerList.find('.amp-slide');
        var $currentThumb = $thumbs.filter('.amp-selected');
        var visibleSlidesNum = Math.floor(self.navContainerList.width() /
            self.settings.ampConfigs.navElementsWidthPxMobile);
        var nextThumbsWidth = $thumbs.nextAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        var prevThumbsWidth = $thumbs.prevAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        if ($currentThumb.index() === 0 || $currentThumb.index() === $thumbs.length - 1) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 1);
        }
        else if (nextThumbsWidth >= visibleSlidesNum) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index());
        }
        else {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 2);
        }
    };

    Viewer.prototype.bindNavigationEvents = function () {
        var self = this;

        self.bindIconClickEvent(self.wrapper.find('.main-container-prev'), function () {
            self.mainContainerMove('prev');
        });
        self.bindIconClickEvent(self.wrapper.find('.main-container-next'), function () {
            self.mainContainerMove('next');
        });

        self.bindIconClickEvent(self.wrapper.find('.nav-container-prev'), function () {
            self.navContainerMove('prev');
        });
        self.bindIconClickEvent(self.wrapper.find('.nav-container-next'), function () {
            self.navContainerMove('next');
        });
    };

    Viewer.prototype.navContainerMove = function (dir) {
        var self = this;
        var info = self.getNavigationVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }
        self.navContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.mainContainerMove = function (dir) {
        var self = this;
        var info = self.getMainVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }
        self.mainContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.initTooltips = function () {
        var self = this;

        self.mainContainerList.off('mousemove mouseout');
        self.tooltip.attr({style: ''});

        var assetIndex = self.currentAssetIndex;
        var currentAsset = self.assets[assetIndex];

        if (currentAsset.hasOwnProperty('set')) {
            var spin3D = false;
            if (currentAsset.set.items && currentAsset.set.items.length > 0 && currentAsset.set.items[0].set) {
                spin3D = true;
            }
            self.initSpinTooltip(spin3D);
        } else if (currentAsset.hasOwnProperty('media')) {
            self.initVideoTooltip();
        } else {
            self.initImageTooltip();
        }
    };

    Viewer.prototype.initImageTooltip = function () {
        var self = this;
        var tapText = '';
        self.tooltip.attr({class: 'tooltip image'});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (self.canTouch) {
                    tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.image.doubleTouch.text :
                        self.settings.tooltips.desktop.image.touch.text;
                    self.tooltip.css({position: 'absolute'});
                    self.tooltipText.text(tapText);
                    self.fadeOutTooltip();
                } else {
                    self.tooltip.fadeOut(0);

                    var margin = +self.mainContainerList.css('margin-left').replace('px', '');

                    self.tooltipText.text(self.settings.tooltips.desktop.image.noTouch.text);

                    self.mainContainerList.on('mousemove', function (e) {
                        self.tooltip.css({
                            top: e.clientY - self.settings.tooltips.offsets.top,
                            left: e.clientX - self.settings.tooltips.offsets.left,
                            display: 'block'
                        });
                    });

                    self.mainContainerList.on('mouseout', function () {
                        self.tooltip.fadeOut(0);
                    });
                }
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.image.doubleTouch.text :
                    self.settings.tooltips.desktopFull.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.image.noTouch.text);
                self.tooltip.fadeOut(0);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.image.doubleTouch.text :
                    self.settings.tooltips.mobile.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.image.noTouch.text);
                self.fadeOutTooltip();
                break;
        }
    };

    Viewer.prototype.initSpinTooltip = function (spin3D) {
        var self = this;
        var tapText = '';
        var spinClass = spin3D ? 'spin-3d' : 'spin';
        self.tooltip.attr({class: 'tooltip ' + spinClass});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.spin.doubleTouch.text :
                    self.settings.tooltips.desktop.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktop.spin.noTouch.text);
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.spin.doubleTouch.text :
                    self.settings.tooltips.desktopFull.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.spin.noTouch.text);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.spin.doubleTouch.text :
                    self.settings.tooltips.mobile.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.spin.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.initVideoTooltip = function () {
        var self = this;

        self.tooltip.attr({class: 'tooltip video'});

        switch (self.currentView) {
            case self.views.desktopNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktop.video.play.touch.text : self.settings.tooltips.desktop.video.play.noTouch.text);
                break;
            case self.views.desktopFullView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktopFull.video.play.touch.text : self.settings.tooltips.desktopFull.video.play.noTouch.text);
                break;
            case self.views.mobileNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.mobile.video.play.touch.text : self.settings.tooltips.mobile.video.play.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.fadeOutTooltip = function () {
        var self = this;
        clearTimeout(self.tooltipTimeout);
        self.tooltip.stop();
        self.tooltipTimeout = setTimeout(function () {
            self.tooltip.fadeOut();
        }, self.settings.tooltips.displayTime);
    };

    Viewer.prototype.doubleTapEvent = function ($element) {
        var self = this;
        var lastTapTime = 0;
        var lastTapTime2 = 0;
        var firsttouch = true;
        var touchStart = {
          x: 0,
          y: 0
        };
        var touchEnd = {
          x: 1000,
          y: 1000
        };
        var touch1 = {
          x: 0,
          y: 0
        };
        var touch2 = {
          x: 1000,
          y: 1000
        };
        $element.on('touchstart', function (e) {
            if (self.isZoomCycle) {
                lastTapTime = 0;
                lastTapTime2 = 0;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime2;
            //if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
            //    e.preventDefault();
            //}
            touchStart = {
                x: Math.abs(e.originalEvent.touches[0].pageX) || 0,
                y: Math.abs(e.originalEvent.touches[0].pageY) || 0
            };
            if (firsttouch) {
              touch1 = touchStart;
              firsttouch = false;
            } else {
              touch2 = touchStart;
              firsttouch = true;
            }
            lastTapTime2 = currentTime;
        });
        $element.on('touchend', function (e) {
            e.preventDefault();
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime;
            touchEnd = {
                x: Math.abs(e.originalEvent.changedTouches[0].pageX) || 1000,
                y: Math.abs(e.originalEvent.changedTouches[0].pageY) || 1000
            };
            var diff1 = {
                x: Math.abs(touch2.x - touch1.x),
                y: Math.abs(touch2.y - touch1.y)
            };
            var diff2 = {
                x: Math.abs(touchEnd.x - touchStart.x),
                y: Math.abs(touchEnd.y - touchStart.y)
            };
            if (diff1.x < 50 && diff1.y < 50 && diff2.x < 50 && diff2.y < 50) {
                if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
                    $(this).trigger('doubletap');
                    $(this).trigger('doubletapend');
                } else {
                    if ($(e.target).hasClass('amp-slide')) {
                        e.stopPropagation();
                    }
                }
            }
            lastTapTime = currentTime;
        });
        return 'doubletap';
    };

    Viewer.prototype.bindDesktopNormalViewEvents = function () {
        var self = this;
        var $element = self.mainContainerList.find('.zoom-trap');

        var event = (self.canTouch && self.settings.zoomInlineDoubleTap)
            ? self.doubleTapEvent($element) : 'click';

        $element.on(event, function () {
            self.renderView(self.views.desktopFullView);
        });
    };

    Viewer.prototype.bindDesktopFullViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.renderView(self.views.desktopNormalView, true);
        });

        self.bindIconClickEvent(self.wrapper.find('.panel .plus'), function () {
            self.zoomIn();
        });
        self.bindIconClickEvent(self.wrapper.find('.panel .minus'), function () {
            self.zoomOut();
        });

        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindMobileNormalViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.zoomOutFull();
        });
        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindSpinEvents = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        var spins = self.mainContainerList.find('.spin-trap + ul');
        if (self.canTouch) {
            self.bindTapEvent(spinTraps, function () {
                var $spinTrap = $(this);
                $spinTrap.addClass('active-for-scrolling');
                if($spinTrap.next().hasClass('amp-outer-spin')){
                    $spinTrap.parent().on('touchstart', self._prevent);
                }
            });

            self.bindTapEvent(spins, function () {
                var $spin = $(this);
                var $parent = $(this).parent()
                $parent.find('.spin-trap').removeClass('active-for-scrolling');
                if($spin.hasClass('amp-outer-spin')){
                    $parent.off('touchstart', self._prevent);
                }
            });
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindZoomEvents = function (zoomAction) {
        var self = this;
        var zoomTraps = self.mainContainerList.find('.zoom-trap');
        self.bindTapEvent(zoomTraps, zoomAction.bind(self));
    };

    Viewer.prototype._resize = function () {
        this.checkView();
        if (this.currentView === this.views.mobileNormalView ||
            this.isPortraitView && this.currentView === this.views.desktopNormalView) {
            this.navigateToActiveThumb();
            this.applyNavigationStyles();
            this.checkNavContainerNavArrows();
        }
    };

    Viewer.prototype._orientationChange = function(){
        var self = this;
        setTimeout(function(){
            self._resize();
        }, 300)
    };


    Viewer.prototype.bindGenericEvents = function () {
        var self = this;
        $(window).off('resize', this._resize);
        $(window).on('resize', this._resize.bind(this));

        $(document).off('gesturestart', self._prevent);
        $(document).on('gesturestart', self._prevent.bind(this));


        window.removeEventListener("orientationchange", self._orientationChange);
        window.addEventListener("orientationchange", self._orientationChange.bind(this));


        var touchmoves = [];
        var $ampCarousel = false;
        var blocked = false;

        $(document).off('touchmove.viewerkit');
        $(document).on('touchmove.viewerkit', function (e) {
            if (e.originalEvent.touches[0] && e.originalEvent.touches[0].clientX !== undefined) {
              if(!$ampCarousel)  {
                $ampCarousel = $(e.target).parents('.amp-carousel');
              }
              if ($ampCarousel && $ampCarousel.length > 0) {
                var coords = {
                  clientX: e.originalEvent.touches[0].clientX,
                  clientY: e.originalEvent.touches[0].clientY
                };
                touchmoves.push(coords);
                var diffX = Math.abs(touchmoves[touchmoves.length-1].clientX - touchmoves[0].clientX);
                var diffY = Math.abs(touchmoves[touchmoves.length-1].clientY - touchmoves[0].clientY);
                if (!blocked && diffX > diffY) {
                  $ampCarousel.on('touchmove', self._prevent);
                  blocked = true;
                }
                if (blocked && diffX <= diffY) {
                  $ampCarousel.off('touchmove', self._prevent);
                  blocked = false;
                }
              }
            }
        });

        $(document).off('touchend.viewerkit');
        $(document).on('touchend.viewerkit', function (e) {
            touchmoves = [];
            if (blocked && $ampCarousel && $ampCarousel.length > 0) {
              $ampCarousel.off('touchmove', self._prevent);
              blocked = false;
            }
            $ampCarousel = false;
        });
    };

    Viewer.prototype.startSpin = function(assetIndex){
        var self = this;
        var currentAsset = self.assets[assetIndex];

        if(currentAsset.type === 'set' && currentAsset.set.items[0].type != 'set'){
            var $spin = self.mainContainerList.find('.amp-slide').eq(assetIndex).find('.amp-spin');

            var spinData = typeof $spin.data() !== 'undefined' ?
                ($spin.data()['amp-ampSpin'] || $spin.data()['ampAmpSpin']) : false;

            if($spin.length > 0 && (!spinData || spinData._loaded == true)){
                setTimeout(function(){
                    $spin.ampSpin('playRepeat', 1);
                }, self.settings.ampConfigs.mainContainerCarousel.animDuration);
            }
        }
    };

    Viewer.prototype.bindAmpEvents = function () {
        var self = this;

        self.mainContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {

            $('.amp-spin').find('.amp-frame').css({
                'margin-left': '-1px'
            });
            self.prevAssetIndex = self.currentAssetIndex;
            self.currentAssetIndex = data.index - 1;
            self.zoomOutFull();
            self.initTooltips();
            self.checkSpins();
            self.checkMainContainerNavArrows();
            self.checkZoomIcons();
            self.checkMainContainerSlidesVisibility(self.settings.ampConfigs.mainContainerCarousel.animDuration);
            if(self.spinVisible){
                self.startSpin(self.currentAssetIndex);
            }
        });

        self.navContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {
            self.checkNavContainerNavArrows();
            if (self.currentView === self.views.mobileNormalView && e.type === 'ampcarouselcreated') {
                self.navContainerList.find('.amp-slide').on('mouseup', function () {
                    self.navMove(this);
                });
            }
        });

        self.mainContainerList.find('.zoom-trap > img').on('ampzoominlinezoomedin ampzoominlinezoomedinfull ' +
                'ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.checkZoomIcons();
                self.toggleZoomScrolling($(this).parent().find('.amp-zoomed'));
            })
            .on('ampzoominlinezoomedin ampzoominlinezoomedinfull', function (e, data) {
                self.lastZoomDir = 'In';
            })
            .on('ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.lastZoomDir = 'Out';
            });

        self.mainContainerList.find('.video').on('ampvideofullscreenchange', function (e, data) {
            var state = $(e.target).ampVideo('state');
            // If video is not paused
            if (state !== 2 && data.player && data.player.isFullscreen_) {
                setTimeout(function () {
                    $(e.target).ampVideo('play');
                }, 1000);
            }
        });
    };

    Viewer.prototype.checkMainContainerNavArrows = function () {
        var self = this;
        var assetIndex = self.currentAssetIndex;

        self.wrapper.find('.main-container > .amp-js-nav').removeClass('disabled');

        if (assetIndex === 0) {
            self.wrapper.find('.main-container-prev').addClass('disabled');
        }
        if (assetIndex === self.assets.length - 1) {
            self.wrapper.find('.main-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkNavContainerNavArrows = function () {
        var self = this;
        self.wrapper.find('.nav-container > .amp-js-nav').removeClass('disabled');
        var info = self.getNavigationVisibleSlidesInfo();
        if (info.isFirst) {
            self.wrapper.find('.nav-container-prev').addClass('disabled');
        }
        if (info.isLast) {
            self.wrapper.find('.nav-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkView = function () {
        var self = this;
        if (self.isMobile() && self.currentView !== self.views.mobileNormalView) {
            self.renderView(self.views.mobileNormalView);
        } else if (!self.isMobile() && self.currentView === self.views.mobileNormalView) {
            self.renderView(self.views.desktopNormalView);
        }
    };

    Viewer.prototype.getAmpConfigs = function () {
        var self = this;

        var ampConfigs = self.settings.ampConfigs;

        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (!self.settings.view && !self.isPortraitView) {
                    ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktop;
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                }
                break;
            case self.views.desktopFullView:
                ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktopFull;
                break;
            case self.views.mobileNormalView:
                var containerWidth = self.wrapper.width();
                var assetsCount = self.assets.length;
                var assetsWidth = assetsCount * ampConfigs.navElementsWidthPxMobile;
                var navIconsWidth = parseFloat(self.wrapper.find('.nav-container').css('padding-left'), 10) * 2;

                if (assetsWidth > containerWidth) {
                    //Calculate number of pagination dots fully visible inside thumbs container
                    ampConfigs.navContainerCarousel.width = Math.floor((containerWidth - navIconsWidth) /
                        ampConfigs.navElementsWidthPxMobile);
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                } else {
                    //Assume that all pagination dots could be shown
                    ampConfigs.navContainerCarousel.width = self.assets.length;
                    ampConfigs.navContainerCarousel.gesture.enabled = false;
                }
                break;
        }

        ampConfigs.mainContainerCarousel.start = self.currentAssetIndex + 1;
        ampConfigs.navContainerCarousel.start = self.currentAssetIndex + 1;

        return ampConfigs;
    };

    Viewer.prototype.applyNavigationStyles = function () {
        var self = this;
        var ampConfigs = self.getAmpConfigs();
        var navContainer = self.wrapper.find('.nav-container');
        var $navIcon = navContainer.find('> .amp-js-nav');

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            var $visibleThumbs = navContainer.find('.amp-slide.amp-visible');

            if ($visibleThumbs.length === self.assets.length) {
                $navIcon.css({display: 'none'});
                navContainer.addClass('amp-without-thumbs');
            }
            else {
                $navIcon.css({display: 'block'});
                navContainer.removeClass('amp-without-thumbs');
                self.checkNavContainerNavArrowsStyle();
            }

            return false;
        }

        if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
            $navIcon.css({display: 'none'});
        }
        else {
            $navIcon.css({display: 'block'});
        }

        var iconWidth = $navIcon.width();
        var navElementsWidthPercent = 100 / ampConfigs.navContainerCarousel.width;
        var normalNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPx + iconWidth * 4;

        if (self.currentView === self.views.mobileNormalView) {
            if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
                navContainer.css('padding', 0);
            } else {
                self.checkNavContainerNavArrowsStyle();
                navContainer.css('padding', '');
            }
        }

        var mobileNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPxMobile +
            parseFloat(navContainer.css('padding-left'), 10) * 2;
        navContainer.css({
            'max-width': self.currentView === self.views.mobileNormalView ?
                mobileNavContainerWidth : normalNavContainerWidth
        });

        // For desktop thumnails we need to substract extra 20px due to margin
        var thumbWidth = self.currentView !== self.views.mobileNormalView ?
        'calc(' + navElementsWidthPercent + '% - 20px)'
            : ampConfigs.navElementsWidthPxMobile + 'px';

        self.navContainerList.find('.amp-slide').css('width', thumbWidth);
    };

    Viewer.prototype.getNavigationVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.navContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.navContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.getMainVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.mainContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.mainContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.zoomIn = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomIn');
        }
    };

    Viewer.prototype.zoomOut = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomOut');
        }
    };

    Viewer.prototype.zoomInFull = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomInFull');
        }
    };

    Viewer.prototype.zoomOutFull = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();

            $.each(self._preventElements, function (ix, val) {
              val.off('touchmove', self._prevent);
            });
            self._preventElements = [];
            if (self.isZoomed()) {
              self.isZoomCycle = true;
              slide.ampZoomInline('zoomOutFull');
            }

            var prevSlide = self.getZoomSlide(self.prevAssetIndex);
            if (prevSlide.length > 0) {
                prevSlide.ampZoomInline('zoomOutFull');
            }
            setTimeout(function () {
              self.isZoomCycle = false;
            }, 600)
        }
    };

    Viewer.prototype.zoomToggle = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            var state = slide.ampZoomInline('state');
            var scaleTo = 1 + state.scaleMax - state.scale;
            slide.ampZoomInline('setScale', scaleTo);
        }
    };

    Viewer.prototype.zoomCycle = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();
          if (slide.length > 0) {
                self.isZoomCycle = true;
                var dir = self.getNextCycleDir();
                slide.ampZoomInline('zoom' + dir);
            }
            setTimeout(function () {
                self.isZoomCycle = false;
            }, 500)
        }
    };

    Viewer.prototype.getNextCycleDir = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');

        if (state.scale === 1) {
            return 'In';
        } else if (state.scale === state.scaleMax) {
            return 'Out';
        } else {
            return self.lastZoomDir;
        }
    };

    Viewer.prototype.getZoomSlide = function (index) {
        var self = this;
        var index = typeof index !== 'undefined' ? index : self.currentAssetIndex;
        return self.mainContainerList.find('> > li:eq(' + index + ') .amp-zoom');
    };

    Viewer.prototype.toggleZoomScrolling = function($elem){
        var self = this;
        var slide = this.getZoomSlide();
        var state = slide.ampZoomInline('state')

        $.each(self._preventElements, function (ix, val) {
            val.off('touchmove', self._prevent);
        });
        self._preventElements = [];
        self._preventElements.push($elem);


        if(state.scale === 1){
            $elem.off('touchmove', self._prevent);
        }
        else{
            $elem.on('touchmove', self._prevent);
        }
    };

    Viewer.prototype.checkZoomIcons = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');
        switch (self.currentView) {
            case self.views.desktopFullView:
                var plus = self.wrapper.find('.panel .plus');
                var minus = self.wrapper.find('.panel .minus');
                plus.add(minus).removeClass('disabled');
                if (slide.length > 0) {
                    if (state.scale === 1) {
                        minus.addClass('disabled');
                    }
                    if (state.scale === state.scaleMax) {
                        plus.addClass('disabled');
                    }
                } else {
                    plus.add(minus).addClass('disabled');
                }
                break;
            case self.views.mobileNormalView:
                var close = self.wrapper.find('.main-container .close');
                close.css({display: 'none'});
                if (slide.length > 0) {
                    if (state.scale > 1) {
                        close.css({display: 'block'});
                    } else {
                      $.each(self._preventElements, function (ix, val) {
                        val.off('touchmove', self._prevent);
                        self._preventElements = [];
                      });
                    }
                }
                break;
        }
    };

    Viewer.prototype.isZoomed = function () {
        var self = this;
        var state = self.getZoomSlide().ampZoomInline('state');
        return state.scale > 1;
    };

    Viewer.prototype.bindTapEvent = function (element, action) {
        var self = this;
        var coords;
        var newCoords;

        // Need to remove mouse events on touch devices since it fires callbacks twice on tap
        var startEvents = (self.canTouch ? '' : 'mousedown ');
        var endEvents = (self.canTouch ? '' : 'mouseup ');
        if (this.settings.zoomInlineDoubleTap) {
            startEvents += self.doubleTapEvent(element);
            endEvents += 'doubletapend';
        } else {
            startEvents += 'touchstart';
            endEvents += 'touchend';
        }

        function getPageCoords(e) {
            var out = {x: 0, y: 0};

            if (e.type === 'touchstart' || e.type === 'touchmove' ||
                e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' ||
                e.type === 'mousemove' || e.type === 'mouseover' ||
                e.type === 'mouseout' || e.type === 'mouseenter' ||
                e.type === 'mouseleave') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        }

        element.on(startEvents, function (e) {
            var $self = $(this);
            if (e.which === 3) {
                return false;
            }

            if ($self.data('startEvent') === 'progress') return;
            $self.data('startEvent', 'progress');
            setTimeout(function () {
                $self.data('startEvent', 'done');
            }, 500);

            var target = this;
            target.tap = true;
            coords = getPageCoords(e);
            element.one(endEvents, function (e) {

                if (e.which === 3) {
                    return false;
                }

                //$.each(self._preventElements, function (ix, val) {
                //    val.off('touchmove', self._prevent);
                //});
                //self._preventElements = [];
                ////element.on('touchmove', self._prevent);
                //self._preventElements.push(element);

                var target = this;
                newCoords = getPageCoords(e);

                var distX = coords.x - newCoords.x;
                var distY = coords.y - newCoords.y;

                if (Math.abs(distX) >= 5 || Math.abs(distY) >= 5) {
                    target.tap = false;
                }

                if (target.tap) {
                    target.tap = false;
                    action.call(target);
                }
            });



            if (self.isZoomed()) {
                e.stopPropagation();
            }
        });
    };

    Viewer.prototype.checkSpins = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        if (self.canTouch) {
            spinTraps.removeClass('active-for-scrolling');
            spinTraps.parent().off('touchstart', self._prevent);
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindIconClickEvent = function (icon, action) {
        var self = this;
        icon.on('click', function (e, data) {
            e.stopPropagation();
            if ($(this).hasClass('disabled')) {
                e.preventDefault();
            } else {
                action();
            }
        });
    };

    Viewer.prototype.checkNavContainerNavArrowsStyle = function () {
        var self = this;
        var navContainer = self.wrapper.find('.nav-container');
        var leftArrow = navContainer.find('.nav-container-prev');
        var rightArrow = navContainer.find('.nav-container-next');
        var thumbWidth = navContainer.find('.amp-slide:not(.amp-selected) .mobile-thumbnail').width();
        var shift = (52 - thumbWidth) / 2;

        leftArrow.add(rightArrow)
            .css('width', thumbWidth)
            .css('height', thumbWidth);

        leftArrow.css('left', shift);
        rightArrow.css('right', shift);
    };

    Viewer.prototype.checkMainContainerSlidesVisibility = function (timeout) {

        if (!this.IE) {
            return;
        }

        var self = this;
        var assetIndex = self.currentAssetIndex;
        var timeout = timeout || 0;

        self.videoTimeout ? clearTimeout(self.videoTimeout) : null;
        var currentAsset = self.assets[assetIndex];
        var $slide = self.mainContainerList.find('.amp-slide').has('.video');

        if (currentAsset.hasOwnProperty('media')) {
            $slide.css({
                opacity:1
            })
            return;
        }

        else {
            self.videoTimeout = setTimeout(function () {
                $slide.css({opacity: 0});
            }, timeout);
        }
    };

    Viewer.prototype._prevent = function (e) {
        e.preventDefault();
    };

    Viewer.prototype._preventElements = [];

    global.amp.Viewer = Viewer;
}(window, jQuery));
