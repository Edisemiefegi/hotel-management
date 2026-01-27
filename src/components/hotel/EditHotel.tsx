import HotelForm from "./HotelForm";
// interface Props {
//   hotel?: any;
//   onClose?: () => void;
// }
function EditHotel() {
  return (
    <div className="w-full relative  space-y-4">
      <HotelForm
     
        mode="edit"
        // onCancel={onClose}
        // onSubmit={async (data) => {
        //   console.log(data, "test");
        //   onClose?.();
        // }}
      />

    
    </div>
  );
}

export default EditHotel;
