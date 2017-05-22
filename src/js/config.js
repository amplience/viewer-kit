(function () {
    'use strict';
    var addConfig = function (target, name, value) {
        if (!target.hasOwnProperty(name)) {
            target[name] = value;
        }

        else {
            console.warn('Property already exist');
        }
    };

    amp.viewerSettings = {
        viewerConfigs: {
            target: '#amp-container',
            client: 'playground',
            imageBasePath: '//i1.adis.ws/',
            errImg: '404',
            errCallback: function () {
            },
            cacheControl: 1,
            cacheWindow: 315569259747,
            fullNavHeight: 100,
            templates: {
                thumb: 'w=85&h=85&qlt=70',
                desktop: {
                    main: 'w=1000&h=1000',
                    mainRetina: 'w=2000&h=2000'
                },
                desktopFull: {
                    main: 'w=1000',
                    mainRetina: 'w=2000'
                },
                mobile: {
                    main: 'w=500&h=500',
                    mainRetina: 'w=1000&h=1000'
                }
            },
            tooltips: {
                offsets: {
                    left: -102,
                    top:  -39
                },
                displayTime: 3000,
                desktop: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                desktopFull: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                mobile: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                }
            },
            navIconsMain: {
                next: 'icon icon-right bla-main-next',
                prev: 'icon icon-left bla-main-prev'
            },
            navIconsNav: {
                next: 'icon icon-right bla-nav-next',
                prev: 'icon icon-left bla-nav-prev'
            },
            navIconsPortraitNav: {
                next: 'icon icon-right bla-portrait-next',
                prev: 'icon icon-left bla-portrait-prev'
            },
            zoomInlineDoubleTap: true,
            doubleTapTime: 250,
            ampConfigs: {
                navElementsWidthPx: 100,
                navElementsWidthPxMobile: 50,
                navElementsCount: {
                    forDesktop: 5,
                    forDesktopFull: 4
                },
                mainContainerCarousel: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 5000
                    },
                    animDuration: 500,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: true
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true
                },
                mainContainerNav: {
                    on: 'goTo',
                    action: 'select',
                    selector: '.nav-container .list'
                },
                mainContainerSpin: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    delay: 100,
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    },
                    loop: true,
                    start: 1,
                    momentum: true,
                    minDistance: 50,
                    friction: 0.97,
                    dragDistance: 200,
                    preload: true,
                    preloadType: 'full',
                    activate: 'down',
                    dir: 'normal',
                    cursor: {
                        active: 'pointer',
                        inactive: 'pointer'
                    },
                    play: {
                        onLoad: true,
                        onVisible: true,
                        repeat: 1,
                        delay: 600
                    },
                    lazyLoad: false,
                    orientation: 'horz'
                },
                mainContainerSpin3d: {
                    loop:false,
                    dragDistance: 200,
                    orientation: 'vert',
                    preloadType: 'full',
                    width: 1,
                    height: 1,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    }
                },
                mainContainerVideo: {
                    width: 1,
                    height: 1,
                    center: true,
                    responsive: true,
                    autoplay: false,
                    loop: false,
                    muted: false,
                    controls: true,
                    pauseOnHide: true,
                    nativeControlsForTouch: false,
                    "plugins": {
                        "videoJsResolutionSwitcher": {
                            "default": "Medium"
                        }
                    }
                },
                mainContainerZoomInline: {
                    transforms: [],
                    scaleMax: 3,
                    scaleStep:0.5,
                    scaleSteps: true,
                    pinch: true,
                    pan: true,
                    events: {
                        zoomIn: '',
                        zoomOut: '',
                        move: ''
                    },
                    activation: {
                        inGesture: true
                    },
                    preload: false,
                    preventVisibleZoomOut: true
                },
                navContainerCarousel: {
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 50
                    },
                    animDuration: 500,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: false
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true
                },
                navContainerNav: {
                    on: 'select',
                    action: 'select',
                    selector: '.main-container .list'
                },
                image: {
                    preload: 'created',
                    insertAfter: false,
                    errImg: null
                }
            }
        },
        portraitConfigs: function () {
            var self = this;
            addConfig(self.viewerConfigs.ampConfigs, 'navContainerCarouselPortrait', {
                height: '100%',
                responsive: true,
                start: 1,
                loop: false,
                dir: 'vert',
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1,
                    dir: 'vert',
                    distance: 50
                },
                animDuration: 500,
                layout: 'standard',
                onActivate: {
                    select: true,
                    goTo: false
                },
                animate: true,
                easing: 'linear',
                preferForward: true,
                preloadNext: true
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerSpinPortrait', {
                height: '100%',
                responsive: true,
                delay: 100,
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1
                },
                loop: true,
                start: 1,
                momentum: true,
                minDistance: 50,
                friction: 0.97,
                dragDistance: 200,
                preload: true,
                preloadType: 'full',
                activate: 'down',
                dir: 'normal',
                cursor: {
                    active: 'pointer',
                    inactive: 'pointer'
                },
                play: {
                    onLoad: true,
                    onVisible: true,
                    repeat: 1
                },
                lazyLoad: false,
                orientation: 'horz'
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerVideoPortrait', {
                height: '100%',
                responsive: true,
                autoplay: false,
                loop: false,
                muted: false,
                controls: true,
                pauseOnHide: true,
                nativeControlsForTouch: true,
                plugins: {
                    videoJsResolutionSwitcher : true
                }
            });
        },
        overwritePortraitSettings: function (settings) {
            var self = this;
            settings.ampConfigs.mainContainerCarousel.width = 0.8;
            settings.ampConfigs.mainContainerCarousel.height = 1.2;
            settings.templates = {
                thumb: 'w=85&h=85&qlt=70',
                thumbPortrait: 'w=67&h=89&qlt=100',
                desktop: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                desktopFull: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                mobile: {
                    main: 'w=505&h=708',
                    mainRetina: 'w=1010&h=1416'
                }
            };
        }
    };

}());

