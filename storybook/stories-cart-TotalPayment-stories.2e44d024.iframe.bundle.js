"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[126],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/stories/cart/TotalPayment.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_cart_TotalPayment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/cart/TotalPayment.tsx"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts"),meta={title:"ShoppingCart/cart/TotalPayment",component:_components_cart_TotalPayment__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"]};__webpack_exports__.default=meta;var Default={args:{totalProductsPrice:999999,deliveryFee:_constants__WEBPACK_IMPORTED_MODULE_1__._e}};Default.parameters=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    totalProductsPrice: 999999,\n    deliveryFee: DELIVERY_FEE\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/cart/TotalPayment.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return TotalPayment}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_Price__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Price.tsx"),_common_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TotalPayment(_ref){var totalProductsPrice=_ref.totalProductsPrice,deliveryFee=_ref.deliveryFee,totalOrderPrice=totalProductsPrice+deliveryFee;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.TotalPaymentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Style.TitleBox,{children:"결제예상금액"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.PriceAndOrderButtonContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.PriceContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:totalProductsPrice,tag:"총 상품가격"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:deliveryFee,tag:"총 배송비"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:totalOrderPrice,tag:"총 주문금액"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{designType:"rectangle",bgColor:"var(--grey-500)",color:"var(--grey-100)",fontSize:"20px",children:"주문하기"})]})]})}var Style={TotalPaymentContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    width: 300px;\n    height: fit-content;\n    border: 1px solid var(--grey-300);\n  "]))),TitleBox:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    padding: 25px;\n\n    font-size: 20px;\n  "]))),PriceAndOrderButtonContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    border-top: 1px solid var(--grey-300);\n    padding: 25px;\n  "]))),PriceContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 30px;\n  "])))};try{TotalPayment.displayName="TotalPayment",TotalPayment.__docgenInfo={description:"",displayName:"TotalPayment",props:{totalProductsPrice:{defaultValue:null,description:"",name:"totalProductsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cart/TotalPayment.tsx#TotalPayment"]={docgenInfo:TotalPayment.__docgenInfo,name:"TotalPayment",path:"src/components/cart/TotalPayment.tsx#TotalPayment"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["bgColor","designType","fontSize"];function Button(_ref){var bgColor=_ref.bgColor,designType=_ref.designType,fontSize=_ref.fontSize,props=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Style.Button,(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:designType,bgColor:bgColor,fontSize:fontSize},props),{},{children:props.children}))}var Style={Button:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: none;\n    border-radius: 7px;\n    background-color: ",";\n\n    font-size: ",";\n    color: var(--grey-100);\n    cursor: pointer;\n\n    &.text {\n      color: ",";\n      background-color: transparent;\n    }\n\n    &.square {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      width: 28px;\n      height: 28px;\n\n      color: var(--grey-600);\n      text-align: center;\n      line-height: 28px;\n    }\n\n    &.rectangle {\n      width: 250px;\n      height: 65px;\n\n      color: ",";\n    }\n\n    &:disabled {\n      color: var(--grey-300);\n    }\n  "])),(function(_ref2){var bgColor=_ref2.bgColor;return bgColor||"var(--grey-100)"}),(function(_ref3){var fontSize=_ref3.fontSize;return fontSize||"16px"}),(function(_ref4){var color=_ref4.color;return color||"var(--grey-500)"}),(function(_ref5){var color=_ref5.color;return color||"var(--grey-500)"}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},designType:{defaultValue:null,description:"",name:"designType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"square"'},{value:'"rectangle"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Price.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Price}});var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Price(_ref){var _ref$price=_ref.price,price=void 0===_ref$price?0:_ref$price,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"black":_ref$color,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"":_ref$tag,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Style.Wrapper,{className:size,color:color,"aria-label":"".concat(label," 가격 ").concat(price,"원"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:tag}),price.toLocaleString("ko-KR"),"원"]})}var Style={Wrapper:styled_components__WEBPACK_IMPORTED_MODULE_1__.zo.p(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n\n    &.small {\n      font-size: 10px;\n    }\n\n    &.medium {\n      font-size: 16px;\n    }\n\n    &.large {\n      font-size: 20px;\n    }\n\n    color: ",";\n  "])),(function(_ref2){return _ref2.color}))};try{Price.displayName="Price",Price.__docgenInfo={description:"",displayName:"Price",props:{price:{defaultValue:{value:"0"},description:"",name:"price",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"string"}},tag:{defaultValue:{value:""},description:"",name:"tag",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Price.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"src/components/common/Price.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}}}]);