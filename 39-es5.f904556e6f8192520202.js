!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var b=0;b<t.length;b++){var e=t[b];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{SB66:function(b,e,o){"use strict";o.r(e),o.d(e,"ButtonsPageModule",function(){return y});var i=o("ofXK"),a=o("8lIJ"),c=o("alW4"),r=o("tyNb"),s=o("nATF"),u=o("fXoL"),l=o("LMvA");function p(n,t){if(1&n&&(u.Ic(0,"\n      "),u.Sb(1,"div",78),u.Ic(2,"\n        "),u.Sb(3,"div",79),u.Ic(4,"\n          DRAG & DROP YOUR FILE\n          "),u.Nb(5,"br"),u.Ic(6,"\n          "),u.Sb(7,"div",80),u.Ic(8,"\n            "),u.Sb(9,"button",81),u.Ic(10,"\n              "),u.Nb(11,"input",82),u.Ic(12,"\n              "),u.Sb(13,"label",83),u.Ic(14,"\n                Or click to choose\n              "),u.Rb(),u.Ic(15,"\n            "),u.Rb(),u.Ic(16,"\n          "),u.Rb(),u.Ic(17,"\n        "),u.Rb(),u.Ic(18,"\n      "),u.Rb(),u.Ic(19,"\n    ")),2&n){var b=t.$implicit;u.zb(9),u.jc("disabled",b.isUploading),u.zb(2),u.jc("uploader",b)}}var d,I,g,m=[{path:"",component:(d=function(){function b(){n(this,b),this.buttonPromise=void 0,this.promises={},this.uploadOptions={url:"https://evening-anchorage-3159.herokuapp.com/api/",autoUpload:!0},this.uploaderInstance=new s.d({url:"https://evening-anchorage-3159.herokuapp.com/api/",autoUpload:!1})}var e,o,i;return e=b,(o=[{key:"onClick",value:function(n,t){console.log("Demo app click: ",n);var b=new Promise(function(n,t){setTimeout(function(){Math.random()<.5?n("Success!"):t("I fail you!")},3e3)});b.then(function(){console.log("success")}).catch(function(){console.log("fail")}),t?this.promises[t]=b:this.buttonPromise=b}}])&&t(e.prototype,o),i&&t(e,i),b}(),d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=u.Gb({type:d,selectors:[["app-buttons-page"]],decls:499,vars:22,consts:[[1,"style-header"],["sectionTitle","Buttons",1,"shadow"],["type","button",1,"btn"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-primary","btn-primary-gradient"],["type","button",1,"btn","btn-warning"],["type","button",1,"btn","btn-danger"],["type","button",1,"btn","btn-bordered"],["type","button",1,"btn","btn-link"],["type","button","disabled","",1,"btn"],["type","button","disabled","",1,"btn","btn-primary"],["type","button","disabled","",1,"btn","btn-primary","btn-primary-gradient"],["type","button","disabled","",1,"btn","btn-warning"],["type","button","disabled","",1,"btn","btn-danger"],["type","button","disabled","",1,"btn","btn-bordered"],["type","button","disabled","",1,"btn","btn-link"],["sectionTitle","Buttons with Icons",1,"shadow"],[1,"ngx-icon","ngx-plus","has-text"],[1,"ngx-icon","ngx-plus","has-text-left"],[1,"ngx-icon","ngx-plus"],["sectionTitle","Buttons sizes",1,"shadow"],["type","button",1,"btn","btn-primary","small"],["type","button",1,"btn","btn-primary","large"],["type","button",1,"btn","btn-primary","btn-primary-gradient","small"],["type","button",1,"btn","btn-primary","btn-primary-gradient","large"],["sectionTitle","Links",1,"shadow"],["href","/",1,"btn"],["href","/",1,"btn","btn-primary"],["href","/",1,"btn","btn-primary","btn-primary-gradient"],["href","/",1,"btn","btn-warning"],["href","/",1,"btn","btn-danger"],["href","/",1,"btn","btn-bordered"],["href","/",1,"btn","disabled"],["href","/",1,"btn","btn-primary","disabled"],["href","/",1,"btn","btn-primary","btn-primary-gradient","disabled"],["href","/",1,"btn","btn-warning","disabled"],["href","/",1,"btn","btn-danger","disabled"],["href","/",1,"btn","btn-bordered","disabled"],["sectionTitle","ngx-button",1,"shadow"],[1,"btn",3,"promise","click"],["defaultButton",""],[1,"btn","btn-primary",3,"promise","click"],["primaryButton",""],[1,"btn","btn-primary","btn-primary-gradient",3,"promise","click"],["gradiantButton",""],[1,"btn","btn-warning",3,"promise","click"],["failButton",""],[1,"btn","btn-danger",3,"promise","click"],["sucessButton",""],[1,"btn","btn-bordered",3,"promise","click"],["borderButton",""],[1,"btn","btn-link",3,"promise","click"],["linkButton",""],[1,"btn",3,"promise","timeout","click"],["noTimeoutButton",""],["disabled","true",1,"btn",3,"click"],["state","inProgress","disabled","true",1,"btn","btn-primary"],["state","inProgress","disabled","true",1,"btn","btn-primary","btn-primary-gradient"],["state","fail","disabled","true",1,"btn","btn-warning"],["state","success","disabled","true",1,"btn","btn-danger"],["disabled","true",1,"btn","btn-bordered"],["disabled","true",1,"btn","btn-link"],["disabled","true",1,"btn",3,"timeout"],["sectionTitle","File Upload",1,"shadow"],["name","uper",3,"styleType","options"],["name","uper1",3,"disabled","styleType","options"],["label","Markup"],["label","TypeScript"],["language","js"],["name","uper2",3,"styleType","uploader"],["href","/",2,"margin-left","100px",3,"click"],[3,"uploader"],["dropzoneTemplate",""],["name","uper3",3,"styleType","options"],["name","uper4","disabled","true",3,"styleType","options"],["sectionTitle","Long Press",1,"shadow"],[3,"longPress"],["icon","alert","duration","1000",3,"longPress"],[2,"height","200px","border","2px dashed #666"],[2,"position","relative","text-align","center","top","50%","left","50%","transform","translate(-50%, -50%)"],[1,"ngx-file-button"],["type","button",1,"ngx-file-button-button",3,"disabled"],["ng2FileSelect","","type","file","id","file-input",1,"ngx-file-button-input",3,"uploader"],["for","file-input",1,"btn","btn-link","ngx-file-button-label",2,"border-bottom","1px dashed #fff"]],template:function(n,t){if(1&n){var b=u.Tb();u.Sb(0,"h3",0),u.Ic(1,"Buttons"),u.Rb(),u.Ic(2,"\n"),u.Sb(3,"ngx-section",1),u.Ic(4,"\n  "),u.Sb(5,"button",2),u.Ic(6,"Default"),u.Rb(),u.Ic(7,"\n  "),u.Sb(8,"button",3),u.Ic(9,"Primary"),u.Rb(),u.Ic(10,"\n  "),u.Sb(11,"button",4),u.Ic(12,"Primary Gradient"),u.Rb(),u.Ic(13,"\n  "),u.Sb(14,"button",5),u.Ic(15,"Warning"),u.Rb(),u.Ic(16,"\n  "),u.Sb(17,"button",6),u.Ic(18,"Danger"),u.Rb(),u.Ic(19,"\n  "),u.Sb(20,"button",7),u.Ic(21,"Bordered"),u.Rb(),u.Ic(22,"\n  "),u.Sb(23,"button",8),u.Ic(24,"Link"),u.Rb(),u.Ic(25,"\n  "),u.Nb(26,"p"),u.Ic(27,"\n  "),u.Sb(28,"button",9),u.Ic(29,"Default"),u.Rb(),u.Ic(30,"\n  "),u.Sb(31,"button",10),u.Ic(32,"Primary"),u.Rb(),u.Ic(33,"\n  "),u.Sb(34,"button",11),u.Ic(35,"Primary Gradient"),u.Rb(),u.Ic(36,"\n  "),u.Sb(37,"button",12),u.Ic(38,"Warning"),u.Rb(),u.Ic(39,"\n  "),u.Sb(40,"button",13),u.Ic(41,"Danger"),u.Rb(),u.Ic(42,"\n  "),u.Sb(43,"button",14),u.Ic(44,"Bordered"),u.Rb(),u.Ic(45,"\n  "),u.Sb(46,"button",15),u.Ic(47,"Link"),u.Rb(),u.Ic(48,"\n  "),u.Nb(49,"br"),u.Ic(50,"\n  "),u.Sb(51,"app-prism"),u.Ic(52,"\n"),u.Ic(53,'<button type="button" class="btn">Default</button>\n<button type="button" class="btn btn-primary">Primary</button>\n<button type="button" class="btn btn-primary btn-primary-gradient">Primary Gradient</button>\n<button type="button" class="btn btn-warning">Warning</button>\n<button type="button" class="btn btn-danger">Danger</button>\n<button type="button" class="btn btn-bordered">Bordered</button>\n<button type="button" class="btn btn-link">Link</button>\n<p></p>\n<button type="button" class="btn" disabled>Default</button>\n<button type="button" class="btn btn-primary" disabled>Primary</button>\n<button type="button" class="btn btn-primary btn-primary-gradient" disabled>Primary Gradient</button>\n<button type="button" class="btn btn-warning" disabled>Warning</button>\n<button type="button" class="btn btn-danger" disabled>Danger</button>\n<button type="button" class="btn btn-bordered" disabled>Bordered</button>\n<button type="button" class="btn btn-link" disabled>Link</button>'),u.Ic(54,"\n  "),u.Rb(),u.Ic(55,"\n"),u.Rb(),u.Ic(56,"\n\n"),u.Sb(57,"ngx-section",16),u.Ic(58,"\n  "),u.Sb(59,"button",3),u.Nb(60,"i",17),u.Ic(61," Text"),u.Rb(),u.Ic(62,"\n  "),u.Sb(63,"button",3),u.Ic(64,"\n    Text\n    "),u.Nb(65,"i",18),u.Ic(66,"\n  "),u.Rb(),u.Ic(67,"\n  "),u.Sb(68,"button",3),u.Ic(69,"\n    "),u.Nb(70,"i",19),u.Ic(71,"\n  "),u.Rb(),u.Ic(72,"\n  "),u.Sb(73,"button",4),u.Ic(74,"\n    "),u.Nb(75,"i",17),u.Ic(76," Text\n  "),u.Rb(),u.Ic(77,"\n  "),u.Sb(78,"button",4),u.Ic(79,"\n    Text\n    "),u.Nb(80,"i",18),u.Ic(81,"\n  "),u.Rb(),u.Ic(82,"\n  "),u.Sb(83,"button",4),u.Ic(84,"\n    "),u.Nb(85,"i",19),u.Ic(86,"\n  "),u.Rb(),u.Ic(87,"\n  "),u.Sb(88,"button",7),u.Nb(89,"i",17),u.Ic(90," Text"),u.Rb(),u.Ic(91,"\n  "),u.Sb(92,"button",7),u.Ic(93,"\n    Text\n    "),u.Nb(94,"i",18),u.Ic(95,"\n  "),u.Rb(),u.Ic(96,"\n  "),u.Sb(97,"button",7),u.Ic(98,"\n    "),u.Nb(99,"i",19),u.Ic(100,"\n  "),u.Rb(),u.Ic(101,"\n  "),u.Sb(102,"button",8),u.Nb(103,"i",17),u.Ic(104," Link"),u.Rb(),u.Ic(105,"\n  "),u.Sb(106,"button",8),u.Ic(107,"\n    Link\n    "),u.Nb(108,"i",18),u.Ic(109,"\n  "),u.Rb(),u.Ic(110,"\n  "),u.Sb(111,"button",8),u.Ic(112,"\n    "),u.Nb(113,"i",19),u.Ic(114,"\n  "),u.Rb(),u.Ic(115,"\n  "),u.Nb(116,"p"),u.Ic(117,"\n  "),u.Sb(118,"button",10),u.Nb(119,"i",17),u.Ic(120," Text"),u.Rb(),u.Ic(121,"\n  "),u.Sb(122,"button",10),u.Ic(123,"\n    Text\n    "),u.Nb(124,"i",18),u.Ic(125,"\n  "),u.Rb(),u.Ic(126,"\n  "),u.Sb(127,"button",10),u.Ic(128,"\n    "),u.Nb(129,"i",19),u.Ic(130,"\n  "),u.Rb(),u.Ic(131,"\n  "),u.Sb(132,"button",11),u.Ic(133,"\n    "),u.Nb(134,"i",17),u.Ic(135," Text\n  "),u.Rb(),u.Ic(136,"\n  "),u.Sb(137,"button",11),u.Ic(138,"\n    Text\n    "),u.Nb(139,"i",18),u.Ic(140,"\n  "),u.Rb(),u.Ic(141,"\n  "),u.Sb(142,"button",11),u.Ic(143,"\n    "),u.Nb(144,"i",19),u.Ic(145,"\n  "),u.Rb(),u.Ic(146,"\n  "),u.Sb(147,"button",14),u.Nb(148,"i",17),u.Ic(149," Text"),u.Rb(),u.Ic(150,"\n  "),u.Sb(151,"button",14),u.Ic(152,"\n    Text\n    "),u.Nb(153,"i",18),u.Ic(154,"\n  "),u.Rb(),u.Ic(155,"\n  "),u.Sb(156,"button",14),u.Ic(157,"\n    "),u.Nb(158,"i",19),u.Ic(159,"\n  "),u.Rb(),u.Ic(160,"\n  "),u.Sb(161,"button",15),u.Nb(162,"i",17),u.Ic(163," Link"),u.Rb(),u.Ic(164,"\n  "),u.Sb(165,"button",15),u.Ic(166,"\n    Link\n    "),u.Nb(167,"i",18),u.Ic(168,"\n  "),u.Rb(),u.Ic(169,"\n  "),u.Sb(170,"button",15),u.Ic(171,"\n    "),u.Nb(172,"i",19),u.Ic(173,"\n  "),u.Rb(),u.Ic(174,"\n  "),u.Nb(175,"br"),u.Ic(176,"\n  "),u.Sb(177,"app-prism"),u.Ic(178,"\n"),u.Ic(179,'<button type="button" class="btn btn-primary"><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-primary">Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-primary"><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-primary btn-primary-gradient"><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-primary btn-primary-gradient">Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-primary btn-primary-gradient"><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-bordered"><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-bordered">Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-bordered"><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-link"><i class="ngx-icon ngx-plus has-text"></i> Link</button>\n<button type="button" class="btn btn-link">Link <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-link"><i class="ngx-icon ngx-plus"></i></button>\n<p></p>\n<button type="button" class="btn btn-primary" disabled><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-primary" disabled>Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-primary" disabled><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-primary btn-primary-gradient" disabled><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-primary btn-primary-gradient" disabled>Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-primary btn-primary-gradient" disabled><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-bordered" disabled><i class="ngx-icon ngx-plus has-text"></i> Text</button>\n<button type="button" class="btn btn-bordered" disabled>Text <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-bordered" disabled><i class="ngx-icon ngx-plus"></i></button>\n<button type="button" class="btn btn-link" disabled><i class="ngx-icon ngx-plus has-text"></i> Link</button>\n<button type="button" class="btn btn-link" disabled>Link <i class="ngx-icon ngx-plus has-text-left"></i></button>\n<button type="button" class="btn btn-link" disabled><i class="ngx-icon ngx-plus"></i></button>'),u.Ic(180,"\n  "),u.Rb(),u.Ic(181,"\n"),u.Rb(),u.Ic(182,"\n\n"),u.Sb(183,"ngx-section",20),u.Ic(184,"\n  "),u.Sb(185,"button",21),u.Nb(186,"i",17),u.Ic(187," Small"),u.Rb(),u.Ic(188,"\n  "),u.Sb(189,"button",3),u.Nb(190,"i",17),u.Ic(191," Default"),u.Rb(),u.Ic(192,"\n  "),u.Sb(193,"button",22),u.Nb(194,"i",17),u.Ic(195," Large"),u.Rb(),u.Ic(196,"\n  "),u.Sb(197,"button",23),u.Ic(198,"\n    "),u.Nb(199,"i",17),u.Ic(200," Small\n  "),u.Rb(),u.Ic(201,"\n  "),u.Sb(202,"button",4),u.Ic(203,"\n    "),u.Nb(204,"i",17),u.Ic(205," Default\n  "),u.Rb(),u.Ic(206,"\n  "),u.Sb(207,"button",24),u.Ic(208,"\n    "),u.Nb(209,"i",17),u.Ic(210," Large\n  "),u.Rb(),u.Ic(211,"\n  "),u.Nb(212,"br"),u.Ic(213,"\n  "),u.Sb(214,"app-prism"),u.Ic(215,"\n"),u.Ic(216,'<button type="button" class="btn btn-primary small"><i class="ngx-icon ngx-plus has-text"></i> Small</button>\n<button type="button" class="btn btn-primary"><i class="ngx-icon ngx-plus has-text"></i> Default</button>\n<button type="button" class="btn btn-primary large"><i class="ngx-icon ngx-plus has-text"></i> Large</button>\n<button type="button" class="btn btn-primary btn-primary-gradient small"><i class="ngx-icon ngx-plus has-text"></i> Small</button>\n<button type="button" class="btn btn-primary btn-primary-gradient"><i class="ngx-icon ngx-plus has-text"></i> Default</button>\n<button type="button" class="btn btn-primary btn-primary-gradient large"><i class="ngx-icon ngx-plus has-text"></i> Large</button>'),u.Ic(217,"\n  "),u.Rb(),u.Ic(218,"\n"),u.Rb(),u.Ic(219,"\n\n"),u.Sb(220,"ngx-section",25),u.Ic(221,"\n  "),u.Sb(222,"a",26),u.Ic(223,"Default"),u.Rb(),u.Ic(224,"\n  "),u.Sb(225,"a",27),u.Ic(226,"Primary"),u.Rb(),u.Ic(227,"\n  "),u.Sb(228,"a",28),u.Ic(229,"Primary Gradient"),u.Rb(),u.Ic(230,"\n  "),u.Sb(231,"a",29),u.Ic(232,"Warning"),u.Rb(),u.Ic(233,"\n  "),u.Sb(234,"a",30),u.Ic(235,"Danger"),u.Rb(),u.Ic(236,"\n  "),u.Sb(237,"a",31),u.Ic(238,"Bordered"),u.Rb(),u.Ic(239,"\n  "),u.Nb(240,"p"),u.Ic(241,"\n  "),u.Sb(242,"a",32),u.Ic(243,"Default"),u.Rb(),u.Ic(244,"\n  "),u.Sb(245,"a",33),u.Ic(246,"Primary"),u.Rb(),u.Ic(247,"\n  "),u.Sb(248,"a",34),u.Ic(249,"Primary Gradient"),u.Rb(),u.Ic(250,"\n  "),u.Sb(251,"a",35),u.Ic(252,"Warning"),u.Rb(),u.Ic(253,"\n  "),u.Sb(254,"a",36),u.Ic(255,"Danger"),u.Rb(),u.Ic(256,"\n  "),u.Sb(257,"a",37),u.Ic(258,"Bordered"),u.Rb(),u.Ic(259,"\n  "),u.Nb(260,"br"),u.Ic(261,"\n  "),u.Sb(262,"app-prism"),u.Ic(263,"\n"),u.Ic(264,'<a class="btn" href="/">Default</a>\n<a class="btn btn-primary" href="/">Primary</a>\n<a class="btn btn-primary btn-primary-gradient" href="/">Primary Gradient</a>\n<a class="btn btn-warning" href="/">Warning</a>\n<a class="btn btn-danger" href="/">Danger</a>\n<a class="btn btn-bordered" href="/">Bordered</a>\n<p></p>\n<a class="btn disabled" href="/">Default</a>\n<a class="btn btn-primary disabled" href="/">Primary</a>\n<a class="btn btn-primary btn-primary-gradient disabled" href="/">Primary Gradient</a>\n<a class="btn btn-warning disabled" href="/">Warning</a>\n<a class="btn btn-danger disabled" href="/">Danger</a>\n<a class="btn btn-bordered disabled" href="/">Bordered</a>'),u.Ic(265,"\n  "),u.Rb(),u.Ic(266,"\n"),u.Rb(),u.Ic(267,"\n\n"),u.Sb(268,"ngx-section",38),u.Ic(269,"\n  "),u.Sb(270,"ngx-button",39,40),u.Zb("click",function(){return t.onClick("button click","defaultButton")}),u.Ic(272,"Default"),u.Rb(),u.Ic(273,"\n  "),u.Sb(274,"ngx-button",41,42),u.Zb("click",function(){return t.onClick("button click","primaryButton")}),u.Ic(276,"Primary"),u.Rb(),u.Ic(277,"\n  "),u.Sb(278,"ngx-button",43,44),u.Zb("click",function(){return t.onClick("button click","gradiantButton")}),u.Ic(280,"Primary Gradient"),u.Rb(),u.Ic(281,"\n  "),u.Sb(282,"ngx-button",45,46),u.Zb("click",function(){return t.onClick("button click","failButton")})("click",function(){u.vc(b);var n=u.sc(283);return n.state="fail",n.updateState()}),u.Ic(284,"Warning"),u.Rb(),u.Ic(285,"\n  "),u.Sb(286,"ngx-button",47,48),u.Zb("click",function(){return t.onClick("button click","sucessButton")})("click",function(){u.vc(b);var n=u.sc(287);return n.state="success",n.updateState()}),u.Ic(288,"Danger"),u.Rb(),u.Ic(289,"\n  "),u.Sb(290,"ngx-button",49,50),u.Zb("click",function(){return t.onClick("button click","borderButton")}),u.Ic(292,"Bordered"),u.Rb(),u.Ic(293,"\n  "),u.Sb(294,"ngx-button",51,52),u.Zb("click",function(){return t.onClick("button click","linkButton")}),u.Ic(296,"Link"),u.Rb(),u.Ic(297,"\n  "),u.Sb(298,"ngx-button",53,54),u.Zb("click",function(){return t.onClick("button click","noTimeoutButton")}),u.Ic(300,"No Timeout"),u.Rb(),u.Ic(301,"\n  "),u.Nb(302,"p"),u.Ic(303,"\n  "),u.Sb(304,"ngx-button",55),u.Zb("click",function(){return t.onClick("button click")}),u.Ic(305,"Default"),u.Rb(),u.Ic(306,"\n  "),u.Sb(307,"ngx-button",56),u.Ic(308,"Primary"),u.Rb(),u.Ic(309,"\n  "),u.Sb(310,"ngx-button",57),u.Ic(311,"Primary Gradient\n  "),u.Rb(),u.Ic(312,"\n  "),u.Sb(313,"ngx-button",58),u.Ic(314,"Warning"),u.Rb(),u.Ic(315,"\n  "),u.Sb(316,"ngx-button",59),u.Ic(317,"Danger"),u.Rb(),u.Ic(318,"\n  "),u.Sb(319,"ngx-button",60),u.Ic(320,"Bordered"),u.Rb(),u.Ic(321,"\n  "),u.Sb(322,"ngx-button",61),u.Ic(323,"Link"),u.Rb(),u.Ic(324,"\n  "),u.Sb(325,"ngx-button",62),u.Ic(326,"No Timeout"),u.Rb(),u.Ic(327,"\n\n  "),u.Sb(328,"app-prism"),u.Ic(329,"\n"),u.Ic(330,'<ngx-button #defaultButton [promise]="promises[\'defaultButton\']" (click)="onClick(\'button click\', \'defaultButton\')"\n  class="btn">Default</ngx-button>\n<ngx-button #primaryButton [promise]="promises[\'primaryButton\']" (click)="onClick(\'button click\', \'primaryButton\')"\n  class="btn btn-primary">Primary</ngx-button>\n<ngx-button #gradiantButton [promise]="promises[\'gradiantButton\']" (click)="onClick(\'button click\', \'gradiantButton\')"\n  class="btn btn-primary btn-primary-gradient">Primary Gradient</ngx-button>\n<ngx-button #failButton [promise]="promises[\'failButton\']" (click)="onClick(\'button click\', \'failButton\')"\n  class="btn btn-warning" (click)="failButton.state = \'fail\'; failButton.updateState()">Warning</ngx-button>\n<ngx-button #sucessButton [promise]="promises[\'sucessButton\']" (click)="onClick(\'button click\', \'sucessButton\')"\n  class="btn btn-danger" (click)="sucessButton.state = \'success\'; sucessButton.updateState()">Danger</ngx-button>\n<ngx-button #borderButton [promise]="promises[\'borderButton\']" (click)="onClick(\'button click\', \'borderButton\')"\n  class="btn btn-bordered">Bordered</ngx-button>\n<ngx-button #linkButton [promise]="promises[\'linkButton\']" (click)="onClick(\'button click\', \'linkButton\')"\n  class="btn btn-link">Link</ngx-button>\n<ngx-button #noTimeoutButton [promise]="promises[\'noTimeoutButton\']" [timeout]="0" (click)="onClick(\'button click\', \'noTimeoutButton\')"\n  class="btn">No Timeout</ngx-button>\n<p></p>\n<ngx-button (click)="onClick(\'button click\')" class="btn" disabled="true">Default</ngx-button>\n<ngx-button state="inProgress" class="btn btn-primary" disabled="true">Primary</ngx-button>\n<ngx-button state="inProgress" class="btn btn-primary btn-primary-gradient" disabled="true">Primary Gradient\n</ngx-button>\n<ngx-button state="fail" class="btn btn-warning" disabled="true">Warning</ngx-button>\n<ngx-button state="success" class="btn btn-danger" disabled="true">Danger</ngx-button>\n<ngx-button class="btn btn-bordered" disabled="true">Bordered</ngx-button>\n<ngx-button class="btn btn-link" disabled="true">Link</ngx-button>\n<ngx-button [timeout]="0" disabled="true" class="btn">No Timeout</ngx-button>\n'),u.Ic(331,"\n  "),u.Rb(),u.Ic(332,"\n"),u.Rb(),u.Ic(333,"\n\n"),u.Sb(334,"ngx-section",63),u.Ic(335,"\n  "),u.Sb(336,"h3"),u.Ic(337,"Standard Autoupload"),u.Rb(),u.Ic(338,"\n  "),u.Sb(339,"ngx-file-button",64),u.Ic(340,"\n    Choose File\n  "),u.Rb(),u.Ic(341,"\n\n  "),u.Sb(342,"ngx-file-button",65),u.Ic(343,"\n    Choose File\n  "),u.Rb(),u.Ic(344,"\n  "),u.Nb(345,"br"),u.Ic(346,"\n  "),u.Nb(347,"br"),u.Ic(348,"\n\n  "),u.Sb(349,"ngx-tabs"),u.Ic(350,"\n    "),u.Sb(351,"ngx-tab",66),u.Ic(352,"\n      "),u.Sb(353,"app-prism"),u.Ic(354,"\n"),u.Ic(355,'<ngx-file-button\n  name="uper"\n  [styleType]="\'standard\'"\n  [options]="uploadOptions">\n  Choose File\n</ngx-file-button>\n<ngx-file-button\n  name="uper1"\n  [disabled]="true"\n  [styleType]="\'standard\'"\n  [options]="uploadOptions">\n  Choose File\n</ngx-file-button>'),u.Ic(356,"\n      "),u.Rb(),u.Ic(357,"\n    "),u.Rb(),u.Ic(358,"\n    "),u.Sb(359,"ngx-tab",67),u.Ic(360,"\n      "),u.Sb(361,"app-prism",68),u.Ic(362,"\n"),u.Ic(363,"import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  uploadOptions = {\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: true\n  };\n}"),u.Ic(364,"\n      "),u.Rb(),u.Ic(365,"\n    "),u.Rb(),u.Ic(366,"\n  "),u.Rb(),u.Ic(367,"\n\n  "),u.Nb(368,"br"),u.Ic(369,"\n  "),u.Nb(370,"br"),u.Ic(371,"\n\n  "),u.Sb(372,"h3"),u.Ic(373,"Standard Manual"),u.Rb(),u.Ic(374,"\n  "),u.Sb(375,"ngx-file-button",69),u.Ic(376,"\n    Choose File\n  "),u.Rb(),u.Ic(377,"\n  "),u.Sb(378,"a",70),u.Zb("click",function(){return t.uploaderInstance.uploadAll()}),u.Ic(379,"Send"),u.Rb(),u.Ic(380,"\n  "),u.Nb(381,"br"),u.Ic(382,"\n  "),u.Nb(383,"br"),u.Ic(384,"\n\n  "),u.Sb(385,"ngx-tabs"),u.Ic(386,"\n    "),u.Sb(387,"ngx-tab",66),u.Ic(388,"\n      "),u.Sb(389,"app-prism"),u.Ic(390,"\n"),u.Ic(391,'<ngx-file-button\n  name="uper2"\n  [styleType]="\'standard\'"\n  [uploader]="uploaderInstance">\n  Choose File\n</ngx-file-button>\n<a href="/" (click)="uploaderInstance.uploadAll()">Send</a>'),u.Ic(392,"\n      "),u.Rb(),u.Ic(393,"\n    "),u.Rb(),u.Ic(394,"\n    "),u.Sb(395,"ngx-tab",67),u.Ic(396,"\n      "),u.Sb(397,"app-prism",68),u.Ic(398,"\n"),u.Ic(399,"import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  uploadOptions = {\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: true\n  };\n  uploaderInstance = new FileUploader({\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: false\n  });\n}"),u.Ic(400,"\n      "),u.Rb(),u.Ic(401,"\n    "),u.Rb(),u.Ic(402,"\n  "),u.Rb(),u.Ic(403,"\n\n  "),u.Nb(404,"br"),u.Ic(405,"\n  "),u.Nb(406,"br"),u.Ic(407,"\n\n  "),u.Sb(408,"h3"),u.Ic(409,"Dropzone Template"),u.Rb(),u.Ic(410,"\n  "),u.Sb(411,"ngx-file-button",71),u.Ic(412,"\n    "),u.Gc(413,p,20,2,"ng-template",null,72,u.Hc),u.Ic(415,"\n  "),u.Rb(),u.Ic(416,"\n\n  "),u.Nb(417,"br"),u.Ic(418,"\n  "),u.Nb(419,"br"),u.Ic(420,"\n\n  "),u.Sb(421,"ngx-tabs"),u.Ic(422,"\n    "),u.Sb(423,"ngx-tab",66),u.Ic(424,"\n      "),u.Sb(425,"app-prism"),u.Ic(426,"\n"),u.Ic(427,'<ngx-file-button\n  [uploader]="uploaderInstance">\n\n  <ng-template #dropzoneTemplate let-uploader>\n    <div style="height: 200px; border: 2px dashed #666;">\n      <div style="position: relative; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -50%);">\n        DRAG & DROP YOUR FILE\n        <br />\n        <div class="ngx-file-button">\n          <button\n            type="button"\n            class="ngx-file-button-button"\n            [disabled]="uploader.isUploading">\n            <input\n              ng2FileSelect\n              type="file"\n              class="ngx-file-button-input"\n              id="file-input"\n              [uploader]="uploader"\n            />\n            <label\n              for="file-input"\n              class="btn btn-link ngx-file-button-label"\n              style="border-bottom: 1px dashed #fff">\n              Or click to choose\n            </label>\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n</ngx-file-button>'),u.Ic(428,"\n      "),u.Rb(),u.Ic(429,"\n    "),u.Rb(),u.Ic(430,"\n    "),u.Sb(431,"ngx-tab",67),u.Ic(432,"\n      "),u.Sb(433,"app-prism",68),u.Ic(434,"\n"),u.Ic(435,"import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  uploadOptions = {\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: true\n  };\n  uploaderInstance = new FileUploader({\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: false\n  });\n}"),u.Ic(436,"\n      "),u.Rb(),u.Ic(437,"\n    "),u.Rb(),u.Ic(438,"\n  "),u.Rb(),u.Ic(439,"\n\n  "),u.Nb(440,"br"),u.Ic(441,"\n  "),u.Nb(442,"br"),u.Ic(443,"\n\n  "),u.Sb(444,"h3"),u.Ic(445,"Progress Upload"),u.Rb(),u.Ic(446,"\n  "),u.Sb(447,"ngx-file-button",73),u.Ic(448,"\n    Progress\n  "),u.Rb(),u.Ic(449,"\n\n  "),u.Sb(450,"ngx-file-button",74),u.Ic(451,"\n    Progress Disabled\n  "),u.Rb(),u.Ic(452,"\n  "),u.Nb(453,"br"),u.Ic(454,"\n  "),u.Nb(455,"br"),u.Ic(456,"\n\n  "),u.Sb(457,"ngx-tabs"),u.Ic(458,"\n    "),u.Sb(459,"ngx-tab",66),u.Ic(460,"\n      "),u.Sb(461,"app-prism"),u.Ic(462,"\n"),u.Ic(463,'<ngx-file-button\n  name="uper3"\n  [styleType]="\'progress\'"\n  [options]="uploadOptions">\n  Progress\n</ngx-file-button>\n\n<ngx-file-button\n  name="uper4"\n  disabled="true"\n  [styleType]="\'progress\'"\n  [options]="uploadOptions">\n  Progress Disabled\n</ngx-file-button>'),u.Ic(464,"\n      "),u.Rb(),u.Ic(465,"\n    "),u.Rb(),u.Ic(466,"\n    "),u.Sb(467,"ngx-tab",67),u.Ic(468,"\n      "),u.Sb(469,"app-prism",68),u.Ic(470,"\n"),u.Ic(471,"import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  uploadOptions = {\n    url: 'https://evening-anchorage-3159.herokuapp.com/api/',\n    autoUpload: true\n  };\n}"),u.Ic(472,"\n      "),u.Rb(),u.Ic(473,"\n    "),u.Rb(),u.Ic(474,"\n  "),u.Rb(),u.Ic(475,"\n"),u.Rb(),u.Ic(476,"\n\n"),u.Sb(477,"ngx-section",75),u.Ic(478,"\n  "),u.Sb(479,"h3"),u.Ic(480,"Default"),u.Rb(),u.Ic(481,"\n  "),u.Sb(482,"ngx-long-press-button",76),u.Zb("longPress",function(){return t.onClick("button click")}),u.Rb(),u.Ic(483,"\n  "),u.Sb(484,"app-prism"),u.Ic(485,"\n"),u.Ic(486,"<ngx-long-press-button (longPress)=\"onClick('button click')\"></ngx-long-press-button>"),u.Ic(487,"\n  "),u.Rb(),u.Ic(488,"\n\n  "),u.Sb(489,"h3"),u.Ic(490,"Configuration"),u.Rb(),u.Ic(491,"\n  "),u.Sb(492,"ngx-long-press-button",77),u.Zb("longPress",function(){return t.onClick("button click")}),u.Rb(),u.Ic(493,"\n  "),u.Sb(494,"app-prism"),u.Ic(495,"\n"),u.Ic(496,'<ngx-long-press-button (longPress)="onClick(\'button click\')" icon="alert" duration="1000"></ngx-long-press-button>'),u.Ic(497,"\n  "),u.Rb(),u.Ic(498,"\n"),u.Rb()}2&n&&(u.zb(270),u.jc("promise",t.promises.defaultButton),u.zb(4),u.jc("promise",t.promises.primaryButton),u.zb(4),u.jc("promise",t.promises.gradiantButton),u.zb(4),u.jc("promise",t.promises.failButton),u.zb(4),u.jc("promise",t.promises.sucessButton),u.zb(4),u.jc("promise",t.promises.borderButton),u.zb(4),u.jc("promise",t.promises.linkButton),u.zb(4),u.jc("promise",t.promises.noTimeoutButton)("timeout",0),u.zb(27),u.jc("timeout",0),u.zb(14),u.jc("styleType","standard")("options",t.uploadOptions),u.zb(3),u.jc("disabled",!0)("styleType","standard")("options",t.uploadOptions),u.zb(33),u.jc("styleType","standard")("uploader",t.uploaderInstance),u.zb(36),u.jc("uploader",t.uploaderInstance),u.zb(36),u.jc("styleType","progress")("options",t.uploadOptions),u.zb(3),u.jc("styleType","progress")("options",t.uploadOptions))},directives:[a.Cb,l.a,a.c,a.B,a.Wb,a.Vb,a.bb,s.b],encapsulation:2,changeDetection:0}),d)}],x=((g=function t(){n(this,t)}).\u0275mod=u.Kb({type:g}),g.\u0275inj=u.Jb({factory:function(n){return new(n||g)},imports:[[r.g.forChild(m)],r.g]}),g),y=((I=function t(){n(this,t)}).\u0275mod=u.Kb({type:I}),I.\u0275inj=u.Jb({factory:function(n){return new(n||I)},imports:[[i.c,c.a,a.Eb,a.d,a.cb,a.Xb,x]]}),I)}}])}();