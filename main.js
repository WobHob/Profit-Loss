var initialPrice = document.querySelector("#init-price");
var stocksQuantity = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#curr-price");
var submitBtn = document.querySelector("#btn-submit");
var outputBox = document.querySelector("#output-box");
var emojiBox = document.querySelector("#emoji-displayer");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  emojiBox.innerHTML = "";
  outputBox.innerHTML = "";
  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    showEmoji("📉");
    var loss = (initial - current) * quantity;
    var lossPercentage = ((loss / initial) * 100).toFixed(3);
    
    showOutput(
      `Loss: ₹${loss} | Loss percentage: ${lossPercentage}%`
    );
  }
  else if (current > initial) {
    showEmoji("📈");
    var profit = (current - initial) * quantity;
    var profitPercentage = ((profit / initial) * 100).toFixed(3);

    showOutput(
      `Profit: ₹${profit} | profit percentage: ${profitPercentage}%`
    );
  }
  else {
    var img = document.createElement("img");
    img.src = "https://c.tenor.com/gsY_eOOJGj0AAAAC/pakistani-fan.gif";
    emojiBox.appendChild(img);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}


function showEmoji(result){
  emojiBox.innerHTML = result;
}