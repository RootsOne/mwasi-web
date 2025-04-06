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
exports.useFormField = useFormField;
var vee_validate_1 = require("vee-validate");
var vue_1 = require("vue");
var injectionKeys_1 = require("./injectionKeys");
function useFormField() {
    var fieldContext = (0, vue_1.inject)(vee_validate_1.FieldContextKey);
    var fieldItemContext = (0, vue_1.inject)(injectionKeys_1.FORM_ITEM_INJECTION_KEY);
    if (!fieldContext)
        throw new Error('useFormField should be used within <FormField>');
    var name = fieldContext.name;
    var id = fieldItemContext;
    var fieldState = {
        valid: (0, vee_validate_1.useIsFieldValid)(name),
        isDirty: (0, vee_validate_1.useIsFieldDirty)(name),
        isTouched: (0, vee_validate_1.useIsFieldTouched)(name),
        error: (0, vee_validate_1.useFieldError)(name),
    };
    return __assign({ id: id, name: name, formItemId: "".concat(id, "-form-item"), formDescriptionId: "".concat(id, "-form-item-description"), formMessageId: "".concat(id, "-form-item-message") }, fieldState);
}
