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
    variant: 'default',
});
var delegatedProps = (0, core_1.reactiveOmit)(props, 'inset', 'variant');
var forwardedProps = (0, reka_ui_1.useForwardProps)(delegatedProps);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_withDefaultsArg = (function (t) { return t; })({
    variant: 'default',
});
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.DropdownMenuItem;
/** @type {[typeof __VLS_components.DropdownMenuItem, typeof __VLS_components.DropdownMenuItem, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ dataSlot: "dropdown-menu-item", dataInset: (__VLS_ctx.inset ? '' : undefined), dataVariant: (__VLS_ctx.variant) }, (__VLS_ctx.forwardedProps)), { class: (__VLS_ctx.cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class)) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "dropdown-menu-item", dataInset: (__VLS_ctx.inset ? '' : undefined), dataVariant: (__VLS_ctx.variant) }, (__VLS_ctx.forwardedProps)), { class: (__VLS_ctx.cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
var __VLS_3;
// @ts-ignore
var __VLS_6 = __VLS_5;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            DropdownMenuItem: reka_ui_1.DropdownMenuItem,
            forwardedProps: forwardedProps,
        };
    },
    __typeProps: {},
    props: {},
});
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
    props: {},
});
exports.default = {};
; /* PartiallyEnd: #4569/main.vue */
