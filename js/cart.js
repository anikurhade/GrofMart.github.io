var cookietotal=0;
(function(){
	const cartInfo = document.getElementById('cart-info');
	const cart = document.getElementById('cart');

	cartInfo.addEventListener('click', function(){
		cart.classList.toggle('showCart');
	});
})();
var SwalScript = document.createElement('script');  
SwalScript.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
document.head.appendChild(SwalScript);

(function(){



	const cartBtn = document.querySelectorAll(".bag-btn");
	cartBtn.forEach(function(btn){
		btn.addEventListener('click', function(event){
			let fullPath = event.target.previousElementSibling.src;	
			
			const item = {};
			
			item.img = fullPath;
			
			let name = event.target.parentElement.nextElementSibling.textContent;
			item.name = name;
			
			let price = event.target.parentElement.parentElement.children[1].nextElementSibling.textContent;
			item.price = price;
			
			let finalPrice = price.slice(0, price.length-2)
			item.finalPrice = finalPrice;		

			const cartItem = document.createElement('div');
			cartItem.classList.add('cart-item');

			cartItem.innerHTML = `
						 <img src="${item.img}" alt="Kitchen">
						 <div>
						   <h4 id="cart-item-title">${item.name}</h4>
						   <h5 id="cart-item-price" class="cart-item-price">${item.price}</h5>
 						   <span class="remove-item">remove</span>
						 </div>
						 <div>
						   <i class="fas fa-chevron-up"></i>
						   <p class="item-amount">1</p>
						   <i class="fas fa-chevron-down"></i>
						 </div> `;
			
			const cart = document.getElementById('cart');
			const total = document.querySelector('.cart-footer');
			cart.insertBefore(cartItem, total);
			
			swal("Item Added", {
				icon: "success",
				})
				.then((value) => {
									
								});
			
			showTotal();
			
			cartItem.getElementsByClassName('remove-item')[0].addEventListener('click', removeItems);
			cartItem.getElementsByClassName('fas fa-chevron-up')[0].addEventListener('click', incrItems);
			cartItem.getElementsByClassName('fas fa-chevron-down')[0].addEventListener('click', decrItems);
		});
	});

function showTotal()
{
	const total = [];
	const item = document.querySelectorAll('.cart-item-price');
	const itemNum = document.querySelectorAll('.item-amount');
	var totalMoney = 0; 

	item.forEach(function(item){
		total.push(parseInt(item.textContent));
	});

	for(var i=0;i<total.length;i++){
		totalMoney += total[i]*(parseInt(itemNum[i].textContent));	
	}	
	
	document.getElementById('cart-total').textContent = totalMoney;
	document.getElementById('items-counts').textContent = total.length;
	cookietotal=totalMoney;
}

function removeItems(event){

		event.target.parentElement.parentElement.remove()
		showTotal();
		swal("Item Removed", {
			icon: "warning",
			})
			.then((value) => {
								
							});
}

function incrItems(event){
	let qty = event.target.nextElementSibling.textContent;
	qty = parseInt(qty);
	qty++;
	event.target.nextElementSibling.textContent = qty;
	showTotal();
}

function decrItems(event){
	let qunty = event.target.previousElementSibling.textContent;
	qunty = parseInt(qunty);
	if(qunty<=1)
	{
	event.target.parentElement.parentElement.remove();
	swal("Item Removed", {
		icon: "warning",
		})
		.then((value) => {
							
						});
	}else{
		qunty--;
		event.target.previousElementSibling.textContent = qunty;
	}
	
	showTotal();
}


})();
function checkout()
{
	if(cookietotal==0)
	{
		location.href='product2.html';
	}
	else
	{
		setCookie("Cart-Total",cookietotal,30);
		location.href='payment.html';
	}
}
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return "";
	  }

	

