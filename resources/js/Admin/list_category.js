$(function(){
    $('#treeCategories').jstree();
    $(document).on('click', '.add_item', function () {
        var href = this.dataset.href;
        window.open(href, "_self");
    });
});
