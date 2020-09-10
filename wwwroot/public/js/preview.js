
window.onload = () => {
    const all_links = document.querySelectorAll('.preview a');
    minipreview(all_links);
}
const minipreview = (links) => {
    links.forEach(element => {
        generate(element);
    });
}
const generate = (el) => {
    createElement(el);
    addEventsListener(el);
}
const createElement = (el) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mini-preview-wrapper');
    const header = document.createElement('h5');
    header.textContent = "The Argentine portion of the soybean commodity chain";
    const screenshot = document.createElement('div');
    screenshot.classList.add('screenshot');
    const image = document.createElement('img');
    image.src = "../../images/screenshots/page_001_002_1.png";
    screenshot.append(image);
    wrapper.append(header)
    wrapper.append(screenshot)
    el.appendChild(wrapper);
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
    const wrapper = event.target.querySelector('mini-preview-wrapper');
    wrapper.classList.remove("left", "right");

}