var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function(data){
    console.log("data: ", data);
    document.getElementById('configuration').value = JSON.stringify(data)
});

connection.on('clickedNext', function(){
    console.log("data: ", data);
    var configuration = JSON.parse(document.getElementById('configuration').value);
    connection.trigger('updateActivity', configuration);
});
