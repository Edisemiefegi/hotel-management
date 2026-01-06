import InputComponet from "../base/InputComponet";

function AddRoom() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1">
      <InputComponet label="Room Type" />
      <InputComponet label="Price Per Night (NGN)" />
      <InputComponet label="Room Number" />
      <InputComponet label="Floor" />
      <InputComponet label="Beds" />
      <InputComponet label="Size" />
    </div>
  );
}

export default AddRoom;
