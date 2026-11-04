/**
 * Guides: long-form, practical walkthroughs of how a Clever Signal product
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
      "How Materialist takes you from a pile of ingredient receipts to prices you can defend: in five steps, with your real numbers.",
    intro: [
      "Most makers price the way they've always priced: a spreadsheet snapshot from months ago, a gut feeling, a glance at what competitors charge. Then ingredient prices drift, a little here, a little there, and margins erode one batch at a time, silently.",
      "Materialist exists to replace that guesswork with a simple loop: record what things cost, build your recipes from those costs, decide what each product should earn, and get told the moment reality drifts from the plan. This guide walks that loop, step by step.",
    ],
    steps: [
      {
        title: "Record ingredients with real costs",
        body: "Everything starts with your ingredients and materials, each entered with its actual purchase cost and unit: the soy wax at what you paid per pound, the fragrance oil per ounce, the jars per case. From day one, Materialist keeps a cost history for every ingredient, dated, so you can see exactly when a cost moved and which products it touched.",
        tip: "Enter costs exactly as they appear on your supplier invoices, unit and all. The history is the whole point: six months from now, you'll want to know when the wax got expensive, not just that it is.",
      },
      {
        title: "Build recipes",
        body: "Assemble each product as a recipe: ingredients with their quantities, plus the labor time, packaging materials, and overhead share that go into a finished unit. Materialist rolls it all up into a true per-batch and per-unit cost. Record your actual yield too: batches rarely produce exactly what the formula promises, and waste is a cost like any other.",
        tip: "Don't skip packaging and labor. The classic surprise is discovering the jar costs more than the jam, or the fragrance load costs more than the wax. The unglamorous costs are usually the ones eating your margin.",
      },
      {
        title: "Set margin targets",
        body: "Decide what each product should earn: a target margin per SKU, in your words. These targets are yours; Materialist doesn't set them and doesn't judge them. They're simply the line in the sand that everything else gets measured against.",
        tip: "Be honest rather than ambitious here. A target you actually hold yourself to beats an aspirational one you ignore. You can raise it once the numbers support it.",
      },
      {
        title: "Watch for drift",
        body: "This is where the loop pays for itself. When an ingredient price moves, Materialist re-costs every affected recipe and checks it against your targets. If a product's margin slips below its target, you get an alert naming the product, the old margin, the new one, and what changed, before you price the next run wrong.",
        tip: "Picture the candle maker whose soy wax supplier raised prices 18%. Without this step, she finds out at tax time. With it, she knows which three SKUs slipped, by how much, and can reprice the next wholesale order with the numbers in front of her.",
      },
      {
        title: "Compare and decide",
        body: "With true per-unit costs in hand, compare products side by side on true profit, not revenue. You'll see which items actually earn their shelf space and which ones survive on volume alone. Then decide, product by product: promote it, reprice it, reformulate it, or retire it.",
        tip: "Run this comparison quarterly, like a review. The soap maker who discovered her 'cheaper' formula actually cost more per bar, once fragrance load and cure loss were counted, found it here, not in a shrinking bank balance.",
      },
    ],
    closingTitle: "The loop, not the spreadsheet",
    closing: [
      "That's the whole workflow: record, build, target, watch, decide, then keep going. Costs move, suppliers change, recipes evolve, and the loop keeps your prices honest through all of it.",
      "A spreadsheet can hold the same numbers. What it can't do is tap you on the shoulder when they change. That tap, the margin-drift alert naming the exact product and the exact shortfall, is the reason the loop exists.",
    ],
  },
  {
    slug: "thrivepoint-growth-loop",
    productSlug: "thrivepoint",
    title: "Grow on purpose: the Thrivepoint loop",
    kicker: "Guide",
    description:
      "How Thrivepoint turns random marketing attempts into a disciplined cycle, discover, experiment, launch, measure, improve, where every attempt teaches the next one.",
    intro: [
      "Small businesses usually grow by accident: a post that happened to work, a discount that felt right, a market that went well. Nothing is written down, so nothing compounds. The wins don't teach and the losses don't warn.",
      "Thrivepoint replaces accident with a loop. Every growth idea goes into one backlog, the promising ones become structured experiments with a hypothesis and a budget, results get recorded win or lose, and what you learn feeds the next round. This guide walks the loop.",
    ],
    steps: [
      {
        title: "Discover",
        body: "Collect growth ideas and opportunities in one backlog: a new offer, a market to try, a referral incentive, a bundle. Ground them in what you know: your customers, your margins, and what past experiments already taught you. A backlog turns 'we should do something' into a list you can actually choose from.",
        tip: "Capture ideas the moment they occur, even bad ones. The backlog is cheap; forgetting is expensive. Review it when you have budget and energy, not when you're desperate for sales.",
      },
      {
        title: "Experiment",
        body: "Turn an idea into a structured experiment: a hypothesis ('a 15% fall bundle will lift average order value'), a budget you're willing to spend finding out, and a way to measure the outcome decided in advance. The structure is the point: it keeps a hopeful guess from becoming an open-ended spend.",
        tip: "Write the hypothesis as a sentence you'd be embarrassed to be wrong about. Vague hypotheses produce inconclusive results; specific ones produce decisions.",
      },
      {
        title: "Launch",
        body: "Run the campaign or offer with tracking in place from the start: links, discount codes, and parameters recorded up front, not reconstructed afterward. If you can't trace a sale back to the experiment, the experiment didn't happen.",
        tip: "Set up tracking before you announce anything. The five minutes it takes up front saves the argument later about whether the bump came from the offer or the weather.",
      },
      {
        title: "Measure",
        body: "Record the verdict: won, lost, or inconclusive. A loss is data: it tells you what your customers don't want, which is nearly as valuable as knowing what they do. The evidence stays attached to the experiment either way, so next quarter's you doesn't have to guess what last quarter's you tried.",
        tip: "Call inconclusive results inconclusive. The temptation is to squint until a loss looks like a win; the loop only works if the record is honest.",
      },
      {
        title: "Improve",
        body: "Feed what you learned into the next cycle. A won experiment becomes a repeatable play; a lost one becomes a constraint for the next hypothesis. Growth compounds here: not from one brilliant campaign, but from dozens of small, recorded, learned-from attempts.",
        tip: "Schedule the review, don't wait for motivation. Ten minutes a week turning results into next week's experiment beats a quarterly strategy session every time.",
      },
    ],
    closingTitle: "The compounding business",
    closing: [
      "That's the loop: discover, experiment, launch, measure, improve, then again. Each cycle is small on its own. The power is that none of the learning leaks away.",
      "Most small businesses don't have a growth problem; they have a memory problem. Thrivepoint is the memory. The discipline is yours.",
    ],
  },
  {
    slug: "stockroom-inventory-basics",
    productSlug: "stockroom",
    title: "Know what you own: the Stockroom workflow",
    kicker: "Guide",
    description:
      "How Stockroom builds one honest record of every material, component, and finished good: from first cataloging to the reorder that happens before you run out.",
    intro: [
      "Ask a maker how much of anything they own and you'll usually get a look, then a walk to the shelf. Inventory lives in heads, in notebooks, in the 'I think we have some' zone, until the day a production run stops because the thing you were sure was there isn't.",
      "Stockroom's answer is a single honest record: everything cataloged once, every movement logged, low stock visible before it becomes no stock. This guide walks the five steps that keep that record true.",
    ],
    steps: [
      {
        title: "Catalog",
        body: "Enter your materials, components, and finished products once: each with its unit and supplier. This is the foundation everything else references, so it's worth doing carefully: the wax in pounds from the supplier you actually buy it from, the jars by the case, the finished candles by the unit.",
        tip: "Use the units you buy and use in, not the units that look tidy. If you buy fragrance by the ounce and formulate by the gram, record both: conversions done by hand are where inventory records go to die.",
      },
      {
        title: "Receive",
        body: "Log every delivery as a movement: what arrived, how much, what it cost, and when. The cost and date matter as much as the quantity: they're what let you answer 'what did we pay last time?' and 'is this shipment the expensive one?' months later.",
        tip: "Log receipts the day they arrive. A delivery logged from memory a week later is a delivery half-remembered, and half-remembered inventory is how counts drift.",
      },
      {
        title: "Consume and sell",
        body: "Record materials as they're used in production and finished goods as they're sold or shipped. This is the step most people skip, and it's the step that makes the record honest. Every unit out has to be written down, or the numbers are fiction.",
        tip: "Make recording consumption part of the production routine, not an admin task for later. The person who used the material should be the person who logs it, in the moment.",
      },
      {
        title: "Reorder",
        body: "Watch the low-stock signals and reorder from your recorded supplier information. Because every receipt and every consumption is logged, the reorder point isn't a guess: it's arithmetic. You reorder before you run out, from the supplier you already trust, at the price you already know.",
        tip: "Set reorder points from your actual usage rate, not from anxiety. The movement history tells you how fast each material moves. Let it set the threshold.",
      },
      {
        title: "Review",
        body: "When the numbers need explaining, a count that doesn't match the shelf, a cost that jumped, a material that vanished faster than expected, audit the movement history. Every entry has a date and a quantity, so the story of what happened is always reconstructible.",
        tip: "Do a quick review monthly, not just when something's wrong. Ten minutes scanning movements catches the small drift before it becomes a recount-the-whole-shelf weekend.",
      },
    ],
    closingTitle: "The shelf you can trust",
    closing: [
      "Catalog, receive, consume and sell, reorder, review. Five steps, and the result is something most small businesses have never had: an inventory record that matches reality.",
      "The record is only as honest as the logging, but once the habit exists, the questions it answers ('can we make the holiday run?', 'what did that cost us?') stop being walks to the shelf and start being glances at the screen.",
    ],
  },
  {
    slug: "stagepoint-production-planning",
    productSlug: "stagepoint",
    title: "Plan the floor: the StagePoint workflow",
    kicker: "Guide",
    description:
      "How StagePoint turns a pile of orders and restock needs into a sequenced production plan: knowing what to make, what you can make, and what's next.",
    intro: [
      "Production in a small business is usually planned on sticky notes and in someone's head. Orders pile up with no sense of what runs first, batches get sized by habit instead of demand, and 'can we actually make all of this?' gets answered the hard way, mid-week, mid-batch.",
      "StagePoint's workflow answers six questions in order: what needs making, how much on-hand stock supports, which orders to produce together, what materials each run needs, what each batch costs, and what's next. This guide walks it.",
    ],
    steps: [
      {
        title: "Gather demand",
        body: "Collect everything that needs making: open orders, restock targets, forecasts. Demand is the input to everything downstream, so it needs to be complete: the wholesale order due Friday and the retail shelf that's quietly emptying both count.",
        tip: "Include restock targets, not just orders. The orders you can see are only half the demand; the empty shelf you haven't noticed yet is the other half.",
      },
      {
        title: "Check feasibility",
        body: "Before committing to anything, see how many units your on-hand stock actually supports and what materials each candidate run would require. This is the step that prevents the classic disaster: starting a batch and discovering the missing material halfway through.",
        tip: "Treat 'we probably have enough' as a no. Feasibility is a calculation, not a feeling: if the numbers say short, believe them now rather than discovering it Thursday.",
      },
      {
        title: "Build runs",
        body: "Group compatible work into batches sized to demand, stock, and capacity. Compatibility matters: same scent family, same equipment, same setup: grouping the right jobs together is where the real efficiency lives, not just in bigger batches.",
        tip: "Group by changeover cost, not just by product. Two different products that share a setup belong in the same run; two identical products with different deadlines might not.",
      },
      {
        title: "Schedule",
        body: "Sequence the runs against deadlines and floor capacity so the week has an order. The schedule is the answer to 'what's next?' that otherwise gets asked every morning, and answered differently every time.",
        tip: "Leave slack in the schedule on purpose. A plan with no buffer is a plan that breaks at the first surprise, and there is always a first surprise.",
      },
      {
        title: "Execute and record",
        body: "Work the queue, update each run's status as it completes, planned, in progress, done, and keep the history. The history is the institutional memory: what the floor actually produced, not what the plan hoped it would.",
        tip: "Record what actually happened, including the deviations. A history that says 'ran 40 units' when you ran 32 is worse than no history: it teaches the wrong lessons.",
      },
    ],
    closingTitle: "The floor, answered",
    closing: [
      "Gather, check, build, schedule, execute and record. The workflow turns the morning's chaos ('what do we make today?') into a queue with an order.",
      "And the history compounds: every recorded run makes the next plan's feasibility check a little more accurate, until 'can we make all of this?' has a real answer before you ask.",
    ],
  },
  {
    slug: "orderly-order-lifecycle",
    productSlug: "orderly",
    title: "Every order, in order: the Orderly lifecycle",
    kicker: "Guide",
    description:
      "How Orderly moves each order from inbox to doorstep, captured, triaged, fulfilled, delivered, and resolved, so nothing lives in someone's head or inbox.",
    intro: [
      "Orders come from everywhere: the website, Etsy, DMs, email, the market stall's paper slips. Each channel has its own inbox, and the fulfillment status of any given order lives wherever someone last thought about it. That's how orders get missed, doubled, or shipped to the wrong address.",
      "Orderly gives every order one home and one lifecycle: capture, triage, fulfill, deliver, resolve. Twelve states, no ambiguity about where anything stands. This guide walks an order through all of it.",
    ],
    steps: [
      {
        title: "Capture",
        body: "Every order lands in the inbox: pulled from your channels or entered directly for the ones that arrive by DM, phone, or paper slip. The inbox is the single front door: if an order exists, it's here, and if it's not here, it doesn't exist yet.",
        tip: "Enter the odd-channel orders immediately, especially market-stall slips. The orders that bypass the system are always the ones that go wrong.",
      },
      {
        title: "Triage",
        body: "Orders move through the lifecycle states: confirmed, ready, in fulfillment. Triage is the decision point: what's real, what's complete, what needs attention before it can move. An order that can't be fulfilled as-is gets flagged here, not discovered at packing time.",
        tip: "Triage daily, even when it's quiet. A five-minute scan keeps the queue honest; a weekly pile-up turns triage into archaeology.",
      },
      {
        title: "Fulfill",
        body: "Work the pick and pack queues. Reality is allowed: ship partial or complete as the situation demands, across multiple shipments when one box can't do it. The system tracks what's gone and what's still owed, so a partial shipment is a recorded state, not a loose end.",
        tip: "Record partial shipments the moment they leave. 'I'll update it later' is how customers end up receiving the same item twice, or never.",
      },
      {
        title: "Deliver",
        body: "Record shipments and completion. The order is done when the customer got what they ordered: not when the label printed, not when the box left. Closing the loop here is what makes the history trustworthy.",
        tip: "Confirm delivery against the original order, line by line, before marking complete. The last 30 seconds of checking prevents the 'where's my other item?' message.",
      },
      {
        title: "Resolve",
        body: "Returns and exceptions get handled to a recorded close. A return isn't done when the item comes back: it's done when the refund or replacement is recorded and the case is closed. Open threads are where customer goodwill goes to die.",
        tip: "Give every exception a reason code, even a rough one. Patterns in returns ('wrong size', 'arrived damaged') are product feedback wearing a support ticket's clothes.",
      },
    ],
    closingTitle: "Nothing in anyone's head",
    closing: [
      "Capture, triage, fulfill, deliver, resolve. Every order, same path, same record. The question 'where's that order?' always has the same answer: look it up.",
      "The real product here isn't the software: it's the absence of anxiety. When every order has a state and every state is visible, the business stops running on memory and starts running on record.",
    ],
  },
  {
    slug: "elixer-formulation-workflow",
    productSlug: "elixer",
    title: "From ingredient to batch: the Elixer workflow",
    kicker: "Guide",
    description:
      "How Elixer takes a product idea from ingredient library to approved, reproducible formula: composed, tested, revised, and scaled with the math handled.",
    intro: [
      "Developing a formula, a candle scent, a soap recipe, a sauce, usually means a notebook full of crossed-out ratios, a memory of 'the batch that worked,' and math done on a phone calculator at scaling time. Reproducing the winner is harder than finding it.",
      "Elixer's workflow makes formulation deliberate: a typed ingredient library, a studio for composing in whatever base suits the product, trials with recorded revisions, approval that locks the winner, and batch scaling where the math is done for you. This guide walks it.",
    ],
    steps: [
      {
        title: "Build the ingredient library",
        body: "Catalog your ingredients with their properties and costs, typed and unit-aware. The library is the palette you formulate from: every ingredient entered once, with the units you actually use, so every formula downstream inherits clean data instead of conversions.",
        tip: "Record the properties that matter for your craft, not every property that exists. A library with ten useful fields per ingredient beats one with fifty empty ones.",
      },
      {
        title: "Formulate",
        body: "Compose in the Formulation Studio, in whatever base suits the product: weight, volume, count, or percentage. The studio handles the basis conversions, so you think in ratios and it thinks in grams. Every composition is exact, and every line carries its cost.",
        tip: "Formulate in percentages even if you produce in weight. Percentages scale cleanly and make the formula readable a year from now; weights are for the batch sheet, not the recipe.",
      },
      {
        title: "Test",
        body: "Run trials in the experiment lab and iterate on recorded revisions. Each trial is a revision (what changed, what resulted), so the path from attempt one to the winner is a visible trail, not a pile of sticky notes. The failed trials are data, not waste.",
        tip: "Change one thing per trial. The lab records revisions faithfully, but only you can keep the experiment clean: two changes at once and you'll never know which one mattered.",
      },
      {
        title: "Approve",
        body: "Promote the winning revision to the library as the current formula. Approval is a deliberate act with a record: this revision, on this date, became the formula. From here on, production uses this one: not the notebook, not memory.",
        tip: "Write down why it won, in a sentence. 'Batch 7: best cold throw, clean burn, no frosting' will save you from re-litigating the decision six months later.",
      },
      {
        title: "Produce and record",
        body: "Scale to batch size, the studio does the math, make it, and capture planned versus actual. The comparison is the quality system: did the batch match the formula? Where did it drift? The record closes the loop back to the library.",
        tip: "Record actuals even when the batch was perfect, especially when it was perfect. 'Planned = actual' is the most valuable data point you have: it's proof the formula reproduces.",
      },
    ],
    closingTitle: "The reproducible product",
    closing: [
      "Library, formulate, test, approve, produce and record. The workflow turns 'the batch that worked' from a memory into a record: one that scales, reproduces, and survives staff changes.",
      "Consistency is the product, really. Customers come back because the second candle smells like the first. This is how you make sure it does.",
    ],
  },
  {
    slug: "cutline-nesting-workflow",
    productSlug: "cutline",
    title: "Waste less: the Cutline workflow",
    kicker: "Guide",
    description:
      "How Cutline turns parts and stock into optimized cutting layouts: imported, nested by the engine, fine-tuned by hand, and exported ready to cut.",
    intro: [
      "Every cut wastes something: the offcut too small to use, the sheet bought for one job's leftovers, the 'we'll use the remnant someday' pile that never gets used. Most shops nest by eye, which means they nest by habit, and habit wastes material.",
      "Cutline's workflow is import, define, optimize, adjust, export. The engine does the combinatorial heavy lifting; your judgment handles the rest. This guide walks a job from parts list to cut-ready layout.",
    ],
    steps: [
      {
        title: "Import designs",
        body: "Bring in the parts to cut, in the formats your tools already produce. No redrawing, no re-entering dimensions by hand: the parts list comes from where the design already lives.",
        tip: "Clean up the parts list before importing: exact quantities, correct dimensions. The optimizer is only as good as its input, and garbage in means beautifully nested garbage.",
      },
      {
        title: "Define material",
        body: "Set up your sheets, rolls, and boards with their dimensions, plus your remnant inventory, the offcuts from previous jobs. Remnants are first-class material here, not an afterthought: the engine would rather use your leftovers than your new stock.",
        tip: "Measure your remnants honestly, including the unusable edges. An optimistic remnant dimension produces a layout that doesn't fit the real offcut.",
      },
      {
        title: "Optimize",
        body: "Run the nesting engine and compare strategies by waste, utilization, and cost. The results are labeled best-found, never 'optimal': nesting is genuinely hard math, and honesty about that beats a marketing claim. Compare a few strategies; the differences are real.",
        tip: "Compare at least two strategies before committing. The gap between the obvious layout and the best-found one is usually where the money is.",
      },
      {
        title: "Adjust",
        body: "Fine-tune the layout by hand in the Layout Studio where judgment beats the algorithm. Maybe a part needs grain direction the engine doesn't know about, or you want the remnant shaped for a specific future job. The engine proposes; you dispose.",
        tip: "Adjust for the constraints only you know: grain, defects in the sheet, clamp zones. Tell the engine about them when you can; override by hand when you can't.",
      },
      {
        title: "Export and cut",
        body: "Export machine-ready files and record the job, including what became remnant. The remnant record is the loop closing: today's offcut is tomorrow's first-class material, already measured and waiting.",
        tip: "Label the physical remnant to match the record before it goes on the pile. An unmeasured, unlabeled offcut is not inventory: it's clutter.",
      },
    ],
    closingTitle: "The pile that shrinks",
    closing: [
      "Import, define, optimize, adjust, export. Every job run this way wastes a little less than the last one would have, and the remnant loop means the savings compound.",
      "Material is money in flat form. This workflow is how you stop paying for the parts of the sheet you throw away.",
    ],
  },
  {
    slug: "sublium-prepress-workflow",
    productSlug: "sublium",
    title: "Repeatable press runs: the Sublium workflow",
    kicker: "Guide",
    description:
      "How Sublium turns sublimation prepress from improvisation into a repeatable system: artwork organized, settings configured, sheets nested, jobs recorded.",
    intro: [
      "Sublimation production is a chain of small decisions, artwork prep, transfer sizing, gang sheet layout, press time and temperature, and most of it lives in habit. A reprint of last season's mug never quite matches, because nobody wrote down the exact settings. Gang sheets get laid out by eye, wasting transfer paper and press time.",
      "Sublium owns everything before the print: artwork with immutable originals, deterministic gang-sheet nesting, press recipes with immutable revisions, and production jobs whose settings can be retrieved exactly. This guide walks the workflow that makes every press repeatable.",
    ],
    steps: [
      {
        title: "Organize artwork",
        body: "Import designs into the library. Originals are preserved untouched: the file you approved is kept exactly, and every derivative traces back to it. When a reprint needs the original six months later, it's there, byte for byte.",
        tip: "Name artwork for retrieval, not for the moment: design, product, season. 'mug-sunburst-v2' will make sense in a year; 'final-FINAL2' will not.",
      },
      {
        title: "Configure",
        body: "Set up product templates, printer configurations, color profiles, and press recipes. This is the unglamorous setup work that pays off forever: templates for your mugs, tumblers, and shirts; press recipes with time, temperature, and pressure as immutable, revisable records.",
        tip: "Create the press recipe before the job, not during it. A recipe written mid-press is a guess; a recipe written beforehand and refined with test records is a standard.",
      },
      {
        title: "Nest",
        body: "Build gang sheets in the Studio and compare nesting strategies by sheets used, utilization, and cost. The engine is deterministic, same inputs, same layout, every time, and results are labeled best-found, never 'optimal'.",
        tip: "Nest for the job you have, not the sheet you wish you had. Running the optimizer against your actual transfer sizes beats eyeballing every time: the mug seller who went from 70% to 91% utilization didn't change printers, just layouts.",
      },
      {
        title: "Export and print",
        body: "Export print-ready files with independently verified dimensions, into your existing printer and RIP workflow. Sublium is explicitly not a printer driver or RIP replacement: it handles everything before the print and hands off cleanly.",
        tip: "Verify dimensions on the export, not on the press. Catching a sizing error in the file is free; catching it on a pressed tumbler is a blank and an hour.",
      },
      {
        title: "Press and record",
        body: "Run the job against its press recipe, record actuals, and close it out. The job record, artwork revision, template revision, press recipe, color config, is what makes the reprint exact. A job run six months ago should press exactly the same today, and now it can.",
        tip: "Record the actuals even when everything went perfectly. The job record is only as useful as its honesty: 'ran fine' teaches nothing, but time, temp, and pressure teach everything.",
      },
    ],
    closingTitle: "The reprint that matches",
    closing: [
      "Organize, configure, nest, export and print, press and record. The workflow turns prepress from improvisation into a system, and the system turns reprints from anxiety into routine.",
      "The real product isn't the gang sheet. It's the confidence that last spring's design, pressed today, comes out identical. That's what the records are for.",
    ],
  },
  {
    slug: "threadcount-file-to-production",
    productSlug: "threadcount",
    title: "Know the file before the machine: the Threadcount workflow",
    kicker: "Guide",
    description:
      "How Threadcount takes an embroidery file from unknown quantity to planned production: parsed, inspected, fit-checked, estimated, and scheduled on facts.",
    intro: [
      "An embroidery file arrives, from a client, a digitizer, a marketplace, and the honest truth is you don't know what it is yet. How many stitches? What size, really? Will it fit the hoop? How long will it take? How much thread will it eat? Most shops answer these by running it and finding out.",
      "Threadcount's workflow answers them before the machine moves: import and parse, inspect the guts, verify fit against your hoops and machines, estimate time and materials, then schedule. This guide walks a file through all five steps.",
    ],
    steps: [
      {
        title: "Import the file",
        body: "Load the embroidery file. The parser decodes it into a normalized stitch representation and records which parser version did the work, so the analysis is traceable, not magic. What the format actually contains is documented honestly; what it can't tell you isn't pretended.",
        tip: "Keep the original file alongside the analysis. If a question comes up mid-production, you want the source, not your memory of the source.",
      },
      {
        title: "Inspect",
        body: "Review the stitch count, dimensions, stitch sequence visualization, and thread order. This is where the file stops being a black box: you can see the design's structure, where the jumps and trims are, how the colors sequence: the things that determine how it will actually sew.",
        tip: "Look at the trim and jump counts, not just stitches. A 10,000-stitch design with 200 trims sews very differently from one with 20: the inspection tells you which you're holding.",
      },
      {
        title: "Verify fit",
        body: "Check hoop compatibility and machine compatibility against your profiles. The five-state check tells you plainly: fits, doesn't fit, or insufficient information to say. No guessing, no 'probably fine', and no false confidence either.",
        tip: "Trust 'insufficient information' when you get it. It's the system refusing to guess about your machine. It's exactly what you want it to do before thread meets fabric.",
      },
      {
        title: "Estimate",
        body: "Get production time, material consumption, and cost: the numbers behind the quote. The time estimate goes beyond naive stitches-divided-by-speed to include the overheads that actually consume the clock. Thread, bobbin, and stabilizer consumption come from documented formulas, labeled as estimates.",
        tip: "Quote from the estimate, not from the stitch count. The client pays for machine time and materials, and the estimate is the first honest accounting of both you've had for this file.",
      },
      {
        title: "Schedule",
        body: "Group the job with compatible work and schedule it without machine conflicts. Jobs that share thread colors, hoop sizes, or stabilizer can run together efficiently, and the schedule knows which machines are free when, so nothing gets double-booked.",
        tip: "Group by setup, not just by deadline. Two jobs sharing a hoop and thread color back-to-back save more time than any scheduling cleverness applied to incompatible jobs.",
      },
    ],
    closingTitle: "No surprises at the machine",
    closing: [
      "Import, inspect, verify fit, estimate, schedule. The file goes from unknown to fully understood before a single stitch is sewn.",
      "Embroidery's expensive mistakes, the ruined garment, the missed deadline, the underpriced quote, almost all come from not knowing the file. This workflow is how you always know.",
    ],
  },
  {
    slug: "wardrobe-resale-workflow",
    productSlug: "wardrobe",
    title: "From thrift rack to sold: the Wardrobe workflow",
    kicker: "Guide",
    description:
      "How Wardrobe tracks every garment from acquisition to sale: cataloged once, stored findably, listed efficiently, and measured so your sourcing gets smarter.",
    intro: [
      "Reselling secondhand clothing looks simple from the outside: buy low, sell higher. The reality is hundreds of individual items, each with its own measurements, condition, defects, photos, storage spot, listings, and sale, and the whole business collapses into chaos the moment any of that lives only in your head.",
      "Wardrobe treats each garment as an individual with a lifecycle: acquire, catalog, store, list, sell and learn. This guide walks a piece of clothing through all five stages.",
    ],
    steps: [
      {
        title: "Acquire",
        body: "Record where each piece came from and what it cost, at the moment you get it. The sourcing record, estate sale, thrift store, buy-out, plus the true acquisition cost is the foundation of every profit calculation later. Memory fades; the record doesn't.",
        tip: "Include the full acquisition cost: price, plus the share of entry fees, gas, and time if you track it. Profit computed on the sticker price alone is profit overstated.",
      },
      {
        title: "Catalog",
        body: "Enter measurements, condition, defects, and photos, once, properly. This is the most labor-intensive step and the most valuable: a complete catalog record feeds the listing, answers buyer questions before they're asked, and protects you in disputes.",
        tip: "Photograph and measure in the same session, in the same order, every time. A consistent routine turns cataloging from a chore into a rhythm, and consistent records are what make the later steps fast.",
      },
      {
        title: "Store",
        body: "Assign a storage location so every piece is findable. When it sells, sometimes months later, you need to lay hands on that exact garment in minutes, not tear the storage room apart. A location on the record turns 'where is it?' into a lookup.",
        tip: "Use locations coarse enough to maintain: bin numbers, shelf zones. A system with 200 micro-locations collapses; one with 20 zones survives.",
      },
      {
        title: "List",
        body: "Build listings from the catalog record and track marketplace references. Because the measurements, condition notes, and photos already exist, listing becomes assembly rather than authoring, and every listing links back to the one true record.",
        tip: "Write the listing from the catalog, never from memory. The defect you forgot to mention is the return you'll have to accept.",
      },
      {
        title: "Sell and learn",
        body: "Record sales and returns, and let the numbers teach you what sourcing works. Which acquisition sources produce the best margins? Which categories move fastest? Which defects cause returns? The answers are in your own history, if you recorded it.",
        tip: "Review sourcing ROI quarterly: profit per source, per category. The numbers will tell you where to spend your Saturday mornings, and where to stop going.",
      },
    ],
    closingTitle: "The business that remembers",
    closing: [
      "Acquire, catalog, store, list, sell and learn. Every garment tracked as an individual, every sale teaching the next buy.",
      "Resale rewards the sourced-well and punishes the disorganized. This workflow is how a one-person operation handles hundreds of unique items without losing one, or losing track of what any of it earned.",
    ],
  },
];
