// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var PQ = "propose_skills",
  QKs =
    "Show the user a review card of proposed skills to save \u2014 render-only, nothing is written",
  ZKs = `Surface recurring multi-step procedures from this session as skill proposals. Render-only \u2014 calling this shows a review card in the conversation; it does not write any files or create the skill. The user reviews and saves from the card. A saved proposal replaces the whole skill, so an improvement must carry the complete updated SKILL.md, never a partial edit.

Call once with all proposals (max 3). Use it when the user asks to turn a workflow or procedure into a skill, or when the same multi-step procedure has recurred and a skill would clearly save future work. Do not call it for one-off tasks, and do not re-propose skills the user has already seen.

An improvement can only update one of the user's own skills; a plugin's skill or a built-in one can't be updated from the card. To customize one of those with this tool, propose it as a new skill under a name of its own \u2014 not the original's name, even without its plugin prefix \u2014 with a description that says when to use it instead of the original: both stay listed, and the description decides which one is used.`;
export { PQ, QKs, ZKs };

//# sourceMappingURL=chunk-qzn4vr7h.js.map
