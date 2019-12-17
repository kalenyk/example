module.exports = function(app,db) {

    app.post('/markers', (req, res) => {
        const userId = req.body.userId;

        db.ref(`/markers/${userId}`).once("value")
            .then(snapshot => {
                return Object.values(snapshot.val());
            }).then(markers => {
                res.send({markers});
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(403);
            });
    });

    app.post('/add_markers', (req, res) => {
        const {markers, userId} = req.body;

        markers.forEach(coordinates=>
            db.ref(`/markers/${userId}`).push(coordinates)
                .then(()=>{
                    if(coordinates===markers[markers.length-1]){
                        res.sendStatus(200);
                    }
                })
                .catch(err=>{
                    console.log('err',err);
                    res.sendStatus(500);
                })
        );
    });
};

