"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/lib/utils");
var reka_ui_1 = require("reka-ui");
var vue_1 = require("vue");
var injectionKeys_1 = require("./injectionKeys");
var props = defineProps();
var id = (0, reka_ui_1.useId)();
(0, vue_1.provide)(injectionKeys_1.FORM_ITEM_INJECTION_KEY, id);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ 'data-slot': "form-item" }, { class: (__VLS_ctx.cn('grid gap-2', props.class)) }));
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
        };
    },
    __typeProps: {},
});
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
});
exports.default = {};
; /* PartiallyEnd: #4569/main.vue */
