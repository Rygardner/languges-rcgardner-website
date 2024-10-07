// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to get the opposite color
function getOppositeColor(hex) {
    // Remove the # from the hex code
    hex = hex.substring(1);
    // Convert hex to decimal and invert each color component
    const r = (255 - parseInt(hex.substring(0, 2), 16)).toString(16).padStart(2, '0');
    const g = (255 - parseInt(hex.substring(2, 4), 16)).toString(16).padStart(2, '0');
    const b = (255 - parseInt(hex.substring(4, 6), 16)).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

// Set background color and opposite text color
const backgroundColor = getRandomColor();
const textColor = getOppositeColor(backgroundColor);

document.body.style.backgroundColor = backgroundColor;
document.getElementById('text').style.color = textColor;
