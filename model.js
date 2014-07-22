App.Todo = DS.Model.extend({
  logoUrl: DS.attr('string'),
  isAddedtocart:DS.attr('string'),
  name:DS.attr('string'),
  price:DS.attr('price'),
  Discription:DS.attr('string'),
});


App.Todo.FIXTURES = [
 {
   id: 1,
   logoUrl: "js/images/mouse.jpeg",
   name:'mouse',
   Discription:'mouse',
   price:'500 ',
   isAddedtocart:false

 },
 {
   id: 2,
   logoUrl: "js/images/images.jpeg",
   name:'cycle',
   Discription:'cycle',
   price:'5000',
   isAddedtocart:false
 },
 {
   id: 3,
   logoUrl: "js/images/plates.jpeg",
   name:'plates',
   Discription:'plates',
   price:'300',
   isAddedtocart:false
 },
 {
   id: 4,
   logoUrl: "js/images/glass.jpeg",
   name:'glass',
   Discription:'glass',
   price:'300',
   isAddedtocart:false
 },
 {
   id: 5,
   logoUrl: "js/images/cpu.jpeg",
   name:'cpu',
   Discription:'cpu',
   price:'3000',
   isAddedtocart:false
 },{
   id: 6,
   logoUrl: "js/images/mobile.jpeg",
   name:'mobile',
   Discription:'mobile',
	price:'10000',
   isAddedtocart:false
 },
 {
   id: 7,
   logoUrl: "js/images/keyboard.jpeg",
   name:'keyboard',
   Discription:'keyboard',
   price:'500',
   isAddedtocart:false
 },
 {
   id: 8,
   logoUrl: "js/images/soap.jpeg",
   name:'soap',
   Discription:'soap',
   isSelect: false,
   price:'70',
   isAddedtocart:false
 },
 {
   id: 9,
   logoUrl: "js/images/download (1).jpg",
   name:'football',
   Discription:'football',
   price:'3000',
   isAddedtocart:false
 },
 {
   id: 10,
   logoUrl: "js/images/images.jpg",
   name:'cricket set',
   Discription:'cricket set',
   price:'2000',
   isAddedtocart:false
 }
 
];
