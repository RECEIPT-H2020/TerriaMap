getData = () => {
    return fetch(`./soy-content-vega-spec.json`)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            json.encoding.color.legend.orient = 'bottom';
            return json
        });
};

resetChart = async () => {
    const res = await getData();
    const vegaEmbed = window.vegaEmbed;
    vegaEmbed("#vis", "soy-content-vega-spec.json")
        .catch(console.error);
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 420) {
            vegaEmbed("#vis", res)
        }
    });
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
