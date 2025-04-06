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
defineOptions({
    inheritAttrs: false,
});
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ 'data-slot': "command-input-wrapper" }, { class: "flex h-9 items-center gap-2 border-b px-3" }));
var __VLS_0 = {}.SearchIcon;
/** @type {[typeof __VLS_components.SearchIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "size-4 shrink-0 opacity-50" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "size-4 shrink-0 opacity-50" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ComboboxInput;
/** @type {[typeof __VLS_components.ComboboxInput, typeof __VLS_components.ComboboxInput, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ dataSlot: "command-input" }, { class: (__VLS_ctx.cn('placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50', props.class)) }), (__assign(__assign({}, __VLS_ctx.forwarded), __VLS_ctx.$attrs)))));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "command-input" }, { class: (__VLS_ctx.cn('placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50', props.class)) }), (__assign(__assign({}, __VLS_ctx.forwarded), __VLS_ctx.$attrs)))], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
var __VLS_8 = {};
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['size-4']} */ ;
/** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-50']} */ ;
// @ts-ignore
var __VLS_9 = __VLS_8;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            SearchIcon: lucide_vue_next_1.SearchIcon,
            ComboboxInput: reka_ui_1.ComboboxInput,
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
