function validateUsernameEmail(data, value, name) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(data.is_taken === true || value.length < 1) {
        if(name === 'email'){
            document.styleSheets[1]['rules'][11].style.borderColor =
            "rgb(255, 51, 51)";
            return false;
        } else {
            document.styleSheets[1]['rules'][12].style.borderColor =
                "rgb(255, 51, 51)";
            return false;
        }
    } else if(name === 'email') {
        if(re.test(value) === false){
            document.styleSheets[1]['rules'][11].style.borderColor =
            "rgb(255, 51, 51)";
            return false;
        } else {
            document.styleSheets[1]['rules'][11].style.borderColor =
                "rgb(0, 204, 102)";
            return true;
        }
    } else {
        document.styleSheets[1]['rules'][12].style.borderColor =
            "rgb(0, 204, 102)";
        return true;
    }
}

export default validateUsernameEmail