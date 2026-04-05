import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import constants, { containerVariants, itemVariants } from "@/utils/constants";
import { MotionDiv, MotionSection } from "../common/motion";
type PriceType = {
  id: string;
  title: string;
  price: number;
  description: string;
  items: string[];
  paymentLink: string;
  priceId: string;
};

const data = constants();

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
    <MotionDiv variants={itemVariants} className="relative w-full max-w-lg">
      {isPro && (
        <div className="absolute -inset-1 rounded-2xl bg-indigo-500/20 blur-lg" />
      )}

      <div
        className={cn(
          "relative z-10 flex h-full flex-col gap-4 lg:gap-8 p-8 rounded-2xl border transition-all duration-300",
          "bg-white dark:bg-slate-900/40 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40",
          isPro
            ? "border-indigo-500 dark:border-slate-400 border-2 shadow-indigo-500/20 dark:shadow-slate-400/10"
            : "border-gray-200 dark:border-slate-800 shadow-black/5",
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="font-bold text-lg lg:text-2xl capitalize dark:text-[#d2d2d7]">
              {title}
            </p>
            <p className="text-base dark:text-slate-400">{description}</p>
          </div>
        </div>

        <div className="flex gap-2 dark:text-[#d2d2d7]">
          <p className="font-extrabold text-5xl tracking-tight">${price}</p>
          <div className="pt-2">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 dark:bg-slate-800" />

        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 dark:text-slate-400"
            >
              <CheckIcon
                size={20}
                className="text-indigo-600 dark:text-slate-300"
              />
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
                ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-400"
                : "border-gray-300 text-gray-700 dark:text-slate-300 dark:border-slate-600 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-slate-400 dark:hover:text-slate-100",
            )}
          >
            Buy Now <ArrowRight />
          </a>
        </div>
      </div>
    </MotionDiv>
  );
};

export default function PricingSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.005 }}
      className="relative overflow-hidden"
      id="pricing"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-t dark:from-[#1C2236] dark:via-[#23283b] dark:to-[#1C2236] dark:via-60%" />
      <div className="relative z-10 py-12 lg:py-15 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-4">
        <div className="flex items-center justify-center font-bold w-full pb-12">
          <h2 className="text-xl uppercase text-indigo-600 dark:text-slate-400 font-bold tracking-wider font-sans">
            Pricing
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {data.plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
