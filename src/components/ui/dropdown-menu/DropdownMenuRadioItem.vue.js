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
var __VLS_0 = {}.DropdownMenuRadioItem;
/** @type {[typeof __VLS_components.DropdownMenuRadioItem, typeof __VLS_components.DropdownMenuRadioItem, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ dataSlot: "dropdown-menu-radio-item" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class)) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "dropdown-menu-radio-item" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }));
var __VLS_5 = {}.DropdownMenuItemIndicator;
/** @type {[typeof __VLS_components.DropdownMenuItemIndicator, typeof __VLS_components.DropdownMenuItemIndicator, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {}.Circle;
/** @type {[typeof __VLS_components.Circle, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ class: "size-2 fill-current" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: "size-2 fill-current" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_8;
var __VLS_13 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['size-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['size-2']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-current']} */ ;
// @ts-ignore
var __VLS_14 = __VLS_13;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            Circle: lucide_vue_next_1.Circle,
            DropdownMenuItemIndicator: reka_ui_1.DropdownMenuItemIndicator,
            DropdownMenuRadioItem: reka_ui_1.DropdownMenuRadioItem,
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
