(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4949)}])},4949:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return $e}});var t=r(5893),a=r(7294),l=r(3321),i=r(7948),o=r(6242),c=r(4267),u=r(2023),s=r(7957),d=r(9008),f=r(2293),h=r(155),p=r(5861),v=r(8298),g=r(4776),b=function(e){var n=(0,v.Z)();return(0,t.jsx)(g.Z,{appear:!1,direction:"down",in:!n,children:e.children})},m=function(){return(0,t.jsxs)(d.default,{children:[(0,t.jsx)("title",{children:"FF Image Clip"}),(0,t.jsx)("meta",{name:"description",content:"ff14\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u304a\u624b\u8efd\u306b\u52a0\u5de5\u3059\u308b\u305f\u3081\u306eWeb\u30b5\u30fc\u30d3\u30b9"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},x=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(f.Z,{children:(0,t.jsx)(h.Z,{style:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(p.Z,{variant:"h5",component:"div",children:"FF Image Clip"})})})}),(0,t.jsx)(h.Z,{})]})},j=r(3044),C=function(e){var n=(0,a.useRef)(null),r=(0,a.useCallback)((function(r){if(r.target.files&&!(r.target.files.length<1)){var t=new FileReader,a=r.target.files[0];t.readAsDataURL(a),t.onload=function(){if(t.result){var r=t.result;e.onLoadFile(r,a.name)}n&&n.current&&(n.current.value="")}}}),[e]);return{ref:n,onChange:r}},y=function(e){var n=C({onLoadFile:e.onLoadFile}),r=n.ref,a=n.onChange;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{variant:"outlined",onClick:function(){var e;null===(e=r.current)||void 0===e||e.click()},endIcon:(0,t.jsx)(j.Z,{}),children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),(0,t.jsx)("input",{style:{display:"none"},type:"file",accept:".jpg,.jpeg,.png",onChange:a,ref:r})]})},S=r(5113),Z=r(6693);function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(e){var n=C({onLoadFile:e.onLoadFile}),r=n.ref,l=n.onChange;return(0,a.useEffect)((function(){var e=function(e){return e.preventDefault()},n=function(e){return e.preventDefault()};return document.addEventListener("dragover",e,!1),document.addEventListener("drop",n,!1),function(){document.removeEventListener("dragover",e),document.removeEventListener("drop",n)}}),[]),(0,t.jsxs)(S.Z,{variant:"outlined",onClick:function(){var e;null===(e=r.current)||void 0===e||e.click()},onDrop:function(n){n.preventDefault();var t=n.dataTransfer,a=k(Array.from(t.files).filter((function(e){return e.type.includes("image/jpeg")||e.type.includes("image/png")})),1)[0],l=new FileReader;l.onload=function(){if(l.result){var n=l.result;e.onLoadFile(n,a.name)}r&&r.current&&(r.current.value=""),r.current&&(r.current.value="")},l.readAsDataURL(a)},onDragOver:function(e){e.dataTransfer.types&&Array.from(e.dataTransfer.types).includes("Files")&&(e.dataTransfer.dropEffect="copy",e.preventDefault())},sx:{backgroundColor:"transparent",width:"100%",minHeight:"200px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(Z.Z,{}),(0,t.jsx)(p.Z,{variant:"h6",component:"div",children:"\u753b\u50cf\u3092\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3067\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),(0,t.jsx)("input",{style:{display:"none"},type:"file",accept:".jpg,.jpeg,.png",onChange:l,ref:r})]})},F="(C) SQUARE ENIX CO., LTD. All Rights Reserved.",A=!1,R=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(x,{}),(0,t.jsx)(i.Z,{sx:{my:2},children:(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(c.Z,{children:[e.file&&(0,t.jsx)("img",{src:e.file,style:{maxWidth:"100%"}}),!e.file&&(0,t.jsx)(w,{onLoadFile:e.onLoadFile})]}),(0,t.jsxs)(u.Z,{sx:{pt:0,pl:2,pr:2,pb:2},children:[(0,t.jsx)(y,{onLoadFile:e.onLoadFile}),e.file&&(0,t.jsx)(l.Z,{variant:"contained",onClick:e.onEdit,endIcon:(0,t.jsx)(s.Z,{}),children:"\u7de8\u96c6"})]})]})}),(0,t.jsx)("footer",{style:{padding:"0 1em"},children:F})]})]})},P=r(2777),D=r(1296),B=r.n(D),I=r(7357),E=r(7720),L=r(6447),M=r(3946),U=r(724),W=r(3441),T=r(1703),N=r(44),z=r(7952),_=r(7361),X=r(2096),Y=r(2440),H=r(2804);function V(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function J(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){V(e,n,r[n])}))}return e}var $=(0,H.cn)({key:"editUIState",default:{openModalFlag:!1,cropFlag:!1,cropState:"none",copyrightFlag:!1}}),G=function(){return(0,H.sJ)($)},K=function(){var e=(0,H.Zl)($);return{openModal:function(){return e((function(e){return J({},e,{openModalFlag:!0})}))},closeModal:function(){return e((function(e){return J({},e,{openModalFlag:!1})}))},cropStart:function(){var n="start";return e((function(e){return J({},e,{cropFlag:true,cropState:n})})),{cropFlag:true,cropState:n}},cropDone:function(){return e((function(e){return J({},e,{cropFlag:!0,cropState:"done"})})),{cropFlag:!0,cropState:"done"}},cropRemove:function(n){return e((function(e){return e.cropFlag?(n({state:"none",cropFlag:!1}),J({},e,{cropFlag:!1,cropState:"none"})):e}))},copyrightOn:function(){return e((function(e){return J({},e,{copyrightFlag:!0})}))},copyrightOff:function(){return e((function(e){return J({},e,{copyrightFlag:!1})}))}}};function Q(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Q(e,n,r[n])}))}return e}var ee=function(e){K().cropRemove;var n=(0,a.useState)({right:"2em",bottom:"2em"}),r=n[0],i=n[1],o=(0,a.useState)(0),c=o[0],u=o[1],s=(0,a.useCallback)((function(e){var n=q({},r);switch(e){case"left":n.left="1em",delete n.right;break;case"right":n.right="1em",delete n.left;break;case"up":n.top="72px",delete n.bottom;break;case"down":n.bottom="1em",delete n.top}i(n)}),[r]),d=(0,a.useCallback)((function(e,n){u(n)}),[]);return(0,t.jsx)(I.Z,{sx:q({},r,{position:"absolute",minWidth:"400px"}),children:(0,t.jsxs)(S.Z,{elevation:4,sx:{p:2,borderRadius:"16px"},children:[e.thumb,(0,t.jsxs)(L.Z,{spacing:2,divider:(0,t.jsx)(E.Z,{flexItem:!0}),children:[(0,t.jsxs)(L.Z,{spacing:1,children:[(0,t.jsxs)(L.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(M.Z,{onClick:function(){return s("left")},children:(0,t.jsx)(z.Z,{})}),(0,t.jsx)(M.Z,{onClick:function(){return s("up")},children:(0,t.jsx)(_.Z,{})}),(0,t.jsx)(M.Z,{onClick:function(){return s("down")},children:(0,t.jsx)(X.Z,{})}),(0,t.jsx)(M.Z,{onClick:function(){return s("right")},children:(0,t.jsx)(Y.Z,{})})]}),(0,t.jsxs)(L.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(l.Z,{variant:"outlined",onClick:e.handleOnDownload,startIcon:(0,t.jsx)(W.Z,{}),children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),(0,t.jsx)(l.Z,{variant:"outlined",onClick:e.handleOnCancel,startIcon:(0,t.jsx)(U.Z,{}),children:"\u623b\u308b"})]})]}),(0,t.jsxs)(L.Z,{children:[(0,t.jsx)(I.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,t.jsxs)(T.Z,{value:c,onChange:d,"aria-label":"basic tabs example",children:[(0,t.jsx)(N.Z,{label:"\u8868\u793a",id:"menu-tab-0","aria-controls":"menu-tabpanel-0"}),(0,t.jsx)(N.Z,{label:"\u7de8\u96c6",id:"menu-tab-1","aria-controls":"menu-tabpanel-1"})]})}),(0,t.jsx)(I.Z,{hidden:0!==c,id:"menu-tabpanel-0","aria-labelledby":"menu-tab-0",sx:{pt:2,pr:1,pl:1},children:e.defaultPanel}),(0,t.jsx)(I.Z,{hidden:1!==c,id:"menu-tabpanel-1","aria-labelledby":"menu-tab-1",sx:{pt:2,pr:1,pl:1},children:e.editPanel})]}),(0,t.jsx)(L.Z,{children:(0,t.jsx)("footer",{style:{fontSize:"0.7em"},children:F})})]})]})})},ne=r(3473),re=r(9653),te=r(9411),ae=r(6886),le=r(89),ie=r(6540),oe=r(4895),ce=function(e){var n=(0,a.useMemo)((function(){return e.value}),[e.value]),r=(0,a.useCallback)((function(n,r){var t=r;t<e.min?e.handleSliderChange(e.min):t>e.max?e.handleSliderChange(e.max):e.handleSliderChange(t)}),[e]),l=(0,a.useCallback)((function(n){if(""!==n.target.value){var r=Number(n.target.value);r<e.min?e.handleSliderChange(e.min):e.handleSliderChange(r)}else e.handleSliderChange(e.max)}),[e]),i=(0,a.useCallback)((function(){e.value<e.min?e.handleSliderChange(e.min):e.value>e.max&&e.handleSliderChange(e.max)}),[e]),o=(0,a.useCallback)((function(){var n=e.value+e.sliderStep>e.max?e.max:e.value+e.sliderStep;e.handleSliderChange(n)}),[e]),c=(0,a.useCallback)((function(){var n=e.value-e.sliderStep<e.min?e.min:e.value-e.sliderStep;e.handleSliderChange(n)}),[e]);return(0,t.jsxs)(ae.ZP,{container:!0,children:[e.title&&(0,t.jsx)(ae.ZP,{item:!0,xs:!0,children:(0,t.jsx)(p.Z,{id:e.title,children:e.title})}),(0,t.jsxs)(ae.ZP,{item:!0,container:!0,spacing:2,alignItems:"center",children:[(0,t.jsx)(ae.ZP,{item:!0,xs:!0,children:(0,t.jsxs)(L.Z,{spacing:1,direction:"row",sx:{mb:1},alignItems:"center",children:[(0,t.jsx)(oe.Z,{onClick:c}),(0,t.jsx)(te.ZP,{disabled:e.disabled,value:n,min:e.min,max:e.max,step:e.sliderStep||1,valueLabelDisplay:"auto",onChange:r,"aria-labelledby":"input-slider"}),(0,t.jsx)(ie.Z,{onClick:o})]})}),(0,t.jsx)(ae.ZP,{item:!0,children:(0,t.jsx)(le.Z,{disabled:e.disabled,value:n,size:"small",onChange:l,onBlur:i,inputProps:{step:e.step,min:e.min,max:e.max,type:"number","aria-labelledby":e.title}})})]})]})};function ue(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function se(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function de(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){se(e,n,r[n])}))}return e}function fe(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ue(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var he=(0,H.cn)({key:"editState",default:{scale:100,rotate:0,copyrightFontSize:15,copyrightColor:"#FFFFFF",shape:[],shapeColor:"#000000",shapeOpacity:1,blur:[]}}),pe=function(){return(0,H.sJ)(he)},ve=function(e,n){return function(r){e((function(e){return de({},e,se({},n,fe(e[n]).concat([r])))}))}},ge=function(e,n){return function(r){e((function(e){return de({},e,se({},n,fe(e[n].slice(0,r)).concat(fe(e[n].slice(r+1)))))}))}},be=function(){var e=(0,H.Zl)(he);return{setScale:function(n){return e((function(e){return de({},e,{scale:n})}))},setRotate:function(n){return e((function(e){return de({},e,{rotate:n})}))},setCopyrightFontSize:function(n){return e((function(e){return de({},e,{copyrightFontSize:n})}))},setCopyrightColor:function(n){return e((function(e){return de({},e,{copyrightColor:n})}))},addBlur:ve(e,"blur"),removeBlur:ge(e,"blur"),addShape:ve(e,"shape"),removeShape:ge(e,"shape"),setShapeColor:function(n){return e((function(e){return de({},e,{shapeColor:n})}))},setShapeOpacity:function(n){return e((function(e){return de({},e,{shapeOpacity:n})}))}}},me=function(e){var n=(0,a.useRef)(B()((function(n){e.onChange&&e.onChange(n)}),100)),r=(0,a.useCallback)((function(e){n.current(e.currentTarget.value)}),[]);return(0,t.jsx)(le.Z,{disabled:e.disabled,type:"color",sx:{width:"2em",minWidth:"32px"},value:e.value,onChange:r})},xe=function(e){var n=pe(),r=n.scale,l=n.rotate,i=n.copyrightColor,o=n.copyrightFontSize,c=G().copyrightFlag,u=be(),s=u.setScale,d=u.setRotate,f=u.setCopyrightFontSize,h=u.setCopyrightColor,p=K(),v=p.copyrightOn,g=p.copyrightOff,b=p.cropRemove,m=(0,a.useCallback)((function(n){s(n),e.onChangeScale(n)}),[e,s]),x=(0,a.useCallback)((function(n){d(n),e.onChangeRotate(n),b(e.onChangeCrop)}),[b,e,d]),j=(0,a.useCallback)((function(n,r){r?v():g(),e.onChangeCopyright(r)}),[g,v,e]),C=(0,a.useCallback)((function(n){f(n),e.onChangeCopyrightFontSize(n)}),[e,f]),y=(0,a.useCallback)((function(n){h(n),e.onChangeCopyrightColor(n)}),[e,h]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ce,{title:"\u62e1\u5927/\u7e2e\u5c0f",value:r,min:1,max:100,sliderStep:10,step:1,handleSliderChange:m}),(0,t.jsx)(ce,{title:"\u56de\u8ee2",value:l,min:-180,max:180,sliderStep:45,step:1,handleSliderChange:x}),(0,t.jsxs)(I.Z,{children:[(0,t.jsxs)(L.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(ne.Z,{}),(0,t.jsx)(re.Z,{onChange:j}),(0,t.jsx)(me,{disabled:!c,value:i,onChange:y})]}),(0,t.jsx)(ce,{disabled:!c,value:o,min:0,max:50,sliderStep:1,step:1,handleSliderChange:C})]})]})},je=r(1048),Ce=r(55),ye=r(1733),Se=r(8462),Ze=r(7212),Oe=r(8619),ke=r(9334),we=function(){return window.crypto.randomUUID?window.crypto.randomUUID():"".concat(Math.random()*Number.MAX_VALUE)},Fe=function(e){var n=pe().blur,r=be(),l=r.addBlur,i=r.removeBlur,o=(0,a.useCallback)((function(){var n=we();l(n),e.handleOnBlur(n)}),[l,e]),c=(0,a.useCallback)((function(n,r){i(r),e.handleOnDeleteBlur(n,r)}),[e,i]);return(0,t.jsx)(L.Z,{direction:"row",spacing:1,children:(0,t.jsxs)(Se.Z,{children:[(0,t.jsx)(Oe.Z,{children:(0,t.jsx)(ke.Z,{primary:"\u307c\u304b\u3057\u8ffd\u52a0",onClick:o})}),n.map((function(n,r){return(0,t.jsx)(Ze.ZP,{dense:!0,secondaryAction:(0,t.jsx)(M.Z,{color:"primary",component:"span",onClick:function(){return c(n,r)},children:(0,t.jsx)(ye.Z,{})}),children:(0,t.jsx)(Oe.Z,{onClick:function(){return e.handleOnSelectBlur(n)},children:(0,t.jsx)(ke.Z,{primary:"\u307c\u304b\u3057 ".concat(r+1)})})},n)}))]})})},Ae=function(e){var n=pe(),r=n.shape,i=n.shapeColor,o=n.shapeOpacity,c=be(),u=c.addShape,s=c.removeShape,d=c.setShapeColor,f=c.setShapeOpacity,h=(0,a.useCallback)((function(){var n=we();u(n),e.handleOnAddShape(n,i)}),[u,e,i]),p=(0,a.useCallback)((function(n){d(n),e.handleOnChangeColorShape(n)}),[e,d]),v=(0,a.useCallback)((function(n,r){s(r),e.handleOnDeleteShape(n,r)}),[e,s]),g=(0,a.useCallback)((function(n){f(n),e.handleOnChangeOpacityShape(n)}),[e,f]);return(0,t.jsxs)(L.Z,{direction:"column",spacing:1,children:[(0,t.jsxs)(L.Z,{direction:"row",spacing:2,children:[(0,t.jsx)(l.Z,{variant:"outlined",onClick:h,children:"\u56db\u89d2"}),(0,t.jsx)(me,{disabled:!1,value:i,onChange:p}),(0,t.jsx)(ce,{value:o,min:.1,max:1,sliderStep:.1,step:.1,handleSliderChange:g})]}),r.length>0&&(0,t.jsx)(Se.Z,{dense:!0,children:r.map((function(n,r){return(0,t.jsx)(Ze.ZP,{secondaryAction:(0,t.jsx)(M.Z,{color:"primary",component:"span",onClick:function(){return v(n,r)},children:(0,t.jsx)(ye.Z,{})}),children:(0,t.jsx)(Oe.Z,{onClick:function(){return e.handleOnSelectShape(n)},children:(0,t.jsx)(ke.Z,{primary:"".concat(r+1)})})},n)}))})]})},Re=function(e){var n=G().cropState,r=K(),i=r.cropStart,o=r.cropDone,c=r.cropRemove,u=(0,a.useCallback)((function(){var n=i();e.handleOnCrop({state:n.cropState,cropFlag:n.cropFlag})}),[i,e]),s=(0,a.useCallback)((function(){var n=o();e.handleOnCrop({state:n.cropState,cropFlag:n.cropFlag})}),[o,e]),d=(0,a.useCallback)((function(){c(e.handleOnCrop)}),[c,e.handleOnCrop]);return(0,t.jsxs)(L.Z,{spacing:1,divider:(0,t.jsx)(E.Z,{flexItem:!0}),children:[A&&(0,t.jsx)(Fe,{handleOnBlur:e.handleOnBlur,handleOnSelectBlur:e.handleOnSelectBlur,handleOnDeleteBlur:e.handleOnDeleteBlur}),(0,t.jsx)(Ae,{handleOnAddShape:e.handleOnShape,handleOnChangeColorShape:e.handleOnChangeColorShape,handleOnChangeOpacityShape:e.handleOnChangeOpacityShape,handleOnSelectShape:e.handleOnSelectShape,handleOnDeleteShape:e.handleOnDeleteShape}),(0,t.jsxs)(L.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(l.Z,{variant:"outlined",onClick:u,startIcon:(0,t.jsx)(je.Z,{}),children:"\u5207\u308a\u629c\u304f"}),"start"===n&&(0,t.jsx)(M.Z,{color:"primary","aria-label":"crop start",component:"span",onClick:s,children:(0,t.jsx)(Ce.Z,{})}),"start"===n&&(0,t.jsx)(M.Z,{color:"primary","aria-label":"crop end",component:"span",onClick:d,children:(0,t.jsx)(ye.Z,{})})]})]})},Pe=r(657),De=r(7645),Be=r(1425),Ie=r(6514),Ee=r(3841),Le=r(431),Me=r(4054),Ue=r(7068),We=function(e){return Math.round(10*e)/10},Te=function(e){var n=(0,a.useState)("png"),r=n[0],i=n[1],o=(0,a.useState)(null),c=o[0],u=o[1],s=(0,a.useState)(0),d=s[0],f=s[1],h=(0,a.useState)(1),v=h[0],g=h[1],b=(0,a.useState)(""),m=b[0],x=b[1],j=(0,a.useRef)(null),C=(0,a.useMemo)((function(){return e.fileName.slice(0,e.fileName.lastIndexOf("."))}),[e.fileName]),y=(0,a.useMemo)((function(){return d>=1e9?"".concat(We(d/1e3/1e3/1e3),"GB"):d>=1e6?"".concat(We(d/1e3/1e3),"MB"):d>=1e3?"".concat(We(d/1e3),"KB"):"".concat(We(d),"B")}),[d]),Z=(0,a.useCallback)((function(e,n){if(e){var r=function(e){var n;u(e),f(null!==(n=null===e||void 0===e?void 0:e.size)&&void 0!==n?n:0)};"jpeg"!==n?e.toBlob(r,"image/".concat(n)):e.toBlob(r,"image/".concat(n),v)}}),[v]);(0,a.useEffect)((function(){e.canvas&&(x(e.canvas.toDataURL()),Z(e.canvas,r))}),[e.canvas,Z,r]);var O=(0,a.useCallback)((function(){e.onClose()}),[e]),k=(0,a.useCallback)((function(n){var r=n.target.value;i(r),Z(e.canvas,r)}),[e.canvas,Z]),w=(0,a.useCallback)((function(n){g(n),Z(e.canvas,r)}),[e.canvas,Z,r]),F=(0,a.useCallback)((function(){if(c){var e=document.createElement("a");e.download="".concat(C,".").concat(r),e.href=URL.createObjectURL(c),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}),[c,C,r]);return(0,t.jsxs)(Pe.Z,{open:e.open,onClose:O,PaperProps:{sx:{maxWidth:"80vw",borderRadius:"16px"}},children:[(0,t.jsxs)(De.Z,{children:[C,".",r]}),(0,t.jsx)(Ie.Z,{dividers:!0,children:(0,t.jsxs)(L.Z,{spacing:2,children:[(0,t.jsx)("img",{ref:j,src:m,style:{maxWidth:"100%"}}),(0,t.jsxs)(ae.ZP,{container:!0,spacing:2,width:"100%",children:[(0,t.jsx)(ae.ZP,{item:!0,xs:2,pl:0,children:(0,t.jsx)(S.Z,{variant:"outlined",sx:{backgroundColor:"transparent",width:"100%",height:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(p.Z,{variant:"h5",component:"div",children:y})})}),(0,t.jsx)(ae.ZP,{item:!0,xs:10,children:(0,t.jsxs)(L.Z,{spacing:1,children:[(0,t.jsxs)(Me.Z,{fullWidth:!0,children:[(0,t.jsx)(Ee.Z,{id:"download-file-ext",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e"}),(0,t.jsxs)(Ue.Z,{labelId:"download-file-ext",id:"download-file-select",value:r,label:"type",onChange:k,children:[(0,t.jsx)(Le.Z,{value:"png",children:"png"}),(0,t.jsx)(Le.Z,{value:"jpeg",children:"jpeg"})]})]}),"jpeg"===r&&(0,t.jsx)(ce,{title:"\u4fdd\u5b58\u54c1\u8cea",value:v,handleSliderChange:w,max:1,min:.01,sliderStep:.1,step:.01})]})})]})]})}),(0,t.jsxs)(Be.Z,{children:[(0,t.jsx)(l.Z,{variant:"outlined",onClick:function(){return F()},startIcon:(0,t.jsx)(W.Z,{}),children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),(0,t.jsx)(l.Z,{variant:"text",onClick:O,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})]})]})},Ne=function(e){var n=(0,a.useState)(""),r=n[0],l=n[1],i=(0,a.useState)(0),o=i[0],c=i[1],u=(0,a.useState)(0),s=u[0],d=u[1],f=(0,a.useRef)(B()((function(e){e&&l(e.toDataURL("image/jpeg"))}),100)),h=(0,a.useCallback)((function(e){c(e.currentTarget.naturalWidth),d(e.currentTarget.naturalHeight)}),[]);return(0,a.useEffect)((function(){f.current(e.canvas)}),[e.canvas]),(0,t.jsxs)(L.Z,{spacing:1,children:[(0,t.jsx)(I.Z,{component:"div",children:(0,t.jsx)("img",{src:r,style:{maxWidth:"400px",maxHeight:"200px"},onLoad:h})}),(0,t.jsxs)(p.Z,{variant:"caption",children:[o," x ",s]})]})},ze=r(3096),_e=r.n(ze);function Xe(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Ye(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Xe(e,n,r[n])}))}return e}P.fabric.textureSize=8192;var He={left:0,top:0,fill:"#FFFFFF",fontSize:15,selectable:!1,hasControls:!1,visible:!1},Ve=function(e){var n=pe().scale,r=G(),l=r.openModalFlag,o=r.cropFlag,c=K(),u=c.openModal,s=c.closeModal,d={createBlur:(0,a.useCallback)((function(e,n){var r,t,a=e.getZoom();e.setZoom(1);var l,i=null!==(t=e.width)&&void 0!==t?t:100,o=null!==(l=e.height)&&void 0!==l?l:100,c=e.toCanvasElement(1,{width:2*i,height:2*o,left:-i/2,top:-o/2}),u=new P.fabric.Image(c,{width:i/2,height:o/2,cropX:i/2,cropY:o/2,cornerStyle:"circle",strokeWidth:1,strokeUniform:!0,objectCaching:!1,visible:!0,backgroundColor:"rgba(255, 255, 255, 0.05)"});u.id=n,u.setControlsVisibility({mtr:!1});var s=new P.fabric.Image.filters.Blur({blur:.2});return null===(r=u.filters)||void 0===r||r.push(s),u.applyFilters(),e.add(u),e.setActiveObject(u),e.setZoom(100/a),e.renderAll(),u}),[]),moveBlur:(0,a.useRef)(_e()((function(e,n){var r,t,a,l,i,o,c,u,s=null!==(r=e.width)&&void 0!==r?r:100,d=null!==(t=e.height)&&void 0!==t?t:100,f=null!==(a=n.scaleX)&&void 0!==a?a:1,h=null!==(l=n.scaleY)&&void 0!==l?l:1,p=null!==(i=n.top)&&void 0!==i?i:0,v=null!==(o=n.left)&&void 0!==o?o:0,g=null!==(c=n.width)&&void 0!==c?c:1,b=null!==(u=n.height)&&void 0!==u?u:1;n.cropX=(v+s/2)*f,n.cropY=(p+d/2)*h,n.width=g*f,n.height=b*h,n.scaleX=1,n.scaleY=1,e.renderAll()}),10)).current},f=d.createBlur,h=d.moveBlur,p=(0,a.useRef)(),v=(0,a.useRef)(),g=(0,a.useRef)(),b=(0,a.useRef)(),j=(0,a.useRef)(),C=(0,a.useRef)(null),y=(0,a.useState)(),S=y[0],Z=y[1],O=(0,a.useRef)(B()((function(e,n){var r,t;if(p.current){var a,l;null===(r=p.current)||void 0===r||r.setZoom(1);var i,o={format:"png",left:0,top:0,width:100*(null!==(a=p.current.width)&&void 0!==a?a:1)/e,height:100*(null!==(l=p.current.height)&&void 0!==l?l:1)/e};if(g.current&&n){var c;g.current.set({opacity:0}).setCoords();var u,s,d,f,h,v=null!==(c=g.current.scaleX)&&void 0!==c?c:1,b=null!==(u=g.current.scaleY)&&void 0!==u?u:1;o.left=null!==(s=g.current.left)&&void 0!==s?s:0,o.top=null!==(d=g.current.top)&&void 0!==d?d:0,o.width=(null!==(f=g.current.width)&&void 0!==f?f:1)*v,o.height=(null!==(h=g.current.height)&&void 0!==h?h:1)*b}if(Z(p.current.toCanvasElement(1,o)),g.current&&n)null===(i=g.current)||void 0===i||i.set({opacity:1}).setCoords();null===(t=p.current)||void 0===t||t.setZoom(e/100)}}),100)),k=(0,a.useCallback)((function(e){var n,r;if(b.current){null===(n=p.current)||void 0===n||n.setZoom(e/100);var t=b.current.setCoords().getBoundingRect();null===(r=p.current)||void 0===r||r.setDimensions({width:t.width,height:t.height}),v.current&&v.current.set({top:0,left:0,width:t.width/e*100,height:t.height/e*100}).setCoords(),b.current.viewportCenter().setCoords()}}),[]),w=(0,a.useCallback)((function(e){k(e)}),[k]),A=(0,a.useCallback)((function(e){var r;b.current&&b.current.rotate(e),k(n),null===(r=p.current)||void 0===r||r.renderAll(),O.current(n,o)}),[o,n,k]),R=(0,a.useCallback)((function(){var e,n,r;if(g.current){if(g.current.set({visible:!1,top:0,left:0,scaleX:1,scaleY:1}),null===(e=v.current)||void 0===e?void 0:e.width){var t=.8*v.current.width;g.current.left=(v.current.width-t)/2,g.current.width=t}if(null===(n=v.current)||void 0===n?void 0:n.height){var a=.8*v.current.height;g.current.top=(v.current.height-a)/2,g.current.height=a}g.current.setCoords(),null===(r=p.current)||void 0===r||r.discardActiveObject()}}),[]),D=(0,a.useCallback)((function(e){var r;if(g.current){var t,a;if("start"===e.state)return g.current.strokeWidth=0,g.current.fill="rgba(0, 0, 0, 0.5)",g.current.selectable=!0,g.current.visible=!0,g.current.bringToFront(),void(null===(t=p.current)||void 0===t||t.setActiveObject(g.current));if(g.current.selectable=!1,"none"===e.state&&R(),"done"===e.state)g.current.fill="rgba(0, 0, 0, 0)",g.current.strokeWidth=1,g.current.bringToFront(),null===(a=p.current)||void 0===a||a.discardActiveObject();O.current(n,e.cropFlag),null===(r=p.current)||void 0===r||r.renderAll()}}),[R,n]),E=(0,a.useCallback)((function(e){var r;j.current&&(j.current.set({fontSize:e}).setCoords(),null===(r=p.current)||void 0===r||r.renderAll(),O.current(n,o))}),[o,n]),L=(0,a.useCallback)((function(e){var r;j.current&&(j.current.set({fill:e}).setCoords(),null===(r=p.current)||void 0===r||r.renderAll(),O.current(n,o))}),[o,n]),M=(0,a.useCallback)((function(e){var r,t;if(j.current){var a,l,i,c,u,s;if(!e)return j.current.set({selectable:!1,visible:!1}),null===(a=p.current)||void 0===a||a.discardActiveObject(),null===(l=p.current)||void 0===l||l.renderAll(),void O.current(n,o);if(j.current.set(Ye({},He,{selectable:!0,visible:!0})),o)j.current.set({left:Math.max(null!==(u=null===(i=g.current)||void 0===i?void 0:i.left)&&void 0!==u?u:0,0),top:Math.max(null!==(s=null===(c=g.current)||void 0===c?void 0:c.top)&&void 0!==s?s:0,0)});j.current.setCoords(),j.current.bringToFront(),null===(r=p.current)||void 0===r||r.setActiveObject(j.current),null===(t=p.current)||void 0===t||t.renderAll(),O.current(n,o)}}),[o,n]),U=(0,a.useCallback)((function(e){if(e){var n=new P.fabric.Canvas(e,{isDrawingMode:!1,backgroundColor:"rgba(255, 255, 255, 0.05)"});n.setDimensions({width:"400",height:"400"});var r=new P.fabric.Text(F,Ye({},He));n.add(r),j.current=r;var t=new P.fabric.Rect({fill:"none",width:20,height:20,evented:!1,selectable:!1});v.current=t,n.add(t);var a=new P.fabric.Rect({fill:"rgba(0, 0, 0, 0)",width:20,height:20,cornerStyle:"circle",stroke:"red",strokeWidth:1,strokeUniform:!0,visible:!1});a.setControlsVisibility({mtr:!1}),n.add(a),g.current=a,p.current=n}else p.current&&p.current.dispose()}),[]),W=(0,a.useCallback)((function(){if(C.current&&p&&p.current){var e=new P.fabric.Image(C.current,{top:0,left:0,centeredRotation:!0,selectable:!1});b.current=e,p.current.add(e),k(n),g.current&&R(),O.current(n,o),p.current.renderAll()}}),[o,R,n,k]);(0,a.useEffect)((function(){C.current&&(C.current.src=e.file)}),[e.file]);var T=(0,a.useCallback)((function(){O.current(n,o),u()}),[o,u,n]),N=(0,a.useCallback)((function(e){if(p.current){var r=f(p.current,e);O.current(n,o),r.on("moving",(function(){p.current&&(h(p.current,r),O.current(n,o))})),r.on("scaling",(function(){p.current&&(h(p.current,r),O.current(n,o))}))}}),[f,o,h,n]),z=(0,a.useCallback)((function(e){if(p.current){var n=!0,r=!1,t=void 0;try{for(var a,l=p.current.getObjects()[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var i=a.value;if(i.id===e){p.current.setActiveObject(i),p.current.renderAll();break}}}catch(o){r=!0,t=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw t}}}}),[]),_=(0,a.useCallback)((function(e){if(p.current){var r=!0,t=!1,a=void 0;try{for(var l,i=p.current.getObjects()[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var c=l.value;if(c.id===e){p.current.remove(c),O.current(n,o);break}}}catch(u){t=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(t)throw a}}}}),[o,n]),X=(0,a.useCallback)((function(e,r){if(p.current){var t=new P.fabric.Rect({fill:r,width:p.current.getWidth()/4,height:p.current.getHeight()/4,cornerStyle:"circle",strokeUniform:!0});t.id=e,t.bringToFront(),t.viewportCenter().setCoords(),p.current.add(t),p.current.renderAll(),O.current(n,o)}}),[o,n]),Y=(0,a.useCallback)((function(e){var n;if(p.current){var r=!0,t=!1,a=void 0;try{for(var l,i=p.current.getActiveObjects()[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){l.value.set({fill:e}).setCoords()}}catch(o){t=!0,a=o}finally{try{r||null==i.return||i.return()}finally{if(t)throw a}}null===(n=p.current)||void 0===n||n.renderAll()}}),[]),H=(0,a.useCallback)((function(e){var n;if(p.current){var r=!0,t=!1,a=void 0;try{for(var l,i=p.current.getActiveObjects()[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){l.value.set({opacity:e}).setCoords()}}catch(o){t=!0,a=o}finally{try{r||null==i.return||i.return()}finally{if(t)throw a}}null===(n=p.current)||void 0===n||n.renderAll()}}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(x,{}),(0,t.jsx)(i.Z,{sx:{my:2},maxWidth:!1,children:(0,t.jsx)("div",{style:{overflow:"auto",maxWidth:"100%",maxHeight:"100vh"},children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)("img",{ref:C,style:{display:"none"},onLoad:W}),(0,t.jsx)("canvas",{id:"c",ref:U})]})})}),(0,t.jsx)(ee,{thumb:(0,t.jsx)(Ne,{canvas:S}),defaultPanel:(0,t.jsx)(xe,{onChangeScale:w,onChangeRotate:A,onChangeCopyright:M,onChangeCopyrightFontSize:E,onChangeCopyrightColor:L,onChangeCrop:D}),editPanel:(0,t.jsx)(Re,{handleOnCrop:D,handleOnBlur:N,handleOnSelectBlur:z,handleOnDeleteBlur:_,handleOnShape:X,handleOnChangeColorShape:Y,handleOnChangeOpacityShape:H,handleOnSelectShape:z,handleOnDeleteShape:_}),handleOnCancel:e.onBack,handleOnDownload:T}),(0,t.jsx)(Te,{open:l,onClose:function(){return s()},canvas:S,fileName:e.fileName})]})]})},Je=function(){var e=(0,a.useState)(""),n=e[0],r=e[1],l=(0,a.useState)(void 0),i=l[0],o=l[1],c=(0,a.useState)(!1),u=c[0],s=c[1],d=(0,a.useCallback)((function(e,n){o(e),r(n),s(!0)}),[]),f=(0,a.useCallback)((function(){s(!0)}),[]),h=(0,a.useCallback)((function(){s(!1)}),[]);return(0,t.jsxs)(t.Fragment,{children:[u&&i&&(0,t.jsx)(Ve,{file:i,fileName:n,onBack:h}),!u&&(0,t.jsx)(R,{file:i,onLoadFile:d,onEdit:f})]})},$e=function(){return(0,t.jsx)(Je,{})}},4960:function(){},6759:function(){},6272:function(){}},function(e){e.O(0,[498,57,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);