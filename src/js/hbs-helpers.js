(function (global) {
    /* jshint -W097 */
    'use strict';

    Handlebars.registerHelper('renderPartial', function(partialName, options) {
        if (!partialName) {
            console.error('No partial name given.');
            return '';
        }
        var partial = Handlebars.partials[partialName];
        if (!partial) {
            console.error('Couldnt find the compiled partial: ' + partialName);
            return '';
        }
        return new Handlebars.SafeString( partial(options.hash) );
    });
    
}(window));