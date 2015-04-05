## Ionic Custom Component Sample

### About

This sample code intend to show how we create custom Ionic component with directives based on [starter template](https://github.com/driftyco/ionic-starter-blank).
It is motivated from [this great article](http://ionicframework.com/blog/ionic-swipeable-cards/),
and as a good example of directive usage, it also combines with popular directive - [header shrink](https://github.com/driftyco/ionic-ion-header-shrink).

This sample deal with typical search use case. Once user start searching, it hide search panel with animation. Also once user start scrolling,
the panel is automatically hidden.

![image](https://raw.githubusercontent.com/wiki/noritamago/ionic-custom-component-sample/images/image.png)

### Usage

 * input field, search box, etc... are enclosed with ```<search-panel>``` directive
 * ```<ion-header-bar>``` and ```<search-panel>``` directive are enclosed with ```<div header-shrink-group>```
 * search panel is closed with ```searchPanelDelegate.toggle()``` or scroll event is triggered inside ion-content

```html
<body ng-controller="AppController as vm">

    <div header-shrink-group>

        <ion-header-bar class="bar-positive">
            <div class="buttons">
                <button class="button button-icon ion-navicon"></button>
            </div>
            <h1 class="title" ng-cloak>Things</h1>
         </ion-header-bar>

         <search-panel duration="0.5" dst-y="-210"> <!-- animation setting -->
              <!--  search box, input field etc.. whatever you want -->
              <div ng-click="vm.toggle()">...</div> <!--  internally, searchPanelDelegate.toggle() is called-->
         </search-panel>
    </div>

    <ion-content header-shrink header-shrink-len="24" scroll-event-interval="5" ng-controller="AppController as vm">
        <div class="search_result">
            <!--  search result list  -->
        </div>
```

### Setup
 * install gulp and bower
```bash
npm install gulp
npm install bower
```
 * install library and tool
```bash
$ bower install
$ npm install
```
 * execuation
```bash
$ gulp serve
```

### Reference
 * [Ionic Framework](http://ionicframework.com/)
 * [Building a custom Swipeable Card UI with Ionic and AngularJS](http://ionicframework.com/blog/ionic-swipeable-cards/)
 * [Ionic Ion Header Shrink](https://github.com/driftyco/ionic-ion-header-shrink)
