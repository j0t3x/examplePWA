require('./tiffinhandles.js');
var Dealer = require('./utils/dealer.js');Dealer = new Dealer();
var Router = require('progressiverouter');
var war = require('war');

war.setGlobalHeaders({
    'Accept': 'text/plain, text/html'
});
//set global libs
Router.addLib('dealer', Dealer);
Router.addLib('war', war);
Router.setRoute('/', require('./pages/index.js'));
Router.setRoute('/landing', require('./pages/landing.js'));
Router.setRoute('/signup', require('./pages/curiosity/signup.js'));
Router.setRoute('/tutorial', require('./pages/curiosity/tutorial.js'));
Router.setRoute('/question', require('./pages/curiosity/questionBurst.js'));
Router.chooseRoute(Router.currentPage.pathname);
