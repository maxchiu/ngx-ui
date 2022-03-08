(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[2670],{2670:function(n,t,e){"use strict";e.r(t),e.d(t,{LoadingPageModule:function(){return l}});var o=e(8583),i=e(5719),r=e(9421),u=e(4330),a=e(3018),c=e(7402);const p=[{path:"",component:(()=>{class n{constructor(n){this.loadingService=n}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(i.bze))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-loading-page"]],decls:62,vars:3,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["type","button",3,"click"],["label","Markup"],["label","TypeScript"],["language","js"]],template:function(n,t){1&n&&(a.TgZ(0,"h3",0),a._uU(1,"Loading Bar"),a.qZA(),a._uU(2,"\n"),a.TgZ(3,"ngx-section",1),a._uU(4,"\n  "),a.TgZ(5,"button",2),a.NdJ("click",function(){return t.loadingService.start()}),a._uU(6,"Start"),a.qZA(),a._uU(7,"\n  "),a.TgZ(8,"button",2),a.NdJ("click",function(){return t.loadingService.stop()}),a._uU(9,"Stop"),a.qZA(),a._uU(10,"\n  "),a.TgZ(11,"button",2),a.NdJ("click",function(){return t.loadingService.reset()}),a._uU(12,"Reset"),a.qZA(),a._uU(13,"\n  "),a.TgZ(14,"button",2),a.NdJ("click",function(){return t.loadingService.complete()}),a._uU(15,"Complete"),a.qZA(),a._uU(16,"\n\n  "),a._UZ(17,"br"),a._uU(18,"\n  "),a._UZ(19,"br"),a._uU(20,"\n\n  "),a.TgZ(21,"ngx-tabs"),a._uU(22,"\n    "),a.TgZ(23,"ngx-tab",3),a._uU(24,"\n      "),a.TgZ(25,"app-prism"),a._uU(26,"\n"),a._uU(27,'<button type="button" (click)="loadingService.start()">Start</button>\n<button type="button" (click)="loadingService.stop()">Stop</button>\n<button type="button" (click)="loadingService.reset()">Reset</button>\n<button type="button" (click)="loadingService.complete()">Complete</button>'),a._uU(28,"\n      "),a.qZA(),a._uU(29,"\n    "),a.qZA(),a._uU(30,"\n    "),a.TgZ(31,"ngx-tab",4),a._uU(32,"\n      "),a.TgZ(33,"app-prism",5),a._uU(34,"\n"),a._uU(35,"import { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public loadingService: LoadingService) { }\n}"),a._uU(36,"\n      "),a.qZA(),a._uU(37,"\n    "),a.qZA(),a._uU(38,"\n  "),a.qZA(),a._uU(39,"\n"),a.qZA(),a._uU(40,"\n\n"),a.TgZ(41,"ngx-section",1),a._uU(42,"\n  "),a.TgZ(43,"p"),a._uU(44,"Integrate with ui-router state transitions"),a.qZA(),a._uU(45,"\n\n  "),a.TgZ(46,"app-prism",5),a._uU(47,"\n"),a._uU(48,"import { Component } from '@angular/core';\nimport { TransitionService } from 'ui-router-ng2';\nimport { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  template: `\n    <main>\n      <ui-view></ui-view>\n    </main>\n  `\n})\nexport class AppComponent {\n\n  constructor(transitionService: TransitionService, loadingService: LoadingService) {\n    transitionService.onStart({ to: '*' }, () => {\n      loadingService.start();\n    });\n\n    transitionService.onFinish({ to: '*' }, () => {\n      loadingService.complete();\n    });\n  }\n\n}"),a._uU(49,"\n  "),a.qZA(),a._uU(50,"\n"),a.qZA(),a._uU(51,"\n\n"),a.TgZ(52,"ngx-section",1),a._uU(53,"\n  "),a.TgZ(54,"p"),a._uU(55,"Integrate with Angular Router transitions"),a.qZA(),a._uU(56,"\n\n  "),a.TgZ(57,"app-prism",5),a._uU(58,"\n"),a._uU(59,"import { Component } from '@angular/core';\nimport { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';\nimport { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  template: `\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  `\n})\nexport class AppComponent {\n  constructor(router: Router) {\n    router.events.subscribe((event: Event) => {\n      if(event instanceof NavigationStart) {\n        loadingService.start();\n      } else if(event instanceof NavigationEnd) {\n        loadingService.complete();\n        drawerService.destroyAll();\n      }\n    });\n  }\n}"),a._uU(60,"\n  "),a.qZA(),a._uU(61,"\n"),a.qZA()),2&n&&(a.xp6(3),a.Q6J("sectionTitle","Demo"),a.xp6(38),a.Q6J("sectionTitle","UI Router"),a.xp6(11),a.Q6J("sectionTitle","Angular Router"))},directives:[i.e0w,i.n4f,i.idV,c.U],encapsulation:2,changeDetection:0}),n})()}];let s=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[u.Bz.forChild(p)],u.Bz]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.ez,r.F,i.HNi,i.P4_,s]]}),n})()}}]);