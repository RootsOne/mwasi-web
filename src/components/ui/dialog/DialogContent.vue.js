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
var DialogOverlay_vue_1 = require("./DialogOverlay.vue");
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
/** @type {[typeof DialogOverlay, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(DialogOverlay_vue_1.default, new DialogOverlay_vue_1.default({}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.DialogContent;
/** @type {[typeof __VLS_components.DialogContent, typeof __VLS_components.DialogContent, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ dataSlot: "dialog-content" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', props.class)) })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "dialog-content" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_11.slots.default;
var __VLS_12 = {};
var __VLS_14 = {}.DialogClose;
/** @type {[typeof __VLS_components.DialogClose, typeof __VLS_components.DialogClose, ]} */ ;
// @ts-ignore
var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14(__assign({ class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" })));
var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([__assign({ class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" })], __VLS_functionalComponentArgsRest(__VLS_15), false));
__VLS_17.slots.default;
var __VLS_18 = {}.X;
/** @type {[typeof __VLS_components.X, ]} */ ;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_19), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "sr-only" }));
var __VLS_17;
var __VLS_11;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['ring-offset-background']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-ring']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=open]:bg-accent']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=open]:text-muted-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-offset-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['[&_svg]:pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['[&_svg]:shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['[&_svg:not([class*=\'size-\'])]:size-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
// @ts-ignore
var __VLS_13 = __VLS_12;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            X: lucide_vue_next_1.X,
            DialogClose: reka_ui_1.DialogClose,
            DialogContent: reka_ui_1.DialogContent,
            DialogPortal: reka_ui_1.DialogPortal,
            DialogOverlay: DialogOverlay_vue_1.default,
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
