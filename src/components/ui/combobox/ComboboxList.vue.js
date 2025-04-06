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
var core_1 = require("@vueuse/core");
var reka_ui_1 = require("reka-ui");
var props = withDefaults(defineProps(), {
    position: 'popper',
    align: 'center',
    sideOffset: 4,
});
var emits = defineEmits();
var delegatedProps = (0, core_1.reactiveOmit)(props, 'class', 'viewportClass');
var forwarded = (0, reka_ui_1.useForwardPropsEmits)(delegatedProps, emits);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_withDefaultsArg = (function (t) { return t; })({
    position: 'popper',
    align: 'center',
    sideOffset: 4,
});
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ComboboxPortal;
/** @type {[typeof __VLS_components.ComboboxPortal, typeof __VLS_components.ComboboxPortal, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ComboboxContent;
/** @type {[typeof __VLS_components.ComboboxContent, typeof __VLS_components.ComboboxContent, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign(__assign({ dataSlot: "combobox-list" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn('z-50 w-[200px] rounded-md border bg-popover text-popover-foreground origin-(--reka-combobox-content-transform-origin) overflow-hidden shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', props.class)) })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "combobox-list" }, (__VLS_ctx.forwarded)), { class: (__VLS_ctx.cn('z-50 w-[200px] rounded-md border bg-popover text-popover-foreground origin-(--reka-combobox-content-transform-origin) overflow-hidden shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {};
var __VLS_8;
var __VLS_3;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            ComboboxContent: reka_ui_1.ComboboxContent,
            ComboboxPortal: reka_ui_1.ComboboxPortal,
            forwarded: forwarded,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
exports.default = {};
; /* PartiallyEnd: #4569/main.vue */
