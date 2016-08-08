/**
 * PasswordMeter Class
 * 
 * @param {string} min
 */
function PasswordMeter(min) {

    this.min = min;

    /**
     * Check the password strength
     * 
     * @param {string} password
     * @return {integer}
     */
    this.check = function(password) {
        this.password = password;
        
        var result = 0;
        
        result += this.checkLen()
        result += this.checkLetters()
        result += this.checkNumbers()
        result += this.checkUppers()
        result += this.checkSpecials()

        return result;
    };

    /**
     * Check password min length
     * 
     * @return {boolean}
     */
    this.checkLen = function() {
        if(this.password.length < this.min) {
            return 0;
        } else {
            var dif = this.password.length - this.min;
            return 1;
        }
    };

    /**
     * Check for letters
     * 
     * @return {boolean}
     */
    this.checkLetters = function() {
        if(this.password.match(/[a-z]/g)) {
            return 1;
        } else {
            return 0;
        }
    };

    /**
     * Check for numbers
     * 
     * @return {boolean}
     */
    this.checkNumbers = function() {
        if(this.password.match(/[0-9]/g)) {
            return 1;
        } else {
            return 0;
        }
    };

    /**
     * Check for uppers
     * 
     * @return {boolean}
     */
    this.checkUppers = function() {
        if(this.password.match(/[A-Z]/g)) {
            return 1;
        } else {
            return 0;
        }
    };

    /**
     * Check for special chars
     * 
     * @return {boolean}
     */
    this.checkSpecials = function() {
        if(this.password.match(/[^a-zA-Z0-9]/g)) {
            return 1;
        } else {
            return 0;
        }
    };

};
