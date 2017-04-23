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

  this.container = new ds.Shape('header');
  this.container.addAttr('id', 'header');
  this.buildHeader();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildHeader = function(){

  // <!-- Header -->
  //   <header id="header">
  //     <h1>Curiosity</h1>
  //     <p>Quick questions answered by millions of people<br />
  //     <a href="http://html5up.net">Did you knew that women like it between 18 and 20...?</a></p>
  //   </header>
  //

  var header = new ds.Shape('header');
  header.addAttr( 'id', 'header' );

  var title = new ds.TextShape('h1');
  title.updateText( 'Curiosity' );

  var firstmessage = new ds.TextShape('p');
  firstmessage.addAttr( 'href', '#' );
  firstmessage.updateText( 'Quick questions answered by millions of people' );

  var link = new ds.TextShape('a');
  link.addAttr( 'href', '#' );
  link.updateText( 'Did you knew that women like it between 18 and 20...?' );


  this.container.appendShape( title );
  this.container.appendShape( firstmessage );
  firstmessage.appendShape( new ds.Shape('br') );
  firstmessage.appendShape( link );

};




module.exports = index;
