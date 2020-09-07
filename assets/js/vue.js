

const products = [
  { id: 1, description: "Mon bb adoré", price: 1000, img: 'assets/img/sigma1.jpeg'},
  { id: 2, description: 'Mon amour', price:1000, img: 'assets/img/reb.JPG'},
  { id: 3, description: 'Père de famille', price: 1000, img: 'assets/img/davy.JPG'},
]


const Home = {
	template: '#home',
	name: 'Home',
	data: () => {
		return {

			products,
			searchkey:'',
			liked: [],
			cart: []
		}
	},
	computed: {
      filteredList(){
      	return this.products.filter((product) => {
      		return product.description.toLowerCase().includes(this.searchkey.toLowerCase());
      	})
      }
	},

	methods: {
		setLikeCookie(){
			document.addEventListener('input', () => {
				setTimeout(() => {
					 $cookies.set('like', JSON.stringify(this.liked));

				}, 300);

					
		
			} )

		},

		cartTotalAmount(){

			let total = 0;

			for(let item in this.cart){
				total = total + (this.cart[item].quantity * this.cart[item].price);
			}
			return total;
		},
			itemTotalAmount(){

			let itemTotal = 0;

			for(let item in this.cart){
				itemTotal = itemTotal + (this.cart[item].quantity);
			}
			return itemTotal;
		},

		addTocart(product){

			for(let i = 0; i < this.cart.length; i++){
             if(this.cart[i].id == product.id){

             	return this.cart[i].quantity++

             }

			}
			this.cart.push({
				id: product.id,
				img: product.img,
				description: product.description,
				price: product.price,
				quantity: 1
			})
		},

		cartPlusOne(product){
			product.quantity = product.quantity + 1;
            

		},
		cartMoinsOne(product, id){
			if(product.quantity == 1){

				this.cartRemoveItem(id);

			} else {

				product.quantity = product.quantity - 1; 
			}

			},

        cartRemoveItem(id){
			this.$delete(this.cart, id)
            

		}

	}

}

const Usersettings = {
	template: '<h1>Parametres utilisateurs indisponible pour le moment</h1>',
	name: 'Usersettings'
}
const Wishlist = {
	template: '<h1>Parametre indisponible pour le moment</h1>',
	name: 'Wishlist'
}
const ShoppingCart = {
	template: '<h1>Affichage du panier indisponible pour le moment</h1>',
	name: 'ShoppingCart'
}
 

const router = new VueRouter({
	routes: [
 { path: '/', component: Home, name:'Home' },
 { path: '/User-settings', component: Usersettings, name : 'Usersettings' },
 { path: '/Wish-list', component: Wishlist, name: 'Wishlist' },
 { path: '/Shopping-cart', component: ShoppingCart, name: 'ShoppingCart'  }
	]
})


 const vue = new Vue({
  router
 }).$mount('#app');