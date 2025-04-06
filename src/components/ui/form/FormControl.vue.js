"use strict";
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
var reka_ui_1 = require("reka-ui");
var useFormField_1 = require("./useFormField");
var _a = (0, useFormField_1.useFormField)(), error = _a.error, formItemId = _a.formItemId, formDescriptionId = _a.formDescriptionId, formMessageId = _a.formMessageId;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.Slot;
/** @type {[typeof __VLS_components.Slot, typeof __VLS_components.Slot, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    id: (__VLS_ctx.formItemId),
    dataSlot: "form-control",
    'aria-describedby': (!__VLS_ctx.error ? "".concat(__VLS_ctx.formDescriptionId) : "".concat(__VLS_ctx.formDescriptionId, " ").concat(__VLS_ctx.formMessageId)),
    'aria-invalid': (!!__VLS_ctx.error),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        id: (__VLS_ctx.formItemId),
        dataSlot: "form-control",
        'aria-describedby': (!__VLS_ctx.error ? "".concat(__VLS_ctx.formDescriptionId) : "".concat(__VLS_ctx.formDescriptionId, " ").concat(__VLS_ctx.formMessageId)),
        'aria-invalid': (!!__VLS_ctx.error),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
            Slot: reka_ui_1.Slot,
            error: error,
            formItemId: formItemId,
            formDescriptionId: formDescriptionId,
            formMessageId: formMessageId,
        };
    },
});
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
exports.default = {};
; /* PartiallyEnd: #4569/main.vue */
