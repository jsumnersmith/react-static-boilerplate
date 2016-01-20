module.exports = {
  // Method for creating VM
  load: function(callback){
    fetch('http://jsonplaceholder.typicode.com/posts/10')
      .then(function(res){
        //Resolve promise with JSON-Parsed response
        return res.json();
      }).then(function(data){
        //Return callback with parsed data.
        return callback(data);
      }).catch(function(error){
        callback(error);
      }).then(function(){
        //A function to call no matter what happens.
        console.log("Fetch is complete")
      });
  },
};
