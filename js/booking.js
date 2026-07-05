// Prices are taken from the data-price attribute
const items = document.querySelectorAll(".item");
const qtys = document.querySelectorAll(".qty");
const totalDisplay = document.getElementById("total");
const whatsappBtn = document.getElementById("whatsappBtn");

function calculateTotal() {
    let total = 0;

    items.forEach((item, index) => {
        if (item.checked) {
            const price = Number(item.dataset.price);
            const qty = Number(qtys[index].value) || 1;
            total += price * qty;
        }
    });

    totalDisplay.textContent = "R" + total;
    return total;
}

// Update total whenever something changes
items.forEach(item => item.addEventListener("change", calculateTotal));
qtys.forEach(qty => qty.addEventListener("input", calculateTotal));

// Initial calculation
calculateTotal();

// WhatsApp booking
whatsappBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const student = document.getElementById("student").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const campus = document.getElementById("campus").value;
    const collect = document.getElementById("collect").value;
    const returnDate = document.getElementById("returnDate").value;
    const notes = document.getElementById("notes").value;

    const transport =
        document.querySelector('input[name="transport"]:checked').value;

    let selectedItems = "";

    items.forEach((item, index) => {
        if (item.checked) {
            selectedItems +=
                `• ${item.parentElement.textContent.trim()} x ${qtys[index].value}\n`;
        }
    });

    const total = calculateTotal();

    const message = `Hello Student Storage,

I'd like to book storage.

Name: ${name} ${surname}

Student Number: ${student}

Phone: ${phone}

Email: ${email}

Campus: ${campus}

Collection Date: ${collect}

Return Date: ${returnDate}

Transport: ${transport}

Items:
${selectedItems}

Special Notes:
${notes}

Estimated Total: R${total}`;

   // Campus WhatsApp numbers

const campusNumbers = {

    "Richards Bay": "27609548435",

    "Main Campus": "27609548435",

    "Richtech": "27799378747"

    "Esikhawini": "27799378747"

};


// Get the correct WhatsApp number

const whatsappNumber = campusNumbers[campus];


// Check if campus was selected

if (!whatsappNumber) {

    alert("Please select a campus");

    return;

}

// Open WhatsApp with correct campus number

window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message),
    "_blank"
);