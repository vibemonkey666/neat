// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Lt } from "./chunk-r1dvrqha.js";
import { on } from "./chunk-cr7a2cdd.js";
import { oR } from "./chunk-fh50nzzj.js";
import { jut, oDt } from "./chunk-2zzds0nf.js";
import { cl } from "./chunk-ggnzxsv7.js";
import { Wi } from "./chunk-b6tgsycv.js";
var n = "slides";
function Dbr() {
  return oR() && oDt();
}
function Hbr(t) {
  return t.policyKey === void 0 || on(t.policyKey);
}
function l(t) {
  return Dbr() && Hbr(t);
}
var VIt = {
    name: "design",
    intent: "design",
    typeTitle: "Design",
    policyKey: "allow_cobalt_plinth_bramble",
    nounPhrase: "a design",
    askWhenNoBrief: "what they want designed",
    description: "Make a new Design artifact from a brief",
    argumentHint: "[what to design]"
  },
  f = {
    name: n,
    intent: "slides",
    typeTitle: "Slides",
    policyKey: "allow_cobalt_plinth_juniper",
    nounPhrase: "a slide deck",
    askWhenNoBrief: "what the deck should be about",
    description: "Make a new Slides deck artifact from a brief",
    argumentHint: "[what the deck is about]"
  };
function Lbr({ name: t, intent: r, typeTitle: e, nounPhrase: i, askWhenNoBrief: o }, s) {
  let a = s.trim();
  return [
    (cl()
      ? r !== void 0
        ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Find that type among the Artifact types your artifact tools offer this user, the way their own guidance says to (if that leaves more than one with that title, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type titled "${e}" is offered to this user, say so plainly; if the tool result that told you so suggests another route, take it, and otherwise offer to make ${i} another way.`
        : `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Skip any quickstart step your artifact tools have, which has no option for this type: list all the Artifact types they offer this user and take the first-party type titled "${e}" (a first-party row starts with a tier in brackets, such as \`[core]\`; if no row has one, go by title alone; if more than one row fits, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type that fits is offered to this user, say so plainly and offer to make ${i} another way.`
      : void 0) ??
      (r === void 0
        ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". ${jut() ? "No quickstart call is needed: use" : "Use"} the \`${Lt}\` tool to list the Artifact types available to this user (\`type_query: "${e}"\`), take the first-party type titled "${e}" (a first-party row opens with its tier in brackets, such as \`[core]\`; if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no first-party type titled "${e}" is listed for this user, say so plainly and offer to make ${i} another way.`
        : jut()
          ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Call the \`${Lt}\` tool with \`action: "quickstart"\` and \`intent: "${r}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.`
          : `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Use the \`${Lt}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${e}"\`), take the listed type whose title is "${e}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${e}" is listed for this user, say so plainly and offer to make ${i} another way.`),
    a
      ? `The brief:

${a}`
      : `No brief was given \u2014 ask the user ${o} before creating anything.`
  ].join(`

`);
}
function Nbr() {
  h(f);
}
function h(t, r) {
  Wi({
    name: t.name,
    description: t.description,
    argumentHint: t.argumentHint,
    policyGate: r,
    isEnabled: () => l(t),
    userInvocable: !0,
    disableModelInvocation: !0,
    async getPromptForCommand(e) {
      return [{ type: "text", text: Lbr(t, e) }];
    }
  });
}
export { Dbr, Hbr, VIt, Lbr, Nbr };

//# sourceMappingURL=chunk-4yw7q568.js.map
