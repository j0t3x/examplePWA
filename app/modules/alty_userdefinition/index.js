var ds = require('domshaper');
var protoModule = require('../../utils/protoModule.js');
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

  this.container = new ds.Shape('div', 'app-index');
  this.container.setClass('');


  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildForm = function(){

};




module.exports = index;
