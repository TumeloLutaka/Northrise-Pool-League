<template>
    <div class="registration-container">
      <h1>Register for the Northrise University Pool League</h1>
      <form>
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required>
        </div>
        <div class="form-group">
          <label for="studentId">Student ID Number:</label>
          <input type="text" id="studentId" name="studentId" required>
        </div>
        <div class="form-group">
          <label for="program">Program:</label>
          <input type="text" id="program" name="program" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <style scoped>
    .registration-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    label {
      font-weight: bold;
    }
  
    input[type="text"],
    input[type="tel"] {
      padding: 0.5rem;
      border: none;
      border-bottom: 2px solid #ccc;
      font-size: 1rem;
    }
  
    button[type="submit"] {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #1e88e5;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
    }
  
    button[type="submit"]:hover {
      background-color: #0d47a1;
    }
  </style>
  