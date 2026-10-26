import type { BlogPost } from "@/content/seo/types";

const scholar = (query: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-handwriting-personality-test",
    title: "What Is a Handwriting Personality Test?",
    seoTitle: "What Is a Handwriting Test?",
    h1: "What is a handwriting personality test?",
    meta: "A handwriting personality test asks you to read meaning into letterforms. Here is what the tests do, what the evidence supports, and how this quiz works.",
    kicker: "Explainer",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingTime: "8 min read",
    intro: [
      "A handwriting personality test is any procedure that asks you to infer personality, character, or ability from the way someone writes. The inference can be made by a trained graphologist, by a software model, or by a quiz that asks you to pick the forms closest to your own. The label changes; the central claim does not. The claim is that a visible feature of writing stands for an invisible feature of the person.",
      "That claim is old, popular, and much weaker than most quizzes imply. This article explains what the tests do, where the idea came from, what controlled studies have found, and how to tell an honest shape quiz from a personality diagnosis in disguise.",
    ],
    sections: [
      {
        id: "what-tests-do",
        h2: "What a handwriting personality test actually does",
        paragraphs: [
          "Most tests follow one of three designs. The first asks you to write a passage and then has a person or a model score features such as slant, size, spacing, and letter shape. The second shows you pairs of letterforms and asks which one is closest to yours; the result is computed from your choices. The third asks you to upload a sample and returns a generated report.",
          "The first design depends on the judgment of the scorer. The second depends on the design of the questions and the scoring rule. The third depends on whatever model or template the site uses, which is often hidden. All three produce a confident-sounding output. Only the second can be inspected without a handwriting sample, because the inputs are visible choices rather than a photo.",
          "A personality test in the psychometric sense has to be reliable and valid. Reliability means it produces consistent results across occasions and scorers. Validity means it measures the construct it claims to measure. A handwriting quiz can be reliable in the narrow sense that the same choices produce the same label. That does not make it valid as a measure of personality.",
        ],
      },
      {
        id: "history",
        h2: "A short history of the idea",
        paragraphs: [
          "Graphology grew in nineteenth-century Europe. Jean-Hippolyte Michon coined the term in the 1870s and promoted the idea that specific strokes correspond to specific character traits. Later writers such as Jules Crépieux-Jamin developed elaborate systems of signs. The systems were influential in France, Germany, and parts of Latin America, especially in personnel selection.",
          "Alfred Binet, better known for intelligence testing, tested graphological claims in the late nineteenth century and found little support for them. The debate continued through the twentieth century. By the 1980s, graphology was common enough in some European hiring processes that researchers began running meta-analyses on its predictive validity.",
          "The largest and most cited is Neter and Ben-Shakhar's 1989 meta-analysis in Personality and Individual Differences. It examined studies in which graphologists predicted job performance or other outcomes. When the content of the writing was neutral, the average validity was close to zero. Psychologists who were not trained in graphology did better, suggesting that they were reading the content or the general impression of the text rather than the strokes.",
        ],
      },
      {
        id: "evidence",
        h2: "What the evidence supports",
        paragraphs: [
          "The evidence does not support the strong graphological claim that handwriting reveals a stable personality profile. Reviews of the field have repeatedly found small, inconsistent effects and methodological problems. A 2009 study by Dazzi and Pedrabissi reported some association between graphological signs and self-reported personality, but the effect was limited and did not establish that a graphologist can make useful predictions about an individual.",
          "There is a difference between a statistical association in a sample and a decision about a person. Even a small correlation would not justify rejecting a job candidate or diagnosing a mental health condition from a page of writing. Employment tests need evidence of job relevance and fairness; handwriting has neither at the level required.",
          "Some features are real and measurable. Slant is an angle. Spacing is a distance. Letterforms follow regional and school models. What is not established is the jump from those measurements to traits such as honesty, intelligence, or leadership. The measurements are useful for description and comparison. They are not a personality profile.",
        ],
      },
      {
        id: "why-popular",
        h2: "Why the tests remain popular",
        paragraphs: [
          "Handwriting feels personal. A signature is a mark of identity, and a page of writing carries the texture of a person's hand. That makes the idea of reading character from it intuitively appealing. The appeal is strengthened by Barnum statements: broad descriptions such as 'you are thoughtful but sometimes impulsive' fit almost everyone.",
          "Quizzes also benefit from the Forer effect. People accept vague feedback as accurate when it seems tailored to them. A result that lists a few flattering traits and one mild flaw will feel more accurate than a result that says 'this is a set of letterforms'. The feeling of accuracy is not evidence of validity.",
          "Finally, handwriting analysis is easy to demonstrate. A graphologist can point to a loop and tell a story. The story is memorable, and the audience rarely sees a control condition in which the same story is told about a different page. The plausibility of the performance is not the same as the accuracy of the inference.",
        ],
      },
      {
        id: "this-test",
        h2: "How this site's test is different",
        paragraphs: [
          "The test on this site is a shape-picking quiz. It asks 12 questions about digits, letters, the ampersand, word spacing, and slant. You choose the form closest to your own. The answers are weighted across four visual directions: structure, finish, rhythm, and character. Eight answers produce a result from six fictional labels.",
          "The result page shows the four totals and explains the scoring rule. It does not claim that the label is a personality type. It does not ask for a sample, an email address, or a photo. The label is a filing category for the shapes you chose, and the site says so in the result, the FAQ, and the methodology.",
          "This design is not a scientific instrument. It is an attempt to make the vocabulary of handwriting analysis concrete while refusing the inference the vocabulary usually invites. You can use it to notice what you write, compare forms with a friend, or test a claim you read elsewhere. You should not use it to judge a person.",
        ],
      },
      {
        id: "how-to-evaluate",
        h2: "How to evaluate any handwriting test",
        paragraphs: [
          "Ask five questions. What is the input: a sample, a photo, or a set of choices? Who scores it, and can you inspect the rule? What does the output claim to measure: a shape label, a set of measurements, or a personality trait? Is there evidence that the output predicts something outside the test? What happens to your sample?",
          "A tool that says 'this is a description of your letterforms' is making a modest claim. A tool that says 'this reveals your true self' is making a large claim and needs large evidence. The size of the claim should match the size of the evidence. Most handwriting quizzes do not meet that standard.",
          "If a test asks for a handwriting sample, check whether it is uploaded, stored, or used to train a model. If it asks for personal details, ask why. If the result is vague and flattering, try the same test twice with different answers and see whether the description changes. A valid instrument should be stable; a Barnum generator will happily produce a new flattering story.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "Is a handwriting personality test accurate?",
        a: "The strong claim that handwriting reveals personality is not supported by the evidence. Some features can be described reliably, but the jump from a letterform to a personality trait is not validated for individual decisions.",
      },
      {
        q: "What is the difference between graphology and handwriting analysis?",
        a: "Graphology is the practice of inferring personality from handwriting. Handwriting analysis can also mean measurement, document examination, or the study of writing development. The terms overlap, but the claims are different.",
      },
      {
        q: "Can handwriting reveal intelligence?",
        a: "No reliable evidence supports reading intelligence from handwriting. Intelligence is measured by cognitive tests, not by the shape of a letter.",
      },
      {
        q: "Can employers use handwriting analysis?",
        a: "They can, but the evidence does not support it as a valid selection method. Many jurisdictions also treat it as a questionable practice. Job-relevant work samples and structured interviews are better supported.",
      },
      {
        q: "Why do people believe handwriting reveals personality?",
        a: "Handwriting feels personal, graphology has a long cultural history, and vague descriptions create a strong sense of accuracy. None of those is evidence of validity.",
      },
      {
        q: "What does this site's test measure?",
        a: "It counts shape choices across four visual directions and returns one of six fictional labels. It is not a validated personality measure.",
      },
      {
        q: "Does the test need a handwriting sample?",
        a: "No. It is multiple choice. You pick the forms closest to your own, and the result is calculated from those choices.",
      },
      {
        q: "Where can I read the original research?",
        a: "Start with Neter and Ben-Shakhar (1989), Ben-Shakhar et al. (1986), and the Beyerstein and Beyerstein collection The Write Stuff (1992). The sources below link to search records.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences: A meta-analytic approach. Personality and Individual Differences, 10(7), 737-745.",
        href: scholar("Neter Ben-Shakhar 1989 predictive validity graphological inferences meta-analytic"),
      },
      {
        label: "Ben-Shakhar, G., Bar-Hillel, M., Bilu, N., Ben-Abba, E., & Flug, A. (1986). Can graphology predict occupational success? Journal of Applied Psychology, 71(4), 645-653.",
        href: scholar("Ben-Shakhar 1986 graphology predict occupational success"),
      },
      {
        label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
        href: scholar("Beyerstein Beyerstein The Write Stuff Evaluations of Graphology"),
      },
      {
        label: "Dazzi, C., & Pedrabissi, L. (2009). Graphology and personality: An empirical study on validity of handwriting analysis. Psychological Reports, 105(3), 1255-1268.",
        href: scholar("Dazzi Pedrabissi 2009 graphology personality validity"),
      },
    ],
    relatedTools: [
      { href: "/", label: "Take the 12-shape test", note: "Eight answers produce a fictional label." },
      { href: "/tools/sample-chart", label: "See the sample chart", note: "All 12 shapes in one reference." },
      { href: "/tools/slant", label: "Measure handwriting slant", note: "A photo-based angle measurement." },
    ],
    relatedPosts: [
      { href: "/blog/graphology", label: "Graphology: what the evidence says" },
      { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting without personality claims" },
      { href: "/methodology", label: "How this test is built" },
      { href: "/science", label: "The science page" },
    ],
    ctaLabel: "Try the shape test",
    ctaHref: "/#test",
    ctaNote: "The test is free and does not ask for a handwriting sample. Read the methodology before treating the label as more than a description.",
  },
  {
    slug: "how-to-analyze-handwriting",
    title: "How to Analyze Handwriting Without Personality Claims",
    seoTitle: "How to Analyze Handwriting",
    h1: "How to analyze handwriting",
    meta: "A practical guide to describing handwriting: page setup, size, spacing, slant, letterforms, and the difference between observation and inference.",
    kicker: "Practical guide",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingTime: "9 min read",
    intro: [
      "You can learn a great deal about a page of handwriting without claiming to know the person who wrote it. You can describe the size of the letters, the distance between words, the angle of the downstrokes, the baseline, the margins, and the forms that belong to a particular school model. Those observations are useful for comparison, teaching, archival description, and design.",
      "This guide shows how to make them in a repeatable order. It also marks the point where description usually turns into unsupported inference, so you can stop before a measurement becomes a personality verdict.",
    ],
    sections: [
      {
        id: "prepare",
        h2: "1. Prepare a fair sample",
        paragraphs: [
          "Use ordinary writing, not a signature and not a carefully copied quotation. A signature is a practiced display form; a copied passage may be slower and more formal than everyday writing. Three or four lines of something you wrote without thinking about being analyzed are more representative.",
          "Use the pen and paper you normally use. A fountain pen on smooth paper produces different lines from a ballpoint on a rough notebook, and a tablet produces no ink at all. Note the conditions: pen type, paper, whether you were standing, and whether the page was on a hard surface.",
          "If you are comparing two samples, keep the conditions as similar as possible. A change in pen can change the apparent size, spacing, and slant. If the conditions differ, describe them before you describe the writing.",
        ],
      },
      {
        id: "size",
        h2: "2. Describe size and proportion",
        paragraphs: [
          "Measure the height of a lowercase x-height, not the tallest ascender. The x-height is the body of a letter such as a, c, e, or o. Compare it with the line spacing and with the width of the letters. A page can have large letters and tight line spacing, or small letters with generous space.",
          "Size is relative. A page written on a small notepad may look large when photographed, and a page written on A4 may look small. If you need a number, measure the x-height in millimetres and record the paper size. If you only need a description, use terms such as compact, moderate, or expansive, and say what you are comparing.",
          "Proportion matters more than a single height. Are ascenders and descenders long relative to the x-height? Are the letters wide or narrow? Is the writing crowded at the top of the line or the bottom? Those relationships survive a change of paper better than absolute size.",
        ],
      },
      {
        id: "spacing",
        h2: "3. Describe spacing and baseline",
        paragraphs: [
          "Look at three gaps: between letters, between words, and between lines. Letter spacing is often called tracking in typography; in handwriting it varies with speed and with the writer's model. Word spacing is easier to judge relative to the width of an average letter than in millimetres.",
          "The baseline is the invisible line the letters sit on. Does the writing stay level, drift upward, drift downward, or wave? A drift can be caused by the page angle, the writing surface, or the writer's arm position. It is not a mood ring. Describe the drift, then look for a mechanical explanation.",
          "Margins are part of the layout. A narrow left margin may mean the writer started at the edge of the page; a wide right margin may mean the page was rotated. Before reading a margin as a choice, check whether the paper or the writing surface constrained it.",
        ],
      },
      {
        id: "slant",
        h2: "4. Measure slant",
        paragraphs: [
          "Slant is the angle of a downstroke from vertical. Choose a straight stem, not the curved side of a letter. Align a ruler or the slant tool with the middle of the stroke and read the angle. Take three readings from different lines and report the range.",
          "A photo can distort the angle. Keep the camera square to the page and avoid the corners of the frame. If you are comparing pages, use the same camera position and the same kind of paper. A change of 10 degrees between two pages may be a real change in the writing or a change in the photograph.",
          "For a quick description, use left of vertical, near vertical, and right of vertical. For a comparison, record the degrees. The exact number is more useful than a trait word, and it is easier to check.",
        ],
      },
      {
        id: "letterforms",
        h2: "5. Describe letterforms",
        paragraphs: [
          "Pick a small set of forms that vary visibly: 4, 7, a, g, t, i, y, and the ampersand. For each, decide which form is closer. Is the 4 open or closed? Is the 7 crossed? Is the a single-storey or double-storey? Is the g looped or open? Where is the t crossed? Is the i dotted, undotted, or circled?",
          "Name the form without explaining the person. 'Closed 4' is an observation. 'Perfectionist' is an inference. The first can be checked by another person; the second cannot. If you want to go further, ask where the form is taught and whether the writer uses it consistently.",
          "Consistency is a useful description. Does the same form appear on every line, or does it change with speed? A writer may use a closed 4 in a careful note and an open 4 in a hurried one. That variation is a fact about the page, not a contradiction in the personality.",
        ],
      },
      {
        id: "pressure-speed",
        h2: "6. What you cannot see in a photo",
        paragraphs: [
          "A photo records ink, not pressure. A dark line can come from a soft pencil, a wet pen, or a heavy hand. Without a known pen and paper, you cannot separate those causes. Do not describe pressure from a photograph unless you have a controlled sample and a reason to trust the comparison.",
          "A photo also loses speed and stroke order. You can sometimes infer that a line was written quickly from its smoothness, but you cannot measure speed without a process recording. If speed matters, use a digitizing tablet or a video. Even then, the measurement describes the task and the device as much as the writer.",
          "Erasing, retracing, and correction are visible, but their meaning is not. A crossed-out word may be a change of mind, a slip of the pen, or a deliberate edit. Describe the mark; do not turn it into a character trait.",
        ],
      },
      {
        id: "observation-vs-inference",
        h2: "7. Keep observation and inference separate",
        paragraphs: [
          "A useful analysis has two columns. The left column contains what you can point to: 'x-height 2.5 mm', 'word gaps about one letter wide', 'stems lean 12 degrees right', 'closed 4 on all four lines'. The right column contains what you are tempted to conclude. Keep the right column empty unless you have evidence that the conclusion follows.",
          "The evidence for graphological inferences is weak. A meta-analysis by Neter and Ben-Shakhar (1989) found near-zero validity for graphologists' predictions in personnel settings when the text was neutral. That does not mean no one can ever learn anything from handwriting; it means the specific claim that a stroke reveals a stable trait is not well supported.",
          "You can still use handwriting analysis for description, comparison, teaching, and document study. Those uses do not require the personality leap. If you are writing about a historical figure, say what the page shows and what it does not. If you are teaching, ask students to compare forms and explain the model behind them.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "How do you analyze handwriting?",
        a: "Start with a fair sample, then describe size, spacing, baseline, slant, and letterforms. Keep observations separate from personality inferences, and note the pen, paper, and conditions.",
      },
      {
        q: "What does handwriting analysis reveal?",
        a: "It can reveal the forms a writer uses, the layout of a page, and some measurable features such as slant and spacing. It does not reliably reveal personality, intelligence, or honesty.",
      },
      {
        q: "Should I use a photo or a scan?",
        a: "A flat scan is usually better for measurement because the page is square to the sensor. A photo is acceptable if the camera is directly above the page and the writing is not near the edges.",
      },
      {
        q: "How do I measure handwriting slant?",
        a: "Align a ruler or the slant tool with the straight part of a downstroke and read the angle from vertical. Take three readings and report the range.",
      },
      {
        q: "What is a good handwriting sample?",
        a: "Three or four lines of ordinary writing on unlined paper, using your normal pen. Leave out the signature and avoid copying a printed model.",
      },
      {
        q: "Can handwriting show stress or illness?",
        a: "Handwriting can change with fatigue, medication, injury, and neurological conditions, but changes are not a diagnosis. A clinician assesses health, not a letterform.",
      },
      {
        q: "Can I use this method to compare two people?",
        a: "You can compare descriptions of two samples, but you cannot identify a person from them. Forensic document examination is a separate, trained discipline with its own limits.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences. Personality and Individual Differences, 10(7), 737-745.",
        href: scholar("Neter Ben-Shakhar 1989 predictive validity graphological inferences"),
      },
      {
        label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
        href: scholar("Klimoski Rafaeli 1983 inferring personal qualities handwriting"),
      },
      {
        label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
        href: scholar("Beyerstein Beyerstein The Write Stuff Evaluations of Graphology"),
      },
    ],
    relatedTools: [
      { href: "/tools/slant", label: "Measure slant from a photo", note: "A local angle tool with an 8-degree upright band." },
      { href: "/tools/sample-chart", label: "Compare the 12 shapes", note: "A printable reference chart." },
      { href: "/tools/signature", label: "Measure a signature", note: "Width, height, length, turns, and approximate slant." },
    ],
    relatedPosts: [
      { href: "/blog/graphology", label: "Graphology: what the evidence says" },
      { href: "/blog/how-to-measure-handwriting-slant", label: "How to measure handwriting slant" },
      { href: "/guides", label: "All handwriting guides" },
      { href: "/science", label: "The science page" },
    ],
    ctaLabel: "Try the shape test",
    ctaHref: "/#test",
    ctaNote: "The quiz is a shape-filing exercise, not a personality assessment. It takes about two minutes and needs no sample.",
  },
  {
    slug: "graphology",
    title: "Graphology: What the Evidence Actually Says",
    seoTitle: "Graphology and the Evidence",
    h1: "Graphology: what the evidence says",
    meta: "Graphology claims handwriting reveals personality. Here is the history, the strongest studies, why the claim persists, and what it means for hiring.",
    kicker: "Evidence review",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingTime: "9 min read",
    intro: [
      "Graphology is the practice of inferring personality, character, or ability from handwriting. It is not the same as handwriting measurement, and it is not the same as forensic document examination. It is a specific interpretive claim: that the way a person forms letters carries information about the kind of person they are.",
      "The claim has been tested for more than a century. The results are not a blank slate. They point in a consistent direction: graphologists perform poorly when they are asked to predict outcomes, and the features they cite are not stable enough to support individual decisions. This article explains the evidence and why the practice survives anyway.",
    ],
    sections: [
      {
        id: "what-graphology-claims",
        h2: "What graphology claims",
        paragraphs: [
          "Graphology is not one doctrine. Different schools use different sign lists. Common claims include: a right slant indicates emotional expressiveness; a large signature indicates confidence; a closed loop indicates secrecy; a heavy pressure indicates strong drives; a rising baseline indicates optimism. The signs are often combined into a narrative report.",
          "The reports tend to be broad. A graphologist may describe a client as 'reserved but warm with close friends, practical yet imaginative, and more sensitive than they appear'. Such statements are hard to falsify because almost everyone recognizes part of them. That is the Barnum effect, and it is one reason graphology feels accurate to the people who receive a reading.",
          "A scientific claim needs a defined feature, a defined outcome, and a test that could fail. 'Right slant means outgoing' can be tested: measure the slant, measure extraversion, and see whether the relationship holds across people and occasions. The claim fails when the feature is unstable or the correlation is near zero.",
        ],
      },
      {
        id: "history",
        h2: "How graphology became established",
        paragraphs: [
          "The modern practice traces to nineteenth-century France. Michon named it and promoted the idea that strokes correspond to character. Crépieux-Jamin developed a more systematic method, and the practice spread through Europe and Latin America. It entered personnel selection, education, and even some medical settings.",
          "The cultural authority of graphology varied by country. In France, it became a common feature of hiring for certain roles. In the United States, it was more often a popular or corporate curiosity. The variation matters because it shows that graphology's acceptance was social and historical, not the result of a decisive scientific trial.",
          "Early tests were not kind. Binet's studies in the 1890s found little support for the claimed correspondences. Later researchers introduced better controls: neutral text, blind scoring, multiple raters, and real outcomes. The better the design, the smaller the effect tended to become.",
        ],
      },
      {
        id: "meta-analysis",
        h2: "The meta-analytic evidence",
        paragraphs: [
          "The most cited review is Neter and Ben-Shakhar's 1989 meta-analysis. It pooled studies in which graphologists made predictions about job performance or similar outcomes. When the content of the writing was neutral, the average validity was close to zero. When the content was not neutral, graphologists did better, but so did non-graphologists, which suggests that the text itself was carrying the information.",
          "Ben-Shakhar and colleagues' 1986 study is often cited as a direct test in a personnel setting. Graphologists' predictions did not outperform simple alternatives. Klimoski and Rafaeli's 1983 review reached a similar conclusion: the evidence did not support handwriting analysis as a predictor of personal qualities.",
          "A later study by Dazzi and Pedrabissi (2009) reported a modest association between some graphological signs and self-reported traits. Even if that association is real, it does not establish that a graphologist can make a useful prediction about an individual. A small group-level correlation is not a hiring test, a diagnosis, or a reliable portrait.",
        ],
      },
      {
        id: "why-it-fails",
        h2: "Why the strong claim fails",
        paragraphs: [
          "Handwriting is variable. The same person produces different slants, sizes, and letterforms depending on speed, pen, paper, mood, and context. A feature that changes from page to page cannot reliably index a stable trait.",
          "The inference is underdetermined. A closed 4 may reflect a school model, a copied document, or a habit. A right slant may reflect page position or a fast hand. The graphologist selects one explanation from many possible ones, and the selection is not tested.",
          "Feedback is poor. In everyday life, people rarely learn whether a graphological reading was correct. The reading is plausible, the client agrees with parts of it, and no one runs a controlled comparison. Without feedback, a confident practice can persist for decades.",
        ],
      },
      {
        id: "hiring",
        h2: "Graphology and hiring",
        paragraphs: [
          "Employment decisions require evidence that a method is job-relevant, reliable, and fair. Graphology has not met that standard. A meta-analysis with near-zero validity is not a basis for screening candidates, and the practice raises fairness questions because the features are unrelated to the work.",
          "Some employers use graphology as one input among many, often with the idea that it adds a little information. The evidence does not support that use. A weak, unstable signal can add noise rather than information, and it can distract from structured interviews and work samples that have better support.",
          "If you are a candidate and encounter a handwriting test, you can ask what the test measures, how it is scored, and what evidence supports its use. Those questions are reasonable for any selection instrument. The answers may tell you more about the employer than the test tells them about you.",
        ],
      },
      {
        id: "not-forensics",
        h2: "Graphology is not forensic document examination",
        paragraphs: [
          "Forensic document examiners compare a questioned writing with known writing to judge whether the same hand produced it. They study line quality, pen lifts, construction, and other features. Their task is identification, not personality. The two fields are often confused because both involve handwriting and both can appear in legal settings.",
          "Forensic examination also has error rates and limitations. The point here is not that it is infallible. The point is that the question is different. A document examiner does not tell you whether the writer is honest; a graphologist does, without the same comparative method or evidence base.",
          "This site's tools are neither. The slant and signature tools measure geometry. The quiz labels a set of shape choices. None of them identifies a writer or diagnoses a personality.",
        ],
      },
      {
        id: "what-to-do",
        h2: "What to do with graphology claims",
        paragraphs: [
          "Enjoy the history and the vocabulary, but ask for evidence when a claim is used to judge a person. A single letterform is not a character reference. A signature is not a personality test. A confident report is not a validation study.",
          "If you want to test a claim yourself, choose a specific feature and a specific outcome. Measure the feature on several pages, measure the outcome with a validated instrument, and see whether the relationship holds. That is a small, honest experiment. It is more informative than another reading.",
          "The most defensible position is modest: handwriting is a rich record of learning, habit, and movement. It can be described, compared, and studied. The claim that it reveals a stable personality is not supported well enough to use on people.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "Is graphology scientifically valid?",
        a: "The strong claim that handwriting reveals personality is not supported by the evidence. Meta-analyses of graphologists' predictions have found near-zero validity in personnel settings.",
      },
      {
        q: "Who invented graphology?",
        a: "Jean-Hippolyte Michon coined the term in the 1870s. Earlier writers had made similar claims, and later systematizers developed elaborate sign lists.",
      },
      {
        q: "Can graphology predict job performance?",
        a: "The evidence does not support it. Studies and meta-analyses have not found useful predictive validity for personnel decisions.",
      },
      {
        q: "Is graphology used in France?",
        a: "It has a history of use in some French hiring contexts, but history is not evidence of validity. The practice has been criticized by researchers for decades.",
      },
      {
        q: "What is the difference between graphology and forensic handwriting analysis?",
        a: "Graphology infers personality. Forensic document examination compares writing samples to judge whether the same hand produced them. They have different goals, methods, and evidence.",
      },
      {
        q: "Why do graphology readings feel accurate?",
        a: "They often use broad, flattering statements that fit most people. That is the Barnum effect. The feeling of accuracy is not a validation study.",
      },
      {
        q: "Does this site use graphology?",
        a: "No. The quiz labels shape choices and the tools measure geometry. The site does not claim to read personality from handwriting.",
      },
      {
        q: "Where can I read more?",
        a: "The sources below include the Neter and Ben-Shakhar meta-analysis, the Ben-Shakhar et al. study, and the Beyerstein and Beyerstein collection.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences: A meta-analytic approach. Personality and Individual Differences, 10(7), 737-745.",
        href: scholar("Neter Ben-Shakhar 1989 predictive validity graphological inferences"),
      },
      {
        label: "Ben-Shakhar, G., Bar-Hillel, M., Bilu, N., Ben-Abba, E., & Flug, A. (1986). Can graphology predict occupational success? Journal of Applied Psychology, 71(4), 645-653.",
        href: scholar("Ben-Shakhar 1986 graphology predict occupational success"),
      },
      {
        label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
        href: scholar("Klimoski Rafaeli 1983 inferring personal qualities handwriting"),
      },
      {
        label: "Dazzi, C., & Pedrabissi, L. (2009). Graphology and personality: An empirical study on validity of handwriting analysis. Psychological Reports, 105(3), 1255-1268.",
        href: scholar("Dazzi Pedrabissi 2009 graphology personality validity"),
      },
    ],
    relatedTools: [
      { href: "/", label: "Take the shape test", note: "A fictional label from 12 choices." },
      { href: "/tools/slant", label: "Measure slant", note: "A geometry tool, not a personality reading." },
      { href: "/tools/sample-chart", label: "See the shapes", note: "The forms behind the quiz vocabulary." },
    ],
    relatedPosts: [
      { href: "/blog/what-is-handwriting-personality-test", label: "What is a handwriting personality test?" },
      { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting" },
      { href: "/science", label: "The science page" },
      { href: "/methodology", label: "How this test is built" },
    ],
    ctaLabel: "Take the test with the limits in view",
    ctaHref: "/#test",
    ctaNote: "The result is a filing label for shapes, not a graphology reading. The methodology page explains the scoring rule.",
  },
  {
    slug: "best-free-handwriting-analysis-tools",
    title: "Free Handwriting Analysis Tools: How to Choose One",
    seoTitle: "Free Handwriting Tools",
    h1: "Free handwriting analysis tools",
    meta: "A buyer's guide to free handwriting tools: quiz, measurement, and reference types, what each can honestly output, and how the four tools here compare.",
    kicker: "Buyer's guide",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingTime: "7 min read",
    intro: [
      "Search for a free handwriting analysis tool and you will find three very different products sharing one phrase. Some are personality quizzes. Some measure an image. Some generate a long report from a sample you upload. The word 'analysis' hides the difference, and the difference matters more than the price.",
      "This guide separates the categories, lists the questions to ask before using one, and describes what this site's four tools do. It is not a ranking of competitors; it is a way to tell what a tool can honestly deliver.",
    ],
    sections: [
      {
        id: "three-types",
        h2: "The three types of tool",
        paragraphs: [
          "A quiz asks you questions about your writing and returns a label. The input is your self-report, not an image. The result depends on the question design and the scoring rule. A quiz can be transparent and still be fictional; the important question is whether it admits that.",
          "A measurement tool takes an image or a drawing and returns numbers. Slant, size, spacing, and signature geometry are common outputs. Measurement can be precise without being meaningful. A 12-degree angle is a real angle, but it is not a personality score.",
          "A report generator takes a sample and returns a narrative about the writer. This is the category most likely to overclaim. The report may be template-driven, or it may use a model trained on a small dataset. Without a validation study, the narrative is entertainment, not assessment.",
        ],
      },
      {
        id: "questions",
        h2: "Questions to ask before you upload",
        paragraphs: [
          "What is the input? If the tool needs a handwriting sample, ask whether the image is uploaded, stored, or used for training. A local-only tool is easier to trust because there is no copy to lose.",
          "What is the output? A label, a set of measurements, or a personality report? The last is the largest claim and needs the largest evidence. If the site does not explain its method, assume the method is not meant to be checked.",
          "Is the tool free in a meaningful sense? Some free tools require an account, an email, or a subscription to see the full result. Others are free because the sample is the product. Read the privacy page before the sample page.",
          "Does the tool say what it cannot do? A credible tool states its limits. A tool that claims to reveal your true self, predict your career, or diagnose a condition is making claims that handwriting evidence does not support.",
        ],
      },
      {
        id: "this-site",
        h2: "What this site's tools do",
        paragraphs: [
          "The 12-shape test is a quiz. It asks about digits, letters, the ampersand, spacing, and slant. Eight answers produce one of six fictional labels. It does not ask for a sample, and it shows the four direction totals so you can see how the label was reached.",
          "The slant tool is a measurement tool. You load a photo, align a red stem with a downstroke, and read the angle. The photo stays in the browser. The tool reports left, upright, or right of vertical and states the 8-degree band it uses.",
          "The signature tool is a measurement tool with a canvas. You draw a signature and read its width, height, path length, turns, and approximate slant. It does not identify a writer or score a personality. The sample chart is a reference tool: it shows the 12 shapes, filters them, and prints them. It is not an analysis at all, which is the point.",
        ],
      },
      {
        id: "what-to-avoid",
        h2: "What to avoid",
        paragraphs: [
          "Avoid tools that promise to reveal a personality from a photo or a signature. The claim is not supported, and the tool has no way to check it. Avoid tools that ask for a full name, date of birth, or employer before showing a result; those details are not needed to measure an angle or label a shape.",
          "Avoid reports that are long, flattering, and impossible to falsify. Length is not evidence. A report full of Barnum statements will feel personal because it is designed to. Ask whether the same report could be given to someone else with equal plausibility.",
          "Avoid using any handwriting tool for hiring, credit, insurance, dating, or a medical decision. The evidence does not support those uses, and the consequences for the person being judged can be serious.",
        ],
      },
      {
        id: "how-to-test",
        h2: "A quick test of any tool",
        paragraphs: [
          "Run the tool twice with slightly different inputs. A measurement tool should return numbers that change with the input. A quiz should change labels when the answers change. A report generator may return the same flattering narrative regardless of the sample, which tells you it is not measuring the sample.",
          "Ask a friend to try it and compare. If the two reports are nearly interchangeable, the tool is probably using broad statements rather than specific evidence. That is not necessarily fraud; it is the structure of a Barnum product.",
          "Finally, read the method page. If there is no method page, there is no way to know what the tool is doing. A tool that explains its measurement is easier to trust, even when the measurement is narrow.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "What is the best free handwriting analysis tool?",
        a: "There is no single best tool because the categories do different things. Choose a quiz for a playful label, a measurement tool for geometry, and a reference chart for comparison. Avoid report generators that claim to read personality.",
      },
      {
        q: "Are free handwriting analysis tools accurate?",
        a: "Accuracy depends on the claim. A measurement tool can be accurate as geometry. A personality report is not supported by the evidence, however accurate the interface looks.",
      },
      {
        q: "Do I have to upload my handwriting?",
        a: "Not for this site's tools. The quiz is multiple choice, the slant photo stays in the browser, and the signature tool uses a local canvas. Check any other tool's privacy page before uploading.",
      },
      {
        q: "Can a free tool tell me my personality?",
        a: "A quiz can give you a label, but it cannot measure your personality in a validated way. Treat the label as entertainment or as a description of your choices, not as an assessment.",
      },
      {
        q: "What should I look for in a handwriting tool?",
        a: "A clear input, a visible method, an honest output, a privacy policy, and a statement of limits. Avoid tools that promise diagnoses or use broad, unfalsifiable language.",
      },
      {
        q: "Is handwriting analysis the same as graphology?",
        a: "No. Handwriting analysis can mean measurement or document examination. Graphology is the specific practice of inferring personality from handwriting, and its strong claims are not well supported.",
      },
      {
        q: "Can I use these tools on a phone?",
        a: "Yes. The quiz and canvas accept touch, and the slant tool accepts a photo from the phone's camera or library.",
      },
      {
        q: "What is the sample chart for?",
        a: "It shows the shapes used in the test so you can compare your writing before answering. It is a reference and print tool, not a personality analysis.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences. Personality and Individual Differences, 10(7), 737-745.",
        href: scholar("Neter Ben-Shakhar 1989 predictive validity graphological inferences"),
      },
      {
        label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
        href: scholar("Beyerstein Beyerstein The Write Stuff Evaluations of Graphology"),
      },
      {
        label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
        href: scholar("Klimoski Rafaeli 1983 inferring personal qualities handwriting"),
      },
    ],
    relatedTools: [
      { href: "/tools", label: "All four handwriting tools", note: "Test, slant, signature, and chart in one place." },
      { href: "/tools/slant", label: "Slant measurement", note: "Measure one downstroke from a photo." },
      { href: "/tools/signature", label: "Signature measurement", note: "Draw and measure a signature locally." },
    ],
    relatedPosts: [
      { href: "/blog/what-is-handwriting-personality-test", label: "What is a handwriting personality test?" },
      { href: "/blog/graphology", label: "Graphology: what the evidence says" },
      { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting" },
      { href: "/methodology", label: "How this test is built" },
    ],
    ctaLabel: "Open the tools hub",
    ctaHref: "/tools",
    ctaNote: "Four tools with explicit limits, no uploads, and no accounts. Start with the test or the chart.",
  },
  {
    slug: "how-to-measure-handwriting-slant",
    title: "How to Measure Handwriting Slant Accurately",
    seoTitle: "Measure Handwriting Slant",
    h1: "How to measure handwriting slant",
    meta: "A step-by-step method for measuring handwriting slant from paper or a photo, including camera setup, common errors, and the limits of an angle.",
    kicker: "Measurement guide",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingTime: "7 min read",
    intro: [
      "Handwriting slant is one of the easiest features to measure and one of the easiest to measure badly. A slight camera tilt, a curved sheet, or a diagonal stroke instead of a vertical stem can move the reading by ten degrees or more. The method below keeps the error visible and the claim small.",
      "You can do this with paper, a ruler, and a protractor, or with the free slant tool on this site. The geometry is the same. The difference is convenience and the risk of trusting a number without checking the image.",
    ],
    sections: [
      {
        id: "definition",
        h2: "What slant means",
        paragraphs: [
          "Slant is the angle between a downstroke and true vertical. If the top of the stroke falls to the right of the base, the slant is rightward. If it falls to the left, the slant is leftward. If the stroke is close to vertical, the writing is upright.",
          "The angle is usually reported in degrees from vertical, not from horizontal. A stroke that follows a 45-degree diagonal is 45 degrees from vertical, not 45 degrees from the baseline. Keep the reference line explicit; many disagreements about slant are disagreements about the baseline.",
          "A page has many strokes. A single number is always a summary. Report which stroke you measured and how many readings you took. 'The first downstroke of the first line is 12 degrees right' is more useful than 'the handwriting is right-slanted'.",
        ],
      },
      {
        id: "paper-method",
        h2: "The paper method",
        paragraphs: [
          "Place the page on a flat surface and align the edge of the paper with the edge of a table or a straight ruler. Draw a light vertical reference line on a transparent overlay if you do not want to mark the page. A sheet of acetate and a fine marker work well.",
          "Choose a straight downstroke in the middle of a line, away from the edge of the page. Align the ruler with the middle of the stroke, not with the entry or exit curve. Read the angle where the ruler meets the vertical reference. Repeat on three strokes from different lines.",
          "If you are using a protractor, measure the acute angle between the stroke and vertical, then note the direction. A 12-degree right slant and a 12-degree left slant have the same magnitude and different signs. The sign matters more than the decimal place.",
        ],
      },
      {
        id: "photo-method",
        h2: "The photo method",
        paragraphs: [
          "Put the page flat and hold the camera directly above it. Use both hands or a stand; a one-handed shot is usually tilted. Keep the page parallel to the camera sensor and fill the frame with the writing area.",
          "Avoid the corners of the frame. Lens distortion is strongest there, and a stroke near the edge can appear to lean more than it does. If you cannot avoid the edge, crop the photo and use the center.",
          "Load the photo into the slant tool, align the red stem with the stroke, and read the angle. Take three readings and compare. If they differ by more than a few degrees, check the camera position before you conclude that the writing is variable.",
        ],
      },
      {
        id: "errors",
        h2: "Common errors",
        paragraphs: [
          "Measuring a curve instead of a stem is the most common mistake. The side of an o or the bowl of an a is not a downstroke. Choose a straight segment and ignore the ends.",
          "A tilted page is the second. If the paper is rotated, every vertical reference in the image is rotated too. Use the edge of the paper or a ruled line as a check on the page orientation.",
          "A tilted camera is the third. A photo taken from the left makes right-leaning strokes look steeper. A photo taken from above but rotated makes them look different in another way. Keep the camera square and the page flat.",
          "A curved sheet is the fourth. A notebook page that curves near the spine changes the apparent angle across the page. Flatten the page or measure only the flat area.",
        ],
      },
      {
        id: "interpretation",
        h2: "What the number can and cannot tell you",
        paragraphs: [
          "The number describes the stroke you selected. It can be compared with another reading from the same page, the same writer on another day, or a model script. It can help you notice that a page is more upright than you thought, or that a signature leans differently from the notes around it.",
          "The number cannot tell you whether the writer is outgoing, anxious, creative, or honest. Graphology claims of that kind are not supported by controlled evidence. A meta-analysis by Neter and Ben-Shakhar (1989) found near-zero validity for graphologists' predictions in personnel settings when the text was neutral.",
          "The number also cannot tell you the pen angle. A writer can hold the pen at one angle and produce a stroke at another because the hand, wrist, and paper position all contribute. The photo measures the mark, not the joint.",
        ],
      },
      {
        id: "range",
        h2: "Report a range, not a verdict",
        paragraphs: [
          "Write down three readings and the stroke each came from. If the readings are 10, 12, and 15 degrees right, report a range of 10 to 15 degrees. A single average hides the variation that makes the measurement honest.",
          "If you are comparing two pages, use the same method and the same camera position. Report the conditions: pen, paper, lighting, and whether the page was flat. A difference between pages is more convincing when the conditions match.",
          "If the range is wide, say so. A wide range may mean the writing is variable, the page is curved, or the measurement is noisy. All three are useful findings. None of them requires a personality claim.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "What is handwriting slant?",
        a: "The angle between a downstroke and true vertical. It is usually reported in degrees, with left and right directions distinguished.",
      },
      {
        q: "How do you measure slant without a tool?",
        a: "Align a ruler with the straight part of a downstroke, compare it with a vertical reference, and read the angle with a protractor. Repeat on three strokes.",
      },
      {
        q: "What counts as upright handwriting?",
        a: "There is no universal cutoff. This site treats readings within 8 degrees of vertical as upright, but that is a design choice, not a scientific standard.",
      },
      {
        q: "Why does my photo give a different angle?",
        a: "Camera tilt, page rotation, lens distortion, and a curved sheet can all change the apparent angle. Keep the camera square to the page and measure away from the edges.",
      },
      {
        q: "Can I measure slant from a scan?",
        a: "Yes. A flat scan is often more reliable than a phone photo because the page is square to the sensor. Check that the scan is not stretched or rotated.",
      },
      {
        q: "Does slant reveal personality?",
        a: "No. Slant is a geometric feature. The claim that it reveals a stable personality trait is not supported by the evidence.",
      },
      {
        q: "How many readings should I take?",
        a: "At least three, from different lines. Report the range and the strokes you used rather than a single average.",
      },
      {
        q: "Can I use the slant tool on a signature?",
        a: "You can measure a straight stem in a signature, but a signature is a practiced display form. Use the signature tool for width, height, length, turns, and approximate slant.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences. Personality and Individual Differences, 10(7), 737-745.",
        href: scholar("Neter Ben-Shakhar 1989 predictive validity graphological inferences"),
      },
      {
        label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
        href: scholar("Beyerstein Beyerstein The Write Stuff Evaluations of Graphology"),
      },
      {
        label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
        href: scholar("Klimoski Rafaeli 1983 inferring personal qualities handwriting"),
      },
    ],
    relatedTools: [
      { href: "/tools/slant", label: "Use the slant tool", note: "Load a photo and read the angle locally." },
      { href: "/tools/sample-chart", label: "See the slant row", note: "A visual reference for left, upright, and right." },
      { href: "/tools/signature", label: "Measure a signature", note: "A canvas with width, height, length, and turns." },
    ],
    relatedPosts: [
      { href: "/guides/slant", label: "Slant guide: what a lean can show" },
      { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting" },
      { href: "/blog/graphology", label: "Graphology: what the evidence says" },
      { href: "/science", label: "The science page" },
    ],
    ctaLabel: "Measure a slant",
    ctaHref: "/tools/slant",
    ctaNote: "The tool is free, keeps the photo in the browser, and reports an angle rather than a personality score.",
  },
  {
    slug: "cute-text-is-not-a-font",
    title: "Cute Text Is Not a Font",
    seoTitle: "Cute Text Is Not a Font",
    h1: "Cute text is not a font",
    meta: "Bubble, kawaii, and coquette letters are Unicode you paste, not a font file. What each row does, where it breaks, and how it differs from handwriting.",
    kicker: "Explainer",
    published: "2026-10-26",
    updated: "2026-10-26",
    readingTime: "8 min read",
    intro: [
      "People who ask for a cute font usually want a short name that looks soft in a bio. The same round letters get called kawaii, coquette, or soft lettering, depending on who is asking. What they paste is a row of characters. It is not a font file, and it is not a sample of anyone's handwriting.",
      "This article walks through the seven rows a converter actually produces, what each row is made of, where the characters are accepted, and where the resemblance to handwriting stops.",
    ],
    sections: [
      {
        id: "rows",
        h2: "The rows on the page",
        paragraphs: [
          "Type a short name and the page shows seven results. The limit is 120 characters. The sample the page uses is Momo, and the rows come out in this order.",
        ],
        bullets: [
          "Bubble: 🅜🅞🅜🅞",
          "Heart bubble: ♡ 🅜🅞🅜🅞 ♡",
          "Bow bubble: ୨୧ 🅜🅞🅜🅞 ୨୧",
          "Flower bubble: ✿ 🅜🅞🅜🅞 ✿",
          "Soft-bracket bubble: ꒰ 🅜🅞🅜🅞 ꒱",
          "Cursive: ℳℴ𝓂ℴ",
          "Circled: Ⓜⓞⓜⓞ",
        ],
      },
      {
        id: "decorations",
        h2: "Decorations stay on the bubble row",
        paragraphs: [
          "Each row can be copied, or saved as a PNG. The heart, the bow, the flower, and the soft brackets are extra characters placed on either side of the word. They attach to the bubble row only, and only one pair at a time, so the name stays readable. The other examples on the page, Soft and Peach, follow the same pattern: a short word, one pair of hearts, nothing else.",
          "The bow is the pair ୨୧, repeated on both sides. It is not a picture of a ribbon. If a phone draws it as an empty box, the heart row is the one that still reads as a name.",
        ],
      },
      {
        id: "where-letters-come-from",
        h2: "Where the three letter shapes come from",
        paragraphs: [
          "Bubble letters and circled letters are enclosed alphanumerics. The bubble row uses the heavier negative-circled capitals, the forms that look like white letters sitting in dark rounds. The circled row uses the older, thinner circles, and it mixes a capital with small letters, as in Ⓜⓞⓜⓞ. Both rows convert A to Z, a to z, and digits.",
          "The cursive row is mathematical script, the Unicode block made for letters that look calligraphic. It converts letters only. A digit in that row stays a plain digit. A few cursive characters come from the older script letters in the Letterlike Symbols block, because the mathematical block does not supply a separate glyph for every case. Accented letters, emoji, and letters from other writing systems pass through unchanged. They are not redrawn as bubbles.",
          "A name with a number shows the split. Bubble and circled turn the digit into an enclosed digit. The cursive row leaves it as an ordinary number between script letters. If the name is something like Luna2 and every character should match, use a bubble row. An emoji in the middle is left as it is, so the bubble row breaks around it. Four to twelve letters, with digits only when you need them, is the range that stays readable.",
          "The charts for these blocks are linked at the end. They are the reason two people who type the same name get the same bubbles. The characters are assigned code points. They are not drawn.",
        ],
      },
      {
        id: "why-it-pastes",
        h2: "Why the result pastes into a bio",
        paragraphs: [
          "A font file has to be installed before any app can use it. These rows do not. They are characters that already exist, which is why an app that only accepts plain text can still show them. The conversion runs in the browser. The name is not uploaded.",
          "A [cute font generator](https://fancyfont.tools/cute-font-generator/) does that conversion for a short name. You type, the rows update, and you copy one row or download it as a PNG. The page does not ask for an account, and it does not offer a file to install. Display still depends on the phone, the app, and the game. Paste the result where you plan to use it, and look at it there before you keep it.",
        ],
      },
      {
        id: "three-names",
        h2: "Three names, one page",
        paragraphs: [
          "Coquette, kawaii, and soft lettering are names for the same set of rows. Coquette is the bow. Kawaii and soft lean on the heart or the flower. Searching for a separate generator for each name leads back to this one page. The difference is which pair of symbols you copy, not which tool you open.",
        ],
      },
      {
        id: "platforms",
        h2: "Where the characters are accepted",
        paragraphs: [
          "Instagram, TikTok, and Discord usually accept these characters in a display name, a bio, or a message. A username that only allows plain letters will reject them. Instagram usernames allow letters, digits, periods, and underscores, so a bubble name belongs in the display name or the bio, not in the handle.",
          "The useful length is a name, or a name with one heart or one bow. A caption of a few words can work. A full sentence becomes a string of heavy circles and is harder to read, and some of those circles will fail on a device that does not have the glyphs. If the bow or the soft brackets show as empty boxes, copy the heart row. The heart is an older character, and more devices draw it.",
          "Check the result on the device that will show it. A laptop can draw a character that a phone font, or a game's name field, replaces with an empty box. The converter's own note says the same thing. The preview on that page is not the preview inside the app.",
        ],
      },
      {
        id: "png",
        h2: "Copy the characters, or download a PNG",
        paragraphs: [
          "Copy when the text has to travel: a bio, a chat message, a display name. The characters stay text, so someone else can select them. A search for the plain spelling usually misses them, because a bubble M is a different character from the letter M.",
          "Download the PNG when the place you are posting will strip unusual characters, or when you need the look to stay fixed. The PNG is a picture. It cannot be a username, and it is not text a reader can select. Use it as an image, and keep the copied row for anywhere that still wants characters.",
        ],
      },
      {
        id: "not-handwriting",
        h2: "This is not handwriting",
        paragraphs: [
          "Every person who types Momo into the bubble row gets 🅜🅞🅜🅞. The roundness does not vary. The slant does not vary. The dot on an i, the join between letters, and the space between words are not there, because there was no pen. Two handwriting samples of the same name will differ in all of those, even when both writers were taught the same model.",
          "That is why these characters cannot stand in for a writing sample. They cannot be measured for slant, size, or spacing, and they cannot support a claim about the person who pasted them. A soft display name is a decoration. A page of handwriting is a set of marks that can be described, and the description still does not license a verdict about character.",
          "If you want to look at real letterforms, the sample chart on this site shows the shapes the quiz asks about, and the slant tool reads an angle off a photo of ordinary writing. The quiz itself returns a label for the shapes you pick. It does not read a cute name, and it does not treat a pasted row as evidence.",
        ],
      },
    ],
    faqsTitle: "Questions",
    faqs: [
      {
        q: "Do I download a cute font?",
        a: "No. The result is Unicode characters, which is why it pastes into apps that only accept plain text. The converter does not offer a font file.",
      },
      {
        q: "Are coquette and kawaii different tools?",
        a: "No. They are names for the same page. Coquette uses the bow. Kawaii and soft use the heart or the flower.",
      },
      {
        q: "Can I use this as an Instagram username?",
        a: "No. Instagram usernames allow letters, digits, periods, and underscores. Paste the cute name into the display name or the bio.",
      },
      {
        q: "Does cute text say anything about the person?",
        a: "No. It is a decorated string of characters. It is not a handwriting sample, and it is not evidence of a personality trait.",
      },
    ],
    sourcesTitle: "Sources and further reading",
    sources: [
      {
        label: "Unicode Consortium. Enclosed Alphanumerics, range 2460–24FF.",
        href: "https://www.unicode.org/charts/PDF/U2460.pdf",
      },
      {
        label: "Unicode Consortium. Enclosed Alphanumeric Supplement, range 1F100–1F1FF.",
        href: "https://www.unicode.org/charts/PDF/U1F100.pdf",
      },
      {
        label: "Unicode Consortium. Mathematical Alphanumeric Symbols, range 1D400–1D7FF.",
        href: "https://www.unicode.org/charts/PDF/U1D400.pdf",
      },
    ],
    relatedTools: [
      { href: "/tools/sample-chart", label: "See the sample chart", note: "The letterforms this site actually asks about." },
      { href: "/tools/slant", label: "Measure handwriting slant", note: "An angle from a photo, not from a pasted name." },
      { href: "/", label: "Take the shape test", note: "Eight answers produce a fictional label." },
    ],
    relatedPosts: [
      { href: "/blog/how-to-analyze-handwriting", label: "How to analyze handwriting" },
      { href: "/guides/i", label: "The dot on a handwritten i" },
      { href: "/blog/graphology", label: "Graphology: what the evidence says" },
      { href: "/science", label: "The science page" },
    ],
    ctaLabel: "Try the shape test",
    ctaHref: "/#test",
    ctaNote: "The test asks about shapes you write. It does not read a display name, and the label is not a personality score.",
  },
];

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<string, BlogPost>;
