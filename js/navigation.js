// Mobile menu functionality
export function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuList = document.querySelector('nav ul');

    menuBtn?.addEventListener('click', () => {
        menuList?.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && menuList?.classList.contains('active')) {
            menuList.classList.remove('active');
        }
    });
}