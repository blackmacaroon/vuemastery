var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        varients: [
            {
                varientId: 2234,
                varientColor: "green"
            },
            {
                varientId: 2235,
                varientColor: "blue"
            }
        ],
        sizes: ["SM-MED", "MED-LG"],
        cart: 0
    }
})