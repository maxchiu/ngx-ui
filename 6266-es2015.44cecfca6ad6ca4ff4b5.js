(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[6266],{6266:function(e,n,o){"use strict";o.r(n),o.d(n,{JsonEditorPageModule:function(){return g}});var t=o(8583),s=o(665),r=o(5144),d=o(9421),i=o(4330),a=o(3018),u=o(7402);const l=function(){return{}},p=[{path:"",component:(()=>{class e{constructor(){this.jsonEditorSchema={$schema:"http://json-schema.org/draft-07/schema#",title:"Product",description:"A product from Acme's catalog",type:"object",properties:{metaData:{type:["string","string=code","number","object"]},productId:{title:"The unique identifier for a product",description:"The unique identifier for a product",type:"number"},productName:{description:"Name of the product",type:"string",examples:["Apples","Oranges"],minLength:3,maxLength:20},price:{description:"The price of the product",type:"number",exclusiveMinimum:0},tags:{description:"Tags for the product",type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},availability:{type:"string",enum:["In Stock","Sold Out"],default:"In Stock"},onSale:{description:"The sale status of the product",type:"boolean"},dimensions:{type:"object",properties:{length:{type:"integer"},width:{type:"number"},height:{type:"number",description:"Height if dimensions are a volume"}},required:["length","width"],additionalProperties:!1},warehouseLocation:{description:"Coordinates of the warehouse where the product is located.",title:"Longitude and Latitude",required:["latitude","longitude"],type:"object",properties:{latitude:{type:"number",minimum:-90,maximum:90},longitude:{type:"number",minimum:-180,maximum:180}}},userApiKey:{title:"User API key",type:"string",format:"password"}},required:["productId","productName","price","availability","onSale","dimensions","userApiKey"]},this.compressed=!1,this.hideRoot=!1,this.showKnownProperties=!1,this.passwordToggleEnabled=!1,this._jsonEditorSchema={},this.jsonEditorModel={metaData:"<< console.log('this should be of type code') >>"},this.jsonEditorModelFlat={metaData:"<< console.log('this should be of type code') >>"},this.jsonEditorSchemaBuilderModel={},this.schemaRef={},this.modelSchemaRef={},this.customFormats=["password","code","date","date-time","custom"],this.typeOverrides={"string=code":e=>"string"==typeof e&&/^<<(.*)>>$/s.test(e)}}toggleCompressed(){this.compressed=!this.compressed}updateJsonEditorSchema(e){this.jsonEditorSchema=JSON.parse(e),this.jsonEditorModel={},this.jsonEditorModelFlat={}}schemaUpdate(e){this.schemaRef=e}modelschemaUpdate(e){this.modelSchemaRef=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-json-editor-page"]],decls:144,vars:41,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["label","Editor"],["label","Model",3,"model","schema","typeCheckOverrides","modelChange"],["label","Schema"],[1,"btn","btn-primary",3,"click"],["mode","javascript",3,"ngModel","ngModelChange"],["label","Markup"],["language","html"],["label","Typescript"],["language","js"],["label","Compressed Mode",3,"ngModel","ngModelChange"],["label","Hide Root",3,"ngModel","ngModelChange"],["label","Show Known Object Properties",3,"ngModel","ngModelChange"],["label","Enable Password Toggle",3,"ngModel","ngModelChange"],["label","Model",3,"model","schema","typeCheckOverrides","compressed","hideRoot","showKnownProperties","passwordToggleEnabled","modelChange","schemaUpdate"],["label","Schema",3,"model","schema","compressed","typeCheckOverrides","schemaBuilderMode","formats","modelChange","schemaUpdate"]],template:function(e,n){1&e&&(a.TgZ(0,"h3",0),a._uU(1,"JSON Editor"),a.qZA(),a._uU(2,"\n\n"),a.TgZ(3,"ngx-section",1),a._uU(4,"\n  "),a.TgZ(5,"ngx-tabs"),a._uU(6,"\n    "),a.TgZ(7,"ngx-tab",2),a._uU(8,"\n      "),a.TgZ(9,"ngx-json-editor",3),a.NdJ("modelChange",function(e){return n.jsonEditorModel=e}),a._uU(10,"\n      "),a.qZA(),a._uU(11,"\n\n      "),a._UZ(12,"hr"),a._uU(13,"\n      "),a.TgZ(14,"h3"),a._uU(15,"Model"),a.qZA(),a._uU(16,"\n      "),a.TgZ(17,"pre"),a._uU(18),a.ALo(19,"json"),a.qZA(),a._uU(20,"\n    "),a.qZA(),a._uU(21,"\n    "),a.TgZ(22,"ngx-tab",4),a._uU(23,"\n      "),a.TgZ(24,"ngx-button",5),a.NdJ("click",function(){return n.updateJsonEditorSchema(n._jsonEditorSchema)}),a._uU(25,"Update Schema"),a.qZA(),a._uU(26,"\n      "),a.TgZ(27,"ngx-codemirror",6),a.NdJ("ngModelChange",function(e){return n._jsonEditorSchema=e}),a.ALo(28,"json"),a.qZA(),a._uU(29,"\n    "),a.qZA(),a._uU(30,"\n  "),a.qZA(),a._uU(31,"\n\n  "),a.TgZ(32,"ngx-tabs"),a._uU(33,"\n    "),a.TgZ(34,"ngx-tab",7),a._uU(35,"\n      "),a.TgZ(36,"app-prism",8),a._uU(37,"\n"),a._uU(38,'<ngx-json-editor\n  [(model)]="jsonEditorModel"\n  [schema]="jsonEditorSchema"\n  label="Model"\n  [typeCheckOverrides]="typeOverrides"\n>\n</ngx-json-editor>'),a._uU(39,"\n      "),a.qZA(),a._uU(40,"\n    "),a.qZA(),a._uU(41,"\n    "),a.TgZ(42,"ngx-tab",9),a._uU(43,"\n      "),a.TgZ(44,"app-prism",10),a._uU(45,"\n"),a._uU(46,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),a._uU(47,"\n      "),a.qZA(),a._uU(48,"\n    "),a.qZA(),a._uU(49,"\n  "),a.qZA(),a._uU(50,"\n\n"),a.qZA(),a._uU(51,"\n\n"),a.TgZ(52,"ngx-section",1),a._uU(53,"\n  "),a.TgZ(54,"ngx-toggle",11),a.NdJ("ngModelChange",function(e){return n.compressed=e}),a._uU(55,"\n  "),a.qZA(),a._uU(56,"\n\n  "),a.TgZ(57,"ngx-toggle",12),a.NdJ("ngModelChange",function(e){return n.hideRoot=e}),a._uU(58,"\n  "),a.qZA(),a._uU(59,"\n\n  "),a.TgZ(60,"ngx-toggle",13),a.NdJ("ngModelChange",function(e){return n.showKnownProperties=e}),a._uU(61,"\n  "),a.qZA(),a._uU(62,"\n\n  "),a.TgZ(63,"ngx-toggle",14),a.NdJ("ngModelChange",function(e){return n.passwordToggleEnabled=e}),a._uU(64,"\n  "),a.qZA(),a._uU(65,"\n\n  "),a.TgZ(66,"ngx-json-editor-flat",15),a.NdJ("modelChange",function(e){return n.jsonEditorModelFlat=e})("schemaUpdate",function(e){return n.modelschemaUpdate(e)}),a._uU(67,"\n  "),a.qZA(),a._uU(68,"\n\n  "),a._UZ(69,"hr"),a._uU(70,"\n  "),a.TgZ(71,"h3"),a._uU(72,"Model"),a.qZA(),a._uU(73,"\n  "),a.TgZ(74,"pre"),a._uU(75),a.ALo(76,"json"),a.qZA(),a._uU(77,"\n  "),a.TgZ(78,"h3"),a._uU(79,"Schema"),a.qZA(),a._uU(80,"\n  "),a.TgZ(81,"pre"),a._uU(82),a.ALo(83,"json"),a.qZA(),a._uU(84,"\n\n  "),a.TgZ(85,"ngx-tabs"),a._uU(86,"\n    "),a.TgZ(87,"ngx-tab",7),a._uU(88,"\n      "),a.TgZ(89,"app-prism",8),a._uU(90,"\n"),a._uU(91,'<ngx-json-editor-flat\n  [(model)]="jsonEditorModelFlat"\n  [schema]="jsonEditorSchema"\n  label="Model"\n  [typeCheckOverrides]="typeOverrides"\n  [compressed]="compressed"\n  [hideRoot]="hideRoot"\n  [showKnownProperties]="showKnownProperties"\n  [passwordToggleEnabled]="showKnownProperties"\n  (schemaUpdate)="modelschemaUpdate($event)">\n</ngx-json-editor-flat>'),a._uU(92,"\n      "),a.qZA(),a._uU(93,"\n    "),a.qZA(),a._uU(94,"\n    "),a.TgZ(95,"ngx-tab",9),a._uU(96,"\n      "),a.TgZ(97,"app-prism",10),a._uU(98,"\n"),a._uU(99,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),a._uU(100,"\n      "),a.qZA(),a._uU(101,"\n    "),a.qZA(),a._uU(102,"\n  "),a.qZA(),a._uU(103,"\n"),a.qZA(),a._uU(104,"\n\n"),a._UZ(105,"br"),a._uU(106,"\n\n"),a.TgZ(107,"ngx-section",1),a._uU(108,"\n  "),a.TgZ(109,"ngx-button",5),a.NdJ("click",function(){return n.toggleCompressed()}),a._uU(110,"Toggle compressed mode"),a.qZA(),a._uU(111,"\n  "),a.TgZ(112,"ngx-json-editor-flat",16),a.NdJ("modelChange",function(e){return n.jsonEditorSchemaBuilderModel=e})("schemaUpdate",function(e){return n.schemaUpdate(e)}),a._uU(113,"\n  "),a.qZA(),a._uU(114,"\n  "),a._UZ(115,"hr"),a._uU(116,"\n  "),a.TgZ(117,"h3"),a._uU(118,"Schema"),a.qZA(),a._uU(119,"\n  "),a.TgZ(120,"pre"),a._uU(121),a.ALo(122,"json"),a.qZA(),a._uU(123,"\n\n  "),a.TgZ(124,"ngx-tabs"),a._uU(125,"\n    "),a.TgZ(126,"ngx-tab",7),a._uU(127,"\n      "),a.TgZ(128,"app-prism",8),a._uU(129,"\n"),a._uU(130,'<ngx-json-editor-flat\n  [(model)]="jsonEditorSchemaBuilderModel"\n  [schema]="{}"\n  label="Schema"\n  [compressed]="compressed"\n  [typeCheckOverrides]="typeOverrides"\n  [schemaBuilderMode]="true"\n  [formats]="customFormats"\n  (schemaUpdate)="schemaUpdate($event)">\n</ngx-json-editor-flat>'),a._uU(131,"\n      "),a.qZA(),a._uU(132,"\n    "),a.qZA(),a._uU(133,"\n    "),a.TgZ(134,"ngx-tab",9),a._uU(135,"\n      "),a.TgZ(136,"app-prism",10),a._uU(137,"\n"),a._uU(138,"typeOverrides: any = {\n  'string=code': (value: any) => {\n    if (typeof value !== 'string') {\n      return false;\n    }\n    const regex = new RegExp(/^<<(.*)>>$/, 's');\n    return regex.test(value);\n  }\n};"),a._uU(139,"\n      "),a.qZA(),a._uU(140,"\n    "),a.qZA(),a._uU(141,"\n  "),a.qZA(),a._uU(142,"\n"),a.qZA(),a._uU(143,"\n\n")),2&e&&(a.xp6(3),a.Q6J("sectionTitle","JSON Editor"),a.xp6(6),a.Q6J("model",n.jsonEditorModel)("schema",n.jsonEditorSchema)("typeCheckOverrides",n.typeOverrides),a.xp6(9),a.Oqu(a.lcZ(19,30,n.jsonEditorModel)),a.xp6(9),a.Q6J("ngModel",a.lcZ(28,32,n.jsonEditorSchema)),a.xp6(25),a.Q6J("sectionTitle","ngx-json-editor-flat"),a.xp6(2),a.Q6J("ngModel",n.compressed),a.xp6(3),a.Q6J("ngModel",n.hideRoot),a.xp6(3),a.Q6J("ngModel",n.showKnownProperties),a.xp6(3),a.Q6J("ngModel",n.passwordToggleEnabled),a.xp6(3),a.Q6J("model",n.jsonEditorModelFlat)("schema",n.jsonEditorSchema)("typeCheckOverrides",n.typeOverrides)("compressed",n.compressed)("hideRoot",n.hideRoot)("showKnownProperties",n.showKnownProperties)("passwordToggleEnabled",n.passwordToggleEnabled),a.xp6(9),a.Oqu(a.lcZ(76,34,n.jsonEditorModelFlat)),a.xp6(7),a.Oqu(a.lcZ(83,36,n.modelSchemaRef)),a.xp6(25),a.Q6J("sectionTitle","Schema Builder Mode"),a.xp6(2),a.Udp("margin-bottom","8px"),a.xp6(3),a.Q6J("model",n.jsonEditorSchemaBuilderModel)("schema",a.DdM(40,l))("compressed",n.compressed)("typeCheckOverrides",n.typeOverrides)("schemaBuilderMode",!0)("formats",n.customFormats),a.xp6(9),a.Oqu(a.lcZ(122,38,n.schemaRef)))},directives:[r.e0w,r.n4f,r.idV,r.TOI,r.r0F,r.wIv,s.JJ,s.On,u.U,r.n$2,r.NMg],pipes:[t.Ts],encapsulation:2,changeDetection:0}),e})()}];let c=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[t.ez,s.u5,d.F,r.HNi,r._xO,r.P4_,r.Suy,r.vmb,r.Y05,r.hJ1,c]]}),e})()}}]);