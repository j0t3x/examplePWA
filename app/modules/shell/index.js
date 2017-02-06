var ds = require('domshaper');
var styles = require('./styles/index.css');
var protoModule = require('../../utils/protoModule.js');

var appShell = function( router ) {

     //added methods for mediation
     this.router = router;
     this.dealer = this.router.getLib('dealer');

     this.dealer.subscribe(this, 'changeTitleOnAnswer', this.magicTitle);

     this.container;

     //header group
     this.header;
     this.header_icon;
     this.header_title;

     //footer group
     this.footer;
     this.footer_list = [];

     //content group
     this.content;

};

/*OOP herency*/
appShell.prototype = Object.create( protoModule.prototype );
appShell.prototype.contructor = appShell;
/*OOP herency*/

appShell.prototype.init = function() {

     this.container = new ds.Shape('div', 'app-index');
     this.container.setClass('');

     this.initHeader();
     this.initContent();
     this.initFooter();

};

appShell.prototype.initHeader = function() {
     this.header = new ds.Shape('nav', 'header');
     this.header.setClass('navbar navbar-light navbar-static-top bg-faded');

     this.header_title = new ds.TextShape('a', 'header-title');
     this.header_title.updateText('Encuesta de opinión Easy ');
     this.header_title.setClass('navbar-brand');

     //this.header_icon = new ds.ImageShape( 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Japan_small_icon.png', 'header-icon' );
     //this.header_icon.setClass( 'navbar-brand' );
     //this.header_icon.setWHpx( 30 );

     //this.header.appendShape( this.header_icon );
     this.header.appendShape(this.header_title);

     this.container.appendShape(this.header);

};

appShell.prototype.initContent = function() {
     this.content = new ds.Shape('main', 'main');
     this.content.setClass('parentC');
     this.container.appendShape(this.content);
};

appShell.prototype.initFooter = function() {
     this.footer = new ds.Shape('footer');
     this.footer.setClass(styles.footer);
     var cont = new ds.Shape('div');
     cont.setClass('container');
     var text = new ds.TextShape('span')
     text.updateText('Tu respuesta es anonima.');
     text.setClass('text-muted');

     cont.appendShape(text);
     this.footer.appendShape(cont);

     this.container.appendShape(this.footer);

};

appShell.prototype.appendContent = function(module) {
     this.container.appendShape(module.container);
};

appShell.prototype.magicTitle = function(newtitle) {

     this.header_title.updateText(newtitle);
     this.header_title.render();

};

appShell.prototype.onLoad = function(){
  console.log('loaded module');
};

module.exports = appShell;
