$(document).ready();

alert("Must be filled out");


// This submits the form
$(document).ready(function validateForm() {
    var x = document.forms["name_last"]["name_first"].value;
    if (x == null || x == "") {
        alert("Must be filled out");
            return false;
    }
});

$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

validateForm();
