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

  this.container = new ds.Shape('');
  this.container.setClass( '' );

  this.buildForm();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildCard = function(){

// <div class="ui card">
//   <div class="content">
//     <i class="right floated like icon"></i>
//     <i class="right floated star icon"></i>
//     <div class="header">Cute Dog</div>
//     <div class="description">
//       <p></p>
//     </div>
//   </div>
//   <div class="extra content">
//     <span class="left floated like">
//       <i class="like icon"></i>
//       Like
//     </span>
//     <span class="right floated star">
//       <i class="star icon"></i>
//       Favorite
//     </span>
//   </div>
// </div>




};

module.exports = index;
