class Valid {
    constructor(name, password){
        this.name = name;
        this.password = password;
        this.isValid = '';
    }
    validate(){
        if(this.password.length < 6){
            this.isValid = 'false';
        }else{
            this.isValid = 'true';
        }
    }
}