# SDK Client Viewer : Viewer Kit

## Installation


* Clone the repository and then run the following commands in terminal:
* npm install
* bower install
* grunt


## Usage


The Viewer Kit view is instantiated with the method:

```javascript
    var viewer = new amp.Viewer(options);
```

## Options
Example options object:

```javascript
{
    client: 'playground',
    imageBasePath: '//i1.adis.ws/',
    set: 'viewer_kit_set',
    errImg: '404'
}
```
### Required

- **errImg** : Images used if image doesn't existing.

- **set** : Array containing list of image objects.  Image object must contain **_name_** and **_type_** properties.

- **product** : Object containing copy used to populate the the fullscreen product information.  Required object properties (all strings) are - **_name_**, **_description_** and **_price_**.

### Optional

The viewer has a number of configurable options (most of which will probably not need changing):

- **client** : The account the images are stored in (default: 'viewer_kit').

- **target** : The DOM element to attach generated viewer HTML.

- **templates** : Object containing templates to be used.  Templates can be applied to **_main_**, **_thumb_**, **_zoom_**, **_mobilemain_** and **_mobilezoom_**.

- **imageBasePath** - Base path to DI instance (default: '//i1.adis.ws/')

- **mainWidth** : The width of main image.  This is used to calculate zoom scale and shoud match any width applied to the main transformation templates.

### Defaults

Default options set in the viewer:

```javascript
{
    target: '#amp-container',
    client: 'playground',
    imageBasePath: '//i1.adis.ws/',
    set: 'viewer_kit_set',
    errImg: '404',
    mainWidth: 1000,
    zoom:{
        copy:'Click to Zoom',
        touch:{
            tooltipDelay:500,
            tooltipDisplayTime:3000,
            copy:'Tap to zoom'
        },
        levels: {
            standard: 2000,
            large: 6000
        },
        stepThreshold: 2.5
    },
    templates: {
        thumb: 'w=85&h=85',
        main: 'w=1000',
        zoom: 'qlt=60',
        mobilemain: 'w=600&h=600',
        mobilezoom: ''
    },
    pagination: {
        main: {
            current: 1
        },
        nav: {
            minPage: 1,
            current: 1
        }
    },
    ampConfigs: {
        smallZoom: {
            preload: 'none',
            pan: true,
            scaleMax: 2.5,
            transforms: '',
            visible:(function(){
                if(!this.hasZoomedOnce){
                    this.tapToZoomTooltip();
                }
            }).bind(this)
        },
        smallCarousel: {
            height: 1,
            width: 1,
            loop: false,
            gesture: {
                enabled: true,
                fingers: 1,
                dir: 'horz',
                distance: 50
            }
        },
        largeZoom: {
            preload: 'none',
            pan: true,
            pinch: true,
            activation:{ 
                inGesture:false 
            }
        },
        largeStack: {
            height: 1,
            width: 1,
            responsive: true,
            autoplay: false,
            fade: true,
            loop: false,
            gesture: {
                enabled: true,
                fingers: 1,
                dir: 'horz',
                distance: 20
            }
        },
        nav: {
            loop: false,
            height: 85,
            onActivate: {
                select: true,
                goTo: false
            }
        }
    },
    product: {
        name: 'Product Name',
        description: 'Product Desc Short',
        price: '£999.99'
    }
}
```

## ecommBridge integration

In order to use assets from ecommBridge, the customer needs to add the following data:

```javascript
var window.ecommBridge = {};

window.ecommBridge.site = {
    page: {
        type: 'product',
        name: 'viewer_kit_square_ms',
        //mediaSet: 'viewer_kit_square_ms',
        mediaList: [
            {'type': 'i', 'name': 'viewer_kit_square_1'},
            {'type': 's', 'name': 'viewer_kit_square_ss'},
            {'type': 'i', 'name': 'viewer_kit_square_2'},
            {'type': 'i', 'name': 'viewer_kit_square_3'},
            {'type': 'i', 'name': 'viewer_kit_square_5'},
            {'type': 'v', 'name': 'viewer_kit_v'},
            {'type': 'i', 'name': 'viewer_kit_square_spin12'}
        ]
    }
};
```

The client may specify either **mediaList** array with assets, or **mediaSet** name string.
If both are specified, the viewer will use mediaList as it has higher priority

If neither of mediaList nor mediaSet are specified in ecommBridge, then the viewer will use default
set, defined in viewer settings.

**amp.Viewer.prototype.changeSet(setInfo)** may also use data from mediaList or from meadiaSet, depending on passed param.
This method will replace current mediaSet with new one, specified in param **setInfo**. Example below:

```
#!javascript
viewer.changeSet([
    {"type": "i", "name": "viewer_kit_square_2"},
    {"type": "i", "name": "viewer_kit_square_1"},
    {"type": "s", "name": "viewer_kit_square_ss"},
    {"type": "i", "name": "viewer_kit_square_3"},
    {"type": "i", "name": "viewer_kit_square_5"},
    {"type": "v", "name": "viewer_kit_v"},
    {"type": "i", "name": "viewer_kit_square_spin12"}
]);
```

or with mediaset name:

```
#!javascript
viewer.changeSet('viewer_kit_set');
```

Test page is in **src/bridge.html**

Test ecommBridge data is in **src/js/amplience-ecommerce-bridge-mock.js**


## Tests


To run tests, follow instructions below:

* Install homebrew package manager for OSX by typing the following command in terminal: 
'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'
* Install ruby  using homebrew, by typing the following command in terminal:  'sudo brew install ruby'  After it is installed check if it is working by typing 'ruby -v' in terminal
* Install dependencies by typing the following command in terminal: 'gem install rspec cucumber watir-webdriver httparty'
* Download PhantomJs browser  zip for MAC OS X  from the official website: http://phantomjs.org/download.html
* Unzip downloaded phantomjs folder and copy executable file from  'phantomjs_downlaoded_folder/bin/phantomjs' to '/usr/local/bin'
* Check if it is working by typing the following command in terminal: phantomjs -v
* Go to the cucumber directory from terminal  e.g  'cd viewer-kit/cucumber' and run cucumber command. You should be able to see tests result in console
