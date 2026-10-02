import SiteNav from "@/components/SiteNav";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { screenshots } from "@/components/screenshotData";
import { DownloadButton } from "@/components/DownloadButton";
import { download } from "@/lib/download";

type Item = {
  title: string;
  description: string;
};

type Group = {
  name: string;
  blurb: string;
  items: Item[];
};

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

const problems: Item[] = [
  {
    title: "Records on paper or in scattered sheets",
    description:
      "It is easy to lose a sale, get stock levels wrong, or discover a mistake at closing time — and nobody finds out until it is expensive."
  },
  {
    title: "Too many separate programs",
    description:
      "One place for bills, another for stock, another for expenses. The same customer gets typed in again and again, and the numbers never quite agree."
  },
  {
    title: "Nothing works when the internet drops",
    description:
      "Cloud systems freeze at the counter when the connection is slow or gone. You have customers waiting and you cannot even take the money."
  },
  {
    title: "You cannot see where the profit went",
    description:
      "Owners are usually guessing: which items actually make money, which customers still owe you, and whether this month was better than last."
  }
];

const advantages: Item[] = [
  {
    title: "Works with no internet",
    description:
      "Built for a real shop. Keep billing, stock and accounts even when the connection is down."
  },
  {
    title: "Quick at the counter",
    description:
      "Everything is stored on your own computer, so searching, billing and reporting happen instantly."
  },
  {
    title: "Your data stays yours",
    description:
      "Your business records live on your computer. Nothing is sent to anyone else's servers."
  }
];

const heroList = [
  "Bill customers in seconds at the counter",
  "Track stock by batch, with expiry warnings",
  "Record purchases and what you owe suppliers",
  "Customer history, expenses and wallets in one place",
  "Reports that show your real profit"
];

