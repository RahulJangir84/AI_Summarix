import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";

type PriceType = {
  id: string;
  title: string;
  price: number;
  description: string;
  items: string[];
  paymentLink: string;
  priceId: string;
};

const plans: PriceType[] = [
  {
    id: "basic",
    title: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDFs summaries per month",
      "Email support",
      "Standard processing speed",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    title: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];

const PricingCard = ({
  price,
  description,
  items,
  paymentLink,
  title,
  id,
}: PriceType) => {
  const isPro = id === "pro";

  return (
    <div className="relative w-full max-w-lg">
      {isPro && (
        <div className="absolute -inset-1 rounded-2xl bg-indigo-500/20 blur-lg" />
      )}

      <div
        className={cn(
          "relative z-10 flex h-full flex-col gap-4 lg:gap-8 p-8 rounded-2xl border transition-all duration-300",
          "bg-white hover:-translate-y-1 hover:shadow-xl",
          isPro
            ? "border-indigo-500 border-2 shadow-indigo-500/20"
            : "border-gray-200 shadow-black/5"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="font-bold text-lg lg:text-2xl capitalize">{title}</p>
            <p className="text-base">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="font-extrabold text-5xl tracking-tight">${price}</p>
          <div className="pt-2">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200" />

        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckIcon size={20} className="text-indigo-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center w-full">
          <a
            href={paymentLink}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-full py-2 border-2 transition-all",
              isPro
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "border-gray-300 hover:border-indigo-500 hover:text-indigo-600"
            )}
          >
            Buy Now <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-18">
        <div className="flex items-center justify-center font-bold w-full pb-12">
          <h2 className="text-xl uppercase text-indigo-600 font-bold">
            Pricing
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
