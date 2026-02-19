import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-36 h-[300vh] bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-24">
            <span className="text-2xl text-black/60">About Us</span>
            <p className="text-[50px] text-black/60">
              We built this AI to redefine how people train. By combining
              advanced movement tracking with real-time coaching, we turn raw
              performance data into measurable progress. Whether you run, lift,
              ride, or compete, our mission is simple: make elite-level insights
              accessible to anyone ready to push their limits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
