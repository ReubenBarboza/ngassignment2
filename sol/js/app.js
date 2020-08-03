(function(){
	'use strict';


	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject= ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var tbc = this;
		tbc.tobuylist=ShoppingListCheckOffService.getToBuyItems();
		tbc.removeItem = function(itemIndex){
			ShoppingListCheckOffService.removeItem(itemIndex)

		}

		}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var abc = this;
		abc.alreadyboughtlist=ShoppingListCheckOffService.getBoughtItems()
	}


	function ShoppingListCheckOffService(){
		var service = this;
		var alreadyboughtlist=[];
		var tobuylist = [
			  {
				name: "Milk",
			    quantity: "2"
			  },
			  {
			    name: "Donuts",
			    quantity: "200"
			  },
			  {
			    name: "Cookies",
			    quantity: "300"
			  },
			  {
			    name: "Chocolate",
			    quantity: "5"
			  },
			  {
			  	name:"Eggs",
			  	quantity:"4"
			  }
			];
	
		service.removeItem=function(itemIndex){

			var item = tobuylist[itemIndex];
			alreadyboughtlist.push(item);
			tobuylist.splice(itemIndex,1);
	};
	service.getToBuyItems = function(){
		return tobuylist;
	};
	

	service.getBoughtItems= function(){
		return alreadyboughtlist;
	};


	}

})();