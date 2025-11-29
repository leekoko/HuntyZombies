
import { notFound } from 'next/navigation';
import { CheckCircle2, Clock, Zap } from 'lucide-react';
import codesData from '@/data/codes.json';
import Header from '@/components/Header';
import CodeCard from '@/components/CodeCard';
import ExpiredCodesTable from '@/components/ExpiredCodesTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Link from 'next/link';

type CodesPageProps = {
  params: {
    year: string;
    month: string;
  };
};

// Generate static pages for each month in the data
export async function generateStaticParams() {
  return codesData.map((data) => ({
    year: data.year,
    month: data.month,
  }));
}

// Generate dynamic metadata for each page
export async function generateMetadata({ params }: CodesPageProps) {
  const { year, month } = params;
  const data = codesData.find((d) => d.year === year && d.month === month);

  if (!data) {
    return {
      title: 'Codes Not Found',
    };
  }

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const title = `Hunty Zombies Codes ${capitalizedMonth} ${year} - (Working & Expired)`;
  const description = `Find all working and expired Hunty Zombies codes for ${capitalizedMonth} ${year}. Get free rewards like coins, spins, and traits.`;

  return {
    title,
    description,
  };
}

export default function CodesPage({ params }: CodesPageProps) {
  const { year, month } = params;
  const data = codesData.find((d) => d.year === year && d.month === month);

  if (!data) {
    notFound();
  }

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const isLatest = codesData[0].month === month && codesData[0].year === year;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Simplified Hero Section */}
      <section className="section-padding relative overflow-hidden bg-muted/20">
        <div className="container text-center relative z-10">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Hunty Zombies Codes Archive</span>
            </div>
            
            <h1 className="mb-6 text-balance">
              Hunty Zombies Codes for
              <span className="text-gradient block mt-2">
                {capitalizedMonth} {year}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
              Below are the active and expired codes from {capitalizedMonth} {year}. 
              For the latest codes, please check our homepage.
            </p>
            
            <Link href="/" className="btn-primary group">
              View Latest Codes
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Active Codes Section */}
        {data.activeCodes.length > 0 && (
          <section className="section-padding-sm" id="active-codes">
            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm font-medium text-green-300">Active Codes for {capitalizedMonth}</span>
                </div>
                <h2 className="mb-6">Working Codes</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  These codes were active during {capitalizedMonth} {year}. Redeem them quickly if they still work!
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.activeCodes.map((item, index) => (
                  <div 
                    key={item.code} 
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CodeCard
                      code={item.code}
                      reward={item.reward}
                      addedDate={item.addedDate}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expired Codes Section */}
        {data.expiredCodes.length > 0 && (
          <section className="section-padding-sm bg-muted/10" id="expired-codes">
            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
                  <Clock className="h-4 w-4 text-red-400 mr-2" />
                  <span className="text-sm font-medium text-red-300">Expired Codes for {capitalizedMonth}</span>
                </div>
                <h2 className="mb-6">Expired Codes</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  These codes from {capitalizedMonth} {year} have expired and likely no longer work.
                </p>
              </div>
              
              <div className="card-premium">
                <ExpiredCodesTable codes={data.expiredCodes} />
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="section-padding-sm">
          <div className="container">
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
