// utils/dateUtils.js

// Function to calculate age based on birthdate
export const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
      age -= 1;
    }
    return age;
  };

  // Function to check if user is 18 years old or older
  export const isUserOldEnough = (birthdate) => {
    const age = calculateAge(birthdate);
    return age >= 18;
  };
