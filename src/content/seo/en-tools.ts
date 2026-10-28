import type { ToolSeoContent } from "@/content/seo/types";

export const slantTool: ToolSeoContent = {
  slug: "slant",
  path: "/tools/slant",
  title: "Measure Handwriting Slant",
  h1: "Measure handwriting slant",
  meta: "Measure the slant of one downstroke from a photo. A free browser tool: no upload, no account, and no personality score attached to the angle.",
  kicker: "Free tool · no upload",
  lede: "Load a photo of your writing, line a red stem up with one downstroke, and read the angle in degrees. The number describes the stroke on the page, not the person who wrote it.",
  outputsTitle: "What you get",
  outputs: [
    "An angle from vertical for one downstroke, read from -40 to +40 degrees.",
    "A plain reading: left of vertical, near vertical, or right of vertical.",
    "The 8-degree band this site treats as upright, stated on the page rather than hidden.",
    "A local photo preview that stays in your browser and disappears when the tab closes.",
    "A short method you can repeat on another page or with another pen.",
    "A link into the 19-shape test if you want the site's fictional label as well.",
  ],
  howToTitle: "How to measure slant",
  howToSteps: [
    "Write three or four ordinary lines on unlined paper and leave the signature out. A signature is often a practiced display form, not everyday writing.",
    "Put the page flat on a table and hold the camera directly above it. A phone tilted even a little changes every apparent angle.",
    "Crop or zoom so one full downstroke fills a useful part of the frame. Avoid the edge of the photo, where lens distortion is strongest.",
    "Load the photo into the tool. It stays in the browser; nothing is sent to a server.",
    "Drag the red stem until it sits on the straight part of a downstroke. Read the degrees shown beside the slider.",
    "Repeat on three separate downstrokes. If the readings disagree by more than a few degrees, the page or the camera is probably not square.",
  ],
  sections: [
    {
      id: "what-slant-means",
      h2: "What handwriting slant means here",
      paragraphs: [
        "Slant is the angle between a downstroke and a true vertical line. A stroke that leans toward the left of the page is a left slant. A stroke that leans toward the right is a right slant. A stroke that sits close to vertical is, for this tool, upright.",
        "The tool measures one straight segment at a time. It does not average a page, classify a whole hand, or decide what the angle means. That narrow scope is deliberate. A single angle is easy to define and easy to check; a claim about personality is neither.",
      ],
      bullets: [
        "Left of vertical: the top of the stroke falls to the left of its base.",
        "Upright: the stroke is within 8 degrees of vertical in either direction.",
        "Right of vertical: the top of the stroke falls to the right of its base.",
        "Degrees are a geometric reading. They are not a score, a percentile, or a diagnosis.",
      ],
    },
    {
      id: "why-slant-varies",
      h2: "Why the same writer can produce several slants",
      paragraphs: [
        "Handwriting is a movement, not a fixed image. The angle changes with speed, pen grip, paper position, arm support, and how much of the page the wrist can reach without moving. Most people produce a slightly different angle at the top of a page than at the bottom.",
        "Instruction matters too. School copybooks in different countries teach different models. A writer who learned a forward-leaning cursive may keep that lean in careful writing and lose it in fast notes. A left-handed writer may rotate the page and produce a slant that looks unusual on the desk but is comfortable for the hand.",
        "Mood, fatigue, medication, injury, and age can all change the look of writing. That does not make the angle a mood meter. It means the angle is a record of a particular movement on a particular day, and any claim about a stable trait needs evidence the measurement cannot supply.",
      ],
    },
    {
      id: "how-to-read",
      h2: "How to read the number",
      paragraphs: [
        "The slider reports degrees from vertical. Negative numbers lean left; positive numbers lean right. The tool treats anything from -8 to +8 as upright, which is a broad band on purpose: ordinary variation between strokes is often several degrees.",
        "If your first stroke reads 15 degrees right and your second reads 6 degrees right, do not average them into a personality verdict. Look at the page. Was one stroke a curved bowl rather than a straight stem? Was the photo rotated? Was the pen dragging at the end of a line? The tool is useful when the question is 'how much does this stroke lean', not when the question is 'who is this person'.",
      ],
      bullets: [
        "Measure stems, not loops, diagonals, or the curved side of a letter.",
        "Use the straight middle section of a downstroke; ignore the entry and exit strokes.",
        "Take three readings and report the range, not a single decimal place.",
        "Keep the camera square to the page. A tilted photo tilts every stroke in the same direction.",
      ],
    },
    {
      id: "photo-limits",
      h2: "What a photo cannot preserve",
      paragraphs: [
        "A photograph records ink, not pressure. A dark line may come from a soft pencil, a wet rollerball, or a heavy hand; the image cannot tell you which. A photo also loses speed and stroke order, so it cannot show whether a line was written in one movement or retraced.",
        "Perspective is the largest source of error. If the camera is above the left side of the page and not the right, parallel strokes will converge in the image. Lens distortion near the corners adds a second error. A flat scan is better than a phone photo, and a photo taken straight down is better than one taken at an angle.",
        "The tool therefore reports the angle you set on the image. It does not recover the angle of the pen in the writer's hand. Those are different measurements, and the distinction matters if you are comparing pages.",
      ],
    },
    {
      id: "slant-and-personality",
      h2: "Does slant reveal personality?",
      paragraphs: [
        "Graphology, the practice of inferring personality from handwriting, has a long history and a weak record in controlled tests. A meta-analysis by Neter and Ben-Shakhar (1989) examined graphologists' predictions in personnel settings and found near-zero validity when the content of the writing was neutral. Trained psychologists who read the same samples did better, which suggests they were responding to what the text said rather than to the strokes.",
        "That result does not prove that every handwriting measurement is worthless. It does mean that a slant angle, by itself, is not a validated personality test. A lean can tell you how a particular page was written. It cannot tell you whether the writer is introverted, conscientious, anxious, or honest.",
        "This site uses slant as one visible feature in a fictional filing exercise. The result names a set of shapes. It does not diagnose a person, and it should not be used for hiring, dating, credit, or any decision that affects someone's life.",
      ],
    },
    {
      id: "method",
      h2: "How this measurement is built",
      paragraphs: [
        "The tool uses a slider from -40 to +40 degrees and a fixed rule: readings within 8 degrees of vertical are upright. The image is loaded with a browser file input and displayed locally. There is no upload endpoint, no account, and no storage of the image after the page is closed.",
        "The reading is the slider value, not a computer-vision estimate. That keeps the method inspectable: you can see exactly which stroke you aligned and change it if you disagree. It also means the result depends on your judgment. The tool is a ruler, not an oracle.",
        "The 8-degree band is a design choice, not a scientific threshold. It exists so that small hand tremors, pixel-level blur, and the natural curve of a stroke do not flip the label. If you need a stricter comparison, record the exact degrees and compare those instead of the three-word label.",
      ],
    },
    {
      id: "why-measure",
      h2: "Why measure slant at all?",
      paragraphs: [
        "Slant is one of the features people notice first when they compare handwriting. Measuring it makes the comparison concrete. Instead of saying 'your writing leans forward', you can say 'this stem is 12 degrees right of vertical on this page'. That is a claim you can check.",
        "The measurement is also a useful check on graphology claims. If someone tells you that a right slant proves an outgoing nature, ask them to measure the slant first. In many samples the angle changes from line to line, which makes the claimed trait unstable before the personality question even begins.",
        "For design work, teaching, or archival description, a repeatable angle can be useful on its own. It can help describe a handwriting model, compare two documents, or show how a student's letterforms changed over a term. None of those uses requires a personality inference.",
      ],
    },
  ],
  sampleTitle: "What the tool displays",
  sampleIntro:
    "The output is deliberately small. This is an example of the readout, not a claim about a real writer: if the stem sits 14 degrees to the right of vertical, the panel shows +14 degrees and 'Right of vertical'. The same page measured at 3 degrees would show 'Near vertical'.",
  sampleBullets: [
    "Angle: +14 degrees from vertical.",
    "Reading: right of vertical.",
    "Band: outside the 8-degree upright zone.",
    "What it does not say: anything about the writer's character, mood, or ability.",
  ],
  sampleResultHref: "/r/1000000020220",
  sampleResultLabel: "See a sample quiz result (different from a slant reading)",
  useCasesTitle: "When this tool is useful",
  useCases: [
    {
      h3: "Comparing your own pages",
      body: "Measure the same stem shape on notes from two different weeks. A range is more honest than a single angle, and it shows how much your writing moves with speed and paper.",
    },
    {
      h3: "Studying a handwriting model",
      body: "If you are learning a school script, measure a model stroke and compare your practice page. The angle gives you a concrete target without pretending the target is a personality.",
    },
    {
      h3: "Testing a graphology claim",
      body: "When a book says a slant means a trait, take three readings from the page it uses as an example. Check whether the angle is stable before accepting the interpretation.",
    },
    {
      h3: "Describing a document",
      body: "For an archive or a design reference, record the angle and the page conditions. A measured description is easier to audit than an impression.",
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "What is handwriting slant?",
      a: "It is the angle between a downstroke and a vertical line. This tool reports the angle you set on a photo, from -40 to +40 degrees.",
    },
    {
      q: "Is my photo uploaded?",
      a: "No. The file is read in the browser and stays there. Closing the tab drops it. There is no account and no server-side copy.",
    },
    {
      q: "What counts as upright?",
      a: "Within 8 degrees of vertical in either direction. The band is a design choice that absorbs small differences between strokes, not a scientific cutoff.",
    },
    {
      q: "Does a right slant mean I am outgoing?",
      a: "No. That is a graphology claim, not a validated finding. The angle describes a stroke; it does not measure a personality trait.",
    },
    {
      q: "Why do my strokes give different angles?",
      a: "Curves, speed, pen grip, paper position, and camera perspective all change the apparent angle. Measure stems rather than curves and take a range of three readings.",
    },
    {
      q: "Can I use a scan instead of a photo?",
      a: "Yes. A flat scan is usually more reliable because the page is square to the sensor. Check that the scan itself is not stretched or rotated.",
    },
    {
      q: "Does the tool measure pen pressure?",
      a: "No. A photo or scan records ink, not force. A dark line can come from a soft pen, a wet ink, or a heavy hand, and the image cannot separate them.",
    },
    {
      q: "Can I measure a signature with this?",
      a: "You can measure one straight stem in a signature, but a signature is a practiced display form. Use the signature tool if you want width, height, length, turns, and an approximate slant.",
    },
    {
      q: "Is this forensic document examination?",
      a: "No. Forensic examiners compare a questioned writing sample with known writing to judge whether the same hand produced it. This tool measures one angle and makes no identification.",
    },
    {
      q: "What should I do with the number?",
      a: "Use it as a description or a comparison. Do not use it to judge a person, and do not treat it as a diagnosis.",
    },
  ],
  relatedTitle: "Related tools and guides",
  relatedTools: [
    { href: "/", label: "Handwriting personality test", note: "The 19-shape quiz and its fictional labels." },
    { href: "/tools/signature", label: "Signature measurement tool", note: "Width, height, length, turns, and slant from a drawn signature." },
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "See and print every shape used in the test." },
  ],
  relatedGuides: [
    { href: "/guides/slant", label: "Slant guide: what a lean can and cannot show" },
    { href: "/guides/spacing", label: "Word spacing in handwriting" },
    { href: "/guides/t", label: "The crossed and uncrossed t" },
    { href: "/blog/how-to-measure-handwriting-slant", label: "How to measure handwriting slant" },
    { href: "/science", label: "What handwriting analysis can prove" },
  ],
  ctaLabel: "Take the 19-shape test",
  ctaHref: "/#test",
  ctaNote: "The test uses a left, upright, or right sample as one of its 19 questions. It returns a fictional label, not a personality diagnosis.",
  schemaName: "Handwriting Slant Measurement Tool",
  schemaDescription:
    "A free browser tool that measures the angle of one handwriting downstroke from a local photo and reports left, upright, or right of vertical.",
  applicationCategory: "UtilitiesApplication",
  featureList: [
    "Local photo preview with no upload",
    "Slant slider from -40 to +40 degrees",
    "Left, upright, and right readings",
    "8-degree upright band stated on the page",
    "No personality score",
  ],
  howToName: "How to measure handwriting slant from a photo",
};

