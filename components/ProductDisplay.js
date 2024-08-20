app.component("product-display", {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
      <div class="product-image">
        <img
          :src="image"
          alt="description"
          :class="{ 'out-of-stock-img': !inStock }"
        />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">{{ isOnSale }}</p>
        <p v-if=" inStock > 10">En Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">
          Ultimas unidades disponibles
        </p>
        <p v-else>Sin Stock</p>
        
        <p>{{shipping}}</p>
        <div
          class="color-circle"
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          :style="{ backgroundColor: variant.color }"
        ></div>
        
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          @click="addToCart"
          :disabled="!inStock"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>`
  ,
  data() {
    return {
      product: "Socks",
      selectedVariant: 0,
      url: "https://www.linkedin.com/in/leandrosinich/",
      
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 10,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      brand: "Vue Mastery",
      onSale: false,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    deleteFromCart() {
      this.cart -= 1;
    },
  },
  computed: {
    title() {
      return this.brand + "" + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    isOnSale() {
      return `${this.brand} ${this.product} is on sale`;
    },
    shipping(){
        return this.premium? 'free Shippin' : 'Ask for costs';
    }
  },
});
