/** One hub for the six marks a person can point at. Not a personality article. */

function link(href, label) {
  return { href, label };
}

function section(id, h2, paragraphs, links = []) {
  return { id, h2, paragraphs, links };
}

const en = {
  title: "What Handwriting Shows",
  description:
    "Size, slant, spacing, pressure, baseline, and margins: what is visible on the page, and what a photograph cannot show.",
  h1: "What you can see in handwriting",
  lede: "Six things two people can point at. None of them is a personality. The science page is the limit for every section below.",
  crumb: "Test",
  crumbHere: "Marks",
  homeHref: "/",
  nav: "Marks",
  homeLink: "Size, slant, spacing, pressure, baseline, and margins",
  homeAfter: " are the marks you can point at. The pages below stay with one shape.",
  scienceTail: " sit on one page. A photograph still cannot show pressure or speed.",
  moreTitle: "One shape, one page",
  faqsTitle: "Questions",
  sections: [
    section("size", "Size", [
      "A letter is small, middling, or large next to the other letters in the same note. Compare several. One large capital at the start of a sentence is not the size of the hand.",
      "Large writing is not confidence. Small writing is not intelligence. Size moves with the pen, the box you were given, and how fast you were going.",
    ]),
    section(
      "slant",
      "Slant",
      [
        "Look at a downstroke on m, n, t, or l against the baseline. Left of vertical, near vertical, or right of vertical. One letter is a weak sample. Italic models lean right, so a right slant is often the model, not a mood.",
      ],
      [
        link("/guides/slant", "Handwriting slant"),
        link("/tools/slant", "Measure a stem"),
        link("/#q-slant", "Pick a slant"),
      ],
    ),
    section(
      "spacing",
      "Spacing",
      [
        "Word spacing is the gap before the next word: tight, about one letter wide, or wide. A gap at the end of a line is that line’s margin, not word spacing. Teachers often ask for about one letter. That target is a lesson, not a trait.",
      ],
      [link("/guides/spacing", "Handwriting spacing"), link("/#q-spacing", "Pick a spacing")],
    ),
    section(
      "pressure",
      "Pressure",
      [
        "A photograph shows the ink that stayed. Darkness comes from the pen, the paper, and the camera. It is not how hard the hand pressed, and the picture has no clock, so it is not speed. Real pressure needs a pen that records force, or a tablet that does. This page does not pretend a photo has it.",
      ],
      [link("/science", "What a photo cannot show")],
    ),
    section("baseline", "Baseline", [
      "The baseline is the path of the line, not the slant of a stem. On blank paper a line can rise, stay level, or fall. A curled sheet, a desk that slopes, and writing without a rule all move it. On ruled paper the rule is doing the work.",
    ]),
    section("margins", "Margins", [
      "The margin is the paper you did not write on. A narrow notebook makes a narrow margin. A long paragraph in a small box fills the page. A wide left margin is often room left for a comment. None of these is a need for privacy or a fear of space. Read a few pages in the same notebook before you call it a habit.",
    ]),
    section(
      "marks",
      "The bar of t and the dot of i",
      [
        "The bar of a t can sit low, in the middle, or high, or be missing. The dot of an i can sit close, high, or be a circle. Check several. A hurried note drops dots and bars. Graphology reads a high bar as ambition and a high dot as imagination. Those readings are not supported well enough to use. The test asks you to pick the closest t and the closest i. That pick files a shape.",
      ],
      [
        link("/guides/t", "The bar of t"),
        link("/guides/i", "The dot of i"),
        link("/#q-t", "Pick a t"),
        link("/#q-i", "Pick an i"),
      ],
    ),
  ],
  faqs: [
    {
      q: "What does my handwriting say about me?",
      a: "Here it says which of these marks you can point at. It does not say who you are.",
    },
    {
      q: "Can you tell personality from handwriting size?",
      a: "No. Size is visible. Personality is not in it.",
    },
    {
      q: "Does heavy handwriting mean a strong personality?",
      a: "A dark stroke is not heavy pressure. Pressure is not a personality score.",
    },
    {
      q: "What should I look at first?",
      a: "A few lines of ordinary writing, not the signature. Then slant, spacing, and size. Leave pressure out if all you have is a photo.",
    },
  ],
};