export const signatureTool: ToolSeoContent = {
  slug: "signature",
  path: "/tools/signature",
  title: "Measure a Signature",
  h1: "Measure a signature",
  meta: "Draw or trace a signature in the browser and get width, height, stroke length, direction changes, and an approximate slant. Nothing is uploaded.",
  kicker: "Free tool · no upload",
  lede: "Draw a signature with a mouse, trackpad, or finger. The tool measures the shape you made: width, height, length, turns, and the average lean. It does not tell you what the signature means.",
  outputsTitle: "What you get",
  outputs: [
    "Width and height of the drawn signature relative to the drawing area.",
    "Total stroke length in the same units, so a long sweeping line is not confused with a small one.",
    "The number of direction changes, a rough measure of how many turns the pen made.",
    "An approximate slant based on the dominant stroke direction.",
    "A local canvas that never uploads the drawing.",
    "A clear statement that the measurements describe a drawing, not a personality.",
  ],
  howToTitle: "How to measure a signature",
  howToSteps: [
    "Sign on paper as you normally would, or write the signature in the air a few times to loosen the hand.",
    "Draw the signature in the box with a mouse, trackpad, stylus, or finger. Size is relative, so the box does not need to match the paper.",
    "Try to keep the drawing to one continuous line if your signature is normally continuous. Lift the pen only where you would lift it on paper.",
    "Watch the readout update: width, height, length, turns, and slant.",
    "Redraw once without looking at the first attempt. Compare the two readouts instead of treating one as definitive.",
    "For a paper signature, use the slant tool on a photo and read the size note below. A canvas drawing is not a substitute for the ink on the page.",
  ],
  sections: [
    {
      id: "what-is-measured",
      h2: "What the signature tool measures",
      paragraphs: [
        "The tool records the path you draw and reduces it to a small set of geometric facts. Width is the horizontal span of the path. Height is the vertical span. Length is the distance travelled by the pointer, including loops. Turns count direction changes above a small threshold, which gives a rough sense of how busy the line is.",
        "Slant is estimated from the dominant direction of the path. It is not the same as the photo-based slant measurement, and it is not an average of every stroke. A signature with a large horizontal sweep may read differently from a vertical signature even when both lean the same way.",
        "These are descriptions of a drawing made on a screen. They are not measurements of pen pressure, speed, or the physical signature on paper. A screen has no friction, no ink, and no page; the hand moves differently.",
      ],
      bullets: [
        "Width: the horizontal extent of the drawn path.",
        "Height: the vertical extent, useful for comparing a compact signature with a tall one.",
        "Length: the total distance the pointer travelled, including loops and retracing.",
        "Turns: a count of direction changes, not a measure of complexity or intelligence.",
        "Slant: an estimate from the dominant stroke direction, not a personality reading.",
      ],
    },
    {
      id: "why-signatures-differ",
      h2: "Why signatures differ from ordinary writing",
      paragraphs: [
        "A signature is a performance. It is practiced, repeated, and often designed to be recognizable rather than legible. Many people write a signature faster and larger than their notes, with a different pen grip and a different starting point. Some signatures are deliberately illegible; others are carefully drawn.",
        "That makes a signature a poor stand-in for everyday handwriting. If you want to compare letterforms, use a page of ordinary writing. If you want to describe the signature itself, measure the signature. Mixing the two produces claims that are hard to check.",
        "Signatures also change with context. The same person may use a full signature on a legal document and initials on a parcel. A large signature on a check is not evidence of a large personality; it may be evidence of a small box, a hurried hand, or a habit learned decades ago.",
      ],
    },
    {
      id: "size-and-status",
      h2: "Signature size and the claims around it",
      paragraphs: [
        "Signature size has been studied as a social signal. In some experiments, larger signatures are associated with status or dominance in a particular setting. Those findings are context-bound and often small. They do not support the popular claim that a big signature proves confidence or that a small one proves shyness.",
        "A signature can also be constrained by the form it sits on. A passport signature may be squeezed into a box; a painting signature may be deliberately tiny; a business signature may be exaggerated for branding. The measuring tool has no way to know which constraint was present.",
        "The honest use of the readout is comparative: measure several signatures from the same person and describe what changed. A difference between two drawings is a fact about the drawings. The reason for the difference is a separate question.",
      ],
    },
    {
      id: "how-to-read",
      h2: "How to read the signature readout",
      paragraphs: [
        "Start with width and height together. A signature that is wide but short has a different visual footprint from one that is tall and narrow. Neither is better. The pair is a description you can use when comparing attempts.",
        "Length adds information that width and height miss. A compact signature with many loops can have a long path; a large, simple signature can have a shorter path than expected. Turns help describe the amount of direction change, but a high count is not a sign of creativity. It may simply mean the signature has more loops.",
        "Slant is the least stable number in the set. A canvas drawing made with a mouse is jerky, and the dominant direction can change with one long horizontal stroke. Treat the slant as a rough visual summary and use the photo tool if the angle is the question.",
      ],
    },
    {
      id: "not-graphology",
      h2: "What a signature measurement cannot tell you",
      paragraphs: [
        "It cannot tell you whether a person is honest, intelligent, confident, organized, or employable. Those are complex traits, and a signature is a small, practiced sample of behaviour. The research on graphology does not support using handwriting for personnel decisions. A meta-analysis by Neter and Ben-Shakhar (1989) found near-zero validity for graphologists' predictions when the text content was neutral.",
        "It cannot authenticate a signature either. Forensic document examiners compare a questioned signature with known specimens and consider pen pressure, line quality, and construction. A canvas drawing has none of that information. This tool is not a signature-verification system.",
        "It cannot measure pen pressure or speed. A mouse or finger does not report force, and the canvas records only position. If pressure matters, use a digitizing tablet that records it, and even then the measurement describes the device as much as the hand.",
      ],
    },
    {
      id: "method",
      h2: "How the measurement works",
      paragraphs: [
        "The canvas captures pointer positions while the button is held down. It sums the distance between consecutive points for length, tracks the minimum and maximum coordinates for width and height, and counts direction changes above a small angle threshold. The slant estimate uses the dominant direction of the sampled points.",
        "The numbers are relative to the canvas, not to millimetres on paper. That makes them useful for comparing drawings made in the same box, and unhelpful for comparing a screen drawing with an ink signature measured by a ruler. The page says this plainly so the output is not over-read.",
        "The tool is intentionally simple. It does not use a trained model, a cloud service, or a stored profile. The drawing remains in the browser, and the readout disappears when the page is closed.",
      ],
    },
  ],
  sampleTitle: "What the readout looks like",
  sampleIntro:
    "The panel is a measurement display, not a verdict. This example shows the format only: a wide signature with two loops might read width 0.74, height 0.28, length 4.6, turns 3, slant 9 degrees right. The values depend on the drawing and the size of the box.",
  sampleBullets: [
    "Width and height are relative to the drawing area.",
    "Length counts the path travelled, including loops.",
    "Turns count direction changes, not meaning.",
    "Slant is approximate and should not be treated as a personality score.",
  ],
  sampleResultHref: "/r/1000000010202",
  sampleResultLabel: "See a sample quiz result (a separate tool)",
  useCasesTitle: "When this tool is useful",
  useCases: [
    {
      h3: "Comparing attempts",
      body: "Draw the same signature three times and compare the width, height, and length. The variation is often more interesting than a single reading.",
    },
    {
      h3: "Designing a mark",
      body: "If you are refining a personal mark or a monogram, the width-to-height ratio and turn count give you a simple way to describe the shape.",
    },
    {
      h3: "Teaching handwriting",
      body: "Use the readout to show a student how a loop or a long connector changes the path length. Keep the conversation about the drawing, not the student's character.",
    },
    {
      h3: "Checking a claim",
      body: "When a quiz says a large signature means confidence, measure a few signatures and see how much the size changes with the form. Then ask what the claim actually predicts.",
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "What does the signature tool measure?",
      a: "Width, height, total stroke length, direction changes, and an approximate slant of a signature drawn on the canvas. The numbers describe the drawing, not the writer.",
    },
    {
      q: "Is my signature uploaded?",
      a: "No. The drawing stays in the browser. There is no upload, account, or stored copy.",
    },
    {
      q: "Can I measure a signature from paper?",
      a: "Use the slant tool on a photo for an angle. For size, place a ruler beside the signature and record the width and height in millimetres. The canvas tool does not convert screen units to paper units.",
    },
    {
      q: "Does a large signature mean confidence?",
      a: "No. Signature size can be influenced by the form, the pen, the context, and habit. Studies of size and status do not justify reading a personality from one signature.",
    },
    {
      q: "What counts as a turn?",
      a: "A direction change above a small threshold. A smooth curve may add none; a sharp hook or loop adds one or more. It is a rough count, not a measure of complexity.",
    },
    {
      q: "Why is the slant different from the photo tool?",
      a: "The canvas estimates slant from the dominant direction of a screen drawing. The photo tool measures a stem you align by hand. The two methods have different inputs and different errors.",
    },
    {
      q: "Can this verify a signature?",
      a: "No. Signature verification is a forensic comparison task that uses known specimens and line quality. This tool measures a drawing and makes no identity claim.",
    },
    {
      q: "Can I use a stylus?",
      a: "Yes. A stylus usually gives a smoother path than a mouse. The tool records position only, so pressure-sensitive styluses do not add pressure data.",
    },
    {
      q: "Does the tool work on a phone?",
      a: "Yes. The canvas accepts touch input. A larger screen makes it easier to draw a signature at a comfortable size.",
    },
    {
      q: "Should I use this for a hiring decision?",
      a: "No. Handwriting measurements are not a validated hiring tool, and a signature is an especially narrow sample. Use job-relevant work samples and structured interviews instead.",
    },
  ],
  relatedTitle: "Related tools and guides",
  relatedTools: [
    { href: "/", label: "Handwriting personality test", note: "The 19-shape quiz and its fictional labels." },
    { href: "/tools/slant", label: "Slant measurement tool", note: "Measure one downstroke from a local photo." },
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "See and print every shape used in the test." },
  ],
  relatedGuides: [
    { href: "/guides/signature-size", label: "How big a signature is" },
    { href: "/guides/signature-writing", label: "Signature and the writing around it" },
    { href: "/guides/y", label: "The looped and straight y" },
    { href: "/blog/graphology", label: "Graphology: what the evidence says" },
    { href: "/science", label: "The science page" },
  ],
  ctaLabel: "Try the handwriting test",
  ctaHref: "/#test",
  ctaNote: "The test is a separate tool. It asks about 19 shapes and returns a fictional label; it does not use your signature measurement.",
  schemaName: "Signature Measurement Tool",
  schemaDescription:
    "A free browser canvas that measures the width, height, length, turns, and approximate slant of a drawn signature without uploading it.",
  applicationCategory: "UtilitiesApplication",
  featureList: [
    "Canvas signature drawing",
    "Width, height, and path length readout",
    "Direction-change count",
    "Approximate slant estimate",
    "No upload and no personality score",
  ],
  howToName: "How to measure a signature in the browser",
};

