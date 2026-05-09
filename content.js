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
    description: "I work at the intersection of applied AI and research — designing systems that are powerful, principled, and built to last in the real world.",
    stats: [
      { number: "IEEE",  label: "Senior Grade" },
      { number: "2",     label: "Publications"  },
      { number: "12+",   label: "Research Areas" },
    ],
  },

  // ── ABOUT SECTION ─────────────────────────────────────────
  about: {
    bio: [
      "I build AI systems that work in the real world — not just in demos. With hands-on experience delivering enterprise-scale Generative AI platforms in production, I specialize in RAG-based architectures, multi-agent systems, and MCP-enabled context management, backed by a deep command of scalable cloud infrastructure.",
      "My work spans the full stack of modern AI delivery: from data ingestion pipelines and CI/CD workflows to secure cloud-native deployments — always with reliability and measurable impact as the north star.",
      "Beyond engineering, I contribute to the broader AI research community as a recognized IEEE Senior Grade member, conference session chair, and peer reviewer — bridging the gap between cutting-edge research and production-grade practice.",
      "I started this site to share what I'm learning, building, and thinking about — for practitioners, researchers, and anyone serious about where AI is headed.",
    ],
    expertise: [
      "Building AI that works beyond the prototype",
      "Designing multi-agent systems for real-world scale",
      "Bridging research and production engineering",
      "Cloud-native infrastructure for AI platforms",
      "Turning complex AI into measurable business value",
    ],
  },

  // ── ARTICLES SECTION ──────────────────────────────────────
  // To add a new article, copy one block and fill in the fields.
  // Set `comingSoon: true` to show a greyed-out placeholder.
  articles: [
    {
      tag: "LLMs · Architecture",
      publisher: "IEEE",
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
  research: [
    { icon: "⬡", title: "Generative AI",            desc: "Large-scale generative systems, from LLMs to multimodal models and beyond." },
    { icon: "◈", title: "Agentic AI",               desc: "Autonomous reasoning, multi-agent orchestration, and tool-use frameworks." },
    { icon: "◯", title: "Trustworthy AI",           desc: "Reliability, safety, and alignment in production AI systems at scale." },
    { icon: "▣", title: "MCP & Context Engineering",desc: "Model Context Protocol, memory systems, and adaptive context management." },
    { icon: "◇", title: "RAG Systems",              desc: "Retrieval-augmented generation architectures and dynamic knowledge grounding." },
    { icon: "▲", title: "AI Infrastructure",        desc: "Cloud-native pipelines, CI/CD, and scalable AI deployment at enterprise scale." },
    { icon: "○", title: "Prompt Engineering",       desc: "Systematic design of prompts for reliable, repeatable model behavior." },
    { icon: "□", title: "AI Strategy",              desc: "Enterprise AI adoption, ROI frameworks, and responsible scaling practices." },
    { icon: "⬟", title: "Multimodal AI",            desc: "Systems that reason across text, image, audio, and structured data." },
    { icon: "◉", title: "Vector Databases",         desc: "Semantic search, embeddings, and knowledge retrieval at scale." },
    { icon: "⬠", title: "Fine-tuning & RLHF",      desc: "Adapting foundation models for domain-specific tasks and behavior alignment." },
    { icon: "▽", title: "AI Governance",            desc: "Policy, ethics, and compliance frameworks for building responsible AI." },
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
      {
        label: "Twitter / X — coming soon",
        url: "#",
        icon: "twitter",
        active: false,   // set to true and add url when ready
      },
      {
        label: "GitHub — coming soon",
        url: "#",
        icon: "github",
        active: false,   // set to true and add url when ready
      },
    ],
  },

};
