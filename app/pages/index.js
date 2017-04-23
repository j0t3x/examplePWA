var protoPage = require('../utils/protoPage.js');
var alty_header = require('../modules/alty_header/index.js');
var alty_exppgf = require('../modules/alty_explanatoryparagraph/index.js');
var ds = require('domshaper');

var index = function() {
    //console.log(this)
    protoPage.call(this, arguments[0]);
    this.content = new ds.Shape(document.getElementsByTagName('body')[0]);
};
/*OOP herency*/
index.prototype = Object.create(protoPage.prototype);
index.prototype.constructor = index;
/*OOP herency*/
index.prototype.init = function() {

    var head = new alty_header(this.router);
    head.activateModule();
    head.build();


    var exp_paragr = new alty_exppgfgit(this.router);
    exp_paragr.activateModule();
    exp_paragr.build();

    this.modules.push(head);

    this.content.appendShape(head.container);
    this.content.appendShape(exp_paragr.container);

    this.content.buildDom();
    this.content.render();

    this.launchEvent('close');
};
index.prototype.onLoad = function() {
    console.log('initial timer ', Date.now());
};
index.prototype.onClose = function() {
    console.log('final timer', Date.now());
};

module.exports = index;
