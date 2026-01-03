import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};
export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      icon: <FileText size={64} strokeWidth={1.5} />,
      label: "Upload PDF",
      description: "Simply drag and drop your PDF file or click to upload.",
    },
    {
      icon: <BrainCircuit size={64} strokeWidth={1.5} />,
      label: "AI Analysis",
      description:
        "Our advanced AI processes and analyzes your document instantly",
    },
    {
      icon: <FileOutput size={64} strokeWidth={1.5} />,
      label: "Get Summary",
      description: "Receive a clear ,consie summary of your document",
    },
  ];
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" />

      {/* Gradient Blobs */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="relative z-10 py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-6 lg:pt-12">
        <div className="text-center mb-14">
          <h2 className="text-xl font-bold uppercase mb-4 text-indigo-600">
            How it works
          </h2>
          <h3 className="text-3xl max-w-2xl mx-auto font-bold mb-4">
            Transform any PDF into as easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-stretch">
              <StepItem {...step} />
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <MoveRight
                    size={32}
                    strokeWidth={1.5}
                    className="text-indigo-600"
                  ></MoveRight>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
  return (
    <div
      className="relative p-6 rounded-2xl bg-white
border border-indigo-200/80
shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
transition-all duration-300
hover:-translate-y-[2px]
hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.3)]
group w-full"
    >
      <div className="flex flex-col gap-4 h-full items-center">
        <div className="flex items-center justify-center h-24 w-24 rounded-2xl bg-linear-to-br from-indigo-500/10 to-transparent group-hover:bg-indigo-500/20 transition-colors">
          <div className="text-indigo-600 ">{icon}</div>
        </div>
        <div className="flex flex-col gap-1 flex-1 justify-between">
          <h4 className="text-center text-xl font-bold">{label}</h4>
          <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
