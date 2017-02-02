require('./tiffinhandles.js');

var Dealer = require('./utils/dealer.js'); Dealer = new Dealer();
var Router = require('progressiverouter');

//set global libs
Router.addLib( 'dealer', Dealer );
//set webpage routes
Router.setRoute( '/', require('./pages/index.js') );

Router.chooseRoute( Router.currentPage.pathname );
