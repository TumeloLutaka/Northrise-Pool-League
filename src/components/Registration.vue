<template>
    <section class="registration">
      <div class="registration-form">
        <div class="registration-form-heading">
          <h1>Register for League</h1>  
        </div>
        
        <div class="registration-form-input">
          <table class="registration-table">
            <tbody>
              <tr>
                <td><label for="firstName">First Name:</label></td>
                <td><input type="text" id="firstName" name="firstName" required></td>
              </tr>
              <tr>
                <td><label for="lastName">Last Name:</label></td>
                <td><input type="text" id="lastName" name="lastName" required></td>
              </tr>
              <tr>
                <td><label for="studentId">Student ID Number:</label></td>
                <td><input type="text" id="studentId" name="studentId" required></td>
              </tr>
              <tr>
                <td><label for="program">Program:</label></td>
                <td><input type="text" id="program" name="program" required></td>
              </tr>
              <tr>
                <td><label for="phone">Phone Number:</label></td>
                <td><input type="tel" id="phone" name="phone" required></td>
              </tr>

            </tbody>
          </table>
          
          <div class="registration-form-button">
            <button @click="validation">Register</button>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  
<script>
  // import { addNewDoc } from '../javascript/firebase';
  export default{
    methods:{
      validation(){
        const inputFields = document.querySelectorAll('input');
      
        let allClear = true;
        
        inputFields.forEach(function(input) {
          if (input.value.trim() === '') {
            allClear = false;
          }
        });
        
        if (allClear) {
          alert('All clear!');
        }else{
          alert("Enter all details!");
        }
        
      }
    }
  }
</script>

<style scoped>
input{
  width: 100%;
  height: 30px;
  border: 2px solid #8bab5c;
  border-radius: 5px;
}
input:focus{
  outline: none;
  border: 2px solid #e98824;
}
.registration{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
.registration-form{
  min-width: 550px;
  max-width: 1000px;
  border: 1px solid #8bab5c;
  border-radius: 20px;
  overflow: hidden;
}
.registration-form button{
  font-size: 18px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #8bab5c;
  color: white;
  cursor: pointer;
}
.registration-form button:active{
  opacity: 0.7;
}
.registration-form-button{
  display: flex;
  flex-direction: column;
  align-items: self-end;
  width: 100%;
  margin-top: 20px;
}
.registration-form-heading{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 22px;
  width: 100%;
  height: 80px;
  padding: 5px 20px;
  background-color: #8bab5c;
  color: white;
}
.registration-form-input{
  padding: 20px 40px;
}

.registration-form-input table{
  font-size: 15px;
  font-weight: 600;
  border-collapse: collapse;
  width:100%;
}
.registration-form-input td{
  padding: 12px 0px;
  color: #2b2b2b;
}
</style>
  