export const sampleChartTool: ToolSeoContent = {
  slug: "sample-chart",
  path: "/tools/sample-chart",
  title: "Handwriting Sample Chart",
  h1: "Handwriting sample chart",
  meta: "See every shape in the handwriting personality test: open and closed 4, crossed 7, single- and double-storey a, looped g, and slashed 0. Print the chart.",
  kicker: "Free tool · printable",
  lede: "A chart of the shapes used in the 19-question test. Compare your own writing, filter by digits, letters, symbols, spacing, or slant, and print a clean copy. No upload and no account.",
  outputsTitle: "What you get",
  outputs: [
    "Every shape used in the test, shown as a clean line drawing rather than a stock photo.",
    "Filters for digits, letters, symbols, spacing, and slant.",
    "Search by name, so you can jump to 'open 4' or 'ampersand' without scrolling.",
    "A print view with the interface hidden, suitable for a desk or a classroom.",
    "A guide link beside the shapes that have a full article.",
    "A direct path into the test question for each shape.",
  ],
  howToTitle: "How to use the chart",
  howToSteps: [
    "Open the chart on a screen and find the group you care about: digits, letters, symbols, spacing, or slant.",
    "Use the search box if you know the name of the shape. Try '4', 'ampersand', or 'slant'.",
    "Compare the chart drawing with a page of your own handwriting at the same viewing size. Do not compare a small chart image with a large handwritten page.",
    "If a shape has a guide link, open it to see where the form is taught and what it does not show.",
    "Print the chart if you want to mark shapes by hand. The print stylesheet removes the navigation and filters.",
    "Open the test and pick the shape closest to yours. The chart is a reference; the quiz is the filing exercise.",
  ],
  sections: [
    {
      id: "what-is-this-chart",
      h2: "What this chart is",
      paragraphs: [
        "This is a reference sheet for the shapes the test asks about. It is not a ranked list of good and bad handwriting, and it is not a personality chart. Each row shows a form you might write and gives it a name so you can compare it with your own page.",
        "The drawings are deliberately simple. A real handwritten 4 may have a curved stem, a short crossbar, or a diagonal that stops halfway. The chart shows one clean version of the open and closed forms so the difference is visible. Your writing does not have to match the drawing exactly; the question is which form is closer.",
        "The chart covers the forms in the English test: digits, letters, the ampersand, letter size, word spacing, joins, and slant. The Chinese test uses a different set of five questions and has its own chart.",
      ],
    },
    {
      id: "compare-fairly",
      h2: "How to compare your writing fairly",
      paragraphs: [
        "Write a few lines on unlined paper before you open the chart. Use the pen you normally use. A deliberate copy of a printed shape is not the same as the form that appears when you are thinking about something else.",
        "Compare at a similar size. A chart drawing on a phone screen is small; a handwritten page is large. If you shrink your writing to match the chart, curves and gaps will look different. Put the page beside the screen and step back.",
        "Look at several examples. People mix forms: a closed 4 in a careful note, an open 4 in a shopping list. The quiz asks you to pick the one that is closest, not the one you used once in a formal document. If you genuinely use both equally, that is useful information about the instability of the feature.",
        "Do not correct your writing before you compare. The chart is not a test you can fail, and a tidied sample is a sample of tidying, not of your everyday hand.",
      ],
    },
    {
      id: "what-shapes-show",
      h2: "What a shape can and cannot show",
      paragraphs: [
        "A shape can show which model a writer practised, which region they learned in, and sometimes which form they saw most often on a keyboard or a sign. A closed 4 is common in many European school scripts; an open 4 is common in the United States. A crossed 7 is a practical way to keep 7 from looking like 1. These are conventions, not character traits.",
        "A shape cannot show whether a person is honest, creative, organized, intelligent, or good at a job. The research on graphology does not support those inferences. A meta-analysis by Neter and Ben-Shakhar (1989) found near-zero validity for graphologists' predictions in personnel contexts when the content of the writing was neutral.",
        "This site uses shapes as a filing system. The quiz counts four visual directions, names the leading direction, and gives you a fictional label. The label is a way to talk about the shapes you picked. It is not a diagnosis and should not be used to make decisions about other people.",
      ],
    },
    {
      id: "digits",
      h2: "Reading the digit rows",
      paragraphs: [
        "The digit rows are about identification, not personality. A crossed 7 and a slashed 0 both exist to prevent misreading. A 1 with a base and a flag is a form that survives from older copybooks. A closed 4 may look more like a printed numeral; an open 4 may be faster to write.",
        "When you compare digits, ask what problem the form solves. A slashed zero solves the 0/O confusion in technical writing. A crossed 7 solves the 7/1 confusion in handwriting where 1 has a serif. Those are functional explanations, and they are usually more useful than a trait claim.",
      ],
    },
    {
      id: "letters",
      h2: "Reading the letter rows",
      paragraphs: [
        "The letter rows show forms that vary widely between school systems. A single-storey a is a circle with a stem; a double-storey a has the printed shape with a bowl and a roof. A looped g and an open g differ in the descender. A t can be crossed high, crossed in the middle, or not crossed at all.",
        "Those differences are often taught, not chosen. A writer who learned a particular cursive model may keep its loops long after leaving school. A writer who prints may never form a looped g. The chart helps you name the form; it does not tell you why the writer uses it.",
      ],
    },
    {
      id: "spacing-and-slant",
      h2: "Reading the spacing and slant rows",
      paragraphs: [
        "Word spacing is relational. The same gap can look wide on a narrow page and narrow on a wide one. The chart shows examples so you can compare the gap between words with the width of a letter, not with an absolute distance in millimetres.",
        "Slant is an angle, and the chart's slant row is a visual reference, not a measurement. For an actual angle, use the slant tool with a photo. The chart can help you decide whether a page looks left, upright, or right; the tool gives you a number you can check.",
      ],
    },
    {
      id: "print-and-use",
      h2: "Printing and classroom use",
      paragraphs: [
        "The print view removes the navigation, filters, and buttons so the chart fits on a page. It is useful for a classroom exercise, a handwriting club, or a design reference. The drawings are line art and print clearly in black and white.",
        "If you use the chart in a lesson, keep the framing honest. Ask students to compare forms and describe differences; do not ask them to infer character from a shape. The interesting lesson is that handwriting is learned, variable, and full of practical compromises, not that a loop reveals a secret self.",
      ],
    },
  ],
  sampleTitle: "A real sample result",
  sampleIntro:
    "The chart is a reference, but the quiz produces a result. This sample used 8 answers and landed on Everyday Minimalist, the label for a finish-led set of shapes. It is a real result link generated by the same code as the quiz, not a mock-up.",
  sampleBullets: [
    "8 of 19 questions answered.",
    "The finish direction leads by more than one answer.",
    "The result names a set of shapes; it does not describe a real person.",
    "Open the link to see the full result page and the four direction totals.",
  ],
  sampleResultHref: "/r/100000000----",
  sampleResultLabel: "Open the Everyday Minimalist sample result",
  useCasesTitle: "When this chart is useful",
  useCases: [
    {
      h3: "Before taking the test",
      body: "Find the shapes you actually write. The chart is faster than scrolling through 12 quiz questions if you only want to see the vocabulary.",
    },
    {
      h3: "Teaching handwriting",
      body: "Use the rows to discuss regional and school differences in letterforms. The chart is a neutral way to show that a form is a convention, not a defect.",
    },
    {
      h3: "Checking a claim",
      body: "When someone says a closed 4 means a certain personality, open the chart and the guide. Look for the evidence behind the claim, not just the label.",
    },
    {
      h3: "Printing a reference",
      body: "Print the chart for a desk, a classroom, or a notebook. The print view is designed to be readable without the site interface.",
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "What is a handwriting sample chart?",
      a: "A reference sheet of the shapes used in this site's test. It shows the forms side by side so you can compare your own writing and understand the quiz vocabulary.",
    },
    {
      q: "Is this a personality chart?",
      a: "No. The shapes are filing categories. The quiz assigns a fictional label based on the shapes you pick, but the chart does not map shapes to personality traits.",
    },
    {
      q: "How many shapes are in the chart?",
      a: "The English test uses 19 questions covering digits, letters, a symbol, size, joins, word spacing, and slant. The chart shows the forms used in those questions.",
    },
    {
      q: "Can I print the chart?",
      a: "Yes. Use the print button or your browser's print command. The print stylesheet hides the navigation, filters, and buttons.",
    },
    {
      q: "Why are some shapes linked to guides?",
      a: "A guide exists where a shape has enough history and variation to deserve its own page. The guide explains where the form is taught and what it cannot show.",
    },
    {
      q: "Does the chart use real handwriting samples?",
      a: "The chart uses clean line drawings so the difference between forms is clear. It does not use stock photos or claim that a drawing came from a particular person.",
    },
    {
      q: "Where is the Chinese chart?",
      a: "The Chinese test has its own five-question chart at /zh/tools/sample-chart. It covers size, character spacing, line spacing, connections, and the horizontal stroke.",
    },
    {
      q: "Do I need to upload my handwriting?",
      a: "No. The chart is a reference and the quiz is a set of multiple-choice questions. Nothing is uploaded.",
    },
    {
      q: "Can the chart tell me if my handwriting is good?",
      a: "No. Handwriting can be legible or illegible, fast or slow, conventional or unusual. The chart does not rank forms as good or bad.",
    },
    {
      q: "What should I read next?",
      a: "Open the guide for the shape you use, then read the science page. It explains what handwriting research can and cannot support.",
    },
  ],
  relatedTitle: "Related tools and guides",
  relatedTools: [
    { href: "/", label: "Handwriting personality test", note: "The 19-shape quiz that uses this chart." },
    { href: "/tools/slant", label: "Slant measurement tool", note: "Measure one downstroke from a photo." },
    { href: "/tools/signature", label: "Signature measurement tool", note: "Measure a drawn signature's geometry." },
  ],
  relatedGuides: [
    { href: "/guides/four", label: "Open 4 or closed 4" },
    { href: "/guides/seven", label: "Crossed 7 handwriting" },
    { href: "/guides/spacing", label: "Word spacing in handwriting" },
    { href: "/guides/slant", label: "Handwriting slant" },
    { href: "/blog/what-is-handwriting-personality-test", label: "What is a handwriting personality test?" },
  ],
  ctaLabel: "Take the 19-shape test",
  ctaHref: "/#test",
  ctaNote: "Pick the shapes closest to your own. Eight answers are enough to produce a fictional label; nothing is uploaded.",
  schemaName: "Handwriting Sample Chart",
  schemaDescription:
    "A free printable reference chart of the 19 shapes used in the handwriting personality test, with filters, search, and guide links.",
  applicationCategory: "ReferenceApplication",
  featureList: [
    "All 19 test shapes in one chart",
    "Filters for digits, letters, symbols, spacing, and slant",
    "Search by shape name",
    "Print-friendly layout",
    "Links to guides and quiz questions",
  ],
  howToName: "How to use the handwriting sample chart",
};