const featureGroups: Group[] = [
  {
    name: "Sales & billing",
    blurb: "Everything you need to serve a customer and take the money.",
    items: [
      {
        title: "Counter billing that keeps up",
        description:
          "A fast entry screen where you find an item, set the quantity, and move on. Everything is driven by the keyboard."
      },
      {
        title: "Discounts your way",
        description:
          "Put a discount on a single item, or on the whole bill. Choose how you want to apply it."
      },
      {
        title: "Part payments",
        description:
          "Record what the customer paid today and what is still owed, and see the balance progress on the bill."
      },
      {
        title: "Credit limit warnings",
        description:
          "Set a limit for each customer. Before a sale pushes them over it, you get a warning and can decide what to do."
      },
      {
        title: "Print or save as PDF",
        description:
          "Print any bill straight from the app, or save it as a PDF, complete with the amount written in words."
      },
      {
        title: "Your invoice, your design",
        description:
          "Add your shop logo, choose the colours and font sizes, and see exactly how it will look before you save."
      }
    ]
  },
  {
    name: "Stock & expiry",
    blurb:
      "The part most shops get wrong — tracking what you have, and what is about to go out of date.",
    items: [
      {
        title: "A code for every product",
        description:
          "Give each item its own product code (called a BH number) so lookalike products can never be mixed up."
      },
      {
        title: "Batch tracking",
        description:
          "Track stock batch by batch instead of one vague total, so you always know exactly which stock you are selling."
      },
      {
        title: "Expiry dates that are enforced",
        description:
          "You cannot receive goods without an expiry date and a selling price. That stops bad stock getting in from the start."
      },
      {
        title: "Alerts before things expire",
        description:
          "Your dashboard shows what is about to expire and what has already expired, with the days remaining."
      },
      {
        title: "Expired stock stays out of the way",
        description:
          "Expired batches are kept out of your sales list so they cannot be sold by accident."
      },
      {
        title: "Returns and damaged goods",
        description:
          "Record customer returns and damaged stock with a reason, so loss stops being invisible."
      },
      {
        title: "Adjust stock any time",
        description:
          "Correct stock in or out whenever you need, batch by batch, with the earliest expiry used first."
      }
    ]
  },
  {
    name: "Suppliers & purchases",
    blurb: "Buy well and always know what you owe.",
    items: [
      {
        title: "Purchase orders",
        description:
          "Write an order, record the delivery date, and receive all of it or only part of it."
      },
      {
        title: "Late deliveries flagged",
        description:
          "Orders that have passed their expected date are marked so you can chase them."
      },
      {
        title: "Supplier balances and owing",
        description:
          "See the total you owe each supplier, split into what is due now and what is 30, 60 or 90 days late."
      },
      {
        title: "Pay a supplier once",
        description:
          "Make a single payment and let it settle against that supplier's open orders for you."
      },
      {
        title: "Supplier statements",
        description:
          "Send any supplier a clear statement of everything bought and paid, as a PDF."
      }
    ]
  },
  {
    name: "Customers & sales team",
    blurb: "Know your customers and who sells for you.",
    items: [
      {
        title: "The whole customer on one screen",
        description:
          "Their bills, their payments, their balance, and every note you have made about them."
      },
      {
        title: "Reminders to call people",
        description:
          "Set a follow-up date and see who you have not contacted, including the ones that have become overdue."
      },
      {
        title: "Salesmen and commission",
        description:
          "Give each salesman a commission rate and see their sales performance as a report."
      },
      {
        title: "Customer balances & statements",
        description:
          "See who owes you and how long they have owed it, then send a statement as PDF or open it in Excel."
      }
    ]
  },
  {
    name: "Money, wallets & expenses",
    blurb: "Know exactly what came in and what went out.",
    items: [
      {
        title: "Separate wallets",
        description:
          "Keep cash, bank and other payment methods apart, each with its own balance."
      },
      {
        title: "A daily book of the whole shop",
        description:
          "One list that brings together sales, expenses, purchases and wallet movements for any date range."
      },
      {
        title: "Expenses that need approving",
        description:
          "Record expenses and approve or reject them, so nothing is quietly paid out."
      },
      {
        title: "Mistakes you can undo",
        description:
          "A wrong wallet entry can be voided with a reason instead of being deleted, and can be reversed later."
      }
    ]
  },
  {
    name: "Reports",
    blurb: "Answer the questions an owner actually asks.",
    items: [
      {
        title: "Profit and loss",
        description:
          "Revenue, what the goods cost you, gross profit, expenses, net profit and margin — over any period."
      },
      {
        title: "Products that are slowing down",
        description:
          "See which items are selling less than before, and what that is costing you in revenue."
      },
      {
        title: "Customers who have gone quiet",
        description:
          "Find customers who have stopped buying and see how much business you are at risk of losing."
      },
      {
        title: "Who still owes you",
        description:
          "A clear list of outstanding balances, filterable by customer and by how overdue they are."
      },
      {
        title: "Discounts and salesmen",
        description:
          "See how much discount was given, by product, customer or bill, and how each salesman performed."
      },
      {
        title: "Save it or open it in Excel",
        description:
          "Save any report as PDF, or export it as a spreadsheet you can open in Excel."
      }
    ]
  },
  {
    name: "Multiple currencies",
    blurb: "Trade in more than one currency without mixing it up.",
    items: [
      {
        title: "Bill in any currency",
        description:
          "Sell in whichever currency the customer pays in — even mix currencies on a single bill."
      },
      {
        title: "Every wallet keeps its own",
        description:
          "Wallets, expenses and purchases each hold their own currency, so balances never get confused."
      },
      {
        title: "You set the rates",
        description:
          "Enter your own exchange rates, and your profit report converts the cost of goods into the currency you sold in."
      }
    ]
  },
  {
    name: "Safe, private & offline",
    blurb: "Your records stay on your computer, under your control.",
    items: [
      {
        title: "Nothing leaves your computer",
        description:
          "Your whole business is stored on your own machine. There is no account to create and no server to trust."
      },
      {
        title: "Automatic backups",
        description:
          "Set how often you want a backup and let the app do it, while keeping copies on your computer."
      },
      {
        title: "Copy to USB or your cloud folder",
        description:
          "Send a backup to a memory stick, or to a folder you already sync with Google Drive, Dropbox or OneDrive."
      },
      {
        title: "Bring a backup back",
        description:
          "If something goes wrong, restore from a backup on a stick, your synced folder, or anywhere on the computer."
      },
      {
        title: "Password to open the app",
        description:
          "The app asks for a password before it opens, and signs out automatically after a set time."
      },
      {
        title: "Optional screen lock",
        description:
          "Set a PIN so the screen locks itself when you walk away, and unlocks only with that PIN."
      },
      {
        title: "A record of every change",
        description:
          "Every change is recorded with who made it, when, and exactly what they changed — including each field on a bill."
      }
    ]
  }
];

