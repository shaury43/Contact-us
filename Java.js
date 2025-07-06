document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("payment");

  form.addEventListener("submit", function (e) {
    const area = document.getElementById("area").value;
    const phone = document.getElementById("phone").value;
    const token = document.getElementById("token").value;


    const confirmation = confirm(
      `Please confirm your details:\n\n` +
      `AREA: ${area}\nPHONE NUMBER: ${phone}\nTOKEN: Ksh ${token}\n\n` +
      `Click OK to continue with the payment.`
    );

    if (!confirmation) {
      e.preventDefault();
    }
  });
});
