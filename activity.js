var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function(data){
    console.log("data: ", data);
    document.getElementById('configuration').value = JSON.stringify(data, null, 2)
});

connection.on('clickedNext', function(){
    var configuration = JSON.parse(document.getElementById('configuration').value);
    console.log(configuration)
    connection.trigger('updateActivity', configuration);
});
