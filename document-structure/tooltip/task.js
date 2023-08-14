const tooltipHas = document.querySelectorAll('.has-tooltip'),
    tooltip = document.createElement('div');

function showTooltip(item) {
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
        tooltip.innerText = item.getAttribute('Title');
        item.append(tooltip);  
}

tooltipHas.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        tooltip.classList.remove('tooltip_active');
        showTooltip(item);
        let leftPosition = item.getBoundingClientRect().left;
        let topPosition = item.getBoundingClientRect().top;
        console.log(item.getBoundingClientRect().right);
        tooltip.setAttribute('style', `left: ${leftPosition}px; top: ${topPosition+20}px`);
    });
});

window.addEventListener('scroll', () => {
    tooltip.classList.remove('tooltip_active');
});