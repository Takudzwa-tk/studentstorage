function sendBooking() {

    const campus = document.getElementById("campus").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const packageType = document.getElementById("package").value;
    const pickupDate = document.getElementById("date").value;
    const items = document.getElementById("items").value;

    if (
        campus === "" ||
        name === "" ||
        phone === "" ||
        pickupDate === "" ||
        items === ""
    ){
        alert("Please complete all the fields.");
        return;
    }

    // WhatsApp number based on campus
    let whatsappNumber = "";

    if(campus === "Richards Bay"){
        whatsappNumber = "27609548435";
    }
    else if(campus === "UNIZULU DLANGEZWA"){
        whatsappNumber = "27609548435";
    }
    else if(campus === "Richtech"){
        whatsappNumber = "27799378747";
    }

    const message =
`📦 STUDENT STORAGE BOOKING

Campus: ${campus}

Name: ${name}

Phone: ${phone}

Storage Package: ${packageType}

Pickup Date: ${pickupDate}

Items:
${items}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}