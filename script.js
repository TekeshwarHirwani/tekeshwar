// ── Page Navigation ──────────────────────────────────────────
document.querySelectorAll('.nav-links li').forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');

        document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            if (page.id === target) {
                page.classList.add('active');
                window.scrollTo(0, 0);
            }
        });

        // Close sidebar drawer on mobile after nav
        closeSidebar();
    });
});

function switchPage(pageId) {
    const targetLink = document.querySelector(`[data-target="${pageId}"]`);
    if (targetLink) targetLink.click();
}

// ── Hamburger / Drawer ────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const sidebar   = document.querySelector('.sidebar');
const overlay   = document.getElementById('overlay');

function openSidebar() {
    sidebar.classList.add('open');
    hamburger.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

// Close drawer on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
});

// Re-open sidebar properly when resizing back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
        document.body.style.overflow = '';
    }
});