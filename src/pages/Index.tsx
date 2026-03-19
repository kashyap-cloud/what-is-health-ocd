import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/health-mind-hero.png";

const keyPoints = [
  { icon: "🔁", text: "The cycle keeps going — you worry, you check, you feel better for a moment, then the doubt comes back and it starts all over again." },
  { icon: "🔍", text: "You keep googling your symptoms, even when you know it only makes things worse." },
  { icon: "🗣️", text: "You ask doctors or people close to you for reassurance, but no matter what they say, it never feels like enough." },
  { icon: "💭", text: "Your mind grabs onto normal body feelings — like a headache or a fast heartbeat — and turns them into scary \"evidence\" that something is really wrong." },
  { icon: "🚫", text: "You start avoiding things that might set off your health worries — like news, hospitals, or even certain words." },
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
          We all worry about our health from time to time — but for some people, that worry just doesn't go away.
        </p>

        {/* Body paragraph */}
        <div className="px-6 mt-5">
          <p className="text-calm-text text-sm leading-relaxed text-justify">
            Health OCD is when your brain gets stuck on the idea that something is seriously wrong with your body. It's more than just being a little worried — it's an exhausting loop. A tiny feeling in your body, a random thought, or even a word you hear can send your mind racing with "what if I'm really sick?" You might check your body, search online, or ask someone for comfort — but the relief never sticks. The worry always comes back.
          </p>
        </div>

        {/* Subheading */}
        <h2 className="font-display font-bold text-lg text-calm-text px-6 mt-7">
          How is this different from normal worry?
        </h2>

        {/* Key Points */}
        <div className="flex flex-col gap-3 px-5 mt-4">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card rounded-2xl p-4 shadow-sm border border-border"
            >
              <span className="text-xl mt-0.5 shrink-0">{point.icon}</span>
              <p className="text-calm-text text-sm leading-relaxed text-justify">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <div className="px-6 mt-7">
          <p className="text-calm-text text-sm leading-relaxed text-justify">
            There's nothing wrong with your brain — it's just stuck in a loop. Health OCD feeds on uncertainty. The more you try to feel 100% sure you're okay, the stronger it gets. But here's the good news: with the right help, you can break free from this cycle and stop living in constant fear about your health. 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
