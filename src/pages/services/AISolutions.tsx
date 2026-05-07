import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Stethoscope, Scale, ShoppingCart, Briefcase, Wrench, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    name: "Healthcare & Wellness",
    tagline: "Automate patient care coordination while maintaining the human touch",
    useCases: [
      {
        title: "Automated Appointment Management",
        problem: "Staff spend 10-15 hours/week on phone scheduling, confirmations, and reminders",
        solution: "AI system handles booking requests via phone, email, and web forms. Checks availability in real-time, sends confirmations, and delivers automated reminders 24/48 hours before appointments.",
        implementation: [
          "Integrate with existing calendar system (Google Calendar, Acuity, etc.)",
          "Train AI on your scheduling rules (appointment types, durations, provider availability)",
          "Set up multi-channel communication (SMS, email, voicemail transcription)",
          "Configure reminder sequences with customizable timing"
        ],
        outcome: "15+ hours saved weekly, 40% reduction in no-shows, instant booking confirmation"
      },
      {
        title: "Patient Intake & Form Processing",
        problem: "Manual data entry from patient forms creates bottlenecks and errors",
        solution: "AI extracts information from intake forms (digital or scanned), validates data, and populates your EMR/practice management system automatically.",
        implementation: [
          "Connect AI to form submissions and document uploads",
          "Configure field mapping to your EMR system",
          "Set up validation rules for required fields and data types",
          "Create review dashboard for edge cases"
        ],
        outcome: "90% faster intake processing, near-zero data entry errors, staff focuses on patient care"
      },
      {
        title: "Prescription & Follow-up Reminders",
        problem: "Patients miss medication refills and follow-up appointments",
        solution: "AI monitors prescription schedules and appointment history, sending personalized reminders via patient's preferred channel.",
        implementation: [
          "Integrate with pharmacy/prescription tracking system",
          "Configure reminder schedules based on prescription duration",
          "Set up multi-channel delivery (SMS, email, patient portal)",
          "Track response rates and adjust timing for better compliance"
        ],
        outcome: "35% improvement in medication adherence, better patient outcomes, increased follow-up bookings"
      }
    ]
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    name: "Real Estate",
    tagline: "Convert more leads with instant, intelligent responses",
    useCases: [
      {
        title: "Lead Qualification & Routing",
        problem: "Every minute of delay reduces lead conversion by 10%. Agents can't respond to all inquiries instantly.",
        solution: "AI engages new leads within 60 seconds via text/email, asks qualifying questions (budget, timeline, location preferences), and routes hot leads to the right agent with full context.",
        implementation: [
          "Connect to lead sources (website forms, Zillow, Realtor.ca, etc.)",
          "Configure qualification questions and scoring logic",
          "Set up CRM integration for automatic lead enrichment",
          "Create agent routing rules based on territory/specialty"
        ],
        outcome: "80% faster response time, 3x higher lead-to-showing conversion, zero leads lost after-hours"
      },
      {
        title: "Property Matching & Recommendations",
        problem: "Manually searching MLS for each client's criteria is time-consuming and inconsistent",
        solution: "AI analyzes client preferences and search history, automatically sends personalized property recommendations as new listings hit the market.",
        implementation: [
          "Integrate with MLS/IDX feed",
          "Build client preference profiles from intake forms and interactions",
          "Configure matching algorithms (location, price, features, schools, etc.)",
          "Set up automated email/SMS campaigns with matched properties"
        ],
        outcome: "Clients see relevant properties within minutes of listing, agents spend time showing instead of searching"
      },
      {
        title: "Transaction Document Processing",
        problem: "Real estate deals involve 20-50 documents requiring review, data extraction, and filing",
        solution: "AI extracts key details from contracts, disclosures, and inspection reports, populates transaction management system, and flags missing items or discrepancies.",
        implementation: [
          "Connect to transaction management platform (Dotloop, SkySlope, etc.)",
          "Train AI on common document types and required fields",
          "Set up validation rules for contract terms",
          "Create alert system for missing signatures or documents"
        ],
        outcome: "70% faster transaction processing, fewer errors, compliance peace of mind"
      }
    ]
  },
  {
    icon: <Scale className="w-8 h-8" />,
    name: "Legal Services",
    tagline: "Deliver faster client service while reducing billable hour waste",
    useCases: [
      {
        title: "Client Intake & Conflict Checking",
        problem: "Initial consultations require 30-60 minutes of manual data gathering and conflict searches",
        solution: "AI-powered intake forms collect comprehensive client information, automatically run conflict checks against your database, and generate preliminary case summaries for attorney review.",
        implementation: [
          "Build intelligent intake forms that adapt based on case type",
          "Connect to practice management system for conflict checking",
          "Set up automated background research on parties and entities",
          "Generate pre-consultation memo with key facts and potential issues"
        ],
        outcome: "Consultations focus on strategy instead of data collection, 50% faster onboarding, better conflict detection"
      },
      {
        title: "Contract Analysis & Review",
        problem: "Junior associates spend billable hours on routine contract review",
        solution: "AI analyzes contracts against your standard templates and clause library, flags deviations, risks, and missing provisions. Generates redline suggestions and risk summary.",
        implementation: [
          "Upload your standard contract templates and clause library",
          "Train AI on your firm's preferred terms and risk tolerance",
          "Configure review checklists by contract type",
          "Set up version comparison and redlining tools"
        ],
        outcome: "3-5x faster first-pass review, consistent quality, associates focus on complex negotiation"
      },
      {
        title: "Legal Research Automation",
        problem: "Research tasks consume 15-20 billable hours per case",
        solution: "AI conducts preliminary case law research, analyzes relevant precedents, and generates research memos with cited sources organized by issue.",
        implementation: [
          "Integrate with legal research databases (Westlaw, LexisNexis, CanLII)",
          "Configure search parameters and jurisdiction preferences",
          "Set up citation validation and relevance ranking",
          "Generate structured research memos with source links"
        ],
        outcome: "Research completed in hours instead of days, more comprehensive coverage, lower client costs"
      }
    ]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    name: "E-commerce & Retail",
    tagline: "Scale customer experience without scaling headcount",
    useCases: [
      {
        title: "Intelligent Customer Support",
        problem: "Support tickets take 24-48 hours to resolve, cart abandonment increases with slow responses",
        solution: "AI handles 70-80% of customer inquiries (order status, returns, product questions) instantly. Complex issues escalated to human agents with full context.",
        implementation: [
          "Connect to e-commerce platform (Shopify, WooCommerce, etc.)",
          "Train AI on product catalog, policies, and common questions",
          "Set up escalation triggers for complex/sensitive issues",
          "Integrate with help desk system for seamless handoff"
        ],
        outcome: "Average response time under 60 seconds, 75% reduction in support tickets, higher customer satisfaction"
      },
      {
        title: "Abandoned Cart Recovery",
        problem: "70% of carts are abandoned, standard email recovery converts only 8-10%",
        solution: "AI analyzes abandonment reason (price hesitation, shipping cost, distraction), sends personalized recovery sequence via email/SMS with targeted incentives.",
        implementation: [
          "Set up cart tracking and abandonment triggers",
          "Configure behavior-based segmentation (high-value vs. price-sensitive)",
          "Create dynamic messaging templates with personalized product recommendations",
          "Test discount strategies and timing optimization"
        ],
        outcome: "30-40% cart recovery rate, 15-20% revenue increase from recovered sales"
      },
      {
        title: "Inventory & Reorder Automation",
        problem: "Manual inventory tracking leads to stockouts and overstock situations",
        solution: "AI monitors inventory levels, sales velocity, and seasonal trends. Automatically generates purchase orders when stock reaches optimal reorder point.",
        implementation: [
          "Integrate with inventory management system",
          "Configure reorder points based on lead time and sales velocity",
          "Set up supplier connection for automated PO submission",
          "Create alerts for unusual demand spikes or supply delays"
        ],
        outcome: "95% reduction in stockouts, 30% lower carrying costs, improved cash flow"
      }
    ]
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    name: "Professional Services",
    tagline: "Accounting, consulting, and advisory firms — bill more, admin less",
    useCases: [
      {
        title: "Client Onboarding & Document Collection",
        problem: "Getting tax documents, financials, and engagement letters from clients takes weeks of follow-up",
        solution: "AI sends personalized onboarding sequences, tracks document submission, sends reminders for missing items, and organizes files in your practice management system.",
        implementation: [
          "Create client portal with secure document upload",
          "Configure automated request sequences by service type",
          "Set up document validation (file type, completeness checks)",
          "Integrate with practice management software for auto-filing"
        ],
        outcome: "50% faster onboarding, 90% reduction in follow-up emails, complete files before work begins"
      },
      {
        title: "Invoice Processing & Reconciliation",
        problem: "Accountants spend 5-10 hours/week on manual data entry from client invoices and receipts",
        solution: "AI extracts data from invoices, receipts, and bank statements. Categorizes transactions, flags anomalies, and updates accounting software automatically.",
        implementation: [
          "Connect to email, document management, and bank feeds",
          "Train AI on chart of accounts and categorization rules",
          "Set up OCR for receipt and invoice scanning",
          "Configure reconciliation workflows and exception handling"
        ],
        outcome: "85% reduction in data entry time, faster month-end close, more time for advisory work"
      },
      {
        title: "Report Generation & Delivery",
        problem: "Creating monthly financial reports and client dashboards is repetitive and error-prone",
        solution: "AI pulls data from accounting systems, generates formatted reports (P&L, balance sheet, KPI dashboards), and delivers to clients automatically on schedule.",
        implementation: [
          "Connect to accounting software (QuickBooks, Xero, Sage)",
          "Build report templates with your branding and formatting",
          "Configure automated data refresh and calculation logic",
          "Set up scheduled delivery via email or client portal"
        ],
        outcome: "Reports delivered within 24 hours of month-end, consistent formatting, happier clients"
      }
    ]
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    name: "Home Services",
    tagline: "HVAC, plumbing, electrical — never miss a call, always close the job",
    useCases: [
      {
        title: "Missed Call & Lead Capture",
        problem: "Field technicians can't answer calls during jobs. 30-40% of calls go to voicemail and never convert.",
        solution: "AI detects missed calls, immediately sends personalized text with booking link or callback request. Transcribes voicemails and creates service tickets automatically.",
        implementation: [
          "Connect to business phone system",
          "Set up missed call triggers and SMS automation",
          "Configure voicemail transcription and ticket creation",
          "Integrate with scheduling software for direct booking"
        ],
        outcome: "Zero lost leads, 60% of missed calls book appointments via text, faster response = higher close rate"
      },
      {
        title: "Automated Quote Generation",
        problem: "Writing estimates takes 30-60 minutes per job, delays reduce close rate",
        solution: "AI uses service history, parts pricing, and labor rates to generate accurate quotes instantly. Sends professional PDF via email with payment link.",
        implementation: [
          "Build pricing database with parts and labor rates",
          "Create quote templates by job type (install, repair, maintenance)",
          "Configure dynamic pricing rules (complexity, urgency, customer history)",
          "Set up automated follow-up sequence for quote acceptance"
        ],
        outcome: "Quotes delivered in under 5 minutes, 35% higher acceptance rate, faster cash collection"
      },
      {
        title: "Service Reminders & Maintenance Plans",
        problem: "Customers forget annual maintenance, reducing recurring revenue",
        solution: "AI tracks service history and sends automated reminders for seasonal maintenance (furnace before winter, A/C before summer, etc.) with easy booking.",
        implementation: [
          "Import service history from CRM/field service software",
          "Configure reminder schedules by equipment type and season",
          "Set up multi-touch campaigns (email, SMS, phone)",
          "Create maintenance plan enrollment automation"
        ],
        outcome: "40% increase in maintenance plan bookings, predictable recurring revenue, better customer retention"
      }
    ]
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    name: "Hospitality",
    tagline: "Hotels, vacation rentals, restaurants — elevate guest experience",
    useCases: [
      {
        title: "Guest Communication & Concierge",
        problem: "Guests ask repetitive questions (Wi-Fi password, checkout time, local recommendations) via multiple channels",
        solution: "AI chatbot handles common inquiries 24/7 via SMS, web chat, and messaging apps. Provides instant answers and escalates complex requests to staff.",
        implementation: [
          "Deploy chatbot on website and integrate with SMS",
          "Train on property details, policies, amenities, local attractions",
          "Set up multilingual support for international guests",
          "Configure escalation to staff for special requests"
        ],
        outcome: "Instant guest support 24/7, staff focuses on high-touch service, better reviews"
      },
      {
        title: "Review Management & Response",
        problem: "Online reviews on Google, TripAdvisor, Yelp require timely responses to maintain reputation",
        solution: "AI monitors review platforms, drafts personalized responses to positive and negative reviews, and alerts management to urgent issues requiring human touch.",
        implementation: [
          "Connect to review platforms via APIs",
          "Train AI on your brand voice and response guidelines",
          "Set up approval workflows for negative/sensitive reviews",
          "Configure sentiment analysis and alert thresholds"
        ],
        outcome: "100% review response rate, faster resolution of guest concerns, improved online reputation"
      },
      {
        title: "Booking Confirmation & Pre-Arrival",
        problem: "Manual confirmation emails and pre-arrival information create administrative burden",
        solution: "AI sends personalized booking confirmations, pre-arrival instructions (parking, check-in process, room preferences), and upsell opportunities (late checkout, upgrades).",
        implementation: [
          "Integrate with property management system (PMS)",
          "Create dynamic email templates based on booking details",
          "Set up pre-arrival sequence (confirmation → 7 days before → 1 day before)",
          "Configure upsell offers based on guest history and availability"
        ],
        outcome: "Seamless guest experience from booking to arrival, 20-30% upsell acceptance, reduced front desk workload"
      }
    ]
  }
];

