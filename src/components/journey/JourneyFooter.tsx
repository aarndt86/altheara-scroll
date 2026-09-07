import React from "react";

export function JourneyFooter() {
  return (
    <div className="w-full pointer-events-auto">
      
      {/* ==================================================
          WARM IVORY / PARCHMENT CONVERSION COLUMN — CLEAN EXHALE
          ================================================== */}
      <section className="w-full bg-[#FAF9F5] text-espresso px-8 sm:px-16 md:px-24 py-20 sm:py-28 md:py-36 border-t border-stone/10 font-sans">
        <div className="max-w-4xl mx-auto flex flex-col gap-20">
          
          {/* 1. Plain-English Product Definition */}
          <div className="flex flex-col gap-4 max-w-3xl pb-12 border-b border-[#E4DCCE]">
            <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
              WHAT IS ALTHEARA?
            </span>
            <p className="font-reading text-2xl sm:text-3xl text-[#1C1916] leading-relaxed font-light">
              Altheara is a private place to capture your life as it happens, reflect on what it means, and understand more of yourself as those moments accumulate. Over time, what you leave there becomes connected stories, yearly Volumes, and a Library of the life you actually lived.
            </p>
          </div>

          {/* 2. The Daily Experience Demonstration */}
          <div className="flex flex-col gap-8 pb-12 border-b border-[#E4DCCE]">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                THE DAILY EXPERIENCE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1C1916] font-normal leading-tight">
                HOW ALTHEARA FEELS EACH DAY
              </h2>
            </div>

            {/* Editorial Moment Flow */}
            <div className="p-8 sm:p-10 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-6">
              
              {/* Step 1: The Invitation */}
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  1. THE INVITATION
                </span>
                <p className="font-reading text-lg sm:text-xl text-[#1C1916] italic font-light">
                  &ldquo;What happened today that you don&apos;t want to lose?&rdquo;
                </p>
              </div>

              {/* Step 2: The Echo */}
              <div className="p-5 rounded-sm bg-[#FAF8F3] border border-[#E4DCCE]/80 flex flex-col gap-2">
                <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#8C8275] uppercase">
                  2. YOUR ECHO
                </span>
                <p className="font-reading text-base text-[#2C241D] leading-relaxed font-light">
                  &ldquo;Everyone ended up in the kitchen after dinner tonight. Nobody was doing anything special. We just stood around talking longer than usual before everyone went their separate ways.&rdquo;
                </p>
              </div>

              {/* Step 3: The Reflection */}
              <div className="p-5 rounded-sm bg-[#F0ECE1]/60 border border-[#E4DCCE] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#A68A56] uppercase">
                    3. REFLECTION RETURNED
                  </span>
                </div>
                <p className="font-reading text-base text-[#1C1916] leading-relaxed font-light">
                  &ldquo;Nothing about tonight announced itself as important. That&apos;s probably why it would be so easy to forget. But some of the moments we miss most later are the ones we never knew we were supposed to remember.&rdquo;
                </p>
              </div>

              {/* Step 4: Cascade to Library */}
              <div className="pt-4 border-t border-[#E4DCCE]/60 flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                  WHERE THAT MOMENT GOES
                </span>
                <div className="font-display text-sm sm:text-base text-[#A68A56] tracking-wide flex flex-wrap items-center gap-2 sm:gap-4 font-medium">
                  <span>ECHO</span>
                  <span>&rarr;</span>
                  <span>REFLECTION</span>
                  <span>&rarr;</span>
                  <span>STORY</span>
                  <span>&rarr;</span>
                  <span>VOLUME</span>
                  <span>&rarr;</span>
                  <span>LIBRARY</span>
                </div>
              </div>

            </div>

            <p className="font-display text-xl sm:text-2xl text-[#1C1916] text-center font-normal mt-2">
              A FEW MINUTES TODAY. <span className="text-[#A68A56]">SOMEWHERE FOR IT TO GO FOREVER.</span>
            </p>
          </div>

          {/* 3. The Core System */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                THE CORE SYSTEM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-[1.12] tracking-tight">
                A SIMPLE HABIT.<br />A LIFE THAT KEEPS GROWING.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 mt-2 border-t border-[#E4DCCE] pt-8">
              {[
                { label: "ECHO", desc: "Capture what is present while it is happening." },
                { label: "REFLECTION", desc: "See something meaningful returned to you." },
                { label: "LENS", desc: "Notice patterns forming across seasons of your life." },
                { label: "STORY", desc: "Watch separate moments begin connecting." },
                { label: "VOLUMES", desc: "Return to the years that shaped you." },
                { label: "LIBRARY", desc: "See what a life becomes when its years have somewhere to live." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 pb-5 border-b border-[#E4DCCE]/60">
                  <span className="font-sans text-[11px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                    {item.label}
                  </span>
                  <p className="font-reading text-base text-[#4A4238] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Category Positioning & Journal Comparison */}
          <div className="flex flex-col gap-10 border-t border-[#E4DCCE] pt-14 sm:pt-18">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                THE CATEGORY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-tight tracking-tight">
                THIS ISN&apos;T ABOUT WRITING MORE.
              </h2>
              <p className="font-reading text-xl sm:text-2xl text-[#8C8275] italic font-light mt-1">
                It&apos;s about losing less.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
              {/* Left Column: Traditional Journal */}
              <div className="p-8 bg-[#F0ECE1]/60 rounded-sm border border-[#E4DCCE] flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[11px] tracking-[0.25em] font-bold text-[#8C8275] uppercase block mb-4">
                    TRADITIONAL JOURNAL
                  </span>
                  <div className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light flex flex-col gap-3">
                    <p>You write.</p>
                    <p>The pages accumulate.</p>
                    <p>You have to return and make sense of them yourself.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Altheara */}
              <div className="p-8 bg-[#FAF8F3] rounded-sm border border-[#C9AE7C]/40 shadow-[0_4px_24px_rgba(201,174,124,0.12)] flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[11px] tracking-[0.25em] font-bold text-[#A68A56] uppercase block mb-4">
                    ALTHEARA
                  </span>
                  <div className="font-reading text-base sm:text-lg text-[#2C241D] leading-relaxed font-light flex flex-col gap-3">
                    <p>You live.</p>
                    <p>You leave Echoes.</p>
                    <div className="pt-2">
                      <p className="text-sm font-sans text-[#8C8275] uppercase tracking-wider mb-2 font-medium">Altheara helps them become:</p>
                      <p className="font-display text-base sm:text-lg text-[#A68A56] font-normal tracking-wide">
                        Reflection &rarr; Story &rarr; Volume &rarr; Library
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Positioning Line */}
            <div className="mt-2 p-6 sm:p-8 bg-white/70 border border-[#E4DCCE] rounded-sm text-center">
              <p className="font-display text-xl sm:text-2xl text-[#1C1916] font-normal leading-relaxed">
                A journal gives you pages. <span className="text-[#A68A56]">Altheara gives those pages somewhere to go.</span>
              </p>
            </div>
          </div>

          {/* 3. Emotional & Factual Privacy Commitment */}
          <div className="flex flex-col gap-6 border-t border-[#E4DCCE] pt-14 sm:pt-18 max-w-3xl">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                PRIVACY & OWNERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1C1916] font-normal leading-tight tracking-tight">
                YOUR LIFE IS NOT CONTENT.
              </h2>
            </div>

            {/* Emotional Promise */}
            <p className="font-reading text-lg sm:text-xl text-[#3D352E] leading-relaxed font-light">
              Your reflections are personal. They aren&apos;t advertising inventory, and they aren&apos;t something we sell. Altheara is designed to be a private place for the life you choose to keep here.
            </p>

            {/* Factual Substantiation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E4DCCE]/60 text-xs sm:text-sm text-[#736C64] font-sans">
              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-[#1C1916] uppercase tracking-wider text-[10px]">Zero Public Models</span>
                <p className="font-reading leading-relaxed">Your stories are never used to train public generative models.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-[#1C1916] uppercase tracking-wider text-[10px]">End-to-End Security</span>
                <p className="font-reading leading-relaxed">Encrypted data storage with redundant backup architectures.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-[#1C1916] uppercase tracking-wider text-[10px]">Complete Ownership</span>
                <p className="font-reading leading-relaxed">You own your archive. Export or remove your story at any time.</p>
              </div>
            </div>
          </div>

          {/* 4. Restructured 3-Stage Pricing Section */}
          <div id="pricing" className="flex flex-col gap-10 border-t border-[#E4DCCE] pt-14 sm:pt-18">
            <div className="flex flex-col gap-2 text-center max-w-xl mx-auto">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                PRICING & CONTINUITY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1C1916] font-normal leading-tight">
                TRY IT &rarr; KEEP IT GROWING &rarr; HOLD WHAT IT BECAME
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full max-w-6xl mx-auto mt-4 px-2 md:px-0">
              
              {/* Card 1: Open */}
              <div className="bg-[#FAF9F6] p-8 rounded-sm border border-[#E4DCCE] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#8C8275] uppercase block mb-1">
                      TRY IT &middot; BEGIN HERE
                    </span>
                    <h3 className="font-display text-4xl text-[#1C1916] font-normal">Open</h3>
                    <p className="font-sans text-[11px] text-[#8C8275] mt-1">Experience Altheara before deciding anything</p>
                  </div>
                  
                  <div>
                    <span className="inline-block bg-[#EAE7DE] text-[#5A5248] font-sans text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                      YOUR FIRST 7 ECHOES ARE FREE
                    </span>
                  </div>

                  <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                    A quiet place to start the habit. Experience your first Echo and Reflection with no commitment.
                  </p>
                </div>

                <div className="mt-8 mb-6">
                  <button 
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const evt = new CustomEvent("open-begin-modal");
                        window.dispatchEvent(evt);
                      }
                    }}
                    className="w-full block text-center border border-[#1C1916]/30 text-[#1C1916] font-sans text-xs uppercase tracking-wider font-bold py-3 rounded-full hover:bg-stone/5 transition-colors cursor-pointer"
                  >
                    BEGIN &rarr;
                  </button>
                </div>

                <ul className="font-reading text-sm text-[#2C241D]/90 flex flex-col gap-3.5 border-t border-[#E4DCCE]/80 pt-6">
                  {[
                    "Daily State Check-In",
                    "The Daily Invitation",
                    "Echo & Personal Reflection",
                    "Private moment archive",
                    "Story preview"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#A68A56] font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Altheara (Visual Hero) */}
              <div className="bg-[#1C1916] text-[#FAF9F6] p-8 rounded-sm border border-transparent shadow-xl flex flex-col justify-between relative scale-100 md:scale-[1.03] z-10 hover:shadow-2xl transition-shadow">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#C9AE7C] uppercase block mb-1">
                      KEEP IT GROWING &middot; HERO
                    </span>
                    <h3 className="font-display text-4xl text-ivory font-normal">Altheara</h3>
                    <p className="font-sans text-[11px] text-linen/60 mt-1">Keep your story growing</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-ivory">$8</span>
                    <span className="font-sans text-xs text-linen/60">/ month</span>
                    <span className="font-sans text-[10px] text-wheat/80 font-medium ml-auto">Billed annually at $96</span>
                  </div>

                  <p className="font-reading text-sm text-linen/85 leading-relaxed font-light">
                    The small moments keep accumulating. Altheara connects them into something you can return to.
                  </p>
                </div>

                <div className="mt-8 mb-6">
                  <button 
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const evt = new CustomEvent("open-begin-modal");
                        window.dispatchEvent(evt);
                      }
                    }}
                    className="w-full block text-center bg-[#FAF9F6] text-[#1C1916] font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-full hover:bg-ivory transition-colors shadow-sm cursor-pointer"
                  >
                    KEEP MY STORY GROWING &rarr;
                  </button>
                </div>

                <div className="flex flex-col gap-4 border-t border-linen/10 pt-6">
                  <ul className="font-reading text-sm text-linen/90 flex flex-col gap-3.5">
                    {[
                      "Everything in Open",
                      "Unlimited Echoes & Reflections",
                      "Altheara Lens (patterns across seasons)",
                      "Story Formation & Chapter connections",
                      "Complete Timeline & Archive",
                      "Annual Digital Volume & growing Library"
                    ].map((feat, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-wheat font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Printed Volume */}
              <div className="bg-[#FAF9F6] p-8 rounded-sm border border-[#E4DCCE] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#8C8275] uppercase block mb-1">
                      HOLD WHAT IT BECAME
                    </span>
                    <h3 className="font-display text-4xl text-[#1C1916] font-normal">Printed Volume</h3>
                    <p className="font-sans text-[11px] text-[#8C8275] mt-1">A physical keepsake of your year</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-[#1C1916]">$45</span>
                    <span className="font-sans text-xs text-[#8C8275]">/ volume</span>
                    <span className="font-sans text-[10px] text-[#A68A56] font-medium ml-auto">Ordered on demand</span>
                  </div>

                  <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                    Turn a completed year in Altheara into a physical Volume made to keep.
                  </p>
                </div>

                <div className="mt-8 mb-6">
                  <a 
                    href="#artifact" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("runway-13")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-center border border-[#1C1916]/30 text-[#1C1916] font-sans text-xs uppercase tracking-wider font-bold py-3 rounded-full hover:bg-stone/5 transition-colors"
                  >
                    EXPLORE THE VOLUME &rarr;
                  </a>
                </div>

                <ul className="font-reading text-sm text-[#2C241D]/90 flex flex-col gap-3.5 border-t border-[#E4DCCE]/80 pt-6">
                  {[
                    "Linen-bound hardcover keepsake",
                    "Custom spine embossing with year & name",
                    "Editorial layout on archival paper",
                    "Your year's complete stories & reflections",
                    "Made to join your physical Library"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#A68A56] font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* 5. Time & Value Accumulation Progression (Pass 15) */}
          <div className="flex flex-col gap-10 border-t border-[#E4DCCE] pt-14 sm:pt-18 max-w-4xl mx-auto w-full text-center">
            
            {/* 4-Step Time Progression */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-start">
              {/* Step 1 */}
              <div className="flex flex-col gap-1.5 p-5 rounded-sm bg-[#F0ECE1]/50 border border-[#E4DCCE]/80">
                <span className="font-sans text-[11px] tracking-[0.25em] text-[#8C8275] font-bold uppercase">
                  TODAY
                </span>
                <p className="font-reading text-base sm:text-lg text-[#2C241D] font-normal">
                  One Echo.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-1.5 p-5 rounded-sm bg-[#F0ECE1]/50 border border-[#E4DCCE]/80">
                <span className="font-sans text-[11px] tracking-[0.25em] text-[#8C8275] font-bold uppercase">
                  MONTHS
                </span>
                <p className="font-reading text-base sm:text-lg text-[#2C241D] font-normal">
                  A Story begins forming.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-1.5 p-5 rounded-sm bg-[#F0ECE1]/50 border border-[#E4DCCE]/80">
                <span className="font-sans text-[11px] tracking-[0.25em] text-[#8C8275] font-bold uppercase">
                  ONE YEAR
                </span>
                <p className="font-reading text-base sm:text-lg text-[#2C241D] font-normal">
                  Your first Volume.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col gap-1.5 p-5 rounded-sm bg-[#FAF8F3] border border-[#C9AE7C]/40 shadow-sm">
                <span className="font-sans text-[11px] tracking-[0.25em] text-[#A68A56] font-bold uppercase">
                  YEARS
                </span>
                <p className="font-reading text-base sm:text-lg text-[#1C1916] font-normal">
                  A Library of your life.
                </p>
              </div>
            </div>

            {/* Time / Value Truth */}
            <div className="max-w-xl mx-auto pt-2">
              <p className="font-reading text-lg sm:text-xl text-[#5A5248] leading-relaxed font-light">
                The value isn&apos;t what Altheara holds today.<br />
                <span className="text-[#1C1916] font-normal italic">It&apos;s what will be here because you started today.</span>
              </p>
            </div>
          </div>

          {/* 6. Secondary Non-Account Conversion (Point 8) */}
          <div className="flex flex-col items-center text-center gap-4 border-t border-[#E4DCCE] pt-14 max-w-md mx-auto w-full">
            <span className="font-sans text-[10px] tracking-[0.25em] text-[#8C8275] font-bold uppercase">
              NOT READY TO BEGIN?
            </span>
            <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
              Receive one thoughtful Invitation from Altheara each week.
            </p>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert("You are subscribed to weekly Altheara Invitations."); 
              }}
              className="flex flex-col sm:flex-row gap-2 w-full mt-1"
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="px-4 py-3 rounded-sm bg-white border border-[#E4DCCE] font-reading text-xs text-[#1C1916] placeholder-[#8C8275] focus:outline-none focus:border-[#C9AE7C] flex-1 font-light"
              />
              <button 
                type="submit" 
                className="bg-[#3D352E] text-[#FAF9F6] font-sans text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-3 rounded-sm hover:bg-[#1C1916] transition-colors cursor-pointer"
              >
                SEND ME INVITATIONS &rarr;
              </button>
            </form>
          </div>

          {/* 7. Final CTA Lockup (Pass 16) */}
          <div className="flex flex-col items-center text-center gap-5 border-t border-[#E4DCCE] pt-16 sm:pt-20 pb-4 max-w-2xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl text-[#1C1916] font-normal leading-tight tracking-tight">
              YOUR LIFE IS ALREADY HAPPENING.
            </h1>
            
            <p className="font-reading text-xl sm:text-2xl text-[#8C8275] font-light">
              Give it somewhere to live.
            </p>

            <div className="flex mt-3">
              <button 
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const evt = new CustomEvent("open-begin-modal");
                    window.dispatchEvent(evt);
                  }
                }}
                className="bg-[#1C1916] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.25em] font-bold px-9 py-4 rounded-sm hover:bg-[#2C2824] transition-all duration-300 shadow-md cursor-pointer"
              >
                BEGIN YOUR STORY &rarr;
              </button>
            </div>

            <span className="font-reading text-xs sm:text-sm italic text-[#8C8275] mt-1 font-light">
              It starts with one moment.
            </span>
          </div>

        </div>
      </section>

      {/* ==================================================
          STANDARD FOOTER LINKS BLOCK (Charcoal)
          ================================================== */}
      <footer className="w-full bg-[#12110f] text-linen/60 border-t border-stone/15 py-12 md:py-20 px-8 sm:px-16 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col">
            <span className="font-sans text-sm tracking-[0.3em] text-ivory font-bold">
              ALTHEARA
            </span>
            <span className="font-reading text-[10px] text-wheat italic mt-1">
              A place for your life.
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-stone font-bold mb-1">
                Journey
              </span>
              <a href="#experience" className="font-sans text-[11px] hover:text-ivory transition-colors">Experience</a>
              <a href="#grows" className="font-sans text-[11px] hover:text-ivory transition-colors">How It Grows</a>
              <a href="#artifact" className="font-sans text-[11px] hover:text-ivory transition-colors">The Artifact</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-stone font-bold mb-1">
                Company
              </span>
              <a href="#about" className="font-sans text-[11px] hover:text-ivory transition-colors">Why Altheara</a>
              <a href="#pricing" className="font-sans text-[11px] hover:text-ivory transition-colors">Pricing</a>
              <a href="#signin" className="font-sans text-[11px] hover:text-ivory transition-colors">Sign In</a>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-stone font-bold mb-1">
                Legal
              </span>
              <a href="#privacy" className="font-sans text-[11px] hover:text-ivory transition-colors">Privacy Policy</a>
              <a href="#terms" className="font-sans text-[11px] hover:text-ivory transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto h-px bg-stone/10 my-10" />

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-sans uppercase tracking-[0.15em] text-stone">
          <span>&copy; {new Date().getFullYear()} Altheara. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </footer>

    </div>
  );
}
