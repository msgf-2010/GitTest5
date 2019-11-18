"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Dashboard_1 = require("./Dashboard");
var Widgets_1 = require("./Widgets");
var Content = function () {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Dashboard_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/dashboard", component: Dashboard_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/widgets", component: Widgets_1.default })));
};
exports.default = Content;
//# sourceMappingURL=Content.js.map