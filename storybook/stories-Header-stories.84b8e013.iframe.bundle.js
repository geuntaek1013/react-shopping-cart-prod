"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[758],{"./src/stories/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Header_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),svg=__webpack_require__("./src/assets/svg/index.ts"),es=__webpack_require__("./node_modules/recoil/es/index.js"),selectors=__webpack_require__("./src/recoil/selectors.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CartCountBadge(){var cartListLength=(0,es.sJ)(selectors.f4);return(0,jsx_runtime.jsx)(Style.CountBadge,{children:cartListLength})}var ServerSelectBox_templateObject,_templateObject2,Style={CountBadge:styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 30px;\n    height: 30px;\n\n    border-radius: 50%;\n\n    background-color: #04c09e;\n  "])))},atoms=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/recoil/atoms.ts")),constants=__webpack_require__("./src/constants/index.ts");function ServerSelectBox(){var setSelectedHost=(0,es.Zl)(atoms.PK);return(0,jsx_runtime.jsx)(ServerSelectBox_Style.Wrapper,{children:(0,jsx_runtime.jsx)(ServerSelectBox_Style.ServerSelectBox,{name:"serverList",onChange:function load(e){var currentServer=e.target.value;setSelectedHost(constants.cN[currentServer])},children:constants.Z8.map((function(host){return(0,jsx_runtime.jsx)("option",{children:host},host)}))})})}var Header_templateObject,Header_templateObject2,_templateObject3,_templateObject4,_templateObject5,ServerSelectBox_Style={Wrapper:styled_components_browser_esm.zo.div(ServerSelectBox_templateObject||(ServerSelectBox_templateObject=(0,taggedTemplateLiteral.Z)(["\n    padding: 12px;\n  "]))),ServerSelectBox:styled_components_browser_esm.zo.select(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    background-color: black;\n    border: none;\n    outline: 0;\n    padding-right: 12px;\n    color: white;\n  "])))};var _Default$parameters,_Default$parameters2,_Default$parameters2$,Header_Style={Container:styled_components_browser_esm.zo.div(Header_templateObject||(Header_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    min-width: 992px;\n    height: 80px;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: var(--grey-500);\n\n    color: var(--grey-100);\n\n    z-index: 1000;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      min-width: 768px;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      min-width: 375px;\n    }\n  "]))),Content:styled_components_browser_esm.zo.div(Header_templateObject2||(Header_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 932px;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      width: 708px;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 315px;\n    }\n  "]))),RightContainer:styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: space-between;\n\n    gap: 10px;\n  "]))),Title:styled_components_browser_esm.zo.button(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n\n    font-size: 32px;\n    font-weight: 900;\n\n    &::after {\n      content: 'SHOP';\n      padding-left: 12px;\n    }\n  "]))),CartButton:styled_components_browser_esm.zo.button(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n\n    font-weight: 500;\n\n    &::before {\n      content: '장바구니';\n      padding-right: 6px;\n    }\n  "])))},Header_stories={title:"ShoppingCart/Header",component:function Header(){var navigate=(0,dist.s0)();return(0,jsx_runtime.jsx)(Header_Style.Container,{children:(0,jsx_runtime.jsxs)(Header_Style.Content,{children:[(0,jsx_runtime.jsx)(Header_Style.Title,{title:"홈으로 이동",onClick:function onClick(){return navigate("/")},children:(0,jsx_runtime.jsx)(svg.QF,{})}),(0,jsx_runtime.jsxs)(Header_Style.RightContainer,{children:[(0,jsx_runtime.jsx)(ServerSelectBox,{}),(0,jsx_runtime.jsx)(Header_Style.CartButton,{title:"장바구니 페이지로 이동",onClick:function onClick(){return navigate("/cart")},children:(0,jsx_runtime.jsx)(CartCountBadge,{})})]})]})})},tags:["autodocs"]},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/assets/svg/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w7:function(){return ForwardRef},QF:function(){return CartLogo_ForwardRef},Ms:function(){return TrashCanIcon_ForwardRef}});var _path,react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgCartIcon(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:25,height:23,viewBox:"0 0 25 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M2.27577 18.2479L0.00422287 5.87289C-0.00124931 5.81809 -0.00124931 5.76269 0.00422287 5.70789C0.00422287 5.52555 0.0640526 5.35068 0.170551 5.22175C0.27705 5.09282 0.421495 5.02039 0.572107 5.02039H18.7785L19.5849 1.38351C19.6204 1.24199 19.6925 1.11807 19.7907 1.03013C19.8889 0.942202 20.008 0.894949 20.1301 0.895389H24.4233C24.5739 0.895389 24.7184 0.967822 24.8249 1.09675C24.9314 1.22568 24.9912 1.40055 24.9912 1.58289C24.9912 1.76523 24.9314 1.94009 24.8249 2.06902C24.7184 2.19796 24.5739 2.27039 24.4233 2.27039H20.5617L17.0408 18.2823C17.017 18.3781 16.9763 18.4666 16.9213 18.5414C16.8664 18.6162 16.7986 18.6756 16.7228 18.7154C16.9348 19.1479 17.0448 19.6425 17.0408 20.1454C17.0408 20.8747 16.8015 21.5742 16.3755 22.0899C15.9495 22.6057 15.3717 22.8954 14.7693 22.8954C14.1668 22.8954 13.589 22.6057 13.163 22.0899C12.737 21.5742 12.4977 20.8747 12.4977 20.1454C12.5001 19.6618 12.6079 19.1875 12.8101 18.7704H6.50652C6.70869 19.1875 6.81642 19.6618 6.81886 20.1454C6.81886 20.8747 6.57953 21.5742 6.15353 22.0899C5.72754 22.6057 5.14976 22.8954 4.54731 22.8954C3.94486 22.8954 3.36708 22.6057 2.94109 22.0899C2.51509 21.5742 2.27577 20.8747 2.27577 20.1454C2.27757 19.6375 2.3955 19.1402 2.6165 18.7085C2.53394 18.6693 2.46011 18.6072 2.40094 18.5272C2.34177 18.4472 2.2989 18.3515 2.27577 18.2479ZM4.60978 6.39539H1.28197L1.78738 9.14539H4.85965L4.60978 6.39539ZM18.4776 6.39539H14.7125L14.4626 9.14539H17.8699L18.4776 6.39539ZM16.9556 13.2704L17.5633 10.5204H14.332L14.0764 13.2704H16.9556ZM16.649 14.6454H13.9515L13.7016 17.3954H16.0356L16.649 14.6454ZM14.7693 21.5204C14.9939 21.5204 15.2135 21.4397 15.4003 21.2887C15.587 21.1376 15.7326 20.9228 15.8186 20.6716C15.9045 20.4203 15.927 20.1439 15.8832 19.8771C15.8394 19.6104 15.7312 19.3654 15.5724 19.1731C15.4135 18.9808 15.2112 18.8499 14.9908 18.7968C14.7705 18.7438 14.5422 18.771 14.3346 18.8751C14.1271 18.9791 13.9497 19.1554 13.8249 19.3815C13.7001 19.6076 13.6335 19.8734 13.6335 20.1454C13.6335 20.5101 13.7531 20.8598 13.9661 21.1177C14.1791 21.3755 14.468 21.5204 14.7693 21.5204ZM10.2262 17.3954H12.5602L12.8101 14.6454H10.2262V17.3954ZM10.2262 13.2704H12.935L13.1905 10.5204H10.2262V13.2704ZM10.2262 9.14539H13.3155L13.5653 6.39539H10.2262V9.14539ZM6.75639 17.3954H9.0904V14.6454H6.50652L6.75639 17.3954ZM6.3759 13.2704H9.0904V10.5204H6.12603L6.3759 13.2704ZM5.99542 9.14539H9.0904V6.39539H5.75123L5.99542 9.14539ZM4.54731 21.5204C4.77195 21.5204 4.99154 21.4397 5.17831 21.2887C5.36509 21.1376 5.51066 20.9228 5.59663 20.6716C5.68259 20.4203 5.70508 20.1439 5.66126 19.8771C5.61744 19.6104 5.50926 19.3654 5.35042 19.1731C5.19158 18.9808 4.98921 18.8499 4.76889 18.7968C4.54857 18.7438 4.32021 18.771 4.11267 18.8751C3.90513 18.9791 3.72775 19.1554 3.60295 19.3815C3.47815 19.6076 3.41154 19.8734 3.41154 20.1454C3.41154 20.5101 3.5312 20.8598 3.7442 21.1177C3.9572 21.3755 4.24609 21.5204 4.54731 21.5204ZM3.29796 17.3954H5.61494L5.36507 14.6454H2.79254L3.29796 17.3954ZM5.23445 13.2704L4.9789 10.5204H2.03157L2.53699 13.2704H5.23445Z",fill:"current"})))}var CartLogo_path,ForwardRef=react.forwardRef(SvgCartIcon),CartLogo_excluded=(__webpack_require__.p,["title","titleId"]);function CartLogo_extends(){return CartLogo_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},CartLogo_extends.apply(this,arguments)}function CartLogo_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function CartLogo_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgCartLogo(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=CartLogo_objectWithoutProperties(_ref,CartLogo_excluded);return react.createElement("svg",CartLogo_extends({width:35,height:44,viewBox:"0 0 51 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,CartLogo_path||(CartLogo_path=react.createElement("path",{d:"M46.2746 34.705L50.8177 9.95501C50.8287 9.8454 50.8287 9.73461 50.8177 9.62501C50.8177 9.26033 50.6981 8.9106 50.4851 8.65273C50.2721 8.39487 49.9832 8.25001 49.682 8.25001H13.2691L11.6563 0.976256C11.5855 0.69321 11.4411 0.445361 11.2447 0.269497C11.0483 0.093633 10.8103 -0.000872914 10.566 6.07642e-06H1.97952C1.6783 6.07642e-06 1.38941 0.144872 1.17641 0.402734C0.963411 0.660597 0.84375 1.01033 0.84375 1.37501C0.84375 1.73968 0.963411 2.08942 1.17641 2.34728C1.38941 2.60514 1.6783 2.75001 1.97952 2.75001H9.70277L16.7446 34.7738C16.7921 34.9655 16.8736 35.1423 16.9835 35.292C17.0934 35.4416 17.2289 35.5604 17.3806 35.64C16.9566 36.505 16.7366 37.4942 16.7446 38.5C16.7446 39.9587 17.2232 41.3576 18.0752 42.3891C18.9272 43.4205 20.0827 44 21.2877 44C22.4926 44 23.6481 43.4205 24.5001 42.3891C25.3521 41.3576 25.8307 39.9587 25.8307 38.5C25.8259 37.5328 25.6104 36.5842 25.2061 35.75H37.8131C37.4088 36.5842 37.1933 37.5328 37.1885 38.5C37.1885 39.9587 37.6671 41.3576 38.5191 42.3891C39.3711 43.4205 40.5266 44 41.7316 44C42.9365 44 44.092 43.4205 44.944 42.3891C45.796 41.3576 46.2746 39.9587 46.2746 38.5C46.271 37.4843 46.0352 36.4896 45.5932 35.6263C45.7583 35.5478 45.9059 35.4236 46.0243 35.2636C46.1426 35.1036 46.2284 34.9123 46.2746 34.705ZM41.6066 11H48.2622L47.2514 16.5H41.1069L41.6066 11ZM13.8711 11H21.4012L21.901 16.5H15.0863L13.8711 11ZM16.9149 24.75L15.6997 19.25H22.1622L22.6733 24.75H16.9149ZM17.5282 27.5H22.9232L23.4229 33H18.7549L17.5282 27.5ZM21.2877 41.25C20.8384 41.25 20.3992 41.0887 20.0256 40.7865C19.6521 40.4844 19.3609 40.0549 19.189 39.5524C19.0171 39.0499 18.9721 38.497 19.0598 37.9635C19.1474 37.4301 19.3637 36.9401 19.6814 36.5555C19.9991 36.1709 20.4039 35.909 20.8445 35.8028C21.2851 35.6967 21.7419 35.7512 22.1569 35.9593C22.572 36.1675 22.9268 36.52 23.1764 36.9722C23.426 37.4244 23.5592 37.9561 23.5592 38.5C23.5592 39.2294 23.3199 39.9288 22.8939 40.4445C22.4679 40.9603 21.8901 41.25 21.2877 41.25ZM30.3738 33H25.7058L25.2061 27.5H30.3738V33ZM30.3738 24.75H24.9562L24.4451 19.25H30.3738V24.75ZM30.3738 16.5H24.1952L23.6955 11H30.3738V16.5ZM37.3134 33H32.6454V27.5H37.8131L37.3134 33ZM38.0744 24.75H32.6454V19.25H38.5741L38.0744 24.75ZM38.8353 16.5H32.6454V11H39.3237L38.8353 16.5ZM41.7316 41.25C41.2823 41.25 40.8431 41.0887 40.4695 40.7865C40.096 40.4844 39.8048 40.0549 39.6329 39.5524C39.461 39.0499 39.416 38.497 39.5037 37.9635C39.5913 37.4301 39.8076 36.9401 40.1253 36.5555C40.443 36.1709 40.8478 35.909 41.2884 35.8028C41.729 35.6967 42.1858 35.7512 42.6008 35.9593C43.0159 36.1675 43.3707 36.52 43.6203 36.9722C43.8699 37.4244 44.0031 37.9561 44.0031 38.5C44.0031 39.2294 43.7638 39.9288 43.3378 40.4445C42.9118 40.9603 42.334 41.25 41.7316 41.25ZM44.2303 33H39.5963L40.096 27.5H45.2411L44.2303 33ZM40.3573 24.75L40.8684 19.25H46.763L45.7522 24.75H40.3573Z",fill:"white"})))}var TrashCanIcon_path,_defs,CartLogo_ForwardRef=react.forwardRef(SvgCartLogo),TrashCanIcon_excluded=(__webpack_require__.p,["title","titleId"]);function TrashCanIcon_extends(){return TrashCanIcon_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TrashCanIcon_extends.apply(this,arguments)}function TrashCanIcon_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TrashCanIcon_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgTrashCanIcon(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=TrashCanIcon_objectWithoutProperties(_ref,TrashCanIcon_excluded);return react.createElement("svg",TrashCanIcon_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,TrashCanIcon_path||(TrashCanIcon_path=react.createElement("path",{d:"M0 0H24V24H0V0Z",fill:"url(#pattern0)"})),_defs||(_defs=react.createElement("defs",null,react.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},react.createElement("use",{xlinkHref:"#image0_2_205",transform:"scale(0.025)"})),react.createElement("image",{id:"image0_2_205",width:40,height:40,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURbu7u////729vbu7u7y8vLy8vLy8vEdwTLy8vLy8vLy8vL+/v7u7u7y8vLu7u7u7u729vbu7u7+/v7u7u7u7u7u7u7u7u7y8vL6+vru7u7y8vL29vbu7u7u7u7y8vLy8vLu7u7u7u6hNFAIAAAAhdFJOU4ABRsRoNnsAf4N6JJOSfL2+fTBxzPxXvzN4b1Z1zcCC+y6w4fIAAACdSURBVDjL7dTJDsIgFEBROvponedZ7///pKYmDS3QIBuN8W7K4iSEqWoUmIqA9bZSnapT7YKrDVb3ow33OFta8ABr3Z1aX+BsQQXWwm6wsKA4oIapAaVpDjvpdYXZa9RAAnoPSkBxRxgAXXvY39/vgc+DFPP7h78LP3HNxAfFhCVkylMGZQvT4deftjAZD7lJYrzrIvdNnRfxP/vhHjYnSVqiKRrnAAAAAElFTkSuQmCC"}))))}var TrashCanIcon_ForwardRef=react.forwardRef(SvgTrashCanIcon);__webpack_require__.p},"./src/recoil/atoms.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{FF:function(){return checkedCartItemIdsState},PK:function(){return selectedHostState},mX:function(){return cartListState},vh:function(){return productListState}});var _home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts"),selectedHostState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"selectedHost",default:_constants__WEBPACK_IMPORTED_MODULE_1__.cN["박스터"]}),productListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"productList",default:[]}),cartListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"cartList",default:[]}),checkedCartItemIdsState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.xu)({key:"checkedCartItemIds",default:function _default(cartItemIds){return(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(cartItemIds)}})},"./src/recoil/selectors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{SG:function(){return currentProductListState},W3:function(){return totalProductsPriceState},f4:function(){return cartListLengthState},hl:function(){return currentCartListState}});var _get2,_get4,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_atoms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/recoil/atoms.ts"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),currentProductListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"currentProductList",get:(_get2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__.Z)().mark((function _callee(_ref){var _get,host,productList,res,currentProductList;return(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(_get=_ref.get,host=_get(_atoms__WEBPACK_IMPORTED_MODULE_1__.PK),!((productList=_get(_atoms__WEBPACK_IMPORTED_MODULE_1__.vh)).length>0)){_context.next=5;break}return _context.abrupt("return",productList);case 5:return _context.next=7,fetch("".concat(host).concat(_constants__WEBPACK_IMPORTED_MODULE_2__._d),{headers:{"content-type":"application/json"}});case 7:if((res=_context.sent).ok){_context.next=10;break}throw new Error("상품 목록을 불러올 수 없습니다.");case 10:return _context.next=12,res.json();case 12:return currentProductList=_context.sent,_context.abrupt("return",currentProductList);case 14:case"end":return _context.stop()}}),_callee)}))),function get(_x){return _get2.apply(this,arguments)})}),currentCartListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"currentCartList",get:(_get4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__.Z)().mark((function _callee2(_ref2){var _get3,host,cartList,tokenized,res,currentCartList;return(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(_get3=_ref2.get,host=_get3(_atoms__WEBPACK_IMPORTED_MODULE_1__.PK),!((cartList=_get3(_atoms__WEBPACK_IMPORTED_MODULE_1__.mX)).length>0)){_context2.next=5;break}return _context2.abrupt("return",cartList);case 5:return tokenized=btoa("a@a.com:1234"),_context2.next=8,fetch("".concat(host).concat(_constants__WEBPACK_IMPORTED_MODULE_2__.a5),{headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(tokenized)}});case 8:if((res=_context2.sent).ok){_context2.next=11;break}throw new Error("장바구니 목록을 불러올 수 없습니다.");case 11:return _context2.next=13,res.json();case 13:return currentCartList=_context2.sent,_context2.abrupt("return",currentCartList);case 15:case"end":return _context2.stop()}}),_callee2)}))),function get(_x2){return _get4.apply(this,arguments)})}),cartListLengthState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"cartListLength",get:function get(_ref3){return(0,_ref3.get)(currentCartListState).length}}),totalProductsPriceState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"totalProductsPrice",get:function get(_ref4){var _get6=_ref4.get,cartList=_get6(_atoms__WEBPACK_IMPORTED_MODULE_1__.mX),cartItemIds=cartList.map((function(cartItem){return cartItem.id})),checkedCartItemIds=_get6((0,_atoms__WEBPACK_IMPORTED_MODULE_1__.FF)(cartItemIds));return cartList.filter((function(cartItem){return checkedCartItemIds.includes(cartItem.id)})).reduce((function(total,cartItem){return total+cartItem.quantity*cartItem.product.price}),0)}})}}]);