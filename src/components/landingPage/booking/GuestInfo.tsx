import Card from "@/components/base/Card";
import InputComponet from "@/components/base/InputComponet";
import { Button } from "@/components/ui/button";

interface Props {
  onNext?: () => void;
  onBack?: () => void;
}

function GuestInfo({ onNext, onBack }: Props) {
  return (
    <Card>
      <form className=" space-y-6">
        <h1 className="text-lg font-medium">Guest Information</h1>

        <div className="space-y-5">
          <InputComponet placeholder="John Doe" label="Name" />

          <span className="grid grid-cols-2 gap-2">
            <InputComponet placeholder="john@example.com" label="Email" />
            <InputComponet
              placeholder="+234 123 122 123"
              label="Phone Number"
            />
          </span>
          <InputComponet
            placeholder=" dietary requirements, etc"
            label="Special Requests(Optional)"
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onNext}>Continue to Review</Button>
        </div>
      </form>
    </Card>
  );
}

export default GuestInfo;
