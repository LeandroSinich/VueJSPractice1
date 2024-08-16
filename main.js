const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 11,
            url: 'https://www.linkedin.com/in/leandrosinich/',
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id:2234, color: 'green', image:'./assets/images/socks_green.jpg'},
                {id:2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        deleteFromCart(){
            this.cart -= 1
        }
    }
})
