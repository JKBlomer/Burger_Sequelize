var db = require("../models");



module.exports = function (app) {
    
    
        app.get("/", function (req, res) {
        
        db.Burger.findAll().then(function (data) {
            var burgerObject = {
                burgers: data
            };
            
            res.render("index", burgerObject);
        }).catch(function (error) {
            console.log(err);
            res.json(err);
        });
    });


    app.post("/add", function (req, res) {
            console.log("this: " + JSON.stringify(req.body));
        db.Burger.create({ 
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(data){
           res.json(data);
        }).catch(function(error){
            console.log(err);
            res.json(err);
        })
        
    });



    app.put("/:burgerID", function (req, res) {

       
        var burgerID = req.params.burgerID;

        console.log("burgerID: "+ burgerID);

        db.Burger.update({
            devoured: true
        },{
            where: {
                id: burgerID
            }
        },).then(function(data){
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
        

    });

}