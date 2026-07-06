// =======================
// PRICES
// =======================
const prices = {
    "Small Suitcase": 45,
    "Medium Suitcase": 55,
    "Large Suitcase": 65,
    "Storage Box": 75,
    "Refrigerator": 80,
    "Blanket Storage": 50
};

// =======================
// VARIABLES
// =======================
let selectedItems = [];
let total = 0;

// =======================
// REFERENCE NUMBER
// =======================
const ref = "SS" + Math.floor(Math.random() * 1000000);
document.getElementById("reference").innerText = ref;

// =======================
// QR FUNCTION
// =======================
function generateQR(ref, total, items) {

    document.getElementById("qrcode").innerHTML = "";

    const data =
`Student Storage Payment
Reference: ${ref}
Items: ${items.join(", ")}
Total: R${total}`;

    new QRCode(document.getElementById("qrcode"), {
        text: data,
        width: 200,
        height: 200
    });
}

// =======================
// UPDATE TOTAL
// =======================
function updateTotal() {

    selectedItems = [];
    total = 0;

    document.querySelectorAll(".item:checked").forEach(item => {
        selectedItems.push(item.value);
        total += prices[item.value];
    });

    document.getElementById("totalDisplay").innerText = "Total: R" + total;

    generateQR(ref, total, selectedItems);
}

// =======================
// LISTEN FOR CHECKBOXES
// =======================
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("change", updateTotal);
});

// =======================
// INITIAL LOAD
// =======================
updateTotal();

// =======================
// WHATSAPP BUTTON
// =======================
document.getElementById("paidBtn").addEventListener("click", () => {

    const pop = document.getElementById("pop");

    if (pop.files.length === 0) {
        alert("Please upload Proof of Payment.");
        return;
    }

    const message =
`Hello Student Storage,

I have completed my payment.

Reference: ${ref}
Items: ${selectedItems.join(", ")}
Total: R${total}

Please confirm my booking.`;

    window.open(
        "https://wa.me/27609548435?text=" + encodeURIComponent(message),
        "_blank"
    );
});