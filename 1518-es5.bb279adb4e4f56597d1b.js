!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var u=t[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[1518],{1518:function(e,u,o){"use strict";o.r(u),o.d(u,{StepperPageModule:function(){return h}});var i=o(8583),r=o(665),c=o(3547),p=o(9421),l=o(4330),s=o(3018),U=o(7402);function _(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function g(n,t){1&n&&(s.TgZ(0,"ngx-step",23,24),s._uU(2,"\n      "),s.YNc(3,_,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n&&s.Q6J("label",t.$implicit.title)}function a(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function d(n,t){1&n&&(s.TgZ(0,"ngx-step",23,24),s._uU(2,"\n      "),s.YNc(3,a,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n&&s.Q6J("label",t.$implicit.title)}function Z(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function x(n,t){1&n&&(s.TgZ(0,"ngx-step",26,24),s._uU(2,"\n      "),s.YNc(3,Z,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n&&s.Q6J("icon",t.$implicit.icon)}function f(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function A(n,t){1&n&&(s.TgZ(0,"ngx-step",27,24),s._uU(2,"\n      "),s.YNc(3,f,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n&&s.Q6J("completeIcon",t.$implicit.completeIcon)}function b(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function T(n,t){1&n&&(s.TgZ(0,"ngx-step",26,24),s._uU(2,"\n      "),s.YNc(3,b,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n&&s.Q6J("icon",t.$implicit.icon)}function J(n,t){if(1&n&&s._uU(0),2&n){s.oxw();var e=s.MAs(1);s.hij("\n        Step #",e.step+1,"\n      ")}}function m(n,t){if(1&n&&(s.TgZ(0,"ngx-step",28,24),s._uU(2,"\n      "),s.YNc(3,J,1,1,"ng-template",25),s._uU(4,"\n    "),s.qZA()),2&n){var e=t.$implicit;s.Q6J("label",e.title)("completeIcon",e.completeIcon)}}var q,N,v=function(n){return[n]},y=[{path:"",component:(q=function(){function e(){n(this,e),this.StepperPosition=c.jkw,this.steps=[{title:"step 1",icon:"ngx-icon ngx-cloud-download"},{title:"step 2",icon:"ngx-icon ngx-rocket"},{title:"step 3",icon:"ngx-icon ngx-bell-alarm"},{title:"step 4",icon:"ngx-icon ngx-cloud-upload"}],this.index=2,this.readonly=!0,this.position=c.jkw.Left}var u,o,i;return u=e,(o=[{key:"next",value:function(){this.index<this.steps.length-1&&this.index++}},{key:"previous",value:function(){this.index>0&&this.index--}},{key:"toggleReadonly",value:function(){this.readonly=!this.readonly}},{key:"addStep",value:function(){this.steps.push({title:"next step",icon:"ngx-icon ngx-bug"})}}])&&t(u.prototype,o),i&&t(u,i),e}(),q.\u0275fac=function(n){return new(n||q)},q.\u0275cmp=s.Xpm({type:q,selectors:[["app-stepper-page"]],decls:296,vars:32,consts:[[1,"style-header"],["sectionTitle","Stepper",1,"shadow"],[3,"readonly","active","activeChange"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[1,"btn",3,"click"],["sectionTitle","Stepper (With progress indicator)",1,"shadow"],["progress","true","trackBar","false",3,"readonly","active","activeChange"],["sectionTitle","Stepper (Custom Icon)",1,"shadow"],[3,"icon",4,"ngFor","ngForOf"],["sectionTitle","Stepper (Custom Complete Icon)",1,"shadow"],["completeIcon","ngx-icon ngx-arrow-bold-right",3,"readonly","active","activeChange"],[3,"completeIcon",4,"ngFor","ngForOf"],["sectionTitle","Stepper (Large Icon)",1,"shadow"],["large","true",3,"readonly","active","activeChange"],["sectionTitle","Stepper (Position Change)",1,"shadow"],[3,"position","readonly","active","activeChange"],[3,"label","completeIcon",4,"ngFor","ngForOf"],["filterable","false",3,"ngModel","ngModelChange"],["name","Top",3,"value"],["name","Bottom",3,"value"],["name","Left",3,"value"],["name","Right",3,"value"],[3,"label"],["ngxStep",""],["ngxStepContent",""],[3,"icon"],[3,"completeIcon"],[3,"label","completeIcon"]],template:function(n,t){if(1&n){var e=s.EpF();s.TgZ(0,"h3",0),s._uU(1,"Stepper"),s.qZA(),s._uU(2,"\n\n"),s.TgZ(3,"ngx-section",1),s._uU(4,"\n  "),s.TgZ(5,"ngx-stepper",2,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(7,"\n    "),s.YNc(8,g,5,1,"ngx-step",4),s._uU(9,"\n  "),s.qZA(),s._uU(10,"\n\n  "),s._UZ(11,"br"),s._uU(12,"\n  "),s._UZ(13,"br"),s._uU(14,"\n\n  "),s.TgZ(15,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(16,"First Step"),s.qZA(),s._uU(17,"\n  "),s.TgZ(18,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(19,"Previous Step"),s.qZA(),s._uU(20,"\n  "),s.TgZ(21,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(22,"Next Step"),s.qZA(),s._uU(23,"\n  "),s.TgZ(24,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(25,"Last Step"),s.qZA(),s._uU(26,"\n  "),s.TgZ(27,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(28,"Complete"),s.qZA(),s._uU(29,"\n\n  "),s._UZ(30,"br"),s._uU(31,"\n  "),s._UZ(32,"br"),s._uU(33,"\n\n  "),s.TgZ(34,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(35),s.qZA(),s._uU(36,"\n  "),s.TgZ(37,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(38,"Add Step"),s.qZA(),s._uU(39,"\n\n  "),s._UZ(40,"br"),s._uU(41,"\n  "),s._UZ(42,"br"),s._uU(43,"\n\n  "),s.TgZ(44,"app-prism"),s._uU(45,"\n"),s._uU(46,'<ngx-stepper\n  [readonly]="readonly"\n  [(active)]="index"\n>\n  <ngx-step *ngFor="let step of steps">\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(47,"\n  "),s.qZA(),s._uU(48,"\n"),s.qZA(),s._uU(49,"\n\n"),s.TgZ(50,"ngx-section",6),s._uU(51,"\n  "),s.TgZ(52,"ngx-stepper",7,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(54,"\n    "),s.YNc(55,d,5,1,"ngx-step",4),s._uU(56,"\n  "),s.qZA(),s._uU(57,"\n\n  "),s._UZ(58,"br"),s._uU(59,"\n  "),s._UZ(60,"br"),s._uU(61,"\n\n  "),s.TgZ(62,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(63,"First Step"),s.qZA(),s._uU(64,"\n  "),s.TgZ(65,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(66,"Previous Step"),s.qZA(),s._uU(67,"\n  "),s.TgZ(68,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(69,"Next Step"),s.qZA(),s._uU(70,"\n  "),s.TgZ(71,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(72,"Last Step"),s.qZA(),s._uU(73,"\n  "),s.TgZ(74,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(75,"Complete"),s.qZA(),s._uU(76,"\n\n  "),s._UZ(77,"br"),s._uU(78,"\n  "),s._UZ(79,"br"),s._uU(80,"\n\n  "),s.TgZ(81,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(82),s.qZA(),s._uU(83,"\n  "),s.TgZ(84,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(85,"Add Step"),s.qZA(),s._uU(86,"\n\n  "),s._UZ(87,"br"),s._uU(88,"\n  "),s._UZ(89,"br"),s._uU(90,"\n\n  "),s.TgZ(91,"app-prism"),s._uU(92,"\n"),s._uU(93,'<ngx-stepper\n  progress="true"\n  trackBar="false"\n  [readonly]="readonly"\n  [(active)]="index"\n>\n  <ngx-step *ngFor="let step of steps">\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(94,"\n  "),s.qZA(),s._uU(95,"\n"),s.qZA(),s._uU(96,"\n\n"),s.TgZ(97,"ngx-section",8),s._uU(98,"\n  "),s.TgZ(99,"ngx-stepper",2,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(101,"\n    "),s.YNc(102,x,5,1,"ngx-step",9),s._uU(103,"\n  "),s.qZA(),s._uU(104,"\n\n  "),s._UZ(105,"br"),s._uU(106,"\n  "),s._UZ(107,"br"),s._uU(108,"\n\n  "),s.TgZ(109,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(110,"First Step"),s.qZA(),s._uU(111,"\n  "),s.TgZ(112,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(113,"Previous Step"),s.qZA(),s._uU(114,"\n  "),s.TgZ(115,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(116,"Next Step"),s.qZA(),s._uU(117,"\n  "),s.TgZ(118,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(119,"Last Step"),s.qZA(),s._uU(120,"\n  "),s.TgZ(121,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(122,"Complete"),s.qZA(),s._uU(123,"\n\n  "),s._UZ(124,"br"),s._uU(125,"\n  "),s._UZ(126,"br"),s._uU(127,"\n\n  "),s.TgZ(128,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(129),s.qZA(),s._uU(130,"\n  "),s.TgZ(131,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(132,"Add Step"),s.qZA(),s._uU(133,"\n\n  "),s._UZ(134,"br"),s._uU(135,"\n  "),s._UZ(136,"br"),s._uU(137,"\n\n  "),s.TgZ(138,"app-prism"),s._uU(139,"\n"),s._uU(140,'<ngx-stepper\n  [readonly]="readonly"\n  [(active)]="index"\n>\n  <ngx-step\n    *ngFor="let step of steps"\n    [icon]="step.icon"\n  >\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(141,"\n  "),s.qZA(),s._uU(142,"\n"),s.qZA(),s._uU(143,"\n\n"),s.TgZ(144,"ngx-section",10),s._uU(145,"\n  "),s.TgZ(146,"ngx-stepper",11,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(148,"\n    "),s.YNc(149,A,5,1,"ngx-step",12),s._uU(150,"\n  "),s.qZA(),s._uU(151,"\n\n  "),s._UZ(152,"br"),s._uU(153,"\n  "),s._UZ(154,"br"),s._uU(155,"\n\n  "),s.TgZ(156,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(157,"First Step"),s.qZA(),s._uU(158,"\n  "),s.TgZ(159,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(160,"Previous Step"),s.qZA(),s._uU(161,"\n  "),s.TgZ(162,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(163,"Next Step"),s.qZA(),s._uU(164,"\n  "),s.TgZ(165,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(166,"Last Step"),s.qZA(),s._uU(167,"\n  "),s.TgZ(168,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(169,"Complete"),s.qZA(),s._uU(170,"\n\n  "),s._UZ(171,"br"),s._uU(172,"\n  "),s._UZ(173,"br"),s._uU(174,"\n\n  "),s.TgZ(175,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(176),s.qZA(),s._uU(177,"\n  "),s.TgZ(178,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(179,"Add Step"),s.qZA(),s._uU(180,"\n\n  "),s._UZ(181,"br"),s._uU(182,"\n  "),s._UZ(183,"br"),s._uU(184,"\n\n  "),s.TgZ(185,"app-prism"),s._uU(186,"\n"),s._uU(187,'<ngx-stepper\n  completeIcon="ngx-icon ngx-arrow-bold-right"\n  [readonly]="readonly"\n  [(active)]="index"\n>\n  <ngx-step\n    *ngFor="let step of steps"\n    [completeIcon]="step.completeIcon"\n  >\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(188,"\n  "),s.qZA(),s._uU(189,"\n"),s.qZA(),s._uU(190,"\n\n"),s.TgZ(191,"ngx-section",13),s._uU(192,"\n  "),s.TgZ(193,"ngx-stepper",14,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(195,"\n    "),s.YNc(196,T,5,1,"ngx-step",9),s._uU(197,"\n  "),s.qZA(),s._uU(198,"\n\n  "),s._UZ(199,"br"),s._uU(200,"\n  "),s._UZ(201,"br"),s._uU(202,"\n\n  "),s.TgZ(203,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(204,"First Step"),s.qZA(),s._uU(205,"\n  "),s.TgZ(206,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(207,"Previous Step"),s.qZA(),s._uU(208,"\n  "),s.TgZ(209,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(210,"Next Step"),s.qZA(),s._uU(211,"\n  "),s.TgZ(212,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(213,"Last Step"),s.qZA(),s._uU(214,"\n  "),s.TgZ(215,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(216,"Complete"),s.qZA(),s._uU(217,"\n\n  "),s._UZ(218,"br"),s._uU(219,"\n  "),s._UZ(220,"br"),s._uU(221,"\n\n  "),s.TgZ(222,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(223),s.qZA(),s._uU(224,"\n  "),s.TgZ(225,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(226,"Add Step"),s.qZA(),s._uU(227,"\n\n  "),s._UZ(228,"br"),s._uU(229,"\n  "),s._UZ(230,"br"),s._uU(231,"\n\n  "),s.TgZ(232,"app-prism"),s._uU(233,"\n"),s._uU(234,'<ngx-stepper\n  [readonly]="readonly"\n  [(active)]="index"\n  large="true"\n>\n  <ngx-step\n    *ngFor="let step of steps"\n    [icon]="step.icon"\n  >\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(235,"\n  "),s.qZA(),s._uU(236,"\n"),s.qZA(),s._uU(237,"\n\n"),s.TgZ(238,"ngx-section",15),s._uU(239,"\n  "),s.TgZ(240,"ngx-stepper",16,3),s.NdJ("activeChange",function(n){return t.index=n}),s._uU(242,"\n    "),s.YNc(243,m,5,2,"ngx-step",17),s._uU(244,"\n  "),s.qZA(),s._uU(245,"\n\n  "),s._UZ(246,"br"),s._uU(247,"\n  "),s._UZ(248,"br"),s._uU(249,"\n\n  "),s.TgZ(250,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).first()}),s._uU(251,"First Step"),s.qZA(),s._uU(252,"\n  "),s.TgZ(253,"button",5),s.NdJ("click",function(){return t.previous()}),s._uU(254,"Previous Step"),s.qZA(),s._uU(255,"\n  "),s.TgZ(256,"button",5),s.NdJ("click",function(){return t.next()}),s._uU(257,"Next Step"),s.qZA(),s._uU(258,"\n  "),s.TgZ(259,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).last()}),s._uU(260,"Last Step"),s.qZA(),s._uU(261,"\n  "),s.TgZ(262,"button",5),s.NdJ("click",function(){return s.CHM(e),s.MAs(6).complete()}),s._uU(263,"Complete"),s.qZA(),s._uU(264,"\n\n  "),s._UZ(265,"br"),s._uU(266,"\n  "),s._UZ(267,"br"),s._uU(268,"\n\n  "),s.TgZ(269,"button",5),s.NdJ("click",function(){return t.toggleReadonly()}),s._uU(270),s.qZA(),s._uU(271,"\n  "),s.TgZ(272,"button",5),s.NdJ("click",function(){return t.addStep()}),s._uU(273,"Add Step"),s.qZA(),s._uU(274,"\n\n  "),s.TgZ(275,"ngx-select",18),s.NdJ("ngModelChange",function(n){return t.position=n[0]}),s._uU(276,"\n    "),s._UZ(277,"ngx-select-option",19),s._uU(278,"\n    "),s._UZ(279,"ngx-select-option",20),s._uU(280,"\n    "),s._UZ(281,"ngx-select-option",21),s._uU(282,"\n    "),s._UZ(283,"ngx-select-option",22),s._uU(284,"\n  "),s.qZA(),s._uU(285,"\n\n  "),s._UZ(286,"br"),s._uU(287,"\n  "),s._UZ(288,"br"),s._uU(289,"\n\n  "),s.TgZ(290,"app-prism"),s._uU(291,"\n"),s._uU(292,'<ngx-stepper\n  [position]="position"\n  [readonly]="readonly"\n  [(active)]="index"\n>\n  <ngx-step\n    *ngFor="let step of steps"\n    [label]="step.title"\n    [completeIcon]="step.icon"\n  >\n    <ng-template ngxStepContent>\n    </ng-template>\n  </ngx-step>\n</ngx-stepper>'),s._uU(293,"\n  "),s.qZA(),s._uU(294,"\n"),s.qZA(),s._uU(295,"\n")}2&n&&(s.xp6(5),s.Q6J("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(17),s.Q6J("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(17),s.Q6J("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(17),s.Q6J("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(17),s.Q6J("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(17),s.Q6J("position",t.position)("readonly",t.readonly)("active",t.index),s.xp6(3),s.Q6J("ngForOf",t.steps),s.xp6(27),s.Oqu(t.readonly?"Not Readonly":"Readonly"),s.xp6(5),s.Q6J("ngModel",s.VKq(30,v,t.position)),s.xp6(2),s.Q6J("value",t.StepperPosition.Top),s.xp6(2),s.Q6J("value",t.StepperPosition.Bottom),s.xp6(2),s.Q6J("value",t.StepperPosition.Left),s.xp6(2),s.Q6J("value",t.StepperPosition.Right))},directives:[c.e0w,c.vOh,i.sg,U.U,c.Hr0,r.JJ,r.On,c.HZb,c.BUD,c.QnC],encapsulation:2,changeDetection:0}),q)}],S=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[l.Bz.forChild(y)],l.Bz]}),t}(),h=((N=function t(){n(this,t)}).\u0275fac=function(n){return new(n||N)},N.\u0275mod=s.oAB({type:N}),N.\u0275inj=s.cJS({imports:[[i.ez,r.u5,p.F,c.HNi,c.BXv,c.Anc,S]]}),N)}}])}();