document.addEventListener("DOMContentLoaded", function () {
	class Product {
		constructor (price){
			this.price = price;
		}
		calculatePrice(){
			return this.price;
		}
	}

	class Box extends Product{
		constructor(price){
			super(price);
			this.productsArray = [];
		}
		add(product){
			this.productsArray.push(product);
		}
		calculatePrice(){
			this.price = 0;
			for (let i=0;i<this.productsArray.length;i++){
				this.price = 1*this.price + 1*this.productsArray[i].calculatePrice();
			}
			return this.price;
		}
	}

	let x = new Product (25);
	let y = new Product (48);
	let boxx = new Box(1);
	boxx.add(x);
	boxx.add(y);
	let big_box = new Box(1.5);
	big_box.add(x);
	big_box.add(y);
	big_box.add(boxx);
	big_box.calculatePrice();

	var newBasket = new Box (0);

			

	let goodsButtons = document.querySelectorAll(".buy_but");
	let goodsPrices = document.querySelectorAll(".price_prod");
	for (var i = 0; i < goodsButtons.length; i++) {
		let buyButton = goodsButtons[i];
		buyButton.addEventListener("click", function () {
			let good = buyButton.parentElement;
			let goodPrice = good.querySelector(".price_prod").innerHTML;
			let a = new Product (goodPrice);
			newBasket.add(a);
			newBasket.calculatePrice();
			console.log(newBasket);
	});
	}
});