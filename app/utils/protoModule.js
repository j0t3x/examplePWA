var event = require('./event.js');

var protoModule = function(){


  event.call(this);
  this.events = {};
  this.root;

};

/*OOP herency*/
protoModule.prototype = Object.create( event.prototype );
protoModule.prototype.contructor = protoModule;
/*OOP herency*/

protoModule.prototype.build = function(){


  this._init();
};

protoModule.prototype._init = function(){

  this.init();
};
protoModule.prototype.init = function(){};

protoModule.prototype.setEvents = function(){

  this.on( 'load', this._onLoad.bind() );
  this.on( 'close', this._onClose.bind() );

};

protoModule.prototype.launchEvent = function( name ){

  if( name !== '' && typeof name === 'string' )
    this.dispatchEvent( name );
  else {
    throw 'event name should be a string';
  }

};

protoModule.prototype._onLoad = function(){
  this.onLoad( arguments );
};
protoModule.prototype._onClose = function(){
  this.onClose( arguments );
};

protoModule.prototype.onLoad = function(){};
protoModule.prototype.onClose = function(){};


module.exports = protoModule;
