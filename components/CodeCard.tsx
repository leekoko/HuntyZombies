'use client';

import { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';

interface CodeCardProps {
  code: string;
  reward: string;
  addedDate: string;
}

export default function CodeCard({ code, reward, addedDate }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="code-card card-premium group relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium text-green-300">Active</span>
        </div>
        <span className="text-sm text-muted-foreground">{addedDate}</span>
      </div>

      {/* Code Display */}
      <div className="relative z-10 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-4 text-center group-hover:bg-muted/70 transition-colors">
          <div className="font-mono text-xl font-bold text-foreground tracking-wider">
            {code}
          </div>
        </div>
      </div>
      
      {/* Reward Info */}
      <div className="text-center mb-6 relative z-10">
        <div className="flex items-center justify-center mb-2">
          <Gift className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm text-muted-foreground">Reward</span>
        </div>
        <p className="font-semibold text-lg text-primary">{reward}</p>
      </div>

      {/* Copy Button */}
      <button 
        onClick={handleCopy}
        className={`w-full relative z-10 transition-all duration-200 ease-out font-medium rounded-xl px-6 py-3 ${
          copied 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-[1.02] active:scale-[0.98]'
        } shadow-lg hover:shadow-xl focus-ring`}
      >
        <div className="flex items-center justify-center">
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </>
          )}
        </div>
      </button>
    </div>
  );
}