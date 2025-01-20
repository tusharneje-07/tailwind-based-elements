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