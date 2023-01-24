function validatePhone() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneForm = document.getElementById("phoneForm");
    var message = document.getElementById("message");
    if(phoneNumber.match(/^\d{8}$/)) {
      message.innerHTML = "Баярлалаа. Бид удахгүй холбогдох болно.";
      message.style.color = "green";
      phoneForm.reset();
    } else {
      message.innerHTML = " Та дугаараа шалгаад зөв оруулна уу.";
      message.style.color = "red";
    }
  }