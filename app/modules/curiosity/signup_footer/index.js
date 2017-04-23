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

  this.container = new ds.Shape('footer');
  this.container.addAttr('id', 'footer');
  this.buildFooter();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildFooter = function(){

  // <!-- Footer -->
  //   <footer id="footer">
  //     <ul class="icons">
  //       <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
  //       <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
  //       <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
  //       <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
  //     </ul>
  //     <ul class="copyright">
  //       <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
  //     </ul>
  //   </footer>

  var ul = new ds.Shape('ul');
  ul.setClass('icons');

  var twt = new ds.Shape('li');
  var gitwt = this.generateGliphycon( 'fa-twitter' );
  twt.appendShape( gitwt );
  var insta = new ds.Shape('li');
  var giinsta = this.generateGliphycon( 'fa-instagram' );
  insta.appendShape( giinsta );
  var gh = new ds.Shape('li');
  var gigh = this.generateGliphycon( 'fa-github' );
  gh.appendShape( gigh );
  var env = new ds.Shape('li');
  var gienv = this.generateGliphycon( 'fa-envelope-o' );
  env.appendShape( gienv );

  ul.appendShape( twt );
  ul.appendShape( insta );
  ul.appendShape( gh );
  ul.appendShape( env );

  var ul2 = new ds.Shape('ul');
  ul2.setClass( 'copyright' );

  var cr = new ds.TextShape('li');
  cr.updateText( '&copy; Untitled.' );

  this.container.appendShape( ul );
  this.container.appendShape( ul2 );

};

index.prototype.generateGliphycon = function( gi ){

  var gliph = new ds.Shape('a');
  gliph.setClass( 'icon', gi );

  return gliph;

};




module.exports = index;
