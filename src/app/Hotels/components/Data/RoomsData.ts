export type Availability = {
    roomsAvailable: number;
    nearestThreeCheckOutDates: string[];
};
export type RoomType = {
    type: string;
    roomsNumber: number;
    maxOccupancy: number;
    availability: Availability[];
};

export type HotelRooms = {
    id: number; 
    totalRooms: number;
    roomTypes: RoomType[];
};
export type RoomsData = Record<number, HotelRooms>;

    // * ########################################### 

export const roomsData: RoomsData = [
    {
        id: 1 ,
        totalRooms: 1000,
        roomTypes: [
            {
                type: "Standard",
                roomsNumber: 20,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 7, nearestThreeCheckOutDates: ["2025-04-13", "2025-04-18", "2025-05-13"] }
                ]
            },
            {
                type: "Deluxe",
                roomsNumber: 15,
                maxOccupancy: 3,
                availability: [
                    { roomsAvailable: 0, nearestThreeCheckOutDates: ["2025-04-20", "2025-04-25", "2025-05-10"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 2,
        totalRooms: 850,
        roomTypes: [
            {
                type: "Single",
                roomsNumber: 10,
                maxOccupancy: 1,
                availability: [
                    { roomsAvailable: 5, nearestThreeCheckOutDates: ["2025-04-14", "2025-04-19", "2025-05-05"] }
                ]
            },
            {
                type: "Double",
                roomsNumber: 18,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 3, nearestThreeCheckOutDates: ["2025-04-15", "2025-04-22", "2025-05-08"] }
                ]
            }
        ],
    },
    // * ########################################### 
    {
        id: 3,
        totalRooms: 1200,
        roomTypes: [
            {
                type: "Suite",
                roomsNumber: 12,
                maxOccupancy: 4,
                availability: [
                    { roomsAvailable: 2, nearestThreeCheckOutDates: ["2025-04-16", "2025-04-21", "2025-05-09"] }
                ]
            },
            {
                type: "Penthouse",
                roomsNumber: 5,
                maxOccupancy: 5,
                availability: [
                    { roomsAvailable: 1, nearestThreeCheckOutDates: ["2025-04-17", "2025-04-23", "2025-05-07"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 4,
        totalRooms: 500,
        roomTypes: [
            {
                type: "Budget",
                roomsNumber: 30,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 12, nearestThreeCheckOutDates: ["2025-04-12", "2025-04-19", "2025-05-06"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 5,
        totalRooms: 900,
        roomTypes: [
            {
                type: "Standard",
                roomsNumber: 25,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 9, nearestThreeCheckOutDates: ["2025-04-11", "2025-04-20", "2025-05-02"] }
                ]
            },
            {
                type: "Family Suite",
                roomsNumber: 10,
                maxOccupancy: 6,
                availability: [
                    { roomsAvailable: 4, nearestThreeCheckOutDates: ["2025-04-14", "2025-04-18", "2025-05-15"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 6,
        totalRooms: 700,
        roomTypes: [
            {
                type: "Luxury Suite",
                roomsNumber: 8,
                maxOccupancy: 3,
                availability: [
                    { roomsAvailable: 2, nearestThreeCheckOutDates: ["2025-04-10", "2025-04-16", "2025-05-12"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 7,
        totalRooms: 300,
        roomTypes: [
            {
                type: "Single Economy",
                roomsNumber: 20,
                maxOccupancy: 1,
                availability: [
                    { roomsAvailable: 6, nearestThreeCheckOutDates: ["2025-04-13", "2025-04-21", "2025-05-08"] }
                ]
            },
            {
                type: "Double Economy",
                roomsNumber: 15,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 3, nearestThreeCheckOutDates: ["2025-04-15", "2025-04-22", "2025-05-05"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 8,
        totalRooms: 1100,
        roomTypes: [
            {
                type: "Executive",
                roomsNumber: 12,
                maxOccupancy: 3,
                availability: [
                    { roomsAvailable: 4, nearestThreeCheckOutDates: ["2025-04-14", "2025-04-17", "2025-05-10"] }
                ]
            },
            {
                type: "Presidential Suite",
                roomsNumber: 3,
                maxOccupancy: 5,
                availability: [
                    { roomsAvailable: 1, nearestThreeCheckOutDates: ["2025-04-18", "2025-04-24", "2025-05-06"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 9,
        totalRooms: 600,
        roomTypes: [
            {
                type: "Junior Suite",
                roomsNumber: 10,
                maxOccupancy: 2,
                availability: [
                    { roomsAvailable: 5, nearestThreeCheckOutDates: ["2025-04-13", "2025-04-19", "2025-05-09"] }
                ]
            },
            {
                type: "Master Suite",
                roomsNumber: 5,
                maxOccupancy: 4,
                availability: [
                    { roomsAvailable: 2, nearestThreeCheckOutDates: ["2025-04-12", "2025-04-20", "2025-05-08"] }
                ]
            }
        ]
    },
    // * ########################################### 
    {
        id: 10,
        totalRooms: 400,
        roomTypes: [
            {
                type: "Basic",
                roomsNumber: 18,
                maxOccupancy: 2,
                availability: [
                    {   roomsAvailable: 7,
                        nearestThreeCheckOutDates: [
                            "2025-04-14",
                            "2025-04-21",
                            "2025-05-05"
                        ] }
                ]
            }
        ]
    }
];
