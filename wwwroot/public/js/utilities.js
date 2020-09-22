showPopup = (url,content) =>{
    const popup = document.getElementById('popup1');
    const url_element = document.getElementById('url');
    url_element.href = url;
    !content &&( url_element.innerHTML = url);
    popup.classList.add('showPopup')
    
}

closePopup = () => {
    const popup = document.getElementById('popup1')
    popup.classList.remove('showPopup')
}
getData = () =>{
    return fetch(`./soy-content-vega-spec.json`)
     .then(function(response) {
       return response.json()
     })
        .then(function (json) {
            json.encoding.color.legend.orient = 'bottom';
       return json
     });
};
   
resetChart = () => {
    window.addEventListener('resize', resetChart);
    const vegaEmbed = window.vegaEmbed;
    if (window.innerWidth <= 420) {
            getData().then(res => {
                vegaEmbed("#vis", res)
            })
    } else {
        vegaEmbed("#vis", "soy-content-vega-spec.json")
        .catch(console.error);
    }
}
