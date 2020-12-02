/* Create the tooltips for the link with the dataSet 'data-tooltip-title' */
const tooltips = document.querySelectorAll('[data-tooltip-title]');
Object.values(tooltips).map(t => {
  const content = document.createElement("div");
  content.className = "tooltip";
  content.innerHTML = `
        <img src="${t.dataset.tooltipImage}" alt="${t.dataset.tooltipTitle}">
        <span class="title">${t.dataset.tooltipTitle}</span>
        <span class="text">${t.dataset.tooltipDescription}</span>
`;
  tippy(t, {
    theme: 'light',
    content,
    allowHTML: true,
    touch: ['hold', 200], // 500ms delay
  });
});
