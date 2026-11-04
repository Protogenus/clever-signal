// Clever Signal — centralized product data.
// Single source of truth: every page reads from this module. Nothing is duplicated
// across components. Statuses are configurable here.
//
// Honesty rules enforced here:
// - Every status is "in-development" or "coming-soon". Nothing is marked available.
// - Integrations are PLANNED data-exchange contracts, never claimed as existing.
// - No pricing, no testimonials, no invented availability anywhere in this file.

import type { ProductStatus } from "./site.ts";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface IntegrationLink {
  /** Slug of the other Clever Signal product. */
  productSlug: string;
  /** Describes the planned, optional data exchange — never claimed as implemented. */
  description: string;
}

export interface ProductCta {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  status: ProductStatus;
  /** Positioning statement. */
  positioning: string;
  /** The problem it solves. */
  problem: string;
  /** Intended audience. */
  audience: string[];
  /** Short directory blurb. */
  shortDescription: string;
  /** Longer introduction for the product page. */
  fullDescription: string;
  features: ProductFeature[];
  /** Practical examples of how the software is used. */
  examples: string[];
  /** The primary workflow, in order. */
  workflow: WorkflowStep[];
  /** Optional, planned integrations with other Clever Signal products. */
  integrations: IntegrationLink[];
  cta: ProductCta;
  seo: { title: string; description: string };
  /** Short display name used on product cards (falls back to name). */
  shortName?: string;
  /** Short category for card eyebrows (falls back to category); never wraps. */
  shortCategory?: string;
  /**
   * Real app screenshot for the card's large visual (public/screenshots/<slug>.png).
   * Only set when captured from the actual running app — never fabricated.
   * Falls back to the mascot tile when absent (e.g. unbuilt products).
   */
  screenshot?: string;
  /** Honest alt text for the screenshot, e.g. "Materialist application window (in development)". */
  screenshotAlt?: string;
  /** Brand color — one distinct Adobe-style color per product. */
  accent: string;
  /** Path to the dithered mascot image (public/mascots/<slug>.png). */
  mascot: string;
  /** Descriptive alt text for the mascot image. */
  mascotAlt: string;
}

const contactCta = (name: string): ProductCta => ({
  label: `Contact us about ${name}`,
  href: "/contact",
});

