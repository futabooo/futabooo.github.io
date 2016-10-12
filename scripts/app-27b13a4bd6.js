/******/!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n,r=o(1),a=o(2),i=o(3),s=o(4),l=o(5),c=o(6),u=o(7),p=o(8);!function(t){"use strict";angular.module("futaboooGithubIo",["restangular","ui.router","ngMaterial","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(a.routerConfig).run(i.runBlock).service("githubContributor",l.GithubContributor).service("webDevTec",c.WebDevTecService).controller("MainController",s.MainController).directive("acmeNavbar",u.acmeNavbar).directive("acmeMalarkey",p.acmeMalarkey)}(n||(n={}))},function(t,e){function o(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}o.$inject=["$logProvider","toastrConfig"],e.config=o},function(t,e){function o(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}o.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=o},function(t,e){function o(t){t.debug("runBlock end")}o.$inject=["$log"],e.runBlock=o},function(t,e){var o=function(){function t(t,e,o){this.awesomeThings=new Array,this.webDevTec=e,this.classAnimation="",this.creationDate=1476210262876,this.toastr=o,this.activate(t)}return t.$inject=["$timeout","webDevTec","toastr"],t.prototype.activate=function(t){var e=this;this.getWebDevTec(),t(function(){e.classAnimation="rubberBand"},4e3)},t.prototype.activate.$inject=["$timeout"],t.prototype.showToastr=function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""},t.prototype.getWebDevTec=function(){this.awesomeThings=this.webDevTec.tec},t}();e.MainController=o},function(t,e){var o=function(){function t(t,e){this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],t.prototype.getContributors=function(t){var e=this;return void 0===t&&(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n",t.data)})},t}();e.GithubContributor=o},function(t,e){var o=function(){function t(){var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];this.data=t.map(function(t){return t.rank=Math.random(),t})}return Object.defineProperty(t.prototype,"tec",{get:function(){return this.data},enumerable:!0,configurable:!0}),t}();e.WebDevTecService=o},function(t,e){function o(){return{restrict:"E",scope:{creationDate:"="},templateUrl:"app/components/navbar/navbar.html",controller:n,controllerAs:"vm",bindToController:!0}}e.acmeNavbar=o;var n=function(){function t(t){this.relativeDate=t(this.creationDate).fromNow()}return t.$inject=["moment"],t}();e.NavbarController=n},function(t,e){function o(t){return{restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:r,controllerAs:"vm"}}function n(t,e,o,n){var r,a=n.malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){a.type(t).pause()["delete"]()}),r=t.$watch("vm.contributors",function(t,e){angular.forEach(n.contributors,function(t){a.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}o.$inject=["malarkey"],e.acmeMalarkey=o;var r=function(){function t(t,e,o){this.$log=t,this.githubContributor=e,this.malarkey=o,this.contributors=[],this.activate()}return t.$inject=["$log","githubContributor","malarkey"],t.prototype.activate=function(){var t=this;return this.getContributors().then(function(){t.$log.info("Activated Contributors View")})},t.prototype.getContributors=function(){var t=this;return this.githubContributor.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t}();e.MalarkeyController=r}]),angular.module("futaboooGithubIo").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><header><acme-navbar creation-date=main.creationDate></acme-navbar></header><section class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class=main.classAnimation ng-click=main.showToastr()>Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-27b13a4bd6.js.map
