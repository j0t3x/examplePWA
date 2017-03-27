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

  this.createText();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};


index.prototype.createText = function(){

  var text = new ds.TextShape('p');
  text.setClass(styles.pgf);
  text.updateText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  this.container.appendShape( text );

};


module.exports = index;
