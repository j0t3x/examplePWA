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

  this.createTitle();
  this.createLinkBar();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};


index.prototype.createTitle = function(){

  var title = new ds.TextShape('h1');
  title.setClass(styles.title);
  title.updateText('A letter to you');
  this.container.appendShape( title );

};

index.prototype.createLinkBar = function(){

  var bar = new ds.Shape('div');
  bar.setClass(styles.linkbar);

  var sections = [
    { name: 'blog', link: 'http://a.com'},
    { name: 'wawa', link: 'http://a.com'},
    { name: 'silawa', link: 'http://a.com'},
    { name: 'forma', link: 'http://a.com'}
  ];

  for (var i = 0; i < sections.length; i++) {
    var s = new ds.TextShape( 'a' );
    s.updateText( sections[i].name );
    s.addAttr( 'href', sections[i].link );
    s.setClass( styles.link );
    bar.appendShape( s );
  }

  this.container.appendShape( bar );

};

module.exports = index;
