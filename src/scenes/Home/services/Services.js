import axios from "axios";
import Constants from "./../../../core/Constants";

export function xhrGetFeedsList (parms, onSuccess, onFailure) {
    if(Constants.DEV_MODE){
        requestDummyType1(parms);
        return;
    }
    axios({
        timeout: Constants.REQ_TIMEOUT,
        method: 'get',
        url: Constants.ROUTE.GET_FEEDS_LIST,
        params: parms
    }).then( res =>{
        let data = res.data ;

        //Some initial processing like Valid User Check
        //finally call success as server call was success handle other cases in callback function
        if(data.auth && !data.auth.user_login_done){
          window.location = Constants.ROUTE.REACT_ROUTES.LOGIN
        }
        onSuccess(data);
    }).catch((error)=>{
        onFailure();
    });
}


/* BELOW CODE FOR DEV, Comment for Production */

function requestDummyType1 (params) {
    return null ;
}
