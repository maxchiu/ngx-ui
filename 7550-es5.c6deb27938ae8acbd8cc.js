!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[7550],{7550:function(a,e,i){"use strict";i.r(e),i.d(e,{TabsPageModule:function(){return J}});var b=i(8583),u=i(665),l=i(5144),c=i(9421),o=i(4330),s=i(3018);function g(n,t){1&n&&s._uU(0,"time")}function r(n,t){1&n&&s._uU(0,"times")}var d={},T=function(){var a=function(){function a(){n(this,a)}var e,i,b;return e=a,(i=[{key:"ngOnInit",value:function(){this.count=d[this.id]||0,console.log(this.id,"counter instances: ",this.count++),d[this.id]=this.count}}])&&t(e.prototype,i),b&&t(e,b),a}();return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=s.Xpm({type:a,selectors:[["counter"]],inputs:{id:"id"},decls:11,vars:2,consts:[[3,"ngPlural"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(n,t){1&n&&(s._uU(0,"\n    "),s.TgZ(1,"h2"),s._uU(2),s.TgZ(3,"span",0),s._uU(4,"\n        "),s.YNc(5,g,1,0,"ng-template",1),s._uU(6,"\n        "),s.YNc(7,r,1,0,"ng-template",2),s._uU(8,"\n      "),s.qZA(),s._uU(9,"\n    "),s.qZA(),s._uU(10,"\n  ")),2&n&&(s.xp6(2),s.hij("\n      ngOnInit ran\n      ",t.count,"\n      "),s.xp6(1),s.Q6J("ngPlural",t.count))},directives:[b.iq,b.zE],encapsulation:2}),a}(),_=i(7402);function U(n,t){1&n&&(s.TgZ(0,"div"),s._uU(1,"\n        Tab 2 contents.\n        Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n        "),s._UZ(2,"br"),s._uU(3,"This content is rendered each time the tab is activated.\n        "),s._UZ(4,"counter",34),s._uU(5,"\n      "),s.qZA())}function x(n,t){1&n&&(s._uU(0,"\n        Tab 3 contents.\n        This is equivalent to Tab 2.\n        "),s._UZ(1,"br"),s._uU(2,"This content is rendered each time the tab is activated.\n        "),s._UZ(3,"counter",35),s._uU(4,"\n      "))}function p(n,t){1&n&&(s.TgZ(0,"div"),s._uU(1,"\n        This portion is rendered each time the tab is activated.\n        "),s._UZ(2,"counter",36),s._uU(3,"\n      "),s.qZA())}function Z(n,t){if(1&n&&(s.TgZ(0,"ngx-tab",37),s._uU(1),s.qZA()),2&n){var a=t.$implicit;s.Q6J("label","Tab "+a)("active",1===a),s.xp6(1),s.hij("\n      ","Tab "+a,"\n    ")}}function h(n,t){1&n&&(s._uU(0," "),s._UZ(1,"ngx-icon",38),s._uU(2," Tab 1 "))}function f(n,t){1&n&&(s._uU(0," "),s._UZ(1,"ngx-icon",39),s._uU(2," Tab 2 "))}function v(n,t){1&n&&(s._uU(0," "),s._UZ(1,"ngx-icon",40),s._uU(2," Tab 3 "))}var A,m,q=[{path:"",component:(A=function t(){n(this,t),this.tabList=[1,2,3],this.tab3Disabled=!0},A.\u0275fac=function(n){return new(n||A)},A.\u0275cmp=s.Xpm({type:A,selectors:[["app-tabs-page"]],decls:145,vars:17,consts:[[1,"style-header"],["sectionTitle","Basic Tabs",1,"shadow"],["label","Tab 1"],["id","tab1"],["label","Tab 2"],[4,"ngxIfTabActive"],["label","Tab 3"],["ngxIfTabActive",""],["label","Tab 4",3,"active"],["thisTab",""],["id","tab4a"],[4,"ngIf"],["sectionTitle","Tab Controls",1,"shadow"],["tabs",""],[3,"label"],["tab1",""],["tab2",""],[3,"label","disabled"],["tab3",""],["tab4",""],[1,"btn","btn-bordered",3,"disabled","click"],[1,"btn","btn-primary",3,"disabled","click"],["label","Disable Tab 3",3,"ngModel","ngModelChange"],["sectionTitle","ngFor Tabs",1,"shadow"],[3,"click"],[3,"label","active",4,"ngFor","ngForOf"],["sectionTitle","Custom Label Tabs",1,"shadow"],["tabLabel1",""],["tabLabel2",""],["tabLabel3",""],["sectionTitle","Light Appearance","appearance","light",1,"shadow"],["appearance","light"],["label","Tab 3",3,"disabled"],["label","Tab 4"],["id","tab2"],["id","tab3"],["id","tab4b"],[3,"label","active"],["fontIcon","hand"],["fontIcon","user-groups"],["fontIcon","plane"]],template:function(n,t){if(1&n){var a=s.EpF();s.TgZ(0,"h3",0),s._uU(1,"Tabs"),s.qZA(),s._uU(2,"\n\n"),s.TgZ(3,"ngx-section",1),s._uU(4,"\n  "),s.TgZ(5,"ngx-tabs"),s._uU(6,"\n    "),s.TgZ(7,"ngx-tab",2),s._uU(8,"\n      Tab 1 contents.\n      This content is rendered once, when the ngx-tabs component is initialized.\n      "),s._UZ(9,"counter",3),s._uU(10,"\n    "),s.qZA(),s._uU(11,"\n    "),s.TgZ(12,"ngx-tab",4),s._uU(13,"\n      "),s.YNc(14,U,6,0,"div",5),s._uU(15,"\n    "),s.qZA(),s._uU(16,"\n    "),s.TgZ(17,"ngx-tab",6),s._uU(18,"\n      "),s.YNc(19,x,5,0,"ng-template",7),s._uU(20,"\n    "),s.qZA(),s._uU(21,"\n    "),s.TgZ(22,"ngx-tab",8,9),s._uU(24,"\n      Tab 4 contents.\n      An *ngIf can be used to control selectively certain content.\n      "),s._UZ(25,"br"),s._uU(26,"This portion is rendered once, when the ngx-tabs component is initialized.\n      "),s._UZ(27,"counter",10),s._uU(28,"\n      "),s.YNc(29,p,4,0,"div",11),s._uU(30,"\n    "),s.qZA(),s._uU(31,"\n  "),s.qZA(),s._uU(32,"\n\n  "),s.TgZ(33,"app-prism"),s._uU(34,"\n"),s._uU(35,'<ngx-tabs>\n  <ngx-tab label="Tab 1">\n    This content is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab1"></counter>\n  </ngx-tab>\n  <ngx-tab label="Tab 2">\n    <div *ngxIfTabActive>\n      Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab2"></counter>\n    </div>\n  </ngx-tab>\n  <ngx-tab label="Tab 3">\n    <ng-template ngxIfTabActive>\n      This is equivalent to Tab 2.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab3"></counter>\n    </ng-template>\n  </ngx-tab>\n  <ngx-tab label="Tab 4" [active]="false" #thisTab>\n    An *ngIf can be used to control selectively certain content.\n    <br />This portion is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab4a"></counter>\n    <div *ngIf="thisTab?.active">\n      This portion is rendered each time the tab is activated.\n      <counter id="tab4b"></counter>\n    </div>\n  </ngx-tab>\n</ngx-tabs>'),s._uU(36,"\n  "),s.qZA(),s._uU(37,"\n"),s.qZA(),s._uU(38,"\n\n"),s.TgZ(39,"ngx-section",12),s._uU(40,"\n  "),s.TgZ(41,"ngx-tabs",null,13),s._uU(43,"\n    "),s.TgZ(44,"ngx-tab",14,15),s._uU(46,"\n      Tab 1 Content\n    "),s.qZA(),s._uU(47,"\n    "),s.TgZ(48,"ngx-tab",14,16),s._uU(50,"\n      Tab 2 Content\n    "),s.qZA(),s._uU(51,"\n    "),s.TgZ(52,"ngx-tab",17,18),s._uU(54,"\n      Tab 3 Content, Disabled\n    "),s.qZA(),s._uU(55,"\n    "),s.TgZ(56,"ngx-tab",14,19),s._uU(58,"\n      Tab 4 Content\n    "),s.qZA(),s._uU(59,"\n  "),s.qZA(),s._uU(60,"\n  "),s.TgZ(61,"button",20),s.NdJ("click",function(){return s.CHM(a),s.MAs(42).prev()}),s._uU(62,"Prev"),s.qZA(),s._uU(63,"\n  "),s.TgZ(64,"button",20),s.NdJ("click",function(){return s.CHM(a),s.MAs(42).next()}),s._uU(65,"Next"),s.qZA(),s._uU(66,"\n  "),s.TgZ(67,"button",21),s.NdJ("click",function(){s.CHM(a);var n=s.MAs(57);return s.MAs(42).tabClicked(n)}),s._uU(68,"Select Tab 4"),s.qZA(),s._uU(69,"\n  "),s.TgZ(70,"ngx-toggle",22),s.NdJ("ngModelChange",function(n){return t.tab3Disabled=n}),s._uU(71," "),s.qZA(),s._uU(72,"\n\n  "),s.TgZ(73,"app-prism"),s._uU(74,"\n"),s._uU(75,'<ngx-tabs #tabs>\n  <ngx-tab #tab1 [label]="\'Tab 1\'">\n    Tab 1 Content\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="\'Tab 2\'">\n    Tab 2 Content\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="\'Tab 3\'" [disabled]="tab3Disabled">\n    Tab 3 Content, Disabled\n  </ngx-tab>\n  <ngx-tab #tab4 [label]="\'Tab 4\'">\n    Tab 4 Content\n  </ngx-tab>\n</ngx-tabs>\n<button class="btn btn-bordered" (click)="tabs.prev()" [disabled]="tab1.active">Prev</button>\n<button class="btn btn-bordered" (click)="tabs.next()" [disabled]="tab4.active">Next</button>\n<button class="btn btn-primary" (click)="tabs.tabClicked(tab4)" [disabled]="tab4.active">Select Tab 4</button>\n<ngx-toggle [(ngModel)]="tab3Disabled" label="Disable Tab 3"> </ngx-toggle>'),s._uU(76,"\n  "),s.qZA(),s._uU(77,"\n"),s.qZA(),s._uU(78,"\n\n"),s.TgZ(79,"ngx-section",23),s._uU(80,"\n  "),s.TgZ(81,"button",24),s.NdJ("click",function(){return t.tabList.push(t.tabList.length+1)}),s._uU(82,"Add Tab"),s.qZA(),s._uU(83,"\n  "),s.TgZ(84,"ngx-tabs"),s._uU(85,"\n    "),s.YNc(86,Z,2,3,"ngx-tab",25),s._uU(87,"\n  "),s.qZA(),s._uU(88,"\n\n  "),s.TgZ(89,"app-prism"),s._uU(90,"\n"),s._uU(91,'<ngx-tabs>\n  <ngx-tab *ngFor="let i of tabList" [label]="\'Tab \' + i" [active]="i === 1">\n    { { \'Tab \' + i } }\n  </ngx-tab>\n</ngx-tabs>'),s._uU(92,"\n  "),s.qZA(),s._uU(93,"\n"),s.qZA(),s._uU(94,"\n\n"),s.TgZ(95,"ngx-section",26),s._uU(96,"\n  "),s.TgZ(97,"ngx-tabs"),s._uU(98,"\n    "),s.TgZ(99,"ngx-tab",14,15),s._uU(101,"\n      Tab 1 custom label\n    "),s.qZA(),s._uU(102,"\n    "),s.TgZ(103,"ngx-tab",14,16),s._uU(105,"\n      Tab 2 custom label\n    "),s.qZA(),s._uU(106,"\n    "),s.TgZ(107,"ngx-tab",17,18),s._uU(109,"\n      Tab 3 custom label, Disabled\n    "),s.qZA(),s._uU(110,"\n  "),s.qZA(),s._uU(111,"\n\n  "),s.TgZ(112,"app-prism"),s._uU(113,"\n"),s._uU(114,'<ngx-tabs>\n  <ngx-tab #tab1 [label]="tabLabel1">\n    Tab 1 custom label\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="tabLabel2">\n    Tab 2 custom label\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="tabLabel3" [disabled]="true">\n    Tab 3 custom label, Disabled\n  </ngx-tab>\n</ngx-tabs>'),s._uU(115,"\n  "),s.qZA(),s._uU(116,"\n\n  "),s.YNc(117,h,3,0,"ng-template",null,27,s.W1O),s._uU(119,"\n  "),s.YNc(120,f,3,0,"ng-template",null,28,s.W1O),s._uU(122,"\n  "),s.YNc(123,v,3,0,"ng-template",null,29,s.W1O),s._uU(125,"\n"),s.qZA(),s._uU(126,"\n\n"),s.TgZ(127,"ngx-section",30),s._uU(128,"\n  "),s.TgZ(129,"ngx-tabs",31),s._uU(130,"\n    "),s.TgZ(131,"ngx-tab",2),s._uU(132,"\n      Tab 1 Content\n    "),s.qZA(),s._uU(133,"\n    "),s.TgZ(134,"ngx-tab",4),s._uU(135,"\n      Tab 2 Content\n    "),s.qZA(),s._uU(136,"\n    "),s.TgZ(137,"ngx-tab",32),s._uU(138,"\n      Tab 3 Content, Disabled\n    "),s.qZA(),s._uU(139,"\n    "),s.TgZ(140,"ngx-tab",33),s._uU(141,"\n      Tab 4 Content\n    "),s.qZA(),s._uU(142,"\n  "),s.qZA(),s._uU(143,"\n"),s.qZA(),s._uU(144,"\n")}if(2&n){var e=s.MAs(23),i=s.MAs(45),b=s.MAs(57),u=s.MAs(118),l=s.MAs(121),c=s.MAs(124);s.xp6(22),s.Q6J("active",!1),s.xp6(7),s.Q6J("ngIf",null==e?null:e.active),s.xp6(15),s.Q6J("label","Tab 1"),s.xp6(4),s.Q6J("label","Tab 2"),s.xp6(4),s.Q6J("label","Tab 3")("disabled",t.tab3Disabled),s.xp6(4),s.Q6J("label","Tab 4"),s.xp6(5),s.Q6J("disabled",i.active),s.xp6(3),s.Q6J("disabled",b.active),s.xp6(3),s.Q6J("disabled",b.active),s.xp6(3),s.Q6J("ngModel",t.tab3Disabled),s.xp6(16),s.Q6J("ngForOf",t.tabList),s.xp6(13),s.Q6J("label",u),s.xp6(4),s.Q6J("label",l),s.xp6(4),s.Q6J("label",c)("disabled",!0),s.xp6(30),s.Q6J("disabled",!0)}},directives:[l.e0w,l.n4f,l.idV,T,l.$HN,b.O5,_.U,l.n$2,u.JJ,u.On,b.sg],encapsulation:2,changeDetection:0}),A)}],C=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(q)],o.Bz]}),t}(),J=((m=function t(){n(this,t)}).\u0275fac=function(n){return new(n||m)},m.\u0275mod=s.oAB({type:m}),m.\u0275inj=s.cJS({imports:[[b.ez,u.u5,c.F,l.HNi,l.P4_,l.vmb,C]]}),m)}}])}();