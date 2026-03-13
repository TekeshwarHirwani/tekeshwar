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
    });
});

function switchPage(pageId) {
    const targetLink = document.querySelector(`[data-target="${pageId}"]`);
    if (targetLink) targetLink.click();
}