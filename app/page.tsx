import Link from "next/link";
import ScreenshotGallery from "@/components/ScreenshotGallery";

type Feature = {
  title: string;
  description: string;
};

const coreFeatures: Feature[] = [
  {
    title: "Sales & invoices",
    description:
      "Create invoices fast, track payments, and export professional PDF invoices."
  },
  {
    title: "Inventory & products",
    description:
      "Structured product catalog, accurate stock levels, low-stock alerts, and movement tracking."
  },
  {
    title: "Purchases & suppliers",
    description:
      "Purchase workflow, supplier balances, supplier ledger, and payment tracking."
  },
  {
    title: "Customer ledger & accounting",
    description:
      "Customer balances, transaction history, and exports (PDF/CSV) for accounting."
  },
  {
    title: "Expenses & cash management",
    description:
      "Track expenses, categorize spending, and manage wallets (cash, bank, digital)."
  },
  {
    title: "Reports & analytics",
    description:
      "Sales performance, inventory insights, and financial trends — with export options."
  }
];

const screenshots = [
  { src: "/screenshots/screen-01.png", alt: "Business Manager screenshot 1" },
  { src: "/screenshots/screen-02.png", alt: "Business Manager screenshot 2" },
  { src: "/screenshots/screen-03.png", alt: "Business Manager screenshot 3" },
  { src: "/screenshots/screen-04.png", alt: "Business Manager screenshot 4" },
  { src: "/screenshots/screen-05.png", alt: "Business Manager screenshot 5" },
  { src: "/screenshots/screen-06.png", alt: "Business Manager screenshot 6" },
  { src: "/screenshots/screen-07.png", alt: "Business Manager screenshot 7" },
  { src: "/screenshots/screen-08.png", alt: "Business Manager screenshot 8" },
  { src: "/screenshots/screen-09.png", alt: "Business Manager screenshot 9" }
];

const problems = [
  {
    title: "Manual records",
    description:
      "Notebooks and spreadsheets lead to lost sales, inventory mistakes, and accounting errors."
  },
  {
    title: "Too many tools",
    description:
      "Separate apps for invoices, inventory, expenses, and accounting create duplication and confusion."
  },
  {
    title: "Internet dependency",
    description:
      "Cloud systems slow down or stop when the connection is unstable."
  },
  {
    title: "No financial visibility",
    description:
      "Owners struggle to see profit, best-selling products, and who owes money."
  }
];

const advantages = [
  {
    title: "Works fully offline",
    description:
      "Built for real shops. Keep working even when the internet is unavailable."
  },
  {
    title: "Fast daily operations",
    description:
      "Local database + desktop workflow for quick billing, search, and reporting."
  },
  {
    title: "Privacy by default",
    description:
      "Your business data stays on your computer — not on third‑party servers."
  }
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
      {children}
    </span>
  );
}

