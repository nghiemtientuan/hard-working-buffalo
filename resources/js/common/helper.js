function validateDisabled(form, elementDisabled) {
    if (form.valid()) {
        elementDisabled.prop('disabled', false);
    } else {
        elementDisabled.prop('disabled', true);
    }
}
