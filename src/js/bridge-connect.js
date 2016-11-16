(function (global, $) {
    'use strict';
    var bridgeConnector = {
        bridge: window.ecommBridge,
        page: null,
        setPageInfo: function (page) {
            this.page = {};
            for (var x in page) {
                if (page.hasOwnProperty(x)) {
                    this.page[x] = page[x];
                }
            }
        },
        enrichMediaListWithParams: function (list, params) {
            if (list && list.constructor === Array && list.length > 0) {
                $.each(list, function (i, v) {
                    for (var name in params) {
                        v[name] = params[name];
                    }
                });
            }
            return list;
        },

        convertListToSet: function (assetsList, assetsData) {
            var setObject = {'name': 'set', 'items': []};

            //ew, we have to loop through to preserve order
            for (var i = 0; i < assetsList.length; i++) {
                var name = assetsList[i].name;
                var key;
                for (key in assetsData) {
                    if (key === name && assetsData.hasOwnProperty(key)) {
                        setObject.items.push(assetsData[key]);
                        break;
                    }
                }
            }

            for (var s = 0; s < setObject.items.length; s++) {
                if (setObject.items[s].thumbs) {
                    setObject.items[s].type = 'video';
                } else if (setObject.items[s].items) {
                    setObject.items[s].type = 'set';
                    setObject.items[s].set = {'items': setObject.items[s].items};
                } else if (setObject.items[s].isImage) {
                    setObject.items[s].type = 'img';
                }
                setObject.items[s].src = setObject.items[s].url;
            }
            return setObject;
        },
        initAll: function () {
            if (this.bridge !== null && this.bridge.site && this.bridge.site.page) {
                this.setPageInfo(this.bridge.site.page);
            }
        }
    };

    global.amp.Viewer.prototype.bridgeConnector = bridgeConnector;
}(window, jQuery));
