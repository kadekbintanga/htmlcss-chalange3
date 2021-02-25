$(function(){

    $('.showAddModal').on('click', function() {
        $('#titlemodalLabel').html('Add Project');
        $('.modal-footer button[type=submit]').html('Add');
    });

    $('.showUpdateModal').on('click', function() {
        $('#titlemodalLabel').html('Edit Project');
        $('.modal-footer button[type=submit]').html('Update');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/project/update');


        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/phpmvc/public/project/getupdate',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){
                $('#namep').val(data.namap);
                $('#linkpdf').val(data.filepdf);
                $('#linkyt').val(data.youtube);
                $('#id').val(data.id);
            }
        });

    });


});