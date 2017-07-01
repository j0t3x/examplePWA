var ds = require('domshaper');
var protoModule = require('../../../utils/protoModule.js');
var styles = require('./styles.css');

var stubstat = [
  { name: 'questions', value: '123'},
  { name: 'peeks', value: '21'},
  { name: 'likes', value: '26'}
];


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

  this.buildProfile();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildProfile = function(){

  var square = new ds.Shape('div');
  square.setClass( styles.profilegroup );

  var photo = new ds.ImageShape('https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg');
  photo.setClass(styles.pic);

  var name = new ds.TextShape('span');
  name.updateText('Barry White');
  name.setClass( styles.name );

  var pencil = new ds.Shape('span');
  pencil.setClass( 'fa fa-pencil' , styles.editicon);
  name.appendShape( pencil );

  square.appendShape( photo );
  square.appendShape( name );



  var statSquare = new ds.Shape('div');
  statSquare.setClass( styles.profilegroup );

  for (var i = 0; i < stubstat.length; i++) {
    var sg = this.addOneStat( stubstat[i].name, stubstat[i].value );
    statSquare.appendShape( sg );
  }


  this.container.appendShape( square );
  this.container.appendShape( statSquare );

};

index.prototype.addOneStat = function( name, value ){

  var stat = new ds.Shape('div');
  stat.setClass( styles.onestat );

  var thename = new ds.TextShape('p');
  thename.setClass( styles.statname );
  var thevalue = new ds.TextShape('p');
  thevalue.setClass( styles.statvalue );

  thevalue.updateText( value );
  thename.updateText( name );

  stat.appendShape( thevalue );
  stat.appendShape( thename );

  return stat;

};


module.exports = index;
