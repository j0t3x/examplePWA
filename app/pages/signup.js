var protoPage = require('../utils/protoPage.js');
var ds = require('domshaper');

var curiosity_footer = require('../modules/curiosity/signup_footer/index.js');
var curiosity_form = require('../modules/curiosity/signup_form/index.js');
var curiosity_header = require('../modules/curiosity/signup_header/index.js');

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

    this.addHeader();
    this.addSignUpForm();
    this.addFooter();

    this.content.buildDom();
    this.content.render();

    this.content.domElement.style.width = '100%';
    this.content.domElement.style.height = '100%';
    this.launchEvent('close');
};
index.prototype.addHeader = function() {

    var c_header = new curiosity_header(this.router);
    c_header.activateModule();
    this.modules.push(c_header);
    c_header.build();
    this.content.appendShape(c_header.container);

};

index.prototype.addSignUpForm = function() {

    var c_form = new curiosity_form(this.router);
    c_form.activateModule();
    this.modules.push(c_form);
    c_form.build();
    this.content.appendShape(c_form.container);

};

index.prototype.addFooter = function() {

    var c_footer = new curiosity_footer(this.router);
    c_footer.activateModule();
    this.modules.push(c_footer);
    c_footer.build();
    this.content.appendShape(c_footer.container);

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
