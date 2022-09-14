const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const phonenumber = document.querySelector('#phonenumber').value.trim();
    
    if (firstName && lastName && email && password && address && phonenumber) {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify({ firstName,lastName, email, password, address, phonenumber}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector('#firstName-signup', '#lastName-signup', '#email-signup', '#password-signup', '#address-signup', '#phonenumber' ).addEventListener('submit', signupFormHandler);
