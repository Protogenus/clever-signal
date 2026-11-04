/**
 * Guides — long-form, practical walkthroughs of how a Clever Signal product
 * is actually used. One source of truth, like products.ts. Guides never claim
 * availability, pricing, or shipped functionality beyond what the product
 * pages state.
 */

export interface GuideStep {
  title: string;
  body: string;
  tip: string;
}

export interface Guide {
  slug: string;
  productSlug: string;
  title: string;
  kicker: string;
  description: string;
  intro: string[];
  steps: GuideStep[];
  closingTitle: string;
  closing: string[];
}

export function guideUrl(slug: string): string {
  return `/guides/${slug}`;
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guides: Guide[] = [
  {
    slug: "materialist-pricing-workflow",
    productSlug: "materialist",
    title: "Price with confidence: the Materialist workflow",
    kicker: "Guide",
    description:
      "How Materialist takes you from a pile of ingredient receipts to prices you can defend — in five steps, with your real numbers.",
    intro: [
      "Most makers price the way they've always priced: a spreadsheet snapshot from months ago, a gut feeling, a glance at what competitors charge. Then ingredient prices drift — a little here, a little there — and margins erode one batch at a time, silently.",
      "Materialist exists to replace that guesswork with a simple loop: record what things cost, build your recipes from those costs, decide what each product should earn, and get told the moment reality drifts from the plan. This guide walks that loop, step by step.",
    ],
    steps: [
      {
        title: "Record ingredients with real costs",
        body: "Everything starts with your ingredients and materials, each entered with its actual purchase cost and unit — the soy wax at what you paid per pound, the fragrance oil per ounce, the jars per case. From day one, Materialist keeps a cost history for every ingredient, dated, so you can see exactly when a cost moved and which products it touched.",
        tip: "Enter costs exactly as they appear on your supplier invoices, unit and all. The history is the whole point — six months from now, you'll want to know when the wax got expensive, not just that it is.",
      },
      {
        title: "Build recipes",
        body: "Assemble each product as a recipe: ingredients with their quantities, plus the labor time, packaging materials, and overhead share that go into a finished unit. Materialist rolls it all up into a true per-batch and per-unit cost. Record your actual yield too — batches rarely produce exactly what the formula promises, and waste is a cost like any other.",
        tip: "Don't skip packaging and labor. The classic surprise is discovering the jar costs more than the jam — or the fragrance load costs more than the wax. The unglamorous costs are usually the ones eating your margin.",
      },
      {
        title: "Set margin targets",
        body: "Decide what each product should earn — a target margin per SKU, in your words. These targets are yours; Materialist doesn't set them and doesn't judge them. They're simply the line in the sand that everything else gets measured against.",
        tip: "Be honest rather than ambitious here. A target you actually hold yourself to beats an aspirational one you ignore. You can raise it once the numbers support it.",
      },
      {
        title: "Watch for drift",
        body: "This is where the loop pays for itself. When an ingredient price moves, Materialist re-costs every affected recipe and checks it against your targets. If a product's margin slips below its target, you get an alert naming the product, the old margin, the new one, and what changed — before you price the next run wrong.",
        tip: "Picture the candle maker whose soy wax supplier raised prices 18%. Without this step, she finds out at tax time. With it, she knows which three SKUs slipped, by how much, and can reprice the next wholesale order with the numbers in front of her.",
      },
      {
        title: "Compare and decide",
        body: "With true per-unit costs in hand, compare products side by side on true profit — not revenue. You'll see which items actually earn their shelf space and which ones survive on volume alone. Then decide, product by product: promote it, reprice it, reformulate it, or retire it.",
        tip: "Run this comparison quarterly, like a review. The soap maker who discovered her 'cheaper' formula actually cost more per bar — once fragrance load and cure loss were counted — found it here, not in a shrinking bank balance.",
      },
    ],
    closingTitle: "The loop, not the spreadsheet",
    closing: [
      "That's the whole workflow: record, build, target, watch, decide — then keep going. Costs move, suppliers change, recipes evolve, and the loop keeps your prices honest through all of it.",
      "A spreadsheet can hold the same numbers. What it can't do is tap you on the shoulder when they change. That tap — the margin-drift alert naming the exact product and the exact shortfall — is the reason the loop exists.",
    ],
  },
];
