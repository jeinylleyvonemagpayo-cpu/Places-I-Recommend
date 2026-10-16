document.addEventListener('DOMContentLoaded', function () {

    const guideName = 'Boracay Places Guide';
    const currentYear = new Date().getFullYear();

    let placesReviewed = 0;

    document.getElementById('guide-name').textContent = guideName;
 
    document.getElementById('footer-text').textContent =
        '\u00A9 ' + currentYear + ' ' + guideName + ' \u00B7 Created by Magpayo Jeinylle';
 

    const placeRatings = [4.5, 3.5]; 
    let ratingSum = 0;
 
    for (let i = 0; i < placeRatings.length; i++) {
        placesReviewed += 1;
        ratingSum += Number(placeRatings[i]);
    }
 
    const averageRating = ratingSum / placesReviewed;
 
    document.getElementById('places-count').textContent = placesReviewed;
    document.getElementById('average-rating').textContent = averageRating.toFixed(1);
 

    const rating = Number(4.5);
    let ratingLabel;
 
    if (rating >= 4) {
        ratingLabel = 'Highly recommended';
    } else if (rating >= 2.5) {
        ratingLabel = 'Worth a visit';
    } else {
        ratingLabel = "Only if you're nearby";
    }
 
    document.getElementById('rating-label').textContent = ratingLabel;
 
    const priceLevel = 2;          
    const maxPriceLevel = 2;       
    const isOpenNow = true;
 
    const budgetFits = priceLevel <= maxPriceLevel && isOpenNow === true;
    const budgetMessage = budgetFits ? 'Good option right now' : 'Maybe another time';
 
    document.getElementById('budget-result').textContent = budgetMessage;
 

    const isWalkable = true;
    const distanceNote = isWalkable === true ? 'Walking distance' : 'Better to commute';
 
    document.getElementById('distance-note').textContent = distanceNote;
 
    console.log('Guide name:', guideName);
    console.log('Current year:', currentYear);
    console.log('Places reviewed:', placesReviewed);
    console.log('Average rating:', averageRating);
    console.log('Rating label:', ratingLabel);
    console.log('Budget fits:', budgetFits);
    console.log('Distance note:', distanceNote);
});
