var list = [];
App.IndexController = Ember.ArrayController.extend({
  
   count:0,
   getCount: function() {
      return this.get('count');
   }.observes('count'),

   actions: {
    addCart: function( id,name,logoUrl,Discription,price) {
      
      var newObject = { id : id,name : name,logoUrl : logoUrl,Discription : Discription,price:price};
      list.push(newObject);
      this.set('count', this.get('count') + 1);
      this.set('isAddedtocart',true);
      
     this.transitionTo('index');
     
    },
    displayrecords:function(){
    
     this.transitionTo('arrayitems');
    
  }

}
});