const FIRST_PRODUCTS: Product[] = [
  {
    id: "materialist",
    name: "Clever Signal Materialist",
    shortName: "Materialist",
    slug: "materialist",
    category: "Recipe costing & margin tracking",
    shortCategory: "Recipe costing",
    status: "in-development",
    positioning:
      "Know what every product really costs to make — and be told the moment your margins move.",
    problem:
      "Independent makers set prices from a spreadsheet snapshot or gut feel, then ingredient " +
      "prices drift silently and margins erode batch after batch. Generic accounting software " +
      "tracks money in and out, but it never tells you what a single candle, bar of soap, or " +
      "jar actually costs you to make — or warns you when that cost has crept past what your " +
      "price can carry.",
    audience: [
      "Independent candle, soap, skincare, and cosmetics makers",
      "Small-batch food producers",
      "Craft sellers pricing handmade goods",
      "Any maker who needs true per-unit costs before setting a price",
    ],
    shortDescription:
      "Recipe costing and margin-drift tracking for makers. Know the true cost of every " +
      "product — and get alerted when margins slip.",
    fullDescription:
      "Materialist is built for the maker who prices by instinct and hopes the math works out. " +
      "It starts from your recipes and works outward: every ingredient carries its real cost, " +
      "every batch rolls up to a true per-unit cost including labor, packaging, and overhead, " +
      "and every product is watched against the margin you decided it should earn. When an " +
      "ingredient price moves and a product's margin drifts below your target, Materialist " +
      "tells you — before you price the next run wrong.",
    features: [
      {
        title: "Recipe costing engine",
        description:
          "Build recipes from ingredients with quantities and units. Materialist calculates " +
          "the true cost of a batch and of each finished unit, including labor time, packaging " +
          "materials, and an overhead allocation you control. Change an ingredient price and " +
          "every affected recipe re-costs immediately.",
      },
      {
        title: "Ingredient and material cost tracking",
        description:
          "Every ingredient keeps a cost history. When a supplier raises the price of soy wax " +
          "or shea butter, the change is recorded with a date, so you can see exactly when " +
          "your costs moved and which products they touched.",
      },
      {
        title: "SKU-level margin-drift alerts",
        description:
          "Set a target margin for each product. Materialist watches cost against price and " +
          "alerts you when a product's margin drifts below your threshold — the core early " +
          "warning that a price needs revisiting or a recipe needs reworking.",
      },
      {
        title: "True-profit product comparison",
        description:
          "Compare products side by side on true profit per unit, not revenue. See which items " +
          "actually earn their shelf space and which ones survive on volume alone.",
      },
      {
        title: "Waste and yield accounting",
        description:
          "Batches rarely yield exactly what the recipe promises. Record actual yield and " +
          "waste so per-unit costs reflect what you really produced, not what the formula " +
          "assumed.",
      },
      {
        title: "Supplier price tracking",
        description:
          "Keep the suppliers behind each ingredient on record with their current prices, so " +
          "shopping around is a comparison of real numbers instead of a feeling.",
      },
    ],
    examples: [
      "A candle maker learns her soy wax supplier raised prices 18%. Materialist flags the " +
        "three candle SKUs whose margins slipped below target before she prices the next wholesale order.",
      "A soap maker compares two formulas for the same bar and discovers the 'cheaper' recipe " +
        "costs more per bar once fragrance load and cure loss are counted.",
      "A jam producer sees that packaging, not fruit, is what makes her smallest jar the " +
        "least profitable product in the line — and reprices it with the numbers in front of her.",
    ],
    workflow: [
      {
        title: "Record ingredients with real costs",
        description:
          "Enter each ingredient or material with its purchase cost and unit. Cost history " +
          "starts building from day one.",
      },
      {
        title: "Build recipes",
        description:
          "Assemble recipes from ingredients with quantities, add labor, packaging, and " +
          "overhead, and get a true per-batch and per-unit cost.",
      },
      {
        title: "Set margin targets",
        description:
          "Decide what each product should earn. Targets are yours — Materialist watches " +
          "them, it doesn't set them.",
      },
      {
        title: "Watch for drift",
        description:
          "When costs move, margin-drift alerts point at exactly which products need " +
          "attention and by how much.",
      },
      {
        title: "Compare and decide",
        description:
          "Use true-profit comparison to decide what to promote, reprice, reformulate, or retire.",
      },
    ],
    integrations: [
      {
        productSlug: "stockroom",
        description:
          "Planned: material purchase records from Stockroom could feed ingredient costs " +
          "directly, so price changes flow into costing without re-entry.",
      },
      {
        productSlug: "elixer",
        description:
          "Planned: approved formulas from Elixer could arrive as costed recipes, keeping " +
          "formulation and costing on the same numbers.",
      },
      {
        productSlug: "stagepoint",
        description:
          "Planned: production batches from StagePoint could carry actual yield back into " +
          "Materialist for truer per-unit costs.",
      },
      {
        productSlug: "thrivepoint",
        description:
          "Planned: true per-unit costs from Materialist could feed Thrivepoint's Offer " +
          "Laboratory, so promotional offers are simulated against real margins.",
      },
    ],
    cta: contactCta("Materialist"),
    seo: {
      title: "Materialist — Recipe Costing & Margin Tracking for Makers | Clever Signal",
      description:
        "Clever Signal Materialist: recipe costing software with SKU-level margin-drift " +
        "alerts for independent makers. Know the true cost of every product. In development.",
    },
    accent: "#CE8900",
    mascot: "/mascots/materialist.png",
    mascotAlt:
      "Dithered brand tile for Materialist: a realistic engraved owl portrait in black ink on solid amber",
    screenshot: "/screenshots/materialist.png",
    screenshotAlt: "Materialist application window (in development)",
  },
  {
    id: "thrivepoint",
    name: "Thrivepoint",
    slug: "thrivepoint",
    category: "Growth experimentation",
    status: "in-development",
    positioning:
      "A disciplined way to grow a small business: discover, experiment, launch, measure, improve.",
    problem:
      "Small businesses try marketing ideas at random — a discount here, a bundle there, a " +
      "new channel every quarter — with no record of what was tested, what it cost, or whether " +
      "it worked. Growth becomes superstition: repeating what felt good and abandoning what " +
      "felt slow, with no evidence either way. Generic analytics dashboards show traffic, not " +
      "learning.",
    audience: [
      "Small product businesses ready to grow deliberately",
      "Independent sellers testing offers and channels",
      "Makers deciding what to promote and what to retire",
      "Anyone tired of guessing which marketing actually worked",
    ],
    shortDescription:
      "A growth operating system for small businesses. Run structured experiments, measure " +
      "what works, and compound the wins.",
    fullDescription:
      "Thrivepoint treats growth as a practice, not a lottery ticket. Every idea becomes an " +
      "experiment with a hypothesis, a cost, and a verdict — won, lost, or inconclusive. " +
      "Campaigns carry their tracking links, codes, and UTM parameters in one place. Customers " +
      "are studied in segments and cohorts, not just counted. And the Offer Laboratory lets " +
      "you simulate a promotion's profitability against your real costs before you commit " +
      "inventory to it. The loop is always the same: discover, experiment, launch, measure, improve.",
    features: [
      {
        title: "Structured experiment lifecycle",
        description:
          "Every growth idea moves through Idea, Active, and a recorded verdict: Won, Lost, " +
          "or Inconclusive. Hypotheses, costs, and results stay attached to the experiment, " +
          "so next quarter's planning starts from evidence instead of memory.",
      },
      {
        title: "Campaign workspace",
        description:
          "Organize campaigns with their tracking links, UTM parameters, and discount codes " +
          "in one place, so you can trace a sale back to the effort that caused it instead " +
          "of wondering afterward.",
      },
      {
        title: "Customer segments and cohorts",
        description:
          "Build segments with AND/OR rules and study cohorts over time: who came back, who " +
          "lapsed, who buys across product lines. Growth decisions get a customer-shaped " +
          "evidence base.",
      },
      {
        title: "Offer Laboratory",
        description:
          "Simulate offers — bundles, discounts, free-shipping thresholds — against your " +
          "actual product costs, and compare candidates side by side on profitability before " +
          "you launch one. A promotion that loses money on every unit is a discovery, not " +
          "a strategy.",
      },
      {
        title: "Referral and ambassador programs",
        description:
          "Structure referral and ambassador programs with their own tracking, so word of " +
          "mouth becomes a channel you can measure instead of a hope you carry.",
      },
      {
        title: "Growth calendar",
        description:
          "Plan experiments, launches, and campaigns on a calendar built for the growth " +
          "loop, keeping the pipeline of ideas visible and the cadence deliberate.",
      },
    ],
    examples: [
      "A candle studio tests two holiday bundles in the Offer Laboratory and learns the " +
        "bigger bundle earns less per unit — it launches the smaller one and sells out.",
      "A soap seller runs a referral program for a new line and, for the first time, can " +
        "say exactly what each referred customer cost to acquire.",
      "A ceramics shop's cohort analysis shows buyers of mugs return within 60 days at " +
        "twice the rate of plate buyers — the next campaign targets mug buyers first.",
    ],
    workflow: [
      {
        title: "Discover",
        description:
          "Collect growth ideas and opportunities in one backlog, informed by your " +
          "customers, your margins, and your past experiments.",
      },
      {
        title: "Experiment",
        description:
          "Turn an idea into a structured experiment with a hypothesis, a budget, and a " +
          "way to measure the outcome.",
      },
      {
        title: "Launch",
        description:
          "Run the campaign or offer with tracking in place from the start — links, " +
          "codes, and parameters recorded up front.",
      },
      {
        title: "Measure",
        description:
          "Record the verdict: won, lost, or inconclusive. The evidence stays with the " +
          "experiment either way.",
      },
      {
        title: "Improve",
        description:
          "Feed what you learned into the next cycle. Compounding small wins beats " +
          "chasing one big one.",
      },
    ],
    integrations: [
      {
        productSlug: "materialist",
        description:
          "Planned: true per-unit costs from Materialist could feed the Offer Laboratory, " +
          "so every simulated promotion is checked against real margins.",
      },
      {
        productSlug: "orderly",
        description:
          "Planned: order and customer records from Orderly could feed segments and " +
          "cohorts, so growth analysis starts from real purchase history.",
      },
      {
        productSlug: "stagepoint",
        description:
          "Planned: production capacity from StagePoint could inform launch planning, so " +
          "a winning experiment never promises what the floor can't make.",
      },
    ],
    cta: contactCta("Thrivepoint"),
    seo: {
      title: "Thrivepoint — Growth Experimentation for Small Business | Clever Signal",
      description:
        "Thrivepoint by Clever Signal: a growth operating system for small businesses — " +
        "structured experiments, campaign tracking, customer cohorts, and an offer " +
        "laboratory. In development.",
    },
    accent: "#A2B000",
    mascot: "/mascots/thrivepoint.png",
    screenshot: "/screenshots/thrivepoint.png",
    screenshotAlt: "Thrivepoint application window (in development)",
    mascotAlt:
      "Dithered brand tile for Thrivepoint: a realistic engraved rabbit portrait in black ink on solid lime green",
  },
];

