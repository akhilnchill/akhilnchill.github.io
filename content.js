/**
 * ============================================================
 *  AKHIL KODURI — SITE CONTENT
 *  Edit this file to update any content on the site.
 *  No coding knowledge needed — just update the text values.
 * ============================================================
 */

const SITE = {

  // ── HERO SECTION ──────────────────────────────────────────
  hero: {
    eyebrow: "AI Practitioner & Researcher",
    heading1: "Building the future",
    heading2: "of intelligence",        // this word renders in gold
    description: "Not a portfolio — a public commitment to making AI more accessible, better understood, and more responsibly built. I'm Akhil Koduri: I research, engineer, and write at the frontier of AI to bring it closer to the practitioners and communities who will be shaped by it.",
    stats: [
      { number: "IEEE",  label: "Senior Grade" },
      { number: "5+",    label: "Publications"  },
      { number: "1",     label: "Patent Filed"  },
      { number: "12+",   label: "Research Areas" },
    ],
  },

  // ── ABOUT SECTION ─────────────────────────────────────────
  about: {
    bio: [
      "I architect production AI systems that set the standard — not just meet it. Specializing in Generative AI platform design at enterprise scale, I define technical direction for RAG architectures, multi-agent orchestration, and MCP-enabled context infrastructure: the foundational systems that determine how AI actually performs when it matters.",
      "My work operates across the full AI delivery stack — from data ingestion and retrieval infrastructure to secure, cloud-native deployments across Azure, AWS, and GCP. At the principal level, the mandate extends beyond execution: establishing architectural principles, scalability patterns, and engineering standards that compound across teams and shape how organizations build AI at scale.",
      "I extend this work into the broader research community as an IEEE Senior Grade member, conference session chair, and peer reviewer — contributing to how the field defines trustworthy, production-grade AI. With 5+ peer-reviewed publications and a filed US patent in Generative AI data ingestion, I help set the technical agenda, not just follow it.",
      "My foundation is deliberately deep: a PhD in Information Technology with an AI specialization (GPA 3.9/4.0), grounded in graduate-level statistical and machine learning research — giving me the theoretical fluency to critically evaluate, challenge, and extend the systems I design.",
      "This site is where I think in public — sharing what I'm building, researching, and learning for the practitioners and researchers serious about where AI is headed.",
    ],
    expertise: [
      "Building AI that works beyond the prototype",
      "Designing multi-agent and agentic RAG systems at scale",
      "MCP server infrastructure and context engineering",
      "Cloud-native AI deployment across Azure, AWS, and GCP",
      "Bridging research and production engineering",
      "Turning complex AI into measurable business value",
    ],
  },

  // ── ARTICLES SECTION ──────────────────────────────────────
  // To add a new article, copy one block and fill in the fields.
  // Set `comingSoon: true` to show a greyed-out placeholder.
  articles: [
    {
      tag: "LLMs · Architecture",
      publisher: "IEEE SoutheastCon",
      title: "Hybrid LLM Architectures for On-Device and Cloud-Based Intelligence in Regulated Industries",
      excerpt: "Exploring how hybrid large language model architectures can balance on-device inference with cloud-based intelligence — with a focus on compliance, privacy, and performance in regulated sectors.",
      meta: "IEEE · Peer Reviewed",
      url: "https://ieeexplore.ieee.org/document/11476177",
    },
    {
      tag: "RAG · Memory Systems",
      publisher: "IJISRT",
      title: "Dynamic Memory Updating in RAG: Lifelong Learning and Adaptation",
      excerpt: "Conventional RAG systems rely on static vector stores — limiting their utility in fast-changing environments. This paper analyzes architectures that support continuous memory addition, deletion, consolidation, and re-weighting, transitioning RAG from static retrieval to lifelong learning.",
      meta: "January 2026 · IJISRT Vol. 11",
      url: "https://www.ijisrt.com/dynamic-memory-updating-in-rag-lifelong-learning-and-adaptation",
    },
    {
      tag: "AI Infrastructure · Multi-Cloud",
      publisher: "IEEE ICSFT",
      title: "Cloudburst AI: Orchestrating SRE-Driven AI Inference Across Multi-Cloud and Edge Zones",
      excerpt: "Presents Cloudburst AI, an SRE-driven orchestration framework that automates AI inference placement, reliability governance, and failure resilience across multi-cloud and edge environments — with adaptive routing and error-budget execution to sustain SLOs at scale.",
      meta: "May 2026 · IEEE ICSFT",
      url: "https://ieeexplore.ieee.org/document/11506930",
    },
    {
      tag: "LLMs · DevOps",
      publisher: "IEEE ICSFT",
      title: "Cross-Cloud Large Language Model Orchestration for Secure DevOps and Data Engineering in Enterprise AI",
      excerpt: "A comprehensive study of cross-cloud LLM orchestration architectures for secure DevOps and enterprise data engineering — analyzing how orchestration layers abstract model execution, enforce policy, and control data flow across providers while preserving compliance and observability.",
      meta: "May 2026 · IEEE ICSFT",
      url: "https://ieeexplore.ieee.org/document/11507592",
    },
    {
      tag: "RAG · Agentic AI",
      publisher: "IEEE COMPSAC",
      title: "Trust-Aware Agentic RAG: A Hybrid Vector-Graph Architectural Framework for Regulated AI Systems",
      excerpt: "Proposes a trust-aware agentic RAG architecture combining hybrid vector-graph retrieval with compliance-first design — enabling autonomous RAG systems to operate reliably and safely in regulated enterprise environments.",
      meta: "2026 · IEEE COMPSAC",
      url: "https://doi.org/10.5281/zenodo.20693309",
    },
    // ── ADD MORE ARTICLES BELOW ──
    // {
    //   tag: "Your Tag",
    //   publisher: "Publisher Name",
    //   title: "Your Article Title",
    //   excerpt: "A short description of the article.",
    //   meta: "Month Year · Publication",
    //   url: "https://link-to-article.com",
    // },
  ],

  // ── RESEARCH TILES ────────────────────────────────────────
  // Each tile has an icon (any single character/emoji), title, and desc.
  // Tiles with a `link` field are clickable and open that topic page.
  // Remove `link` (or leave it out) to keep a tile non-clickable.
  research: [
    { icon: "⬡", title: "Generative AI",             desc: "Large-scale generative systems, from LLMs to multimodal models and beyond." },
    { icon: "◈", title: "Agentic AI",                desc: "Autonomous reasoning, multi-agent orchestration, and tool-use frameworks.",      link: "explorations/agents.html" },
    { icon: "◯", title: "Trustworthy AI",            desc: "Reliability, safety, and alignment in production AI systems at scale." },
    { icon: "▣", title: "MCP & Context Engineering", desc: "Model Context Protocol, memory systems, and adaptive context management.",       link: "explorations/mcp.html" },
    { icon: "◇", title: "RAG Systems",               desc: "Retrieval-augmented generation architectures and dynamic knowledge grounding.",  link: "explorations/rag.html" },
    { icon: "▲", title: "AI Infrastructure",         desc: "Cloud-native pipelines, CI/CD, and scalable AI deployment at enterprise scale." },
    { icon: "○", title: "Prompt Engineering",        desc: "Systematic design of prompts for reliable, repeatable model behavior.",          link: "explorations/prompt-engineering.html" },
    { icon: "□", title: "AI Strategy",               desc: "Enterprise AI adoption, ROI frameworks, and responsible scaling practices." },
    { icon: "⬟", title: "Multimodal AI",             desc: "Systems that reason across text, image, audio, and structured data." },
    { icon: "◉", title: "Vector Databases",          desc: "Semantic search, embeddings, and knowledge retrieval at scale." },
    { icon: "⬠", title: "Fine-tuning & RLHF",       desc: "Adapting foundation models for domain-specific tasks and behavior alignment." },
    { icon: "▽", title: "AI Governance",             desc: "Policy, ethics, and compliance frameworks for building responsible AI.",         link: "explorations/governance.html" },
  ],

  // ── CONTACT SECTION ───────────────────────────────────────
  contact: {
    note: "I'm always open to conversations about AI research, collaboration opportunities, or speaking engagements. Feel free to reach out via any of the channels below.",
    links: [
      {
        label: "theakhilkoduri@gmail.com",
        url: "mailto:theakhilkoduri@gmail.com",
        icon: "email",
        active: true,
      },
      {
        label: "linkedin.com/in/akhilksrk",
        url: "https://www.linkedin.com/in/akhilksrk",
        icon: "linkedin",
        active: true,
      },
    ],
  },

};
