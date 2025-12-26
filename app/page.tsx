'use client';

import { CheckCircle2, Clock, Gift, Zap, Star, Trophy } from 'lucide-react';
import codesData, { codesArchive } from '@/data/codes';
import Header from '@/components/Header';
import CodeCard from '@/components/CodeCard';
import ExpiredCodesTable from '@/components/ExpiredCodesTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { activeCodes, expiredCodes } = codesData;
  const archiveCodes = codesArchive.slice(1);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Cinematic Hero Section with Background Image */}
      <section className="section-padding relative overflow-hidden">
        {/* Background image with subtle overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/img/bg.webp')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85"></div>
        </div>
        <div className="hero-container text-center relative z-10">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Latest Hunty Zombies Codes 2025</span>
            </div>
            
            <h1 className="mb-6 text-balance">
              Get Free Rewards with
              <span className="text-gradient block mt-2">
                Hunty Zombies Codes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp animate-delay-200">
              Unlock exclusive coins, weapon spins, and special traits in Roblox's most intense zombie survival game. 
              All codes tested and verified working.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-300">
              <a href="#active-codes" className="btn-primary group">
                <Star className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Active Codes
              </a>
              <a href="#how-to-redeem" className="btn-secondary">
                <Clock className="h-5 w-5 mr-2" />
                How to Redeem
              </a>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fadeInUp animate-delay-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{activeCodes.length}</div>
              <div className="text-muted-foreground">Active Codes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Updated Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Verified Working</div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Active Codes Section */}
        <section className="section-padding-sm" id="active-codes">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-sm font-medium text-green-300">Active & Working</span>
              </div>
              <h2 className="mb-6">Latest Hunty Zombies Codes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Below are all the latest working Hunty Zombies Codes for Roblox. These codes are tested and verified to work. 
                Redeem these Hunty Zombies Codes quickly before they expire to get free rewards including coins, spins, traits, and weapon upgrades!
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {activeCodes.map((item, index) => (
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

        {/* How to Redeem Codes Section */}
        <section className="section-padding-sm bg-muted/20" id="how-to-redeem">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-300">Step by Step</span>
              </div>
              <h2 className="mb-6">How to Redeem Hunty Zombies Codes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Follow these simple steps to redeem your Hunty Zombies Codes and claim your free rewards.
              </p>
            </div>
            
            <div className="card-premium max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 text-center">Quick Redemption Guide</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ol className="list-decimal list-inside space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <span>Launch Roblox and enter the <strong>Hunty Zombies</strong> game</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <span>Look for the <strong>Codes</strong> button on the right side of your screen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <span>Click the Codes button to open the redemption interface</span>
                  </li>
                </ol>
                <ol className="list-decimal list-inside space-y-4 text-lg" start={4}>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <span>Copy any Hunty Zombies Codes from our list and paste them (case-sensitive)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                    <span>Click the <strong>Confirm</strong> button to redeem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">6</span>
                    <span>Enjoy your free rewards!</span>
                  </li>
                </ol>
              </div>
              
              <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <div className="flex items-start">
                  <Trophy className="h-6 w-6 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">Pro Tips for Redeeming Hunty Zombies Codes</p>
                    <p className="text-amber-200 text-sm leading-relaxed">
                      Hunty Zombies Codes are case-sensitive and may expire at any time. 
                      Redeem codes as soon as possible and always copy them exactly as shown to avoid errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Info Section */}
        <section className="section-padding-sm" id="rewards-info">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Gift className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-300">Exclusive Rewards</span>
              </div>
              <h2 className="mb-6">What You Can Get with Hunty Zombies Codes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Redeem Hunty Zombies Codes to get amazing rewards including free coins, weapon spins, traits, and exclusive items. 
                Our codes are updated daily with new working codes and gift codes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-premium text-center group hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">$</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Coin Rewards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get substantial coin rewards from 15,000 to 150,000 coins to purchase weapons, upgrades, and survival essentials.
                </p>
              </div>
              
              <div className="card-premium text-center group hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 border border-secondary/30 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">⚔</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Weapon Spins</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lucky weapon spins give you chances to obtain rare and powerful weapons not available through regular gameplay.
                </p>
              </div>
              
              <div className="card-premium text-center group hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-muted/20 border border-muted-foreground/30 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-muted-foreground rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-background">⚡</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-muted-foreground">Special Traits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Special traits and rerolls enhance your character's abilities and survival chances against zombie hordes.
                </p>
              </div>
              
              <div className="card-premium text-center group hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">✦</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary/80">Exclusive Items</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Limited-time items, perks, and unique rewards only available through Hunty Zombies Codes redemption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expired Codes Section */}
        <section className="section-padding-sm bg-muted/10" id="expired-codes">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
                <Clock className="h-4 w-4 text-red-400 mr-2" />
                <span className="text-sm font-medium text-red-300">No Longer Active</span>
              </div>
              <h2 className="mb-6">Expired Hunty Zombies Codes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These Hunty Zombies Codes have expired and no longer work. We keep this list updated to help you track which codes to skip. 
                Check back regularly for new working codes!
              </p>
            </div>
            
            <div className="card-premium">
              <ExpiredCodesTable codes={expiredCodes} />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding-sm">
          <div className="container">
            <FAQ />
          </div>
        </section>

        {/* Archive Section */}
        {archiveCodes.length > 0 && (
          <section className="section-padding-sm bg-muted/20" id="archive">
            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                  <Clock className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-blue-300">Past Codes</span>
                </div>
                <h2 className="mb-6">Hunty Zombies Codes Archive</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Looking for codes from a previous month? Browse our archive to find codes from past updates.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {archiveCodes.map((archive) => (
                  <Link 
                    key={`${archive.year}-${archive.month}`}
                    href={`/codes/${archive.year}/${archive.month}`}
                    className="btn-secondary"
                  >
                    {archive.month.charAt(0).toUpperCase() + archive.month.slice(1)} {archive.year} Codes
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
