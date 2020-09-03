showPopup = (url,content) =>{
    const popup = document.getElementById('popup1');
    const url_element = document.getElementById('url');
    url_element.href = url;
    !content &&( url_element.innerHTML = url);
    popup.classList.add('showPopup')
    
}

closePopup = () => {
    console.log('hi')
    const popup = document.getElementById('popup1')
    popup.classList.remove('showPopup')
}
