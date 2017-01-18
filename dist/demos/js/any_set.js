(function () {
    var changeSet = {
        transformFormData: function ($form) {
            var data = $form.serializeArray();
            return data;
        },

        changeSettings: function (values, settings) {
            $.each(values, function (i, v) {
                settings[v.name] = v.value;
            });
            return settings;
        },

        initViewer: function (settings) {
            new amp.Viewer(settings);
        },

        destroyViewer: function (tag) {
            $(tag).empty();
        },

        applyPlaceholders: function ($form, viewerSettings) {
            $form.find('input:text').each(function () {
                var $self = $(this);
                var attr = $self.prop('name');
                for (var x in viewerSettings) {
                    if (x === attr) {
                        $self.val('');
                        $self.prop('placeholder', viewerSettings[x]);
                    }
                }
            });
        },

        initAll: function (form) {
            var self = this,
                $form = $(form);

            self.applyPlaceholders($form, viewerSettings);

            $form.submit(function (evt) {
                evt.preventDefault();
                var data = self.transformFormData($form);
                var settings = self.changeSettings(data, viewerSettings);
                self.destroyViewer('#amp-container');
                self.initViewer(settings);
                self.applyPlaceholders($form, viewerSettings);
            });

        }
    };


    changeSet.initAll('.switch-input-box');

}());