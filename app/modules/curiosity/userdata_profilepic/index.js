var ds = require('domshaper');
var protoModule = require('../../../utils/protoModule.js');
var styles = require('./styles.css');


var index = function(router) {
    protoModule.call(this);
    this.router = router;
    this.container;
    this.content;
};
index.prototype = Object.create(protoModule.prototype);
index.prototype.constructor = index;
index.prototype.init = function() {

  this.container = new ds.FormShape('/some');
  this.container.addAttr('id', 'userdata');

  //this.buildForm();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildProfile = function(){

  var square = new ds.Shape();

  var photo = new ds.ImageShape('');

  var name = new ds.TextShape();

  var pencil = new ds.Shape();


  square.appendShape( photo );
  square.appendShape( name );
  square.appendShape( pencil );


};


module.exports = index;
