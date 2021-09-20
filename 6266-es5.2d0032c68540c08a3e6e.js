!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[6266],{6266:function(o,t,r){"use strict";r.r(t),r.d(t,{JsonEditorPageModule:function(){return _}});var s,i,d=r(8583),a=r(665),u=r(5144),l=r(9421),c=r(4330),p=r(3018),g=r(7402),m=function(){return{}},h=[{path:"",component:(s=function(){function o(){e(this,o),this.jsonEditorSchema={$schema:"http://json-schema.org/draft-07/schema#",title:"Product",description:"A product from Acme's catalog",type:"object",properties:{metaData:{type:["string","string=code","number","object"]},productId:{title:"The unique identifier for a product",description:"The unique identifier for a product",type:"number"},productName:{description:"Name of the product",type:"string",examples:["Apples","Oranges"],minLength:3,maxLength:20},price:{description:"The price of the product",type:"number",exclusiveMinimum:0},tags:{description:"Tags for the product",type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},availability:{type:"string",enum:["In Stock","Sold Out"],default:"In Stock"},onSale:{description:"The sale status of the product",type:"boolean"},dimensions:{type:"object",properties:{length:{type:"integer"},width:{type:"number"},height:{type:"number",description:"Height if dimensions are a volume"}},required:["length","width"],additionalProperties:!1},warehouseLocation:{description:"Coordinates of the warehouse where the product is located.",title:"Longitude and Latitude",required:["latitude","longitude"],type:"object",properties:{latitude:{type:"number",minimum:-90,maximum:90},longitude:{type:"number",minimum:-180,maximum:180}}},userApiKey:{title:"User API key",type:"string",format:"password"}},required:["productId","productName","price","availability","onSale","dimensions","userApiKey"]},this.compressed=!1,this.hideRoot=!1,this.showKnownProperties=!1,this.passwordToggleEnabled=!1,this._jsonEditorSchema={},this.jsonEditorModel={metaData:"<< console.log('this should be of type code') >>"},this.jsonEditorModelFlat={metaData:"<< console.log('this should be of type code') >>"},this.jsonEditorSchemaBuilderModel={},this.schemaRef={},this.modelSchemaRef={},this.customFormats=["password","code","date","date-time","custom"],this.typeOverrides={"string=code":function(e){return"string"==typeof e&&/^<<([\s\S]*)>>$/.test(e)}}}var t,r,s;return t=o,(r=[{key:"toggleCompressed",value:function(){this.compressed=!this.compressed}},{key:"updateJsonEditorSchema",value:function(e){this.jsonEditorSchema=JSON.parse(e),this.jsonEditorModel={},this.jsonEditorModelFlat={}}},{key:"schemaUpdate",value:function(e){this.schemaRef=e}},{key:"modelschemaUpdate",value:function(e){this.modelSchemaRef=e}}])&&n(t.prototype,r),s&&n(t,s),o}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=p.Xpm({type:s,selectors:[["app-json-editor-page"]],decls:144,vars:41,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["label","Editor"],["label","Model",3,"model","schema","typeCheckOverrides","modelChange"],["label","Schema"],[1,"btn","btn-primary",3,"click"],["mode","javascript",3,"ngModel","ngModelChange"],["label","Markup"],["language","html"],["label","Typescript"],["language","js"],["label","Compressed Mode",3,"ngModel","ngModelChange"],["label","Hide Root",3,"ngModel","ngModelChange"],["label","Show Known Object Properties",3,"ngModel","ngModelChange"],["label","Enable Password Toggle",3,"ngModel","ngModelChange"],["label","Model",3,"model","schema","typeCheckOverrides","compressed","hideRoot","showKnownProperties","passwordToggleEnabled","modelChange","schemaUpdate"],["label","Schema",3,"model","schema","compressed","typeCheckOverrides","schemaBuilderMode","formats","modelChange","schemaUpdate"]],template:function(e,n){1&e&&(p.TgZ(0,"h3",0),p._uU(1,"JSON Editor"),p.qZA(),p._uU(2,"\n\n"),p.TgZ(3,"ngx-section",1),p._uU(4,"\n  "),p.TgZ(5,"ngx-tabs"),p._uU(6,"\n    "),p.TgZ(7,"ngx-tab",2),p._uU(8,"\n      "),p.TgZ(9,"ngx-json-editor",3),p.NdJ("modelChange",function(e){return n.jsonEditorModel=e}),p._uU(10,"\n      "),p.qZA(),p._uU(11,"\n\n      "),p._UZ(12,"hr"),p._uU(13,"\n      "),p.TgZ(14,"h3"),p._uU(15,"Model"),p.qZA(),p._uU(16,"\n      "),p.TgZ(17,"pre"),p._uU(18),p.ALo(19,"json"),p.qZA(),p._uU(20,"\n    "),p.qZA(),p._uU(21,"\n    "),p.TgZ(22,"ngx-tab",4),p._uU(23,"\n      "),p.TgZ(24,"ngx-button",5),p.NdJ("click",function(){return n.updateJsonEditorSchema(n._jsonEditorSchema)}),p._uU(25,"Update Schema"),p.qZA(),p._uU(26,"\n      "),p.TgZ(27,"ngx-codemirror",6),p.NdJ("ngModelChange",function(e){return n._jsonEditorSchema=e}),p.ALo(28,"json"),p.qZA(),p._uU(29,"\n    "),p.qZA(),p._uU(30,"\n  "),p.qZA(),p._uU(31,"\n\n  "),p.TgZ(32,"ngx-tabs"),p._uU(33,"\n    "),p.TgZ(34,"ngx-tab",7),p._uU(35,"\n      "),p.TgZ(36,"app-prism",8),p._uU(37,"\n"),p._uU(38,'<ngx-json-editor\n  [(model)]="jsonEditorModel"\n  [schema]="jsonEditorSchema"\n  label="Model"\n  [typeCheckOverrides]="typeOverrides"\n>\n</ngx-json-editor>'),p._uU(39,"\n      "),p.qZA(),p._uU(40,"\n    "),p.qZA(),p._uU(41,"\n    "),p.TgZ(42,"ngx-tab",9),p._uU(43,"\n      "),p.TgZ(44,"app-prism",10),p._uU(45,"\n"),p._uU(46,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),p._uU(47,"\n      "),p.qZA(),p._uU(48,"\n    "),p.qZA(),p._uU(49,"\n  "),p.qZA(),p._uU(50,"\n\n"),p.qZA(),p._uU(51,"\n\n"),p.TgZ(52,"ngx-section",1),p._uU(53,"\n  "),p.TgZ(54,"ngx-toggle",11),p.NdJ("ngModelChange",function(e){return n.compressed=e}),p._uU(55,"\n  "),p.qZA(),p._uU(56,"\n\n  "),p.TgZ(57,"ngx-toggle",12),p.NdJ("ngModelChange",function(e){return n.hideRoot=e}),p._uU(58,"\n  "),p.qZA(),p._uU(59,"\n\n  "),p.TgZ(60,"ngx-toggle",13),p.NdJ("ngModelChange",function(e){return n.showKnownProperties=e}),p._uU(61,"\n  "),p.qZA(),p._uU(62,"\n\n  "),p.TgZ(63,"ngx-toggle",14),p.NdJ("ngModelChange",function(e){return n.passwordToggleEnabled=e}),p._uU(64,"\n  "),p.qZA(),p._uU(65,"\n\n  "),p.TgZ(66,"ngx-json-editor-flat",15),p.NdJ("modelChange",function(e){return n.jsonEditorModelFlat=e})("schemaUpdate",function(e){return n.modelschemaUpdate(e)}),p._uU(67,"\n  "),p.qZA(),p._uU(68,"\n\n  "),p._UZ(69,"hr"),p._uU(70,"\n  "),p.TgZ(71,"h3"),p._uU(72,"Model"),p.qZA(),p._uU(73,"\n  "),p.TgZ(74,"pre"),p._uU(75),p.ALo(76,"json"),p.qZA(),p._uU(77,"\n  "),p.TgZ(78,"h3"),p._uU(79,"Schema"),p.qZA(),p._uU(80,"\n  "),p.TgZ(81,"pre"),p._uU(82),p.ALo(83,"json"),p.qZA(),p._uU(84,"\n\n  "),p.TgZ(85,"ngx-tabs"),p._uU(86,"\n    "),p.TgZ(87,"ngx-tab",7),p._uU(88,"\n      "),p.TgZ(89,"app-prism",8),p._uU(90,"\n"),p._uU(91,'<ngx-json-editor-flat\n  [(model)]="jsonEditorModelFlat"\n  [schema]="jsonEditorSchema"\n  label="Model"\n  [typeCheckOverrides]="typeOverrides"\n  [compressed]="compressed"\n  [hideRoot]="hideRoot"\n  [showKnownProperties]="showKnownProperties"\n  [passwordToggleEnabled]="showKnownProperties"\n  (schemaUpdate)="modelschemaUpdate($event)">\n</ngx-json-editor-flat>'),p._uU(92,"\n      "),p.qZA(),p._uU(93,"\n    "),p.qZA(),p._uU(94,"\n    "),p.TgZ(95,"ngx-tab",9),p._uU(96,"\n      "),p.TgZ(97,"app-prism",10),p._uU(98,"\n"),p._uU(99,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),p._uU(100,"\n      "),p.qZA(),p._uU(101,"\n    "),p.qZA(),p._uU(102,"\n  "),p.qZA(),p._uU(103,"\n"),p.qZA(),p._uU(104,"\n\n"),p._UZ(105,"br"),p._uU(106,"\n\n"),p.TgZ(107,"ngx-section",1),p._uU(108,"\n  "),p.TgZ(109,"ngx-button",5),p.NdJ("click",function(){return n.toggleCompressed()}),p._uU(110,"Toggle compressed mode"),p.qZA(),p._uU(111,"\n  "),p.TgZ(112,"ngx-json-editor-flat",16),p.NdJ("modelChange",function(e){return n.jsonEditorSchemaBuilderModel=e})("schemaUpdate",function(e){return n.schemaUpdate(e)}),p._uU(113,"\n  "),p.qZA(),p._uU(114,"\n  "),p._UZ(115,"hr"),p._uU(116,"\n  "),p.TgZ(117,"h3"),p._uU(118,"Schema"),p.qZA(),p._uU(119,"\n  "),p.TgZ(120,"pre"),p._uU(121),p.ALo(122,"json"),p.qZA(),p._uU(123,"\n\n  "),p.TgZ(124,"ngx-tabs"),p._uU(125,"\n    "),p.TgZ(126,"ngx-tab",7),p._uU(127,"\n      "),p.TgZ(128,"app-prism",8),p._uU(129,"\n"),p._uU(130,'<ngx-json-editor-flat\n  [(model)]="jsonEditorSchemaBuilderModel"\n  [schema]="{}"\n  label="Schema"\n  [compressed]="compressed"\n  [typeCheckOverrides]="typeOverrides"\n  [schemaBuilderMode]="true"\n  [formats]="customFormats"\n  (schemaUpdate)="schemaUpdate($event)">\n</ngx-json-editor-flat>'),p._uU(131,"\n      "),p.qZA(),p._uU(132,"\n    "),p.qZA(),p._uU(133,"\n    "),p.TgZ(134,"ngx-tab",9),p._uU(135,"\n      "),p.TgZ(136,"app-prism",10),p._uU(137,"\n"),p._uU(138,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),p._uU(139,"\n      "),p.qZA(),p._uU(140,"\n    "),p.qZA(),p._uU(141,"\n  "),p.qZA(),p._uU(142,"\n"),p.qZA(),p._uU(143,"\n\n")),2&e&&(p.xp6(3),p.Q6J("sectionTitle","JSON Editor"),p.xp6(6),p.Q6J("model",n.jsonEditorModel)("schema",n.jsonEditorSchema)("typeCheckOverrides",n.typeOverrides),p.xp6(9),p.Oqu(p.lcZ(19,30,n.jsonEditorModel)),p.xp6(9),p.Q6J("ngModel",p.lcZ(28,32,n.jsonEditorSchema)),p.xp6(25),p.Q6J("sectionTitle","ngx-json-editor-flat"),p.xp6(2),p.Q6J("ngModel",n.compressed),p.xp6(3),p.Q6J("ngModel",n.hideRoot),p.xp6(3),p.Q6J("ngModel",n.showKnownProperties),p.xp6(3),p.Q6J("ngModel",n.passwordToggleEnabled),p.xp6(3),p.Q6J("model",n.jsonEditorModelFlat)("schema",n.jsonEditorSchema)("typeCheckOverrides",n.typeOverrides)("compressed",n.compressed)("hideRoot",n.hideRoot)("showKnownProperties",n.showKnownProperties)("passwordToggleEnabled",n.passwordToggleEnabled),p.xp6(9),p.Oqu(p.lcZ(76,34,n.jsonEditorModelFlat)),p.xp6(7),p.Oqu(p.lcZ(83,36,n.modelSchemaRef)),p.xp6(25),p.Q6J("sectionTitle","Schema Builder Mode"),p.xp6(2),p.Udp("margin-bottom","8px"),p.xp6(3),p.Q6J("model",n.jsonEditorSchemaBuilderModel)("schema",p.DdM(40,m))("compressed",n.compressed)("typeCheckOverrides",n.typeOverrides)("schemaBuilderMode",!0)("formats",n.customFormats),p.xp6(9),p.Oqu(p.lcZ(122,38,n.schemaRef)))},directives:[u.e0w,u.n4f,u.idV,u.TOI,u.r0F,u.wIv,a.JJ,a.On,g.U,u.n$2,u.NMg],pipes:[d.Ts],encapsulation:2,changeDetection:0}),s)}],U=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=p.oAB({type:n}),n.\u0275inj=p.cJS({imports:[[c.Bz.forChild(h)],c.Bz]}),n}(),_=((i=function n(){e(this,n)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[[d.ez,a.u5,l.F,u.HNi,u._xO,u.P4_,u.Suy,u.vmb,u.Y05,u.hJ1,U]]}),i)}}])}();