const zh = {
  title: "字迹里看得到什么",
  description: "字号、倾斜、间距、笔压、基线和页边：纸上能指出来的，以及一张照片看不出来的。",
  h1: "字迹里看得到什么",
  lede: "六样东西，两个人可以指着同一处。哪一样都不是性格。科学页是下面每一节的边界。",
  crumb: "测验",
  crumbHere: "写法",
  homeHref: "/zh",
  nav: "写法",
  homeLink: "字号、倾斜、间距、笔压、基线和页边",
  homeAfter: "写在一页上。下面每一种写法仍有自己的说明。",
  scienceTail: "写在一页上。照片仍然看不出笔压和速度。",
  moreTitle: "五笔各一页",
  faqsTitle: "问题",
  sections: [
    section(
      "size",
      "字号",
      [
        "一段字里，字有大有小。拿同一行里别的字比，不拿标题比。开头一个特别大的字说明不了整篇。",
        "字大不是自信，字小不是聪明。格子、笔的粗细、写得急不急，都会改字号。",
      ],
      [link("/zh/guides/size", "字的大小"), link("/zh#q-size", "测验里选字号")],
    ),
    section(
      "slant",
      "倾斜",
      [
        "看竖画相对行线：偏左、接近竖直、偏右。一个字不够。楷书和硬笔字帖多数接近竖直，右倾常常是行书的样子，不是心情。中文测验不把倾斜当题目。",
      ],
      [link("/zh/tools/slant", "量一根竖画")],
    ),
    section(
      "spacing",
      "间距",
      [
        "字距是字和字之间的空。行距是行和行之间的空。行尾剩下的空白是页边，不是字距。课本要求空开一个字，那是课，不是性格。",
      ],
      [
        link("/zh/guides/gap", "字距"),
        link("/zh/guides/lines", "行距"),
        link("/zh#q-gap", "测验里选字距"),
        link("/zh#q-lines", "测验里选行距"),
      ],
    ),
    section(
      "pressure",
      "笔压",
      [
        "照片上是留下来的墨。深浅来自笔、纸和相机，不是手压下去的力。照片没有时钟，所以也不是速度。真正的笔压要笔上的传感器，或一块记录力度的板。这一页不假装照片里有它。",
      ],
      [link("/zh/science", "照片看不出什么")],
    ),
    section(
      "baseline",
      "基线",
      [
        "基线是一整行往哪走：上斜、平、下斜。它不是某一横画的方向。没格子的纸、倾斜的桌面、纸卷了，都会改行的走向。有格子时，格子在干活。横画是字里面的一笔，另有一页。",
      ],
      [link("/zh/guides/bar", "横画")],
    ),
    section("margins", "页边", [
      "页边是没写字的纸。窄本子自然窄。格子小、字多，页会被写满。左边留宽，常常是留给批注的习惯。看不出需要私人空间，也看不出害怕空白。同一本里看几页，再决定它是不是习惯。",
    ]),
    section(
      "marks",
      "横画和连笔",
      [
        "拉丁字母测验会问 t 的横和 i 上的点。中文测验没有这两题。相近的是横的收笔，和字与字连不连。横画可以平、上挑或下收。连笔可以基本分开、拐角连上，或一路连下去。写得急会省掉收笔。笔迹学把高横读成野心，把高点读成想象。这些读法不够稳，不能用。",
      ],
      [
        link("/zh/guides/bar", "横画"),
        link("/zh/guides/link", "连笔"),
        link("/zh#q-bar", "测验里选横画"),
        link("/zh#q-link", "测验里选连笔"),
      ],
    ),
  ],
  faqs: [
    {
      q: "我的字说明我是什么样的人？",
      a: "这里只说明你能指出来的写法。它不说明你是谁。",
    },
    {
      q: "字大是不是自信？",
      a: "不是。字号看得见。性格不在里面。",
    },
    {
      q: "字重是不是个性强？",
      a: "墨色深不是笔压大。笔压也不是性格分数。",
    },
    {
      q: "先看哪里？",
      a: "看几行平常的字，不看签名。然后看倾斜、间距和字号。手里只有照片时，把笔压放下。",
    },
  ],
};

function latin(code, t) {
  const p = `/${code}`;
  return {
    title: t.title,
    description: t.description,
    h1: t.h1,
    lede: t.lede,
    crumb: t.crumb,
    crumbHere: t.nav,
    homeHref: p,
    nav: t.nav,
    homeLink: t.homeLink,
    homeAfter: t.homeAfter,
    scienceTail: t.scienceTail,
    moreTitle: t.moreTitle,
    faqsTitle: t.faqsTitle,
    sections: [
      section("size", t.sizeH, t.sizeP),
      section("slant", t.slantH, t.slantP, [
        link(`${p}/guides/slant`, t.slantGuide),
        link(`${p}/tools/slant`, t.slantTool),
        link(`${p}#q-slant`, t.slantQuiz),
      ]),
      section("spacing", t.spacingH, t.spacingP, [
        link(`${p}/guides/spacing`, t.spacingGuide),
        link(`${p}#q-spacing`, t.spacingQuiz),
      ]),
      section("pressure", t.pressureH, t.pressureP, [link(`${p}/science`, t.pressureScience)]),
      section("baseline", t.baselineH, t.baselineP),
      section("margins", t.marginsH, t.marginsP),
      section("marks", t.marksH, t.marksP, [
        link(`${p}/guides/t`, t.guideT),
        link(`${p}/guides/i`, t.guideI),
        link(`${p}#q-t`, t.pickT),
        link(`${p}#q-i`, t.pickI),
      ]),
    ],
    faqs: t.faqs,
  };
}

const homeLink = {
  es: "Tamaño, inclinación, espacio, presión, línea base y márgenes",
  pt: "Tamanho, inclinação, espaço, pressão, linha de base e margens",
  fr: "Taille, inclinaison, espacement, pression, ligne de base et marges",
  de: "Größe, Neigung, Abstand, Druck, Grundlinie und Ränder",
  id: "Ukuran, kemiringan, spasi, tekanan, garis dasar, dan margin",
  vi: "Cỡ chữ, độ nghiêng, khoảng cách, lực bút, đường cơ sở và lề",
  it: "Dimensione, inclinazione, spaziatura, pressione, linea di base e margini",
  tr: "Boyut, eğim, aralık, baskı, taban çizgisi ve kenar boşlukları",
};

