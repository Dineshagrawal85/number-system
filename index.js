String.prototype.prefixZero = function(size) {
    let s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

function integer_to_little_endian(integer_number) {
    try {
        let hex_number = (integer_number).toString(16)
        hex_number = hex_number.prefixZero(8).toUpperCase()
        hex_number = hex_number.match(/.{1,2}/g);
        hex_number.reverse()
        hex_number = hex_number.join('')
        return hex_number;
    } catch (e) {
        console.log(":error in integer_to_little_endian", e)
    }
}

function little_endian_hex_to_integer(hex) {
    try {
        let final_num = 0
        hex = hex.match(/.{1,2}/g);
        hex.reverse()
        hex = hex.join('')
        let binary_seq = (parseInt(hex, 16)).toString(2).split('')
        for (let i = 0; i < binary_seq.length; i++) {
            final_num += binary_seq[binary_seq.length - i - 1] * Math.pow(2, i)
        }
        return final_num
    } catch (e) {
        console.log(":error in little_endian_hex_to_integer", e)
    }
}

let numberObject = function(number, numberType) {
    try {
        let self = this;
        if (numberType == 'HEX' || numberType == 'BIG_ENDIAN_HEX') {
            this.number = parseInt(number, 16)
        } else if (numberType == 'LITTLE_ENDIAN_HEX') {
            this.number = little_endian_hex_to_integer(number)
        } else if (numberType == 'BINARY') {
            this.number = parseInt(number, 2)
        } else if (numberType == 'OCTAL') {
            this.number = parseInt(number, 8)
        } else if (numberType == 'DECIMAL') {
            this.number = parseInt(number, 10)
        }
    } catch (e) {
        console.log(":error in numberObject", e)
    }
}

numberObject.prototype.getNumber = function(numberType) {
    try {
        if (numberType == 'DECIMAL') {
            return this.number;
        } else if (numberType == 'OCTAL') {
            return this.number.toString(8)
        } else if (numberType == 'BINARY') {
            return this.number.toString(2)
        } else if (numberType == 'LITTLE_ENDIAN_HEX') {
            return integer_to_little_endian(this.number)
        } else if (numberType == 'HEX' || numberType == 'BIG_ENDIAN_HEX') {
            return this.number.toString(16)
        }
    } catch (e) {
        console.log(":error in getNumber", e)
    }

}

numberObject.prototype.getHEX = function() {
    return this.number;
}

module.exports = numberObject;