function validateDisabled(form, elementDisabled) {
    if (form.valid()) {
        elementDisabled.prop('disabled', false);
    } else {
        elementDisabled.prop('disabled', true);
    }
}

function trans(key, replace = {})
{
    let translation = key.split('.').reduce((t, i) => t[i] || null, window.translations) || key;

    for (var placeholder in replace) {
        translation = translation.replace(`:${placeholder}`, replace[placeholder]);
    }

    return translation;
}
