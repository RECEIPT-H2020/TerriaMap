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
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 420) {
            vegaEmbed("#vis", res)
        } else {
            vegaEmbed("#vis", "soy-content-vega-spec.json")
                .catch(console.error);
        }
    });
}
