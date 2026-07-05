function sendBooking(){

    const campus = document.getElementById("campus").value;
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const packageType = document.getElementById("package").value;
    const pickupDate = document.getElementById("date").value;
    const items = document.getElementById("items").value.trim();

    if(
        campus === "" ||
        name === "" ||
        phone === "" ||
        pickupDate === "" ||
        items === ""
    ){
        alert("Please complete all the fields.");
        return;
    }

    let whatsappNumber = "";

    switch(campus){

        case "Richards Bay":
            whatsappNumber = "27609548435";
            break;

        case "UNIZULU DLANGEZWA":
            whatsappNumber = "27609548435";
            break;

        case "Richtech":
            whatsappNumber = "27799378747";
            break;

        case "Esikhawini":
            whatsappNumber = "27799378747";
            break;
    }

    const message =
`📦 *Student Storage Booking*

Campus:
${campus}

Name:
${name}

Phone:
${phone}

Storage Package:
${packageType}

Pickup Date:
${pickupDate}

Items to Store:
${items}

Thank you.`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");
}