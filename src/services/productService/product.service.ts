
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products = [
    {
      id: 1,
      title: "Espresso",
      price: 109.95,
      description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. It has a rich flavor and a layer of crema on top.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.9, count: 120 }
    },
    {
      id: 2,
      title: "Cappuccino",
      price: 22.3,
      description: "A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam. It has a creamy texture with a balance of coffee and milk flavors",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.1, count: 259 }
    },
    {
      id: 3,
      title: "Latte",
      price: 55.99,
      description: "A coffee drink made with espresso and steamed milk. It has a smooth, creamy texture with a subtle coffee flavor, often topped with a thin layer of milk foam.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.7, count: 500 }
    },
    {
      id: 4,
      title: "Macchiato",
      price: 15.99,
      description: "An espresso 'stained' with a small amount of steamed milk. It balances the bold flavor of espresso with a hint of creamy sweetness from the milk.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 2.1, count: 430 }
    },
    {
      id: 5,
      title: "Americano",
      price: 695,
      description: "A coffee drink made by diluting espresso with hot water, giving it a similar strength to drip coffee but with a distinct espresso flavor profile.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.6, count: 400 }
    },
    {
      id: 6,
      title: "Mocha",
      price: 168,
      description: " A decadent coffee drink combining espresso, steamed milk, and chocolate syrup or cocoa powder. It has a rich chocolate flavor with the boldness of coffee.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.9, count: 70 }
    },
    {
      id: 7,
      title: "Cold Brew",
      price: 9.99,
      description: "Coffee brewed with cold water over an extended period, resulting in a smooth, less acidic beverage. Often served over ice and sometimes diluted with water or milk",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3, count: 400 }
    },
    {
      id: 8,
      title: "Affogato",
      price: 10.99,
      description: " A dessert-like coffee drink made by pouring a shot of hot espresso over a scoop of vanilla ice cream or gelato. It combines the bitterness of coffee with the sweetness of ice cream.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 1.9, count: 100 }
    },
    {
      id: 9,
      title: "Turkish Coffee",
      price: 64,
      description: "A traditional method of brewing coffee where very finely ground coffee beans are simmered in water (often with sugar) and served unfiltered in a small cup. It has a strong, rich flavor and a thick texture due to the grounds.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.3, count: 203 }
    },
    {
      id: 10,
      title: "Irish Coffee",
      price: 109,
      description: "A cocktail consisting of hot coffee, Irish whiskey, sugar, and topped with cream. It combines the warmth of coffee with the boldness of whiskey and sweetness of sugar and cream.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 2.9, count: 470 }
    },
    {
      id: 11,
      title: "Vienna Coffee",
      price: 109,
      description: "A coffee drink made with black coffee topped with whipped cream and sometimes chocolate shavings. It originated in Vienna, Austria, and is known for its rich and indulgent flavor.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.8, count: 319 }
    },
    {
      id: 12,
      title: "Flat White",
      price: 114,
      description: "An espresso-based coffee drink made with a double shot of espresso and steamed milk. It has a velvety texture and a strong coffee flavor with a smooth milk finish.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.8, count: 400 }
    },
    {
      id: 13,
      title: "Cortado",
      price: 599,
      description: " Spanish coffee drink made with equal parts espresso and steamed milk. It has a strong coffee flavor with a hint of sweetness from the milk, served in a small glass.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 2.9, count: 250 }
    },
    {
      id: 14,
      title: "Ristretto",
      price: 999.99,
      description: " An espresso shot made with the same amount of coffee grounds but half the amount of water. It results in a more concentrated and intense coffee flavor compared to a regular espresso.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.8, count: 210 }
    },
    {
      id: 15,
      title: "Bulletproof Coffee",
      price: 56.99,
      description: "A coffee drink made with brewed coffee, grass-fed unsalted butter, and medium-chain triglyceride (MCT) oil. It is often used as a breakfast replacement due to its high fat content.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.7, count: 130 }
    },
    {
      id: 16,
      title: "Red Eye",
      price: 29.95,
      description: "A coffee drink made with brewed coffee and a shot of espresso. It is known for its strong caffeine kick and is often consumed to provide an extra boost of energy.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.9, count: 340 }
    },
    {
      id: 17,
      title: "Café au Lait",
      price: 39.99,
      description: "A French-style coffee made with equal parts brewed coffee and steamed milk. It has a smooth and creamy texture with a balanced coffee flavor.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.5, count: 246 }
    },
    {
      id: 18,
      title: "Café Americano",
      price: 9.85,
      description: "A coffee drink made by diluting a shot of espresso with hot water, resulting in a coffee similar in strength to drip coffee but with a different flavor profile.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 3.9, count: 390 }
    },
    {
      id: 19,
      title: "Café Cubano",
      price: 22.99,
      description: "A Cuban-style espresso drink where sugar is mixed with the coffee grounds before brewing, creating a sweet and strong espresso shot.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.5, count: 310 }
    },
    {
      id: 20,
      title: "Café con Leche",
      price: 17.99,
      description: "A Spanish coffee made with equal parts brewed coffee and scalded milk. It's similar to a café au lait but typically uses stronger coffee and scalded milk.",
      image: "https://cdn.shopify.com/s/files/1/1061/1924/files/Hot_Coffee_Emoji.png?9629857664421748268",
      rating: { rate: 4.5, count: 510 }
    }
  ];

  
  getAllProducts() {
    return this.products;
  }

  getProductById(id: any) {
    return this.products.find(product => product.id === id);
  }
  getProductBySearch(text:any){
    return this.products.filter(product=>product.title===text)
  }
}
