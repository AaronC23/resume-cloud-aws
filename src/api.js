window.onload = function () {
    updateCounter();
};

function updateCounter() {
    let counter = document.getElementById("counter");

    fetch("https://fbwbeen661.execute-api.ap-southeast-2.amazonaws.com/serverless_lambda_stage/updateCounter")
        .then(response => response.json())
        .then(data => {
            counter.replaceWith("Visitor Counter: " + data);
        });
}