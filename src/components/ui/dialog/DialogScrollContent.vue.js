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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var reka_ui_1 = require("reka-ui");
var vue_1 = require("vue");
var props = defineProps();
var emits = defineEmits();
var delegatedProps = (0, vue_1.computed)(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
var forwarded = (0, reka_ui_1.useForwardPropsEmits)(delegatedProps, emits);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.DialogPortal;
/** @type {[typeof __VLS_components.DialogPortal, typeof __VLS_components.DialogPortal, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.DialogOverlay;
/** @type {[typeof __VLS_components.DialogOverlay, typeof __VLS_components.DialogOverlay, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {}.DialogContent;
/** @type {[typeof __VLS_components.DialogContent, typeof __VLS_components.DialogContent, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign(__assign({ 'onPointerDownOutside': {} }, { class: (__VLS_ctx.cn('relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full', props.class)) }), (__VLS_ctx.forwarded))));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign(__assign({ 'onPointerDownOutside': {} }, { class: (__VLS_ctx.cn('relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full', props.class)) }), (__VLS_ctx.forwarded))], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_13;
var __VLS_14;
var __VLS_15;
var __VLS_16 = {
    onPointerDownOutside: (function (event) {
        var originalEvent = event.detail.originalEvent;
        var target = originalEvent.target;
        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
        }
    })
};
__VLS_12.slots.default;
var __VLS_17 = {};
var __VLS_19 = {}.DialogClose;
/** @type {[typeof __VLS_components.DialogClose, typeof __VLS_components.DialogClose, ]} */ ;
// @ts-ignore
var __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19(__assign({ class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" })));
var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" })], __VLS_functionalComponentArgsRest(__VLS_20), false));
__VLS_22.slots.default;
var __VLS_23 = {}.X;
/** @type {[typeof __VLS_components.X, ]} */ ;
// @ts-ignore
var __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23(__assign({ class: "w-4 h-4" })));
var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([__assign({ class: "w-4 h-4" })], __VLS_functionalComponentArgsRest(__VLS_24), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "sr-only" }));
var __VLS_22;
var __VLS_12;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/80']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=open]:animate-in']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=closed]:animate-out']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=closed]:fade-out-0']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=open]:fade-in-0']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
// @ts-ignore
var __VLS_18 = __VLS_17;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            X: lucide_vue_next_1.X,
            DialogClose: reka_ui_1.DialogClose,
            DialogContent: reka_ui_1.DialogContent,
            DialogOverlay: reka_ui_1.DialogOverlay,
            DialogPortal: reka_ui_1.DialogPortal,
            forwarded: forwarded,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
; /* PartiallyEnd: #4569/main.vue */
