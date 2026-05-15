export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'Apartment' | 'Villa' | 'Plot' | 'Studio' | 'Penthouse' | 'Row House' | 'Condo' | 'Farm House' | 'Land Bank';
  image: string;
  beds?: number;
  baths?: number;
  sqft: number;
  description?: string;
  amenities?: string[];
}

export const allProperties: Property[] = [
  {
    id: 1,
    title: 'Azure Skyline Residences',
    location: 'Worli, Mumbai',
    price: '4.2 Cr',
    type: 'Apartment',
    sqft: 1850,
    beds: 3,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200',
    description: 'A breathtaking high-rise apartment offering 180-degree views of the Arabian Sea. Features bespoke Italian marble flooring and a smart-home automation system.',
    amenities: ['Infinity Pool', 'Valet Parking', 'Private Theater', 'Yoga Deck']
  },
  {
    id: 2,
    title: 'Heritage Oaks Estate',
    location: 'Lonavala, MH',
    price: '7.5 Cr',
    type: 'Villa',
    sqft: 5200,
    beds: 5,
    baths: 6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200',
    description: 'A sprawling colonial-style villa nestled in the hills. Includes a private temperature-controlled pool, staff quarters, and an organic kitchen garden.',
    amenities: ['Private Pool', 'Wine Cellar', 'Staff Quarters', 'Solar Grid']
  },
  {
    id: 3,
    title: 'The Glass House Studio',
    location: 'Koramangala, Bangalore',
    price: '85 L',
    type: 'Studio',
    sqft: 650,
    beds: 1,
    baths: 1,
image: 'https://images.unsplash.com/photo-1702014862053-946a122b920d?auto=format&fit=crop&w=1200',
    description: 'Minimalist industrial-chic studio perfect for young professionals. High ceilings, exposed brick walls, and walking distance to the city’s best cafes.',
    amenities: ['Fiber Internet', 'Co-working Space', 'Rooftop Lounge', 'Bike Storage']
  },
  {
    id: 4,
    title: 'Summit Peak Penthouse',
    location: 'Gurugram, HR',
    price: '12.8 Cr',
    type: 'Penthouse',
    sqft: 6800,
    beds: 4,
    baths: 5,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200',
    description: 'The ultimate luxury experience. This triplex penthouse includes a private elevator, a rooftop plunge pool, and a dedicated concierge service.',
    amenities: ['Private Elevator', 'Plunge Pool', 'Barbecue Pit', 'Concierge']
  },
  {
    id: 5,
    title: 'Emerald Meadows Plot',
    location: 'Nandi Hills, Bangalore',
    price: '1.1 Cr',
    type: 'Plot',
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200',
    description: 'A premium corner plot in a gated community. Ready for immediate construction with pre-installed water and electricity lines.',
    amenities: ['Gated Community', 'Clubhouse Access', 'Landscaped Parks', '24/7 Water']
  },
  {
    id: 6,
    title: 'Urban Row Terrace',
    location: 'Whitefield, Bangalore',
    price: '2.9 Cr',
    type: 'Row House',
    sqft: 2800,
    beds: 3,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1722062767419-ff110d4e7db7?auto=format&fit=crop&w=1200',
    description: 'A modern take on the traditional row house. Features a skylight over the central staircase and a cozy private backyard for evening tea.',
    amenities: ['Private Garden', 'Power Backup', 'Guest Parking', 'Library']
  },
  {
    id: 7,
    title: 'Metro Central Condo',
    location: 'Bandra West, Mumbai',
    price: '3.5 Cr',
    type: 'Condo',
    sqft: 1450,
    beds: 2,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200',
    description: 'A sleek, contemporary condo located in the heart of Mumbai’s nightlife and fashion district. Ideal for those who love city life.',
    amenities: ['Gym', 'Steam Room', 'Business Center', 'Covered Parking']
  },
  {
    id: 8,
    title: 'Silver Woods Villa',
    location: 'Cavelossim, Goa',
    price: '5.6 Cr',
    type: 'Villa',
    sqft: 4100,
    beds: 4,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200',
    description: 'A Mediterranean-inspired villa just 500 meters from the beach. Features large verandas and traditional Portuguese architectural elements.',
    amenities: ['Beach Access', 'Outdoor Shower', 'Pet Friendly', 'Security Cameras']
  },


  {
    id: 9,
    title: 'The Greenwoods Farm House',
    location: 'Manesar, Gurugram',
    price: '13.2 Cr',
    type: 'Farm House',
    sqft: 4500,
    beds: 8,
    baths: 8,
image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60',
description: 'A peaceful farmhouse retreat in Manesar, Gurgaon surrounded by lush greenery and open lands',
amenities: ['Private Lawn', 'Swimming Pool', 'Outdoor Seating', '24/7 Security']
  },
{
  id: 10,
  title: 'Prime Land Bank Opportunity',
  location: 'sector 29, Gurugram',
  price: '18.7 Cr',
  type: 'Land Bank',
  sqft: 7500,
  beds: 0,
  baths: 0,
  image: 'https://media.istockphoto.com/id/2158990093/photo/land-boundary-made-with-wires.jpg',
  description: 'A strategically located land bank property in Manesar, Gurugram with high future appreciation potential. Ideal for long-term investment, commercial expansion, or future development projects.',
  amenities: ['Boundary Fencing', 'Road Access', 'Prime Location', 'Investment Opportunity']
}
];