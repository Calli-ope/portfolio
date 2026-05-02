export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
          <span className="text-foreground">Hey, I&apos;m </span>
          <span className="text-primary">Konrad Martens</span>
          <span className="ml-2 inline-block animate-wave origin-[70%_70%]">
            <span role="img" aria-label="waving hand">&#128075;</span>
          </span>
        </h1>
        
        <div className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
          <p>
            I&apos;m pursuing my Master&apos;s in Smart Mobility Data Science{" "}
            <span role="img" aria-label="student">&#128104;&#8205;&#127891;</span>{" "}
            at EIT Urban Mobility in Barcelona{" "}
            <span role="img" aria-label="Spain flag">&#127466;&#127480;</span>{" "}
            and Tartu{" "}
            <span role="img" aria-label="Estonia flag">&#127466;&#127466;</span>, after completing my undergraduate studies in Computer Science in Berlin, Germany{" "}
            <span role="img" aria-label="German flag">&#127465;&#127466;</span>{" "}
            in cooperation with Hitachi Rail{" "}
            <span role="img" aria-label="train">&#128644;</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