const MIDDLE_PRODUCTS: Product[] = [
  {
    id: "stockroom",
    name: "Stockroom",
    slug: "stockroom",
    category: "Inventory Management",
    status: "coming-soon",
    positioning:
      "One honest record of every material, component, and finished good in the business.",
    problem:
      "Small product businesses track inventory in their heads, in spreadsheets that disagree " +
      "with each other, or in the back room by eyesight. Materials run out mid-batch, finished " +
      "stock gets double-counted, and nobody can say what the shelf is actually worth. Generic " +
      "inventory systems are built for warehouses with barcode scanners and receiving docks — " +
      "not for a studio where the same person orders, makes, packs, and ships.",
    audience: [
      "Makers tracking raw materials and supplies",
      "Small manufacturers with components and finished stock",
      "Independent sellers who need to know what's on hand before promising it",
    ],
    shortDescription:
      "Inventory and material management for small product businesses. Track materials, " +
      "quantities, movements, and costs in one place.",
    fullDescription:
      "Stockroom is the inventory backbone of the Clever Signal family: a clear, honest " +
      "record of what you have, where it is, what it cost, and where it went. Materials, " +
      "components, and finished goods live in one system with every movement recorded — " +
      "received, used in production, sold, adjusted, or wasted. Low-stock visibility tells " +
      "you what to reorder before a batch stalls, and product-component relationships keep " +
      "the connection between raw materials and finished goods explicit instead of implied.",
    features: [
      {
        title: "Material and supply tracking",
        description:
          "Catalog every material, ingredient, and supply with units, suppliers, and " +
          "identifying details. One record per item, kept current.",
      },
      {
        title: "Inventory quantities",
        description:
          "Know on-hand quantities at a glance, with the history behind every number — " +
          "no more wondering whether the spreadsheet or the shelf is right.",
      },
      {
        title: "Stock movements",
        description:
          "Every receipt, use, sale, adjustment, and write-off is a recorded movement " +
          "with a reason, so the ledger explains itself when you audit it.",
      },
      {
        title: "Material costs",
        description:
          "Track what materials cost over time. Cost changes are history, not surprises, " +
          "and the value of what's on the shelf is always calculable.",
      },
      {
        title: "Reordering and low-stock visibility",
        description:
          "Set reorder points and see what's running low before it runs out. Reordering " +
          "becomes a calm routine instead of an emergency.",
      },
      {
        title: "Product and component relationships",
        description:
          "Link finished products to the materials and components they consume, so " +
          "inventory answers the question 'what can I actually make?' instead of just " +
          "'what do I have?'",
      },
    ],
    examples: [
      "A soap maker checks whether she has enough olive oil and lye on hand for Friday's " +
        "batch — and sees the reorder point she set last month is already blinking.",
      "A candle studio traces a batch of underperforming candles back to a specific wax " +
        "delivery, because receipts are dated and lots are recorded.",
      "A woodworker values his lumber rack at year end from actual cost history instead " +
        "of guessing.",
    ],
    workflow: [
      {
        title: "Catalog",
        description:
          "Enter materials, components, and finished products once, with units and suppliers.",
      },
      {
        title: "Receive",
        description:
          "Log every delivery as a movement with quantity, cost, and date.",
      },
      {
        title: "Consume and sell",
        description:
          "Record materials used in production and finished goods sold or shipped.",
      },
      {
        title: "Reorder",
        description:
          "Watch low-stock signals and reorder from recorded supplier information.",
      },
      {
        title: "Review",
        description:
          "Audit the movement history whenever the numbers need explaining.",
      },
    ],
    integrations: [
      {
        productSlug: "stagepoint",
        description:
          "Planned: production runs in StagePoint could draw down material quantities " +
          "automatically, keeping the ledger current without double entry.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: material cost history from Stockroom could feed Materialist's " +
          "recipe costing, so cost changes flow through to margins.",
      },
      {
        productSlug: "orderly",
        description:
          "Planned: fulfilled orders in Orderly could decrement finished-goods stock, " +
          "closing the loop from sale to shelf.",
      },
    ],
    cta: contactCta("Stockroom"),
    seo: {
      title: "Stockroom — Inventory & Material Management | Clever Signal",
      description:
        "Stockroom by Clever Signal: inventory and material management for small product " +
        "businesses — quantities, movements, costs, and reordering. Coming soon.",
    },
    accent: "#985531",
    mascot: "/mascots/stockroom.png",
    mascotAlt:
      "Dithered brand tile for Stockroom: a realistic engraved ant portrait in black ink on solid brown",
  },
  {
    id: "stagepoint",
    name: "StagePoint",
    slug: "stagepoint",
    category: "Production planning",
    status: "in-development",
    positioning:
      "Know what to make, how much you can make from what's on hand, and what's next on the floor.",
    problem:
      "Production in a small business is planned on sticky notes and in someone's head. Orders " +
      "pile up with no sense of what to run first, batches get sized by habit instead of by " +
      "demand and stock, and the question 'can we actually make all of this?' gets answered " +
      "the hard way. Enterprise MRP systems assume a planning department; a ten-person shop " +
      "needs answers, not modules.",
    audience: [
      "Makers producing in batches (candles, soap, food, cosmetics)",
      "Small manufacturers grouping orders into production runs",
      "Anyone who has ever started a batch and discovered a missing material halfway through",
    ],
    shortDescription:
      "Production planning for businesses that make things. Plan what to manufacture, " +
      "group work into runs, and track every job.",
    fullDescription:
      "StagePoint answers the six questions that run a production floor: what needs to be " +
      "manufactured, how many units can be made from on-hand stock, which orders should be " +
      "produced together, what materials each run needs, what each batch costs, and what's " +
      "next. Production is organized into runs and queues with real status — planned, in " +
      "progress, done — and a history that shows what the floor actually produced, not what " +
      "the plan hoped it would.",
    features: [
      {
        title: "Production planning",
        description:
          "Turn demand — orders, forecasts, restock targets — into a concrete plan of what " +
          "to make and when, sized to reality.",
      },
      {
        title: "Batch creation",
        description:
          "Group work into manageable runs with defined quantities, materials, and " +
          "instructions, instead of one long undifferentiated to-do list.",
      },
      {
        title: "Production queues",
        description:
          "See everything waiting, everything running, and everything done, in an order " +
          "that reflects priority rather than arrival time.",
      },
      {
        title: "Work scheduling",
        description:
          "Sequence runs against capacity and deadlines so the floor knows what's next " +
          "without a morning meeting about it.",
      },
      {
        title: "Material requirements",
        description:
          "Every run declares what it needs before it starts. Shortages surface at " +
          "planning time, not mid-batch.",
      },
      {
        title: "Job tracking and history",
        description:
          "Track each job's progress and keep a permanent record of what was produced, " +
          "when, and from what — the memory the business keeps even when people change.",
      },
    ],
    examples: [
      "A candle studio groups forty wholesale orders into three production runs by scent " +
        "family, cutting changeover cleaning to a fraction of one-off batches.",
      "A granola maker learns she can only make 60% of next week's demand from on-hand " +
        "oats — and reorders on Monday instead of discovering it Thursday.",
      "A soap maker looks at last quarter's production history to decide whether the " +
        "holiday line needs a second curing rack.",
    ],
    workflow: [
      {
        title: "Gather demand",
        description:
          "Collect what needs making: open orders, restock targets, and forecasts.",
      },
      {
        title: "Check feasibility",
        description:
          "See how many units on-hand stock supports and what materials each candidate " +
          "run requires.",
      },
      {
        title: "Build runs",
        description:
          "Group compatible work into batches sized to demand, stock, and capacity.",
      },
      {
        title: "Schedule",
        description:
          "Sequence the runs against deadlines and floor capacity.",
      },
      {
        title: "Execute and record",
        description:
          "Work the queue, update status as runs complete, and keep the history.",
      },
    ],
    integrations: [
      {
        productSlug: "stockroom",
        description:
          "Planned: material availability from Stockroom could drive feasibility checks, " +
          "and completed runs could draw down inventory automatically.",
      },
      {
        productSlug: "orderly",
        description:
          "Planned: open orders from Orderly could feed the demand picture, so planning " +
          "starts from what customers are actually waiting for.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: batch records from StagePoint could carry actual quantities and " +
          "costs into Materialist for truer product costing.",
      },
      {
        productSlug: "thrivepoint",
        description:
          "Planned: floor capacity from StagePoint could inform Thrivepoint launch " +
          "planning, so growth experiments never overpromise.",
      },
    ],
    cta: contactCta("StagePoint"),
    seo: {
      title: "StagePoint — Production Planning for Makers | Clever Signal",
      description:
        "StagePoint by Clever Signal: production planning software — batches, queues, " +
        "scheduling, material requirements, and job history for small manufacturers. " +
        "In development.",
    },
    accent: "#C90042",
    mascot: "/mascots/stagepoint.png",
    screenshot: "/screenshots/stagepoint.png",
    screenshotAlt: "StagePoint application window (in development)",
    mascotAlt:
      "Dithered brand tile for StagePoint: a realistic engraved beaver portrait in black ink on solid crimson red",
  },
  {
    id: "orderly",
    name: "Orderly",
    slug: "orderly",
    category: "Order & fulfillment management",
    shortCategory: "Order management",
    status: "in-development",
    positioning: "Every order, in order.",
    problem:
      "Orders arrive from the shop, the market stall, the wholesale email, and the DM — and " +
      "fulfillment becomes archaeology. Which orders are packed? Which are waiting on one " +
      "item? Which customer already asked twice? Marketplaces track their own orders fine, " +
      "but the moment a business sells in more than one place, the operational truth lives " +
      "nowhere. Generic order tools assume a warehouse team; a small seller needs a calm " +
      "inbox and a clear board.",
    audience: [
      "Independent sellers fulfilling their own orders",
      "Etsy and marketplace sellers selling across multiple channels",
      "Small manufacturers handling wholesale and direct orders together",
    ],
    shortDescription:
      "Order and fulfillment management for independent sellers. Every order tracked from " +
      "inbox to doorstep.",
    fullDescription:
      "Orderly is the operational side of selling: one inbox for every order wherever it " +
      "came from, a clear lifecycle from received to delivered, and fulfillment work " +
      "organized into queues that show what to pick, pack, and ship next. Partial " +
      "fulfillment, multiple shipments per order, returns, and exceptions are all first-class " +
      "— because real orders are messy and the software should admit it. The result is " +
      "operational visibility: at any moment, you can say exactly where every order stands.",
    features: [
      {
        title: "Order inbox",
        description:
          "Every order lands in one place — a table for detail and a drag-and-drop board " +
          "for flow — no matter which channel it came through.",
      },
      {
        title: "Twelve-state lifecycle",
        description:
          "Orders move through a defined lifecycle with timestamped history, so 'where is " +
          "it?' always has an exact answer instead of a guess.",
      },
      {
        title: "Partial fulfillment and multiple shipments",
        description:
          "Ship what's ready now and the rest later. Split an order across shipments " +
          "without losing track of what each customer is still owed.",
      },
      {
        title: "Picking and packing",
        description:
          "Fulfillment queues organize the physical work: what to pick, what to pack, " +
          "what's waiting on stock — in a sensible order.",
      },
      {
        title: "Shipping preparation",
        description:
          "Prepare shipments with packing slips and clear package contents, so the box " +
          "that leaves matches the order that arrived.",
      },
      {
        title: "Exception handling",
        description:
          "Damaged items, address problems, customer changes — exceptions get their own " +
          "tracked state instead of living in a notes field everyone forgets.",
      },
      {
        title: "Operational visibility",
        description:
          "Dashboards built from real order data: what's late, what's stuck, what's " +
          "moving. The morning standup, answered by the software.",
      },
    ],
    examples: [
      "An Etsy seller sees all twelve open orders on one board, drags the three that are " +
        "fully pickable into today's pack queue, and leaves the two waiting on restock " +
        "exactly where they are.",
      "A wholesale jam order ships in two partial shipments as jars come off the line — " +
        "the customer record shows what's delivered and what's pending without a spreadsheet.",
      "A ceramics seller handles a damaged-in-transit replacement as a tracked exception " +
        "tied to the original order, not a sticky note.",
    ],
    workflow: [
      {
        title: "Capture",
        description:
          "Orders arrive in the inbox from every channel, or are entered directly.",
      },
      {
        title: "Triage",
        description:
          "Orders move through the lifecycle: confirmed, ready, in fulfillment.",
      },
      {
        title: "Fulfill",
        description:
          "Work the pick and pack queues; ship partial or complete as reality allows.",
      },
      {
        title: "Deliver",
        description:
          "Record shipments and completion. The customer got what they ordered.",
      },
      {
        title: "Resolve",
        description:
          "Handle returns and exceptions to a recorded close, not an open thread.",
      },
    ],
    integrations: [
      {
        productSlug: "stagepoint",
        description:
          "Planned: a production-handoff contract could send unfulfillable orders to " +
          "StagePoint as demand, keeping the queue honest about what the floor owes.",
      },
      {
        productSlug: "stockroom",
        description:
          "Planned: fulfilled shipments could decrement finished-goods inventory in " +
          "Stockroom automatically.",
      },
      {
        productSlug: "thrivepoint",
        description:
          "Planned: order and customer history from Orderly could feed Thrivepoint's " +
          "segments and cohorts for growth analysis.",
      },
    ],
    cta: contactCta("Orderly"),
    seo: {
      title: "Orderly — Order & Fulfillment Management | Clever Signal",
      description:
        "Orderly by Clever Signal: order management and fulfillment software for " +
        "independent sellers — lifecycle tracking, pick/pack queues, partial " +
        "fulfillment, and exceptions. In development.",
    },
    accent: "#42997B",
    mascot: "/mascots/orderly.png",
    screenshot: "/screenshots/orderly.png",
    screenshotAlt: "Orderly application window (in development)",
    mascotAlt:
      "Dithered brand tile for Orderly: a realistic engraved pigeon portrait in black ink on solid sea green",
  },
  {
    id: "elixer",
    name: "Elixer",
    slug: "elixer",
    category: "Recipe & formula management",
    shortCategory: "Recipe management",
    status: "in-development",
    positioning:
      "Know what's in your product. Know how to make it. Know what it costs. Make it consistently.",
    problem:
      "Formulas live in notebooks, in scaled-up spreadsheet copies, and in the founder's " +
      "memory — three versions of the same recipe, none of them marked. A batch comes out " +
      "wrong and nobody can say which version was used. Scaling from a test batch to " +
      "production is arithmetic done under pressure. Substitutions get improvised and " +
      "forgotten. For businesses whose product IS a formula, this is the crown jewels " +
      "managed like scratch paper.",
    audience: [
      "Candle makers developing and refining scent blends",
      "Soap, skincare, and cosmetics formulators",
      "Resin, ceramics, and food producers working from recipes",
      "Any maker whose quality depends on getting the formula right every time",
    ],
    shortDescription:
      "Recipe and formula management for makers. Develop, calculate, revise, and reproduce " +
      "formulas with confidence.",
    fullDescription:
      "Elixer is where a product's formula becomes an engineered record instead of a " +
      "memory. The Formulation Studio handles composition in weight, volume, count, " +
      "percentage, or ratio bases with a decimal-safe calculation engine — scaling a " +
      "500-gram test to a 20-kilo production batch is exact, not approximate. Revisions " +
      "are immutable: every change is a new revision, so you can always see what changed, " +
      "when, and why. Batch records capture planned versus actual, and the experiment lab " +
      "gives R&D a home that isn't the margins of a notebook.",
    features: [
      {
        title: "Formula library",
        description:
          "Every formula lives in one library with its full revision history. The " +
          "current approved version is always unambiguous.",
      },
      {
        title: "Formulation Studio",
        description:
          "Compose formulas in weight, volume, count, percentage, or ratio bases. The " +
          "decimal-safe engine keeps every calculation exact through scaling and conversion.",
      },
      {
        title: "Batch-size calculations",
        description:
          "Scale any formula to any batch size with one action. Test batch to production " +
          "run, without the error-prone arithmetic.",
      },
      {
        title: "Ingredient substitutions",
        description:
          "Record approved substitutions with their rules and effects, so a swap is a " +
          "decision on record — not an improvisation nobody remembers.",
      },
      {
        title: "Immutable revision control",
        description:
          "Formulas are never edited in place. Every change creates a new revision, " +
          "preserving the complete lineage of how a product evolved.",
      },
      {
        title: "Experiment lab",
        description:
          "Develop and test new formulas and variations in a dedicated space, promoting " +
          "winners to the library when they're proven.",
      },
      {
        title: "Batch records",
        description:
          "Record planned versus actual for every batch — quantities, yield, variance — " +
          "so consistency is measured, not assumed.",
      },
      {
        title: "Cost analysis",
        description:
          "See what each formula costs at any batch size from current ingredient costs, " +
          "connecting formulation decisions to their economics.",
      },
    ],
    examples: [
      "A candle maker scales a 200g test blend to a 5kg production batch; every " +
        "fragrance percentage lands exactly, and the batch record captures the actual " +
        "pour temperature and yield.",
      "A soap formulator tries three variations of a recipe in the experiment lab, " +
        "promotes the winner, and the old revisions remain untouched for reference.",
      "A skincare maker substitutes one carrier oil for another using the approved " +
        "substitution record — the change is traceable instead of tribal knowledge.",
    ],
    workflow: [
      {
        title: "Build the ingredient library",
        description:
          "Catalog ingredients with their properties and costs, typed and unit-aware.",
      },
      {
        title: "Formulate",
        description:
          "Compose in the Formulation Studio, in whatever base suits the product.",
      },
      {
        title: "Test",
        description:
          "Run trials in the experiment lab and iterate on recorded revisions.",
      },
      {
        title: "Approve",
        description:
          "Promote the winning revision to the library as the current formula.",
      },
      {
        title: "Produce and record",
        description:
          "Scale to batch size, make it, and capture planned versus actual.",
      },
    ],
    integrations: [
      {
        productSlug: "materialist",
        description:
          "Planned: approved formulas could arrive in Materialist as costed recipes, " +
          "keeping formulation and costing on identical numbers.",
      },
      {
        productSlug: "stagepoint",
        description:
          "Planned: production batches could pull the current approved formula " +
          "revision, so the floor always makes the right version.",
      },
      {
        productSlug: "stockroom",
        description:
          "Planned: ingredient usage from batch records could inform material " +
          "planning in Stockroom.",
      },
    ],
    cta: contactCta("Elixer"),
    seo: {
      title: "Elixer — Recipe & Formula Management for Makers | Clever Signal",
      description:
        "Elixer by Clever Signal: formulation software for candle, soap, skincare, and " +
        "food makers — revision-controlled formulas, batch scaling, substitutions, " +
        "and batch records. In development.",
    },
    accent: "#8B61E3",
    mascot: "/mascots/elixer.png",
    screenshot: "/screenshots/elixer.png",
    screenshotAlt: "Elixer application window (in development)",
    mascotAlt:
      "Dithered brand tile for Elixer: a realistic engraved cat portrait in black ink on solid purple",
  },
];

