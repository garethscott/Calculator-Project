(this["webpackJsonpnew-calc-project"]=this["webpackJsonpnew-calc-project"]||[]).push([[0],[,function(_,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),n=t.n(a),c=(t(19),function(_){return n.a.createElement("div",{className:"button",onClick:function(){return _.handleClick(_.children)}},_.children)})},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_ClearButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_components_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),_components_Input__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8),App=function(_Component){Object(_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={input:""},_this.handleAddToInput=function(_){_this.setState({input:_this.state.input+_})},_this.handleClear=function(){_this.setState({input:""})},_this.handleEquals=function(){_this.setState({input:eval(_this.state.input)})},_this}return Object(_Users_garethscott_Desktop_CodeNation_React_Projects_new_calc_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"app"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"frame"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__.a,{input:this.state.input}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"button-frame"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ClearButton__WEBPACK_IMPORTED_MODULE_6__.a,{handleClick:this.handleClear},"Clear"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"/"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"7"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"8"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"9"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"-"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"4"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"5"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"6"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"+"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"1"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"2"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleAddToInput},"3"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleEquals},"=")))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},,,function(_,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),n=t.n(a),c=(t(18),function(_){return n.a.createElement("div",{className:"clear-btn",onClick:function(){return _.handleClick()}},_.children)})},function(_,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),n=t.n(a),c=(t(20),function(_){return n.a.createElement("div",{className:"input"},_.input)})},,,function(_,e,t){_.exports=t(21)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),c=t(3),r=t.n(c),o=(t(16),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.c36d5c5d.chunk.js.map