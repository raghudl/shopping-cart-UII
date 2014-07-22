App.Router.map(function() {
  this.route('index',{ path:'/'});
  this.route("arrayitems");

});


App.IndexRoute = Ember.Route.extend({
       model: function() {
        return this.store.find('todo')
    }
});

App.ArrayitemsRoute = Ember.Route.extend({
model:function(){
	console.log('list::::;'+list);
	return list;
},
actions : {
      removeItem: function(value){
        var cvalue = confirm("Do you want to remove???");
        alert(cvalue);
        if(cvalue == true){
         var obj = list.findProperty('id', value);
         list.removeObject(obj);
      }

    }

    }
});
