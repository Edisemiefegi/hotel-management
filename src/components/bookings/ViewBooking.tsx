interface Props {
  booking: any
}
function ViewBooking({booking}: Props) {
  return (
    <div>ViewBooking {booking.bookingId} </div>
  )
}

export default ViewBooking