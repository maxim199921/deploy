(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aeJy:function(t,e,i){"use strict";i.r(e),i.d(e,"ShoppingsModule",(function(){return x}));var n=i("tyNb"),o=i("quSY"),r=i("fXoL"),s=i("b+Kv"),c=i("5+tZ"),d=i("3Pt+"),b=i("kmnG"),a=i("qFsG"),u=i("ofXK"),p=i("bTqV");const l=["shoppingForm"];function m(t,e){1&t&&(r.Sb(0,"div",13),r.xc(1,"enter name!"),r.Rb())}function h(t,e){1&t&&(r.Sb(0,"div",13),r.xc(1,"enter amount!"),r.Rb())}function g(t,e){if(1&t){const t=r.Tb();r.Sb(0,"button",14),r.Yb("click",(function(){return r.oc(t),r.cc().onDelete()})),r.xc(1,"Delete"),r.Rb()}}let f=(()=>{class t{constructor(t){this.ingredientService=t,this.subscriptions=new o.a,this.editMode=!1}ngOnInit(){this.subscriptions.add(this.ingredientService.startingEditing$.pipe(Object(c.a)(t=>(this.editMode=!0,this.editedIndex=t,this.ingredientService.getCurrentIngredientData(this.editedIndex)))).subscribe(t=>{this.editedItem=t,this.shoppingForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})}))}onSubmit(){const t={name:this.shoppingForm.value.name,amount:this.shoppingForm.value.amount};this.shoppingForm.valid&&(this.editMode?this.ingredientService.updateIngredient(this.editedIndex,t):this.ingredientService.addIngredient(t)),this.editMode=!1,this.shoppingForm.resetForm()}onDelete(){this.ingredientService.deleteIngredient(this.editedIndex),this.onClear()}onClear(){this.editMode=!1,this.shoppingForm.resetForm()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(s.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-shopping-list-edit"]],viewQuery:function(t,e){var i;1&t&&r.Bc(l,!0),2&t&&r.lc(i=r.Zb())&&(e.shoppingForm=i.first)},decls:23,vars:5,consts:[[1,"row"],[1,"col-md-6"],[3,"ngSubmit"],["shoppingForm","ngForm"],[1,"example-full-width"],["matInput","","type","text","id","name","placeholder","max","name","name","ngModel","","required",""],["name","ngModel"],["class","input-error",4,"ngIf"],["matInput","","type","number","id","amount","placeholder","1","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$"],["amount","ngModel"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-raised-button","","color","warn","type","button",3,"click",4,"ngIf"],["mat-raised-button","","color","accent","type","button",3,"click"],[1,"input-error"],["mat-raised-button","","color","warn","type","button",3,"click"]],template:function(t,e){if(1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"form",2,3),r.Yb("ngSubmit",(function(){return e.onSubmit()})),r.Sb(4,"div"),r.Sb(5,"mat-form-field",4),r.Sb(6,"mat-label"),r.xc(7,"Name"),r.Rb(),r.Nb(8,"input",5,6),r.Rb(),r.wc(10,m,2,0,"div",7),r.Rb(),r.Sb(11,"div"),r.Sb(12,"mat-form-field",4),r.Sb(13,"mat-label"),r.xc(14,"Amount"),r.Rb(),r.Nb(15,"input",8,9),r.Rb(),r.wc(17,h,2,0,"div",7),r.Rb(),r.Sb(18,"button",10),r.xc(19),r.Rb(),r.wc(20,g,2,0,"button",11),r.Sb(21,"button",12),r.Yb("click",(function(){return e.onClear()})),r.xc(22,"Clear"),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){const t=r.mc(3),i=r.mc(9),n=r.mc(16);r.Bb(10),r.hc("ngIf",i.invalid&&i.touched),r.Bb(7),r.hc("ngIf",n.invalid&&n.touched),r.Bb(1),r.hc("disabled",t.invalid),r.Bb(1),r.yc(e.editMode?"Edit":"Add"),r.Bb(1),r.hc("ngIf",e.editMode)}},directives:[d.w,d.o,d.p,b.c,b.f,a.b,d.c,d.n,d.q,d.u,u.k,d.r,d.s,p.b],styles:[".input-error[_ngcontent-%COMP%]{margin-top:-20px;color:red;font-size:12px}"]}),t})();function v(t,e){if(1&t){const t=r.Tb();r.Sb(0,"a",3),r.Yb("click",(function(){r.oc(t);const i=e.index;return r.cc().onEditItem(i)})),r.xc(1),r.Rb()}if(2&t){const t=e.$implicit;r.Bb(1),r.Ac(" ",t.name,": ",t.amount," ")}}const S=[{path:"",component:(()=>{class t{constructor(t){this.ingredientService=t,this.subscription=new o.a}ngOnInit(){this.subscription.add(this.ingredientService.getIngredientData().subscribe(t=>{this.ingredientService.ingredients=t,this.ingredients=this.ingredientService.ingredients.slice()})),this.subscription.add(this.ingredientService.ingredientChange$.subscribe(t=>{this.ingredients=t}))}onEditItem(t){this.ingredientService.setEditingValue(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(s.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-md-10"],["class","shopping-list",3,"click",4,"ngFor","ngForOf"],[1,"shopping-list",3,"click"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Nb(2,"app-shopping-list-edit"),r.Nb(3,"hr"),r.Sb(4,"div"),r.wc(5,v,2,2,"a",2),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Bb(5),r.hc("ngForOf",e.ingredients))},directives:[f,u.j],styles:[".shopping-list[_ngcontent-%COMP%]{display:block;padding:20px;border:1px solid #dcdcdc;border-radius:5px;color:#000;text-decoration:none}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(S)],n.e]}),t})();var I=i("PCNd");let x=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[I.a,w]]}),t})()}}]);