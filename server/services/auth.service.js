'use strict';
require('dotenv').config();

var auth = {
    paramCheck(params, obj) {
        var ret = true;
        try {
            if(!obj){
                ret = false;
            }
            else{
                for(var i = 0; i < params.length; i++){
                    if(!(params[i] in obj) || obj[params[i]] == null){
                        console.log(params[i], " is missing ");
                        ret = false;
                        break;
                    }
                }
            }
        }
        catch(ex){
            console.log("checking params: ",ex);
            ret = false;
        }
        return ret;
    }
}

module.exports = auth;