function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    const icon = document.getElementById('basic-dropdown-icon');
    icon.style.transform = menu.classList.contains('hidden') ? 'rotate(180deg)' : 'rotate(0deg)';
    menu.classList.toggle('hidden');

}

function selectOption(option) {
    const label = document.getElementById('dropdownLabel');
    label.textContent = option;
    toggleDropdown();
}

document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('dropdownMenu');
    const trigger = e.target.closest('button');

    if (!trigger && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    function togglePasswordField() {
        const openEye = document.getElementById('eye-open');
        const closeEye = document.getElementById('eye-close');
        const passwordField = document.getElementById('password-field');

        if (!passwordField || !openEye || !closeEye) {
            console.error("One or more elements not found");
            return;
        }

        openEye.classList.toggle("hidden");
        closeEye.classList.toggle("hidden");

        passwordField.type = passwordField.type === "password" ? "text" : "password";
        passwordField.focus();
    }
    window.togglePasswordField = togglePasswordField;
});
