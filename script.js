function getToday() {
    const currentDate = new Date();

    const options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById("today").innerHTML = formattedDate;
}

window.addEventListener('load', getToday)