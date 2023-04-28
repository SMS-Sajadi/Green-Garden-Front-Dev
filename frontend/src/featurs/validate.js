export const validate = (data, type) => {
      const errors = {};
      var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var validphone_number = /^09(1[0-9]|3[1-9]|2[1-9]|9[1-9])-?[0-9]{3}-?[0-9]{4}$/;
      var validPassword = /^(?!.*\s)(?=.*[A-Za-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[]|:;"'<>,.?_₹]).{6,16}$/;

      if(!data.email){
            errors.email = 'ایمیل الزامی '
      }
      else if(!data.email.match(validEmail)){
            errors.email = 'ایمیل نامعتبر'
      }
      else{
            delete errors.email
      }


      if(!data.password){
            errors.password = 'رمز الزامی'
      }
      else if(!data.password.match(validPassword)){
            errors.password = 'حداقل 6 کارکتر،حاوی حداقل یک حرف بزگ  یا کوچک و یک کارکتر ویژه'
      }
      else{
            delete errors.password
      }


      if (type === 'signup'){

            if(!data.name.trim()){
                  errors.name = 'نام نامعتبر'
            }
            else{
                  delete errors.name
            }

            if(!data.confirmPassword){
                  errors.confirmPassword = 'تایید الزامی است'
            }
            else if(data.password !== data.confirmPassword){
                  errors.confirmPassword = "رمز عبور یکسان نیست"
            }
            else{
                  delete errors.confirmPassword
            }

            if(data.isAccepted){
                  delete errors.isAccepted
            }
            else{
                  errors.isAccepted = 'پذیرش الزامی '
            }


            if(!data.phone_number){
                  errors.phone_number = 'شماره الزامی '
            }
            else if(!data.phone_number.match(validphone_number)){
                  errors.phone_number = 'شماره نامعتبر'
            }
            else{
                  delete errors.phone_number
            }
      

      }

      return errors;
}