function validateNamePasswordDOB(value, index, fieldLength) {
    if(value.length < fieldLength) {
        document.styleSheets[1]['rules'][index].style.borderColor =
                    "rgb(255, 51, 51)"
        return false;
    } else {
        document.styleSheets[1]['rules'][index].style.borderColor =
                "rgb(0, 204, 102)";
        return true;
    }
}

export default validateNamePasswordDOB