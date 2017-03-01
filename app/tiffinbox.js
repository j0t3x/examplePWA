require('./tiffinhandles.js');
var Dealer = require('./utils/dealer.js');
var Router = require('progressiverouter');
var routes = require('./routes.json');
var War = require('war');
Dealer = new Dealer();
War = new War();
War.setGlobalHeaders({
    'Accept': 'text/plain, text/html'
});
//set global libs
Router.addLib('dealer', Dealer);
Router.addLib('war', War);
//set webpage routes
for(var i=0; i<routes.length;i++){
    Router.setRoute(routes[i].route, require(routes[i].path));
}
Router.chooseRoute(Router.currentPage.pathname);