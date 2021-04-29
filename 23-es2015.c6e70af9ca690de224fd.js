(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{HDvl:function(n,t,b){"use strict";b.r(t),b.d(t,"TabsPageModule",function(){return R});var e=b("ofXK"),a=b("3Pt+"),c=b("8lIJ"),i=b("alW4"),l=b("tyNb"),s=b("fXoL");function o(n,t){1&n&&s.Ic(0,"time")}function r(n,t){1&n&&s.Ic(0,"times")}const d={};let I=(()=>{class n{ngOnInit(){this.count=d[this.id]||0,console.log(this.id,"counter instances: ",this.count++),d[this.id]=this.count}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Gb({type:n,selectors:[["counter"]],inputs:{id:"id"},decls:11,vars:2,consts:[[3,"ngPlural"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(n,t){1&n&&(s.Ic(0,"\n    "),s.Sb(1,"h2"),s.Ic(2),s.Sb(3,"span",0),s.Ic(4,"\n        "),s.Gc(5,o,1,0,"ng-template",1),s.Ic(6,"\n        "),s.Gc(7,r,1,0,"ng-template",2),s.Ic(8,"\n      "),s.Rb(),s.Ic(9,"\n    "),s.Rb(),s.Ic(10,"\n  ")),2&n&&(s.zb(2),s.Kc("\n      ngOnInit ran\n      ",t.count,"\n      "),s.zb(1),s.jc("ngPlural",t.count))},directives:[e.n,e.o],encapsulation:2}),n})();var g=b("LMvA");function u(n,t){1&n&&(s.Sb(0,"div"),s.Ic(1,"\n        Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n        "),s.Nb(2,"br"),s.Ic(3,"This content is rendered each time the tab is activated.\n        "),s.Nb(4,"counter",30),s.Ic(5,"\n      "),s.Rb())}function T(n,t){1&n&&(s.Ic(0,"\n        This is equivelent to Tab 2.\n        "),s.Nb(1,"br"),s.Ic(2,"This content is rendered each time the tab is activated.\n        "),s.Nb(3,"counter",31),s.Ic(4,"\n      "))}function x(n,t){1&n&&(s.Sb(0,"div"),s.Ic(1,"\n        This portion is rendered each time the tab is activated.\n        "),s.Nb(2,"counter",32),s.Ic(3,"\n      "),s.Rb())}function h(n,t){if(1&n&&(s.Sb(0,"ngx-tab",33),s.Ic(1),s.Rb()),2&n){const n=t.$implicit;s.jc("label","Tab "+n)("active",1===n),s.zb(1),s.Kc("\n      ","Tab "+n,"\n    ")}}function p(n,t){1&n&&(s.Ic(0," "),s.Nb(1,"ngx-icon",34),s.Ic(2," Tab 1 "))}function v(n,t){1&n&&(s.Ic(0," "),s.Nb(1,"ngx-icon",35),s.Ic(2," Tab 2 "))}function f(n,t){1&n&&(s.Ic(0," "),s.Nb(1,"ngx-icon",36),s.Ic(2," Tab 3 "))}const m=[{path:"",component:(()=>{class n{constructor(){this.tabList=[1,2,3],this.tab3Disabled=!0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Gb({type:n,selectors:[["app-tabs-page"]],decls:127,vars:16,consts:[[1,"style-header"],["sectionTitle","Basic Tabs",1,"shadow"],["label","Tab 1"],["id","tab1"],["label","Tab 2"],[4,"ngxIfTabActive"],["label","Tab 3"],["ngxIfTabActive",""],["label","Tab 4",3,"active"],["thisTab",""],["id","tab4a"],[4,"ngIf"],["sectionTitle","Tab Controls",1,"shadow"],["tabs",""],[3,"label"],["tab1",""],["tab2",""],[3,"label","disabled"],["tab3",""],["tab4",""],[1,"btn","btn-bordered",3,"disabled","click"],[1,"btn","btn-primary",3,"disabled","click"],["label","Disable Tab 3",3,"ngModel","ngModelChange"],["sectionTitle","ngFor Tabs",1,"shadow"],[3,"click"],[3,"label","active",4,"ngFor","ngForOf"],["sectionTitle","Custom Label Tabs",1,"shadow"],["tabLabel1",""],["tabLabel2",""],["tabLabel3",""],["id","tab2"],["id","tab3"],["id","tab4b"],[3,"label","active"],["fontIcon","hand"],["fontIcon","user-groups"],["fontIcon","plane"]],template:function(n,t){if(1&n){const n=s.Tb();s.Sb(0,"h3",0),s.Ic(1,"Tabs"),s.Rb(),s.Ic(2,"\n\n"),s.Sb(3,"ngx-section",1),s.Ic(4,"\n  "),s.Sb(5,"ngx-tabs"),s.Ic(6,"\n    "),s.Sb(7,"ngx-tab",2),s.Ic(8,"\n      This content is rendered once, when the ngx-tabs component is initialized.\n      "),s.Nb(9,"counter",3),s.Ic(10,"\n    "),s.Rb(),s.Ic(11,"\n    "),s.Sb(12,"ngx-tab",4),s.Ic(13,"\n      "),s.Gc(14,u,6,0,"div",5),s.Ic(15,"\n    "),s.Rb(),s.Ic(16,"\n    "),s.Sb(17,"ngx-tab",6),s.Ic(18,"\n      "),s.Gc(19,T,5,0,"ng-template",7),s.Ic(20,"\n    "),s.Rb(),s.Ic(21,"\n    "),s.Sb(22,"ngx-tab",8,9),s.Ic(24,"\n      An *ngIf can be used to control selectivly certain content.\n      "),s.Nb(25,"br"),s.Ic(26,"This portion is rendered once, when the ngx-tabs component is initialized.\n      "),s.Nb(27,"counter",10),s.Ic(28,"\n      "),s.Gc(29,x,4,0,"div",11),s.Ic(30,"\n    "),s.Rb(),s.Ic(31,"\n  "),s.Rb(),s.Ic(32,"\n\n  "),s.Sb(33,"app-prism"),s.Ic(34,"\n"),s.Ic(35,'<ngx-tabs>\n  <ngx-tab label="Tab 1">\n    This content is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab1"></counter>\n  </ngx-tab>\n  <ngx-tab label="Tab 2">\n    <div *ngxIfTabActive>\n      Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab2"></counter>\n    </div>\n  </ngx-tab>\n  <ngx-tab label="Tab 3">\n    <ng-template ngxIfTabActive>\n      This is equivelent to Tab 2.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab3"></counter>\n    </ng-template>\n  </ngx-tab>\n  <ngx-tab label="Tab 4" [active]="false" #thisTab>\n    An *ngIf can be used to control selectivly certain content.\n    <br />This portion is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab4a"></counter>\n    <div *ngIf="thisTab?.active">\n      This portion is rendered each time the tab is activated.\n      <counter id="tab4b"></counter>\n    </div>\n  </ngx-tab>\n</ngx-tabs>'),s.Ic(36,"\n  "),s.Rb(),s.Ic(37,"\n"),s.Rb(),s.Ic(38,"\n\n"),s.Sb(39,"ngx-section",12),s.Ic(40,"\n  "),s.Sb(41,"ngx-tabs",null,13),s.Ic(43,"\n    "),s.Sb(44,"ngx-tab",14,15),s.Ic(46,"\n      Tab 1 Content\n    "),s.Rb(),s.Ic(47,"\n    "),s.Sb(48,"ngx-tab",14,16),s.Ic(50,"\n      Tab 2 Content\n    "),s.Rb(),s.Ic(51,"\n    "),s.Sb(52,"ngx-tab",17,18),s.Ic(54,"\n      Tab 3 Content, Disabled\n    "),s.Rb(),s.Ic(55,"\n    "),s.Sb(56,"ngx-tab",14,19),s.Ic(58,"\n      Tab 4 Content\n    "),s.Rb(),s.Ic(59,"\n  "),s.Rb(),s.Ic(60,"\n  "),s.Sb(61,"button",20),s.Zb("click",function(){return s.vc(n),s.sc(42).prev()}),s.Ic(62,"Prev"),s.Rb(),s.Ic(63,"\n  "),s.Sb(64,"button",20),s.Zb("click",function(){return s.vc(n),s.sc(42).next()}),s.Ic(65,"Next"),s.Rb(),s.Ic(66,"\n  "),s.Sb(67,"button",21),s.Zb("click",function(){s.vc(n);const t=s.sc(57);return s.sc(42).tabClicked(t)}),s.Ic(68,"Select Tab 4"),s.Rb(),s.Ic(69,"\n  "),s.Sb(70,"ngx-toggle",22),s.Zb("ngModelChange",function(n){return t.tab3Disabled=n}),s.Ic(71," "),s.Rb(),s.Ic(72,"\n\n  "),s.Sb(73,"app-prism"),s.Ic(74,"\n"),s.Ic(75,'<ngx-tabs #tabs>\n  <ngx-tab #tab1 [label]="\'Tab 1\'">\n    Tab 1 Content\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="\'Tab 2\'">\n    Tab 2 Content\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="\'Tab 3\'" [disabled]="tab3Disabled">\n    Tab 3 Content, Disabled\n  </ngx-tab>\n  <ngx-tab #tab4 [label]="\'Tab 4\'">\n    Tab 4 Content\n  </ngx-tab>\n</ngx-tabs>\n<button class="btn btn-bordered" (click)="tabs.prev()" [disabled]="tab1.active">Prev</button>\n<button class="btn btn-bordered" (click)="tabs.next()" [disabled]="tab4.active">Next</button>\n<button class="btn btn-primary" (click)="tabs.tabClicked(tab4)" [disabled]="tab4.active">Select Tab 4</button>\n<ngx-toggle [(ngModel)]="tab3Disabled" label="Disable Tab 3"> </ngx-toggle>'),s.Ic(76,"\n  "),s.Rb(),s.Ic(77,"\n"),s.Rb(),s.Ic(78,"\n\n"),s.Sb(79,"ngx-section",23),s.Ic(80,"\n  "),s.Sb(81,"button",24),s.Zb("click",function(){return t.tabList.push(t.tabList.length+1)}),s.Ic(82,"Add Tab"),s.Rb(),s.Ic(83,"\n  "),s.Sb(84,"ngx-tabs"),s.Ic(85,"\n    "),s.Gc(86,h,2,3,"ngx-tab",25),s.Ic(87,"\n  "),s.Rb(),s.Ic(88,"\n\n  "),s.Sb(89,"app-prism"),s.Ic(90,"\n"),s.Ic(91,'<ngx-tabs>\n  <ngx-tab *ngFor="let i of tabList" [label]="\'Tab \' + i" [active]="i === 1">\n    { { \'Tab \' + i } }\n  </ngx-tab>\n</ngx-tabs>'),s.Ic(92,"\n  "),s.Rb(),s.Ic(93,"\n"),s.Rb(),s.Ic(94,"\n\n"),s.Sb(95,"ngx-section",26),s.Ic(96,"\n  "),s.Sb(97,"ngx-tabs"),s.Ic(98,"\n    "),s.Sb(99,"ngx-tab",14,15),s.Ic(101,"\n      Tab 1 custom label\n    "),s.Rb(),s.Ic(102,"\n    "),s.Sb(103,"ngx-tab",14,16),s.Ic(105,"\n      Tab 2 custom label\n    "),s.Rb(),s.Ic(106,"\n    "),s.Sb(107,"ngx-tab",17,18),s.Ic(109,"\n      Tab 3 custom label, Disabled\n    "),s.Rb(),s.Ic(110,"\n  "),s.Rb(),s.Ic(111,"\n\n  "),s.Sb(112,"app-prism"),s.Ic(113,"\n"),s.Ic(114,'<ngx-tabs>\n  <ngx-tab #tab1 [label]="tabLabel1">\n    Tab 1 custom label\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="tabLabel2">\n    Tab 2 custom label\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="tabLabel3" [disabled]="true">\n    Tab 3 custom label, Disabled\n  </ngx-tab>\n</ngx-tabs>'),s.Ic(115,"\n  "),s.Rb(),s.Ic(116,"\n\n  "),s.Gc(117,p,3,0,"ng-template",null,27,s.Hc),s.Ic(119,"\n  "),s.Gc(120,v,3,0,"ng-template",null,28,s.Hc),s.Ic(122,"\n  "),s.Gc(123,f,3,0,"ng-template",null,29,s.Hc),s.Ic(125,"\n"),s.Rb(),s.Ic(126,"\n")}if(2&n){const n=s.sc(23),b=s.sc(45),e=s.sc(57),a=s.sc(118),c=s.sc(121),i=s.sc(124);s.zb(22),s.jc("active",!1),s.zb(7),s.jc("ngIf",null==n?null:n.active),s.zb(15),s.jc("label","Tab 1"),s.zb(4),s.jc("label","Tab 2"),s.zb(4),s.jc("label","Tab 3")("disabled",t.tab3Disabled),s.zb(4),s.jc("label","Tab 4"),s.zb(5),s.jc("disabled",b.active),s.zb(3),s.jc("disabled",e.active),s.zb(3),s.jc("disabled",e.active),s.zb(3),s.jc("ngModel",t.tab3Disabled),s.zb(16),s.jc("ngForOf",t.tabList),s.zb(13),s.jc("label",a),s.zb(4),s.jc("label",c),s.zb(4),s.jc("label",i)("disabled",!0)}},directives:[c.Cb,c.Wb,c.Vb,I,c.K,e.m,g.a,c.cc,a.i,a.l,e.l],encapsulation:2,changeDetection:0}),n})()}];let S=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},imports:[[l.g.forChild(m)],l.g]}),n})(),R=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},imports:[[e.c,a.d,i.a,c.Eb,c.Xb,c.dc,S]]}),n})()}}]);