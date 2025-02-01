let currentStep = 1;
        
// Change step using jQuery
function changeStep(step) {
    $(".step").removeClass("active");
    $(".btn").removeClass("active");
    $(`#step${step}`).addClass("active");
    $(`#tab${step}`).addClass("active");
    currentStep = step;
}

// Next step button using jQuery
$("#nextBtn").click(function() {
    let valid = true;
    $(`#step${currentStep} input, #step${currentStep} textarea`).each(function() {
        if ($(this).prop("required") && !$(this).val()) {
            $(this).addClass('is-invalid');
            valid = false;
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    if (valid && currentStep < 4) changeStep(currentStep + 1);
});

// Previous step button using jQuery
$("#prevBtn").click(function() {
    if (currentStep > 1) changeStep(currentStep - 1);
});

// Form submit handler
$("#multiStepForm").submit(function(event) {
    event.preventDefault();
    let toast = new bootstrap.Toast($("#toastMessage"));
    toast.show();
});

// Initialize TinyMCE
tinymce.init({ selector: '#eventDescription' });

// Initialize phone input with intl-tel-input
const phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput, { initialCountry: "auto" });