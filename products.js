const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: './img/products/no-img.svg',
    imageDescription: "foto de produto uva crimson",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "foto de produto banana",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "foto de produto mamão",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "foto de produto maçã",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: './img/products/no-img.svg',
    imageDescription: "foto de produto refrigerante",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "foto de produto vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: './img/products/no-img.svg',
    imageDescription: "foto de produto água tônica",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "foto de produto água de coco",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "foto de produto sabonete",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: " foto de produto refrigerante",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "foto de produto limpa superfície",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: './img/products/no-img.svg',
    imageDescription: "foto de produto lustra móveis",
  },
];


const fruits = document.querySelector('.fruits')
const ulFruits = document.createElement('ul')
ulFruits.classList.add('ulFruits')
fruits.appendChild(ulFruits)

const drinks = document.querySelector('.drinks')
const ulDrinks = document.createElement('ul')
ulDrinks.classList.add('ulDrinks')
drinks.appendChild(ulDrinks)

const hygiene = document.querySelector('.hygiene')
const ulHygiene = document.createElement('ul')
ulHygiene.classList.add('ulHygiene')
hygiene.appendChild(ulHygiene)
console.log(ulDrinks, ulHygiene)

function renderFruitList(products) {
  for ( let i =0; i < products.length; i++) {
    if (products[i].category == 'Frutas') {

      
      const productCard = document.createElement('li')
      productCard.classList.add('product')
      const productImg = document.createElement('img')
      productImg.setAttribute('class','product-img')
      productImg.setAttribute('title', `${products[i].title}`)
      productImg.setAttribute('alt', `${products[i].imageDescription}`)
      productImg.setAttribute('src', `${products[i].image}`)
      


      const productMain = document.createElement('main')
      const productTitle = document.createElement('h1')
      productTitle.classList.add('product-title')
      productTitle.innerText = `${products[i].title}`
      const productCategory = document.createElement('h5')
      productCategory.classList.add('product-category')
      productCategory.innerText = `${products[i].category}`
      const productPrice = document.createElement('strong')
      productPrice.classList.add('product-price')
      productPrice.innerText = `${products[i].price}`
      productMain.append(productTitle,productCategory,productPrice)
      
      productCard.append(productImg,productMain)
      ulFruits.appendChild(productCard)
    }
    if (products[i].category == 'Bebidas'){
      const productCard = document.createElement('li')
      productCard.classList.add('product')
      const productImg = document.createElement('img')
      productImg.setAttribute('class','product-img')
      productImg.setAttribute('title', `${products[i].title}`)
      productImg.setAttribute('alt', `${products[i].imageDescription}`)
      productImg.setAttribute('src', `${products[i].image}`)
  
      const productMain = document.createElement('main')
      const productTitle = document.createElement('h1')
      productTitle.classList.add('product-title')
      productTitle.innerText = `${products[i].title}`
      const productCategory = document.createElement('h5')
      productCategory.classList.add('product-category')
      productCategory.innerText = `${products[i].category}`
      const productPrice = document.createElement('strong')
      productPrice.classList.add('product-price')
      productPrice.innerText = `${products[i].price}`
      productMain.append(productTitle,productCategory,productPrice)
      
      productCard.append(productImg,productMain)
      ulDrinks.appendChild(productCard)
    }
    
    if (products[i].category == 'Higiene') {
      
      const productCard = document.createElement('li')
      productCard.classList.add('product')
      const productImg = document.createElement('img')
      productImg.setAttribute('class','product-img')
      productImg.setAttribute('title', `${products[i].title}`)
      productImg.setAttribute('alt', `${products[i].imageDescription}`)
      productImg.setAttribute('src', `${products[i].image}`)
  
      const productMain = document.createElement('main')
      const productTitle = document.createElement('h1')
      productTitle.classList.add('product-title')
      productTitle.innerText = `${products[i].title}`
      const productCategory = document.createElement('h5')
      productCategory.classList.add('product-category')
      productCategory.innerText = `${products[i].category}`
      const productPrice = document.createElement('strong')
      productPrice.classList.add('product-price')
      productPrice.innerText = `${products[i].price}`

      productMain.append(productTitle,productCategory,productPrice)
      productCard.append(productImg,productMain)
      ulHygiene.appendChild(productCard)
      
    }
  }
}

renderFruitList(products)