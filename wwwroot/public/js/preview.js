
window.onload = () => {
    const all_links = document.querySelectorAll('.preview a');
    loadJson(all_links);
    resetChart();
}

const loadJson = (all_links) => {
    fetch('links.json')
        .then(response => response.json())
        .then(content => setData(content, all_links))
}
const setData = (data, links) => {
    data.map((item, index) => {
        if (item['text'] == links[index].textContent.replace(/[\[\]']+/g, '')) {
            item['element'] = links[index]
            console.log('setData');
            createElement(item)
        }
    })

}
const createElement = (el) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mini-preview-wrapper');
    const header = document.createElement('h5');
    header.textContent = el.title
    const screenshot = document.createElement('div');
    screenshot.classList.add('screenshot');
    const image = document.createElement('img');
    image.src = el.image;
    screenshot.append(image);
    wrapper.append(header)
    wrapper.append(screenshot)
    el.element.appendChild(wrapper);
    console.log('createElement');
    addEventsListener(el.element);
}
const addEventsListener = (el) => {
    el.addEventListener('mouseenter', (event) => setPosition(event));
    el.addEventListener('mouseleave', () => resetPosition());
}
const setPosition = (event) => {
    const wrapper = event.target.querySelector('.mini-preview-wrapper');
    console.log(event.pageX, window.innerWidth)
    if (window.innerWidth - event.pageX <= 256) {
        wrapper.classList.add('right');
    } else if (event.pageX <= 256) {
        wrapper.classList.add('left');
    }
}
const resetPosition = () => {
    const wrapper = event.target.querySelector('.mini-preview-wrapper');
    wrapper.classList.remove("left", "right");

}