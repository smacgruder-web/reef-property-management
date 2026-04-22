// Sample data for Reef Property prototype
export const sampleData = {
  properties: [
    {
      id: 1,
      name: "Oceanview Villa",
      location: "Malibu, CA",
      price: 450,
      rating: 4.8,
      image: "/stitch/property_details/screen.png"
    },
    {
      id: 2,
      name: "Beachfront Condo",
      location: "Miami, FL",
      price: 320,
      rating: 4.6,
      image: "/stitch/property_search_map_1/screen.png"
    }
  ],
  users: {
    resident: {
      name: "John Doe",
      balance: 1250.00,
      dueDate: "2026-05-01"
    },
    owner: {
      name: "Jane Smith",
      portfolio: 5,
      revenue: 25000
    }
  },
  maintenance: [
    {
      id: 1,
      title: "Leaky Faucet",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: 2,
      title: "HVAC Repair",
      status: "Completed",
      priority: "High"
    }
  ]
};