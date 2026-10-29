const rows = [
  ["Open 4", "Sociable, easy-going", "Open 4 is the form taught in many US school hands; closed 4 in many continental ones."],
  ["Closed 4", "Closed, guarded, precise", "The closed triangle is a copybook form. Care of execution varies independently of it."],
  ["Crossed 7", "Decisive, methodical", "The bar separates 7 from 1 in hands where 1 carries a serif. It is a reading aid."],
  ["Slashed 0", "Technical, detail-minded", "The slash prevents 0 and O from being confused. Clerks, engineers, and programmers adopt it."],
  ["Single-storey a", "Spontaneous, open", "A circle and a stem: taught in some national hands and in fast cursive."],
  ["Double-storey a", "Conventional, careful", "The printed form most English-speaking children learn first at school."],
  ["Looped g or y", "Imaginative, creative", "Loops belong to cursive models taught for decades, and they outlive the school."],
  ["Open g", "Impatient, practical", "Open descenders are common in print-style hands and in quick notes."],
  ["High t-bar", "Ambitious, driven", "Bar height moves with speed and with the model; it shifts between two samples from one hand."],
  ["Circled i-dot", "Playful, artistic", "A style copied from a friend or a lettering book. It can come and go within a year."],
  ["Wide word gaps", "Independent, needs space", "Gaps follow the width of the paper and the hurry of the note."],
  ["Right slant", "Outgoing, emotional", "Slant is the most-taught feature. Italic models lean right; other school hands stand upright."],
  ["Upright slant", "Reserved, controlled", "Upright writing is the standard in several European school scripts."],
  ["Large letters", "Confident, extroverted", "Size follows the paper, the pen, and what the note is for."],
  ["Continuous joins", "Logical, connected thinker", "Joining is a property of the script taught. Print hands are not less coherent."],
  ["Flourished &", "Stylish, expressive", "The curly ampersand is a printed form centuries old, not a private invention."],
];

export function ChartClaims() {
  return (
    <section className="mt-12" aria-labelledby="claims-heading">
      <h2 id="claims-heading" className="page-h2">
        Chart of traits, and what the claim rests on
      </h2>
      <p className="mt-3 max-w-xl leading-relaxed">
        Popular graphology charts pair each shape with a trait. The second column repeats those claims in their usual
        wording. The third column gives the explanation a copybook, a technical habit, or a reading problem already
        supplies. Where the two disagree, the third column is what the evidence supports.
      </p>
      <div className="mt-6">
        <table className="claims-table w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              <th scope="col" className="py-2 pr-4 font-display text-base">
                Shape
              </th>
              <th scope="col" className="py-2 pr-4 font-display text-base">
                Claimed trait
              </th>
              <th scope="col" className="py-2 font-display text-base">
                What explains it instead
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([shape, claim, explanation]) => (
              <tr key={shape} className="border-b border-rule align-top">
                <th scope="row" className="py-2 pr-4 font-normal">
                  {shape}
                </th>
                <td className="py-2 pr-4 text-muted" data-label="Claimed trait">
                  {claim}
                </td>
                <td className="py-2 leading-relaxed" data-label="What explains it instead">
                  {explanation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Read the whole column as one finding: when the text of a sample is held constant, handwriting experts predict
        personality close to chance (Neter and Ben-Shakhar, 1989). A chart can name a shape. It cannot name the person.
      </p>
    </section>
  );
}
