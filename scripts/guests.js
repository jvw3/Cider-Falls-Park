//import getGuests function from database.js
import { getGuests } from "./database.js";
import { getDestinations} from "./database.js"

//declare guests variale = to getGuests() function. 
let guests = getGuests()
let destinations = getDestinations()


// Export a function that will create an html string to display guests on the page. 
export const guestsHtml = () => {
    let guestsHtmlString = "<ul>"
    for (const guest of guests) {
        guestsHtmlString += `<li>${guest.firstName} ${guest.lastName}</li>\n`
    }
    guestsHtmlString += "</ul>"

    return guestsHtmlString

}

// let goo = guestsHtml()
// console.log(goo)

//Define a function to show how many guests are in each park. 
    // if guest.destinationId === destination.id, then that means the guest is in the park. 
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("dest")) {
        const [, destId] = itemClicked.id.split("--");

        for (const destination of destinations) {
            let guestNum = 0
            if (destination.id === parseInt(destId)) {
                let findGuests = guestCounter(destination)
                guestNum += findGuests

                window.alert(`There are ${guestNum} guests in this area.`)
            }
   
        }
         
    }
});

//Created a function that will count the number of guests in a location. 
const guestCounter = (destination) => {
let guestCount = 0
    for (const guest of guests) {
        if (destination.id === guest.destinationId) {
            guestCount++
            
        } 
        
    }
return guestCount
}
