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

          {/* ==================================================
              SECTION 1 — PRICING INTRODUCTION
              ================================================== */}
          <div id="pricing" className="flex flex-col gap-6 text-center max-w-2xl mx-auto border-t border-[#E4DCCE] pt-16 sm:pt-20">
            <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
              CHOOSE HOW YOUR STORY GROWS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-[1.12] tracking-tight">
              START WITH A MOMENT.<br />BUILD SOMETHING THAT LASTS.
            </h2>
            <p className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light">
              Begin with seven moments for free. Continue with Altheara as your story grows. Or choose Legacy to preserve even more for the people who come after you.
            </p>
          </div>

          {/* ==================================================
              SECTION 2 — THREE MEMBERSHIP CARDS
              ================================================== */}
          <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto px-2 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
              
              {/* CARD 1 — OPEN ($0) */}
              <div className="bg-[#FAF9F6] p-7 sm:p-8 rounded-sm border border-[#E4DCCE] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative">
                <div className="flex flex-col">
                  {/* Eyebrow & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                      EXPERIENCE IT
                    </span>
                  </div>
                  
                  {/* Title & Price */}
                  <h3 className="font-display text-3xl sm:text-4xl text-[#1C1916] font-normal mt-3">
                    OPEN
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-display text-4xl text-[#1C1916] font-normal">$0</span>
                  </div>

                  <p className="font-sans text-[11px] text-[#8C8275] mt-1">
                    Experience Altheara before deciding anything.
                  </p>

                  <div className="mt-3">
                    <span className="inline-block bg-[#EAE7DE] text-[#5A5248] font-sans text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
                      YOUR FIRST 7 MOMENTS ARE FREE
                    </span>
                  </div>

                  <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light mt-4">
                    Start small. Experience how a few ordinary moments begin becoming something worth keeping.
                  </p>

                  {/* CTA Block */}
                  <div className="mt-7 mb-6">
                    <button 
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-begin-modal"));
                        }
                      }}
                      className="w-full block text-center border border-[#1C1916]/30 text-[#1C1916] font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-full hover:bg-stone/5 transition-colors cursor-pointer"
                    >
                      BEGIN &rarr;
                    </button>
                    <span className="block text-center font-sans text-[10px] text-[#8C8275] tracking-wide mt-2">
                      No subscription required.
                    </span>
                  </div>

                  {/* Feature Group */}
                  <div className="border-t border-[#E4DCCE]/80 pt-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#8C8275] uppercase block mb-3">
                      INCLUDED &middot; AVAILABLE NOW
                    </span>
                    <ul className="font-reading text-sm text-[#2C241D] flex flex-col gap-3 font-light">
                      {[
                        "7 Daily Invitations",
                        "7 Echoes",
                        "7 Personal Reflections",
                        "Private Moment Archive",
                        "1 Story Preview"
                      ].map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#A68A56] font-bold shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E4DCCE]/60 font-reading text-xs text-[#8C8275] italic">
                  The core Altheara loop: Invitation &rarr; Echo &rarr; Reflection &rarr; Story Preview.
                </div>
              </div>

              {/* CARD 2 — ALTHEARA ($12.99 / MO) — PRIMARY ANCHOR */}
              <div className="bg-[#1C1916] text-[#FAF9F6] p-7 sm:p-8 rounded-sm border border-[#3D352E] shadow-xl flex flex-col justify-between relative lg:scale-[1.03] z-10 hover:shadow-2xl transition-all">
                <div className="flex flex-col">
                  {/* Eyebrow & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#C9AE7C] uppercase">
                      LIVE WITH IT
                    </span>
                    <span className="inline-block bg-[#C9AE7C]/20 border border-[#C9AE7C]/40 text-wheat font-sans text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full">
                      MOST CHOSEN
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="font-display text-3xl sm:text-4xl text-ivory font-normal mt-3">
                    ALTHEARA
                  </h3>

                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-display text-4xl text-ivory font-normal">$12.99</span>
                    <span className="font-sans text-xs text-linen/60">/ month</span>
                  </div>

                  <p className="font-sans text-[11px] text-linen/60 mt-1">
                    Keep your story growing.
                  </p>

                  <p className="font-reading text-sm text-linen/85 leading-relaxed font-light mt-4">
                    The more you leave here, the more Altheara can connect—turning individual moments into an evolving story of your life.
                  </p>

                  {/* CTA Block */}
                  <div className="mt-7 mb-6">
                    <button 
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-begin-modal"));
                        }
                      }}
                      className="w-full block text-center bg-[#FAF9F6] text-[#1C1916] font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-full hover:bg-ivory transition-colors shadow-sm cursor-pointer"
                    >
                      KEEP MY STORY GROWING &rarr;
                    </button>
                    <span className="block text-center font-sans text-[10px] text-linen/50 tracking-wide mt-2">
                      Cancel or export your archive at any time.
                    </span>
                  </div>

                  {/* Feature Group: AVAILABLE NOW */}
                  <div className="border-t border-linen/15 pt-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#C9AE7C] uppercase block mb-3">
                      AVAILABLE NOW
                    </span>
                    <ul className="font-reading text-sm text-linen/90 flex flex-col gap-2.5 font-light">
                      {[
                        "Everything in Open",
                        "Unlimited Daily Invitations",
                        "Unlimited Echoes",
                        "Unlimited Personal Reflections",
                        "Growing Story & Chapters",
                        "Complete Timeline & Archive",
                        "Digital Library"
                      ].map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-wheat font-bold shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Group: AS ALTHEARA GROWS */}
                  <div className="border-t border-linen/10 pt-5 mt-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-linen/60 uppercase">
                        AS ALTHEARA GROWS
                      </span>
                      <span className="font-sans text-[9px] tracking-wider text-[#C9AE7C]/80 uppercase bg-[#C9AE7C]/10 px-2 py-0.5 rounded-full">
                        Coming to Altheara
                      </span>
                    </div>
                    <ul className="font-reading text-sm text-linen/65 flex flex-col gap-2.5 font-light">
                      {[
                        "Annual Digital Volume included",
                        "Altheara Lens™",
                        "Volume Studio",
                        "Expanded story intelligence",
                        "New Altheara member features as released"
                      ].map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-linen/70">
                          <span className="text-linen/50 shrink-0">◌</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preferred Print Volume Callout */}
                <div className="mt-8 p-4 rounded-sm bg-white/5 border border-linen/15 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display text-lg text-wheat font-normal">10% OFF</span>
                    <span className="font-sans text-[10px] text-linen/70 uppercase tracking-wider">Future Printed Volume creation</span>
                  </div>
                  <span className="font-sans text-[9px] text-linen/40 uppercase tracking-widest">member pricing</span>
                </div>
              </div>

              {/* CARD 3 — LEGACY ($16.99 / MO) */}
              <div className="bg-[#FAF8F3] p-7 sm:p-8 rounded-sm border border-[#C9AE7C]/60 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative">
                <div className="flex flex-col">
                  {/* Eyebrow & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                      PRESERVE IT
                    </span>
                    <span className="inline-block bg-[#F0ECE1] border border-[#C9AE7C]/30 text-[#8C733E] font-sans text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full">
                      GENERATIONAL ARCHIVE
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="font-display text-3xl sm:text-4xl text-[#1C1916] font-normal mt-3">
                    LEGACY
                  </h3>

                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-display text-4xl text-[#1C1916] font-normal">$16.99</span>
                    <span className="font-sans text-xs text-[#8C8275]">/ month</span>
                  </div>

                  <p className="font-sans text-[11px] text-[#8C8275] mt-1">
                    Preserve more than the story.
                  </p>

                  <p className="font-reading text-sm text-[#4A4238] leading-relaxed font-light mt-4">
                    For those who want Altheara to become something future generations can not only read—but experience.
                  </p>

                  {/* CTA Block */}
                  <div className="mt-7 mb-6">
                    <button 
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-begin-modal"));
                        }
                      }}
                      className="w-full block text-center bg-[#2C241D] text-[#FAF9F6] font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-full hover:bg-[#1C1916] transition-colors shadow-sm cursor-pointer"
                    >
                      BUILD MY LEGACY &rarr;
                    </button>
                    <span className="block text-center font-sans text-[10px] text-[#8C8275] tracking-wide mt-2">
                      Includes complete Altheara membership.
                    </span>
                  </div>

                  {/* Subline */}
                  <div className="border-t border-[#E4DCCE]/80 pt-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#8C8275] uppercase block mb-1">
                      EVERYTHING IN ALTHEARA
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#A68A56] uppercase block mb-3 mt-2">
                      LEGACY BENEFITS &middot; AVAILABLE NOW
                    </span>
                    <ul className="font-reading text-sm text-[#2C241D] flex flex-col gap-2.5 font-light">
                      {[
                        "Full Altheara membership",
                        "Legacy Vault",
                        "Enhanced Digital Library",
                        "Full Volume Studio access",
                        "Priority access to new Legacy capabilities"
                      ].map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#A68A56] font-bold shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Group: AS LEGACY GROWS */}
                  <div className="border-t border-[#E4DCCE]/60 pt-5 mt-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#8C8275] uppercase">
                        AS LEGACY GROWS
                      </span>
                      <span className="font-sans text-[9px] tracking-wider text-[#A68A56] uppercase bg-[#A68A56]/10 px-2 py-0.5 rounded-full font-medium">
                        Coming to Legacy
                      </span>
                    </div>
                    <ul className="font-reading text-sm text-[#5A5248] flex flex-col gap-2.5 font-light">
                      {[
                        "Living Portrait™",
                        "Annual voice & presence capture",
                        "Volume-linked story narration",
                        "Family & heir access",
                        "Generational Library"
                      ].map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-[#736C64]">
                          <span className="text-[#8C8275] shrink-0">◌</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preferred Print Volume Callout */}
                <div className="mt-8 p-4 rounded-sm bg-[#F5EFE3] border border-[#C9AE7C]/40 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display text-lg text-[#A68A56] font-normal">25% OFF</span>
                    <span className="font-sans text-[10px] text-[#5A5248] uppercase tracking-wider">Future Printed Volume creation</span>
                  </div>
                  <span className="font-sans text-[9px] text-[#A68A56] uppercase tracking-widest font-medium">legacy pricing</span>
                </div>
              </div>

            </div>

            {/* Status Legend Key */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-sans text-[#736C64] uppercase tracking-wider pt-2 border-t border-[#E4DCCE]/50 max-w-2xl mx-auto">
              <span className="flex items-center gap-2">
                <span className="text-[#A68A56] font-bold text-sm">✓</span> Available Now
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#8C8275] font-normal text-base">◌</span> Coming as Altheara & Legacy Evolve
              </span>
            </div>
          </div>

          {/* ==================================================
              EDUCATIONAL BLOCKS: THE ALTHEARA LENS™ & LIVING PORTRAIT™
              ================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full pt-4">
            
            {/* 1. Altheara Lens Education */}
            <div className="p-8 sm:p-10 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                    THE ALTHEARA LENS™
                  </span>
                  <span className="font-sans text-[9px] tracking-wider uppercase text-[#A68A56] font-semibold bg-[#F0ECE1] px-2.5 py-0.5 rounded-full">
                    Coming to Altheara
                  </span>
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl text-[#1C1916] font-normal leading-tight">
                  YOUR MOMENTS SHOW YOU WHAT HAPPENED.<br />
                  <span className="text-[#A68A56]">YOUR LENS SHOWS YOU WHAT THEY MEAN TOGETHER.</span>
                </h3>
                
                <p className="font-reading text-sm sm:text-base text-[#4A4238] leading-relaxed font-light mt-4">
                  As more of your Echoes and Reflections accumulate, Altheara begins seeing across them—noticing recurring themes, patterns, seasons and changes that can be difficult to recognize while you&apos;re living them.
                </p>

                {/* Visual demonstration with 4 restrained examples */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#E4DCCE]/70">
                  {[
                    { theme: "FAMILY", insight: "appearing more often lately" },
                    { theme: "CHANGE", insight: "a recurring thread this season" },
                    { theme: "WORK", insight: "your relationship with it is shifting" },
                    { theme: "HOME", insight: "becoming a stronger theme" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-sm bg-[#FAF8F3] border border-[#E4DCCE]/80 flex flex-col gap-1">
                      <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#1C1916] uppercase">
                        {item.theme}
                      </span>
                      <span className="font-reading text-xs text-[#8C8275] italic font-light">
                        {item.insight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-reading text-xs sm:text-sm text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                The more of your story Altheara understands, the clearer the Lens becomes.
              </p>
            </div>

            {/* 2. Living Portrait Education */}
            <div className="p-8 sm:p-10 rounded-sm bg-[#FAF8F3] border border-[#C9AE7C]/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#A68A56] font-bold uppercase">
                    LIVING PORTRAIT™
                  </span>
                  <span className="font-sans text-[9px] tracking-wider uppercase text-[#8C733E] font-semibold bg-[#F0ECE1] px-2.5 py-0.5 rounded-full border border-[#C9AE7C]/30">
                    Coming to Legacy
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#1C1916] font-normal leading-tight">
                  A STORY CAN PRESERVE WHAT YOU LIVED.<br />
                  <span className="text-[#A68A56]">LIVING PORTRAIT IS DESIGNED TO PRESERVE MORE OF HOW YOU WERE.</span>
                </h3>

                <p className="font-reading text-sm sm:text-base text-[#4A4238] leading-relaxed font-light mt-4">
                  Each year, Living Portrait is designed to capture elements of your voice and presence alongside that year&apos;s story—creating a deeply personal way for the people you leave your Library to experience the person behind the words.
                </p>

                <div className="mt-6 p-5 rounded-sm bg-white border border-[#E4DCCE] flex flex-col gap-2">
                  <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                    FUTURE PRESENCE
                  </span>
                  <p className="font-reading text-sm sm:text-base text-[#1C1916] italic font-light leading-relaxed">
                    &ldquo;Imagine opening a Volume years from now and hearing its stories told in the voice connected to the life that lived them.&rdquo;
                  </p>
                </div>
              </div>

              <p className="font-reading text-xs sm:text-sm text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                Preserving presence and emotional truth across generations.
              </p>
            </div>

          </div>

          {/* ==================================================
              SECTION 3 — PHYSICAL VOLUME
              ================================================== */}
          <div className="flex flex-col gap-10 border-t border-[#E4DCCE] pt-16 sm:pt-20 max-w-6xl mx-auto w-full">
            <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                THE ARTIFACT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-[1.12] tracking-tight">
                YOUR YEAR.<br />MADE PHYSICAL.
              </h2>
              <p className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light mt-1">
                Your Digital Volume doesn&apos;t have to remain digital. When a year is complete, Altheara will give you the option to turn it into a beautifully produced physical Volume made to join the Library of your life.
              </p>
            </div>

            {/* Photographic Spread */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-2">
              <div className="relative rounded-sm overflow-hidden border border-[#E4DCCE] aspect-[4/3] group">
                <img 
                  src="/media_10.jpg" 
                  alt="Altheara Volume I linen book held overlooking a quiet sunset lake"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="font-sans text-xs tracking-wider text-linen/90 uppercase">
                    Linen-bound hardcover keepsake
                  </span>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden border border-[#E4DCCE] aspect-[4/3] group">
                <img 
                  src="/media_11.jpg" 
                  alt="Hands opening a linen Altheara book on a rustic table in a sunbeam, showing pages"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="font-sans text-xs tracking-wider text-linen/90 uppercase">
                    Archival acid-free paper &middot; Custom spine embossing
                  </span>
                </div>
              </div>
            </div>

            {/* Member Preferred Pricing Callout */}
            <div className="p-8 sm:p-10 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                  MEMBER-PREFERRED PRICING
                </span>
                <p className="font-display text-2xl sm:text-3xl text-[#1C1916] font-normal">
                  Reserved for those who live with the story.
                </p>
                <p className="font-reading text-sm text-[#736C64] font-light">
                  Physical Volumes are printed on demand at year-end.
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-4 shrink-0 w-full sm:w-auto">
                <div className="flex-1 sm:w-48 p-4 rounded-sm bg-[#FAF8F3] border border-[#E4DCCE] text-center">
                  <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-[#8C8275] uppercase block mb-1">
                    ALTHEARA MEMBERS
                  </span>
                  <span className="font-display text-xl sm:text-2xl text-[#1C1916] font-normal block">
                    10% PREFERRED
                  </span>
                  <span className="font-reading text-xs text-[#8C8275] italic">pricing on physical Volumes</span>
                </div>
                <div className="flex-1 sm:w-48 p-4 rounded-sm bg-[#FAF8F3] border border-[#C9AE7C]/60 text-center">
                  <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-[#A68A56] uppercase block mb-1">
                    LEGACY MEMBERS
                  </span>
                  <span className="font-display text-xl sm:text-2xl text-[#A68A56] font-normal block">
                    25% PREFERRED
                  </span>
                  <span className="font-reading text-xs text-[#8C8275] italic">pricing on physical Volumes</span>
                </div>
              </div>
            </div>

            <p className="font-sans text-[11px] text-[#8C8275] tracking-wide text-center -mt-4">
              Physical Volumes sold separately. Pricing available when ordering.
            </p>
          </div>

          {/* ==================================================
              SECTION 4 — VOLUME STUDIO
              ================================================== */}
          <div className="flex flex-col gap-10 border-t border-[#E4DCCE] pt-16 sm:pt-20 max-w-6xl mx-auto w-full">
            <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                  VOLUME STUDIO
                </span>
                <span className="font-sans text-[9px] tracking-wider uppercase text-[#A68A56] font-semibold bg-[#F0ECE1] px-2.5 py-0.5 rounded-full">
                  Coming to Altheara & Legacy
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-[1.12] tracking-tight">
                YOUR LIFE.<br />YOUR BOOK. YOUR WAY.
              </h2>
              <p className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light mt-1">
                Before a Volume becomes physical, make it unmistakably yours.
              </p>
            </div>

            {/* Customization Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {/* 1. COVER */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  01 &middot; COVER
                </span>
                <h3 className="font-display text-xl text-[#1C1916] font-normal">Tactile Binding</h3>
                <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                  Choose cover treatments, personal imagery, typography and title presentation.
                </p>
              </div>

              {/* 2. STORY */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  02 &middot; STORY
                </span>
                <h3 className="font-display text-xl text-[#1C1916] font-normal">Narrative Arc</h3>
                <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                  Choose how your story is shaped while preserving the truth of the moments you captured.
                </p>
              </div>

              {/* 3. CHAPTERS */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  03 &middot; CHAPTERS
                </span>
                <h3 className="font-display text-xl text-[#1C1916] font-normal">Personal Milestones</h3>
                <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                  Review, edit and personalize chapters before finalizing your Volume.
                </p>
              </div>

              {/* 4. MEMORIES */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  04 &middot; MEMORIES
                </span>
                <h3 className="font-display text-xl text-[#1C1916] font-normal">Visual Keepsakes</h3>
                <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                  Add meaningful photographs and imagery throughout the book.
                </p>
              </div>

              {/* 5. PREVIEW */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  05 &middot; PREVIEW
                </span>
                <h3 className="font-display text-xl text-[#1C1916] font-normal">Complete Proofing</h3>
                <p className="font-reading text-sm text-[#5A5248] leading-relaxed font-light">
                  Review the complete Volume before sending it to print.
                </p>
              </div>

              {/* Principle Card */}
              <div className="p-6 sm:p-7 rounded-sm bg-[#FAF8F3] border border-[#C9AE7C]/40 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#A68A56] uppercase block mb-2">
                    FOUNDATIONAL PRINCIPLE
                  </span>
                  <p className="font-reading text-sm text-[#2C241D] italic font-light leading-relaxed">
                    &ldquo;Changing writing style must never change the underlying facts of your life. Altheara can change how the story is told, never what happened.&rdquo;
                  </p>
                </div>
                <span className="font-sans text-[9px] tracking-wider text-[#8C8275] uppercase mt-4">
                  Preservation of truth
                </span>
              </div>
            </div>

            {/* Storytelling Voice Styles Exploration */}
            <div className="p-8 sm:p-10 rounded-sm bg-[#FAF8F3] border border-[#E4DCCE] shadow-xs flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                  06 &middot; VOICE & STORYTELLING STYLES
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#1C1916] font-normal">
                  Five Ways Your Truth Can Be Told
                </h3>
                <p className="font-reading text-sm sm:text-base text-[#5A5248] font-light">
                  Select the storytelling tone that matches how you want your year remembered:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-[#E4DCCE]">
                {[
                  { name: "AUTHENTIC", desc: "Closest to your natural voice." },
                  { name: "STORYTELLER", desc: "Warm, narrative and immersive." },
                  { name: "AUTOBIOGRAPHICAL", desc: "Polished and reflective." },
                  { name: "POETIC", desc: "Lyrical and atmospheric." },
                  { name: "WITH HUMOR", desc: "Preserves more of the wit and personality in your memories." }
                ].map((style, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-white border border-[#E4DCCE]/80 flex flex-col gap-2">
                    <span className="font-sans text-[11px] tracking-[0.2em] font-bold text-[#1C1916] uppercase">
                      {style.name}
                    </span>
                    <p className="font-reading text-xs text-[#5A5248] leading-relaxed font-light">
                      {style.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              SECTION 5 — ALTHEARA GROWS WITH YOU
              ================================================== */}
          <div className="flex flex-col gap-12 border-t border-[#E4DCCE] pt-16 sm:pt-20 max-w-6xl mx-auto w-full">
            <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#8C8275] font-bold uppercase">
                THE LONGER STORY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1916] font-normal leading-[1.12] tracking-tight">
                IT STARTS SIMPLE.<br />IT DOESN&apos;T STAY SIMPLE.
              </h2>
              <p className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light mt-1">
                What begins with one Echo becomes more meaningful with every year you live with it.
              </p>
            </div>

            {/* 4-Stage Progression */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* Stage 1 */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                    01 — TODAY
                  </span>
                  <h3 className="font-display text-2xl text-[#1C1916] font-normal">CAPTURE</h3>
                  <div className="font-reading text-sm text-[#2C241D] leading-relaxed font-normal flex flex-col gap-1">
                    <p>One moment.</p>
                    <p>One Echo.</p>
                    <p>One Reflection.</p>
                  </div>
                </div>
                <p className="font-reading text-xs text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                  It takes only a few minutes to begin.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-6 sm:p-7 rounded-sm bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#8C8275] uppercase">
                    02 — AS ALTHEARA LEARNS
                  </span>
                  <h3 className="font-display text-2xl text-[#1C1916] font-normal">UNDERSTAND</h3>
                  <div className="font-reading text-sm text-[#2C241D] leading-relaxed font-normal flex flex-col gap-1">
                    <p>Patterns emerge.</p>
                    <p>Your Lens develops.</p>
                    <p>Stories begin connecting.</p>
                  </div>
                </div>
                <p className="font-reading text-xs text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                  The more context Altheara has, the more it can help you see.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-6 sm:p-7 rounded-sm bg-[#FAF8F3] border border-[#E4DCCE] shadow-xs flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                    03 — AS YEARS ACCUMULATE
                  </span>
                  <h3 className="font-display text-2xl text-[#1C1916] font-normal">PRESERVE</h3>
                  <div className="font-reading text-sm text-[#2C241D] leading-relaxed font-normal flex flex-col gap-1">
                    <p>Stories become Chapters.</p>
                    <p>Chapters become Volumes.</p>
                    <p>Volumes become a Library.</p>
                  </div>
                </div>
                <p className="font-reading text-xs text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                  What once felt scattered begins to have a place.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="p-6 sm:p-7 rounded-sm bg-[#FAF8F3] border border-[#C9AE7C]/60 shadow-xs flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-[#A68A56] uppercase">
                    04 — OVER A LIFETIME
                  </span>
                  <h3 className="font-display text-2xl text-[#A68A56] font-normal">LEGACY</h3>
                  <div className="font-reading text-sm text-[#1C1916] leading-relaxed font-normal flex flex-col gap-1">
                    <p>Your words.</p>
                    <p>Your voice.</p>
                    <p>Your presence.</p>
                    <p className="text-[#A68A56] font-medium pt-1">A Library your family can return to.</p>
                  </div>
                </div>
                <p className="font-reading text-xs text-[#8C8275] italic font-light mt-6 pt-4 border-t border-[#E4DCCE]/60">
                  The accumulated story of a life.
                </p>
              </div>
            </div>

            {/* Core Thesis Statement */}
            <div className="p-10 sm:p-14 rounded-sm bg-white border border-[#E4DCCE] shadow-xs text-center max-w-4xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#8C8275] uppercase">
                  THE CORE THESIS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1C1916] font-normal leading-snug">
                  ALTHEARA BECOMES MORE VALUABLE FOR A SIMPLE REASON:<br />
                  <span className="text-[#A68A56]">IT KNOWS MORE OF THE STORY.</span>
                </h2>
              </div>

              <p className="font-reading text-base sm:text-lg text-[#5A5248] leading-relaxed font-light max-w-2xl mx-auto">
                Every Echo adds context. Every Reflection adds understanding. Every year adds another layer. What begins as a quiet place to leave today&apos;s moment can eventually become something no one could recreate later—the accumulated story of a life.
              </p>

              <div className="pt-4 border-t border-[#E4DCCE]/60">
                <p className="font-display text-lg sm:text-xl text-[#1C1916] italic font-normal">
                  Start with one moment. Let time do the rest.
                </p>
              </div>
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
