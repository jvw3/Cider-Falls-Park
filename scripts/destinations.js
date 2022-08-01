//import getGuests function from database.js
import { getDestinations } from "./database.js";
import { getServices } from "./database.js"
import { getDestinationServices} from "./database.js"

//declare guests variale = to getGuests() function. 
let destinations = getDestinations()
//declare services variale = to getServices() function. 
let services = getServices()
//declare destinationServices variale = to getDestinationServices() function. 
let destinationServices = getDestinationServices()


//This function creates the list items of services for the Html template.
// The goal is to display the services that are available in each destination. 
// This function will then be used in createDestinationHtml()
// The function will take a parameter of a destination object.
// we set servHtml equal to opening unordered list tag. 
// we will iterate through each destinationService object of the destination services array. 
// for each destination service of destination services array, if the destinationId property of the destinationService object is EQUAL to the parameter's, then the code inside of the body will run. 
// We will then iterate through each service object of the services array.
// If the destinationService.serviceid is equal to the service object's id property, then we will append the html string by the string on XX
// When that inner loop finishes, the servHtml string will be appended by the servHtml by a closing unordered list tag.
// The outer loop will run til it completely iterates through the destinationServices array. 

const filtDestinationsServices = (destination) => {
    let servHtml = "<ul>\n"
    
    for (const destinationService of destinationServices) 
    if (destinationService.destinationId === destination.id)
    {
        for (const service of services) {
            if (destinationService.serviceId === service.id)
            {servHtml += `<li id=service--${service.id}>${service.serviceName}</li>`
            }
        }
    
    }
    servHtml += "</ul>"
    return servHtml
}

// This function creates the frame for the destination and service html template.
// We are creating an Html string that will display destinations as an H3, and services as list items in an unordered list. 
//Function will take no parameters
// First we create an empty htmlString.
// we will iterate through each destination object of the destinations array. For each destination object of the destinaton array, we will append the string on line XX into the htmlstring. 
// Then, we will append the result of the filtDestinationServices function to the string.
//Then, we will append the closing article tag to the string.
// This loop will run for every destination until they have all been iterated through. 
// Destinationhtml will then be returned. 
export const createDestinationHtml = () => {
    let destinationsHtml = ""
    
    for (const destination of destinations) {
        destinationsHtml += `<article id="destination--${destination.id}">
        <h3 id="dest--${destination.id}">${destination.name}</h3>
        <p>Services Offered:</p>
        `
        destinationsHtml +=  filtDestinationsServices(destination)
        destinationsHtml += "</article>\n"
    }
    return destinationsHtml
}

// let joe = createDestinationHtml()
// console.log(joe)


// Display all destinations where a service is available. 
// 
// Create an addeventlistener function that, when clicked, will display the destination where that service is avaialbale. 
// Hiking is avaiable in x and x locations 
// The goal is to display what locations that contain a particular service.

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("servicenav")) {
        const [, serviceId] = itemClicked.id.split("--");

        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                let eventService = filterDestinations(service)
                let destString = eventService.join(" and ")
                window.alert(`${service.serviceName} is available at ${destString}`)
            
            }
            
            
        }
        
    }
})


//Create a function that displays what locations that contain a particular service.
const filterDestinations = (serviceObject) => {
    let destArray = []
    for (const destinationService of destinationServices) 
    if (destinationService.serviceId === serviceObject.id)
    {
        for (const destination of destinations) {
            if (destinationService.destinationId === destination.id) {
                destArray.push(destination.name)
            // let destString = destArray.join(" and ")
                // window.alert(`${serviceObject.serviceName} is available at ${destString}`)
            }
            
        
    }
    
    }
    return destArray
}