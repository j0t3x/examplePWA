var ds = require('domshaper');
var protoModule = require('../../../utils/protoModule.js');
var styles = require('./styles.css');


var index = function(router) {
    protoModule.call(this);
    this.router = router;
    this.container;
    this.content;
    this.userFields = {
      'name': { 'type': 'text', 'placeholder': 'Whats your name...', 'icon': 'fa fa-user-o' },
      'email': { 'type': 'email', 'placeholder': 'Type your email...', 'icon': 'fa fa-at' },
      'age': { 'type': 'number', 'placeholder': 'How old are you', 'icon': 'fa fa-calendar' },
      'gender': { 'type': 'select', 'placeholder': 'Tell me whats your gender...', 'icon': 'fa fa-venus-mars', 'values': [ 'M', 'F' ] },
      'country': { 'type': 'select', 'placeholder': 'Where are you from?', 'icon': 'fa fa-flag', 'values': [ 'Peru' ] },
      'city': { 'type': 'select', 'placeholder': 'From which city?', 'icon': 'fa fa-location-arrow', 'values': [ 'Lima' ] },
    };
};
index.prototype = Object.create(protoModule.prototype);
index.prototype.constructor = index;
index.prototype.init = function() {

  this.container = new ds.FormShape('/some');
  this.container.addAttr('id', 'userdata');
  this.container.setClass( 'ui form', styles.cont );

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

  for ( var one in this.userFields ){
    if ( this.userFields.hasOwnProperty( one ) ){
      var sec = this.createComposedTextInputField( one, this.userFields[one].type, this.userFields[one].icon, this.userFields[one].placeholder, this.userFields[one].values );
      this.container.addSection( sec );
    }
  }

  var submitButton = new ds.ButtonShape('Update');
  submitButton.setClass('ui primary huge button', styles.button);
  this.container.setSubmitTrigger(submitButton);


  this.container.on( 'submit', function( ev ){
    ev.preventDefault();

    console.log('go');

  }.bind(this));

};

index.prototype.createComposedTextInputField = function( name, type, iconclass, legend, values = [] ){

  var box = new ds.Shape('div');
  box.setClass( 'ui input fields', styles.formunit );

  var input;

  if( type === 'text' || type === 'email' ){
    input = new ds.TextInputShape( name );
    input.addAttr( 'placeholder', legend );
  }

  if( type === 'number' ){
    input = new ds.TextInputShape( name );
    input.addAttr( 'placeholder', legend );
  }

  if( type === 'select' ){
    input = new ds.Shape( 'select', name );
    input.setClass('ui dropdown');

    var placeh = new ds.TextShape( 'option' );
    placeh.updateText( legend );
    placeh.addAttr( 'value', legend );
    input.appendShape( placeh );

    for (var i = 0; i < values.length; i++) {
      var placeh = new ds.TextShape( 'option' );
      placeh.updateText( values[i] );
      placeh.addAttr( 'value', values[i] );
      input.appendShape( placeh );
    }

  }

  ///input.setClass( 'fields' );
  box.appendShape( input );

  return box;

};

module.exports = index;
