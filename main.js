const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',            
            selectedVariant: 0,
            url: 'https://www.linkedin.com/in/leandrosinich/',
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id:2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 10},
                {id:2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            cart: 0,
            brand: 'Vue Mastery',
            onSale: false
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
            console.log(index)
        },
        deleteFromCart(){
            this.cart -= 1
        }
    },
    computed: {
        title(){
            return this.brand + '' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },    
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        isOnSale(){
            return `${this.brand} ${this.product} is on sale`
        }    
    }
})
