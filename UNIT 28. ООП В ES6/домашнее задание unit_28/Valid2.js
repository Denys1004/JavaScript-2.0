class Valid2 extends Valid {
    constructor(name, password, email){
        super(name, password)
        this.isValid = '';
        this.email = email;
        this.emailError = '';
        this.passwordError = '';
    }
    validate(){
        if(this.password.length < 6){
            this.isValid = 'false';
            this.passwordError = 'min length 6';
        }else if(this.email.length == 0){
            this.isValid = 'false';
            this.emailError = 'email empty';
        }else{
            this.isValid = 'true';
        }
    }
}