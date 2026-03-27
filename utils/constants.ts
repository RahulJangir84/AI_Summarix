export default function pricingPlans() {
  return {
    plans: [
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
        paymentLink:
          process.env.NODE_ENV === "development"
            ? "https://buy.stripe.com/test_dRm9AUbcaflxg6g3Vh5Rm00"
            : "",
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1TECAKL9X4FkNLmMwi6UEtTg"
            : "",
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
        paymentLink:
          process.env.NODE_ENV === "development"
            ? "https://buy.stripe.com/test_aFa3cw7ZY5KX1bmdvR5Rm01"
            : "",
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1TECAKL9X4FkNLmMxawzY09H"
            : "",
      },
    ],
  };
}

export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 50,
      damping: 15,
      duration: 0.8,
    },
  },
};
