window.onload = function() {

    var form = getById("my-form");
    form.onsubmit = validate;

    function validate() {
        customValidation();

        var noErrors = true;
        for(var i = 0; i < form.length; i++) {
            var field = form[i];
            if(!field.checkValidity()) {
                noErrors = false;
            }
            updateError(field);
        }
        return noErrors;
    }

    function customValidation() {
        var name = getById("name");
        name.setCustomValidity(checkNamesStartWithUppercase(name.value)
            ? "" : "Namen müssen mit einem Grossbuchstaben beginnen");
    }

    function checkNamesStartWithUppercase(value) {
        if(value != "") {
            names = value.split(" ");
            for(var i = 0; i < names.length; i++) {
                var first = names[i].substring(0,1);
                if(first.toLowerCase() == first) {
                    return false;
                }
            }
        }
        return true;
    }


    function updateError(field) {
        var errorDiv = getById("error-" + field.id);
        if(errorDiv) {
            errorDiv.innerText = field.validationMessage;
        }
    }

    function getById(id) {
        return document.getElementById(id);
    }
}
