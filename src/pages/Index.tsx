import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/health-mind-hero.png";

const keyPoints = [
  { icon: "🔁", text: "The cycle repeats — worry → check → relief → doubt → repeat" },
  { icon: "🔍", text: "You find yourself googling symptoms constantly" },
  { icon: "🗣️", text: "You seek reassurance from doctors or loved ones but it never feels enough" },
  { icon: "💭", text: "Your mind latches onto physical sensations and turns them into \"proof\" of illness" },
  { icon: "🚫", text: "You avoid things that might trigger health fears" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-calm-light via-background to-calm-lavender/30 flex justify-center">
      <div className="w-full max-w-[375px] font-body pb-12">
        {/* Top nav bar */}
        <div className="flex items-center gap-3 px-5 pt-5 pb-2">
          <button className="w-9 h-9 rounded-full bg-card flex items-center justify-center shadow-sm">
            <ArrowLeft size={18} className="text-calm-text" />
          </button>
          <div className="flex-1">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-1/3 rounded-full bg-primary transition-all" />
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center py-4">
          <img src={heroImage} alt="Mind and heart illustration" className="w-28 h-28 object-contain" />
        </div>

        {/* Heading */}
        <h1 className="font-display font-extrabold text-2xl text-calm-text text-center px-6">
          What is Health OCD?
        </h1>

        {/* Intro */}
        <p className="text-calm-text-light text-center text-sm leading-relaxed px-6 mt-3">
          Everyone worries about their health sometimes — but for some people, that worry never really stops.
        </p>

        {/* Body paragraph */}
        <div className="px-6 mt-5">
          <p className="text-calm-text text-sm leading-relaxed">
            Health OCD is a form of OCD where your mind becomes fixated on the fear that something is seriously wrong with your body. It's not just normal health concern — it's an exhausting cycle where a small sensation, a passing thought, or even a word you read triggers a spiral of "what if I'm seriously ill?" And no matter how many times you check, google, or get reassured — the relief never lasts long.
          </p>
        </div>

        {/* Subheading */}
        <h2 className="font-display font-bold text-lg text-calm-text px-6 mt-7">
          What makes it OCD and not just anxiety?
        </h2>

        {/* Key Points */}
        <div className="flex flex-col gap-3 px-5 mt-4">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card rounded-2xl p-4 shadow-sm border border-border"
            >
              <span className="text-xl mt-0.5 shrink-0">{point.icon}</span>
              <p className="text-calm-text text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <div className="px-6 mt-7">
          <p className="text-calm-text text-sm leading-relaxed">
            Your brain is not broken — it's stuck in a loop. Health OCD thrives on uncertainty, and the more you try to get certainty, the stronger it gets. The good news is that with the right tools, you can break this cycle and learn to live without constantly fearing the worst about your body. 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