const AISolutions = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions by Industry | Healthcare, Real Estate, Legal & More | Neural Solutions</title>
        <meta
          name="description"
          content="Industry-specific AI automation solutions for healthcare, real estate, legal, e-commerce, professional services, and home services. Real use cases with proven results."
        />
        <meta
          name="keywords"
          content="AI automation healthcare, AI real estate automation, legal AI automation, e-commerce automation, professional services AI, home services automation"
        />
        <link rel="canonical" href="https://www.neuralsolutions.cloud/services/ai-solutions" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-background">
        <div className="container max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <Link to="/services" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Services
              </Link>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-foreground">
                AI Solutions by Industry
              </h1>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Industry-specific automation built for your unique challenges and workflows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container max-w-6xl">
          <div className="space-y-32">
            {industries.map((industry, idx) => (
              <ScrollReveal key={industry.name} delay={idx * 100}>
                <div className="space-y-12">
                  {/* Industry Header */}
                  <div className="flex items-start gap-6 pb-8 border-b border-border">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-foreground text-background flex items-center justify-center shrink-0">
                      {industry.icon}
                    </div>
                    <div>
                      <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-3">
                        {industry.name}
                      </h2>
                      <p className="font-sans text-xl text-muted-foreground leading-relaxed">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-12">
                    {industry.useCases.map((useCase, ucIdx) => (
                      <div key={ucIdx} className="bg-secondary/30 rounded-[1.25rem] p-8 md:p-10 border border-border">
                        <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {useCase.title}
                        </h3>

                        {/* Problem */}
                        <div className="mb-6">
                          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                            The Challenge
                          </span>
                          <p className="font-sans text-base text-foreground leading-relaxed">
                            {useCase.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8">
                          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                            Our Approach
                          </span>
                          <p className="font-sans text-base text-foreground leading-relaxed">
                            {useCase.solution}
                          </p>
                        </div>

                        {/* Implementation */}
                        <div className="mb-8 bg-background rounded-[1.25rem] p-6 border border-border">
                          <span className="font-sans text-xs uppercase tracking-wider text-foreground font-bold block mb-4">
                            Implementation Process
                          </span>
                          <ol className="space-y-3">
                            {useCase.implementation.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex gap-3">
                                <span className="font-sans text-sm font-bold text-muted-foreground shrink-0">
                                  {stepIdx + 1}.
                                </span>
                                <span className="font-sans text-sm text-foreground leading-relaxed">
                                  {step}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Outcome */}
                        <div className="bg-foreground text-background rounded-[1.25rem] p-6">
                          <span className="font-sans text-xs uppercase tracking-wider opacity-70 block mb-2">
                            Results You Can Expect
                          </span>
                          <p className="font-sans text-base font-medium leading-relaxed">
                            {useCase.outcome}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-8">
              <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight">
                Ready to Transform Your Industry?
              </h2>
              <p className="font-sans text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Every business has unique challenges. Book a free consultation to get a custom automation strategy tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/book-audit">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background text-background rounded-md font-sans text-sm uppercase tracking-wider font-medium hover:bg-background hover:text-foreground transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AISolutions;
