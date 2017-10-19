webpackJsonp([3],{"7zQV":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("TToO"),o=i("3j3K"),r=i("2Je8"),s=i("A2z0"),c=i("wC5L"),a=i("DJJx"),m=(function(){function e(){}return Object.defineProperty(e,"TYPES",{get:function(){return{hero:"hero",comic:"comic"}},enumerable:!0,configurable:!0}),e})(),u=i("j6h4"),l=(function(){function e(e,t,i,n){this.favouritesService=e,this.comicsRepository=t,this.heroesRepository=i,this.tabsService=n,this.heroes=[],this.comics=[]}return e.prototype.ngOnInit=function(){this.loadFavourites()},e.prototype.loadFavourites=function(){var e=this,t=this.favouritesService.favourites;Object.keys(t).forEach((function(i){switch(t[i]){case m.TYPES.comic:e.comicsRepository.fetchComic(i).subscribe((function(t){return e.comics.push(t)}));break;case m.TYPES.hero:e.heroesRepository.fetchHero(i).subscribe((function(t){return e.heroes.push(t)}))}}))},e.prototype.selectHero=function(e){this.tabsService.openNewTab({route:"heroes/entity/"+e.id,name:""+e.name})},e.prototype.selectComic=function(e){this.tabsService.openNewTab({route:"comics/entity/"+e.id,name:""+e.title})},e})();l=n.b([Object(o.o)({selector:"app-favourites",template:i("jzTp"),styles:[i("f314")]}),n.d("design:paramtypes",[s.a,c.a,a.a,u.a])],l);var h=i("5oXY"),p=[{path:"",component:l}],d=(function(){function e(){}return e})();d=n.b([Object(o.M)({imports:[h.d.forChild(p)],exports:[h.d]})],d),i.d(t,"FavouritesModule",(function(){return f}));var f=(function(){function e(){}return e})();f=n.b([Object(o.M)({declarations:[l],imports:[d,r.b]})],f)},"V/YT":function(e,t,i){t=e.exports=i("FZ+f")(void 0),t.push([e.i,".list{margin-top:3rem;display:flex;flex-wrap:wrap}.list__item{width:23%;margin-bottom:3rem;margin-right:1rem;text-align:center}.about{margin-top:1.5rem;font-size:2rem}.about__link{cursor:pointer}.about__link:focus,.about__link:hover{color:#ff1414}@media screen and (max-width:768px){.list__item{width:23%}}@media screen and (max-width:640px){.list__item{width:32%}}@media screen and (max-width:400px){.list__item{width:45%}}",""])},f314:function(e,t,i){var n=i("V/YT");e.exports="string"==typeof n?n:n.toString()},jzTp:function(e,t){e.exports='<h3 class="title">Favourites comics</h3>\n<ul class="list">\n    <ng-container *ngIf="comics; else empty">\n        <li class="list__item about__link" *ngFor="let comic of comics" (click)="selectComic(comic)">\n            <div class="preview">\n                <picture class="comic__picture" *ngIf="comic?.thumbnail">\n                    <source [srcset]="comic?.thumbnail?.path + \'/portrait_uncanny.\' + comic?.thumbnail?.extension" media="(min-width: 768px)">\n                    <source [srcset]="comic?.thumbnail?.path + \'/portrait_xlarge.\' + comic?.thumbnail?.extension" media="(min-width: 425px)">\n                    <source [srcset]="comic?.thumbnail?.path + \'/portrait_medium.\' + comic?.thumbnail?.extension" media="(min-width: 100px)">\n                    <img class="image" [src]="comic?.thumbnail?.path + \'.\' + comic?.thumbnail?.extension" [alt]="comic?.title">\n                </picture>\n            </div>\n            <p class="about">\n                <span>{{comic?.title}}</span>\n            </p>\n        </li>\n    </ng-container>\n</ul>\n\n<h3 class="title">Favourite heroes</h3>\n<ul class="list">\n    <ng-container *ngIf="comics; else empty">\n        <li class="list__item about__link" *ngFor="let hero of heroes" (click)="selectHero(hero)">\n            <div class="preview">\n                <picture class="hero__picture" *ngIf="hero?.thumbnail">\n                    <source [srcset]="hero?.thumbnail?.path + \'/standard_fantastic.\' + hero?.thumbnail?.extension" media="(min-width: 768px)">\n                    <source [srcset]="hero?.thumbnail?.path + \'/standard_xlarge.\' + hero?.thumbnail?.extension" media="(min-width: 425px)">\n                    <source [srcset]="hero?.thumbnail?.path + \'/standard_medium.\' + hero?.thumbnail?.extension" media="(min-width: 100px)">\n                    <img class="image" [src]="hero?.thumbnail?.path + \'.\' + hero?.thumbnail?.extension" [alt]="hero?.name">\n                </picture>\n            </div>\n            <p class="about">\n                <span>{{hero?.name}}</span>\n            </p>\n        </li>\n    </ng-container>\n</ul>\n\n<ng-template #empty>\n    <span>Sorry, add favourite first!</span>\n</ng-template>\n'}});