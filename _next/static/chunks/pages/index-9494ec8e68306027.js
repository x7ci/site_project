(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1456:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(1599)}])},3952:function(e,i,l){"use strict";var a=l(1527),t=l(9737),n=l(4855);let s=e=>{let{children:i}=e;return(0,a.jsx)(n.xu,{as:t.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",duration:.4},children:i})};i.Z=s},1599:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return iS}});var a,t,n,s,r,c,o,d,x,h,u=l(1527),p=l(9522),y=l.n(p),g=l(4855),j=l(4978),v=l(2456),m=l(959),f=l(4789),b=l.n(f),z=l(3839),w=l(9737),E=l(4637),A=l.n(E),C=l(7720),S=l(929),I=l(2699);let V=(e,i)=>Number(e.toFixed(null!=i?i:2)),T=(e,i)=>{let l=.5>Math.random();if(void 0===i)return V((0,I.random)(e.minValue,e.maxValue,!0),e.digits);let a=e.multiplyAdd?Math.random()*e.multiplyAdd:Math.random();return i+a>=e.maxValue?V(i-a,e.digits):i-a<=e.minValue?V(i+a,e.digits):(i+a>e.maxValue&&(l=!1),i-a<e.minValue&&(l=!0),l)?V(i+a,e.digits):V(i-a,e.digits)},R=e=>{let[i,l]=(0,m.useState)();return(0,m.useEffect)(()=>{let i=T(e);(0,m.startTransition)(()=>{l(i)});let a=setInterval(()=>{(0,m.startTransition)(()=>{l(i=>T(e,i))})},e.updateInterval);return()=>{clearInterval(a)}},[]),i},$=e=>{let{src:i,width:l,quality:a}=e;return"https://sws.imgix.net/".concat(i,"?w=").concat(l,"&q=").concat(null!=a?a:75),"https://sws.imgix.net/".concat(i)},D=()=>{let{resolvedTheme:e}=(0,C.F)(),[i,l]=(0,m.useState)(),[a,t]=(0,m.useState)(!1),n=R({minValue:28,maxValue:37,updateInterval:1e3,digits:8}),s=(0,S.Z)();(0,m.useEffect)(()=>{l(A()())},[]);let[r,c]=(0,m.useState)(!1);return(0,u.jsxs)(M,{children:[(0,u.jsxs)(_,{children:[(0,u.jsxs)(L,{children:[(0,u.jsxs)(H,{children:[(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"ID 255212"}),(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"DATA SET: POLARIS "}),(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"UNIT GROUP: M22 "})]}),(0,u.jsxs)(H,{align:"right",children:[(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:null==i?void 0:i.toISOString()}),(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"[UP TO DATE]"})]})]}),(0,u.jsxs)(L,{children:[(0,u.jsxs)(H,{children:[(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"UNIT TESTS: OK"}),(0,u.jsxs)(g.xv,{background:"cyan1",size:3,color:"gray1",padding:"tiny",children:["FPS: ",n]})]}),(0,u.jsxs)(H,{align:"right",children:[(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"FRAMER-MOTION"}),(0,u.jsx)(g.xv,{size:3,color:"gray8",padding:"tiny",children:"8.5.3-ALPHA.1 "})]})]})]}),(0,u.jsxs)(k,{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,u.jsx)(z.M,{children:(0,u.jsx)(O,{as:w.E.div,initial:{scale:1.2,opacity:0},animate:r?{scale:a?[1,1,1]:[1,1.05,1],opacity:1}:{scale:1,opacity:1},onAnimationComplete:()=>c(!0),transition:r?{repeat:1/0,duration:4}:{type:"spring",stiffness:100,damping:10,delay:1.8},color:a?"cyan1":void 0})}),(0,u.jsx)(g.xu,{as:w.E.div,animate:{rotate:[0,20,0]},transition:{repeat:1/0,duration:8},children:(0,u.jsx)(g.xu,{as:w.E.div,animate:{},transition:{repeat:1/0,duration:4},children:(0,u.jsx)(z.M,{children:s&&(0,u.jsx)(w.E.div,{initial:{scale:0},animate:{scale:1},transition:{duration:3,ease:"easeOut"},exit:{scale:0},children:(0,u.jsx)(b(),{loader:$,src:"/quark_".concat("light"===e?"light":"dark",".gif"),alt:"Sample analysis",width:250,height:250,draggable:!1,style:{userSelect:"none"}})},"quark_gif")})})})]})]})},M=(0,j.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",background:"$cyan14"}),k=(0,j.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"360px",height:"300px"}),O=(0,j.zo)(w.E.div,{position:"absolute",width:"260px",height:"260px",borderRadius:"50%",border:"3px dotted $cyan2",transition:"200ms",variants:{color:{cyan1:{border:"3px dotted $cyan1"},cyan9:{border:"3px dotted $cyan9"}}}}),_=(0,j.zo)("div",{position:"absolute",top:0,bottom:0,right:0,left:0,padding:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"}),L=(0,j.zo)("div",{display:"flex",justifyContent:"space-between"}),H=(0,j.zo)("div",{display:"flex",flexDirection:"column",gap:"3px",variants:{align:{right:{alignItems:"flex-end"}}}}),P=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(g.xT,{color:"cyan14",size:"max",height:20,children:(0,u.jsxs)(g.xu,{css:{display:"flex",justifyContent:"space-between"},children:[(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"MODEL "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"RENDER"})]}),(0,u.jsx)(g.xu,{children:(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"ID: 34-842 "})})]})}),(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsx)(v.Z,{}),(0,u.jsx)(D,{})]}),(0,u.jsx)(v.Z,{})]});var X=l(1992);let N=()=>{let e=(0,X._)();(0,m.useEffect)(()=>{let e=setInterval(i,3300);return()=>{clearInterval(e)}},[]);let i=async()=>{e.set({scale:1,opacity:1}),await e.start({scale:3,opacity:0}),await e.start({scale:1,opacity:0})};return(0,u.jsxs)(W,{children:[(0,u.jsx)(Z,{animate:e,transition:{duration:2,ease:"easeOut"}}),(0,u.jsx)(U,{children:(0,u.jsx)(B,{})})]})},W=(0,j.zo)("div",{position:"relative"}),Z=(0,j.zo)(w.E.div,{position:"absolute",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid rgba(216, 60, 60, 0.5)",transition:"200ms",variants:{color:{cyan9:{border:"3px dotted $cyan9"},cyanCustom:{border:"3px dotted rgba(153, 250, 255, .9)"}}}}),U=(0,j.zo)("div",{position:"relative",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid rgba(216, 60, 60, 0.5)",transition:"200ms",variants:{color:{cyan9:{border:"3px dotted $cyan9"},cyanCustom:{border:"3px dotted rgba(153, 250, 255, .9)"}}}}),B=(0,j.zo)("div",{background:"rgba(216, 60, 60, 0.8)",width:"8px",height:"8px",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"});var F=l(8129),G=l(8509);let q={textStyle:{fontFamily:j.rS.fonts.robotoCondensed.value},grid:{show:!1},xAxis:{type:"time",splitLine:{show:!1},splitNumber:3},yAxis:{type:"value",splitLine:{show:!1}},tooltip:{show:!0,trigger:"axis",backgroundColor:"#181923",borderRadius:0,borderColor:"rgba(0, 0, 0, 0)"},series:[{name:"ID 34-842 AVG",type:"line",showSymbol:!1}]};(a=c||(c={})).line="line",a.scatter="scatter";let K={dark:{seriesColors:["rgba(153, 250, 255, .8)"],gradiantPrimary:"rgba(153, 250, 255, .08)",gradiantSecondary:"rgba(153, 250, 255, .01)",tooltip:"#181923"},light:{seriesColors:["rgba(0, 0, 0, .6)"],gradiantPrimary:"rgba(0, 0, 0, .2)",gradiantSecondary:"rgba(0, 0, 0, .01)",tooltip:"#f7f7f7"}},Y=(e,i)=>{var l,a;let t={tooltip:{show:!0,trigger:"axis",backgroundColor:K[e].tooltip,borderRadius:0}},n=null!==(a=localStorage.getItem("chart-type"))&&void 0!==a?a:c.line,s={color:K[e].seriesColors,type:"scatter",symbolSize:5},r={color:K[e].seriesColors,type:"line",showSymbol:!1,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:K[e].gradiantPrimary},{offset:1,color:K[e].gradiantSecondary}]},origin:"start",opacity:.62}};return n===c.line&&(t.series=[{...r}]),n===c.scatter&&(t.series=[{...s}]),(null===(l=t.series)||void 0===l?void 0:l[0])&&i&&(t.series[0].data=i),t},J=e=>{let{dataLength:i}=e,[l,a]=(0,m.useState)(),t=(0,m.useRef)(A()()),n=(0,m.useRef)(200*Math.random()),s=()=>(t.current=t.current.add(1,"second"),n.current=n.current+21*Math.random()-10,{name:t.current.toString(),value:[t.current.toISOString(),Math.round(n.current)]});return(0,m.useEffect)(()=>{t.current=t.current.subtract(i,"seconds");let e=[...Array(i)].map(()=>s());a(e);let l=setInterval(()=>{let e=s();(0,m.startTransition)(()=>{a(i=>{if(i){let[,...l]=i;return[...l,e]}return[e]})})},1e3);return()=>{clearInterval(l)}},[]),{chartData:l}};var Q=l(8047);let ee=e=>{let{option:i,style:l,settings:a,loading:t,theme:n}=e,s=(0,m.useRef)(null);return(0,m.useEffect)(()=>{let e;null!==s.current&&(e=(0,Q.S1)(s.current,n));let i=()=>{null==e||e.resize()};return window.addEventListener("resize",i),()=>{null==e||e.dispose(),window.removeEventListener("resize",i)}},[n]),(0,m.useEffect)(()=>{if(null!==s.current){let e=(0,Q.JE)(s.current);null==e||e.setOption(i,a)}},[i,a,n]),(0,m.useEffect)(()=>{if(null!==s.current){let e=(0,Q.JE)(s.current);!0===t?null==e||e.showLoading():null==e||e.hideLoading()}},[t,n]),(0,u.jsx)(g.xu,{ref:s,css:{...l}})},ei=e=>{let{color:i,css:l,size:a=14,scale:t=.38}=e;return(0,u.jsx)(g.xu,{as:"svg",css:{fill:"$".concat(i),width:a,height:a,...l},children:(0,u.jsx)(g.xu,{as:"path",d:"M20 60h10l6.667-16.667L50 76.666 65 50l5 10h10v-6.666h-5.879l-8.776-17.549L51.016 61.26 36.667 23.333 25.488 53.334H20z",css:{fill:"$".concat(i),scale:t}})})},el=e=>{let{color:i,css:l,width:a,height:t,scale:n=.5}=e;return(0,u.jsxs)(g.xu,{as:"svg",css:{scale:n,fill:"$".concat(i),width:a,height:t,...l},children:[(0,u.jsx)("title",{children:"Scatter icon"}),(0,u.jsx)(g.xu,{as:"path",d:"M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"circle",cx:"10",cy:"22",r:"2",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"circle",cx:"14",cy:"15",r:"2",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"circle",cx:"22",cy:"15",r:"2",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"circle",cx:"26",cy:"6",r:"2",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"circle",cx:"14",cy:"8",r:"2",css:{fill:"$".concat(i),scale:n}}),(0,u.jsx)(g.xu,{as:"rect",css:{fill:"none",scale:n}})]})},ea=()=>{let{chartData:e}=J({dataLength:100}),i=(0,m.useRef)(),[l,a]=(0,m.useState)(q),{resolvedTheme:t="dark"}=(0,C.F)();(0,m.useEffect)(()=>{s()},[t]),(0,m.useEffect)(()=>{(null==e?void 0:e.length)&&a({series:[{data:e}]})},[e]);let n=e=>{localStorage.setItem("chart-type",e),s()},s=()=>{var e;let l=Y(t);i.current=null===(e=l.series)||void 0===e?void 0:e[0].type,a(l)};return(0,u.jsxs)(es,{children:[(0,u.jsxs)(er,{children:[(0,u.jsxs)(ec,{children:[(0,u.jsxs)(eo,{children:[(0,u.jsx)(G.x,{size:3,color:"gray8",padding:"tiny",children:"ID 255212"}),(0,u.jsx)(G.x,{size:3,color:"gray8",padding:"tiny",children:"DATA SET: POLARIS "})]}),(0,u.jsx)(eo,{align:"right",children:(0,u.jsxs)(en,{children:[(0,u.jsx)(et,{variant:i.current===c.scatter?"active":void 0,onClick:()=>n(c.scatter),children:(0,u.jsx)(el,{color:"cyan1",scale:.7,width:20,height:28})}),(0,u.jsx)(et,{variant:i.current===c.line?"active":void 0,onClick:()=>n(c.line),children:(0,u.jsx)(ei,{color:"cyan1",scale:.22,size:22})})]})})]}),(0,u.jsxs)(ec,{children:[(0,u.jsxs)(eo,{children:[(0,u.jsx)(G.x,{size:3,color:"gray8",padding:"tiny",children:"SAMPLE HEALTH: OK"}),(0,u.jsxs)(G.x,{background:"cyan1",size:3,color:"gray1",padding:"tiny",children:["CURRENT STREAM: ",null==e?void 0:e.slice(-1)[0].value.join(": ")]})]}),(0,u.jsxs)(eo,{align:"right",children:[(0,u.jsx)(G.x,{size:3,color:"gray8",padding:"tiny",children:"APACHE ECHARTS"}),(0,u.jsx)(G.x,{size:3,color:"gray8",padding:"tiny",children:"5.4.1 "})]})]})]}),(0,u.jsx)(ee,{option:l,style:{height:"100%",minWidth:"500px","@bp570":{minWidth:"200px"}}})]})},et=(0,j.zo)("button",{border:0,background:"$cyan13",cursor:"pointer",fontFamily:"inherit",fontSize:"$fontSizes$6",transition:"150ms",whiteSpace:"nowrap",color:"$cyan1",height:"24px","&:active":{opacity:.8},variants:{variant:{active:{background:"$cyan9",color:"$cyan1"}}}}),en=(0,j.zo)("div",{display:"flex",flexDirection:"row"}),es=(0,j.zo)("div",{position:"relative",background:"$cyan14",height:300}),er=(0,j.zo)("div",{position:"absolute",top:0,bottom:0,right:0,left:0,padding:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"}),ec=(0,j.zo)("div",{display:"flex",justifyContent:"space-between"}),eo=(0,j.zo)("div",{display:"flex",flexDirection:"column",gap:"3px",zIndex:1,variants:{align:{right:{alignItems:"flex-end"}}}}),ed=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(F.x,{color:"cyan14",size:"max",height:20,children:(0,u.jsxs)(g.xu,{css:{display:"flex",justifyContent:"space-between"},children:[(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"HEALTH "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"MONITOR"})]}),(0,u.jsxs)(ex,{children:[(0,u.jsx)(g.xv,{size:"5",color:"gray8",weight:3,children:"LIVE FEED"}),(0,u.jsx)(N,{})]})]})}),(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsx)(v.Z,{}),(0,u.jsx)(ea,{})]}),(0,u.jsx)(v.Z,{})]}),ex=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:"6px",alignItems:"center"}),eh=e=>{let{percent:i,backgroundColor:l,filledColor:a,height:t}=e;return(0,u.jsx)(eu,{css:{backgroundColor:l,height:t},children:(0,u.jsx)(ep,{css:{width:"".concat(i,"%"),backgroundColor:a}})})};eh.defaultProps={height:"6px",backgroundColor:"$cyan9",filledColor:"$cyan1",percent:0};let eu=(0,j.zo)("div",{width:"100%",backgroundColor:"$cyan9",borderRadius:"10px"}),ep=(0,j.zo)("div",{height:"100%",borderRadius:"10px",transition:"width 350ms ease-out"}),ey=()=>{let e=R({minValue:0,maxValue:100,updateInterval:2e3,multiplyAdd:6}),i=R({minValue:0,maxValue:100,updateInterval:2e3,multiplyAdd:6});return(0,u.jsx)(eg,{children:(0,u.jsxs)(v.Z,{children:[(0,u.jsxs)(ej,{children:[(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsxs)(ev,{children:[(0,u.jsx)(em,{}),(0,u.jsx)(g.xv,{weight:"3",size:4,color:"cyanLight1",children:"IDX_21321_LOAD"}),(0,u.jsx)(eh,{percent:e})]}),(0,u.jsx)(g.xu,{}),(0,u.jsxs)(ev,{children:[(0,u.jsx)(em,{color:"orange1"}),(0,u.jsx)(g.xv,{weight:"3",size:4,color:"cyanLight1",children:"IDX_75322_THRE"}),(0,u.jsx)(eh,{percent:i,filledColor:"$orange1"})]}),(0,u.jsx)(g.xu,{css:{height:5}})]}),(0,u.jsx)(v.Z,{})]})})},eg=(0,j.zo)("div",{minWidth:"250px"}),ej=(0,j.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"space-between",background:"$cyan14",height:"60px",paddingLeft:"10px",paddingRight:"10px"}),ev=(0,j.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}),em=(0,j.zo)("div",{height:"8px",width:"8px",backgroundColor:"$cyan1",borderRadius:"50%",variants:{color:{orange1:{backgroundColor:"$orange1"}}}});var ef=l(458);let eb=e=>{let{data:i}=e;return(0,u.jsx)(ez,{children:(0,u.jsx)(g.iA,{size:"1",width:"max",children:(0,u.jsx)(g.RM,{children:i.map(e=>{var i,l,a;let t="".concat(null!==(i=e.id)&&void 0!==i?i:e.label,"-").concat(e.value,"-").concat(e.unit);return(0,u.jsxs)(g.SC,{animation:"flash",children:[(0,u.jsx)(g.pj,{children:"string"==typeof e.label?(0,u.jsx)(g.xv,{size:"4",color:"gray10",children:e.label}):e.label}),(0,u.jsx)(g.pj,{children:"string"==typeof e.label?(0,u.jsx)(g.xv,{size:"4",color:null!==(l=e.valueColor)&&void 0!==l?l:"cyan1",children:e.value}):e.value}),(0,u.jsx)(g.pj,{children:(0,u.jsx)(g.xv,{size:"4",color:"gray10",children:null!==(a=e.unit)&&void 0!==a?a:"- -"})})]},t)})})})})};eb.defaultProps={};let ez=(0,ef.zo)("div",{}),ew=()=>{let e=R({minValue:150,maxValue:190,updateInterval:8400,multiplyAdd:4}),i=R({minValue:25,maxValue:50,updateInterval:10200,multiplyAdd:3}),l=R({minValue:73,maxValue:97,updateInterval:12050,multiplyAdd:3}),a=R({minValue:40,maxValue:70,updateInterval:10900,digits:0,multiplyAdd:3}),t=R({minValue:40,maxValue:70,updateInterval:16150,digits:0,multiplyAdd:3}),n=R({minValue:620,maxValue:800,updateInterval:19e3,multiplyAdd:8}),s=R({minValue:14,maxValue:25,updateInterval:11200,multiplyAdd:2}),r=R({minValue:50,maxValue:60,updateInterval:10550,multiplyAdd:2}),c=R({minValue:100,maxValue:126,updateInterval:8888,multiplyAdd:3});return(0,u.jsxs)(eE,{children:[(0,u.jsx)(v.Z,{}),(0,u.jsx)(eb,{data:[{label:"CORE_TEMP_AVG",value:e,unit:"\xb0F"},{label:"CORE_THRE_AVG",value:i,unit:"%"},{label:"CORE_LOAD_MAX",value:l,unit:"%"},{label:"CACHE_LAT",value:a,unit:"ms"},{label:"DRAM_LAT",value:t,unit:"ms"},{label:"WATER_PUMP_SP",value:n,unit:"rpm"},{label:"YAW_AXIS_DEG",value:s,unit:"\xb0c"},{label:"YAW_AXIS_VEL",value:r,unit:"deg/s"},{label:"CURR_OUTPUT",value:c,valueColor:"orange1",unit:"w"},{label:"MAX_OUTPUT",value:"13931",unit:"w"}]})]})},eE=(0,j.zo)("div",{background:"$cyan14",display:"flex",flexDirection:"column"}),eA=()=>{let e=R({minValue:1100,maxValue:1400,updateInterval:7e3,multiplyAdd:6}),i=R({minValue:60,maxValue:75,updateInterval:1e4,multiplyAdd:3}),l=R({minValue:250,maxValue:300,updateInterval:5e3,multiplyAdd:4}),a=R({minValue:5122,maxValue:1e4,updateInterval:6e3,multiplyAdd:8}),t=R({minValue:80,maxValue:90,updateInterval:6500,digits:1,multiplyAdd:4}),n=R({minValue:41,maxValue:48,updateInterval:15e3,digits:1,multiplyAdd:4}),s=R({minValue:78,maxValue:85,updateInterval:5500,multiplyAdd:4});return(0,u.jsxs)(eC,{children:[(0,u.jsx)(v.Z,{}),(0,u.jsx)(eb,{data:[{label:"TOTAL_THREADS",value:"32"},{label:"FREQ_GOVERNOR",value:"convervative"},{label:"OUTPUT_RANGE",value:e,unit:"mw"},{label:"STEAM_PRESSURE",value:i,valueColor:"orange1",unit:"bar"},{label:"STEAM_TEMP",value:l,unit:"\xb0c"},{label:"TURBINE_SPEED",value:a,valueColor:"yellow1",unit:"rpm"},{label:"TURBINE_VIBR",value:n,unit:"hz"},{label:"TURBINE_HOTSPOT",value:t,unit:"\xb0c"},{label:"MAIN_BEARING_TEMP",value:s,valueColor:"orange1",unit:"\xb0c"},{label:"TOTAL_PWR",value:"13931",unit:"mWh"},{label:"UPTIME",value:"1",unit:"days"}]})]})},eC=(0,j.zo)("div",{background:"$cyan14",display:"flex",flexDirection:"column"}),eS=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(g.xT,{color:"cyan14",size:"max",children:(0,u.jsx)(g.xu,{css:{display:"flex",justifyContent:"space-between"},children:(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"RUNTIME  "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"METRICS"})]})})}),(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsx)(ey,{}),(0,u.jsx)(g.xu,{css:{height:30}}),(0,u.jsxs)(eI,{children:[(0,u.jsx)(ew,{}),(0,u.jsx)(eA,{})]})]}),(0,u.jsx)(v.Z,{})]}),eI=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:"30px","@bp570":{gap:"10px"},"& > *":{flex:1}});(t=o||(o={}))[t.high=3]="high",t[t.medium=2]="medium",t[t.low=1]="low";let eV={[o.low]:"cyan1",[o.medium]:"yellow1",[o.high]:"red1"},eT=e=>{let{data:i,highlightSeverity:l}=e;return(0,u.jsx)(v.Z,{children:(0,u.jsx)(eR,{children:(0,u.jsx)(g.iA,{borderColor:"cyan1",backgroundColor:"cyan11",children:(0,u.jsx)(g.RM,{children:i.map((e,i)=>(0,u.jsx)(g.SC,{children:e.map((e,i)=>(0,u.jsx)(g.pj,{size:"1",backgroundColor:"rootBackground",align:"center",children:(0,u.jsxs)(e$,{children:[e.isActive&&(0,u.jsx)(ek,{background:e.severity?eV[e.severity]:void 0}),l&&(0,u.jsx)(eM,{animation:e.severity===l?"scale":void 0,css:{animationDelay:"".concat(5*i,"0ms")}})]})},"".concat(i,"datagridrowcell")))},"".concat(i,"datagridrow")))})})})})},eR=(0,j.zo)("div",{height:"120px"}),e$=(0,j.zo)("div",{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}),eD=(0,ef.F4)({"0%":{opacity:1},"50%":{opacity:1},"100%":{opacity:0}}),eM=(0,j.zo)("div",{position:"absolute",opacity:0,border:"1.7px solid $cyan8Opaque",background:"$cyan12",left:"-1px",right:"-1px",height:"17.5px",variants:{animation:{scale:{animation:"".concat(eD," 2000ms ease-out infinite 0s;")}},visibility:{hide:{display:"none"}}}}),ek=(0,j.zo)("div",{background:"$cyan1",width:"4px",height:"4px",borderRadius:"50%",zIndex:1,variants:{background:{cyan1:{background:"$cyan1"},yellow1:{background:"$yellow1"},red1:{background:"$red1"}}}}),eO=e=>{let{color:i,css:l,size:a=24,scale:t=.38}=e;return(0,u.jsxs)(g.xu,{as:"svg",css:{fill:"$".concat(i),width:a,height:a,...l},children:[(0,u.jsx)(g.xu,{as:"path",d:"M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z",css:{fill:"$".concat(i),scale:t}}),(0,u.jsx)(g.xu,{as:"path",d:"M11 10h2v5h-2zm0 6h2v2h-2z",css:{fill:"$".concat(i),scale:t}})]})},e_=e=>{let{color:i,css:l,size:a=14,scale:t=.38}=e;return(0,u.jsx)(g.xu,{as:"svg",css:{fill:"$".concat(i),width:a,height:a,...l},children:(0,u.jsx)(g.xu,{as:"path",d:"M13 0H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H2V2h10zM31 0H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H20V2h10zm-17 6H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H2V20h10zm19-12H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H20V20h10z",css:{fill:"$".concat(i),scale:t}})})},eL=e=>{let{children:i,css:l,backgroundColor:a="cyan12",disableBackground:t=!1}=e;return(0,u.jsx)(eH,{children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(eP,{css:{...l,backgroundColor:t?void 0:"$".concat(a)},children:i}),(0,u.jsx)(v.Z,{})]})})};eL.defaultProps={};let eH=(0,j.zo)("div",{}),eP=(0,j.zo)("div",{width:"34px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}),eX=e=>{let{icon:i,title:l,data:a}=e;return(0,u.jsxs)(eN,{children:[(0,u.jsxs)(eW,{children:[(0,u.jsx)(eL,{children:i}),(0,u.jsxs)(v.Z,{css:{flex:1},onlyRight:!0,children:[(0,u.jsx)(eZ,{children:(0,u.jsx)(g.xv,{color:"gray12",size:"5",weight:3,children:l})}),(0,u.jsx)(v.Z,{onlyRight:!0})]})]}),a.map((e,i)=>(0,u.jsxs)(eU,{children:[(0,u.jsx)(g.xT,{color:"cyan12",size:"2",textAlign:"center",children:(0,u.jsx)(g.xv,{color:"cyan2",size:"5",weight:3,children:e.label})}),(0,u.jsx)(g.xT,{textAlign:"center",children:(0,u.jsx)(g.xv,{color:"gray12",size:"5",weight:3,children:e.value})})]},"".concat(e.label,":").concat(e.value,":").concat(i)))]})};eX.defaultProps={};let eN=(0,j.zo)("div",{display:"flex",flexDirection:"column",minWidth:"calc($sizes$tileSize * 4)",gap:"8px"}),eW=(0,j.zo)("div",{display:"flex",height:"$sizes$tileSize",alignItems:"center",background:"$cyan12"}),eZ=(0,j.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center",height:"$sizes$tileSize"}),eU=(0,j.zo)("div",{display:"flex",gap:"8px"}),eB=e=>{let{color:i,css:l,size:a=50,scale:t=1}=e;return(0,u.jsx)(g.xu,{as:"svg",css:{fill:"$".concat(i),width:a,height:a,...l},children:(0,u.jsx)(g.xu,{as:"path",d:"M8 9H7V0H5v9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v17h2V15h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM18 19h-1V0h-2v19h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v7h2v-7h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM28 7h-1V0h-2v7h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v19h2V13h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z",css:{fill:"$".concat(i),scale:t}})})},eF=()=>{let e=[];for(let i=0;i<6;i++){let i=[];for(let e=0;e<27;e++){let e=Math.random()>.75;i.push({isActive:e,severity:e?(0,I.sample)([o.low,o.medium,o.high]):void 0})}e.push(i)}return e},eG=()=>{let[e,i]=(0,m.useState)([]),[l,a]=(0,m.useState)(o.high);(0,m.useEffect)(()=>{i(eF())},[]);let t=e.reduce((e,i)=>e+i.filter(e=>e.severity===o.high).length,0),n=[{label:"SYS",value:e.reduce((e,i)=>e+i.length,0)},{label:"AVG",value:99}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(g.xT,{color:"cyan14",size:"max",height:20,children:(0,u.jsx)(g.xu,{css:{display:"flex",alignItems:"center"},children:(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"ACTIVE "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"NODES"})]})})}),(0,u.jsx)(g.xu,{css:{height:8}}),(0,u.jsxs)(eq,{children:[(0,u.jsxs)(g.xT,{color:"cyan14",size:"max",children:[(0,u.jsx)(g.xv,{size:"4",color:"cyanLight1",weight:2,children:"SOCKET_CONN: "}),(0,u.jsx)(g.xv,{size:"4",color:"yellow1",weight:2,children:"OK"})]}),(0,u.jsxs)(g.xT,{color:"cyan14",size:"max",children:[(0,u.jsx)(g.xv,{size:"4",color:"cyanLight1",weight:2,children:"LOCATION: "}),(0,u.jsx)(g.xv,{size:"4",color:"yellow1",weight:2,children:"US-WEST_2"})]}),(0,u.jsxs)(g.xT,{color:"cyan14",size:"max",children:[(0,u.jsx)(g.xv,{size:"4",color:"cyanLight1",weight:2,children:"AUTH_STATUS: "}),(0,u.jsx)(g.xv,{size:"4",color:"yellow1",weight:2,children:"OK"})]})]}),(0,u.jsx)(g.xu,{css:{height:18}}),(0,u.jsxs)(eJ,{children:[(0,u.jsx)(eX,{data:n,icon:(0,u.jsx)(e_,{color:"cyan1",scale:.5,size:16}),title:"NODES"}),(0,u.jsx)(eX,{data:[{label:"DIA",value:"OK"},{label:"%",value:"97%"}],icon:(0,u.jsx)(ei,{color:"cyan1",scale:.3,size:29}),title:"ACTIVE"}),(0,u.jsx)(eX,{data:[{label:"HIGH",value:t},{label:"AVG",value:"- -"}],icon:(0,u.jsx)(eO,{color:"cyan1",scale:.9,size:21}),title:"ALARMS"})]}),(0,u.jsx)(g.xu,{css:{height:20}}),(0,u.jsx)(eT,{data:e,highlightSeverity:l}),(0,u.jsx)(g.xu,{css:{height:17}}),(0,u.jsxs)(eK,{children:[(0,u.jsx)(eY,{children:(0,u.jsx)(eB,{color:"cyanLight1",scale:.55,size:16})}),(0,u.jsx)(g.zx,{type:l?"secondary":"primary",onClick:()=>a(void 0),weight:3,fontSize:"6",size:{"@bp570":"s"},children:"RESET"}),(0,u.jsx)(g.zx,{type:l===o.low?"primary":"secondary",onClick:()=>a(o.low),weight:3,fontSize:"6",size:{"@bp570":"s"},children:"LOW_SEV"}),(0,u.jsx)(g.zx,{type:l===o.medium?"primary":"secondary",onClick:()=>a(o.medium),weight:3,fontSize:"6",size:{"@bp570":"s"},children:"MED_SEV"}),(0,u.jsx)(g.zx,{type:l===o.high?"primary":"secondary",onClick:()=>a(o.high),weight:3,fontSize:"6",size:{"@bp570":"s"},children:"HIGH_SEV"})]})]}),(0,u.jsx)(v.Z,{})]})},eq=(0,j.zo)("div",{display:"flex",gap:"15px"}),eK=(0,j.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"}),eY=(0,j.zo)("div",{width:"58px",height:"24px",display:"flex",justifyContent:"center",background:"$cyan12",alignItems:"center"}),eJ=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:"15px"});var eQ=l(3952);(n=d||(d={})).orange="orange",n.cyan="cyan";let e0={orange:{normal:"orange1",dark:"orange3",label:"cyan9"},cyan:{normal:"cyan1",dark:"cyan6",label:"cyan9"}},e1=e=>{let{firstMetric:i,secondMetric:l,color:a}=e,[t,n]=(0,m.useState)(!1);return(0,u.jsxs)(e2,{children:[(0,u.jsx)(e3,{children:(0,u.jsxs)(e5,{children:[(0,u.jsx)(g.j$,{size:"13",color:t?e0[a].dark:e0[a].normal,children:i.value}),(0,u.jsx)(g.j$,{size:"8",color:e0[a].label,children:i.label})]})}),(0,u.jsx)(e3,{css:{width:5}}),(0,u.jsx)(g.j$,{size:"13",color:e0[a].normal,children:"/"}),(0,u.jsx)(e3,{css:{width:5}}),(0,u.jsx)(e3,{children:(0,u.jsxs)(e5,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,u.jsx)(g.j$,{size:"13",color:t?e0[a].normal:e0[a].dark,children:l.value}),(0,u.jsx)(g.j$,{size:"8",color:e0[a].label,children:l.label})]})})]})};e1.defaultProps={};let e2=(0,j.zo)("div",{display:"flex",alignItems:"flex-start "}),e5=(0,j.zo)("div",{display:"flex",flexDirection:"column",gap:1}),e3=(0,j.zo)("div",{display:"inline-block"});(s=x||(x={})).orange="orange",s.cyan="cyan";let e4={cyan:{primary:"cyan1",secondary:"orange1",disabled:"cyan9"},orange:{primary:"orange1",secondary:"cyan1",disabled:"cyan9"}},e8=e=>{let{data:i}=e;return(0,u.jsx)(e9,{children:(0,u.jsx)(e7,{children:i.map((e,i)=>(0,u.jsx)(e6,{css:{background:"$".concat(e4[e.color][e.state])}},"".concat(e.color,"-").concat(e.state,"-").concat(i)))})})},e9=(0,j.zo)("div",{flex:1}),e6=(0,j.zo)("div",{height:4,flex:1,background:"$cyan1"}),e7=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:"8px"});(r=h||(h={})).EVC="EVC",r.AXH="AXH",r.ERR="ERR",r.OBX="OBX",r.DCX="DCX",r.CTA="CTA";let ie={[h.EVC]:{variant:"primary"},[h.AXH]:{variant:"cyanSecondary"},[h.ERR]:{variant:"orangePrimary"},[h.OBX]:{variant:"yellowSecondary"},[h.DCX]:{variant:"secondary"},[h.CTA]:{variant:"cyanPrimary"}},ii=e=>{let{data:i}=e;return(0,u.jsx)(il,{children:(0,u.jsx)(is,{children:null==i?void 0:i.map((e,i)=>(0,u.jsx)(it,{children:e.map((e,i)=>(0,u.jsx)(ia,{variant:ie[e].variant,children:(0,u.jsxs)(g.xv,{size:"4",weight:3,children:[e," - MC1"]})},"".concat(e,"-MC").concat(i)))},"".concat(e.toString(),"-").concat(i)))})})},il=(0,j.zo)("div",{maxWidth:"calc($sizes$tileSize * 9)",opacity:.9}),ia=(0,j.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",width:58,"@bp570":{width:48},alignItems:"center",flexWrap:"wrap",height:17,["& ".concat(g.xv)]:{fontFamily:"$fonts$petch",fontSize:9},variants:{variant:{primary:{background:"unset"},secondary:{background:"$cyan10"},cyanPrimary:{background:"$cyan8",["& ".concat(g.xv)]:{color:"$cyan1"}},cyanSecondary:{["& ".concat(g.xv)]:{color:"$cyan1"}},orangePrimary:{["& ".concat(g.xv)]:{color:"$orange1"}},yellowSecondary:{["& ".concat(g.xv)]:{color:"$yellow1"}}}}}),it=(0,j.zo)("div",{display:"flex",gap:8,justifyContent:"space-between"}),is=(0,j.zo)("div",{display:"flex",flexDirection:"column"}),ir=e=>{let{alarm:i}=e;return(0,u.jsx)(g.xu,{children:(0,u.jsxs)(ic,{children:[(0,u.jsxs)(io,{children:[(0,u.jsxs)(ih,{children:[(0,u.jsxs)(id,{children:[(0,u.jsx)(v.Z,{onlyLeft:!0,children:(0,u.jsx)(iu,{children:(0,u.jsx)(eO,{color:"red1",scale:.9,size:21})})}),(0,u.jsxs)(ix,{children:[(0,u.jsxs)(g.j$,{color:"yellow1",size:"4",weight:"4",children:["ID: ",i.id]}),(0,u.jsx)(g.xu,{css:{height:4}}),(0,u.jsx)(g.j$,{color:"gray12",size:{"@initial":"6","@bp570":"4"},weight:"4",children:i.label})]})]}),(0,u.jsx)(g.xu,{css:{height:6}}),(0,u.jsx)(g.xu,{children:(0,u.jsxs)(g.xv,{size:"5",color:"gray9",children:["DUE DATE:"," ",(0,u.jsx)(g.xv,{size:"5",color:"gray11",children:i.dueDate})]})}),(0,u.jsx)(g.xu,{css:{height:8}}),(0,u.jsx)(v.Z,{withHorizontalLine:!0})]}),(0,u.jsx)(iy,{children:(0,u.jsx)(ii,{data:i.unitCodeData})})]}),(0,u.jsxs)(ip,{title:i.description,children:[(0,u.jsxs)(g.xv,{size:"5",color:"gray9",children:["DESC: "," "]}),(0,u.jsx)(g.xv,{size:"5",color:"gray10",children:i.description})]})]})})},ic=(0,j.zo)("div",{display:"flex",flexDirection:"column",gap:"8px",background:"$cyan14",justifyContent:"center",padding:"0px 12px 0px 12px",height:"160px"}),io=(0,j.zo)("div",{display:"flex",justifyContent:"space-between",gap:8}),id=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:8}),ix=(0,j.zo)("div",{display:"flex",flexDirection:"column"}),ih=(0,j.zo)("div",{display:"flex",flexDirection:"column",flex:1}),iu=(0,j.zo)("div",{width:"34px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}),ip=(0,j.zo)("div",{height:"58px",overflow:"hidden"});(0,j.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"});let iy=(0,j.zo)("div",{padding:"0px 0px 0px 0px",display:"flex",justifyContent:"center",alignItems:"center"}),ig={id:42953,dueDate:"2023-12-28",label:"MAIN_BEARING_TEMP",description:"The main bearing temperature of the unit has exceeded the upper limit of the recommended range of operational standards. \nThese elevated temperatures may be due to a heated application, a recently greased bearing, oil level issues or early stages of bearing failure.",unitCodeData:[[h.EVC,h.CTA,h.ERR,h.EVC],[h.AXH,h.OBX,h.EVC,h.DCX],[h.ERR,h.EVC,h.ERR,h.AXH],[h.EVC,h.CTA,h.OBX,h.OBX]]},ij={id:42959,dueDate:"2024-01-28",label:"MAIN_BEARING_VIBR",description:"Increase in bearing vibration has been detected. Check vibration analysis in monitoring system. Possible root causes: \n(1) geometrical imperfections during the manufacturing process, (2) defects on the rolling surfaces, (3) geometrical errors in associated components.",unitCodeData:[[h.CTA,h.OBX,h.EVC,h.EVC],[h.EVC,h.AXH,h.AXH,h.ERR],[h.OBX,h.DCX,h.ERR,h.ERR],[h.EVC,h.AXH,h.CTA,h.OBX]]},iv={id:42969,dueDate:"2024-01-28",label:"HYDR_PUMP_AERATION",description:"Possible signs of aeration has been detected in the hydraulic system. Operating the system when air is present may \nresult in the pump being unable to reach the pressures required to operate the system. Check for (1) defective seals allowing air into the pump inlet line, (2) damaged inlet hoses and connections.",unitCodeData:[[h.OBX,h.EVC,h.ERR,h.OBX],[h.AXH,h.ERR,h.EVC,h.CTA],[h.DCX,h.DCX,h.EVC,h.EVC],[h.EVC,h.AXH,h.CTA,h.OBX]]},im=()=>{let e=[{color:x.cyan,state:"primary"},{color:x.cyan,state:"primary"},{color:x.cyan,state:"disabled"},{color:x.cyan,state:"disabled"}],i=[{color:x.cyan,state:"primary"},{color:x.cyan,state:"primary"},{color:x.cyan,state:"secondary"},{color:x.cyan,state:"disabled"}],l=[{color:x.cyan,state:"primary"},{color:x.cyan,state:"disabled"},{color:x.cyan,state:"disabled"},{color:x.cyan,state:"disabled"}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(g.xT,{color:"cyan14",size:"max",children:(0,u.jsx)(g.xu,{css:{display:"flex",alignItems:"center"},children:(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"ALARM "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"STATS"})]})})}),(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsxs)(v.Z,{onlyLeft:!0,children:[(0,u.jsxs)(iw,{children:[(0,u.jsx)(g.xv,{color:"gray12",size:"5",weight:3,children:"ONLINE "}),(0,u.jsx)(g.xv,{color:"gray12",size:"5",weight:3,children:"ALARMS "}),(0,u.jsx)(g.xv,{color:"gray12",size:"5",weight:3,children:"SLA "})]}),(0,u.jsx)(v.Z,{onlyLeft:!0}),(0,u.jsx)(g.xu,{css:{height:18}}),(0,u.jsxs)(ib,{children:[(0,u.jsx)(e1,{firstMetric:{value:102,label:"ACTIVE"},secondMetric:{value:109,label:"ALL"},color:d.cyan}),(0,u.jsx)(e1,{firstMetric:{value:14,label:"12H"},secondMetric:{value:23,label:"24H"},color:d.orange}),(0,u.jsx)(e1,{firstMetric:{value:99.4,label:"UPTIME"},secondMetric:{value:100,label:"- -"},color:d.orange})]}),(0,u.jsx)(g.xu,{css:{height:18}}),(0,u.jsxs)(iz,{children:[(0,u.jsx)(e8,{data:e}),(0,u.jsx)(e8,{data:i}),(0,u.jsx)(e8,{data:l})]})]}),(0,u.jsx)(g.xu,{css:{height:26}}),(0,u.jsx)(ir,{alarm:ig})]}),(0,u.jsx)(v.Z,{})]})},ib=(0,j.zo)("div",{display:"flex",justifyContent:"space-between"}),iz=(0,j.zo)("div",{display:"flex",flexDirection:"row",flex:1,gap:"40px",justifyContent:"space-between"}),iw=(0,j.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",textAlign:"center",height:"20px",background:"$cyan14"}),iE=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.mW,{children:[(0,u.jsx)(g.xT,{color:"cyan14",size:"max",children:(0,u.jsx)(g.xu,{css:{display:"flex",justifyContent:"space-between"},children:(0,u.jsxs)(g.xu,{children:[(0,u.jsx)(g.xv,{color:"cyan1",weight:2,children:"ALARM "}),(0,u.jsx)(g.xv,{color:"cyan1",weight:1,children:"LIST"})]})})}),(0,u.jsx)(g.xu,{css:{height:10}}),(0,u.jsxs)(iA,{children:[(0,u.jsx)(ir,{alarm:iv}),(0,u.jsx)(ir,{alarm:ij})]})]}),(0,u.jsx)(v.Z,{})]}),iA=(0,j.zo)("div",{height:"calc($sizes$tileSize * 10)",overflow:"auto",display:"flex",flexDirection:"column",gap:"30px"}),iC=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(y(),{children:[(0,u.jsx)("title",{children:"x7ci | Full Stack Developer"}),(0,u.jsx)("meta",{name:"description",content:"Private website built with React & TypeScript. For inquiries please go to the about section."}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,u.jsxs)(iI,{children:[(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(g.xT,{color:"cyan1",height:20,children:(0,u.jsx)(g.xv,{color:"gray1",weight:"2",children:"SAMPLE ANALYSIS"})})}),(0,u.jsx)(g.xu,{css:{height:20}}),(0,u.jsxs)(iV,{children:[(0,u.jsx)(g.xu,{css:{flex:1,maxWidth:600},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(P,{})})}),(0,u.jsx)(g.xu,{css:{flex:2,maxWidth:1200},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(ed,{})})}),(0,u.jsx)(g.xu,{css:{flex:2,maxWidth:800},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(eS,{})})}),(0,u.jsx)(g.xu,{css:{flex:2,minWidth:510,"@bp620":{minWidth:410},maxWidth:540},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(eG,{})})}),(0,u.jsx)(g.xu,{css:{flex:3,minWidth:510,"@bp620":{minWidth:410},maxWidth:540},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(im,{})})}),(0,u.jsx)(g.xu,{css:{flex:1,minWidth:510,"@bp620":{minWidth:410},maxWidth:750},children:(0,u.jsx)(eQ.Z,{children:(0,u.jsx)(iE,{})})})]})]})]});var iS=iC;let iI=(0,j.zo)("div",{display:"flex",flexDirection:"column"}),iV=(0,j.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})}},function(e){e.O(0,[201,807,774,888,179],function(){return e(e.s=1456)}),_N_E=e.O()}]);