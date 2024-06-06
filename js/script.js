function displayMessage(event) {
   event.preventDefault();

   // Get form values
   const nama = document.getElementById("nama").value;
   const tanggalLahir = document.getElementById("tanggal_lahir").value;
   const jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
   ).value;
   const pesan = document.getElementById("pesan").value;

   // Get date and time
   const currentDate = new Date();
   const dateTime = currentDate.toString();

   // Display output
   const output = document.getElementById("output");
   output.innerHTML = `
         <p><strong>Current time:</strong> ${dateTime}</p>
         <p><strong>Nama:</strong> ${nama}</p>
         <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
         <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
         <p><strong>Pesan:</strong> ${pesan}</p>
     `;
}
function toggleMenu() {
   const navMenu = document.querySelector("nav .nav-container ul");
   navMenu.classList.toggle("show");
}

// Mengambil nama user baru (awal buka website)
window.addEventListener("load", function () {
   setTimeout(function () {
      document.querySelector(".welcome-popup").style.display = "block";
      document.querySelector(".overlay-blur").style.display = "block";
   }, 0);

   document
      .querySelector("#submit-user")
      .addEventListener("click", function (event) {
         event.preventDefault();
         const namaPengguna = document.querySelector("#user").value;
         document.querySelector("#new-user").innerHTML = namaPengguna;
         document.querySelector(".welcome-popup").style.display = "none";
         document.querySelector(".overlay-blur").style.display = "none";
      });
});
