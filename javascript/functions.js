
const defaultSwalConfig = {
  color: 'white',
  background: '#1e1f20', 
};
function piskot(event){
      Swal.fire({
        ...defaultSwalConfig,
        icon: "info",
        iconColor: "#185abc",
        title: "Cookie",
        text: "This site was made by Dominik Kaluža",
        confirmButtonColor: "#185abc",
        })
        return;
    }
    function checkDateForm(event) {
      var form = document.getElementById("date_form");
      if (!form.reportValidity()) {
        return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "you have entered your gender and birthday correctly"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'email.html';
      });
    }
    function checkMailForm(event) {
      var form = document.getElementById("Email_form");
      if (!form.reportValidity()) {
        return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "you have entered your email correctly"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'password.html';
      });
    }
    function checkLoginForm(event) {
      var form = document.getElementById("password_form");
      if (!form.reportValidity()) {
        return;
      }
      var correctEmail = "a@a.a";
      var posta = document.getElementById("mail").value

      if (posta !== correctEmail) {
        Swal.fire({
          ...defaultSwalConfig,
          icon: "error",
          title: "Login failed",
          confirmButtonColor: "#185abc",
          text: "This Email does not exist"
        });
        return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "Your email exists"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'password_login.html';
      });
    }

    function checkPassword(event) {
      var form = document.getElementById("password_form");
      if (!form.reportValidity()) {
        return;
      }
      var correctpassword = "1234567";
      var geslo = document.getElementById("final_password").value

      if (geslo !== correctpassword) {
        Swal.fire({
        ...defaultSwalConfig,
        icon: "error",
        title: "Wrong password",
        confirmButtonColor: "#185abc"
        })
      return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "Correct password"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'index.html';
      });
    }

    function letimletim(){
      window.location.href = 'register.html';
    }

    function checkPasswordForm(event) {
      var form = document.getElementById("password_form");
      if (!form.reportValidity()) {
        return;
      }

      var password = document.getElementById("password").value
      var confirmPassword = document.getElementById("confirm_password").value

      if (password !== confirmPassword) {
        Swal.fire({
        ...defaultSwalConfig,
        icon: "error",
        title: "Passwords do not match",
        confirmButtonColor: "#185abc",
        text: "your passwords are not identical"
        })
      return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "you have created an account"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'index.html';
      });
    }
    function checkNameForm(event) {
      var form = document.getElementById("name_form");
      if (!form.reportValidity()) {
        return;
      }
      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "you have entered your name"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'gender_and_birthday.html';
      });

    }

  function showPassword(passwordID){
    const password = document.getElementById(passwordID);

    if(password.type === "password") {
      password.type = "text";
    }
    else{
      password.type = "password";
    }
  }

