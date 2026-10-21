import type { Guide } from "./types";

export const t: Guide = {
  slug: "t",
  title: "The bar on a handwritten t",
  description: "A missing bar, a bar through the middle, and a bar near the top: how to see each, and why the height is not ambition.",
  questionId: "t",
  figures: [
    { file: "uncrossed-t.svg", caption: "No bar: the stem stands alone. Fast notes drop the cross." },
    { file: "mid-t.svg", caption: "Through the middle: the usual copybook cross, about halfway up the stem." },
    { file: "high-t.svg", caption: "Near the top: the bar sits high on the stem and still meets it." },
  ],
  origin: [
    "The t is the one lowercase letter in most print alphabets that needs two separate marks. The stem comes down, the pen lifts, and the hand comes back to cross it. Copybooks put that cross about halfway up the stem, because halfway is easy to reach on the way down. Some models add a small hook at the foot so the letter cannot be read as l.",
    "British and continental copybooks often put the cross near the top of the stem. The reason is practical: a cross high on the stem clears the letters on the baseline, and it keeps the bar from crowding the next letter. The same tradition crosses the 7 near its top, which is why a crossed 7 and a high-barred t often appear together. North American print models cross lower and leave the 7 open.",
    "A t with no cross is not a missing skill. In print teaching, some models ask for the cross as part of writing the letter, others leave it until the end of the word, and some beginners are not asked to cross at all until later. In joined handwriting the cross is often a flick of the pen on the way out. When the hand moves quickly, the cross is the first thing to go, because the stem alone already reads.",
    "Most people learn the position they use from something they saw rather than from a rule. It may be a teacher's exercise book, a form on a desk, a letter they received, or a printed chart of the alphabet. People also copy from keyboards: a handwriting font, a signature sample, a scanned page. Once a position has been seen a few dozen times, the hand learns it and the choice stops feeling like one.",
    "The three positions in ordinary use are the mid-height cross, the high cross, and the uncrossed stem. Which one dominates depends on the school the writer sat in, the country the school borrowed its model from, and how old the model was. A writer taught in the 1960s and one taught last decade with the same copybook often produce the same bar. A writer taught in a joined script may keep the high cross after switching to print.",
    "In real notes the bar moves. A long word beginning with t, such as to or that, gets a careful cross. A t at the end of a line, where the hand is turning to start a new one, may get none. A t followed by h or l, where a taller letter would collide with a mid-height bar, pushes the bar up. File the position that shows up when you are not concentrating.",
  ],
  limits: [
    "The bar does not describe a person. Graphology reads a high bar as ambition, a low bar as caution, and a missing bar as reluctance, but those readings are not supported well enough to use. What the bar records is the height at which the hand crossed the stem, and that is a motor habit, not a statement about you.",
    "Speed moves the bar more than anything else. Write the word to in a hurry and the cross usually lands high, because the hand is already heading for the next letter. Write it slowly and it may drop to the middle. A different pen shifts it too, since a thick barrel is harder to steer, and a tired hand crosses differently.",
    "Mood and copying change it as well. On a bad afternoon, in a crowded train, or with a phone call next door, the bar is one of the first things to shift. When you copy from a model, you are reproducing its position, not your own, for as long as you copy. That is how a form gets learned, and how a learned form gets mistaken for a trait.",
    "School, age, and handedness sit behind the form. A child learning letters may cross the t near the top to keep the hand from colliding with the crossbar of a neighbouring letter, then move it lower later. A left-handed writer may cross from the other side of the stem.",
    "This is a habit, not a trait. Graphology has been put to the test on claims like this and did not hold up: in a meta-analysis of 17 hiring studies (Neter and Ben-Shakhar, 1989, Personality and Individual Differences, volume 10, pages 737–745), graphologists scored near zero against neutral writing content. You can see a stroke. You cannot see a person in it.",
  ],
  checkSteps: [
    "Write one ordinary line at your normal speed, something you would not think twice about. Do not write your name. Use the pen and paper you actually use at work.",
    "Find every t in the line and look only at the bar. Count how many are crossed through the middle, how many sit high, and how many have none.",
    "Write the same line again, slowly, with the paper flat. If the bar moves, the speed was deciding it, not the model. Compare a third sample after a short rest.",
    "Take the form you counted most and find what shifts it: a taller letter before it, a different pen, a rushed minute. The habit is the one that stays.",
  ],
  useCases: [
    {
      h3: "Filling in a form",
      body: "Some forms print a model letter beside the box, with a guide showing where the bar goes. If the guide shows a mid-height cross and you write high, nobody marks you down, but the mismatch tells you how the form was designed. Check the model, then write your own t the way you always do.",
    },
    {
      h3: "Matching a house style",
      body: "When a studio, a school, or a business asks for a consistent note style, they are asking about letterform choice, not character. Knowing that your t sits high while the house guide wants it mid-height lets you copy the house style on request, and return to your own hand otherwise. Two habits, one of them yours.",
    },
    {
      h3: "Teaching a child",
      body: "A child who is told that the high bar means ambition learns to chase a high bar to look better. A child shown the three positions as three options learns something more useful: that the bar is a choice a writer makes, and that all three are readable. The second lesson travels further.",
    },
  ],
  related: [
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "See every shape the test uses, including this one." },
    { href: "/#q-t", label: "Where is the bar on your t?", note: "Answer one question and see which forms it moves." },
    { href: "/guides/seven", label: "The crossed 7", note: "The same tradition that crosses the 7 near its top." },
    { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting", note: "Describe a page without making a claim about the writer." },
    { href: "/science", label: "Is handwriting analysis accurate?", note: "The short answer, with the study behind it." },
  ],
  faqs: [
    {
      q: "What does a high t bar mean?",
      a: "On this site it means the bar sits near the top of the stem. It does not mean ambition, confidence, or a goal. It is where the pen crossed, not a reading of the person.",
    },
    {
      q: "Is a t without a bar still a t?",
      a: "In a word, yes. A missing bar is common in fast writing, and the stem alone usually carries the letter. The test files it as one of three shapes, not as a failure.",
    },
    {
      q: "Where should the bar on t sit?",
      a: "Copybooks usually put it through the stem, around the middle or a little above. High and missing are both forms people write every day. The test asks which is closest to yours, not which is approved.",
    },
    {
      q: "Can the same person cross t in different places?",
      a: "Yes. Speed, the pen, and the letter before it all move the bar. Pick the height you see most often in ordinary notes, and treat the odd one out as a change in conditions.",
    },
    {
      q: "What does a high t bar say about personality?",
      a: "Nothing that the evidence supports. Graphology reads a high bar as ambition, and the controlled studies do not bear that out. You can describe where the pen crossed the stem. You cannot read the person from it.",
    },
    {
      q: "Why do some people cross the t near the top?",
      a: "It clears the letters on the baseline and keeps the bar from crowding the next letter along. British and continental copybooks often show it that way, and the same tradition crosses the 7 high.",
    },
    {
      q: "Should I teach my child to cross the t in the middle?",
      a: "It does not matter much. What matters is that the child can read the letter back. Most models put the cross in the middle because it is the easiest reach.",
    },
    {
      q: "Does the t bar change when you write fast?",
      a: "Often, yes. The bar is usually the first thing to move, and it often rides higher when the hand hurries toward the next letter. That is a change in speed, not a change in the habit.",
    },
  ],
};
