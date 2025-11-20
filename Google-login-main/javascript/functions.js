
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
        text: "This site was made by Dominik Kaluza",
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
      var correctPassword = "1234567"; 
      var posta = document.getElementById("mail").value
      var password = document.getElementById("password").value

      if (posta !== correctEmail || password !== correctPassword) {
      Swal.fire({
        ...defaultSwalConfig,
        icon: "error",
        title: "Login failed",
        confirmButtonColor: "#185abc",
        text: "Incorrect email or password."
      });
      return;
    }

      swal.fire({
        ...defaultSwalConfig,
        icon: "success",
        iconColor: "#48a84f",
        title: "Success",
        confirmButtonColor: "#185abc",
        text: "you have Logged in"
        }).then(() => {
        form.submit(); // submita ko user klikne "ok"
        window.location.href = 'index.html';
      });
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
        window.location.href = 'login.html';
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