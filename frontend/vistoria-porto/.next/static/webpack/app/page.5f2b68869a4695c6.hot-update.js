"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/LoginForm.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction LoginForm() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        senha: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/api/login\", {\n                ok: true\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Access-Control-Allow-Origin\": \"/\"\n                }\n            });\n            console.log(formData);\n            if (response.status === 200) {\n                console.log(\"Login bem-sucedido!\");\n            } else {\n                console.error(\"Falha no login. Verifique suas credenciais.\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao realizar a solicita\\xe7\\xe3o:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:mx-auto sm:w-full sm:max-w-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"mx-auto h-10 w-auto\",\n                            src: \"https://loja.portoseguro.com.br/content/dam/porto-store/header/Logo_Holding_PortoSeguro_Positivo.svg\",\n                            alt: \"Your Company\"\n                        }, void 0, false, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900\",\n                            children: \"Entre com a sua conta Porto\"\n                        }, void 0, false, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-6\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                            children: \"Endere\\xe7o de Email\"\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                autoComplete: \"email\",\n                                                onChange: handleChange,\n                                                value: formData.email,\n                                                required: true,\n                                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                            }, void 0, false, {\n                                                fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"senha\",\n                                                    className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                    children: \"Senha\"\n                                                }, void 0, false, {\n                                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-sm\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"font-semibold text-indigo-600 hover:text-indigo-500\",\n                                                        children: \"Esqueceu a senha?\"\n                                                    }, void 0, false, {\n                                                        fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"senha\",\n                                                name: \"senha\",\n                                                type: \"password\",\n                                                autoComplete: \"current-password\",\n                                                onChange: handleChange,\n                                                value: formData.senha,\n                                                required: true,\n                                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                            }, void 0, false, {\n                                                fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                        children: \"Entrar\"\n                                    }, void 0, false, {\n                                        fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-10 text-center text-sm text-gray-500\",\n                            children: [\n                                \"Ainda n\\xe3o \\xe9 cliente porto?\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"font-semibold leading-6 text-indigo-600 hover:text-indigo-500\",\n                                    children: \"Criar conta\"\n                                }, void 0, false, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(LoginForm, \"vufZ65CbU71lkKe28N4xAk92e1Q=\");\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNSO0FBRVYsU0FBU0U7O0lBRXRCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN2Q0ssT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1AsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDTSxLQUFLLEVBQUVDO1FBQ1Y7SUFDRjtJQUVBLE1BQU1FLGVBQWUsT0FBT0o7UUFDMUJBLEVBQUVLLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWIsNkNBQUtBLENBQUNjLElBQUksQ0FBQyxtQ0FBbUM7Z0JBQUNDLElBQUk7WUFBSSxHQUFHO2dCQUMvRUMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCLCtCQUErQjtnQkFDakM7WUFDRjtZQUVBQyxRQUFRQyxHQUFHLENBQUNoQjtZQUVaLElBQUlXLFNBQVNNLE1BQU0sS0FBSyxLQUFLO2dCQUMzQkYsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTEQsUUFBUUcsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyx5Q0FBbUNBO1FBQ25EO0lBQ0Y7SUFFRSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQ0NELFdBQVU7NEJBQ1ZFLEtBQUk7NEJBQ0pDLEtBQUk7Ozs7OztzQ0FFTiw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQThFOzs7Ozs7Ozs7Ozs7OEJBSzlGLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFLTCxXQUFVOzRCQUFZTSxVQUFVakI7OzhDQUNwQyw4REFBQ1U7O3NEQUNDLDhEQUFDUTs0Q0FBTUMsU0FBUTs0Q0FBUVIsV0FBVTtzREFBb0Q7Ozs7OztzREFHckYsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFDQ0MsSUFBRztnREFDSHhCLE1BQUs7Z0RBQ0x5QixNQUFLO2dEQUNMQyxjQUFhO2dEQUNiQyxVQUFVN0I7Z0RBQ1ZHLE9BQU9QLFNBQVNFLEtBQUs7Z0RBQ3JCZ0MsUUFBUTtnREFDUmQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2hCLDhEQUFDRDs7c0RBQ0MsOERBQUNBOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ087b0RBQU1DLFNBQVE7b0RBQVFSLFdBQVU7OERBQW9EOzs7Ozs7OERBR3JGLDhEQUFDRDtvREFBSUMsV0FBVTs4REFDYiw0RUFBQ2U7d0RBQUVDLE1BQUs7d0RBQUloQixXQUFVO2tFQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS2hGLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ1M7Z0RBQ0NDLElBQUc7Z0RBQ0h4QixNQUFLO2dEQUNMeUIsTUFBSztnREFDTEMsY0FBYTtnREFDYkMsVUFBVTdCO2dEQUNWRyxPQUFPUCxTQUFTRyxLQUFLO2dEQUNyQitCLFFBQVE7Z0RBQ1JkLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtoQiw4REFBQ0Q7OENBQ0MsNEVBQUNrQjt3Q0FDQ04sTUFBSzt3Q0FDTFgsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTUwsOERBQUNrQjs0QkFBRWxCLFdBQVU7O2dDQUEwQztnQ0FDMUI7OENBQzNCLDhEQUFDZTtvQ0FBRUMsTUFBSztvQ0FBSWhCLFdBQVU7OENBQWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBHO0dBckh3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3g/ZWUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgc2VuaGE6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbicsIHtvazogdHJ1ZX0sIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcvJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gYmVtLXN1Y2VkaWRvIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhbGhhIG5vIGxvZ2luLiBWZXJpZmlxdWUgc3VhcyBjcmVkZW5jaWFpcy4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyByZWFsaXphciBhIHNvbGljaXRhw6fDo286JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNiBweS0xMiBsZzpweC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LXNtXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTAgdy1hdXRvXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xvamEucG9ydG9zZWd1cm8uY29tLmJyL2NvbnRlbnQvZGFtL3BvcnRvLXN0b3JlL2hlYWRlci9Mb2dvX0hvbGRpbmdfUG9ydG9TZWd1cm9fUG9zaXRpdm8uc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZb3VyIENvbXBhbnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctOSB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgRW50cmUgY29tIGEgc3VhIGNvbnRhIFBvcnRvXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctc21cIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS02XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVuZGVyZcOnbyBkZSBFbWFpbFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktMS41IHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby02MDAgc206dGV4dC1zbSBzbTpsZWFkaW5nLTZcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuaGFcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VuaGFcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEVzcXVlY2V1IGEgc2VuaGE/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuc2VuaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gIFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICBBaW5kYSBuw6NvIMOpIGNsaWVudGUgcG9ydG8/eycgJ31cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgIENyaWFyIGNvbnRhXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuICAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInNlbmhhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0Iiwib2siLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.jsx\n"));

/***/ })

});