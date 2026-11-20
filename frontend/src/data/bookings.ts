
export type BookingStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Completed";

export type Booking = {
  id: string;
  equipmentId: string;
  equipmentName: string;
  category: string;
  bookingDate: string;
  returnDate: string;
  status: BookingStatus;
  purpose: string;
};

export const bookingList: Booking[] = [
  {
    id: "B001",
    equipmentId: "1",
    equipmentName: "MacBook Pro",
    category: "Computing",
    bookingDate: "2026-11-20",
    returnDate: "2026-11-23",
    status: "Approved",
    purpose: "Web development project",
  },
  {
    id: "B002",
    equipmentId: "2",
    equipmentName: "DSLR Camera",
    category: "Photography",
    bookingDate: "2026-11-22",
    returnDate: "2026-11-24",
    status: "Pending",
    purpose: "College photography event",
  },
  {
    id: "B003",
    equipmentId: "3",
    equipmentName: "4K Monitor",
    category: "Computing",
    bookingDate: "2026-11-15",
    returnDate: "2026-11-17",
    status: "Completed",
    purpose: "Programming assignment",
  },
  {
    id: "B004",
    equipmentId: "4",
    equipmentName: "Projector",
    category: "Presentation",
    bookingDate: "2026-11-18",
    returnDate: "2026-11-19",
    status: "Rejected",
    purpose: "Classroom presentation",
  },
  {
    id: "B005",
    equipmentId: "5",
    equipmentName: "Wireless Microphone",
    category: "Audio",
    bookingDate: "2026-11-25",
    returnDate: "2026-11-26",
    status: "Pending",
    purpose: "College seminar",
  },
];
