(function (root, $) {
    'use strict';
    if (!$ && window.console) {
        console.log('mock ecommerce bridge requires jquery!');
    }

    var parseOptions = function (options, target) {
        if (options.type && options.parameter) {
            target.type = options.type;
            target.parameter = options.parameter;
            return true;
        }

        return false;
    };

    var ecb = root.ecommBridge = {};

    ecb.site = {
        page: {
            type: 'product',
            name: 'viewer_kit_set',
            mediaSet: 'viewer_kit_set',
            mediaList: [
                {"type": "s", "name": "viewer_kit_spin1_set"},
                {"type": "i", "name": "viewer_kit_1"},
                {"type": "i", "name": "viewer_kit_2"},
                {"type": "i", "name": "viewer_kit_3"},
                {"type": "v", "name": "1c805110-b0bb-4c01-b28d-edc32f58ca12.mp4"},
                {"type": "i", "name": "viewer_kit_5"}
            ]
        }
    };

    // mock events
    ecb.onPageInfo = function (cb) {
        // for now just call the callback immediately, not sure what triggers there will be for this
        // in real environment
        cb(ecb.site.page);
    };


}(window, $));
