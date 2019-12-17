const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('users').findOne(details, (err, item) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(item);
}
});
});


    app.get('/user', (req, res) => {
        db.collection('users').find().toArray(function(err,results) {
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
            console.log(results);
        }
    });
});
    app.post('/user', (req, res) => {
        const drug = {
            name: req.body.name,
            username: req.body.username,
            age: req.body.age,
            password: req.body.password,
            firstAidKits: req.body.firstAidKits
        };
    db.collection('users').insert(drug, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(result.ops[0]);
}
});
});
    app.delete('/user/:id', (req, res) => {
        const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('users').remove(details, (err, item) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send('user ' + id + ' deleted!');
}
});
});
    app.put ('/user/:id', (req, res) => {
        const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const pill = {
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
        password: req.body.password,
        firstAidKits: req.body.firstAidKits
    };
    db.collection('users').update(details, drug, (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(pill);
}
});
});
};

