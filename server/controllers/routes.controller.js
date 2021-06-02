const express = require('express');
const router = express.Router();
const auth = require('../services/auth.service');
const base = require('../services/base.service');

function submitForm(req, res){
    var ret = {"error":null, "results":null};

    try {
        if(req.body && auth.paramCheck(["type", "data"], req.body)) {
            base.saveFormData(req.body.type, req.body.data, function(dataRet){
                res.status(200).json(dataRet);
            });
        }
        else {
            ret.error = "Invalid Params ";
            res.status(200).json(ret);
        }
    }
    catch(ex){
        ret.error = "Error Saving Form Data: " + ex;
        res.status(200).json(ret);
    }
}

router.post('/submitForm', submitForm);

module.exports = router 