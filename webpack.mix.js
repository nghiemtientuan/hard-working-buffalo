const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'public/bower_components/assets/Admin/css/font.css',
    'public/bower_components/assets/Admin/css/icons/icomoon/styles.css',
    'public/bower_components/assets/Admin/css/bootstrap.css',
    'public/bower_components/assets/Admin/css/core.css',
    'public/bower_components/assets/Admin/css/components.css',
    'public/bower_components/assets/Admin/css/colors.css',
    'public/bower_components/assets/Admin/css/icheck/icheck-material.min.css',
    'public/bower_components/assets/Admin/css/toastr/toastr.min.css',
    'resources/sass/app.css',
    'resources/sass/Admin/app.css',
], 'public/css/admin.css')
.js([
    'public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js',
    'public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js',
    'public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js',
    'public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js',
    'public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js',
    'public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js',
    'public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js',
    'public/bower_components/assets/Admin/js/core/app.js',
    'public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js',
    'public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js',
    'public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js',
    'public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js',
    'public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js',
    'public/bower_components/assets/Admin/js/pages/extra_trees.js',
    'resources/js/Admin/app.js',
], 'public/js/admin.js')
.copy('resources/js/Admin/list_category.js', 'public/js/Admin/list_category.js')
.copy('resources/js/Admin/list_student.js', 'public/js/Admin/list_student.js')
.copy('resources/js/Admin/list_user.js', 'public/js/Admin/list_user.js')
.copy('resources/js/Admin/list_question.js', 'public/js/Admin/list_question.js')
.copy('resources/js/Admin/list_test.js', 'public/js/Admin/list_test.js')
.copy('resources/js/Admin/list_format.js', 'public/js/Admin/list_format.js')
.copy('resources/js/Admin/list_question_comment.js', 'public/js/Admin/list_question_comment.js')
.copy('resources/js/Admin/profile.js', 'public/js/Admin/profile.js')
.copy('resources/js/Admin/editQuestion.js', 'public/js/Admin/editQuestion.js')
.copy('resources/js/Admin/addQuestion.js', 'public/js/Admin/addQuestion.js')
.copy('resources/js/Admin/list_question_in_test.js', 'public/js/Admin/list_question_in_test.js')
.copy('resources/js/Admin/editFormat.js', 'public/js/Admin/editFormat.js')
.copy('resources/js/common/helper.js', 'public/js/common/helper.js')
.options({
    processCssUrls: false
}).version();

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
});

mix.styles([
    'public/bower_components/assets/Admin/css/icheck/icheck-material.min.css',
    'public/bower_components/assets/Client/css/style.css',
    'resources/sass/app.css',
    'resources/sass/Client/app.css',
], 'public/css/client.css')
.styles([
    'resources/sass/Client/profile.css',
], 'public/css/profile.css')
.copy('resources/js/Client', 'public/js/Client')
.options({
    processCssUrls: false
}).version();
