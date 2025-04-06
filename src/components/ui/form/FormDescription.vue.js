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
var useFormField_1 = require("./useFormField");
var props = defineProps();
var formDescriptionId = (0, useFormField_1.useFormField)().formDescriptionId;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ id: (__VLS_ctx.formDescriptionId), 'data-slot': "form-description" }, { class: (__VLS_ctx.cn('text-muted-foreground text-sm', props.class)) }));
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cn: utils_1.cn,
            formDescriptionId: formDescriptionId,
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
