var protoPage = require('../utils/protoPage.js');
var ds = require('domshaper');

var curiosity_slider = require('../modules/curiosity/tutorial_carousel/index.js');

var index = function() {
    //console.log(this)
    protoPage.call(this, arguments[0]);
    this.content = new ds.Shape(document.getElementsByTagName('body')[0]);
    this.startedModuleAt = 0;
    this.endedModuleAt = 0;
    //little trick >:)
    var html = new ds.Shape(document.getElementsByTagName('html')[0]);
    html.domElement.style.width = '100%';
    html.domElement.style.height = '100%';
};
/*OOP herency*/
index.prototype = Object.create(protoPage.prototype);
index.prototype.constructor = index;
/*OOP herency*/
index.prototype.init = function() {

    this.addSlider();

    this.content.buildDom();
    this.content.render();

    this.content.domElement.style.width = '100%';
    this.content.domElement.style.height = '100%';
    this.launchEvent('close');
};
index.prototype.addSlider = function() {

    var c_slider = new curiosity_slider(this.router);
    c_slider.activateModule();
    this.modules.push(c_slider);
    c_slider.build();
    this.content.appendShape(c_slider.container);

};


index.prototype.onLoad = function() {
    //console.log('started modulec');
    this.startedModuleAt = Date.now();
};
index.prototype.onClose = function() {
    //console.log('loaded module');
    this.endedModuleAt = Date.now();
    console.log('this page loaded in', (this.endedModuleAt - this.startedModuleAt), 'ms');
};
module.exports = index;
