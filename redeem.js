document.addEventListener("DOMContentLoaded", function () {
    let points = localStorage.getItem("reward-points") || 100;
    localStorage.setItem("reward-points", points);  // Store initial value if not set

    document.getElementById

    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function () {
            let itemCost = parseInt(this.dataset.cost);
            let itemName = this.dataset.item;

            if (points >= itemCost) {
                points -= itemCost;
                localStorage.setItem("aquaCoins", points);
                alert(`🎉 Congratulations! You redeemed ${itemName} successfully with Aqua Coins!`);
            } else {
                alert("❌ Not enough Aqua Coins!");
            }
        });
    });
});