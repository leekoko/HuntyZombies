import { Zap, ExternalLink, Calendar } from 'lucide-react';
import codesData from '@/data/codes.json';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const archiveCodes = codesData.slice(1);
  
  return (
    <footer className="bg-gradient-to-br from-muted/30 to-muted/50 border-t border-border">
      <div className="container section-padding-sm">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">
                Hunty Zombies Codes
              </span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your ultimate destination for the latest working Hunty Zombies Codes. 
              We update our codes list daily with verified, tested codes to ensure you never miss out on free rewards 
              in Roblox's most intense zombie survival game.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Updated Daily
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                100% Verified
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Quick Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/#active-codes', label: 'Active Codes' },
                { href: '/#how-to-redeem', label: 'How to Redeem' },
                { href: '/#rewards-info', label: 'Rewards Guide' },
                { href: '/#expired-codes', label: 'Expired Codes' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-3 w-3" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly Archives */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Monthly Archives</h4>
            <ul className="space-y-3">
              {archiveCodes.map((archive) => (
                <li key={`${archive.year}-${archive.month}`}>
                  <Link
                    href={`/codes/${archive.year}/${archive.month}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Calendar className="h-3 w-3" />
                    </span>
                    {archive.month.charAt(0).toUpperCase() + archive.month.slice(1)} {archive.year}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Game Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">About Hunty Zombies</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hunty Zombies is a popular Roblox survival game where players fight against zombie hordes. 
              Use our verified codes to get free coins, weapons, and exclusive rewards.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Roblox Game</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} huntyZombies.codes - All rights reserved.
              <span className="block md:inline md:ml-2">
                Not affiliated with Roblox Corporation or Hunty Zombies developers.
              </span>
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Educational and entertainment purposes only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}