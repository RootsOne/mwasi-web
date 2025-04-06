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
var label_1 = require("@/components/ui/label");
var useFormField_1 = require("./useFormField");
var props = defineProps();
var _a = (0, useFormField_1.useFormField)(), error = _a.error, formItemId = _a.formItemId;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.Label;
/** @type {[typeof __VLS_components.Label, typeof __VLS_components.Label, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ dataSlot: "form-label", dataError: (!!__VLS_ctx.error) }, { class: (__VLS_ctx.cn('data-[error=true]:text-destructive-foreground', props.class)) }), { for: (__VLS_ctx.formItemId) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ dataSlot: "form-label", dataError: (!!__VLS_ctx.error) }, { class: (__VLS_ctx.cn('data-[error=true]:text-destructive-foreground', props.class)) }), { for: (__VLS_ctx.formItemId) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
            Label: label_1.Label,
            error: error,
            formItemId: formItemId,
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
