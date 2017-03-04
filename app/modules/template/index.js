var ds = require('domshaper');
var protoModule = require('../../utils/protoModule.js');
var appShell = function(router) {
    protoModule.call(this);
    this.router = router;
    this.container;
    this.content;
};
appShell.prototype = Object.create(protoModule.prototype);
appShell.prototype.constructor = appShell;
appShell.prototype.init = function() {
    this.container = new ds.Shape('div', 'app-index');
    this.container.setClass('');
    this.launchEvent('load');
};
appShell.prototype.onLoad = function() {
    console.log('loaded module');
}
appShell.prototype.onStart = function() {
    console.log('start module');
};
module.exports = appShell;