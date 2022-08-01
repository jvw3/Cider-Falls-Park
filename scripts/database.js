/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    guests: [{
        id: 1,
        firstName: "Jonathan",
        lastName: "Woodard",
        destinationId: 2
    }, 
    { 
        id: 2,
        firstName: "Amy",
        lastName: "Woodard",
        destinationId: 4
    },
    {
        id: 3,
        firstName: "Tyler",
        lastName: "Stewart",
        destinationId: 5
    },
    {
        id: 4,
        firstName: "Lebron",
        lastName: "James",
        destinationId: 1
    },
    {
        id: 5,
        firstName: "Kevin",
        lastName: "Durant",
        destinationId: 3
    },
    {
        id: 6,
        firstName: "Squidward",
        lastName: "Tentacles",
        destinationId: 6
    },
    {
        id: 7,
        firstName: "Walter",
        lastName: "White",
        destinationId: 3
    },
    {
        id: 8,
        firstName: "Tom",
        lastName: "Brady",
        destinationId: 4
    },
    {
        id: 9,
        firstName: "Jack",
        lastName: "Johnson",
        destinationId: 1
    },
    {
        id: 10,
        firstName: "Eliza",
        lastName: "Thornberry",
        destinationId: 1
    }
], destinations: [
    {
        id: 1, 
        name: "Chamfort River"

    }, 
    {
        id: 2,
        name: "Lost Wolf Hiking Trail"
    },
    {
        id: 3,
        name: "The Lodge"
    }, 
    {
        id: 4,
        name: "Gander River"
    },
    {
        id: 5,
        name: "The Campgrounds"
    },
    {
        id: 6,
        name: "Pine Bluff Trails"
    }
], services: [
    {
        id: 1,
        serviceName: "rafting"
    },
    {
        id: 2,
        serviceName: "canoeing"
    },
    {
        id: 3,
        serviceName: "fishing"
    },
    {
        id: 4,
        serviceName: "hiking"
    },
    {
        id: 5,
        serviceName: "picnicking"
    },
    {
        id: 6,
        serviceName: "rock climbing"
    },
    {
        id: 7,
        serviceName: "lodging"
    },
    {
        id: 8,
        serviceName: "parking"
    },
    {
        id: 9,
        serviceName: "information"
    },
    {
        id: 10,
        serviceName: "ziplines"
    }
], destinationServices: [
    {//chamfort river
        id: 1,
        serviceId: 1, 
        destinationId: 1
    },
    { 
        id: 2,
        serviceId: 2,
        destinationId: 1
    },
    {
        id: 3,
        serviceId: 3,
        destinationId: 1
    },
    {//Lost Wolf Hiking Trail
        id: 4,
        serviceId: 4,
        destinationId: 2
    },
    {
        id: 5,
        serviceId: 5,
        destinationId: 2
    },
    {
        id: 6,
        serviceId: 6,
        destinationId: 2
    },
    {// THE LODGE 
        id: 7,
        serviceId: 7,
        destinationId: 3
    },
    {
        id: 8,
        serviceId: 8,
        destinationId: 3
    },
    {
        id: 9,
        serviceId: 9,
        destinationId: 3
    },
    {
        id: 10,
        serviceId: 5,
        destinationId: 3
    },
    {// Gander River 
        id: 11,
        serviceId: 3,
        destinationId: 4
    },
    {
        id: 12,
        serviceId: 4,
        destinationId: 4
    },
    {// Campgrounds 
        id: 13,
        serviceId: 9,
        destinationId: 5
    },
    {
        id: 14,
        serviceId: 7,
        destinationId: 5
    },
    {
        id: 15,
        serviceId: 8,
        destinationId: 5
    },
    {//Pine Bluff Trails
        id: 16,
        serviceId: 4,
        destinationId: 6
    },
    {
        id: 17,
        serviceId: 5,
        destinationId: 6
    },
    {
        id: 18,
        serviceId: 10,
        destinationId: 6
    }
    
]
}

//Getter function to copy the array of guests to be exported to other modules. 
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

//Getter function to copy the array of services to be exported to other modules. 
export const getServices = () => {
    return database.services.map(service => ({...service}))
}

//Getter function to copy the array of destinations to be exported to other modules. 
export const getDestinations = () => {
    return database.destinations.map(destination => ({...destination}))
}

//Getter function to copy the array of destinationServices to be exported to other modules. 
export const getDestinationServices = () => {
    return database.destinationServices.map(destinationService => ({...destinationService}))
}