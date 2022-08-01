import { getDestinations } from "./database.js";
import { getServices } from "./database.js"
import { getDestinationServices} from "./database.js"


//declare guests variale = to getGuests() function. 
let destinations = getDestinations()
//declare services variale = to getServices() function. 
let services = getServices()
//declare destinationServices variale = to getDestinationServices() function. 
let destinationServices = getDestinationServices()



// Display all destinations where a service is available. 
// 
// Create an addeventlistener function that, when clicked, will display the destination where that service is avaialbale. 
// Hiking is avaiable in x and x locations 
// The goal is to display what locations that contain a particular service.

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("servicenav")) {
        const [, servicenavId] = itemClicked.id.split("--");

        for (const service of services) {
            if (service.id === parseInt(servicenavId)) {
                let eventService = filterDestinations(service)
            return eventService
            }
        }
    }
})


//Create a function that displays what locations that contain a particular service.
const filterDestinations = (serviceObject) => {
    let destString = ""
    for (const destinationService of destinationServices) 
    if (destinationService.serviceId === serviceObject.id)
    {
        for (const destination of destinations) {
            if (destinationService.destinationId === destination.id) {
                destString += `${destination.name}`
                window.alert(`Hiking is avaialable at ${destString}`)
            }
    }
    }
}