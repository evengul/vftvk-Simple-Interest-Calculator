function compute() {
    const principal = Number.parseFloat(document.getElementById("principal").value);
    const rate = Number.parseFloat(document.getElementById("rate").value);
    const years = Number.parseFloat(document.getElementById("years").value);

    if(Number.isNaN(principal) || principal < 0){
        alert("Please enter a valid Amount");
        return;
    }

    const interest = principal * (rate / 100) * years;

    const resultElement = document.getElementById("result");
    
    resultElement.innerHTML = `
    <output>
        If you deposit <span class="yellow">${principal}</span>,<br>
        at an interest rate of <span class="yellow">${rate}%</span>. <br>
        You will receive an amunt of <span class="yellow">${interest.toFixed(0)}</span>,<br>
        in the year <span class="yellow">${new Date().getFullYear() + years}</span><br>
    </output>
    `;
}

function onRateChange(event) {
    const rateText = document.getElementById("rateText");
    rateText.innerHTML = Number.parseFloat(event.target.value).toFixed(2) + "%";
}

window.onload = () => {
    const rateInput = document.getElementById("rate");

    rateInput.addEventListener('input', onRateChange);

    const rateText = document.getElementById("rateText");
    rateText.innerHTML = "0 %";
}
        