function Card({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/20 bg-white/30 p-6 shadow-sm backdrop-blur-lg transition-all duration-300 hover:border-white/40 hover:bg-white/40 hover:shadow-xl hover:-translate-y-1">
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/90">
        {description}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center fade-in">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-white/20 glass-morphism shadow-lg fade-in">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg pulse-glow" />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">Business Manager</div>
                <div className="text-xs text-white/80">
                  Offline Retail & Business System
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a className="hover:text-white transition-colors duration-200" href="#features">
                Features
              </a>
              <a className="hover:text-white transition-colors duration-200" href="#architecture">
                Architecture
              </a>
              <a className="hover:text-white transition-colors duration-200" href="#comparison">
                Comparison
              </a>
              <a className="hover:text-white transition-colors duration-200" href="#contact">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5"
              >
                Request demo
              </a>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden pt-16 sm:pt-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill>100% offline</Pill>
                  <Pill>SQLite (local database)</Pill>
                  <Pill>Retail-ready speed</Pill>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl fade-in">
                  Run your shop faster — even without internet.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg fade-in">
                  Business Manager is a complete offline desktop system for sales,
                  inventory, purchases, accounting, and reports — designed for
                  reliable daily operations in retail and small businesses.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get pricing & demo
                  </a>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 glass-morphism px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/40 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Explore features
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {advantages.map((a, index) => (
                    <div
                      key={a.title}
                      className="rounded-2xl border border-white/20 glass-morphism p-4 hover-lift fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-sm font-semibold text-white">{a.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-white/80">
                        {a.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative float-animation">
                <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-purple-500/25 via-transparent to-indigo-500/20 blur-2xl" />
                <div className="relative rounded-[28px] border border-white/20 glass-morphism p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-800">
                      What you get
                    </div>
                    <div className="text-xs text-gray-600">All-in-one</div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      "Fast invoicing with payment tracking",
                      "Accurate inventory with low-stock alerts",
                      "Supplier purchases + supplier ledger",
                      "Customer ledger, expenses, wallets",
                      "Reports for sales, stock, and finance"
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/20 glass-morphism p-4 hover-lift transition-all duration-300"
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
                        <div className="text-sm text-gray-700">{item}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/20 glass-morphism p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                      Built for offline reliability
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      Local SQLite storage means speed, privacy, and uninterrupted
                      work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/20 py-16" id="screenshots">
          <Container>
            <SectionTitle
              eyebrow="Product"
              title="See Business Manager in action"
              description="Real screenshots from the desktop system. Click any image to view larger."
            />

            <div className="mt-10">
              <ScreenshotGallery screenshots={screenshots} />
            </div>
          </Container>
        </section>

        <section className="mt-16 border-t border-white/20 py-16" id="problems">
          <Container>
            <SectionTitle
              eyebrow="Problems"
              title="The daily issues Business Manager removes"
              description="If your shop is using notebooks, spreadsheets, or disconnected tools, these pain points are costing time and money."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {problems.map((p) => (
                <Card key={p.title} title={p.title} description={p.description} />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-white/20 py-16" id="features">
          <Container>
            <SectionTitle
              eyebrow="Features"
              title="Everything you need in one system"
              description="Sales, inventory, purchasing, accounting, and analytics — designed to be fast and simple for real business operations."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((f) => (
                <Card key={f.title} title={f.title} description={f.description} />
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/20 glass-morphism p-8">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-white">Multi-branch support</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/80">
                    Manage multiple companies or branches with separated databases
                    for clean data isolation.
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Secure access</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/80">
                    Passwords are stored securely using bcrypt hashing, with
                    controlled system access.
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Exports & backups</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/80">
                    Export invoices and ledgers to PDF/CSV, and keep simple local
                    backups for safety.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/20 py-16" id="architecture">
          <Container>
            <SectionTitle
              eyebrow="Architecture"
              title="Modern desktop architecture (offline-first)"
              description="Built for reliability: a clear separation between system operations, UI rendering, and secure access."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <Card
                title="Main process"
                description="Controls the app lifecycle, database, file system operations, and secure system access."
              />
              <Card
                title="Renderer process"
                description="Provides the user interface: dashboard, products, sales, inventory views, and reporting screens."
              />
              <Card
                title="Preload layer & IPC"
                description="Secure communication bridge between UI and system resources for a safer desktop app."
              />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/20 glass-morphism p-8">
                <div className="text-sm font-semibold text-white">Local database (SQLite)</div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Your data stays on the computer. SQLite runs locally (SQL.js),
                  providing extremely fast queries, offline operation, and easy
                  portability.
                </p>
              </div>
              <div className="rounded-3xl border border-white/20 glass-morphism p-8">
                <div className="text-sm font-semibold text-white">Performance & reliability</div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Designed for busy counters and daily workflows — quick loading,
                  stable operations, and no internet dependency.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/20 py-16" id="comparison">
          <Container>
            <SectionTitle
              eyebrow="Comparison"
              title="How Business Manager compares"
              description="Offline reliability and integration matter most for day-to-day operations."
            />

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/20 glass-morphism">
              <div className="overflow-x-auto">
                <table className="min-w-[760px] w-full text-left text-sm">
                  <thead className="bg-white/20 text-white">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Feature</th>
                      <th className="px-6 py-4 font-semibold">Business Manager</th>
                      <th className="px-6 py-4 font-semibold">Spreadsheets</th>
                      <th className="px-6 py-4 font-semibold">Cloud systems</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/20 text-white/80">
                    {[
                      ["Works offline", "Yes", "Limited", "No"],
                      ["Integrated inventory", "Yes", "No", "Yes"],
                      ["Customer ledger", "Yes", "No", "Yes"],
                      ["Invoice system", "Yes", "No", "Yes"],
                      ["Data privacy", "Local", "Local", "Cloud"],
                      ["Internet required", "No", "No", "Yes"]
                    ].map(([feature, a, b, c]) => (
                      <tr key={feature} className="hover:bg-white/10 transition-colors duration-200">
                        <td className="px-6 py-4 font-medium text-white">
                          {feature}
                        </td>
                        <td className="px-6 py-4">{a}</td>
                        <td className="px-6 py-4">{b}</td>
                        <td className="px-6 py-4">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/20 py-16" id="contact">
          <Container>
            <div className="rounded-3xl border border-white/20 glass-morphism p-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Contact
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Want a demo for your shop?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    Tell me what type of business you run and how many branches
                    you have. I'll share pricing, a walkthrough, and the best
                    setup for your workflow.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5"
                      href="mailto:abduljamil.afghan121@gmail.com?subject=Business%20Manager%20Demo%20Request"
                    >
                      Email for demo
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 glass-morphism px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/40 hover:shadow-xl hover:-translate-y-0.5"
                      href="#features"
                    >
                      Review features
                    </a>
                  </div>

                  <div className="mt-4 text-xs text-white/60">
                    We'll respond within 24 hours.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 glass-morphism p-6">
                  <div className="text-sm font-semibold text-gray-800">Contact Options</div>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:abduljamil.afghan121@gmail.com"
                      className="flex items-center gap-3 rounded-2xl border border-white/20 glass-morphism p-4 hover-lift transition-all duration-300 hover:border-white/40 hover:bg-white/40"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Email</div>
                        <div className="text-xs text-gray-600">abduljamil.afghan121@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="tel:+0093706530071"
                      className="flex items-center gap-3 rounded-2xl border border-white/20 glass-morphism p-4 hover-lift transition-all duration-300 hover:border-white/40 hover:bg-white/40"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Phone</div>
                        <div className="text-xs text-gray-600">+0093 706 530 071</div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/0093781756957"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/20 glass-morphism p-4 hover-lift transition-all duration-300 hover:border-white/40 hover:bg-white/40"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">WhatsApp</div>
                        <div className="text-xs text-gray-600">+0093 781 756 957</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/20 glass-morphism p-4">
                    <div className="text-sm font-semibold text-gray-800">Business Hours</div>
                    <div className="mt-2 text-sm leading-relaxed text-gray-600">
                      Monday - Thursday: 9:00 AM - 6:00 PM<br />
                      Friday: Closed<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <footer className="border-t border-white/20 py-10">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-white/80">
                © {new Date().getFullYear()} Business Manager. All rights
                reserved.
              </div>
              <div className="text-sm text-white/80">
                Built for offline-first business operations.
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
