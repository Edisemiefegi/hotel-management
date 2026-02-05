import Card from "@/components/base/Card";
import InputComponet from "@/components/base/InputComponet";
import FeatureCard from "@/components/landingPage/FeatureCard";
import { Button } from "@/components/ui/button";
import { Clock3, Mail, Phone, Send } from "lucide-react";

function Contact() {
  const contact = [
    {
      aos: "flip-left",
      duration: "1000",
      icon: Mail,
      title: "Email Us",
      subtitle: "hello@luxuria.com",
      text: "We'll respond within 24 hours",
    },
    {
      aos: "flip-left",
      duration: "2000",
      icon: Phone,
      title: "Call Us",
      subtitle: "+1 (555) 123-4567",
      text: "Mon-Fri from 8am to 6pm",
    },
    {
      aos: "flip-left",
      duration: "3000",
      icon: Clock3,
      title: "Working Hours",
      subtitle: "24/7 Support",
      text: "Always here to help",
    },
  ];

  return (
    <main className="bg-secondary min-h-screen  py-25">
      <div className="mx-auto container px-8  space-y-20">
        <section className=" space-y-6 flex flex-col items-center justify-center">
          <p className="md:text-4xl text-2xl font-bold ">Get in Touch</p>
          <p className="text-gray text-center">
            Have a question or need assistance? We're here to help you plan your
            perfect stay.
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {contact.map((item, index) => ( <Card className="bg-white">
               <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            data-aos={item.aos}
            data-aos-duration={item.duration}
          />
            </Card>))}
          </div>
        </section>

        <section>
          <Card className="bg-white space-y-8">
            <p className="text-xl font-semibold">Send Us a Message</p>
            <form action="" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <InputComponet placeholder="John" label="First Name" />
                <InputComponet placeholder="Doe" label="Last Name" />
              </div>
              <InputComponet placeholder="john@example.com" label="Email" />
              <InputComponet placeholder="How can we help?" label="Subject" />
              <InputComponet
                placeholder="Tell us more about your inquiry.."
                label="Message"
                className=""
              />

              <Button className="w-full">
                <span>
                  <Send />
                </span>
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default Contact;
