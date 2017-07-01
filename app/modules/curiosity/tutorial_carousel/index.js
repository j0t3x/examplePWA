var ds = require('domshaper');
var protoModule = require('../../../utils/protoModule.js');
var styles = require('./styles.css');


var index = function(router) {
    protoModule.call(this);
    this.router = router;
    this.container;
    this.content;

    //image slider
    this.images = [
      './images/house.png',
      './images/castle.png',
      './images/lumber.png'
    ];

    this.slides = [];
    this.outerSlider;
    this.innerSlider;
    this.interval;
    this.slideW = 120;
    this.slideH = 140;

    //textslider
    this.texts = [
      { title: 'Una casa sola', desc: 'As I have hears Open Sans is the one the devs use most of all and the designers suggest. Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp.'},
      { title: 'Un castillito', desc: 'As I have hears Open Sans is the one the devs use most of all and the designers suggest. Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp.'},
      { title: 'Un acerradero', desc: 'As I have hears Open Sans is the one the devs use most of all and the designers suggest. Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp.'},
    ];

    this.textSlides = [];
    this.outerTextSlider;
    this.innerTextSlider;
    this.textSlideW = 240;
    this.textSlideH = 60;

    //desc slider
    this.descSlides = [];
    this.outerDescSlider;
    this.innerDescSlider;
    this.descSlideW = 250;
    this.descSlideH = 100;

    this.counter = 1;
    this.timeSlideMove = 5000;
};
index.prototype = Object.create(protoModule.prototype);
index.prototype.constructor = index;
index.prototype.init = function() {

  this.container = new ds.Shape('div');
  this.container.setClass( styles.centered, styles.spaceup );
  this.container.addAttr( 'style', 'width:' + this.textSlideW + 'px;' )

  this.buildTextSlider();
  this.buildSlider();
  this.buildDescSlider();
  this.animateSlider();

  this.launchEvent('load');
};
index.prototype.onLoad = function() {
    console.log('loaded module');
}
index.prototype.onStart = function() {
    console.log('start module');
};

index.prototype.buildSlider = function(){

  this.outerSlider = new ds.Shape('div');
  this.outerSlider.setClass( styles.slider_outer, styles.centered  );

  this.innerSlider= new ds.Shape('div');
  this.innerSlider.setClass( styles.slider );

  for (var i = 0; i < this.images.length; i++) {
    var image = new ds.Shape('div');
    image.setClass( styles.slide_item );

    var span = new ds.ImageShape( require(this.images[i]) );
    span.setClass( styles.slide_image );

    image.appendShape( span );
    this.innerSlider.appendShape( image );
    this.slides.push( image );

  }

  this.outerSlider.appendShape( this.innerSlider );
  this.container.appendShape( this.outerSlider );

};


index.prototype.buildTextSlider = function(){

  this.outerTextSlider = new ds.Shape('div');
  this.outerTextSlider.setClass( styles.slider_outer, styles.centered );

  this.innerTextSlider= new ds.Shape('div');
  this.innerTextSlider.setClass( styles.slider );

  for (var i = 0; i < this.texts.length; i++) {

    var div = new ds.Shape('div');
    div.setClass( styles.slide_item );

    var title = new ds.TextShape('h1');
    title.updateText( this.texts[i].title );
    title.setClass( styles.slide_image );

    //var desc = new ds.TextShape('h3');
    //desc.updateText( this.texts[i].desc );
    div.appendShape( title );
    this.innerTextSlider.appendShape( div );
    this.textSlides.push( div );

  }

  this.outerTextSlider.appendShape( this.innerTextSlider );
  this.container.appendShape( this.outerTextSlider );

};

