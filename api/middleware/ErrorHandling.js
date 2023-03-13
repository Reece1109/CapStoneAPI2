let handling = (err,res) => {
    if(err){
        res.status(500).send({Err: "reached"})
    }
};

module.exports.handling = handling;