const comparisonRows: [string, string, string, string][] = [
  ["Works with no internet", "Yes", "Partly", "No"],
  ["Needs an internet connection", "No", "No", "Yes"],
  ["Tracks stock and expiry dates", "Yes", "No", "Sometimes"],
  ["Customer history and balances", "Yes", "No", "Yes"],
  ["Real invoices, not just rows in a sheet", "Yes", "No", "Yes"],
  ["Your records stay on your PC", "Yes", "Yes", "No"],
  ["Says what you owe suppliers", "Yes", "No", "Yes"],
  ["Shows your real profit", "Yes", "No", "Yes"],
  ["Time to start using it", "Minutes", "Days", "Hours"]
];

const requirements = [
  { label: "Windows version", value: "Windows 10 or Windows 11 (64-bit)" },
  { label: "Free disk space", value: "About 250 MB, plus space for your records" },
  { label: "Memory", value: "4 GB RAM (8 GB or more recommended)" },
  { label: "Processor", value: "Any modern laptop or desktop from the last few years" },
  { label: "Internet", value: "Not needed. Not even for the first install." },
  { label: "Technical knowledge", value: "None. It installs like any normal program." },
  {
    label: "How you get it",
    value: "One standard installer (about 84 MB), or a portable version that runs without installing"
  }
];

const licencePoints = [
  {
    title: "The licence belongs to one computer",
    body: "It is tied to the specific computer you install it on, so your copy cannot be shared or resold."
  },
  {
    title: "It lasts a set number of months",
    body: "The licence shows its expiry date in Settings, and the app warns you before it runs out."
  },
  {
    title: "Renewing is simple",
    body: "You enter a new key in Settings. Your records are never affected when a licence is renewed."
  },
  {
    title: "Activation is offline",
    body: "Keys are entered directly into the app. Nothing is uploaded and no connection is required."
  }
];

const plans = [
  {
    name: "One shop",
    summary: "For a single business running on one computer.",
    price: "On request",
    includes: [
      "Every feature: sales, stock, purchases, ledgers, reports",
      "Batch and expiry tracking",
      "Multi-currency support",
      "Automatic backups and restore",
      "Loyalty to a fixed monthly or yearly licence"
    ]
  },
  {
    name: "Several shops",
    summary: "For businesses with more than one location or brand.",
    price: "On request",
    includes: [
      "Everything in One shop",
      "Each branch keeps completely separate records",
      "Switch between branches instantly",
      "Reports per branch or combined",
      "Loyalty to a fixed monthly or yearly licence"
    ]
  },
  {
    name: "Setting up your data",
    summary: "For shops moving across from paper or spreadsheets.",
    price: "On request",
    includes: [
      "Your product list and opening balances loaded in",
      "Customers imported from a spreadsheet",
      "A walkthrough for you and your staff",
      "Help after installation"
    ]
  }
];

