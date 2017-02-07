var protoPage = require('../utils/protoPage.js');
var appShell = require('../modules/imageshell/index.js');
var ds = require('domshaper');

var index = function(){

  //console.log(this)
  protoPage.call( this, arguments[0] );
  this.content = new ds.Shape(document.getElementsByTagName('body')[0]);
  this.startedModuleAt = 0;
  this.endedModuleAt = 0;

};

/*OOP herency*/
index.prototype = Object.create( protoPage.prototype );
index.prototype.contructor = index;
/*OOP herency*/

index.prototype.init = function(){

  
  var aShell = new appShell( this.router );
  this.modules.push( aShell );
  aShell.build();
  this.content.appendShape( aShell.container );
  
  this.content.buildDom();
  this.content.render();
  
  this.content.domElement.style.width = '100%';
  this.content.domElement.style.height = '100%';
  
  this.launchEvent('close');

};

index.prototype.onLoad = function(){
  //console.log( 'fukin shit', Date.now() );
};

index.prototype.onClose = function(){
  //console.log( 'final fukin shit', Date.now() );
};

index.prototype.onLoad = function(){
  //console.log('started module');
  this.startedModuleAt = Date.now();
};

index.prototype.onClose = function(){
  //console.log('loaded module');
  this.endedModuleAt = Date.now();
  console.log( 'this page loaded in', ( this.endedModuleAt - this.startedModuleAt ), 'ms' );
};


module.exports = index;
