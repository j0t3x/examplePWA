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

  this.container = new ds.Shape('div');
  this.container.setClass( styles.cont );
  //this.container.addAttr('id', 'header');
  this.topBar();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.topBar = function(){

  // <!-- Header -->
  //   <header id="header">
  //     <h1>Curiosity</h1>
  //     <p>Quick questions answered by millions of people<br />
  //     <a href="http://html5up.net">Did you knew that women like it between 18 and 20...?</a></p>
  //   </header>
  //

  var backButton = new ds.Shape('p');
  var left = new ds.Shape('span');
  left.setClass( 'fa fa-angle-left' );
  left.addAttr( 'aria-hidden', 'true' );
  backButton.appendShape(left);
  backButton.setClass( styles.iconc );

  var title = new ds.TextShape('h3');
  title.updateText( 'Profile' );
  title.setClass( styles.title );

  var otherIcon = new ds.Shape('p');
  var elico = new ds.Shape('span');
  elico.setClass( 'fa fa-share-alt' );
  elico.addAttr( 'aria-hidden', 'true' );
  otherIcon.appendShape(elico);
  otherIcon.setClass( styles.iconc );

  this.container.appendShape( backButton );
  this.container.appendShape( title );
  this.container.appendShape( otherIcon );

};




module.exports = index;
