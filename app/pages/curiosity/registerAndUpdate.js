var protoPage = require('../../utils/protoPage.js');
var ds = require('domshaper');

var topbar = require('../../modules/curiosity/topbar_controls/index.js');
var userform = require('../../modules/curiosity/userdata_update/index.js');
var ppic = require('../../modules/curiosity/userdata_profilepic/index.js');

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

    this.addTopBar();
    this.addProfilepic();
    this.addForm();

    this.content.buildDom();
    this.content.render();

    //this.content.domElement.style.width = '100%';
    //this.content.domElement.style.height = '100%';
    this.content.domElement.style.padding = '0em';
    this.launchEvent('close');
};

index.prototype.addTopBar = function(){

  var tb = new topbar(this.router);
  tb.activateModule();
  this.modules.push(tb);
  tb.build();
  this.content.appendShape(tb.container);

};

index.prototype.addForm = function(){

  var uform = new userform(this.router);
  uform.activateModule();
  this.modules.push(uform);
  uform.build();
  this.content.appendShape(uform.container);

};


index.prototype.addProfilepic = function(){

  var pic = new ppic(this.router);
  pic.activateModule();
  this.modules.push(pic);
  pic.build();
  this.content.appendShape(pic.container);

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
