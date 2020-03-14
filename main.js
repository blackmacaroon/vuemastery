var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        varients: [
            {
                varientId: 2234,
                varientColor: "green",
                varientImage: "./assets/vmSocks-green-onWhite.jpg"
            },
            {
                varientId: 2235,
                varientColor: "blue",
                varientImage: "./assets/vmSocks-blue-onWhite.jpg"
            }
        ],
        sizes: ["SM-MED", "MED-LG"],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateProduct(varientImage) {
            this.image = varientImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})