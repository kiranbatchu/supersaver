/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;

ar $range = $(".js-range-slider");
var gaps = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var $debug = $(".js-debug");

function transform(num) {
    var pos = gaps.indexOf(num);

    // skip value from gaps array
    if (pos !== -1) {
        return num - 1;
    }

    return num;
}

$range.ionRangeSlider({
    type: "single",
    min: 0,
    max: 100,
    from: 0,
    prettify: function(num) {
		return transform(num);
    },
    onChange: function(data) {
        $debug.text(transform(data.from));
    }
});