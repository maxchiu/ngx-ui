(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[9008],{9008:function(n,e,u){"use strict";u.r(e),u.d(e,{InputsPageModule:function(){return s}});var t=u(8583),l=u(665),a=u(5144),i=u(9421),p=u(4330),r=u(3018),o=u(7402);function g(n,e){if(1&n){const n=r.EpF();r.TgZ(0,"button",52),r.NdJ("click",function(){return r.CHM(n),r.oxw().searchInputValue=""}),r._uU(1,"\n          "),r._UZ(2,"ngx-icon",53),r._uU(3,"\n        "),r.qZA()}}const U=[{path:"",component:(()=>{class n{constructor(){this.searchInputValue="",this.inputValue="A Value",this.longInputValue="A very long input value that should be autosized",this.inputDefaultVal="Defaulted!",this.patternValue="Has space"}onClick(n){console.log({event:n})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-inputs-page"]],decls:352,vars:55,consts:[[1,"style-header"],["sectionTitle","Text",1,"shadow"],["type","text","name","input1",3,"label","ngModel","autofocus","minlength","hint","change"],["type","text","name","input2",3,"ngModel","placeholder"],["type","text","name","input22","label","Prefix Suffix Input",3,"ngModel"],[1,"icon-add-new"],[1,"btn","btn-primary",3,"click"],["type","text","name","input3",3,"label","disabled","ngModel","change"],["type","text","label","Disabled With Unlock Button",3,"unlockable","ngModel"],["type","text","name","input4",3,"label","required","change"],["type","text","name","input44",3,"label","autoSelect","ngModel"],[1,"shadow",3,"sectionTitle"],[1,"demo-search-box"],["placeholder","Search","type","text","name","searchInputValue",3,"hidden","ngModel","ngModelChange","focus","blur"],["searchInput",""],["fontIcon","search",1,"search-icon","pull-left"],["class","btn btn-link pull-right",3,"click",4,"ngIf"],["label","TypeScript"],["label","SCSS"],["language","css"],["action","#"],["type","text","label","Username","name","input5","hint","Enter a Username between four and 12 characters",3,"ngModel","required","requiredIndicator","minlength","maxlength","ngModelChange"],["type","password","name","input6","hint","Enter a password",3,"label","ngModel","required","passwordToggleEnabled","ngModelChange"],["type","submit",1,"btn"],["type","number","label","Age","name","numeric-input","min","0","max","122",3,"ngModel","ngModelChange"],["type","number","label","Pi",3,"disabled","ngModel"],["type","text","label","Pattern validation","name","patern-input","hint","Pattern: ^\\\\w+$",3,"ngModel","pattern","ngModelChange"],["type","email","name","input1111",3,"label","ngModel"],["type","url","name","input1112",3,"label","ngModel"],["type","tel","name","input1113",3,"label","ngModel"],["type","textarea","name","input111",3,"label","ngModel","textareaRows"],["sectionTitle","Native",1,"shadow"],["for","native"],["type","text","id","native",1,"form-input"],["type","text","value","pre populated",1,"form-input"],["type","text","placeholder","A placeholder",1,"form-input"],["type","text","value","disabled","disabled","",1,"form-input"],["type","tel","value","555-555-5555",1,"form-input"],[1,"form-input"],["type","number","min","0",1,"form-input"],["sectionTitle","Sizes",1,"shadow"],["size","md","label","Medium","ngModel","Medium Input","hint","example of a medium input"],["size","lg","label","Large","ngModel","Large Input","hint","example of a large input"],["sectionTitle","Appearances",1,"shadow"],["label","Legacy","ngModel","Legacy Input","placeholder","enter your text here...","hint","example of a legacy input"],["label","Fill","appearance","fill","ngModel","Fill Input","placeholder","enter your text here...","hint","example of a fill input"],["label","Fill Numeric","type","number","appearance","fill","ngModel","0","placeholder","enter your number here...","hint","example of a fill number input"],["type","textarea","appearance","fill","label","Fill Textarea","placeholder","enter your text here...","hint","example of a fill textarea"],["label","Fill Prefix Suffix","type","number","appearance","fill","ngModel","0","placeholder","enter your dollar amount here...","hint","example of a fill number input"],["sectionTitle","Auto Size",1,"shadow"],["autosize","","label","Resize Input",3,"ngModel","ngModelChange"],["autosize","","appearance","fill","type","number","label","Fill Resize Input"],[1,"btn","btn-link","pull-right",3,"click"],["fontIcon","x"]],template:function(n,e){if(1&n){const n=r.EpF();r.TgZ(0,"h3",0),r._uU(1,"Inputs"),r.qZA(),r._uU(2,"\n\n"),r.TgZ(3,"ngx-section",1),r._uU(4,"\n  "),r.TgZ(5,"ngx-input",2),r.NdJ("change",function(n){return e.output=n}),r._uU(6,"\n  "),r.qZA(),r._uU(7,"\n\n  "),r.TgZ(8,"p"),r._uU(9),r.ALo(10,"json"),r.qZA(),r._uU(11,"\n  "),r._UZ(12,"br"),r._uU(13,"\n  "),r.TgZ(14,"app-prism"),r._uU(15,"\n"),r._uU(16,'<ngx-input\n  type="text"\n  [label]="\'Name\'"\n  [autofocus]="true"\n  [ngModel]="inputValue"\n  [hint]="\'Enter your first and last name\'"\n  (change)="inputValue = $event">\n</ngx-input>'),r._uU(17,"\n  "),r.qZA(),r._uU(18,"\n  "),r._UZ(19,"br"),r._uU(20,"\n\n  "),r.TgZ(21,"ngx-input",3),r._uU(22,"\n  "),r.qZA(),r._uU(23,"\n  "),r._UZ(24,"br"),r._uU(25,"\n  "),r.TgZ(26,"app-prism"),r._uU(27,"\n"),r._uU(28,'<ngx-input\n  type="text"\n  [ngModel]="inputValue1"\n  [placeholder]="\'Enter your first and last name\'"\n  (change)="inputValue = $event">\n</ngx-input>'),r._uU(29,"\n  "),r.qZA(),r._uU(30,"\n  "),r._UZ(31,"br"),r._uU(32,"\n\n  "),r.TgZ(33,"ngx-input",4),r._uU(34,"\n    "),r.TgZ(35,"ngx-input-prefix"),r._uU(36,"\n      "),r._UZ(37,"i",5),r._uU(38,"\n    "),r.qZA(),r._uU(39,"\n    "),r.TgZ(40,"ngx-input-suffix"),r._uU(41,"\n      "),r.TgZ(42,"button",6),r.NdJ("click",function(n){return e.onClick(n)}),r._uU(43,"Clear"),r.qZA(),r._uU(44,"\n    "),r.qZA(),r._uU(45,"\n  "),r.qZA(),r._uU(46,"\n  "),r._UZ(47,"br"),r._uU(48,"\n  "),r.TgZ(49,"app-prism"),r._uU(50,"\n"),r._uU(51,'<ngx-input\n  type="text"\n  name="input22"\n  label="Prefix Suffix Input"\n  [ngModel]="inputValue1">\n  <ngx-input-prefix>\n    <i class="icon-add-new"></i>\n  </ngx-input-prefix>\n  <ngx-input-suffix>\n    <ngx-button class="btn btn-primary">Clear</ngx-button>\n  </ngx-input-suffix>\n</ngx-input>'),r._uU(52,"\n  "),r.qZA(),r._uU(53,"\n  "),r._UZ(54,"br"),r._uU(55,"\n\n  "),r.TgZ(56,"ngx-input",7),r.NdJ("change",function(n){return e.inputValue1=n}),r._uU(57,"\n  "),r.qZA(),r._uU(58,"\n  "),r._UZ(59,"br"),r._uU(60,"\n  "),r.TgZ(61,"app-prism"),r._uU(62,"\n"),r._uU(63,'<ngx-input\n  type="text"\n  [label]="\'Disabled Example\'"\n  [disabled]="true"\n  [ngModel]="\'Disabled value\'"\n  (change)="inputValue1 = $event">\n</ngx-input>'),r._uU(64,"\n  "),r.qZA(),r._uU(65,"\n  "),r._UZ(66,"br"),r._uU(67,"\n\n  "),r.TgZ(68,"ngx-input",8),r._uU(69,"\n  "),r.qZA(),r._uU(70,"\n  "),r._UZ(71,"br"),r._uU(72,"\n  "),r.TgZ(73,"app-prism"),r._uU(74,"\n"),r._uU(75,'\n  <ngx-input\n    type="text"\n    label="Disabled With Unlock Button"\n    [unlockable]="true"\n    [ngModel]="\'Click the button to unlock\'">\n  </ngx-input>\n'),r._uU(76,"\n  "),r.qZA(),r._uU(77,"\n\n  "),r._UZ(78,"br"),r._uU(79,"\n\n  "),r.TgZ(80,"ngx-input",9),r.NdJ("change",function(n){return e.inputValue3=n}),r._uU(81,"\n  "),r.qZA(),r._uU(82,"\n  "),r._UZ(83,"br"),r._uU(84,"\n  "),r.TgZ(85,"app-prism"),r._uU(86,"\n"),r._uU(87,'<ngx-input\n  [label]="\'Required Input Example Of The Day\'"\n  type="text"\n  [required]="true"\n  (change)="inputValue3 = $event">\n</ngx-input>'),r._uU(88,"\n  "),r.qZA(),r._uU(89,"\n\n  "),r._UZ(90,"br"),r._uU(91,"\n\n  "),r.TgZ(92,"ngx-input",10),r._uU(93,"\n  "),r.qZA(),r._uU(94,"\n  "),r._UZ(95,"br"),r._uU(96,"\n  "),r.TgZ(97,"app-prism"),r._uU(98,"\n"),r._uU(99,'<ngx-input\n  [label]="\'Default value\'"\n  type="text"\n  [ngModel]="inputDefaultVal"\n  name="input44">\n</ngx-input>'),r._uU(100,"\n  "),r.qZA(),r._uU(101,"\n\n"),r.qZA(),r._uU(102,"\n\n"),r.TgZ(103,"ngx-section",11),r._uU(104,"\n\n  "),r.TgZ(105,"div",12),r._uU(106,"\n    "),r.TgZ(107,"ngx-input",13,14),r.NdJ("ngModelChange",function(n){return e.searchInputValue=n})("focus",function(){return r.CHM(n),r.MAs(108).focused=!0})("blur",function(){return r.CHM(n),r.MAs(108).focused=!1}),r._uU(109,"\n      "),r.TgZ(110,"ngx-input-prefix"),r._uU(111,"\n        "),r._UZ(112,"ngx-icon",15),r._uU(113,"\n      "),r.qZA(),r._uU(114,"\n      "),r.TgZ(115,"ngx-input-suffix"),r._uU(116,"\n        "),r.YNc(117,g,4,0,"button",16),r._uU(118,"\n      "),r.qZA(),r._uU(119,"\n    "),r.qZA(),r._uU(120,"\n  "),r.qZA(),r._uU(121,"\n\n  "),r.TgZ(122,"ngx-tabs"),r._uU(123,"\n    "),r.TgZ(124,"ngx-tab",17),r._uU(125,"\n      "),r.TgZ(126,"app-prism"),r._uU(127,"\n"),r._uU(128,'<div lass="demo-search-box">\n  <ngx-icon fontIcon="search" class="search-icon pull-left"></ngx-icon>\n  <button class="btn btn-link pull-right"\n    *ngIf="searchInputValue?.length > 0"\n    (click)="searchInputValue = \'\'">\n      <ngx-icon fontIcon="x"></ngx-icon>\n  </button>\n  <ngx-input\n    #searchInput\n    [hidden]="!(searchInput?.focused || searchInputValue?.length > 0)"\n    placeholder="Search"\n    type="text"\n    name="searchInputValue"\n    [(ngModel)]="searchInputValue"\n    (focus)="searchInput.focused = true"\n    (blur)="searchInput.focused = false">\n  </ngx-input>\n</div>'),r._uU(129,"\n      "),r.qZA(),r._uU(130,"\n    "),r.qZA(),r._uU(131,"\n    "),r.TgZ(132,"ngx-tab",18),r._uU(133,"\n      "),r.TgZ(134,"app-prism",19),r._uU(135,"\n"),r._uU(136,".demo-search-box {\n  width: 300px;\n  height: 50px;\n\n  ngx-icon.search-icon {\n    margin-top: 5px;\n  }\n\n  ngx-input[hidden] {\n    display: block !important;\n    width: 0px;\n    transition: width 0.5s;\n  }\n\n  ngx-input, &:hover ngx-input {\n    margin: 0 40px 0 20px;\n    width: 240px;\n    transition: width 0.5s;\n  }\n}"),r._uU(137,"\n      "),r.qZA(),r._uU(138,"\n    "),r.qZA(),r._uU(139,"\n  "),r.qZA(),r._uU(140,"\n"),r.qZA(),r._uU(141,"\n\n"),r.TgZ(142,"ngx-section",11),r._uU(143,"\n  "),r.TgZ(144,"form",20),r._uU(145,"\n    "),r.TgZ(146,"ngx-input",21),r.NdJ("ngModelChange",function(n){return e.usernameValue=n}),r._uU(147,"\n    "),r.qZA(),r._uU(148,"\n    "),r.TgZ(149,"ngx-input",22),r.NdJ("ngModelChange",function(n){return e.passwordValue=n}),r._uU(150,"\n    "),r.qZA(),r._uU(151,"\n    "),r.TgZ(152,"button",23),r._uU(153,"Login"),r.qZA(),r._uU(154,"\n  "),r.qZA(),r._uU(155,"\n\n  "),r._UZ(156,"br"),r._uU(157,"\n  "),r.TgZ(158,"app-prism"),r._uU(159,"\n"),r._uU(160,'<form action="#">\n  <ngx-input\n    type="text"\n    [label]="\'Username\'"\n    [(ngModel)]="usernameValue"\n    name="input5"\n    [required]="true"\n    [requiredIndicator]="false"\n    [hint]="\'Enter a Username\'">\n  </ngx-input>\n  <ngx-input\n    type="password"\n    [label]="\'Password\'"\n    [(ngModel)]="passwordValue"\n    name="input6"\n    [required]="true"\n    [hint]="\'Enter a password\'">\n  </ngx-input>\n  <br />\n  <button class="btn" type="submit">Login</button>\n</form>'),r._uU(161,"\n  "),r.qZA(),r._uU(162,"\n"),r.qZA(),r._uU(163,"\n\n"),r.TgZ(164,"ngx-section",11),r._uU(165,"\n  "),r.TgZ(166,"ngx-input",24),r.NdJ("ngModelChange",function(n){return e.numericValue=n}),r._uU(167,"\n  "),r.qZA(),r._uU(168),r._UZ(169,"br"),r._uU(170,"\n  "),r.TgZ(171,"app-prism"),r._uU(172,"\n"),r._uU(173,'<ngx-input\n  type="number"\n  label="Age"\n  [(ngModel)]="numericValue"\n  name="numeric-input"\n  min="0"\n  max="122"\n>\n</ngx-input>'),r._uU(174,"\n  "),r.qZA(),r._uU(175,"\n\n  "),r.TgZ(176,"ngx-input",25),r._uU(177,"\n  "),r.qZA(),r._uU(178,"\n\n  "),r._UZ(179,"br"),r._uU(180,"\n  "),r.TgZ(181,"app-prism"),r._uU(182,"\n"),r._uU(183,'<ngx-input\n  type="number"\n  label="Pi"\n  [disabled]="true"\n  [ngModel]="3.14159">\n</ngx-input>'),r._uU(184,"\n  "),r.qZA(),r._uU(185,"\n"),r.qZA(),r._uU(186,"\n\n\n"),r.TgZ(187,"ngx-section",11),r._uU(188,"\n  "),r.TgZ(189,"ngx-input",26),r.NdJ("ngModelChange",function(n){return e.patternValue=n}),r._uU(190,"\n  "),r.qZA(),r._uU(191,"\n\n  "),r._UZ(192,"br"),r._uU(193,"\n  "),r.TgZ(194,"app-prism"),r._uU(195,"\n"),r._uU(196,'<ngx-input\n  type="text"\n  label="Pattern validation"\n  [(ngModel)]="patternValue"\n  name="patern-input"\n  [pattern]="\'^\\\\w+$\'"\n  hint="Pattern: ^\\\\w+$">\n</ngx-input>'),r._uU(197,"\n  "),r.qZA(),r._uU(198,"\n"),r.qZA(),r._uU(199,"\n\n"),r.TgZ(200,"ngx-section",11),r._uU(201,"\n  "),r.TgZ(202,"ngx-input",27),r._uU(203,"\n    "),r.TgZ(204,"ngx-input-hint"),r._uU(205,"\n      Enter a valid email\n    "),r.qZA(),r._uU(206,"\n  "),r.qZA(),r._uU(207,"\n\n  "),r.TgZ(208,"ngx-input",28),r._uU(209,"\n  "),r.qZA(),r._uU(210,"\n\n  "),r.TgZ(211,"ngx-input",29),r._uU(212,"\n  "),r.qZA(),r._uU(213,"\n"),r.qZA(),r._uU(214,"\n\n"),r.TgZ(215,"ngx-section",11),r._uU(216,"\n  "),r.TgZ(217,"ngx-input",30),r._uU(218,"\n  "),r.qZA(),r._uU(219,"\n"),r.qZA(),r._uU(220,"\n\n"),r.TgZ(221,"ngx-section",31),r._uU(222,"\n  "),r.TgZ(223,"label",32),r._uU(224,"Text"),r.qZA(),r._uU(225,"\n  "),r._UZ(226,"input",33),r._uU(227,"\n  "),r._UZ(228,"input",34),r._uU(229,"\n  "),r._UZ(230,"input",35),r._uU(231,"\n  "),r._UZ(232,"input",36),r._uU(233,"\n  "),r._UZ(234,"input",37),r._uU(235,"\n  "),r._UZ(236,"br"),r._uU(237,"\n  "),r.TgZ(238,"app-prism"),r._uU(239,"\n"),r._uU(240,'<input type="text" class="form-input" />\n<input type="text" class="form-input" value="pre populated" />\n<input type="text" class="form-input" placeholder="A placeholder" />\n<input type="text" class="form-input" value="disabled" disabled />\n<input type="tel" class="form-input" value="555-555-5555" />'),r._uU(241,"\n  "),r.qZA(),r._uU(242,"\n\n  "),r._UZ(243,"br"),r._uU(244,"\n  "),r._UZ(245,"br"),r._uU(246,"\n\n  "),r.TgZ(247,"h4"),r._uU(248,"Textarea"),r.qZA(),r._uU(249,"\n  "),r._UZ(250,"textarea",38),r._uU(251,"\n  "),r._UZ(252,"br"),r._uU(253,"\n  "),r.TgZ(254,"app-prism"),r._uU(255,"\n"),r._uU(256,'<textarea class="form-input"></textarea>'),r._uU(257,"\n  "),r.qZA(),r._uU(258,"\n\n  "),r._UZ(259,"br"),r._uU(260,"\n  "),r._UZ(261,"br"),r._uU(262,"\n\n  "),r.TgZ(263,"h4"),r._uU(264,"Number"),r.qZA(),r._uU(265,"\n  "),r._UZ(266,"input",39),r._uU(267,"\n  "),r._UZ(268,"br"),r._uU(269,"\n  "),r.TgZ(270,"app-prism"),r._uU(271,"\n"),r._uU(272,'<input type="number" class="form-input" />'),r._uU(273,"\n  "),r.qZA(),r._uU(274,"\n"),r.qZA(),r._uU(275,"\n\n"),r.TgZ(276,"ngx-section",40),r._uU(277,"\n  "),r._UZ(278,"ngx-input",41),r._uU(279,"\n\n  "),r._UZ(280,"br"),r._uU(281,"\n\n  "),r._UZ(282,"ngx-input",42),r._uU(283,"\n\n  "),r._UZ(284,"br"),r._uU(285,"\n\n  "),r.TgZ(286,"app-prism"),r._uU(287,"\n"),r._uU(288,'<ngx-input size="lg" label="Large" ngModel="Large Input" hint="example of a large input"></ngx-input>'),r._uU(289,"\n  "),r.qZA(),r._uU(290,"\n"),r.qZA(),r._uU(291,"\n\n"),r.TgZ(292,"ngx-section",43),r._uU(293,"\n  "),r._UZ(294,"ngx-input",44),r._uU(295,"\n\n  "),r._UZ(296,"br"),r._uU(297,"\n\n  "),r._UZ(298,"ngx-input",45),r._uU(299,"\n\n  "),r._UZ(300,"br"),r._uU(301,"\n\n  "),r._UZ(302,"ngx-input",46),r._uU(303,"\n\n  "),r._UZ(304,"br"),r._uU(305,"\n\n  "),r._UZ(306,"ngx-input",47),r._uU(307,"\n\n  "),r._UZ(308,"br"),r._uU(309,"\n\n  "),r.TgZ(310,"ngx-input",48),r._uU(311,"\n    "),r.TgZ(312,"ngx-input-prefix"),r._uU(313,"$"),r.qZA(),r._uU(314,"\n    "),r.TgZ(315,"ngx-input-suffix"),r._uU(316,"USD"),r.qZA(),r._uU(317,"\n  "),r.qZA(),r._uU(318,"\n  "),r._UZ(319,"br"),r._uU(320,"\n\n  "),r.TgZ(321,"app-prism"),r._uU(322,"\n"),r._uU(323,'<ngx-input label="Fill" appearance="fill" ngModel="Fill Input" placeholder="enter your text here..." hint="example of a fill input"></ngx-input>'),r._uU(324,"\n  "),r.qZA(),r._uU(325,"\n"),r.qZA(),r._uU(326,"\n\n"),r.TgZ(327,"ngx-section",49),r._uU(328,"\n  "),r.TgZ(329,"ngx-input",50),r.NdJ("ngModelChange",function(n){return e.longInputValue=n}),r.qZA(),r._uU(330,"\n\n  "),r._UZ(331,"br"),r._uU(332,"\n\n  "),r.TgZ(333,"app-prism"),r._uU(334,"\n"),r._uU(335,'<ngx-input autosize label="Resize Input" placeholder="enter your text here..." hint="example of a resize input"></ngx-input>'),r._uU(336,"\n  "),r.qZA(),r._uU(337,"\n\n  "),r._UZ(338,"br"),r._uU(339,"\n  "),r._UZ(340,"br"),r._uU(341,"\n\n  "),r._UZ(342,"ngx-input",51),r._uU(343,"\n\n  "),r._UZ(344,"br"),r._uU(345,"\n\n  "),r.TgZ(346,"app-prism"),r._uU(347,"\n"),r._uU(348,'<ngx-input autosize appearance="fill" type="number" label="Fill Resize Input"></ngx-input>'),r._uU(349,"\n  "),r.qZA(),r._uU(350,"\n"),r.qZA(),r._uU(351,"\n")}if(2&n){const n=r.MAs(108);r.xp6(5),r.Q6J("label","Name")("ngModel",e.inputValue)("autofocus",!0)("minlength",4)("hint","Enter your first and last name"),r.xp6(4),r.hij("Output: ",r.lcZ(10,53,e.output),""),r.xp6(12),r.Q6J("ngModel",e.inputValue1)("placeholder","Enter your first and last name"),r.xp6(12),r.Q6J("ngModel",e.inputValue1),r.xp6(23),r.Q6J("label","Disabled Example")("disabled",!0)("ngModel","Disabled value"),r.xp6(12),r.Q6J("unlockable",!0)("ngModel","Click the button to unlock"),r.xp6(12),r.Q6J("label","Required Input Example Of The Day")("required",!0),r.xp6(12),r.Q6J("label","Default value")("autoSelect",!0)("ngModel",e.inputDefaultVal),r.xp6(11),r.Q6J("sectionTitle","Search - demo"),r.xp6(4),r.Q6J("hidden",!(null!=n&&n.focused||(null==e.searchInputValue?null:e.searchInputValue.length)>0))("ngModel",e.searchInputValue),r.xp6(10),r.Q6J("ngIf",(null==e.searchInputValue?null:e.searchInputValue.length)>0),r.xp6(25),r.Q6J("sectionTitle","Password"),r.xp6(4),r.Q6J("ngModel",e.usernameValue)("required",!0)("requiredIndicator",!1)("minlength",4)("maxlength",12),r.xp6(3),r.Q6J("label","Password")("ngModel",e.passwordValue)("required",!0)("passwordToggleEnabled",!0),r.xp6(15),r.Q6J("sectionTitle","Numeric"),r.xp6(2),r.Q6J("ngModel",e.numericValue),r.xp6(2),r.hij("\n\n  Value: ",e.numericValue,"\n\n  "),r.xp6(8),r.Q6J("disabled",!0)("ngModel",3.14159),r.xp6(11),r.Q6J("sectionTitle","Validators"),r.xp6(2),r.Q6J("ngModel",e.patternValue)("pattern","^\\w+$"),r.xp6(11),r.Q6J("sectionTitle","Types"),r.xp6(2),r.Q6J("label","Email")("ngModel",e.inputValue),r.xp6(6),r.Q6J("label","Url")("ngModel",e.inputValue),r.xp6(3),r.Q6J("label","Tel")("ngModel",e.inputValue),r.xp6(4),r.Q6J("sectionTitle","Textarea"),r.xp6(2),r.Q6J("label","Name")("ngModel",e.inputValue)("textareaRows",3),r.xp6(112),r.Q6J("ngModel",e.longInputValue)}},directives:[a.e0w,a.amK,l.JJ,l.On,l.wO,o.U,a._Kg,a.y9p,a.oJW,t.O5,a.n4f,a.idV,l._Y,l.JL,l.F,l.Q7,l.nD,l.c5,a.B5N],pipes:[t.Ts],encapsulation:2,changeDetection:0}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[p.Bz.forChild(U)],p.Bz]}),n})(),s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[t.ez,l.u5,i.F,a.HNi,a.gPf,a.P4_,a.QX1,_]]}),n})()}}]);