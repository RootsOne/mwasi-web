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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/lib/utils");
var lucide_vue_next_1 = require("lucide-vue-next");
var props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ 'data-slot': "breadcrumb-ellipsis", role: "presentation", 'aria-hidden': "true" }, { class: (__VLS_ctx.cn('flex size-9 items-center justify-center', props.class)) }));
var __VLS_0 = {};
var __VLS_2 = {}.MoreHorizontal;
/** @type {[typeof __VLS_components.MoreHorizontal, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2(__assign({ class: "size-4" })));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([__assign({ class: "size-4" })], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "sr-only" }));
/** @type {__VLS_StyleScopedClasses['size-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            MoreHorizontal: lucide_vue_next_1.MoreHorizontal,
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