export const traits = {
  en,
  zh,
  es: latin("es", {
    title: "Qué se ve en la letra",
    description: `${homeLink.es}: lo que se ve en la página, y lo que una foto no puede mostrar.`,
    h1: "Qué se ve en la letra",
    lede: "Seis cosas que dos personas pueden señalar. Ninguna es una personalidad. La página de ciencia es el límite de cada apartado.",
    crumb: "Test",
    nav: "Trazos",
    homeLink: homeLink.es,
    homeAfter: " son las marcas que se pueden señalar. Las páginas de abajo se quedan con una sola forma.",
    scienceTail: " están en una página. Una foto sigue sin mostrar la presión ni la velocidad.",
    moreTitle: "Una forma, una página",
    faqsTitle: "Preguntas",
    sizeH: "Tamaño",
    sizeP: [
      "Una letra es pequeña, mediana o grande junto a las otras letras de la misma nota. Compara varias. Una mayúscula grande al empezar la frase no es el tamaño de la mano.",
      "La letra grande no es confianza. La letra pequeña no es inteligencia. El tamaño cambia con el bolígrafo, el recuadro y la prisa.",
    ],
    slantH: "Inclinación",
    slantP: [
      "Mira un trazo descendente de m, n, t o l contra la línea. A la izquierda de la vertical, cerca de la vertical, o a la derecha. Una sola letra es una muestra débil. Los modelos en cursiva se inclinan a la derecha, así que esa inclinación suele ser el modelo, no un estado de ánimo.",
    ],
    slantGuide: "Inclinación de la letra",
    slantTool: "Medir un trazo",
    slantQuiz: "Elegir una inclinación",
    spacingH: "Espacio",
    spacingP: [
      "El espacio entre palabras es el hueco antes de la siguiente: apretado, de una letra, o amplio. El hueco al final de la línea es el margen de esa línea, no el espacio entre palabras. En la escuela piden a menudo una letra. Eso es una lección, no un rasgo.",
    ],
    spacingGuide: "Espacio en la letra",
    spacingQuiz: "Elegir un espacio",
    pressureH: "Presión",
    pressureP: [
      "Una foto muestra la tinta que quedó. La oscuridad viene del bolígrafo, del papel y de la cámara. No es la fuerza de la mano, y la foto no tiene reloj, así que tampoco es velocidad. La presión de verdad necesita un bolígrafo que registre la fuerza, o una tableta que lo haga. Esta página no finge que una foto la tiene.",
    ],
    pressureScience: "Lo que una foto no muestra",
    baselineH: "Línea base",
    baselineP: [
      "La línea base es el camino de la línea, no la inclinación de un trazo. En papel en blanco una línea puede subir, quedarse plana o bajar. Una hoja curvada, un pupitre inclinado y escribir sin pauta la mueven. En papel pautado, la pauta hace el trabajo.",
    ],
    marginsH: "Márgenes",
    marginsP: [
      "El margen es el papel que no escribiste. Un cuaderno estrecho deja un margen estrecho. Un párrafo largo en un recuadro pequeño llena la página. Un margen izquierdo ancho suele ser sitio dejado para un comentario. Nada de esto es necesidad de privacidad ni miedo al espacio. Lee unas páginas del mismo cuaderno antes de llamarlo costumbre.",
    ],
    marksH: "La barra de la t y el punto de la i",
    marksP: [
      "La barra de la t puede ir baja, al medio o alta, o faltar. El punto de la i puede ir cerca, alto o ser un círculo. Mira varias. Una nota con prisa pierde puntos y barras. La grafología lee una barra alta como ambición y un punto alto como imaginación. Esas lecturas no están lo bastante apoyadas para usarlas. El test pide la t más cercana y la i más cercana. Esa elección archiva una forma.",
    ],
    guideT: "La barra de la t",
    guideI: "El punto de la i",
    pickT: "Elegir una t",
    pickI: "Elegir una i",
    faqs: [
      {
        q: "¿Qué dice mi letra de mí?",
        a: "Aquí dice qué marcas puedes señalar. No dice quién eres.",
      },
      {
        q: "¿La letra grande es confianza?",
        a: "No. El tamaño se ve. La personalidad no está en él.",
      },
      {
        q: "¿Una letra pesada es una personalidad fuerte?",
        a: "Un trazo oscuro no es presión fuerte. La presión no es una nota de personalidad.",
      },
      {
        q: "¿Qué miro primero?",
        a: "Unas líneas de escritura corriente, no la firma. Luego la inclinación, el espacio y el tamaño. Si solo tienes una foto, deja la presión fuera.",
      },
    ],
  }),
  pt: latin("pt", {
    title: "O que se vê na letra",
    description: `${homeLink.pt}: o que está visível na página, e o que uma fotografia não mostra.`,
    h1: "O que se vê na letra",
    lede: "Seis coisas que duas pessoas podem apontar. Nenhuma é uma personalidade. A página de ciência é o limite de cada parte.",
    crumb: "Teste",
    nav: "Traços",
    homeLink: homeLink.pt,
    homeAfter: " são as marcas que se podem apontar. As páginas abaixo ficam com uma só forma.",
    scienceTail: " estão numa página. Uma fotografia continua sem mostrar pressão nem velocidade.",
    moreTitle: "Uma forma, uma página",
    faqsTitle: "Perguntas",
    sizeH: "Tamanho",
    sizeP: [
      "Uma letra é pequena, média ou grande ao lado das outras letras da mesma nota. Compare várias. Uma maiúscula grande no início da frase não é o tamanho da mão.",
      "Letra grande não é confiança. Letra pequena não é inteligência. O tamanho muda com a caneta, a caixa e a pressa.",
    ],
    slantH: "Inclinação",
    slantP: [
      "Olhe um traço descendente de m, n, t ou l contra a linha. À esquerda da vertical, perto da vertical, ou à direita. Uma letra só é uma amostra fraca. Os modelos em itálico inclinam para a direita, então essa inclinação costuma ser o modelo, não um humor.",
    ],
    slantGuide: "Inclinação da letra",
    slantTool: "Medir um traço",
    slantQuiz: "Escolher uma inclinação",
    spacingH: "Espaço",
    spacingP: [
      "O espaço entre palavras é o vão antes da seguinte: apertado, de uma letra, ou largo. O vão no fim da linha é a margem dessa linha, não o espaço entre palavras. Na escola pedem muitas vezes uma letra. Isso é uma lição, não um traço de personalidade.",
    ],
    spacingGuide: "Espaço na letra",
    spacingQuiz: "Escolher um espaço",
    pressureH: "Pressão",
    pressureP: [
      "Uma fotografia mostra a tinta que ficou. O escuro vem da caneta, do papel e da câmera. Não é a força da mão, e a foto não tem relógio, então também não é velocidade. Pressão de verdade precisa de uma caneta que registre a força, ou de um tablet que faça isso. Esta página não finge que uma foto a tem.",
    ],
    pressureScience: "O que uma foto não mostra",
    baselineH: "Linha de base",
    baselineP: [
      "A linha de base é o caminho da linha, não a inclinação de um traço. Em papel em branco uma linha pode subir, ficar plana ou descer. Uma folha enrolada, uma mesa inclinada e escrever sem pauta mexem nela. Em papel pautado, a pauta faz o trabalho.",
    ],
    marginsH: "Margens",
    marginsP: [
      "A margem é o papel que você não escreveu. Um caderno estreito deixa uma margem estreita. Um parágrafo longo numa caixa pequena enche a página. Uma margem esquerda larga costuma ser espaço deixado para um comentário. Nada disso é necessidade de privacidade nem medo de espaço. Leia algumas páginas do mesmo caderno antes de chamar isso de hábito.",
    ],
    marksH: "A barra do t e o pingo do i",
    marksP: [
      "A barra do t pode ficar baixa, no meio ou alta, ou faltar. O pingo do i pode ficar perto, alto ou ser um círculo. Olhe vários. Uma nota com pressa perde pingos e barras. A grafologia lê uma barra alta como ambição e um pingo alto como imaginação. Essas leituras não estão bem apoiadas o bastante para serem usadas. O teste pede o t mais próximo e o i mais próximo. Essa escolha arquiva uma forma.",
    ],
    guideT: "A barra do t",
    guideI: "O pingo do i",
    pickT: "Escolher um t",
    pickI: "Escolher um i",
    faqs: [
      { q: "O que a minha letra diz sobre mim?", a: "Aqui ela diz quais marcas você pode apontar. Não diz quem você é." },
      { q: "Letra grande é confiança?", a: "Não. O tamanho se vê. A personalidade não está nele." },
      { q: "Letra pesada é uma personalidade forte?", a: "Um traço escuro não é pressão forte. Pressão não é uma nota de personalidade." },
      {
        q: "O que olho primeiro?",
        a: "Algumas linhas de escrita comum, não a assinatura. Depois a inclinação, o espaço e o tamanho. Se você só tem uma foto, deixe a pressão de fora.",
      },
    ],
  }),
  fr: latin("fr", {
    title: "Ce qui se voit dans l'écriture",
    description: `${homeLink.fr} : ce qui est visible sur la page, et ce qu'une photo ne peut pas montrer.`,
    h1: "Ce qui se voit dans l'écriture",
    lede: "Six choses que deux personnes peuvent montrer du doigt. Aucune n'est une personnalité. La page science est la limite de chaque partie.",
    crumb: "Test",
    nav: "Traits",
    homeLink: homeLink.fr,
    homeAfter: " sont les marques que l'on peut montrer. Les pages ci-dessous restent sur une seule forme.",
    scienceTail: " tiennent sur une page. Une photo ne montre toujours ni la pression ni la vitesse.",
    moreTitle: "Une forme, une page",
    faqsTitle: "Questions",
    sizeH: "Taille",
    sizeP: [
      "Une lettre est petite, moyenne ou grande à côté des autres lettres de la même note. Comparez-en plusieurs. Une grande capitale en début de phrase n'est pas la taille de la main.",
      "Une grande écriture n'est pas de la confiance. Une petite écriture n'est pas de l'intelligence. La taille change avec le stylo, la case et la hâte.",
    ],
    slantH: "Inclinaison",
    slantP: [
      "Regardez un jambage de m, n, t ou l contre la ligne. À gauche de la verticale, près de la verticale, ou à droite. Une seule lettre est un échantillon faible. Les modèles en italique penchent à droite, donc cette inclinaison est souvent le modèle, pas une humeur.",
    ],
    slantGuide: "Inclinaison de l'écriture",
    slantTool: "Mesurer un trait",
    slantQuiz: "Choisir une inclinaison",
    spacingH: "Espacement",
    spacingP: [
      "L'espacement des mots est le vide avant le mot suivant : serré, d'environ une lettre, ou large. Un vide en fin de ligne est la marge de cette ligne, pas l'espacement des mots. À l'école on demande souvent une lettre. C'est une leçon, pas un trait.",
    ],
    spacingGuide: "Espacement de l'écriture",
    spacingQuiz: "Choisir un espacement",
    pressureH: "Pression",
    pressureP: [
      "Une photo montre l'encre qui est restée. Le noir vient du stylo, du papier et de l'appareil. Ce n'est pas la force de la main, et l'image n'a pas d'horloge, donc ce n'est pas non plus la vitesse. Une vraie pression demande un stylo qui enregistre la force, ou une tablette qui le fait. Cette page ne fait pas semblant qu'une photo l'a.",
    ],
    pressureScience: "Ce qu'une photo ne montre pas",
    baselineH: "Ligne de base",
    baselineP: [
      "La ligne de base est le chemin de la ligne, pas l'inclinaison d'un trait. Sur du papier blanc une ligne peut monter, rester plate ou descendre. Une feuille gondolée, un bureau en pente et écrire sans réglure la déplacent. Sur du papier réglé, la réglure fait le travail.",
    ],
    marginsH: "Marges",
    marginsP: [
      "La marge est le papier que vous n'avez pas écrit. Un cahier étroit fait une marge étroite. Un long paragraphe dans une petite case remplit la page. Une large marge gauche est souvent une place laissée pour une remarque. Rien de cela n'est un besoin d'intimité ni une peur de l'espace. Lisez quelques pages du même cahier avant d'appeler cela une habitude.",
    ],
    marksH: "La barre du t et le point du i",
    marksP: [
      "La barre d'un t peut être basse, au milieu ou haute, ou manquer. Le point d'un i peut être proche, haut, ou un cercle. Vérifiez-en plusieurs. Une note pressée perd points et barres. La graphologie lit une barre haute comme de l'ambition et un point haut comme de l'imagination. Ces lectures ne sont pas assez étayées pour servir. Le test demande le t le plus proche et le i le plus proche. Ce choix range une forme.",
    ],
    guideT: "La barre du t",
    guideI: "Le point du i",
    pickT: "Choisir un t",
    pickI: "Choisir un i",
    faqs: [
      { q: "Que dit mon écriture de moi ?", a: "Ici elle dit quelles marques vous pouvez montrer. Elle ne dit pas qui vous êtes." },
      { q: "Une grande écriture est-elle de la confiance ?", a: "Non. La taille se voit. La personnalité n'y est pas." },
      {
        q: "Une écriture lourde est-elle une personnalité forte ?",
        a: "Un trait sombre n'est pas une forte pression. La pression n'est pas une note de personnalité.",
      },
      {
        q: "Que regarder d'abord ?",
        a: "Quelques lignes d'écriture ordinaire, pas la signature. Puis l'inclinaison, l'espacement et la taille. Si vous n'avez qu'une photo, laissez la pression de côté.",
      },
    ],
  }),
  de: latin("de", {
    title: "Was man in der Handschrift sieht",
    description: `${homeLink.de}: was auf der Seite sichtbar ist, und was ein Foto nicht zeigen kann.`,
    h1: "Was man in der Handschrift sieht",
    lede: "Sechs Dinge, auf die zwei Menschen zeigen können. Keines davon ist eine Persönlichkeit. Die Wissenschaftsseite ist die Grenze für jeden Abschnitt.",
    crumb: "Test",
    nav: "Merkmale",
    homeLink: homeLink.de,
    homeAfter: " sind die Merkmale, auf die man zeigen kann. Die Seiten unten bleiben bei einer Form.",
    scienceTail: " stehen auf einer Seite. Ein Foto zeigt weiterhin weder Druck noch Tempo.",
    moreTitle: "Eine Form, eine Seite",
    faqsTitle: "Fragen",
    sizeH: "Größe",
    sizeP: [
      "Ein Buchstabe ist klein, mittel oder groß neben den anderen Buchstaben derselben Notiz. Vergleichen Sie mehrere. Ein großer Großbuchstabe am Satzanfang ist nicht die Größe der Hand.",
      "Große Schrift ist kein Selbstvertrauen. Kleine Schrift ist keine Intelligenz. Die Größe ändert sich mit dem Stift, dem Kästchen und der Eile.",
    ],
    slantH: "Neigung",
    slantP: [
      "Sehen Sie einen Abstrich bei m, n, t oder l gegen die Grundlinie. Links der Senkrechten, nahe der Senkrechten, oder rechts. Ein einzelner Buchstabe ist eine schwache Probe. Kursive Modelle neigen sich nach rechts, also ist eine Rechtsneigung oft das Modell, nicht eine Stimmung.",
    ],
    slantGuide: "Schriftneigung",
    slantTool: "Einen Strich messen",
    slantQuiz: "Eine Neigung wählen",
    spacingH: "Abstand",
    spacingP: [
      "Der Wortabstand ist die Lücke vor dem nächsten Wort: eng, etwa eine Buchstabenbreite, oder weit. Eine Lücke am Zeilenende ist der Rand dieser Zeile, nicht der Wortabstand. In der Schule wird oft eine Buchstabenbreite verlangt. Das ist eine Übung, kein Merkmal.",
    ],
    spacingGuide: "Abstand in der Schrift",
    spacingQuiz: "Einen Abstand wählen",
    pressureH: "Druck",
    pressureP: [
      "Ein Foto zeigt die Tinte, die geblieben ist. Die Dunkelheit kommt vom Stift, vom Papier und von der Kamera. Sie ist nicht die Kraft der Hand, und das Bild hat keine Uhr, also ist es auch nicht das Tempo. Echter Druck braucht einen Stift, der Kraft aufzeichnet, oder ein Tablet, das das tut. Diese Seite tut nicht so, als hätte ein Foto ihn.",
    ],
    pressureScience: "Was ein Foto nicht zeigt",
    baselineH: "Grundlinie",
    baselineP: [
      "Die Grundlinie ist der Weg der Zeile, nicht die Neigung eines Strichs. Auf leerem Papier kann eine Zeile steigen, eben bleiben oder fallen. Ein gewelltes Blatt, ein schräger Tisch und Schreiben ohne Linie verschieben sie. Auf liniertem Papier arbeitet die Linie.",
    ],
    marginsH: "Ränder",
    marginsP: [
      "Der Rand ist das Papier, das Sie nicht beschrieben haben. Ein schmales Heft macht einen schmalen Rand. Ein langer Absatz in einem kleinen Kästchen füllt die Seite. Ein breiter linker Rand ist oft Platz für eine Anmerkung. Nichts davon ist ein Bedürfnis nach Privatsphäre oder Angst vor Raum. Lesen Sie ein paar Seiten im selben Heft, bevor Sie es eine Gewohnheit nennen.",
    ],
    marksH: "Der Balken des t und der Punkt des i",
    marksP: [
      "Der Querbalken eines t kann tief, in der Mitte oder hoch sitzen, oder fehlen. Der Punkt eines i kann nah sitzen, hoch sitzen oder ein Kreis sein. Prüfen Sie mehrere. Eine eilige Notiz verliert Punkte und Balken. Die Graphologie liest einen hohen Balken als Ehrgeiz und einen hohen Punkt als Fantasie. Diese Lesarten sind nicht gut genug belegt, um sie zu benutzen. Der Test bittet Sie, das nächste t und das nächste i zu wählen. Diese Wahl legt eine Form ab.",
    ],
    guideT: "Der Balken des t",
    guideI: "Der Punkt des i",
    pickT: "Ein t wählen",
    pickI: "Ein i wählen",
    faqs: [
      { q: "Was sagt meine Handschrift über mich?", a: "Hier sagt sie, welche Merkmale Sie zeigen können. Sie sagt nicht, wer Sie sind." },
      { q: "Ist große Schrift Selbstvertrauen?", a: "Nein. Die Größe ist sichtbar. Persönlichkeit steckt nicht darin." },
      { q: "Ist schwere Schrift eine starke Persönlichkeit?", a: "Ein dunkler Strich ist kein starker Druck. Druck ist keine Persönlichkeitsnote." },
      {
        q: "Worauf sehe ich zuerst?",
        a: "Ein paar Zeilen gewöhnlicher Schrift, nicht die Unterschrift. Dann Neigung, Abstand und Größe. Wenn Sie nur ein Foto haben, lassen Sie den Druck weg.",
      },
    ],
  }),
  id: latin("id", {
    title: "Yang terlihat pada tulisan",
    description: `${homeLink.id}: yang tampak di halaman, dan yang tidak bisa ditunjukkan foto.`,
    h1: "Yang terlihat pada tulisan",
    lede: "Enam hal yang bisa ditunjuk dua orang. Tidak satu pun adalah kepribadian. Halaman sains adalah batas setiap bagian.",
    crumb: "Tes",
    nav: "Tanda",
    homeLink: homeLink.id,
    homeAfter: " adalah tanda yang bisa ditunjuk. Halaman di bawah tetap satu bentuk.",
    scienceTail: " ada di satu halaman. Foto tetap tidak menunjukkan tekanan atau kecepatan.",
    moreTitle: "Satu bentuk, satu halaman",
    faqsTitle: "Pertanyaan",
    sizeH: "Ukuran",
    sizeP: [
      "Sebuah huruf kecil, sedang, atau besar dibanding huruf lain di catatan yang sama. Bandingkan beberapa. Satu huruf kapital besar di awal kalimat bukan ukuran tangan.",
      "Tulisan besar bukan percaya diri. Tulisan kecil bukan kecerdasan. Ukuran berubah karena pena, kotak, dan tergesa.",
    ],
    slantH: "Kemiringan",
    slantP: [
      "Lihat garis turun pada m, n, t, atau l terhadap garis dasar. Di kiri tegak, dekat tegak, atau di kanan. Satu huruf adalah contoh yang lemah. Model miring ke kanan, jadi kemiringan kanan sering adalah modelnya, bukan suasana hati.",
    ],
    slantGuide: "Kemiringan tulisan",
    slantTool: "Ukur satu garis",
    slantQuiz: "Pilih kemiringan",
    spacingH: "Spasi",
    spacingP: [
      "Spasi kata adalah celah sebelum kata berikutnya: rapat, kira-kira selebar satu huruf, atau lebar. Celah di ujung baris adalah margin baris itu, bukan spasi kata. Di sekolah sering diminta selebar satu huruf. Itu pelajaran, bukan sifat.",
    ],
    spacingGuide: "Spasi tulisan",
    spacingQuiz: "Pilih spasi",
    pressureH: "Tekanan",
    pressureP: [
      "Foto menunjukkan tinta yang tertinggal. Gelapnya datang dari pena, kertas, dan kamera. Itu bukan seberapa kuat tangan menekan, dan gambar tidak punya jam, jadi juga bukan kecepatan. Tekanan yang sungguh perlu pena yang mencatat gaya, atau tablet yang melakukannya. Halaman ini tidak berpura-pura foto memilikinya.",
    ],
    pressureScience: "Yang tidak ditunjukkan foto",
    baselineH: "Garis dasar",
    baselineP: [
      "Garis dasar adalah jalan barisnya, bukan kemiringan satu garis huruf. Di kertas kosong satu baris bisa naik, rata, atau turun. Kertas melengkung, meja miring, dan menulis tanpa garis menggesernya. Di kertas bergaris, garisnya yang bekerja.",
    ],
    marginsH: "Margin",
    marginsP: [
      "Margin adalah kertas yang tidak Anda tulis. Buku sempit membuat margin sempit. Paragraf panjang di kotak kecil mengisi halaman. Margin kiri yang lebar sering adalah tempat untuk catatan. Ini bukan kebutuhan privasi atau takut ruang. Baca beberapa halaman di buku yang sama sebelum menyebutnya kebiasaan.",
    ],
    marksH: "Palang t dan titik i",
    marksP: [
      "Palang t bisa rendah, di tengah, atau tinggi, atau hilang. Titik i bisa dekat, tinggi, atau sebuah lingkaran. Periksa beberapa. Catatan yang tergesa kehilangan titik dan palang. Grafologi membaca palang tinggi sebagai ambisi dan titik tinggi sebagai imajinasi. Bacaan itu tidak cukup kuat untuk dipakai. Tes meminta t yang paling dekat dan i yang paling dekat. Pilihan itu menyimpan sebuah bentuk.",
    ],
    guideT: "Palang t",
    guideI: "Titik i",
    pickT: "Pilih sebuah t",
    pickI: "Pilih sebuah i",
    faqs: [
      { q: "Apa yang dikatakan tulisan saya tentang saya?", a: "Di sini ia mengatakan tanda mana yang bisa Anda tunjuk. Ia tidak mengatakan siapa Anda." },
      { q: "Tulisan besar berarti percaya diri?", a: "Tidak. Ukuran terlihat. Kepribadian tidak ada di dalamnya." },
      { q: "Tulisan tebal berarti kepribadian kuat?", a: "Goresan gelap bukan tekanan kuat. Tekanan bukan nilai kepribadian." },
      {
        q: "Apa yang dilihat lebih dulu?",
        a: "Beberapa baris tulisan biasa, bukan tanda tangan. Lalu kemiringan, spasi, dan ukuran. Jika yang ada hanya foto, tinggalkan tekanan.",
      },
    ],
  }),
  vi: latin("vi", {
    title: "Những gì thấy được trên nét chữ",
    description: `${homeLink.vi}: thứ nhìn thấy trên trang, và thứ một bức ảnh không cho thấy.`,
    h1: "Những gì thấy được trên nét chữ",
    lede: "Sáu thứ hai người có thể chỉ vào. Không thứ nào là tính cách. Trang khoa học là giới hạn của mỗi phần.",
    crumb: "Bài",
    nav: "Nét",
    homeLink: homeLink.vi,
    homeAfter: " là những nét có thể chỉ ra. Các trang bên dưới giữ một hình.",
    scienceTail: " nằm trên một trang. Ảnh vẫn không cho thấy lực bút hay tốc độ.",
    moreTitle: "Một hình, một trang",
    faqsTitle: "Câu hỏi",
    sizeH: "Cỡ chữ",
    sizeP: [
      "Một chữ nhỏ, vừa, hoặc lớn so với các chữ khác trong cùng một đoạn. So vài chữ. Một chữ hoa lớn ở đầu câu không phải cỡ của cả bàn tay.",
      "Chữ lớn không phải tự tin. Chữ nhỏ không phải thông minh. Cỡ chữ đổi theo bút, ô và sự vội.",
    ],
    slantH: "Độ nghiêng",
    slantP: [
      "Nhìn nét xuống của m, n, t hoặc l so với dòng. Lệch trái, gần thẳng, hoặc lệch phải. Một chữ là mẫu yếu. Mẫu chữ nghiêng thường nghiêng phải, nên độ nghiêng phải thường là mẫu, không phải tâm trạng.",
    ],
    slantGuide: "Độ nghiêng nét chữ",
    slantTool: "Đo một nét",
    slantQuiz: "Chọn độ nghiêng",
    spacingH: "Khoảng cách",
    spacingP: [
      "Khoảng cách từ là chỗ trống trước từ kế: chặt, khoảng một chữ, hoặc rộng. Chỗ trống cuối dòng là lề của dòng đó, không phải khoảng cách từ. Ở trường thường yêu cầu khoảng một chữ. Đó là bài học, không phải tính cách.",
    ],
    spacingGuide: "Khoảng cách nét chữ",
    spacingQuiz: "Chọn khoảng cách",
    pressureH: "Lực bút",
    pressureP: [
      "Ảnh cho thấy mực còn lại. Độ đậm đến từ bút, giấy và máy ảnh. Đó không phải lực tay ấn, và ảnh không có đồng hồ, nên cũng không phải tốc độ. Lực bút thật cần cây bút ghi lực, hoặc bảng ghi lực. Trang này không giả vờ ảnh có nó.",
    ],
    pressureScience: "Ảnh không cho thấy gì",
    baselineH: "Đường cơ sở",
    baselineP: [
      "Đường cơ sở là hướng của cả dòng, không phải độ nghiêng của một nét. Trên giấy trắng một dòng có thể lên, ngang, hoặc xuống. Giấy cong, bàn nghiêng, và viết không có dòng kẻ đều làm nó đổi. Trên giấy kẻ, dòng kẻ đang làm việc.",
    ],
    marginsH: "Lề",
    marginsP: [
      "Lề là phần giấy không viết. Vở hẹp thì lề hẹp. Một đoạn dài trong ô nhỏ sẽ viết đầy trang. Lề trái rộng thường là chỗ để lời nhận. Không cái nào là nhu cầu riêng tư hay sợ khoảng trống. Đọc vài trang trong cùng một vở trước khi gọi đó là thói quen.",
    ],
    marksH: "Nét ngang của t và dấu chấm của i",
    marksP: [
      "Nét ngang của t có thể thấp, giữa, hoặc cao, hoặc thiếu. Dấu chấm của i có thể sát, cao, hoặc là một vòng tròn. Xem vài chữ. Một ghi chú vội mất chấm và ngang. Nghiên cứu chữ đọc nét ngang cao là tham vọng và chấm cao là trí tưởng tượng. Những cách đọc đó không đủ vững để dùng. Bài hỏi t gần nhất và i gần nhất. Lựa đó lưu một hình.",
    ],
    guideT: "Nét ngang của t",
    guideI: "Dấu chấm của i",
    pickT: "Chọn một t",
    pickI: "Chọn một i",
    faqs: [
      { q: "Nét chữ nói gì về tôi?", a: "Ở đây nó nói những nét bạn chỉ ra được. Nó không nói bạn là ai." },
      { q: "Chữ lớn có phải tự tin?", a: "Không. Cỡ chữ nhìn thấy được. Tính cách không nằm trong đó." },
      { q: "Chữ đậm có phải tính cách mạnh?", a: "Nét đậm không phải lực bút mạnh. Lực bút không phải điểm tính cách." },
      {
        q: "Nhìn gì trước?",
        a: "Vài dòng chữ thường, không phải chữ ký. Rồi độ nghiêng, khoảng cách và cỡ chữ. Nếu chỉ có ảnh, bỏ lực bút ra.",
      },
    ],
  }),
  it: latin("it", {
    title: "Che cosa si vede nella scrittura",
    description: `${homeLink.it}: ciò che è visibile sulla pagina, e ciò che una foto non può mostrare.`,
    h1: "Che cosa si vede nella scrittura",
    lede: "Sei cose che due persone possono indicare. Nessuna è una personalità. La pagina di scienza è il limite di ogni parte.",
    crumb: "Test",
    nav: "Tratti",
    homeLink: homeLink.it,
    homeAfter: " sono i segni che si possono indicare. Le pagine sotto restano su una sola forma.",
    scienceTail: " stanno su una pagina. Una foto continua a non mostrare pressione né velocità.",
    moreTitle: "Una forma, una pagina",
    faqsTitle: "Domande",
    sizeH: "Dimensione",
    sizeP: [
      "Una lettera è piccola, media o grande accanto alle altre lettere dello stesso appunto. Confrontane diverse. Una maiuscola grande a inizio frase non è la dimensione della mano.",
      "Una scrittura grande non è sicurezza. Una scrittura piccola non è intelligenza. La dimensione cambia con la penna, il riquadro e la fretta.",
    ],
    slantH: "Inclinazione",
    slantP: [
      "Guarda un tratto discendente di m, n, t o l contro la linea. A sinistra della verticale, vicino alla verticale, o a destra. Una sola lettera è un campione debole. I modelli in corsivo pendono a destra, quindi quell'inclinazione è spesso il modello, non un umore.",
    ],
    slantGuide: "Inclinazione della scrittura",
    slantTool: "Misurare un tratto",
    slantQuiz: "Scegliere un'inclinazione",
    spacingH: "Spaziatura",
    spacingP: [
      "La spaziatura delle parole è il vuoto prima della successiva: stretto, di circa una lettera, o largo. Un vuoto a fine riga è il margine di quella riga, non la spaziatura delle parole. A scuola si chiede spesso una lettera. È una lezione, non un tratto.",
    ],
    spacingGuide: "Spaziatura della scrittura",
    spacingQuiz: "Scegliere una spaziatura",
    pressureH: "Pressione",
    pressureP: [
      "Una foto mostra l'inchiostro rimasto. Lo scuro viene dalla penna, dalla carta e dalla fotocamera. Non è la forza della mano, e l'immagine non ha un orologio, quindi non è neanche la velocità. La pressione vera chiede una penna che registra la forza, o un tablet che lo fa. Questa pagina non finge che una foto ce l'abbia.",
    ],
    pressureScience: "Ciò che una foto non mostra",
    baselineH: "Linea di base",
    baselineP: [
      "La linea di base è il percorso della riga, non l'inclinazione di un tratto. Su carta bianca una riga può salire, restare piana o scendere. Un foglio arricciato, un tavolo in pendenza e scrivere senza rigo la spostano. Su carta rigata, il rigo fa il lavoro.",
    ],
    marginsH: "Margini",
    marginsP: [
      "Il margine è la carta che non hai scritto. Un quaderno stretto lascia un margine stretto. Un paragrafo lungo in una casella piccola riempie la pagina. Un margine sinistro largo è spesso spazio lasciato per un commento. Niente di questo è bisogno di privacy o paura dello spazio. Leggi qualche pagina dello stesso quaderno prima di chiamarla un'abitudine.",
    ],
    marksH: "La barra della t e il punto della i",
    marksP: [
      "La barra di una t può stare bassa, al centro o alta, o mancare. Il punto di una i può stare vicino, alto, o essere un cerchio. Controllane diverse. Un appunto di fretta perde punti e barre. La grafologia legge una barra alta come ambizione e un punto alto come immaginazione. Quelle letture non sono abbastanza sostenute per usarle. Il test chiede la t più vicina e la i più vicina. Quella scelta archivia una forma.",
    ],
    guideT: "La barra della t",
    guideI: "Il punto della i",
    pickT: "Scegliere una t",
    pickI: "Scegliere una i",
    faqs: [
      { q: "Che cosa dice la mia scrittura di me?", a: "Qui dice quali segni puoi indicare. Non dice chi sei." },
      { q: "Una scrittura grande è sicurezza?", a: "No. La dimensione si vede. La personalità non c'è dentro." },
      { q: "Una scrittura pesante è una personalità forte?", a: "Un tratto scuro non è una pressione forte. La pressione non è un voto di personalità." },
      {
        q: "Che cosa guardo prima?",
        a: "Qualche riga di scrittura ordinaria, non la firma. Poi inclinazione, spaziatura e dimensione. Se hai solo una foto, lascia fuori la pressione.",
      },
    ],
  }),
  tr: latin("tr", {
    title: "El yazısında görülenler",
    description: `${homeLink.tr}: sayfada görünen, ve bir fotoğrafın gösteremediği.`,
    h1: "El yazısında görülenler",
    lede: "İki kişinin işaret edebildiği altı şey. Hiçbiri bir kişilik değildir. Bilim sayfası aşağıdaki her bölümün sınırıdır.",
    crumb: "Test",
    nav: "İzler",
    homeLink: homeLink.tr,
    homeAfter: " işaret edilebilen izlerdir. Aşağıdaki sayfalar tek bir biçimde kalır.",
    scienceTail: " tek sayfadadır. Bir fotoğraf hâlâ ne baskıyı ne hızı gösterir.",
    moreTitle: "Bir biçim, bir sayfa",
    faqsTitle: "Sorular",
    sizeH: "Boyut",
    sizeP: [
      "Bir harf, aynı nottaki diğer harflerin yanında küçük, orta ya da büyüktür. Birkaçını karşılaştırın. Cümle başındaki büyük bir büyük harf, elin boyutu değildir.",
      "Büyük yazı güven değildir. Küçük yazı zekâ değildir. Boyut kalemle, kutuyla ve aceleyle değişir.",
    ],
    slantH: "Eğim",
    slantP: [
      "m, n, t ya da l üzerindeki bir iniş çizgisine taban çizgisine göre bakın. Dikeyin solu, dikeye yakın, ya da sağı. Tek harf zayıf bir örnektir. İtalik örnekler sağa yatar, bu yüzden sağ eğim çoğu zaman örnektir, bir ruh hali değil.",
    ],
    slantGuide: "El yazısı eğimi",
    slantTool: "Bir çizgiyi ölç",
    slantQuiz: "Bir eğim seç",
    spacingH: "Aralık",
    spacingP: [
      "Sözcük aralığı, sonraki sözcükten önceki boşluktur: sıkı, yaklaşık bir harf, ya da geniş. Satır sonundaki boşluk o satırın kenarıdır, sözcük aralığı değil. Okulda çoğu zaman bir harf istenir. Bu bir derstir, bir özellik değil.",
    ],
    spacingGuide: "El yazısı aralığı",
    spacingQuiz: "Bir aralık seç",
    pressureH: "Baskı",
    pressureP: [
      "Bir fotoğraf kalan mürekkebi gösterir. Koyuluk kalemden, kâğıttan ve kameradan gelir. Elin ne kadar bastırdığı değildir, ve görüntünün saati yoktur, bu yüzden hız da değildir. Gerçek baskı, kuvveti kaydeden bir kalem ister, ya da bunu yapan bir tablet. Bu sayfa bir fotoğrafta varmış gibi yapmaz.",
    ],
    pressureScience: "Bir fotoğrafın göstermediği",
    baselineH: "Taban çizgisi",
    baselineP: [
      "Taban çizgisi satırın yoludur, bir çizginin eğimi değil. Boş kâğıtta bir satır yükselebilir, düz kalabilir ya da düşebilir. Kıvrılmış bir yaprak, eğik bir masa ve çizgisiz yazmak onu oynatır. Çizgili kâğıtta çizgi işi yapar.",
    ],
    marginsH: "Kenar boşlukları",
    marginsP: [
      "Kenar, yazmadığınız kâğıttır. Dar bir defter dar bir kenar bırakır. Küçük bir kutudaki uzun bir paragraf sayfayı doldurur. Geniş bir sol kenar çoğu zaman bir not için bırakılmış yerdir. Bunların hiçbiri mahremiyet ihtiyacı ya da boşluk korkusu değildir. Alışkanlık demeden önce aynı defterden birkaç sayfa okuyun.",
    ],
    marksH: "t'nin çizgisi ve i'nin noktası",
    marksP: [
      "Bir t'nin çizgisi alçak, ortada ya da yüksek durabilir, ya da eksik olabilir. Bir i'nin noktası yakın, yüksek ya da bir daire olabilir. Birkaçına bakın. Acele bir not nokta ve çizgi düşürür. Grafoloji yüksek çizgiyi hırs, yüksek noktayı hayal gücü okur. Bu okumalar kullanılacak kadar destekli değildir. Test en yakın t'yi ve en yakın i'yi seçmenizi ister. Bu seçim bir biçimi dosyalar.",
    ],
    guideT: "t'nin çizgisi",
    guideI: "i'nin noktası",
    pickT: "Bir t seç",
    pickI: "Bir i seç",
    faqs: [
      { q: "El yazım benim hakkımda ne söyler?", a: "Burada hangi izleri işaret edebildiğinizi söyler. Kim olduğunuzu söylemez." },
      { q: "Büyük yazı güven midir?", a: "Hayır. Boyut görünür. Kişilik onun içinde değildir." },
      { q: "Ağır yazı güçlü kişilik midir?", a: "Koyu bir çizgi güçlü baskı değildir. Baskı bir kişilik notu değildir." },
      {
        q: "Önce neye bakarım?",
        a: "İmzaya değil, birkaç satır olağan yazıya. Sonra eğim, aralık ve boyut. Elinizde yalnız bir fotoğraf varsa baskıyı bırakın.",
      },
    ],
  }),
};

const CODES = ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"];

export function traitsCopyFor(code) {
  return traits[code];
}

export function traitsCodes() {
  return CODES;
}
