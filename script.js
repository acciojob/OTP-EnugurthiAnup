//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener('input', (e) => {
        const value = e.target.value;

        // Allow only numbers
        e.target.value = value.replace(/[^0-9]/g, "");

        if (value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus(); // move to next
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
            if (input.value === "") {
                // go to previous input if empty
                if (index > 0) {
                    inputs[index - 1].value = "";
                    inputs[index - 1].focus();
                }
            } else {
                // clear current box first
                input.value = "";
            }
        }
    });
});
