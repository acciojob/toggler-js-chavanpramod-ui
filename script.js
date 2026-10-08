const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach(function (toggle) {
    toggle.addEventListener("change", function () {
        if (good.checked && cheap.checked && fast.checked) {

            if (this === good) {
                fast.checked = false;
            }

            if (this === cheap) {
                good.checked = false;
            }

            if (this === fast) {
                cheap.checked = false;
            }
        }
    });
});