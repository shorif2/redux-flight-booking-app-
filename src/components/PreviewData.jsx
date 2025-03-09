import { useSelector } from "react-redux";
import BookingCart from "./BookingCart";

const PreviewData = () => {
  const flightBookingList = useSelector((state) => state.flightBooking);
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">className</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        {flightBookingList.map((booking) => (
          <BookingCart key={booking.id} booking={booking} />
        ))}
      </table>
    </div>
  );
};

export default PreviewData;
