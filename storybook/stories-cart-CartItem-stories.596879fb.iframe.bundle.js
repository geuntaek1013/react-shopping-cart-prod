"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[729],{"./src/stories/cart/CartItem.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_components_cart_CartItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/cart/CartItem.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"ShoppingCart/cart/CartItem",component:_components_cart_CartItem__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"],decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Style.ProductContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})}]};__webpack_exports__.default=meta;var Default={args:{cartItemInfo:{id:1,quantity:1,product:{id:1,name:"지구",price:1e3,imageUrl:"https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009__480.jpg"}}}},Style={ProductContainer:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.li(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    display: flex;\n    justify-content: center;\n\n    width: 550px;\n    height: 200px;\n\n    padding: 20px;\n    border-bottom: 1px ridge;\n\n    pointer-events: none;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      width: 708px;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 315px;\n    }\n  "])))};Default.parameters=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    cartItemInfo: {\n      id: 1,\n      quantity: 1,\n      product: {\n        id: 1,\n        name: '지구',\n        price: 1000,\n        imageUrl: 'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009__480.jpg'\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/cart/CartItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CartItem}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_hooks_useCart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/useCart.ts"),_assets_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/svg/index.ts"),_common_Price__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Price.tsx"),_Stepper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Stepper.tsx"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CartItem(_ref){var cartItemInfo=_ref.cartItemInfo,deleteCheckedItem=_ref.deleteCheckedItem,_cartItemInfo$product=cartItemInfo.product,name=_cartItemInfo$product.name,price=_cartItemInfo$product.price,imageUrl=_cartItemInfo$product.imageUrl,_useCart=(0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_0__.j)(cartItemInfo.product),updateProductQuantity=_useCart.updateProductQuantity,deleteFromCart=_useCart.deleteFromCart;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.ImageAndNameContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductImageWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductImage,{src:imageUrl,alt:name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductName,{htmlFor:"".concat(name,"-checkbox"),children:name})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.TrashCanIConAndStepperAndPriceContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.DeleteCartItemButton,{onClick:function handleDeleteCartItem(){deleteCheckedItem((function(prev){return prev.filter((function(itemId){return itemId!==cartItemInfo.id}))})),deleteFromCart(cartItemInfo.id)},"aria-label":"장바구니에서 ".concat(name," 상품 삭제"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_svg__WEBPACK_IMPORTED_MODULE_1__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_3__.Z,{quantity:cartItemInfo.quantity,minQuantity:1,maxQuantity:_constants__WEBPACK_IMPORTED_MODULE_4__.c5.MAX_COUNT,updateQuantity:updateProductQuantity}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_2__.Z,{price:price*(null==cartItemInfo?void 0:cartItemInfo.quantity),label:"".concat(name," ").concat(cartItemInfo.quantity,"개")})]})]})}var Style={Container:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      flex-direction: column;\n      position: relative;\n    }\n  "]))),ImageAndNameContainer:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n  "]))),ProductImageWrapper:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 130px;\n    height: 130px;\n\n    position: relative;\n    overflow: hidden;\n    margin-right: 20px;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 100px;\n      height: 100px;\n    }\n  "]))),ProductImage:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.img(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 100%;\n    height: 100%;\n\n    position: absolute;\n    object-fit: cover;\n  "]))),ProductName:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.label(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 135px;\n\n    font-size: 18px;\n    color: var(--grey-400);\n\n    cursor: pointer;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      width: 308px;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 105px;\n      margin-right: 25px;\n\n      font-size: 14px;\n    }\n  "]))),TrashCanIConAndStepperAndPriceContainer:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    width: 170px;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      flex-direction: row;\n      justify-content: none;\n      align-items: none;\n\n      margin-top: 20px;\n    }\n  "]))),DeleteCartItemButton:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.button(_templateObject7||(_templateObject7=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    all: unset;\n\n    cursor: pointer;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n  "])))};try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{cartItemInfo:{defaultValue:null,description:"",name:"cartItemInfo",required:!0,type:{name:"CartItemInfo"}},deleteCheckedItem:{defaultValue:null,description:"",name:"deleteCheckedItem",required:!0,type:{name:"Dispatch<SetStateAction<number[]>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cart/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/components/cart/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}}}]);