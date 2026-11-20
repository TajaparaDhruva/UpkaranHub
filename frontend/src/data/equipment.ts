
export type Equipment = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  available: boolean;
};

export const equipmentList: Equipment[] = [
  {
    id: "1",
    name: "MacBook Pro",
    category: "Computing",
    description: "High-performance laptop for development and projects.",
    image: "/images/equipment/macbook.jpg",
    available: true,
  },
  {
    id: "2",
    name: "DSLR Camera",
    category: "Photography",
    description: "Professional camera for photography and video.",
    image: "/images/equipment/camera.jpg",
    available: true,
  },
  {
    id: "3",
    name: "4K Monitor",
    category: "Computing",
    description: "High-resolution monitor for daily work.",
    image: "/images/equipment/monitor.jpg",
    available: false,
  },
  {
    id: "4",
    name: "Projector",
    category: "Presentation",
    description: "Projector for classroom presentations and meetings.",
    image: "/images/equipment/projector.jpg",
    available: true,
  },
  {
    id: "5",
    name: "Wireless Microphone",
    category: "Audio",
    description: "Wireless microphone for events and presentations.",
    image: "/images/equipment/microphone.jpg",
    available: true,
  },
  {
    id: "6",
    name: "Graphics Tablet",
    category: "Design",
    description: "Digital drawing tablet for creative projects.",
    image: "/images/equipment/tablet.jpg",
    available: false,
  },
];
