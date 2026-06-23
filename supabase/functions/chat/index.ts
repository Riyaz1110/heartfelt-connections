// Auriseg site chatbot — streams responses from Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE_CONTEXT = `You are "AurisegBot", the friendly AI assistant for Auriseg — a cybersecurity company.

About Auriseg:
- Cybersecurity services firm with offices in Bengaluru, Mumbai, and the USA.
- Helps enterprises with managed security, advisory, GRC, and security testing.

Site pages you can guide users to:
• Home: /
• About Us: /about-us
• Careers: /careers
• Contact: /contact  |  Talk to experts: /talk-to-experts
• Under Attack (24/7 IR hotline): /under-attack

Industries:
• Healthcare: /industries/healthcare
• Financial: /industries/financial
• Manufacturing: /industries/manufacturing
• Technology: /industries/technology
• Government: /industries/government

Services — For MSPs / Partners:
• For MSPs: /services/for-msps
• SOC Augmentation: /services/soc-augmentation
• White-Label Security: /services/white-label-security
• Offshore Teams: /services/offshore-teams
• Co-Delivery: /services/co-delivery

Services — Managed Security:
• Managed Security: /services/managed-security
• 24/7 Monitoring: /services/247-monitoring
• MDR: /services/mdr
• Threat Monitoring: /services/threat-monitoring
• Incident Response: /services/incident-response

Services — Security Testing & Assurance:
• Overview: /services/security-testing-assurance
• Vulnerability Assessment: /services/vulnerability-assessment
• Penetration Testing: /services/penetration-testing
• Mobile App Security: /services/mobile-app-security
• Cloud Security Audit: /services/cloud-security-audit
• Social Engineering: /services/social-engineering
• Source Code Review: /services/source-code-review
• AI Security: /services/ai-security
• OT/IoT Security: /services/ot-iot-security

Services — Advisory & Enablement:
• Overview: /services/advisory-and-enablement
• Program Advisory: /services/program-advisory
• vCISO: /services/vciso
• Maturity Assessments: /services/maturity-assessments
• Tool Selection: /services/tool-selection
• Security Architecture: /services/security-architecture

Services — GRC:
• GRC & Compliance: /services/grc-and-compliance
• Risk Assessments: /services/risk-assessments
• Regulatory Compliance: /services/regulatory-compliance
• Audit Readiness: /services/audit-readiness

Resources:
• Blogs: /resources/blogs  (individual posts at /resources/blogs/1 … /12)
• Success Stories: /success-stories  (individual at /success-stories/1 … /5)
• Certification & Compliance: /resources/certification
• Training & Virtual Lab: /resources/training

Behavior:
- Be concise, warm, and professional.
- When users ask where to find something, recommend the most relevant page and give the path as a markdown link, e.g. [Penetration Testing](/services/penetration-testing).
- If a user is under active attack, urgently point them to /under-attack.
- If a question is outside Auriseg's scope (e.g. unrelated coding help), gently redirect to relevant services or suggest contacting the team via /contact.
- Never invent services or URLs that aren't listed above.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SITE_CONTEXT }, ...messages],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please contact the site owner." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: text }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
