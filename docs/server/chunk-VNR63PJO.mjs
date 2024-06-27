import './polyfills.server.mjs';
import{A as E,B as l,C as d,G as T,H as c,I as r,J as a,K as p,L as h,M as m,N as C,O as R,b as x,e as M,fa as A,ga as N,ha as L,j as s,k as O,m as P,n as j,p as H,ua as g,va as $,xa as _,z as w}from"./chunk-CHHNACVD.mjs";import"./chunk-NDYDZJSS.mjs";var y=(()=>{let e=class e{constructor(o){this.router=o,this.title="C-ARCHES"}ngOnInit(){}goToHomeScreen(){this.router.navigate(["/"])}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-header"]],inputs:{title:"title"},decls:3,vars:1,consts:[[1,"header"],[3,"click"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"h1",1),h("click",function(){return i.goToHomeScreen()}),m(2),a()()),t&2&&(l(2),C(i.title))},styles:[".header[_ngcontent-%COMP%]{position:fixed;z-index:100;width:100vw;height:8vh;background:#93bbf9;color:#fff;border-bottom:3px solid #b6d3ff;box-shadow:0 0 40px #0006;text-align:center;cursor:pointer}"]});let n=e;return n})();var k=(()=>{let e=class e{constructor(o){this.router=o}goToResources(){this.router.navigate(["/resources"])}exit(){document.location.href="https://weather.com/"}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"bottom-nav"],["id","resources-button",1,"primary-button",3,"click"],["id","continue-text"],["id","quit-button",1,"primary-button",3,"click"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return i.goToResources()}),m(2," RESOURCES "),a(),r(3,"div",2),m(4," Click or press space to continue. "),a(),r(5,"button",3),h("click",function(){return i.exit()}),m(6," EXIT "),a()())},styles:[".bottom-nav[_ngcontent-%COMP%]{position:fixed;background:#93bbf9;color:#fff;border-top:3px solid #b6d3ff;box-shadow:0 0 40px #0006;text-align:center;display:flex;flex-direction:row;justify-content:space-between;bottom:0;width:100%;height:8vh;align-items:end}.bottom-nav[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%]{height:calc(100% - 6px);margin:3px;width:25vw;cursor:pointer;font-size:calc(1.5vw + .5rem);border-radius:8px}.bottom-nav[_ngcontent-%COMP%]   #resources-button[_ngcontent-%COMP%]{background:#9aa400;color:#fff;border-color:#798200}.bottom-nav[_ngcontent-%COMP%]   #quit-button[_ngcontent-%COMP%]{background:#b75858;color:#fff;border-color:#9c4444}.bottom-nav[_ngcontent-%COMP%]   #continue-text[_ngcontent-%COMP%]{text-align:center;color:#fff;margin:10px;font-size:1.5rem}"]});let n=e;return n})();var z=(()=>{let e=class e{constructor(o){this.router=o}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"home-container"],[1,"top-buttons"],["routerLink","/chapters/1/0",1,"chapter-button"],["routerLink","/chapters/2/0",1,"chapter-button"]],template:function(t,i){t&1&&(p(0,"app-header"),r(1,"div",0)(2,"div",1)(3,"a",2),m(4,"Chapter 1"),a(),r(5,"a",3),m(6,"Chapter 2"),a()()(),p(7,"app-footer"))},dependencies:[y,k,$],styles:[".home-container[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;top:10vh;left:25vw;right:25vw}.top-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;margin-bottom:20px}.chapter-button[_ngcontent-%COMP%]{padding:20px 40px;font-size:1.5rem;background-color:#3498db;color:#fff;border:none;border-radius:10px;cursor:pointer;outline:none}"]});let n=e;return n})();var W=(()=>{let e=class e{constructor(){this.backgroundImage="assets/images/LivingRoom.png"}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-background"]],inputs:{backgroundImage:"backgroundImage"},decls:1,vars:1,consts:[[1,"background",3,"src"]],template:function(t,i){t&1&&p(0,"img",0),t&2&&c("src",i.backgroundImage,w)},styles:[".background[_ngcontent-%COMP%]{z-index:0;position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:50% 100%}"]});let n=e;return n})();var B=(()=>{let e=class e{constructor(){this.currentLineIndex$=new x(0),this.dialogueLines=[],this.speakerIsOnLeft=!1,this.workingVersion=""}ngOnInit(){this.currentLineIndex$.subscribe(o=>{this.clearAnimationTimer(),this.speakerIsOnLeft=this.dialogueLines[o].speaker===0,this.workingVersion="",this.animateText(this.dialogueLines[o].message)})}ngOnDestroy(){this.clearAnimationTimer()}animateText(o){this.workingVersion="";let t=0;this.animationTimer=setInterval(()=>{t<o.length?(this.workingVersion+=o[t],t++):this.clearAnimationTimer()},30)}clearAnimationTimer(){clearInterval(this.animationTimer)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["dialogue"]],inputs:{currentLineIndex$:"currentLineIndex$",dialogueLines:"dialogueLines"},decls:2,vars:2,consts:[[1,"text",3,"ngClass"]],template:function(t,i){t&1&&(r(0,"div",0),m(1),a()),t&2&&(c("ngClass",i.speakerIsOnLeft===!0?"left":"right"),l(),R(" ",i.workingVersion,`
`))},dependencies:[A],styles:[".text[_ngcontent-%COMP%]{position:fixed;top:10vh;left:50%;transform:translate(-50%);width:80vw;max-width:60vh;font-size:3.5vh;word-spacing:.2em;background:#fff;padding:1em;border-bottom:1vw solid #0e6dad;border-radius:.5em;line-height:1.2em}.left[_ngcontent-%COMP%]{outline:5px solid red}.right[_ngcontent-%COMP%]{outline:5px solid green}"]});let n=e;return n})();var I=(()=>{let e=class e{constructor(o){this.router=o,this.leftCharacterImage="",this.rightCharacterImage="",this.dialogueLines=[],this.backgroundImage="assets/images/LivingRoom.png",this.onFinish=new H,this.currentLineIndex$=new x(0)}handleClickOrSpace(o){if(this.currentLineIndex$.value<this.dialogueLines.length-1){let t=this.currentLineIndex$.value;this.currentLineIndex$.next(t+=1)}else this.onFinish.emit()}handleKeyboardEvent(o){o.code==="Space"&&(this.handleClickOrSpace(),o.stopPropagation())}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-scene"]],hostBindings:function(t,i){t&1&&h("keypress",function(Z){return i.handleKeyboardEvent(Z)},!1,E)},inputs:{leftCharacterImage:"leftCharacterImage",rightCharacterImage:"rightCharacterImage",dialogueLines:"dialogueLines",backgroundImage:"backgroundImage"},outputs:{onFinish:"onFinish"},decls:11,vars:5,consts:[[3,"click"],[3,"backgroundImage"],[1,"components-above-background"],[1,"character","character-left",3,"src"],[1,"right-character-container"],[1,"character","character-right",3,"src"],["viewBox","0 0 65 62","fill","none","xmlns","http://www.w3.org/2000/svg",1,"corner"],["d","M35 3.5L65 6.5V62L0 0L35 3.5Z","fill","white"],[3,"currentLineIndex$","dialogueLines"]],template:function(t,i){t&1&&(r(0,"div",0),h("click",function(){return i.handleClickOrSpace()}),p(1,"app-header")(2,"app-background",1),r(3,"div",2),p(4,"img",3),r(5,"div",4),p(6,"img",5),P(),r(7,"svg",6),p(8,"path",7),a()(),j(),p(9,"dialogue",8)(10,"app-footer"),a()()),t&2&&(l(2),c("backgroundImage",i.backgroundImage),l(2),c("src",i.leftCharacterImage,w),l(2),c("src",i.rightCharacterImage,w),l(3),c("currentLineIndex$",i.currentLineIndex$)("dialogueLines",i.dialogueLines))},dependencies:[y,k,W,B],styles:[".components-above-background[_ngcontent-%COMP%]{z-index:100}.components-above-background[_ngcontent-%COMP%]   .character[_ngcontent-%COMP%]{position:fixed;width:40vw;height:60vh;top:30vh;object-fit:contain;min-width:20vh}.components-above-background[_ngcontent-%COMP%]   .character.character-left[_ngcontent-%COMP%]{left:0vw;object-position:100% 100%}.components-above-background[_ngcontent-%COMP%]   .character.character-right[_ngcontent-%COMP%]{display:block;right:0vw;object-position:0% 100%}.components-above-background[_ngcontent-%COMP%]   .right-character-container[_ngcontent-%COMP%]{position:relative;display:inline-block}"]});let n=e;return n})();var ne=["class","1 0"],J=(()=>{let e=class e{constructor(o){this.router=o,this.backgroundImage="assets/images/LivingRoom.png",this.leftCharacterImage="assets/images/Alex.png",this.rightCharacterImage="assets/images/Jade.png",this.dialogueLines=[{speaker:0,message:"Hey, Jade! You look kinda stressed...you okay?"},{speaker:1,message:"Hey, Sam."},{speaker:0,message:"I don't know...Charlie and I are fighting again."},{speaker:1,message:"Wanna talk about it?"},{speaker:0,message:"He really wants kids now, but I just don't think I'm ready."},{speaker:1,message:"Oh, that sounds tough... How have your talks been going?"},{speaker:0,message:"Not great.  He keeps bringing it up, and gets upset and yells when I say no."},{speaker:1,message:"Woah! Is he violent?"},{speaker:0,message:"No, but he hid my birth control."},{speaker:1,message:"He denied it, but I know he took it."},{speaker:0,message:"Dude, what?"},{speaker:1,message:"It made me really uncomfortable."},{speaker:0,message:"I'm pretty sure he threw away my prescription refill, too."},{speaker:1,message:"This isn't okay, Jade."},{speaker:0,message:"He has no right to force you into something you\u2019re not ready for."},{speaker:1,message:"I think he was poking holes in the condoms before..."},{speaker:0,message:"...and now he says he won't use one."}]}ngOnInit(){}onFinish(){this.router.navigate(["/chapters/1/1"])}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-chapter",8,"1","0"]],attrs:ne,decls:1,vars:4,consts:[[3,"onFinish","backgroundImage","leftCharacterImage","rightCharacterImage","dialogueLines"]],template:function(t,i){t&1&&(r(0,"app-scene",0),h("onFinish",function(){return i.onFinish()}),a()),t&2&&c("backgroundImage",i.backgroundImage)("leftCharacterImage",i.leftCharacterImage)("rightCharacterImage",i.rightCharacterImage)("dialogueLines",i.dialogueLines)},dependencies:[I]});let n=e;return n})();var oe=["class","1 1"],V=(()=>{let e=class e{constructor(o){this.router=o}ngOnInit(){this.router.navigate(["/chapters/1/2"])}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-chapter",8,"1","1"]],attrs:oe,decls:2,vars:0,template:function(t,i){t&1&&(r(0,"p"),m(1,"chapter.1.2 works!"),a())}});let n=e;return n})();var ie=["class","1 2"],U=(()=>{let e=class e{constructor(o){this.router=o,this.backgroundImage="assets/images/LivingRoom.png",this.leftCharacterImage="assets/images/Alex.png",this.rightCharacterImage="assets/images/Jade.png",this.dialogueLines=[{speaker:0,message:"Whatever it is, I just know I feel anxious and trapped."},{speaker:1,message:"Jade, I'm here for you."},{speaker:0,message:"Who else knows about this?"},{speaker:1,message:"I haven't really talked to anyone..."},{speaker:0,message:"...I'm kinda embarassed."},{speaker:1,message:"Okay, well you don't have to go through this alone."},{speaker:0,message:"Have you considered getting on something that your partner can't mess with?"},{speaker:1,message:"What do you mean?"},{speaker:0,message:"Well, you could get the birth control shot, implant, or IUD."},{speaker:1,message:"Oh...maybe?  I don't want to worry about getting pregnant!"},{speaker:0,message:"What would you do?"},{speaker:1,message:"I got an IUD last year...You'll barely feel it, and he won't even know it's there!"},{speaker:0,message:"That sounds nice..."},{speaker:1,message:"If you want, I'll show you the counselor who helped me?"},{speaker:0,message:"Okay!"},{speaker:1,message:"Thanks, Sam."},{speaker:0,message:"Anytime, Jade."}]}ngOnInit(){}onFinish(){this.router.navigate(["/chapters/2/0"])}};e.\u0275fac=function(t){return new(t||e)(d(g))},e.\u0275cmp=s({type:e,selectors:[["app-chapter",8,"1","2"]],attrs:ie,decls:1,vars:4,consts:[[3,"onFinish","backgroundImage","leftCharacterImage","rightCharacterImage","dialogueLines"]],template:function(t,i){t&1&&(r(0,"app-scene",0),h("onFinish",function(){return i.onFinish()}),a()),t&2&&c("backgroundImage",i.backgroundImage)("leftCharacterImage",i.leftCharacterImage)("rightCharacterImage",i.rightCharacterImage)("dialogueLines",i.dialogueLines)},dependencies:[I]});let n=e;return n})();var Y=(()=>{let e=class e{constructor(){this.backgroundImage="assets/images/PatientRoom.png",this.leftCharacterImage="assets/images/Alex.png",this.rightCharacterImage="assets/images/Jade.png",this.dialogueText=[{speaker:0,message:"Hi Jade, I'm Dr. Green! What brings you in today?"},{speaker:1,message:"My friend recommended I come see you...We were talking about reproductive coercion..."},{speaker:1,message:"...some of it hit close to home."},{speaker:1,message:"I want to talk about emergency contraception and getting on birth control that my partner can't mess with."},{speaker:0,message:"Absolutely! I'm really glad you brought this up, Jade."},{speaker:0,message:"This is something that a lot of people go through."},{speaker:1,message:"Yeah...I'm noticing some things in my relationship and realized I want to take control over my reproductive health."},{speaker:0,message:"Absolutely, Jade. It's great that you're being proactive about your health. I'm here for you!"},{speaker:0,message:"We can discuss all of your options."},{speaker:0,message:"Have you heard of the morning-after pill, like Plan B?"},{speaker:1,message:"Yeah, but I've never used it...and I don't want my partner to know..."},{speaker:0,message:"Okay! Well the morning-after pill is available over-the-counter at most pharmacies."},{speaker:0,message:"If you want to be discreet, you could trash the packaging and keep the pill in a plain container."}]}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-chapter2"]],decls:1,vars:4,consts:[[3,"backgroundImage","leftCharacterImage","rightCharacterImage","dialogueLines"]],template:function(t,i){t&1&&p(0,"app-scene",0),t&2&&c("backgroundImage",i.backgroundImage)("leftCharacterImage",i.leftCharacterImage)("rightCharacterImage",i.rightCharacterImage)("dialogueLines",i.dialogueText)},dependencies:[I]});let n=e;return n})();var q=(()=>{let e=class e{constructor(){this.title="Title",this.subtitle="Subtitle",this.description="Description"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-card"]],inputs:{title:"title",subtitle:"subtitle",description:"description"},decls:7,vars:3,consts:[[1,"card"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"h1"),m(2),a(),r(3,"h3"),m(4),a(),r(5,"p"),m(6),a()()),t&2&&(l(2),C(i.title),l(2),C(i.subtitle),l(2),C(i.description))},styles:[".card[_ngcontent-%COMP%]{flex:1 1 auto;background:#dbe5f3;border:5px solid #a5c4f3;border-radius:8px;padding:1rem}"]});let n=e;return n})();function ae(n,e){if(n&1&&p(0,"app-card",3),n&2){let f=e.$implicit;c("title",f.name)("subtitle",f.subtitle)("description",f.description)}}function se(n,e){if(n&1&&p(0,"app-card",3),n&2){let f=e.$implicit;c("title",f.name)("subtitle",f.subtitle)("description",f.description)}}var G=(()=>{let e=class e{constructor(){this.leftColumn=[{name:"The National Domestic Violence Hotline",subtitle:"24/7 confidential, and free",description:""},{name:"Crisis Text Line",subtitle:"Text trained counselors about anything that\u2019s on your mind.",description:""},{name:"myPlanApp",subtitle:"If you or someone you are about is experiencing abuse in their relationship, download the myPlan app to help with safety decisions",description:""},{name:"The National Sexual Assault Hotline",subtitle:"24/7 confidential and free support for survivors and loved ones.",description:""},{name:"LoveisRespect.org",subtitle:"24/7 teen dating violence support.",description:""}],this.rightColumn=[{name:"StrongHearts Native Helpline",subtitle:"For confidential domestic/sexual violence support, specifically for Native communities",description:""},{name:"Trans LifeLine",subtitle:"A peer-support hotline staffed exclusively by trans operators. The only crisis line with a policy against non-consensual active rescue.",description:""},{name:"Deaf Hotline",subtitle:"24/7 chat for Deaf, DeafBlind, DeafDisabled",description:""},{name:"National Parent Helpline",subtitle:"Emotional support and advocacy for parents.",description:""},{name:"Futures Without Violence",subtitle:"",description:""}]}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-resources"]],decls:7,vars:2,consts:[[1,"resource-row"],[1,"resource-column"],[3,"title","subtitle","description",4,"ngFor","ngForOf"],[3,"title","subtitle","description"]],template:function(t,i){t&1&&(p(0,"app-header"),r(1,"div",0)(2,"div",1),T(3,ae,1,3,"app-card",2),a(),r(4,"div",1),T(5,se,1,3,"app-card",2),a()(),p(6,"app-footer")),t&2&&(l(3),c("ngForOf",i.leftColumn),l(2),c("ngForOf",i.rightColumn))},dependencies:[N,y,k,q],styles:[".resource-row[_ngcontent-%COMP%]{position:relative;top:11vh;width:96vw;max-width:100vh;padding-bottom:11vh;display:flex;margin:0 auto;justify-content:center;align-items:stretch;column-gap:2vw;row-gap:2vh;flex-flow:row wrap}.resource-column[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;max-width:47%;gap:2vh;flex:1 1 auto;flex-flow:column wrap}"]});let n=e;return n})();var K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[L]});let n=e;return n})();var X=[{path:"",component:z},{path:"chapters/1/0",component:J},{path:"chapters/1/1",component:V},{path:"chapters/1/2",component:U},{path:"chapters/2/0",component:Y},{path:"resources",component:G}];var st=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[L,K,_.forChild(X),_]});let n=e;return n})();export{st as HomeModule};
