import type { Guide } from "./types";

export const slant: Guide = {
  slug: "slant",
  title: "Handwriting slant",
  description: "How to see left, upright, and right slant against a baseline, and why the angle is not a reading of mood.",
  questionId: "slant",
  figures: [
    { file: "slant-left.svg", caption: "Left of vertical. The top of the stroke sits to the left of the base." },
    { file: "slant-upright.svg", caption: "Near vertical. Downstrokes stay close to upright." },
    { file: "slant-right.svg", caption: "Right of vertical, the lean taught in italic and many cursive models." },
  ],
  origin: [
    "Right slant is taught, not inherited. Italic lettering and nearly every cursive script that grew out of it set the letter on a diagonal, and the drill that goes with it asks the student to keep the letters on that diagonal. Copy the model and you copy the lean. Most people learned this between the ages of six and nine, at a desk, with a card showing a row of letters and a line running through them.",
    "Upright came from print and from manuscript models. Printed type has vertical stems, and the school scripts built on type, such as the Palmer method used in American classrooms for much of the twentieth century, insisted on a forward lean of its own but started from a printed alphabet. A writer who grew up copying letters, forms, and signs on paper is often near vertical, and often prints rather than joins.",
    "Left slant is rarely the model on the page. It most often comes from the mechanics of the hand. A left-handed writer pulls the pen toward the left margin, and the natural direction of that pull tips the stem. It can also come from a page that sits crooked, or from a writer who drifted away from the model over the years. The finished stroke records the mechanics, not the reason behind it.",
    "Where you are matters less than what was in front of you. English-language schooling, Italian handwriting, and the italic exercises sold across Europe all lean right. French school scripts and German handwriting often sit closer to upright, and some families learned from an older schoolbook that no longer exists. The form you write comes from the model in your childhood, which was itself a set of local choices.",
    "A lot of copying happens without a teacher. Menus, receipts, forms, notes taken from a whiteboard, and the address side of an envelope all train a hand. A child asked to copy a printed name off a form produces a print-like, upright hand. A child asked to copy a letter out of a workbook full of joined examples produces a leaning hand, and usually keeps that lean for years afterwards.",
    "In real notes the form is never fixed. A signature leans further than the same person writes on a list. A hurried line straightens out and shortens. A form filled in at a counter, on a clipboard, at an angle, produces a different lean from the same person writing at a desk. None of these is a different person. They are the same habit under different conditions.",
  ],
  limits: [
    "The claim you should refuse is the most repeated one: a left lean means an introverted nature, a right lean means an outgoing one. That is a graphology claim, not a finding. The relevant evidence is Neter and Ben-Shakhar, 1989, Personality and Individual Differences, volume 10, pages 737–745, a meta-analysis of 17 studies in which graphologists scored near zero on neutral content.",
    "The angle you measure is partly an angle of the page. Slide a sheet of paper to the left under your hand and the same hand writes a different lean, because the wrist is working against a tilted surface. Photograph a page and the camera adds its own tilt. A reading from a photo is a reading about the page and the camera, not a clean fact about the writer.",
    "Speed changes the shape before it changes the angle. A hurried downstroke runs shorter, flatter, and closer to vertical. A tired hand leans more. A ballpoint, a felt tip, and a pencil each add their own drag. The same person fills a form carefully and dashes a shopping list, and the two pages disagree with each other.",
    "Handedness, age, and schooling all sit behind the lean. Left-handed writers often rotate the page to see past their own hand, and that rotation changes the angle of every stem. A child copies a model for years before writing anything of their own. Change the model and the handwriting changes with it, which is what you would expect from a learned habit.",
    "None of this adds up to a person. Slant is a habit, not a trait: a repeated motion that any writer can pick up, put down, or change with a different model and a different desk. The only thing a page can show you is how a hand was moving while it made that mark. Read the stroke and leave the person out of it.",
  ],
  checkSteps: [
    "Write one ordinary line in your normal hand at a flat table, then write the same sentence again without slowing down. Use your everyday pen.",
    "Find the downstrokes. Look at the stems of m, n, u, and t against the baseline. Ignore curves and loops; they mislead more than stems do.",
    "Square the paper to the edge of the table and take a second look. A page sitting crooked adds its own angle to every stem, so read it twice.",
    "Compare the slow line with the fast one. If the lean shifts, the angle belongs to the conditions, not to you. Record a range, not one number.",
  ],
  useCases: [
    {
      h3: "Filling a form",
      body: "Some forms print a model letter or digit above the box and expect you to copy it. A flagged 1, a slanted print, or an upright 7 changes the mark you are asked to make. Knowing the form you naturally use tells you how much of the sample you will have to adjust to match the guide on the page.",
    },
    {
      h3: "Matching a house style",
      body: "Offices, clinics, and schools often ask everyone to fill in the same printed set. If the house model leans right and you write upright, or the other way round, the page looks like two different people. Knowing the model on the form lets you pick the matching one instead of guessing from the box.",
    },
    {
      h3: "Teaching a child",
      body: "A child copies whatever is in front of them. If their letters lean right because the workbook is slanted, putting a different model on the desk will change the page faster than asking them to try harder. Knowing the child's current lean tells you which copybook to hand over.",
    },
  ],
  related: [
    { href: "/tools/slant", label: "Slant measurement tool", note: "Read one downstroke angle from a local photo with a ruler-style slider." },
    { href: "/blog/how-to-measure-handwriting-slant", label: "How to measure handwriting slant", note: "A step-by-step method for aligning a stem and reading the angle." },
    { href: "/blog/graphology", label: "Graphology: what the evidence says", note: "Where the popular claims come from and what testing found." },
    { href: "/guides/spacing", label: "Word spacing in handwriting", note: "The gap between words, and the other rhythm mark on a page." },
    { href: "/science", label: "What the evidence allows", note: "The short version of what a page can and cannot support." },
  ],
  faqs: [
    {
      q: "What does handwriting slant mean?",
      a: "On this site it means the visible lean of the downstrokes: left, upright, or right. It does not describe a mood, a social style, or a temperament, and the result names a set of shapes rather than a person.",
    },
    {
      q: "How do I judge slant from a page?",
      a: "Look at the downstrokes of m, n, t, or l against the baseline or the edge of the paper. One letter is a weak sample. A row of them is enough to see the lean, and the slant tool gives you a number for it.",
    },
    {
      q: "Is right slant the correct slant?",
      a: "It is the slant of italic and of many cursive books. Upright is the slant of most print models, and left slant is a real outcome that many left-handed writers produce. None of the three is a diagnosis.",
    },
    {
      q: "Can slant change in one day?",
      a: "Yes. Paper angle, pen, fatigue, and the model you are copying all move it, and so does the speed of the stroke. A change in slant between two pages is not a change in personality, only a change in the conditions.",
    },
    {
      q: "Is graphology real?",
      a: "Graphology claims that slant and similar marks predict personality. That claim is not supported well enough to use on a real person or a real decision. The science page says what the evidence allows.",
    },
    {
      q: "Does left slant mean I am introverted?",
      a: "No. It is a popular reading, not a finding. A left hand pulls the pen, a crooked page tilts the measured angle, and the 1989 meta-analysis found graphologists scoring near zero where the writing content was neutral.",
    },
    {
      q: "Is right slant more professional?",
      a: "Right slant is the model in italic and in many cursive workbooks, so it looks familiar to people who grew up with it. Familiar is not the same as professional, and the lean of the stems says nothing at all about the writer.",
    },
    {
      q: "Why does my slant change when I write fast?",
      a: "Speed shortens and flattens the downstroke, so a hurried line sits closer to vertical than a careful one. Fatigue, pen type, and the angle of the page all add to the shift, which is why a range of readings is more honest.",
    },
  ],
};
