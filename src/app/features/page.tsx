'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function DarkButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="pressable btn-shine group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-brand-dark text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2"
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
    </button>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="sticky top-0 z-50 bg-brand-surface/95 backdrop-blur">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-accent/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand-accent/25">
                <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5 text-brand-accent" aria-hidden="true">
                  <circle cx="7" cy="7" r="2.1" fill="currentColor" />
                  <circle cx="17" cy="7" r="2.1" fill="currentColor" opacity="0.55" />
                  <circle cx="7" cy="17" r="2.1" fill="currentColor" opacity="0.55" />
                  <circle cx="17" cy="17" r="2.1" fill="currentColor" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-ink">NewCard</span>
            </Link>

            <div className="hidden items-center gap-8 text-sm md:flex">
              <Link
                className="relative pb-1 font-medium text-brand-muted transition-colors duration-300 hover:text-brand-ink"
                href="/"
              >
                Home
              </Link>
              <Link
                className="relative pb-1 font-medium text-brand-muted transition-colors duration-300 hover:text-brand-ink"
                href="/about"
              >
                About Us
              </Link>
              <span className="relative pb-1 font-semibold text-brand-ink">
                Features
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-brand-accent" />
              </span>
              <Link
                className="relative pb-1 font-medium text-brand-muted transition-colors duration-300 hover:text-brand-ink"
                href="/#plans"
              >
                Plans
              </Link>
              <Link
                className="relative pb-1 font-medium text-brand-muted transition-colors duration-300 hover:text-brand-ink"
                href="/#support"
              >
                Support
              </Link>
            </div>

          </div>
        </Container>
      </div>

      <main>
        <section className="py-10 sm:py-12">
          <Container>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2.25rem] bg-black/5"
            >
              <div className="grid items-stretch gap-0 lg:grid-cols-2">
                <div className="px-8 py-10 sm:px-10 sm:py-12">
                  <div className="font-display text-5xl font-medium tracking-tight text-brand-ink sm:text-6xl">
                    <div className="text-brand-ink/70">More</div>
                    <div>Features</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]"
                >
                  <div className="absolute inset-0 flex items-end justify-end px-8 pt-10 sm:px-10">
                    <div className="relative h-full w-full max-w-[580px]">
                      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-brand-accent/20 via-brand-accent/10 to-brand-soft" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-black/15" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="mt-8 overflow-hidden rounded-[1.75rem] border border-black/10 bg-brand-surface shadow-soft"
            >
              <div className="bg-black px-8 py-10 text-white sm:px-10">
                <div className="font-display text-balance text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                  We are <span className="text-brand-accent">innovation</span>, we are <span className="text-brand-accent">connection</span>.
                </div>
              </div>

              <div className="relative bg-brand-surface">
                <div className="relative h-[240px] overflow-hidden bg-black/10 sm:h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/30" />
                  <div className="absolute inset-0">
                    <div className="h-full w-full bg-gradient-to-br from-brand-accent/20 via-brand-accent/10 to-brand-soft" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="text-6xl font-medium tracking-tight text-white/90 sm:text-7xl lg:text-8xl">
                      Connect smart
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute right-3 top-[160px] hidden -translate-y-1/2 flex-col gap-2 lg:flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                </div>

                <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-4">
                  <div className="rounded-[1.25rem] bg-black/5 p-6">
                    <div className="text-base font-semibold tracking-tight text-brand-ink">Innovation</div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      Cutting-edge technology for modern networking.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] bg-black/5 p-6">
                    <div className="text-base font-semibold tracking-tight text-brand-ink">Simplicity</div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      Intuitive design that anyone can use instantly.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] bg-black/5 p-6">
                    <div className="text-base font-semibold tracking-tight text-brand-ink">Trust</div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      Secure, reliable, and always available.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] bg-black/5 p-6">
                    <div className="text-base font-semibold tracking-tight text-brand-ink">Growth</div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      Tools that help your business expand.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-center text-5xl font-semibold tracking-tight text-brand-ink sm:text-6xl">Features</h2>

              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                  className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-ink to-black px-6 py-10 text-white shadow-lift sm:px-10"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-90" style={{ background: 'radial-gradient(900px 300px at 20% 20%, rgba(63, 143, 86,0.18), rgba(63, 143, 86,0) 60%)' }} />

                  <div className="relative">
                    <h3 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                      Powerful Digital Business
                      <br />
                      Card Solutions
                    </h3>
                    <p className="mt-4 text-lg text-white/80">Transform your networking with cutting-edge features</p>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                        <div>
                          <div className="font-semibold text-white">QR Profile Generation</div>
                          <div className="text-sm text-white/70">Create dynamic QR codes that adapt to your brand</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                        <div>
                          <div className="font-semibold text-white">Instant Contact Sharing</div>
                          <div className="text-sm text-white/70">Share your profile with a single tap or scan</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                        <div>
                          <div className="font-semibold text-white">Lead Management</div>
                          <div className="text-sm text-white/70">Collect and organize contacts efficiently</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                  className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-brand-surface p-8 shadow-lift"
                >
                  <h3 className="text-balance text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                    Advanced Analytics
                    <br />
                    & Insights
                  </h3>
                  <p className="mt-4 text-lg text-brand-muted">Track performance and optimize your networking strategy</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-brand-soft p-4">
                      <div className="text-2xl font-bold text-brand-accent">2.5K+</div>
                      <div className="text-sm text-brand-muted">Profile Views</div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-brand-soft p-4">
                      <div className="text-2xl font-bold text-brand-accent">180+</div>
                      <div className="text-sm text-brand-muted">New Contacts</div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-brand-soft p-4">
                      <div className="text-2xl font-bold text-brand-accent">89%</div>
                      <div className="text-sm text-brand-muted">Engagement Rate</div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-brand-soft p-4">
                      <div className="text-2xl font-bold text-brand-accent">24/7</div>
                      <div className="text-sm text-brand-muted">Real-time Updates</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-soft to-brand-surface px-6 py-10 shadow-lift sm:px-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <h3 className="text-balance text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                      Wallet Integration
                    </h3>
                    <p className="mt-4 text-lg text-brand-muted">Native support for Apple Wallet and Google Wallet</p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                          <span className="text-xl">🍎</span>
                        </div>
                        <div>
                          <div className="font-semibold text-brand-ink">Apple Wallet Ready</div>
                          <div className="text-sm text-brand-muted">Save directly to Apple Wallet</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                          <span className="text-xl">🔷</span>
                        </div>
                        <div>
                          <div className="font-semibold text-brand-ink">Google Wallet Ready</div>
                          <div className="text-sm text-brand-muted">Add to Google Wallet instantly</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-balance text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                      Customization
                    </h3>
                    <p className="mt-4 text-lg text-brand-muted">Personalize every aspect of your digital card</p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                          <span className="text-xl">🎨</span>
                        </div>
                        <div>
                          <div className="font-semibold text-brand-ink">Brand Colors</div>
                          <div className="text-sm text-brand-muted">Match your brand identity</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                          <span className="text-xl">📸</span>
                        </div>
                        <div>
                          <div className="font-semibold text-brand-ink">Photo & Logo</div>
                          <div className="text-sm text-brand-muted">Add your professional images</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
