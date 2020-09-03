
const cartBtn = document.querySelector('.cart-btn')
const closecartBtn = document.querySelector('.close-cart');
const clearcartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOVerlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDom = document.querySelector('.products-center');

let car = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch('products.json');
      let data = await result.json();

      let products = data.items;
      products = products.map(item => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error)
    }
  }
}

class UI {
   displayProduct(products) {
     let result = ''
     products.forEach(product => {
       result += `
        <!-- single product -->
        <article class="product">
          <div class="img-container">
            <img 
              src=${product.image} 
              alt="product" 
              class="product-img"
            >
              <button class="bag-btn" data-id=${product.id}>
                  <i class="fas fa-shopping-cart"></i>
                  add to bags
              </button>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
          </div>
        </article>
        <!-- end of single product -->
       `;
     });
     productsDom.iierHTML = result;
   }
}

class Storage {

}

document.addEventListener('DOMContentLoaded', ()=> {
  const ui = new UI()
  const products = new Products();

  products.getProducts().then(products => ui.displayProducts(products))
})

