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
var reka_ui_1 = require("reka-ui");
var vue_1 = require("vue");
var props = defineProps();
var delegatedProps = (0, vue_1.computed)(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ComboboxGroup;
/** @type {[typeof __VLS_components.ComboboxGroup, typeof __VLS_components.ComboboxGroup, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ dataSlot: "combobox-group" }, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('overflow-hidden p-1 text-foreground', props.class)) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "combobox-group" }, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('overflow-hidden p-1 text-foreground', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
if (__VLS_ctx.heading) {
    var __VLS_5 = {}.ComboboxLabel;
    /** @type {[typeof __VLS_components.ComboboxLabel, typeof __VLS_components.ComboboxLabel, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    __VLS_8.slots.default;
    (__VLS_ctx.heading);
    var __VLS_8;
}
var __VLS_9 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            ComboboxGroup: reka_ui_1.ComboboxGroup,
            ComboboxLabel: reka_ui_1.ComboboxLabel,
            delegatedProps: delegatedProps,
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
