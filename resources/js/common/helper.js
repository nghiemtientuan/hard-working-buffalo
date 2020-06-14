var previewZoomButtonClasses = {
    toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
    fullscreen: 'btn btn-default btn-icon btn-xs',
    borderless: 'btn btn-default btn-icon btn-xs',
    close: 'btn btn-default btn-icon btn-xs'
};

// Icons inside zoom modal classes
var previewZoomButtonIcons = {
    prev: '<i class="icon-arrow-left32"></i>',
    next: '<i class="icon-arrow-right32"></i>',
    toggleheader: '<i class="icon-menu-open"></i>',
    fullscreen: '<i class="icon-screen-full"></i>',
    borderless: '<i class="icon-alignment-unalign"></i>',
    close: '<i class="icon-cross3"></i>'
};

// File actions
var fileActionSettings = {
    zoomClass: 'btn btn-link btn-xs btn-icon',
    zoomIcon: '<i class="icon-zoomin3"></i>',
    dragClass: 'btn btn-link btn-xs btn-icon',
    dragIcon: '<i class="icon-three-bars"></i>',
    removeClass: 'btn btn-link btn-icon btn-xs',
    removeIcon: '<i class="icon-trash"></i>',
    indicatorNew: '<i class="icon-file-plus text-slate"></i>',
    indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
    indicatorError: '<i class="icon-cross2 text-danger"></i>',
    indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
};

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

function renderInputFile (element) {
    element.fileinput({
        browseLabel: 'Browse',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
        },
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });
}

function randomString() {
    return Math.random().toString(36).substr(2, 10).toUpperCase();
}

let STATUS_CODE = {
    'code_200': 200,
    'code_400': 400,
    'code_401': 401,
    'code_402': 402,
    'code_404': 404
}

//toasts config
toastr.options.closeButton = true;
toastr.options.preventDuplicates = true;
toastr.options.progressBar = true;

//format currency
function formatCurrency(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function userDefaultImage(file) {
    if (file) {
        return file.base_folder;
    } else {
        return '/images/common/profile.png';
    }
}

const USER_TYPE = {
    user: 'App\\Models\\User',
    student: 'App\\Models\\Student'
}
