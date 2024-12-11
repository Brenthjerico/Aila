function showLoveMessage() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block'; // Show the love message
    
}
function showGift() {
    const giftPopup = document.getElementById('giftPopup');
    giftPopup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('letterPopup').style.display = 'none';
    document.getElementById('giftPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function closeGiftPopup() {
    document.getElementById('giftPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function scrollMessage(direction) {
    const messageContainer = document.getElementById('scrollableMessage');
    messageContainer.scrollBy({
        top: direction, // Positive value scrolls down, negative value scrolls up
        behavior: 'smooth' // Optional: makes the scrolling smooth
    });
}