const comparisonChecks = [
  "Every sale, payment, and balance kept together",
  "Batch and expiry dates tracked properly",
  "Automatic backups you can restore from",
  "A record of who changed what",
  "No internet connection required",
  "Clear profit and loss reporting"
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
      {children}
    </span>
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
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl"
          />

          <Container>
            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill>Works with no internet</Pill>
                  <Pill>Made for shops</Pill>
                  <Pill>Fast at the counter</Pill>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                  Run your shop faster — even without internet.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Business Manager keeps sales, stock, purchases, customers,
                  money and reports together in one program. It runs on your own
                  computer, so it never slows down and never stops working —
                  even when the connection does.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <DownloadButton />
                  <a href="#pricing" className="quiet-button">
                    Get pricing &amp; a demo
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {advantages.map((a) => (
                    <li
                      key={a.title}
                      className="surface p-4 hover:border-blue-300"
                    >
                      <div className="text-sm font-bold text-slate-900">
                        {a.title}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-600">
                        {a.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative float-animation lg:-mt-8">
                <div className="surface overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">
                      What you get
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      All in one
                    </span>
                  </div>

                  <ul className="divide-y divide-slate-100">
                    {heroList.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 px-6 py-3.5"
                      >
                        <span className="mt-0.5 shrink-0 text-emerald-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Built for the counter
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Your records are kept on this computer, so billing, stock
                      lookups and reports happen instantly — with no internet
                      connection needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PROBLEMS */}
        <section className="border-t border-slate-200 bg-white py-16">
          <Container>
            <SectionTitle
              eyebrow="The problem"
              title="What running a shop actually costs you"
              description="Most shops do not lose money from one big mistake. They lose it from a hundred small ones that nobody notices until month end."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-300 hover:bg-white"
                >
                  <h3 className="flex items-start gap-2.5 text-base font-bold text-slate-900">
                    <span className="mt-0.5 shrink-0 text-blue-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    </span>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SCREENSHOTS */}
        <section className="py-16" id="screenshots">
          <Container>
            <SectionTitle
              eyebrow="See it for yourself"
              title="A look inside Business Manager"
              description="Real screens from the program. Select any one to see it larger."
            />
            <div className="mt-10">
              <ScreenshotGallery screenshots={screenshots} />
            </div>
          </Container>
        </section>

        {/* FEATURES */}
        <section className="border-t border-slate-200 bg-white py-16" id="features">
          <Container>
            <SectionTitle
              eyebrow="Features"
              title="Everything your shop needs, in one place"
              description="No more jumping between separate programs. Each part of the business is covered — and they all use the same records."
            />

            <div className="mt-12 space-y-12">
              {featureGroups.map((group) => (
                <div key={group.name}>
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {group.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {group.blurb}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lift"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 shrink-0 text-blue-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              {item.title}
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* REQUIREMENTS */}
        <section className="py-16" id="requirements">
          <Container>
            <SectionTitle
              eyebrow="Requirements"
              title="Will it run on my computer?"
              description="If you can run Windows and a spreadsheet, it will run. There is no server, no internet and no technical setup."
            />

            <dl className="surface mx-auto mt-10 max-w-3xl divide-y divide-slate-200">
              {requirements.map((r) => (
                <div
                  key={r.label}
                  className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-6 sm:px-8"
                >
                  <dt className="text-sm font-bold text-slate-900">{r.label}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600 sm:col-span-2">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-relaxed text-slate-700">
              <strong className="font-bold text-slate-900">
                Not sure it will suit you?
              </strong>{" "}
              Send me a message about your shop and your stock, and I will tell
              you honestly whether it is worth the money before you buy
              anything.
            </p>
          </Container>
        </section>

        {/* COMPARISON */}
        <section className="border-t border-slate-200 bg-white py-16" id="comparison">
          <Container>
            <SectionTitle
              eyebrow="Comparison"
              title="How it compares to what you use now"
              description="The same shop, run three different ways. This is where the difference shows up in practice."
            />

            <div className="surface mt-10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <caption className="sr-only">
                    Comparing Business Manager with spreadsheets and cloud
                    systems
                  </caption>
                  <thead className="border-b border-slate-200 bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-bold text-slate-900">
                        What matters
                      </th>
                      <th scope="col" className="bg-blue-50 px-6 py-4 font-bold text-blue-900">
                        Business Manager
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-600">
                        Spreadsheets
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-600">
                        Cloud systems
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonRows.map(([feature, a, b, c]) => (
                      <tr key={feature} className="transition-colors hover:bg-slate-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-semibold text-slate-900"
                        >
                          {feature}
                        </th>
                        <td className="bg-blue-50/70 px-6 py-4 font-bold text-blue-900">
                          {a}
                        </td>
                        <td className="px-6 py-4 text-slate-600">{b}</td>
                        <td className="px-6 py-4 text-slate-600">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* LICENCE */}
        <section className="py-16">
          <Container>
            <div className="surface overflow-hidden">
              <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-start">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Your licence
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Simple, and no surprises
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    You install Business Manager on the computer where your shop
                    runs. The licence is tied to that computer and lasts a set
                    number of months. I would rather explain it here than have
                    you find it later.
                  </p>

                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="text-sm font-bold text-slate-900">
                      Straight answer about cost
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                      The licence is paid, not free — I will always tell you the
                      price before you commit to anything. You do not pay
                      anything else: no monthly hosting, no fee per bill, and no
                      charge for extra users.
                    </p>
                  </div>
                </div>

                <ul className="grid gap-4">
                  {licencePoints.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-blue-600">
                        <CheckIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {p.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* DOWNLOAD */}
        <section
          className="border-t border-slate-200 bg-white py-16"
          id="download"
        >
          <Container>
            <SectionTitle
              eyebrow="Download"
              title="Install it on your shop computer"
              description="One installer sets everything up. No extra software to buy, and no internet needed once it is installed."
            />

            <div className="surface mx-auto max-w-3xl p-6 sm:p-8">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-900">
                    Business Manager {download.version} for Windows
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {download.sizeMb} download &middot;{" "}
                    {download.requirements}
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      Works with no internet
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      Your data stays on your computer
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      Installs in a few minutes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      Uninstalls cleanly
                    </li>
                  </ul>
                </div>

                <DownloadButton className="w-full shrink-0 sm:w-auto" />
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                <p>
                  <span className="font-semibold text-slate-700">
                    After downloading:
                  </span>{" "}
                  Windows may show a blue &ldquo;Windows protected your PC&rdquo;
                  message because this is a small program that is not signed with
                  a paid code-signing certificate. Click{" "}
                  <span className="font-semibold">More info</span>, then{" "}
                  <span className="font-semibold">Run anyway</span>. This is
                  normal for programs sold directly rather than through the
                  Microsoft Store.
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-slate-700">
                    Checking the download:
                  </span>{" "}
                  If you want to confirm the file arrived complete, its SHA-256
                  fingerprint is{" "}
                  <code className="break-all rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-700">
                    {download.sha256}
                  </code>
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* PRICING */}
        <section className="border-t border-slate-200 bg-white py-16" id="pricing">
          <Container>
            <SectionTitle
              eyebrow="Pricing"
              title="Tell me your shop, and I will quote you properly"
              description="There is no price list, because a fair quote depends on how many branches you run and how much data needs moving across. You will get one clear figure, not a subscription."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 ${
                    i === 0
                      ? "border-blue-300 bg-blue-50 shadow-lift"
                      : "border-slate-200 bg-slate-50/60 hover:border-blue-300 hover:bg-white hover:shadow-lift"
                  }`}
                >
                  {i === 0 ? (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-blue-700 px-2.5 py-1 text-xs font-bold text-white">
                      Most shops start here
                    </span>
                  ) : null}
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {plan.summary}
                  </p>
                  <p className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                    {plan.price}
                  </p>
                  <ul className="mt-5 grid gap-2.5">
                    {plan.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 shrink-0 text-emerald-600">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-700">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="brand-button mt-6 w-full">
                    Request a quote
                  </a>
                </div>
              ))}
            </div>

            <div className="surface mx-auto mt-8 max-w-3xl p-6">
              <h3 className="text-sm font-bold text-slate-900">
                Every option includes
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {comparisonChecks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-emerald-600">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-700">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* CONTACT */}
        <section className="py-16" id="contact">
          <Container>
            <div className="surface overflow-hidden">
              <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Contact
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Want to see it on your own data?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Tell me what you sell and roughly how many items you keep in
                    stock. I will show you the parts that matter for your shop,
                    give you a straight price, and answer any question before you
                    decide anything.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      className="brand-button"
                      href="mailto:abduljamil.afghan121@gmail.com?subject=Business%20Manager%20Demo%20Request"
                    >
                      Email me
                    </a>
                    <a className="quiet-button" href="#pricing">
                      See pricing options
                    </a>
                  </div>

                  <p className="mt-4 text-sm text-slate-500">
                    I usually reply within 24 hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-sm font-bold text-slate-900">
                    How to reach me
                  </h3>

                  <ul className="mt-4 grid gap-3">
                    <li>
                      <a
                        href="mailto:abduljamil.afghan121@gmail.com"
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100"
                        >
                          <svg
                            className="h-5 w-5 text-blue-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-slate-900">
                            Email
                          </span>
                          <span className="block break-all text-xs text-slate-600">
                            abduljamil.afghan121@gmail.com
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="tel:+93706530071"
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100"
                        >
                          <svg
                            className="h-5 w-5 text-emerald-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-slate-900">
                            Phone &amp; WhatsApp sales
                          </span>
                          <span className="block text-xs text-slate-600">
                            +93 706 530 071
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://wa.me/93781756957"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100"
                        >
                          <svg
                            className="h-5 w-5 text-emerald-700"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-slate-900">
                            WhatsApp support
                          </span>
                          <span className="block text-xs text-slate-600">
                            +93 781 756 957
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                    <h4 className="text-sm font-bold text-slate-900">
                      When I am available
                    </h4>
                    <dl className="mt-2 grid gap-1 text-sm text-slate-600">
                      <div className="flex justify-between gap-4">
                        <dt>Monday to Thursday</dt>
                        <dd>9:00 AM &ndash; 6:00 PM</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Friday</dt>
                        <dd>Closed</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Saturday &amp; Sunday</dt>
                        <dd>9:00 AM &ndash; 6:00 PM</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} Business Manager. All rights reserved.
            </div>
            <div className="text-sm text-slate-500">
              Built for shops that need to keep working.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
