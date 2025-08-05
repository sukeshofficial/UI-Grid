import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [proCredits, setProCredits] = useState("100");
  const [businessCredits, setBusinessCredits] = useState("100");

  const plans = [
    {
      name: "Pro",
      description: "Designed for fast-moving teams building together in real time.",
      price: isAnnual ? 21 : 25,
      originalPrice: isAnnual ? 25 : 30,
      savings: isAnnual ? 50 : 0,
      credits: proCredits,
      setCredits: setProCredits,
      features: [
        "100 monthly credits",
        "5 daily credits (up to 150/month)",
        "Private projects",
        "User roles & permissions",
        "Custom domains",
        "Remove the Lovable badge"
      ],
      buttonText: "Upgrade",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Business",
      description: "Advanced controls and power features for growing departments.",
      price: isAnnual ? 42 : 50,
      originalPrice: isAnnual ? 50 : 60,
      savings: isAnnual ? 100 : 0,
      credits: businessCredits,
      setCredits: setBusinessCredits,
      features: [
        "100 monthly credits",
        "5 daily credits (up to 150/month)",
        "SSO",
        "Personal Projects",
        "Opt out of data training",
        "Design templates"
      ],
      buttonText: "Upgrade",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Enterprise",
      description: "Built for large orgs needing flexibility, scale, and governance.",
      price: null,
      originalPrice: null,
      savings: 0,
      credits: null,
      setCredits: null,
      features: [
        "Dedicated support",
        "Onboarding services",
        "Custom integrations",
        "Group-based access control",
        "Custom design systems"
      ],
      buttonText: "Book a demo",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-background">
          {/* Header */}
          <DialogHeader className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Plans & Billing
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span className="text-sm text-muted-foreground mr-3">Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className="text-sm text-muted-foreground ml-3">Annual</span>
              {isAnnual && (
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save up to $100
                </span>
              )}
            </div>
          </DialogHeader>

          {/* Plans Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative rounded-xl border p-6 transition-all duration-300 hover:border-primary/50",
                    plan.popular
                      ? "border-primary bg-surface ring-1 ring-primary/20"
                      : "border-border bg-card"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Plan Header */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2">
                      {plan.price ? (
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold text-foreground">
                            ${plan.price}
                          </span>
                          <span className="text-sm text-muted-foreground">per month</span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="text-lg font-medium text-foreground">Flexible billing</div>
                          <div className="text-lg font-medium text-foreground">Custom plans</div>
                        </div>
                      )}

                      {/* Annual Toggle for non-Enterprise plans */}
                      {plan.name !== "Enterprise" && (
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={isAnnual}
                            onCheckedChange={setIsAnnual}
                            className="data-[state=checked]:bg-primary scale-75"
                          />
                          <span className="text-sm text-muted-foreground">Annual</span>
                          {isAnnual && plan.savings > 0 && (
                            <span className="text-sm text-green-400">Save ${plan.savings}</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Credits Selector */}
                    {plan.credits && plan.setCredits && (
                      <div className="space-y-2">
                        <Select value={plan.credits} onValueChange={plan.setCredits}>
                          <SelectTrigger className="w-full bg-surface border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100">100 credits / month</SelectItem>
                            <SelectItem value="200">200 credits / month</SelectItem>
                            <SelectItem value="500">500 credits / month</SelectItem>
                            <SelectItem value="1000">1000 credits / month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      variant={plan.buttonVariant}
                      className="w-full"
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>

                    {/* Features */}
                    <div className="space-y-3 pt-4">
                      <div className="text-sm font-medium text-foreground">
                        {plan.name === "Enterprise" ? "Everything in Business, plus:" : 
                         plan.name === "Business" ? "All features in Pro, plus:" : 
                         "Everything in Free, plus:"}
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                You're currently on plan: <span className="font-medium">Free</span>.{" "}
                <button className="text-primary hover:underline">
                  Manage your payment preferences and view past invoices
                </button>
                , or change your plan above.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}