index.prototype.buildDescSlider = function(){

  this.outerDescSlider = new ds.Shape('div');
  this.outerDescSlider.setClass( styles.slider_outer, styles.centered );

  this.innerDescSlider= new ds.Shape('div');
  this.innerDescSlider.setClass( styles.slider );

  for (var i = 0; i < this.texts.length; i++) {

    var div = new ds.Shape('div');
    div.setClass( styles.slide_item );

    var desc = new ds.TextShape('h4');
    desc.updateText( this.texts[i].desc );
    desc.setClass( styles.desc )

    div.appendShape( desc );
    this.innerDescSlider.appendShape( div );
    this.descSlides.push( div );

  }

  this.outerDescSlider.appendShape( this.innerDescSlider );
  this.container.appendShape( this.outerDescSlider );

};



index.prototype.animateSlider = function(){

  var sliderUlWidth = this.slides.length * this.slideW;
  this.outerSlider.addAttr( 'style', 'width: ' + this.slideW + 'px' );
  this.innerSlider.addAttr( 'style', 'width:' + sliderUlWidth + 'px' );

  for (var i = 0; i < this.slides.length; i++) {
    this.slides[i].addAttr( 'style', 'width:' + this.slideW + 'px;height:' + this.slideH + 'px' );
  }

  var sliderTextWidth = this.slides.length * this.textSlideW;
  this.outerTextSlider.addAttr( 'style', 'width: ' + this.textSlideW + 'px' );
  this.innerTextSlider.addAttr( 'style', 'width:' + sliderTextWidth + 'px' );

  for (var i = 0; i < this.textSlides.length; i++) {
    this.textSlides[i].addAttr( 'style', 'width:' + this.textSlideW + 'px;height:' + this.textSlideH + 'px' );
  }

  var sliderDescWidth = this.slides.length * this.descSlideW;
  this.outerDescSlider.addAttr( 'style', 'width: ' + this.descSlideW + 'px' );
  this.innerDescSlider.addAttr( 'style', 'width:' + sliderDescWidth + 'px' );

  for (var i = 0; i < this.textSlides.length; i++) {
    this.descSlides[i].addAttr( 'style', 'width:' + this.descSlideW + 'px;height:' + this.descSlideH + 'px' );
  }

  this.interval = setInterval( this.moveRight.bind(this), this.timeSlideMove );


};


index.prototype.moveRight = function(  ){

  var slideNum = this.counter++;
  //console.log( slideNum )
    if ( slideNum < this.slides.length ) {
      var transformSize = this.slideW * slideNum;
      var textTransformSize = this.textSlideW * slideNum;
      var descTransformSize = this.descSlideW * slideNum;
      this.innerSlider.addAttr( 'style', 'width:' + ( this.slides.length * this.slideW ) + 'px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-' + transformSize + 'px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-' + transformSize + 'px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-' + transformSize + 'px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-' + transformSize + 'px, 0px, 0px)');
      this.innerTextSlider.addAttr( 'style', 'width:' + ( this.textSlides.length * this.textSlideW ) + 'px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-' + textTransformSize + 'px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-' + textTransformSize + 'px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-' + textTransformSize + 'px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-' + textTransformSize + 'px, 0px, 0px)');
      this.innerDescSlider.addAttr( 'style', 'width:' + ( this.descSlides.length * this.descSlideW ) + 'px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-' + descTransformSize + 'px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-' + descTransformSize + 'px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-' + descTransformSize + 'px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-' + descTransformSize + 'px, 0px, 0px)');

    } else {
      this.counter = 1;
      this.innerSlider.addAttr( 'style', 'width:' + ( this.slides.length * this.slideW ) + 'px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)' );
      this.innerTextSlider.addAttr( 'style', 'width:' + ( this.textSlides.length * this.textSlideW ) + 'px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)' );
      this.innerDescSlider.addAttr( 'style', 'width:' + ( this.textSlides.length * this.descSlideW ) + 'px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)' );
    }

    this.innerSlider.buildDom();
    this.innerTextSlider.buildDom();
    this.innerDescSlider.buildDom();

};


index.prototype.killInterval = function(){
  clearInterval( this.interval );
};




module.exports = index;
