// Carosel
$(".slider").slick({

    // normal options...
    infinite: true,

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});
// Confirmation
$(document).ready(function () {
    $("#confirmButton").click(function () {
        $.confirm({
            title: 'Confirmation!',
            content: 'Are you sure you want to proceed?',
            buttons: {
                Yes: function () {
                    $.alert('You clicked Yes!');
                },
                No: function () {
                    $.alert('You clicked No!');
                }
            }
        });
    });
});
// Tree table
$(document).ready(function () {
    $("#treeTable").treetable({ expandable: true });
});
// Data table
$(document).ready(function () {
    $('#example').DataTable();
});
// Lazyload
$(document).ready(function () {
    $('.lazy').Lazy();
});
// Fancy Box
$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "close"
        ]
    });
});
// Lightbox2
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});
// Timepicker
$(document).ready(function () {
    $('#timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '08:00',
        maxTime: '18:00',
        defaultTime: '08:00',
        startTime: '08:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});
// Date picker
$(document).ready(function () {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
    });
});
// Nice Select
$(document).ready(function () {
    $('#niceSelect').niceSelect();
});
// Jquery Form
$(document).ready(function () {
    $('#myForm').ajaxForm({
        beforeSubmit: function () {
            alert('Submitting form...');
        },
        success: function (response) {
            alert('Form submitted successfully!');
        },
        error: function () {
            alert('Error submitting form.');
        }
    });
});
// Autonumeric
$(document).ready(function () {
    new AutoNumeric('#currencyInput', {
        currencySymbol: '$',
        decimalPlaces: 2,
        digitGroupSeparator: ',',
        decimalCharacter: '.',
        minimumValue: '0',
        maximumValue: '9999999'
    });
});
// Input mask
$(document).ready(function () {
    $("#phone").inputmask("(999) 999-9999"); // Mask for phone numbers
});
// Jquery validation
$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});
// Jquery modal
$(document).ready(function() {
    $('#myModal').modal();
});
// Tooltipster
$(document).ready(function() {
    $('#tooltipButton').tooltipster({
        theme: 'tooltipster-light',
        animation: 'fade',
        delay: 200,
        trigger: 'hover'
    });
});
// Chosen
$(document).ready(function() {
    $(".chosen-select").chosen({
        disable_search_threshold: 5,
        no_results_text: "Oops, nothing found!",
        width: "100%"
    });
});
// Select2
$(document).ready(function() {
    $('#select2Example').select2({
        placeholder: "Select an option",
        allowClear: true
    });
});
// Jquery UI
$(document).ready(function() {
    $("#draggable").draggable();
});