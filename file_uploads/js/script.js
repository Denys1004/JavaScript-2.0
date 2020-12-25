// File upload before submitting the form:
jQuery(document).ready(function ($) {
    var maxFileSize = 2 * 1024 * 1024; // max file size 2mb
    var queue = {};
    var form = $('form#uploadImages');
    var imagesList = $('#uploadImagesList');
    var itemPreviewTemplate = imagesList.find('.item.template').clone();
    itemPreviewTemplate.removeClass('template');
    imagesList.find('.item.template').remove();

    $('#addImages').on('change', function () {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                alert( 'Фотография должна быть в формате jpg, png или gif' );
                continue;
            }
            if ( file.size > maxFileSize ) {
                alert( 'Размер фотографии не должен превышать 2 Мб' );
                continue;
            }
            preview(files[i]);
        }
        this.value = '';
    });

    // Makig file Preview
    function preview(file) {
        var reader = new FileReader();
        reader.addEventListener('load', function(event) {
            var img = document.createElement('img');

            var itemPreview = itemPreviewTemplate.clone();

            itemPreview.find('.img-wrap img').attr('src', event.target.result);
            itemPreview.data('id', file.name);

            imagesList.append(itemPreview);

            queue[file.name] = file;

        });
        reader.readAsDataURL(file);
    }

     // Removing file
    imagesList.on('click', '.delete-link', function () {
        var item = $(this).closest('.item'),
            id = item.data('id');

        delete queue[id];

        item.remove();
    });

    // Sending form
    form.on('submit', function(event) {
        var formData = new FormData(this);
        for (var id in queue) {
            formData.append('images[]', queue[id]);
        }
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            async: true,
            success: function (res) {
                alert(res)
            },
            cache: false,
            contentType: false,
            processData: false
        });
        return false;
    });
});

// Sending form
form.on('submit', function(event) {
    var formData = new FormData(this);
    for (var id in queue) {
        formData.append('images[]', queue[id]);
    }

    $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        data: formData,
        async: true,
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            var progressBar = $('#progress-bar'),
                progressBg = progressBar.find('.progress-bg'),
                progressVal = progressBar.find('.progress-val');

            // Upload progress
            xhr.upload.addEventListener("progress", function(evt){
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = (percentComplete * 100).toFixed();
                    progressBg.css('width', percentComplete + '%');
                    progressVal.text(percentComplete + '%');
                }
            }, false);

            return xhr;
        },
        success: function (res) {
            alert(res)
        },
        cache: false,
        contentType: false,
        processData: false
    });

    return false;
});    