const FINAL_PRODUCTS: Product[] = [
  {
    id: "cutline",
    name: "Cutline",
    slug: "cutline",
    category: "Cutting & layout optimization",
    shortCategory: "Cutting optimization",
    status: "in-development",
    positioning:
      "Use less material. Waste less money. Get more out of every cut.",
    problem:
      "Anyone who cuts parts from sheet goods knows the quiet tax of bad layouts: the " +
      "offcut that was almost big enough, the sheet that yielded six parts when it could " +
      "have held eight, the remnant pile nobody trusts. Nesting by eye works until the " +
      "material gets expensive — and then every wasted square inch is money. The " +
      "optimization tools that exist are built for industrial CNC workflows, priced and " +
      "shaped for factories, not for a workshop cutting vinyl, fabric, wood, or acrylic.",
    audience: [
      "Craft sellers cutting vinyl, HTV, fabric, or paper",
      "Woodworkers and small shops cutting sheet goods",
      "Laser and CNC users nesting parts on expensive stock",
      "Anyone whose material bill deserves better than eyeballing",
    ],
    shortDescription:
      "Material cutting and layout optimization. Arrange parts on your stock, minimize " +
      "waste, and reuse remnants.",
    fullDescription:
      "Cutline takes your parts and your material and works out how they fit together " +
      "best. Import designs, define your sheets, rolls, and boards, and let the " +
      "deterministic nesting engine arrange parts to minimize waste — with the algorithm " +
      "version recorded, so a layout is reproducible, not a one-time accident. Remnants " +
      "are first-class citizens: leftovers get measured, stored, and offered back as stock " +
      "for the next job. Export layouts to SVG or DXF for your cutter, laser, or CNC, " +
      "and keep reusable cutting plans for the jobs you run again and again.",
    features: [
      {
        title: "Cutting layouts",
        description:
          "Arrange parts on defined material with clearances and grain or pattern " +
          "direction respected, in an interactive Layout Studio.",
      },
      {
        title: "Design import",
        description:
          "Bring in SVG, DXF, PDF, PNG, and JPEG designs. Cutline works alongside your " +
          "design tools — it optimizes the layout, it doesn't replace the drawing.",
      },
      {
        title: "Deterministic nesting engine",
        description:
          "A versioned, deterministic optimizer arranges parts to minimize waste. Same " +
          "inputs, same result, every time — and the algorithm version is recorded with " +
          "each layout.",
      },
      {
        title: "Waste calculations",
        description:
          "See exactly how much of each sheet becomes product and how much becomes " +
          "scrap, in area and in money.",
      },
      {
        title: "Remnant management",
        description:
          "Leftovers are measured and cataloged as reusable stock. The next nesting run " +
          "considers remnants first — the pile stops being a graveyard and starts being " +
          "inventory.",
      },
      {
        title: "Reusable cutting plans",
        description:
          "Save layouts as plans for repeat jobs. When the same parts run again, the " +
          "proven layout is one click away.",
      },
      {
        title: "Machine-compatible export",
        description:
          "Export layouts to SVG and DXF for cutters, lasers, and CNC workflows. " +
          "Cutline prepares the layout; your machine still does the cutting.",
      },
    ],
    examples: [
      "A vinyl decal seller nests a 40-design order onto two rolls instead of three, " +
        "and the remnant from the job becomes stock for next week's small orders.",
      "A woodworker lays out cabinet parts on 4×8 sheets and sees the waste drop from " +
        "22% to 9% — on walnut plywood, that's the difference between profit and loss.",
      "A laser-cut ornament maker reuses last month's saved cutting plan for the " +
        "holiday restock instead of re-nesting from scratch.",
    ],
    workflow: [
      {
        title: "Import designs",
        description:
          "Bring in the parts to cut, in the formats your tools already produce.",
      },
      {
        title: "Define material",
        description:
          "Set up sheets, rolls, and boards with dimensions — plus your remnant " +
          "inventory.",
      },
      {
        title: "Optimize",
        description:
          "Run the nesting engine and compare strategies by waste, utilization, and cost.",
      },
      {
        title: "Adjust",
        description:
          "Fine-tune the layout by hand in the Layout Studio where judgment beats the algorithm.",
      },
      {
        title: "Export and cut",
        description:
          "Export machine-ready files and record the job, including what became remnant.",
      },
    ],
    integrations: [
      {
        productSlug: "stockroom",
        description:
          "Planned: sheet and remnant stock in Stockroom could feed Cutline's material " +
          "definitions, and cut consumption could flow back as movements.",
      },
      {
        productSlug: "stagepoint",
        description:
          "Planned: cutting jobs could appear as production runs in StagePoint, " +
          "keeping the floor queue complete.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: measured waste percentages could inform true material costs in " +
          "Materialist, so pricing reflects reality.",
      },
    ],
    cta: contactCta("Cutline"),
    seo: {
      title: "Cutline — Cutting & Layout Optimization | Clever Signal",
      description:
        "Cutline by Clever Signal: nesting and cutting-layout software for workshops — " +
        "minimize waste, manage remnants, export machine-ready layouts. In development.",
    },
    accent: "#00ABAD",
    mascot: "/mascots/cutline.png",
    screenshot: "/screenshots/cutline.png",
    screenshotAlt: "Cutline application window (in development)",
    mascotAlt:
      "Dithered brand tile for Cutline: a realistic engraved heron portrait in black ink on solid cyan",
  },
  {
    id: "sublium",
    name: "Sublium",
    slug: "sublium",
    category: "Sublimation prepress",
    status: "in-development",
    positioning:
      "The specialist's prepress bench for sublimation: artwork in, gang sheets out, every setting repeatable.",
    problem:
      "Sublimation production is a chain of small decisions — artwork prep, transfer " +
      "sizing, gang sheet layout, press time and temperature — and most of it lives in " +
      "habit. A reprint of last season's mug never quite matches because nobody wrote " +
      "down the exact settings. Gang sheets get laid out by eye, wasting transfer paper " +
      "and press time. The RIP and the printer do their jobs, but everything before the " +
      "print — the prepress — is improvised.",
    audience: [
      "Independent sublimation businesses",
      "Etsy sellers producing mugs, tumblers, shirts, and blanks",
      "Custom-product shops running repeat sublimation jobs",
    ],
    shortDescription:
      "Sublimation production and prepress. Organize artwork, optimize gang sheets, and " +
      "make every press repeatable.",
    fullDescription:
      "Sublium is a production and prepress platform for sublimation — and it is " +
      "explicitly not a printer driver or a RIP replacement. It works alongside your " +
      "existing printer and RIP software, owning everything before the print: artwork " +
      "organization with immutable originals, deterministic gang-sheet nesting that " +
      "squeezes the most out of every sheet, press recipes with immutable revisions, " +
      "color configuration, and production jobs whose settings can be retrieved exactly " +
      "when the reprint order comes in. A job run six months ago should press exactly " +
      "the same today — Sublium is how.",
    features: [
      {
        title: "Artwork library",
        description:
          "Store artwork with immutable originals — the file you approved is preserved " +
          "exactly, and every derivative traces back to it.",
      },
      {
        title: "Gang Sheet Studio",
        description:
          "Lay out transfers on gang sheets with a deterministic rectangular nesting " +
          "engine. Compare strategies by sheets used, utilization, and cost; the result " +
          "is labeled best-found, never 'optimal', because honesty beats marketing.",
      },
      {
        title: "Product template library",
        description:
          "Versioned templates for mugs, tumblers, shirts, and other blanks, including " +
          "non-rectangular printable regions — the artwork fits the blank, not a bounding box.",
      },
      {
        title: "Color configuration",
        description:
          "Import and manage ICC profiles and printer-ink-paper-substrate " +
          "configurations, with test chart generation. Sublium organizes color; it does " +
          "not pretend to be a RIP's color engine.",
      },
      {
        title: "Press recipe library",
        description:
          "Time, temperature, and pressure as immutable, revisable recipes with test " +
          "records. Experimental, Approved, Retired — the status of every recipe is explicit.",
      },
      {
        title: "Material utilization and costing",
        description:
          "Track estimated versus actual ink and material use separately. Ink estimates " +
          "come only from measured or user-supplied data — never invented.",
      },
      {
        title: "Production jobs and repeats",
        description:
          "Run jobs through a full lifecycle with documents reflecting the actual " +
          "configuration, then retrieve those exact settings for reprints — with changed " +
          "revisions flagged and original-versus-repeat compared.",
      },
    ],
    examples: [
      "A mug seller nests 48 transfers onto gang sheets at 91% utilization instead of " +
        "eyeballing 70% — same paper order lasts a month longer.",
      "A tumbler shop gets a reorder of a design from last spring and pulls the exact " +
        "press recipe, template revision, and color config — the reprint matches.",
      "A shirt presser compares actual ink usage against estimates across ten jobs and " +
        "learns which designs are really the expensive ones.",
    ],
    workflow: [
      {
        title: "Organize artwork",
        description:
          "Import designs into the library; originals are preserved untouched.",
      },
      {
        title: "Configure",
        description:
          "Set up product templates, printer configurations, color profiles, and press recipes.",
      },
      {
        title: "Nest",
        description:
          "Build gang sheets in the Studio and compare nesting strategies.",
      },
      {
        title: "Export and print",
        description:
          "Export print-ready files with independently verified dimensions to your " +
          "existing printer and RIP workflow.",
      },
      {
        title: "Press and record",
        description:
          "Run the job against its press recipe, record actuals, and close it out — " +
          "ready to repeat exactly.",
      },
    ],
    integrations: [
      {
        productSlug: "orderly",
        description:
          "Planned: orders for sublimated products could become production jobs in " +
          "Sublium, keeping fulfillment and production on the same job record.",
      },
      {
        productSlug: "stockroom",
        description:
          "Planned: blanks and transfer paper tracked in Stockroom could feed job " +
          "material requirements.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: measured material and ink consumption could inform true per-unit " +
          "costs in Materialist.",
      },
    ],
    cta: contactCta("Sublium"),
    seo: {
      title: "Sublium — Sublimation Production & Prepress | Clever Signal",
      description:
        "Sublium by Clever Signal: sublimation prepress software — artwork library, " +
        "gang sheet nesting, press recipes, and repeatable production jobs. Works " +
        "alongside your RIP. In development.",
    },
    accent: "#076BE3",
    mascot: "/mascots/sublium.png",
    screenshot: "/screenshots/sublium.png",
    screenshotAlt: "Sublium application window (in development)",
    mascotAlt:
      "Dithered brand tile for Sublium: a realistic engraved chameleon portrait in black ink on solid blue",
  },
  {
    id: "threadcount",
    name: "Threadcount",
    slug: "threadcount",
    category: "Embroidery production",
    status: "in-development",
    positioning:
      "Understand every embroidery file before it touches the machine — then plan the production around facts.",
    problem:
      "An embroidery file arrives and the questions start: how many stitches, how long " +
      "will it run, will it fit this hoop, how much thread will it eat, will it even run " +
      "on my machine? The answers live inside a binary format most people can't read, so " +
      "production gets planned on hope — and hope snaps needles. Digitizing software " +
      "creates the designs; nothing in a small shop's toolkit is dedicated to understanding " +
      "them before production.",
    audience: [
      "Independent embroidery businesses",
      "Etsy and custom-apparel sellers offering embroidery",
      "Commercial embroidery workshops planning machine time",
    ],
    shortDescription:
      "Embroidery production intelligence. Analyze files, plan machine production, and " +
      "calculate true production requirements.",
    fullDescription:
      "Threadcount is a companion to your digitizing software — not a replacement for " +
      "it. You keep creating designs in the tools you know; Threadcount reads the files " +
      "they produce and tells you what production needs to know. Real parsers decode " +
      "stitch data (DST first, with a documented capability registry that says exactly " +
      "what each format yields — and what it can't, like thread colors in DST). A " +
      "deterministic renderer shows the stitch sequence with zoom, pan, and playback. " +
      "Machine profiles, hoop fit checks, thread inventory, time estimates that go beyond " +
      "stitches-divided-by-speed, and Decimal-safe costing turn the file into a production " +
      "plan you can trust.",
    features: [
      {
        title: "Embroidery file analysis",
        description:
          "Real format parsers decode stitch files into a normalized representation. " +
          "A capability registry documents precisely what each format provides — no " +
          "guessing, no silent gaps.",
      },
      {
        title: "Stitch count and dimensions",
        description:
          "Exact stitch counts, design dimensions, and density information, computed " +
          "from the file — not estimated from a thumbnail.",
      },
      {
        title: "Stitch sequence visualization",
        description:
          "Watch the design sew itself in a deterministic renderer with zoom, pan, and " +
          "playback. See the order of operations before the machine commits to it.",
      },
      {
        title: "Thread sequence information",
        description:
          "Thread change sequences and color stops as the file defines them, with " +
          "honest documentation of what the format can and cannot carry.",
      },
      {
        title: "Hoop compatibility",
        description:
          "Check designs against your hoop library with rotation and clearance " +
          "considered — fit is verified, not hoped for.",
      },
      {
        title: "Machine profiles",
        description:
          "A five-state compatibility engine matches designs to your machines' real " +
          "capabilities, so a file never meets a machine it can't run on.",
      },
      {
        title: "Thread inventory and substitutions",
        description:
          "Track thread stock with an approved-substitution library, so a missing cone " +
          "is a solved problem instead of a stalled job.",
      },
      {
        title: "Production-time estimates",
        description:
          "Time estimates that account for more than raw stitch speed — color changes, " +
          "trims, and machine behavior are part of the math.",
      },
      {
        title: "Material consumption and costing",
        description:
          "Thread, bobbin, and stabilizer consumption estimates with Decimal-safe cost " +
          "calculations, so quotes reflect reality.",
      },
      {
        title: "Production grouping",
        description:
          "Group jobs to share setups where it saves real time and money — with the " +
          "savings calculated, not assumed.",
      },
    ],
    examples: [
      "A shop quotes a 12,000-stitch left-chest logo with a time estimate that includes " +
        "six color changes — the quote holds and the job finishes on schedule.",
      "A seller checks a customer's file against her hoop library before accepting the " +
        "order and catches that it needs a rotation the design can't take — renegotiated " +
        "up front, not mid-production.",
      "A workshop groups three jobs on the same thread colors into one setup and sees " +
        "the calculated savings before committing the machine time.",
    ],
    workflow: [
      {
        title: "Import the file",
        description:
          "Load the embroidery file; the parser decodes it and records its version.",
      },
      {
        title: "Inspect",
        description:
          "Review stitch count, dimensions, sequence visualization, and thread order.",
      },
      {
        title: "Verify fit",
        description:
          "Check hoop compatibility and machine compatibility against your profiles.",
      },
      {
        title: "Estimate",
        description:
          "Get production time, material consumption, and cost — the numbers behind the quote.",
      },
      {
        title: "Schedule",
        description:
          "Group with compatible jobs and schedule without machine conflicts.",
      },
    ],
    integrations: [
      {
        productSlug: "orderly",
        description:
          "Planned: embroidery orders could carry their analyzed file data into " +
          "fulfillment, so promises made at quoting time survive to shipping time.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: computed thread and material consumption could feed true " +
          "per-unit costs in Materialist.",
      },
      {
        productSlug: "stagepoint",
        description:
          "Planned: analyzed jobs could enter StagePoint's production queue with " +
          "realistic time estimates attached.",
      },
    ],
    cta: contactCta("Threadcount"),
    seo: {
      title: "Threadcount — Embroidery Production Intelligence | Clever Signal",
      description:
        "Threadcount by Clever Signal: embroidery file analysis, stitch visualization, " +
        "hoop and machine compatibility, time and cost estimates. A companion to " +
        "digitizing software. In development.",
    },
    accent: "#D655BE",
    mascot: "/mascots/threadcount.png",
    screenshot: "/screenshots/threadcount.png",
    screenshotAlt: "Threadcount application window (in development)",
    mascotAlt:
      "Dithered brand tile for Threadcount: a realistic engraved spider portrait in black ink on solid magenta",
  },
  {
    id: "wardrobe",
    name: "Wardrobe",
    slug: "wardrobe",
    category: "Resale inventory management",
    shortCategory: "Resale inventory",
    status: "coming-soon",
    positioning:
      "Every garment tracked from the moment you pick it up to the moment it sells — and after.",
    problem:
      "Clothing resellers run their inventory out of piles, bins, and memory. A dress " +
      "sells and nobody remembers which storage tote it was in. Measurements get " +
      "re-taken for every listing because they were never written down. Defects get " +
      "discovered at packing time. Acquisition costs blur together, so nobody knows " +
      "which sourcing trips actually paid. The business is hundreds of unique, " +
      "one-of-one items — and it's managed like a garage sale.",
    audience: [
      "Independent clothing resellers",
      "Secondhand and vintage clothing businesses",
      "Anyone managing unique-item inventory across marketplaces",
    ],
    shortDescription:
      "Secondhand clothing inventory and resale management. Catalog every garment from " +
      "acquisition through sale.",
    fullDescription:
      "Wardrobe treats every garment as the unique item it is. From acquisition — where " +
      "it came from, what it cost — through cataloging with measurements, condition, " +
      "defects, and photos, to storage location, listing preparation, and sale, each " +
      "piece carries its complete record. Marketplace references keep track of where " +
      "it's listed; sales and returns close the loop with real numbers. When something " +
      "sells, you know exactly which bin to walk to — and exactly what you made on it.",
    features: [
      {
        title: "Garment cataloging",
        description:
          "A dedicated record for every individual piece — brand, size, style, era, " +
          "and the details that make it sellable.",
      },
      {
        title: "Measurements and condition",
        description:
          "Record measurements once and reuse them in every listing. Condition is " +
          "graded explicitly, not remembered vaguely.",
      },
      {
        title: "Defect tracking",
        description:
          "Log flaws with their locations and severity, so listings are accurate and " +
          "returns for 'undisclosed damage' stop happening.",
      },
      {
        title: "Photography workflow",
        description:
          "Track which pieces are photographed and which still need shooting, so the " +
          "photo backlog stops being invisible.",
      },
      {
        title: "Storage locations",
        description:
          "Know which bin, rack, or tote every garment lives in. Fulfillment becomes " +
          "a walk to the right spot, not a treasure hunt.",
      },
      {
        title: "Acquisition costs",
        description:
          "Record what each piece cost and where it came from, so sourcing trips can " +
          "be judged on profit, not vibes.",
      },
      {
        title: "Listing preparation",
        description:
          "Assemble listing-ready details — measurements, condition, photos, " +
          "descriptions — from the catalog record instead of starting over each time.",
      },
      {
        title: "Marketplace references",
        description:
          "Track where each piece is listed across marketplaces, so nothing gets " +
          "double-sold or forgotten.",
      },
      {
        title: "Sales, returns, and availability",
        description:
          "Close the loop with real sale and return records, and always know what's " +
          "actually available to sell right now.",
      },
    ],
    examples: [
      "A vintage seller lists a 1970s dress using measurements recorded at intake — " +
        "no re-measuring, and the defect note about a loose hem is already in the listing.",
      "A reseller sees that estate-sale sourcing averages 3x the profit of thrift-store " +
        "sourcing, and reallocates Saturday mornings accordingly.",
      "An order comes in and the picker walks straight to bin B-14 instead of turning " +
        "the storage room upside down.",
    ],
    workflow: [
      {
        title: "Acquire",
        description:
          "Record where each piece came from and what it cost, at the moment you get it.",
      },
      {
        title: "Catalog",
        description:
          "Enter measurements, condition, defects, and photos — once, properly.",
      },
      {
        title: "Store",
        description:
          "Assign a storage location so every piece is findable.",
      },
      {
        title: "List",
        description:
          "Build listings from the catalog record and track marketplace references.",
      },
      {
        title: "Sell and learn",
        description:
          "Record sales and returns, and let the numbers teach you what sourcing works.",
      },
    ],
    integrations: [
      {
        productSlug: "orderly",
        description:
          "Planned: a sale recorded in Wardrobe could become a fulfillment order in " +
          "Orderly, with the storage location attached for picking.",
      },
      {
        productSlug: "thrivepoint",
        description:
          "Planned: sales history from Wardrobe could feed Thrivepoint's segments, " +
          "showing which categories and price points drive repeat buyers.",
      },
      {
        productSlug: "materialist",
        description:
          "Planned: acquisition and preparation costs from Wardrobe could feed " +
          "per-item profitability views in Materialist.",
      },
    ],
    cta: contactCta("Wardrobe"),
    seo: {
      title: "Wardrobe — Secondhand Clothing Resale Management | Clever Signal",
      description:
        "Wardrobe by Clever Signal: inventory and resale management for secondhand " +
        "clothing — cataloging, measurements, defects, storage, listings, and sales. " +
        "Coming soon.",
    },
    accent: "#BF4215",
    mascot: "/mascots/wardrobe.png",
    mascotAlt:
      "Dithered brand tile for Wardrobe: a realistic engraved magpie portrait in black ink on solid terracotta",
  },
];

export const PRODUCTS_ALL: Product[] = [...FIRST_PRODUCTS, ...MIDDLE_PRODUCTS, ...FINAL_PRODUCTS];

/** Keep a single canonical order for display: directory order. */
export const PRODUCT_ORDER: string[] = [
  "materialist",
  "stockroom",
  "stagepoint",
  "orderly",
  "elixer",
  "cutline",
  "sublium",
  "threadcount",
  "wardrobe",
  "thrivepoint",
];

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS_ALL.find((p) => p.slug === slug);

export const getProductBySlug = getProduct;

export const orderedProducts = (): Product[] =>
  PRODUCT_ORDER.map((slug) => getProduct(slug)).filter(
    (p): p is Product => p !== undefined,
  );

export const productUrl = (slug: string): string => `/products/${slug}`;
