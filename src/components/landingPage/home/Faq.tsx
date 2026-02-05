import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "How does booking on Luxuria work?",
      answer:
        "Luxuria allows you to discover and book carefully selected hotels in just a few clicks. Choose your destination, compare options, and confirm your stay instantly.",
    },
    {
      question: "Are the hotels on Luxuria verified?",
      answer:
        "Yes. All hotels listed on Luxuria are reviewed and verified to meet our quality, comfort, and service standards.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Cancellation and modification policies depend on the hotel. You’ll always see the exact policy before completing your reservation.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No. Luxuria provides transparent pricing with no hidden charges or surprise fees.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes. We use secure payment processing and industry-standard encryption to protect your data.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      <div className="space-y-8">
        <p className="font-medium">FAQs</p>
        <p className="sm:text-4xl text-2xl font-medium">
          Got Questions? We're Here to Help.
        </p>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              {/* Question */}
              <Button
                variant={"ghost"}
                onClick={() => toggle(index)}
                className=""
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-gray text-sm">
          Find quick answers to common questions about booking, cancellations,
          payments, and more - so you can book any hotel with confidence.
        </p>
        <div className="sm:w-96 sm:h-96">
          <img
            src="/illustrations/what-to-do.gif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
