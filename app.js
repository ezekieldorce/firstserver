const express = require('express');

const app =  express();

app.set('view engine', 'ejs')

app.get('/'), function(request, response){
    res.render('about.ejs');
};

app.listen(3000, function(){
    console.log('Server is running in port 3000.')
});
