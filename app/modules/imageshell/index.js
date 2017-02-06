var ds = require('domshaper');
var styles = require('./styles/index.css');
var protoModule = require('../../utils/protoModule.js');

var imgShell = function( router ) {

  protoModule.call(this);
  //added methods for mediation
  this.router = router;
  this.dealer = this.router.getLib('dealer');

  //this.dealer.subscribe(this, 'changeTitleOnAnswer', this.magicTitle);

  this.container;

  //content group
  this.content;

};

/*OOP herency*/
imgShell.prototype = Object.create( protoModule.prototype );
imgShell.prototype.contructor = imgShell;
/*OOP herency*/

imgShell.prototype.init = function() {

     this.container = new ds.Shape('div', 'app-index');
     this.container.setClass();


};


imgShell.prototype.onLoad = function(){
  console.log('loaded module');
};

module.exports = imgShell;
