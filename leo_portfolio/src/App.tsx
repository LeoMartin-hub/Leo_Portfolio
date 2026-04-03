import { useState } from "react";

// ============================================================
// Reusable Composable Component (Adapted from ProductCard)
// ============================================================

function ExperienceCard({
  role,
  entity,
  duration,
  description,
  status,
}: {
  role: string;
  entity: string;
  duration: string;
  description: string;
  // 1. UPDATED: Added all possible statuses to the type definition
  status: "Current" | "Pending" | "On Hold" | "Completed"; 
}) {
  // 2. UPDATED: Added a color scheme for "Pending"
  const badgeColors = {
    Current: "bg-emerald-100 text-emerald-800",
    Pending: "bg-blue-100 text-blue-800",       
    "On Hold": "bg-amber-100 text-amber-800",
    Completed: "bg-red-100 text-red-800",       
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm p-6
                 border border-gray-100
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-200
                 flex flex-col h-full"
    >
      <h3 className="text-lg font-bold text-gray-900">{role}</h3>
      <p className="text-sm font-medium text-red-600 mt-1">{entity}</p>
      <p className="text-xs text-gray-500 mt-1 mb-3">{duration}</p>
      
      <p className="text-sm text-gray-700 flex-grow">{description}</p>
      
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${badgeColors[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

// ============================================================
// Section wrapper
// ============================================================

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mb-6">{subtitle}</p>}
      {children}
    </section>
  );
}

// ============================================================
// App — Portfolio
// ============================================================

export default function App() {
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* -------------------------------------------------------- */}
      {/* Navigation (Flex layout)                                 */}
      {/* -------------------------------------------------------- */}
      <nav className="sticky top-0 z-10 flex items-center justify-between p-4 px-6 md:px-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <span className="text-xl font-bold text-gray-900 tracking-tight">Leo Martin</span>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-red-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-red-600 transition-colors">Skills</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-10">
        {/* -------------------------------------------------------- */}
        {/* Hero Section                                             */}
        {/* -------------------------------------------------------- */}
        <header className="py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Hi, I'm Leo. <br className="hidden md:block" />
            <span className="text-red-600">Computer Science Student.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            I am a junior studying Computer Science at the University of Nebraska-Lincoln (UNL), double minoring in Digital Humanities and Math. I have a strong passion for building robust applications using .NET, C#, and modern web technologies.
          </p>
        </header>

        {/* -------------------------------------------------------- */}
        {/* Experience & Projects (Responsive Grid + Hover Lift)     */}
        {/* -------------------------------------------------------- */}
        <div id="experience">
          <Section 
            title="Experience & Ventures" 
            subtitle="My professional background and business management experience."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ExperienceCard 
                role="Technology Group Intern" 
                entity="Nelnet" 
                duration="Summer 2026" 
                description="Upcoming Summer internship role, demonstrating readiness for enterprise-level development environments and a strong foundation in C# and .NET frameworks." 
                status="Pending" 
              />
              <ExperienceCard 
                role="Founder & Owner" 
                entity="MAXTON ATM LLC" 
                duration="Feb 2026 - Current" 
                description="100% owner. Managing all business operations, compliance, and document filings." 
                status="Current" 
              />
              <ExperienceCard 
                role="Bank Teller" 
                entity="West Gate Bank" 
                duration="June 2025 – Current" 
                description="Managing daily financial transactions while developing strong customer service, precision, and operational compliance skills." 
                status="Current" 
              />
            </div>
          </Section>
        </div>

        {/* -------------------------------------------------------- */}
        {/* Skills & Technologies (Visual Utilities & Badges)          */}
        {/* -------------------------------------------------------- */}
        <div id="skills">
          <Section title="Technical Capabilities">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Focus</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors cursor-default">C#</span>
                  <span className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors cursor-default">.NET Framework</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Web Development & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Using complementary emerald accents here */}
                  <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-sm font-medium">React</span>
                  <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-sm font-medium">HTML & CSS</span>
                  <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-sm font-medium">MS SQL Server</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Academic Fundamentals</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm">Lambda Calculus</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm">Statistics</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm">Technical Writing</span>
                </div>
              </div>

            </div>
          </Section>
        </div>

        {/* -------------------------------------------------------- */}
        {/* Contact (Interactive States)                             */}
        {/* -------------------------------------------------------- */}
        <Section title="Let's Connect">
          <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for new opportunities</h3>
            <p className="text-red-100 mb-8 max-w-lg mx-auto">
              I'm always open to discussing software engineering roles, particularly those working within a C#/.NET environment. Let's build something great together.
            </p>
            <button
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-bold shadow-md
                         hover:bg-red-50 hover:shadow-lg hover:-translate-y-0.5
                         active:bg-gray-100 active:translate-y-0
                         transition-all duration-200"
            >
              {contactHovered ? "Send me an email" : "Get in Touch"}
            </button>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t border-gray-200 mt-12">
        <p>© {new Date().getFullYear()} Leo Martin. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}