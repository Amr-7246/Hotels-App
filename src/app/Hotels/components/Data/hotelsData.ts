import { StaticImageData } from 'next/image';
import { 
  Hotel_1, Hotel_2, Hotel_3, Hotel_4, Hotel_5, Hotel_6,
  Hotel_7, Hotel_8, Hotel_9, Hotel_10, Hotel_11, Hotel_12,
  Hotel_13, Hotel_14, Hotel_15, Hotel_16, Hotel_17, Hotel_18,
  Hotel_19, Hotel_20, Hotel_21, Hotel_22, Hotel_23
} from '../../../../assets/index';

export interface Hotel {
    id: number;
    name: string;
    address: string;
    popularLocations: string[];
    amenities: string[];
    mealPlansAvailable: string;
    paymentType: string;
    propertyType: string;
    propertyBrand: string;
    travellerExperience: string;
    availability: string;
    accessibility: string;
    hotelsRewards: string;
    pricePerNight: number;
    stayOptions: string;
    neighbourhood: string;
    propertyClass: string;
    rating: number;
    description: string;
    imageUrl: StaticImageData;
  }
  
  export const Hotels: Hotel[] = [
    {
      id: 1,
      name: 'Hyatt Regency Cairo West',
      address: '6th of October City, Cairo, Egypt',
      popularLocations: ['Pyramids of Giza', 'Egyptian Museum'],
      amenities: ['Pool', 'Ocean View', 'Spa', 'Gym', 'Hot Tub', 'Free WiFi'],
      mealPlansAvailable: 'Dinner Included',
      paymentType: 'Reserve now, Pay later',
      propertyType: 'Hotel',
      propertyBrand: 'Hyatt',
      travellerExperience: 'Luxury, Business',
      availability: 'Available',
      accessibility: 'Wheelchair accessible',
      hotelsRewards: 'Hyatt Rewards',
      pricePerNight: 150,
      stayOptions: 'Nightly, Weekend, Weekly',
      neighbourhood: 'Cairo West',
      propertyClass: '5-star',
      rating: 4.7,
      description:
        'Experience luxury and comfort at Hyatt Regency Cairo West, ideally located near iconic landmarks.',
      imageUrl: Hotel_5
    },
      {
        id: 2,
        name: 'Marriott Hotel Alexandria',
        address: 'Corniche Road, Alexandria, Egypt',
        popularLocations: ['Bibliotheca Alexandrina', 'Montaza Palace'],
        amenities: ['Pool', 'Gym', 'Spa', 'Free_Breakfast', 'WiFi'],
        mealPlansAvailable: 'Breakfast Included',
        paymentType: 'Pay at hotel',
        propertyType: 'Hotel',
        propertyBrand: 'Marriott',
        travellerExperience: 'Family, Business',
        availability: 'Available',
        accessibility: 'Accessible parking',
        hotelsRewards: 'Marriott Bonvoy',
        pricePerNight: 130,
        stayOptions: 'Nightly, Extended Stay',
        neighbourhood: 'Corniche',
        propertyClass: '4-star',
        rating: 4.5,
        description:
          'Enjoy a seaside retreat with modern amenities and a prime location at Marriott Hotel Alexandria.',
        imageUrl: Hotel_6
      },
      {
        id: 3,
        name: 'Four Seasons Hotel Cairo at Nile Plaza',
        address: 'Nile Road, Cairo, Egypt',
        popularLocations: ['Egyptian Museum', 'Cairo Tower'],
        amenities: ['Pool', 'Spa', 'Gym', 'Rooftop Bar', 'Concierge'],
        mealPlansAvailable: 'Full Board',
        paymentType: 'Reserve now, Pay later',
        propertyType: 'Hotel',
        propertyBrand: 'Four Seasons',
        travellerExperience: 'Luxury, Business',
        availability: 'Available',
        accessibility: 'Wheelchair accessible',
        hotelsRewards: 'Four Seasons Rewards',
        pricePerNight: 250,
        stayOptions: 'Nightly, Weekend',
        neighbourhood: 'Nile Plaza',
        propertyClass: '5-star',
        rating: 4.9,
        description:
          'Discover unparalleled luxury and service at Four Seasons Hotel Cairo at Nile Plaza.',
        imageUrl: Hotel_7
      },
      {
        id: 4,
        name: 'Steigenberger Hotel El Tahrir',
        address: 'Tahrir Square, Cairo, Egypt',
        popularLocations: ['Tahrir Square', 'Egyptian Museum'],
        amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Free WiFi'],
        mealPlansAvailable: 'Breakfast and Dinner',
        paymentType: 'Pay at hotel',
        propertyType: 'Hotel',
        propertyBrand: 'Steigenberger',
        travellerExperience: 'Business, Leisure',
        availability: 'Available',
        accessibility: 'Elevator access',
        hotelsRewards: 'Steigenberger Rewards',
        pricePerNight: 110,
        stayOptions: 'Nightly, Weekend',
        neighbourhood: 'Downtown Cairo',
        propertyClass: '4-star',
        rating: 4.3,
        description:
          'Stay in the heart of Cairo with modern amenities and stylish design at Steigenberger Hotel El Tahrir.',
        imageUrl: Hotel_8
      },
      {
        id: 5,
        name: 'InterContinental Dahab Resort',
        address: 'Dahab, South Sinai, Egypt',
        popularLocations: ['Blue Hole', 'Mount Sinai'],
        amenities: ['Pool', 'Spa', 'Diving Center', 'Beach Access', 'Gym'],
        mealPlansAvailable: 'All-Inclusive',
        paymentType: 'Reserve now, Pay later',
        propertyType: 'Resort',
        propertyBrand: 'InterContinental',
        travellerExperience: 'Adventure, Luxury',
        availability: 'Available',
        accessibility: 'Accessible rooms',
        hotelsRewards: 'IHG Rewards Club',
        pricePerNight: 180,
        stayOptions: 'Nightly, Weekly',
        neighbourhood: 'Dahab',
        propertyClass: '5-star',
        rating: 4.6,
        description:
          'Experience the ultimate desert resort with stunning views and adventure activities at InterContinental Dahab Resort.',
        imageUrl: Hotel_9
      },
      {
        id: 6,
        name: 'Hilton Luxor Resort & Spa',
        address: 'Luxor, Egypt',
        popularLocations: ['Karnak Temple', 'Valley of the Kings'],
        amenities: ['Pool', 'Spa', 'Gym', 'Rooftop Bar', 'Free WiFi'],
        mealPlansAvailable: 'Breakfast Included',
        paymentType: 'Pay at hotel',
        propertyType: 'Resort',
        propertyBrand: 'Hilton',
        travellerExperience: 'Family, Business',
        availability: 'Available',
        accessibility: 'Wheelchair accessible',
        hotelsRewards: 'Hilton Honors',
        pricePerNight: 140,
        stayOptions: 'Nightly, Extended Stay',
        neighbourhood: 'Luxor City',
        propertyClass: '4-star',
        rating: 4.4,
        description:
          'Enjoy a mix of ancient charm and modern comfort at Hilton Luxor Resort & Spa, near iconic historical sites.',
        imageUrl: Hotel_10
      },
      {
        id: 7,
        name: 'Sofitel Winter Palace Aswan',
        address: 'Aswan, Egypt',
        popularLocations: ['Aswan High Dam', 'Philae Temple'],
        amenities: ['Pool', 'Spa', 'Gym', 'Luxury Rooms', 'Free Breakfast'],
        mealPlansAvailable: 'Full Board',
        paymentType: 'Reserve now, Pay later',
        propertyType: 'Hotel',
        propertyBrand: 'Sofitel',
        travellerExperience: 'Luxury, Business',
        availability: 'Available',
        accessibility: 'Elevator access',
        hotelsRewards: 'Sofitel Rewards',
        pricePerNight: 160,
        stayOptions: 'Nightly, Weekend',
        neighbourhood: 'Aswan Riverside',
        propertyClass: '5-star',
        rating: 4.8,
        description:
          'Immerse yourself in regal luxury and stunning views at Sofitel Winter Palace Aswan.',
        imageUrl: Hotel_11
      },
      {
        id: 8,
        name: 'Ritz-Carlton Sharm El Sheikh',
        address: 'Sharm El Sheikh, Egypt',
        popularLocations: ['Naama Bay', 'Ras Mohammed National Park'],
        amenities: ['Pool', 'Spa', 'Gym', 'Beach Access', 'Free WiFi'],
        mealPlansAvailable: 'All-Inclusive',
        paymentType: 'Reserve now, Pay later',
        propertyType: 'Resort',
        propertyBrand: 'Ritz-Carlton',
        travellerExperience: 'Luxury, Leisure',
        availability: 'Available',
        accessibility: 'Accessible facilities',
        hotelsRewards: 'Ritz Rewards',
        pricePerNight: 220,
        stayOptions: 'Nightly, Weekly',
        neighbourhood: 'Sharm El Sheikh Center',
        propertyClass: '5-star',
        rating: 4.9,
        description:
          'Indulge in a luxurious retreat with stunning sea views at Ritz-Carlton Sharm El Sheikh.',
        imageUrl: Hotel_12
      },
      {
        id: 9,
        name: 'Mövenpick Resort El Gouna',
        address: 'El Gouna, Egypt',
        popularLocations: ['El Gouna Marina', 'Mangroves'],
        amenities: ['Pool', 'Spa', 'Gym', 'Water Sports', 'Beach Access'],
        mealPlansAvailable: 'Half Board',
        paymentType: 'Reserve now, Pay later',
        propertyType: 'Resort',
        propertyBrand: 'Mövenpick',
        travellerExperience: 'Family, Luxury',
        availability: 'Available',
        accessibility: 'Wheelchair accessible',
        hotelsRewards: 'Mövenpick Rewards',
        pricePerNight: 170,
        stayOptions: 'Nightly, Extended Stay',
        neighbourhood: 'El Gouna',
        propertyClass: '5-star',
        rating: 4.5,
        description:
          'Enjoy the perfect blend of luxury and nature at Mövenpick Resort El Gouna, an oasis in the desert.',
        imageUrl: Hotel_13
      },
      {
        id: 10,
        name: 'Barcelo Cairo',
        address: 'Cairo, Egypt',
        popularLocations: ['Khan el-Khalili', 'Coptic Cairo'],
        amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Free WiFi'],
        mealPlansAvailable: 'Breakfast Included',
        paymentType: 'Pay at hotel',
        propertyType: 'Hotel',
        propertyBrand: 'Barcelo',
        travellerExperience: 'Business, Leisure',
        availability: 'Available',
        accessibility: 'Accessible facilities',
        hotelsRewards: 'Barcelo Rewards',
        pricePerNight: 120,
        stayOptions: 'Nightly, Weekend',
        neighbourhood: 'Downtown Cairo',
        propertyClass: '4-star',
        rating: 4.2,
        description:
          'Discover modern comfort and style in the heart of Cairo at Barcelo Cairo.',
        imageUrl: Hotel_14
      }
    ];
    