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
  this.container.addAttr('id', 'signup-form');
  this.buildForm();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildForm = function(){
  // <!-- Signup Form -->
  //   <form id="signup-form" method="post" action="#">
  //     <input type="email" name="email" id="email" placeholder="Email Address" />
  //     <input type="submit" value="Sign Up" />
  //   </form>
  //
  var emailSection = new ds.Shape('input');
  emailSection.addAttr( 'type', 'email' );
  emailSection.addAttr( 'name', 'email' );
  emailSection.addAttr( 'id', 'email' );
  emailSection.addAttr( 'placeholder', 'Email Address' );

  this.container.addSection( emailSection );

  //submit button
  var submitButton = new ds.ButtonShape('Update');
  submitButton.setClass('ui button');

  this.container.setSubmitTrigger(submitButton);


  this.container.on( 'submit', function( ev ){
    ev.preventDefault();

    console.log('go');

  }.bind(this));

};




module.exports = index;
