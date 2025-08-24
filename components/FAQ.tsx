import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "What are Hunty Zombies Codes?",
      answer: "Hunty Zombies Codes are special promotional codes that can be redeemed in the Roblox game Hunty Zombies for free rewards. These codes provide players with coins, weapon spins, traits, and other valuable items to help survive the zombie apocalypse. Hunty Zombies Codes are released by the game developers and are usually time-limited."
    },
    {
      question: "How often are new Hunty Zombies Codes released?",
      answer: "New Hunty Zombies Codes are typically released during special events, game updates, or when the game reaches certain milestones like follower counts or likes. The developers may also release Hunty Zombies Codes to compensate for server issues or delays. We update our list daily to ensure you have access to all the latest working Hunty Zombies Codes."
    },
    {
      question: "Why won't my Hunty Zombies Code work?",
      answer: "There are several reasons why Hunty Zombies Codes might not work: 1) The code may have expired, 2) You might have already redeemed that specific code, 3) The code might be case-sensitive and entered incorrectly, 4) There could be extra spaces before or after the code, or 5) The code might be fake or from an unreliable source. Always use our verified Hunty Zombies Codes list for the best results."
    },
    {
      question: "Can I use the same Hunty Zombies Code multiple times?",
      answer: "No, each Hunty Zombies Code can only be redeemed once per account. Once you've successfully redeemed a Hunty Zombies Code, it cannot be used again on the same Roblox account. However, different players can use the same code as long as it hasn't expired and they haven't used it before."
    },
    {
      question: "Where can I find more Hunty Zombies Codes?",
      answer: "The best places to find new Hunty Zombies Codes are: 1) This website (we update daily), 2) The official Hunty Zombies Discord server, 3) The game developer's social media accounts, 4) Roblox group announcements, and 5) Gaming websites and YouTubers who cover Hunty Zombies. Always verify that Hunty Zombies Codes come from trusted sources to avoid scams."
    },
    {
      question: "Do Hunty Zombies Codes expire?",
      answer: "Yes, most Hunty Zombies Codes have expiration dates, though some may work indefinitely. The developers don't always announce when codes will expire, so it's important to redeem Hunty Zombies Codes as soon as you find them. Some codes may expire within days or weeks of being released, while others might last longer. Check our list regularly for the most up-to-date information."
    },
    {
      question: "What rewards can I get from Hunty Zombies Codes?",
      answer: "Hunty Zombies Codes can provide various rewards including: coins (ranging from thousands to hundreds of thousands), lucky weapon spins for rare weapons, special traits and trait rerolls, exclusive items and gear, character upgrades, and special perks. The specific rewards vary depending on the code and when it was released. Some codes may offer multiple types of rewards at once."
    },
    {
      question: "Are there any fake Hunty Zombies Codes I should avoid?",
      answer: "Yes, unfortunately there are fake Hunty Zombies Codes circulating online. Always use trusted sources like our website, official game channels, and verified gaming websites. Avoid codes from unknown sources, suspicious websites, or social media accounts that aren't officially affiliated with the game. If a code seems too good to be true or asks for personal information, it's likely fake."
    }
  ];

  return (
    <section className="mb-12" id="faq">
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions about Hunty Zombies Codes</h2>
      <div className="card-premium">
        <Accordion type="single" collapsible className="p-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}