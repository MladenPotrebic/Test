$(function () {
    $("form[name='registration']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Please enter Your name",
            email: "Please enter a valid email address"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});



function handleFiles(files, id) {
    console.log(files);
    var children = "";
    for (var i = 0; i < files.length; ++i) {
        var fileType;
        console.log(files.item(i).type);
        if(files.item(i).type == 'application/pdf'){
            fileType = "PDF";
        }
        else{
            fileType = "DOC";
        }

        var fileName = sliceWord(files.item(i).name );

        children += ' <div class="file" onclick="return this.parentNode.remove()"> ' + 
        ' <div class="fileType">' + fileType + ' </div> ' +
        ' <div class="fileName">' + fileName + ' </div> ' +
        ' </div> '
    }

    $("#" + id + "-fileList").html(children);
}


function sliceWord(word){
    return word.slice(0,10) + '...'
}



