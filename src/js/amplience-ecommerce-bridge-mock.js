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
            name: 'rendering_kit_square_ms',
            mediaSet: 'rendering_kit_square_ms',
            mediaList: [
                {'type': 'i', 'name': 'rendering_kit_square_1'},
                {'type': 's', 'name': 'rendering_kit_square_ss'},
                {'type': 'i', 'name': 'rendering_kit_square_2'},
                {'type': 'i', 'name': 'rendering_kit_square_3'},
                {'type': 'i', 'name': 'rendering_kit_square_5'},
                {'type': 'v', 'name': 'rendering_kit_v'},
                {'type': 'i', 'name': 'rendering_kit_square_spin12'}
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
