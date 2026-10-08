//your JS code here. If required.
const checkboxes = document.querySelectorAll(".toggle-checkbox");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {
        if (this.checked) {

            const checked = document.querySelectorAll(
                ".toggle-checkbox:checked"
            );

            if (checked.length > 2) {
                checked[0].checked = false;
            }
        }
    });

});