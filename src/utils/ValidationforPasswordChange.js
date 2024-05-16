// // In a separate file, e.g., 'validation.js' in a 'utils' folder
// export const validatePassword = (password) => {
//     const errors = [];
//     if (!password) {
//       errors.push("Password is required.");
//       return errors;
//     }
//     if (password.length < 8 || password.length > 14) {
//       errors.push("Password must be 8-14 characters long.");
//     }
//     if (!/[A-Z]/.test(password)) {
//       errors.push("Password must contain at least one uppercase letter.");
//     }
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       errors.push("Password must contain at least one special character.");
//     }
//     if (!/[0-9]/.test(password)) {
//       errors.push("Password must contain at least one number.");
//     }
//     return errors;
//   };
  

// In 'validation.js' or wherever your validation logic is located
export const validatePassword = (newPassword, oldPassword,confirmPassword) => {
    const errors = [];
    
    if (!newPassword ) {
      errors.push("New password is required.");
      return errors;
    }

    if (!oldPassword){
      errors.push("Old password is required");
    }


    if (!confirmPassword){
      errors.push("Confirm password is required");
    }
    if (newPassword === oldPassword) {
      errors.push("New password must be different from the old password.");  //pass
    }
    if (newPassword.length < 8 || newPassword.length > 14) {
      errors.push("Password must be 8-14 characters long.");      // pass
    }
    if (!/[A-Z]/.test(newPassword)) {
      errors.push("Password must contain at least one uppercase letter.");  //pass
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      errors.push("Password must contain at least one special character.");  // pass
    }
    if (!/[0-9]/.test(newPassword)) {
      errors.push("Password must contain at least one number."); //pass
    }
    if (newPassword != confirmPassword){
      errors.push("New password and confirm password should be same")
 
    }
    return errors;
  };
  