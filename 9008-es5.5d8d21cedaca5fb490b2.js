!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var u=0;u<e.length;u++){var t=e[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[9008],{9008:function(u,t,a){"use strict";a.r(t),a.d(t,{InputsPageModule:function(){return Z}});var l=a(8583),i=a(665),p=a(5144),r=a(9421),o=a(4330),g=a(3018),U=a(7402);function _(n,e){if(1&n){var u=g.EpF();g.TgZ(0,"button",52),g.NdJ("click",function(){return g.CHM(u),g.oxw().searchInputValue=""}),g._uU(1,"\n          "),g._UZ(2,"ngx-icon",53),g._uU(3,"\n        "),g.qZA()}}var s,c,x=[{path:"",component:(s=function(){function u(){n(this,u),this.searchInputValue="",this.inputValue="A Value",this.longInputValue="A very long input value that should be autosized",this.inputDefaultVal="Defaulted!",this.patternValue="Has space"}var t,a,l;return t=u,(a=[{key:"onClick",value:function(n){console.log({event:n})}}])&&e(t.prototype,a),l&&e(t,l),u}(),s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=g.Xpm({type:s,selectors:[["app-inputs-page"]],decls:352,vars:55,consts:[[1,"style-header"],["sectionTitle","Text",1,"shadow"],["type","text","name","input1",3,"label","ngModel","autofocus","minlength","hint","change"],["type","text","name","input2",3,"ngModel","placeholder"],["type","text","name","input22","label","Prefix Suffix Input",3,"ngModel"],[1,"icon-add-new"],[1,"btn","btn-primary",3,"click"],["type","text","name","input3",3,"label","disabled","ngModel","change"],["type","text","label","Disabled With Unlock Button",3,"unlockable","ngModel"],["type","text","name","input4",3,"label","required","change"],["type","text","name","input44",3,"label","autoSelect","ngModel"],[1,"shadow",3,"sectionTitle"],[1,"demo-search-box"],["placeholder","Search","type","text","name","searchInputValue",3,"hidden","ngModel","ngModelChange","focus","blur"],["searchInput",""],["fontIcon","search",1,"search-icon","pull-left"],["class","btn btn-link pull-right",3,"click",4,"ngIf"],["label","TypeScript"],["label","SCSS"],["language","css"],["action","#"],["type","text","label","Username","name","input5","hint","Enter a Username between four and 12 characters",3,"ngModel","required","requiredIndicator","minlength","maxlength","ngModelChange"],["type","password","name","input6","hint","Enter a password",3,"label","ngModel","required","passwordToggleEnabled","ngModelChange"],["type","submit",1,"btn"],["type","number","label","Age","name","numeric-input","min","0","max","122",3,"ngModel","ngModelChange"],["type","number","label","Pi",3,"disabled","ngModel"],["type","text","label","Pattern validation","name","patern-input","hint","Pattern: ^\\\\w+$",3,"ngModel","pattern","ngModelChange"],["type","email","name","input1111",3,"label","ngModel"],["type","url","name","input1112",3,"label","ngModel"],["type","tel","name","input1113",3,"label","ngModel"],["type","textarea","name","input111",3,"label","ngModel","textareaRows"],["sectionTitle","Native",1,"shadow"],["for","native"],["type","text","id","native",1,"form-input"],["type","text","value","pre populated",1,"form-input"],["type","text","placeholder","A placeholder",1,"form-input"],["type","text","value","disabled","disabled","",1,"form-input"],["type","tel","value","555-555-5555",1,"form-input"],[1,"form-input"],["type","number","min","0",1,"form-input"],["sectionTitle","Sizes",1,"shadow"],["size","md","label","Medium","ngModel","Medium Input","hint","example of a medium input"],["size","lg","label","Large","ngModel","Large Input","hint","example of a large input"],["sectionTitle","Appearances",1,"shadow"],["label","Legacy","ngModel","Legacy Input","placeholder","enter your text here...","hint","example of a legacy input"],["label","Fill","appearance","fill","ngModel","Fill Input","placeholder","enter your text here...","hint","example of a fill input"],["label","Fill Numeric","type","number","appearance","fill","ngModel","0","placeholder","enter your number here...","hint","example of a fill number input"],["type","textarea","appearance","fill","label","Fill Textarea","placeholder","enter your text here...","hint","example of a fill textarea"],["label","Fill Prefix Suffix","type","number","appearance","fill","ngModel","0","placeholder","enter your dollar amount here...","hint","example of a fill number input"],["sectionTitle","Auto Size",1,"shadow"],["autosize","","label","Resize Input",3,"ngModel","ngModelChange"],["autosize","","appearance","fill","type","number","label","Fill Resize Input"],[1,"btn","btn-link","pull-right",3,"click"],["fontIcon","x"]],template:function(n,e){if(1&n){var u=g.EpF();g.TgZ(0,"h3",0),g._uU(1,"Inputs"),g.qZA(),g._uU(2,"\n\n"),g.TgZ(3,"ngx-section",1),g._uU(4,"\n  "),g.TgZ(5,"ngx-input",2),g.NdJ("change",function(n){return e.output=n}),g._uU(6,"\n  "),g.qZA(),g._uU(7,"\n\n  "),g.TgZ(8,"p"),g._uU(9),g.ALo(10,"json"),g.qZA(),g._uU(11,"\n  "),g._UZ(12,"br"),g._uU(13,"\n  "),g.TgZ(14,"app-prism"),g._uU(15,"\n"),g._uU(16,'<ngx-input\n  type="text"\n  [label]="\'Name\'"\n  [autofocus]="true"\n  [ngModel]="inputValue"\n  [hint]="\'Enter your first and last name\'"\n  (change)="inputValue = $event">\n</ngx-input>'),g._uU(17,"\n  "),g.qZA(),g._uU(18,"\n  "),g._UZ(19,"br"),g._uU(20,"\n\n  "),g.TgZ(21,"ngx-input",3),g._uU(22,"\n  "),g.qZA(),g._uU(23,"\n  "),g._UZ(24,"br"),g._uU(25,"\n  "),g.TgZ(26,"app-prism"),g._uU(27,"\n"),g._uU(28,'<ngx-input\n  type="text"\n  [ngModel]="inputValue1"\n  [placeholder]="\'Enter your first and last name\'"\n  (change)="inputValue = $event">\n</ngx-input>'),g._uU(29,"\n  "),g.qZA(),g._uU(30,"\n  "),g._UZ(31,"br"),g._uU(32,"\n\n  "),g.TgZ(33,"ngx-input",4),g._uU(34,"\n    "),g.TgZ(35,"ngx-input-prefix"),g._uU(36,"\n      "),g._UZ(37,"i",5),g._uU(38,"\n    "),g.qZA(),g._uU(39,"\n    "),g.TgZ(40,"ngx-input-suffix"),g._uU(41,"\n      "),g.TgZ(42,"button",6),g.NdJ("click",function(n){return e.onClick(n)}),g._uU(43,"Clear"),g.qZA(),g._uU(44,"\n    "),g.qZA(),g._uU(45,"\n  "),g.qZA(),g._uU(46,"\n  "),g._UZ(47,"br"),g._uU(48,"\n  "),g.TgZ(49,"app-prism"),g._uU(50,"\n"),g._uU(51,'<ngx-input\n  type="text"\n  name="input22"\n  label="Prefix Suffix Input"\n  [ngModel]="inputValue1">\n  <ngx-input-prefix>\n    <i class="icon-add-new"></i>\n  </ngx-input-prefix>\n  <ngx-input-suffix>\n    <ngx-button class="btn btn-primary">Clear</ngx-button>\n  </ngx-input-suffix>\n</ngx-input>'),g._uU(52,"\n  "),g.qZA(),g._uU(53,"\n  "),g._UZ(54,"br"),g._uU(55,"\n\n  "),g.TgZ(56,"ngx-input",7),g.NdJ("change",function(n){return e.inputValue1=n}),g._uU(57,"\n  "),g.qZA(),g._uU(58,"\n  "),g._UZ(59,"br"),g._uU(60,"\n  "),g.TgZ(61,"app-prism"),g._uU(62,"\n"),g._uU(63,'<ngx-input\n  type="text"\n  [label]="\'Disabled Example\'"\n  [disabled]="true"\n  [ngModel]="\'Disabled value\'"\n  (change)="inputValue1 = $event">\n</ngx-input>'),g._uU(64,"\n  "),g.qZA(),g._uU(65,"\n  "),g._UZ(66,"br"),g._uU(67,"\n\n  "),g.TgZ(68,"ngx-input",8),g._uU(69,"\n  "),g.qZA(),g._uU(70,"\n  "),g._UZ(71,"br"),g._uU(72,"\n  "),g.TgZ(73,"app-prism"),g._uU(74,"\n"),g._uU(75,'\n  <ngx-input\n    type="text"\n    label="Disabled With Unlock Button"\n    [unlockable]="true"\n    [ngModel]="\'Click the button to unlock\'">\n  </ngx-input>\n'),g._uU(76,"\n  "),g.qZA(),g._uU(77,"\n\n  "),g._UZ(78,"br"),g._uU(79,"\n\n  "),g.TgZ(80,"ngx-input",9),g.NdJ("change",function(n){return e.inputValue3=n}),g._uU(81,"\n  "),g.qZA(),g._uU(82,"\n  "),g._UZ(83,"br"),g._uU(84,"\n  "),g.TgZ(85,"app-prism"),g._uU(86,"\n"),g._uU(87,'<ngx-input\n  [label]="\'Required Input Example Of The Day\'"\n  type="text"\n  [required]="true"\n  (change)="inputValue3 = $event">\n</ngx-input>'),g._uU(88,"\n  "),g.qZA(),g._uU(89,"\n\n  "),g._UZ(90,"br"),g._uU(91,"\n\n  "),g.TgZ(92,"ngx-input",10),g._uU(93,"\n  "),g.qZA(),g._uU(94,"\n  "),g._UZ(95,"br"),g._uU(96,"\n  "),g.TgZ(97,"app-prism"),g._uU(98,"\n"),g._uU(99,'<ngx-input\n  [label]="\'Default value\'"\n  type="text"\n  [ngModel]="inputDefaultVal"\n  name="input44">\n</ngx-input>'),g._uU(100,"\n  "),g.qZA(),g._uU(101,"\n\n"),g.qZA(),g._uU(102,"\n\n"),g.TgZ(103,"ngx-section",11),g._uU(104,"\n\n  "),g.TgZ(105,"div",12),g._uU(106,"\n    "),g.TgZ(107,"ngx-input",13,14),g.NdJ("ngModelChange",function(n){return e.searchInputValue=n})("focus",function(){return g.CHM(u),g.MAs(108).focused=!0})("blur",function(){return g.CHM(u),g.MAs(108).focused=!1}),g._uU(109,"\n      "),g.TgZ(110,"ngx-input-prefix"),g._uU(111,"\n        "),g._UZ(112,"ngx-icon",15),g._uU(113,"\n      "),g.qZA(),g._uU(114,"\n      "),g.TgZ(115,"ngx-input-suffix"),g._uU(116,"\n        "),g.YNc(117,_,4,0,"button",16),g._uU(118,"\n      "),g.qZA(),g._uU(119,"\n    "),g.qZA(),g._uU(120,"\n  "),g.qZA(),g._uU(121,"\n\n  "),g.TgZ(122,"ngx-tabs"),g._uU(123,"\n    "),g.TgZ(124,"ngx-tab",17),g._uU(125,"\n      "),g.TgZ(126,"app-prism"),g._uU(127,"\n"),g._uU(128,'<div lass="demo-search-box">\n  <ngx-icon fontIcon="search" class="search-icon pull-left"></ngx-icon>\n  <button class="btn btn-link pull-right"\n    *ngIf="searchInputValue?.length > 0"\n    (click)="searchInputValue = \'\'">\n      <ngx-icon fontIcon="x"></ngx-icon>\n  </button>\n  <ngx-input\n    #searchInput\n    [hidden]="!(searchInput?.focused || searchInputValue?.length > 0)"\n    placeholder="Search"\n    type="text"\n    name="searchInputValue"\n    [(ngModel)]="searchInputValue"\n    (focus)="searchInput.focused = true"\n    (blur)="searchInput.focused = false">\n  </ngx-input>\n</div>'),g._uU(129,"\n      "),g.qZA(),g._uU(130,"\n    "),g.qZA(),g._uU(131,"\n    "),g.TgZ(132,"ngx-tab",18),g._uU(133,"\n      "),g.TgZ(134,"app-prism",19),g._uU(135,"\n"),g._uU(136,".demo-search-box {\n  width: 300px;\n  height: 50px;\n\n  ngx-icon.search-icon {\n    margin-top: 5px;\n  }\n\n  ngx-input[hidden] {\n    display: block !important;\n    width: 0px;\n    transition: width 0.5s;\n  }\n\n  ngx-input, &:hover ngx-input {\n    margin: 0 40px 0 20px;\n    width: 240px;\n    transition: width 0.5s;\n  }\n}"),g._uU(137,"\n      "),g.qZA(),g._uU(138,"\n    "),g.qZA(),g._uU(139,"\n  "),g.qZA(),g._uU(140,"\n"),g.qZA(),g._uU(141,"\n\n"),g.TgZ(142,"ngx-section",11),g._uU(143,"\n  "),g.TgZ(144,"form",20),g._uU(145,"\n    "),g.TgZ(146,"ngx-input",21),g.NdJ("ngModelChange",function(n){return e.usernameValue=n}),g._uU(147,"\n    "),g.qZA(),g._uU(148,"\n    "),g.TgZ(149,"ngx-input",22),g.NdJ("ngModelChange",function(n){return e.passwordValue=n}),g._uU(150,"\n    "),g.qZA(),g._uU(151,"\n    "),g.TgZ(152,"button",23),g._uU(153,"Login"),g.qZA(),g._uU(154,"\n  "),g.qZA(),g._uU(155,"\n\n  "),g._UZ(156,"br"),g._uU(157,"\n  "),g.TgZ(158,"app-prism"),g._uU(159,"\n"),g._uU(160,'<form action="#">\n  <ngx-input\n    type="text"\n    [label]="\'Username\'"\n    [(ngModel)]="usernameValue"\n    name="input5"\n    [required]="true"\n    [requiredIndicator]="false"\n    [hint]="\'Enter a Username\'">\n  </ngx-input>\n  <ngx-input\n    type="password"\n    [label]="\'Password\'"\n    [(ngModel)]="passwordValue"\n    name="input6"\n    [required]="true"\n    [hint]="\'Enter a password\'">\n  </ngx-input>\n  <br />\n  <button class="btn" type="submit">Login</button>\n</form>'),g._uU(161,"\n  "),g.qZA(),g._uU(162,"\n"),g.qZA(),g._uU(163,"\n\n"),g.TgZ(164,"ngx-section",11),g._uU(165,"\n  "),g.TgZ(166,"ngx-input",24),g.NdJ("ngModelChange",function(n){return e.numericValue=n}),g._uU(167,"\n  "),g.qZA(),g._uU(168),g._UZ(169,"br"),g._uU(170,"\n  "),g.TgZ(171,"app-prism"),g._uU(172,"\n"),g._uU(173,'<ngx-input\n  type="number"\n  label="Age"\n  [(ngModel)]="numericValue"\n  name="numeric-input"\n  min="0"\n  max="122"\n>\n</ngx-input>'),g._uU(174,"\n  "),g.qZA(),g._uU(175,"\n\n  "),g.TgZ(176,"ngx-input",25),g._uU(177,"\n  "),g.qZA(),g._uU(178,"\n\n  "),g._UZ(179,"br"),g._uU(180,"\n  "),g.TgZ(181,"app-prism"),g._uU(182,"\n"),g._uU(183,'<ngx-input\n  type="number"\n  label="Pi"\n  [disabled]="true"\n  [ngModel]="3.14159">\n</ngx-input>'),g._uU(184,"\n  "),g.qZA(),g._uU(185,"\n"),g.qZA(),g._uU(186,"\n\n\n"),g.TgZ(187,"ngx-section",11),g._uU(188,"\n  "),g.TgZ(189,"ngx-input",26),g.NdJ("ngModelChange",function(n){return e.patternValue=n}),g._uU(190,"\n  "),g.qZA(),g._uU(191,"\n\n  "),g._UZ(192,"br"),g._uU(193,"\n  "),g.TgZ(194,"app-prism"),g._uU(195,"\n"),g._uU(196,'<ngx-input\n  type="text"\n  label="Pattern validation"\n  [(ngModel)]="patternValue"\n  name="patern-input"\n  [pattern]="\'^\\\\w+$\'"\n  hint="Pattern: ^\\\\w+$">\n</ngx-input>'),g._uU(197,"\n  "),g.qZA(),g._uU(198,"\n"),g.qZA(),g._uU(199,"\n\n"),g.TgZ(200,"ngx-section",11),g._uU(201,"\n  "),g.TgZ(202,"ngx-input",27),g._uU(203,"\n    "),g.TgZ(204,"ngx-input-hint"),g._uU(205,"\n      Enter a valid email\n    "),g.qZA(),g._uU(206,"\n  "),g.qZA(),g._uU(207,"\n\n  "),g.TgZ(208,"ngx-input",28),g._uU(209,"\n  "),g.qZA(),g._uU(210,"\n\n  "),g.TgZ(211,"ngx-input",29),g._uU(212,"\n  "),g.qZA(),g._uU(213,"\n"),g.qZA(),g._uU(214,"\n\n"),g.TgZ(215,"ngx-section",11),g._uU(216,"\n  "),g.TgZ(217,"ngx-input",30),g._uU(218,"\n  "),g.qZA(),g._uU(219,"\n"),g.qZA(),g._uU(220,"\n\n"),g.TgZ(221,"ngx-section",31),g._uU(222,"\n  "),g.TgZ(223,"label",32),g._uU(224,"Text"),g.qZA(),g._uU(225,"\n  "),g._UZ(226,"input",33),g._uU(227,"\n  "),g._UZ(228,"input",34),g._uU(229,"\n  "),g._UZ(230,"input",35),g._uU(231,"\n  "),g._UZ(232,"input",36),g._uU(233,"\n  "),g._UZ(234,"input",37),g._uU(235,"\n  "),g._UZ(236,"br"),g._uU(237,"\n  "),g.TgZ(238,"app-prism"),g._uU(239,"\n"),g._uU(240,'<input type="text" class="form-input" />\n<input type="text" class="form-input" value="pre populated" />\n<input type="text" class="form-input" placeholder="A placeholder" />\n<input type="text" class="form-input" value="disabled" disabled />\n<input type="tel" class="form-input" value="555-555-5555" />'),g._uU(241,"\n  "),g.qZA(),g._uU(242,"\n\n  "),g._UZ(243,"br"),g._uU(244,"\n  "),g._UZ(245,"br"),g._uU(246,"\n\n  "),g.TgZ(247,"h4"),g._uU(248,"Textarea"),g.qZA(),g._uU(249,"\n  "),g._UZ(250,"textarea",38),g._uU(251,"\n  "),g._UZ(252,"br"),g._uU(253,"\n  "),g.TgZ(254,"app-prism"),g._uU(255,"\n"),g._uU(256,'<textarea class="form-input"></textarea>'),g._uU(257,"\n  "),g.qZA(),g._uU(258,"\n\n  "),g._UZ(259,"br"),g._uU(260,"\n  "),g._UZ(261,"br"),g._uU(262,"\n\n  "),g.TgZ(263,"h4"),g._uU(264,"Number"),g.qZA(),g._uU(265,"\n  "),g._UZ(266,"input",39),g._uU(267,"\n  "),g._UZ(268,"br"),g._uU(269,"\n  "),g.TgZ(270,"app-prism"),g._uU(271,"\n"),g._uU(272,'<input type="number" class="form-input" />'),g._uU(273,"\n  "),g.qZA(),g._uU(274,"\n"),g.qZA(),g._uU(275,"\n\n"),g.TgZ(276,"ngx-section",40),g._uU(277,"\n  "),g._UZ(278,"ngx-input",41),g._uU(279,"\n\n  "),g._UZ(280,"br"),g._uU(281,"\n\n  "),g._UZ(282,"ngx-input",42),g._uU(283,"\n\n  "),g._UZ(284,"br"),g._uU(285,"\n\n  "),g.TgZ(286,"app-prism"),g._uU(287,"\n"),g._uU(288,'<ngx-input size="lg" label="Large" ngModel="Large Input" hint="example of a large input"></ngx-input>'),g._uU(289,"\n  "),g.qZA(),g._uU(290,"\n"),g.qZA(),g._uU(291,"\n\n"),g.TgZ(292,"ngx-section",43),g._uU(293,"\n  "),g._UZ(294,"ngx-input",44),g._uU(295,"\n\n  "),g._UZ(296,"br"),g._uU(297,"\n\n  "),g._UZ(298,"ngx-input",45),g._uU(299,"\n\n  "),g._UZ(300,"br"),g._uU(301,"\n\n  "),g._UZ(302,"ngx-input",46),g._uU(303,"\n\n  "),g._UZ(304,"br"),g._uU(305,"\n\n  "),g._UZ(306,"ngx-input",47),g._uU(307,"\n\n  "),g._UZ(308,"br"),g._uU(309,"\n\n  "),g.TgZ(310,"ngx-input",48),g._uU(311,"\n    "),g.TgZ(312,"ngx-input-prefix"),g._uU(313,"$"),g.qZA(),g._uU(314,"\n    "),g.TgZ(315,"ngx-input-suffix"),g._uU(316,"USD"),g.qZA(),g._uU(317,"\n  "),g.qZA(),g._uU(318,"\n  "),g._UZ(319,"br"),g._uU(320,"\n\n  "),g.TgZ(321,"app-prism"),g._uU(322,"\n"),g._uU(323,'<ngx-input label="Fill" appearance="fill" ngModel="Fill Input" placeholder="enter your text here..." hint="example of a fill input"></ngx-input>'),g._uU(324,"\n  "),g.qZA(),g._uU(325,"\n"),g.qZA(),g._uU(326,"\n\n"),g.TgZ(327,"ngx-section",49),g._uU(328,"\n  "),g.TgZ(329,"ngx-input",50),g.NdJ("ngModelChange",function(n){return e.longInputValue=n}),g.qZA(),g._uU(330,"\n\n  "),g._UZ(331,"br"),g._uU(332,"\n\n  "),g.TgZ(333,"app-prism"),g._uU(334,"\n"),g._uU(335,'<ngx-input autosize label="Resize Input" placeholder="enter your text here..." hint="example of a resize input"></ngx-input>'),g._uU(336,"\n  "),g.qZA(),g._uU(337,"\n\n  "),g._UZ(338,"br"),g._uU(339,"\n  "),g._UZ(340,"br"),g._uU(341,"\n\n  "),g._UZ(342,"ngx-input",51),g._uU(343,"\n\n  "),g._UZ(344,"br"),g._uU(345,"\n\n  "),g.TgZ(346,"app-prism"),g._uU(347,"\n"),g._uU(348,'<ngx-input autosize appearance="fill" type="number" label="Fill Resize Input"></ngx-input>'),g._uU(349,"\n  "),g.qZA(),g._uU(350,"\n"),g.qZA(),g._uU(351,"\n")}if(2&n){var t=g.MAs(108);g.xp6(5),g.Q6J("label","Name")("ngModel",e.inputValue)("autofocus",!0)("minlength",4)("hint","Enter your first and last name"),g.xp6(4),g.hij("Output: ",g.lcZ(10,53,e.output),""),g.xp6(12),g.Q6J("ngModel",e.inputValue1)("placeholder","Enter your first and last name"),g.xp6(12),g.Q6J("ngModel",e.inputValue1),g.xp6(23),g.Q6J("label","Disabled Example")("disabled",!0)("ngModel","Disabled value"),g.xp6(12),g.Q6J("unlockable",!0)("ngModel","Click the button to unlock"),g.xp6(12),g.Q6J("label","Required Input Example Of The Day")("required",!0),g.xp6(12),g.Q6J("label","Default value")("autoSelect",!0)("ngModel",e.inputDefaultVal),g.xp6(11),g.Q6J("sectionTitle","Search - demo"),g.xp6(4),g.Q6J("hidden",!(null!=t&&t.focused||(null==e.searchInputValue?null:e.searchInputValue.length)>0))("ngModel",e.searchInputValue),g.xp6(10),g.Q6J("ngIf",(null==e.searchInputValue?null:e.searchInputValue.length)>0),g.xp6(25),g.Q6J("sectionTitle","Password"),g.xp6(4),g.Q6J("ngModel",e.usernameValue)("required",!0)("requiredIndicator",!1)("minlength",4)("maxlength",12),g.xp6(3),g.Q6J("label","Password")("ngModel",e.passwordValue)("required",!0)("passwordToggleEnabled",!0),g.xp6(15),g.Q6J("sectionTitle","Numeric"),g.xp6(2),g.Q6J("ngModel",e.numericValue),g.xp6(2),g.hij("\n\n  Value: ",e.numericValue,"\n\n  "),g.xp6(8),g.Q6J("disabled",!0)("ngModel",3.14159),g.xp6(11),g.Q6J("sectionTitle","Validators"),g.xp6(2),g.Q6J("ngModel",e.patternValue)("pattern","^\\w+$"),g.xp6(11),g.Q6J("sectionTitle","Types"),g.xp6(2),g.Q6J("label","Email")("ngModel",e.inputValue),g.xp6(6),g.Q6J("label","Url")("ngModel",e.inputValue),g.xp6(3),g.Q6J("label","Tel")("ngModel",e.inputValue),g.xp6(4),g.Q6J("sectionTitle","Textarea"),g.xp6(2),g.Q6J("label","Name")("ngModel",e.inputValue)("textareaRows",3),g.xp6(112),g.Q6J("ngModel",e.longInputValue)}},directives:[p.e0w,p.amK,i.JJ,i.On,i.wO,U.U,p._Kg,p.y9p,p.oJW,l.O5,p.n4f,p.idV,i._Y,i.JL,i.F,i.Q7,i.nD,i.c5,p.B5N],pipes:[l.Ts],encapsulation:2,changeDetection:0}),s)}],d=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[o.Bz.forChild(x)],o.Bz]}),e}(),Z=((c=function e(){n(this,e)}).\u0275fac=function(n){return new(n||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[[l.ez,i.u5,r.F,p.HNi,p.gPf,p.P4_,p.QX1,d]]}),c)}}])}();