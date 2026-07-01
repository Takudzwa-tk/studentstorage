// Generate random reference number

const ref = "SS" + Math.floor(Math.random() * 1000000);

document.getElementById("reference").innerHTML = ref;

// Payment button

document.getElementById("paidBtn").addEventListener("click", () => {

const pop = document.getElementById("pop");

if(pop.files.length==0){

alert("Please upload your Proof of Payment.");

return;

}

const message =

`Hello Student Storage,

I have completed my EFT payment.

Reference Number:

${ref}

My proof of payment has been uploaded.

Please confirm my booking.

Thank you.`;

window.open(

"https://wa.me/27609548435?text="+encodeURIComponent(message),

"_blank"

);

alert("Thank you! Please send your Proof of Payment via WhatsApp if requested.");

});