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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LoginForm() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        senha: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/login\", {\n                method: \"POST\",\n                mode: \"no-cors\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Access-Control-Allow-Origin\": \"*\"\n                },\n                body: {\n                    \"ok\": true\n                }\n            });\n            console.log(formData);\n            if (response.ok) {\n                console.log(\"Login bem-sucedido!\");\n            } else {\n                console.error(\"Falha no login. Verifique suas credenciais.\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao realizar a solicita\\xe7\\xe3o:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:mx-auto sm:w-full sm:max-w-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"mx-auto h-10 w-auto\",\n                            src: \"https://loja.portoseguro.com.br/content/dam/porto-store/header/Logo_Holding_PortoSeguro_Positivo.svg\",\n                            alt: \"Your Company\"\n                        }, void 0, false, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900\",\n                            children: \"Entre com a sua conta Porto\"\n                        }, void 0, false, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-6\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                            children: \"Endere\\xe7o de Email\"\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                autoComplete: \"email\",\n                                                onChange: handleChange,\n                                                value: formData.email,\n                                                required: true,\n                                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                            }, void 0, false, {\n                                                fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"senha\",\n                                                    className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                    children: \"Senha\"\n                                                }, void 0, false, {\n                                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-sm\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"font-semibold text-indigo-600 hover:text-indigo-500\",\n                                                        children: \"Esqueceu a senha?\"\n                                                    }, void 0, false, {\n                                                        fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"senha\",\n                                                name: \"senha\",\n                                                type: \"password\",\n                                                autoComplete: \"current-password\",\n                                                onChange: handleChange,\n                                                value: formData.senha,\n                                                required: true,\n                                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                            }, void 0, false, {\n                                                fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                        children: \"Entrar\"\n                                    }, void 0, false, {\n                                        fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-10 text-center text-sm text-gray-500\",\n                            children: [\n                                \"Ainda n\\xe3o \\xe9 cliente porto?\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"font-semibold leading-6 text-indigo-600 hover:text-indigo-500\",\n                                    children: \"Criar conta\"\n                                }, void 0, false, {\n                                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"P:\\\\Dev\\\\React\\\\fiap\\\\vistoria-porto\\\\src\\\\components\\\\LoginForm.jsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(LoginForm, \"vufZ65CbU71lkKe28N4xAk92e1Q=\");\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDOztJQUV0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFDdkNJLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENQLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ00sS0FBSyxFQUFFQztRQUNWO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLE9BQU9KO1FBQzFCQSxFQUFFSyxjQUFjO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUNBQW1DO2dCQUM5REMsUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCLCtCQUErQjtnQkFDakM7Z0JBQ0FDLE1BQU07b0JBQUMsTUFBTTtnQkFBSTtZQUNuQjtZQUVBQyxRQUFRQyxHQUFHLENBQUNsQjtZQUVaLElBQUlXLFNBQVNRLEVBQUUsRUFBRTtnQkFDZkYsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTEQsUUFBUUcsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyx5Q0FBbUNBO1FBQ25EO0lBQ0Y7SUFFRSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQ0NELFdBQVU7NEJBQ1ZFLEtBQUk7NEJBQ0pDLEtBQUk7Ozs7OztzQ0FFTiw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQThFOzs7Ozs7Ozs7Ozs7OEJBSzlGLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFLTCxXQUFVOzRCQUFZTSxVQUFVbkI7OzhDQUNwQyw4REFBQ1k7O3NEQUNDLDhEQUFDUTs0Q0FBTUMsU0FBUTs0Q0FBUVIsV0FBVTtzREFBb0Q7Ozs7OztzREFHckYsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFDQ0MsSUFBRztnREFDSDFCLE1BQUs7Z0RBQ0wyQixNQUFLO2dEQUNMQyxjQUFhO2dEQUNiQyxVQUFVL0I7Z0RBQ1ZHLE9BQU9QLFNBQVNFLEtBQUs7Z0RBQ3JCa0MsUUFBUTtnREFDUmQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2hCLDhEQUFDRDs7c0RBQ0MsOERBQUNBOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ087b0RBQU1DLFNBQVE7b0RBQVFSLFdBQVU7OERBQW9EOzs7Ozs7OERBR3JGLDhEQUFDRDtvREFBSUMsV0FBVTs4REFDYiw0RUFBQ2U7d0RBQUVDLE1BQUs7d0RBQUloQixXQUFVO2tFQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS2hGLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ1M7Z0RBQ0NDLElBQUc7Z0RBQ0gxQixNQUFLO2dEQUNMMkIsTUFBSztnREFDTEMsY0FBYTtnREFDYkMsVUFBVS9CO2dEQUNWRyxPQUFPUCxTQUFTRyxLQUFLO2dEQUNyQmlDLFFBQVE7Z0RBQ1JkLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtoQiw4REFBQ0Q7OENBQ0MsNEVBQUNrQjt3Q0FDQ04sTUFBSzt3Q0FDTFgsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTUwsOERBQUNrQjs0QkFBRWxCLFdBQVU7O2dDQUEwQztnQ0FDMUI7OENBQzNCLDhEQUFDZTtvQ0FBRUMsTUFBSztvQ0FBSWhCLFdBQVU7OENBQWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBHO0dBeEh3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3g/ZWUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG5cclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHNlbmhhOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHsnb2snOiB0cnVlfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBiZW0tc3VjZWRpZG8hJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFsaGEgbm8gbG9naW4uIFZlcmlmaXF1ZSBzdWFzIGNyZWRlbmNpYWlzLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHJlYWxpemFyIGEgc29saWNpdGHDp8OjbzonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTEyIGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctc21cIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xMCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbG9qYS5wb3J0b3NlZ3Vyby5jb20uYnIvY29udGVudC9kYW0vcG9ydG8tc3RvcmUvaGVhZGVyL0xvZ29fSG9sZGluZ19Qb3J0b1NlZ3Vyb19Qb3NpdGl2by5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIllvdXIgQ29tcGFueVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy05IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBFbnRyZSBjb20gYSBzdWEgY29udGEgUG9ydG9cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy1zbVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgRW5kZXJlw6dvIGRlIEVtYWlsXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5oYVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZW5oYVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRXNxdWVjZXUgYSBzZW5oYT9cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zZW5oYX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFbnRyYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEwIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgIEFpbmRhIG7Do28gw6kgY2xpZW50ZSBwb3J0bz97JyAnfVxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgQ3JpYXIgY29udGFcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG4gICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInNlbmhhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJvayIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.jsx\n"));

/***/ })

});