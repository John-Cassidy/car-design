(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VjqO:function(e,t,n){"use strict";n.r(t),n.d(t,"DesignModule",function(){return y});var i=n("ofXK"),o=n("YUcS"),r=n("3Pt+"),a=n("vvyD"),l=n("tyNb"),s=n("fXoL"),c=n("xHqg"),d=n("XiUz"),u=n("bTqV");function p(e,t){1&e&&s.Nb(0,"router-outlet")}function b(e,t){if(1&e&&(s.Sb(0,"mat-step",2),s.Sb(1,"div",3),s.Sb(2,"div",4),s.yc(3,p,1,0,"router-outlet",5),s.Rb(),s.Sb(4,"div",6),s.Sb(5,"button",7),s.zc(6,"Next"),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&e){const e=t.$implicit,n=t.index,i=s.ec();s.jc("routerLink",e.url)("label",e.title),s.Bb(3),s.jc("ngIf",n===i.selectedStepIndex)}}let m=(()=>{class e{constructor(e){this.router=e,this.selectedStepIndex=0,this.loadingStep=!1,this.steps=[],this.createSteps()}ngOnInit(){this.navigate(0)}selectionChanged(e){this.selectedStepIndex=e.selectedIndex,e.previouslySelectedIndex>e.selectedIndex?(this.loadingStep=!0,setTimeout(()=>{this.navigate(e.selectedIndex),this.loadingStep=!1},1e3)):this.navigate(e.selectedIndex)}navigate(e){}createSteps(){this.steps.push({title:"Select Brand/Model",url:"design/brand-model",index:0}),this.steps.push({title:"Internal Design",url:"design/miata/interior",index:1}),this.steps.push({title:"Exterior Design",url:"design/miata/exterior",index:1})}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(l.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-design"]],decls:4,vars:2,consts:[[3,"linear","selectionChange"],[3,"routerLink","label",4,"ngFor","ngForOf"],[3,"routerLink","label"],[1,"stepContent"],["fxLayout","row","fxLayout.fxLayout.lt-sm","column","fxLayoutGap","10px"],[4,"ngIf"],["fxLayout","row",1,"margin-top"],["mat-raised-button","","matStepperNext","","color","accent"]],template:function(e,t){1&e&&(s.Sb(0,"h3"),s.zc(1,"Design Your Dream Car"),s.Rb(),s.Sb(2,"mat-horizontal-stepper",0),s.ac("selectionChange",function(e){return t.selectionChanged(e)}),s.yc(3,b,7,3,"mat-step",1),s.Rb()),2&e&&(s.Bb(2),s.jc("linear",!0),s.Bb(1),s.jc("ngForOf",t.steps))},directives:[c.a,i.j,c.b,l.b,d.b,d.c,i.k,u.b,c.e,l.f],encapsulation:2}),e})();var f=n("kqAT"),h=n("kmnG"),g=n("d3UM"),v=n("FKr1");function S(e,t){if(1&e&&(s.Sb(0,"mat-option",3),s.zc(1),s.Rb()),2&e){const e=t.$implicit;s.jc("value",e),s.Bb(1),s.Cc(" ",e.brand,"/",e.model," ")}}const x=[{path:"",component:m,pathMatch:"full",children:[{path:"miata",loadChildren:()=>n.e(3).then(n.bind(null,"Mr3q")).then(e=>e.MiataModule)},{path:"m2",loadChildren:()=>n.e(2).then(n.bind(null,"Km3I")).then(e=>e.M2Module)}]},{path:"brand-model",component:(()=>{class e{constructor(e,t){this.formBuilder=e,this.carApiService=t,this.selectedCar=null}ngOnInit(){this.buildForm()}buildForm(){var e;this.formGroup=this.formBuilder.group({brandModel:[(null===(e=this.selectedCar)||void 0===e?void 0:e.id)||"",r.m.required]})}onCarSelected(e){this.selectedCar="string"==typeof e.value||void 0===e.value?null:e.value}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(r.c),s.Mb(f.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-brand-model"]],decls:8,vars:4,consts:[[3,"formGroup"],["appearance","outline","fxFlex","100px"],["formControlName","brandModel",3,"selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.Sb(0,"form",0),s.Sb(1,"mat-form-field",1),s.Sb(2,"mat-label"),s.zc(3,"Car Brand/Model"),s.Rb(),s.Sb(4,"mat-select",2),s.ac("selectionChange",function(e){return t.onCarSelected(e)}),s.Nb(5,"mat-option",3),s.yc(6,S,2,3,"mat-option",4),s.fc(7,"async"),s.Rb(),s.Rb(),s.Rb()),2&e&&(s.jc("formGroup",t.formGroup),s.Bb(6),s.jc("ngForOf",s.gc(7,2,t.Cars$)))},directives:[r.n,r.j,r.e,h.b,d.a,h.e,g.a,r.i,r.d,v.l,i.j],pipes:[i.b],encapsulation:2}),e})()}];let C=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[l.e.forChild(x)],l.e]}),e})(),y=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[i.c,r.l,C,a.a,o.a]]}),e})()}}]);