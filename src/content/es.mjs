import { questions as englishQuestions } from "./quiz.mjs";

const questionCopy = {
  four: {
    title: "El número 4",
    prompt: "¿Cuál 4 se parece más al tuyo?",
    options: {
      "open-four": ["4 abierto", "Un 4 abierto: barra y asta, sin triángulo cerrado"],
      "closed-four": ["4 cerrado", "Un 4 cerrado con un triángulo arriba"],
    },
  },
  seven: {
    title: "El número 7",
    prompt: "¿Cuál 7 se parece más al tuyo?",
    options: {
      "plain-seven": ["7 sin raya", "Un 7 de dos trazos, sin barra en el medio"],
      "crossed-seven": ["7 con raya", "Un 7 con una barra horizontal"],
    },
  },
  a: {
    title: "La letra a",
    prompt: "¿Cuál a se parece más a la tuya?",
    options: {
      "single-storey-a": ["Un ojo", "La a manuscrita, con un solo ojo"],
      "double-storey-a": ["Dos ojos", "La a de imprenta, con dos ojos"],
    },
  },
  g: {
    title: "La letra g",
    prompt: "¿Cuál g se parece más a la tuya?",
    options: {
      "open-g": ["Cola abierta", "Una g minúscula con el gancho abierto"],
      "looped-g": ["Cola con lazo", "Una g minúscula con un lazo cerrado"],
    },
  },
  zero: {
    title: "El número 0",
    prompt: "¿Cuál 0 se parece más al tuyo?",
    options: {
      "plain-zero": ["0 simple", "Un cero ovalado, sin barra"],
      "slashed-zero": ["0 con barra", "Un cero cruzado por una diagonal"],
    },
  },
  one: {
    title: "El número 1",
    prompt: "¿Cuál 1 se parece más al tuyo?",
    options: {
      "plain-one": ["Un trazo", "Un 1 hecho de un solo trazo"],
      "serif-one": ["Con base", "Un 1 con una bandera arriba y una base"],
    },
  },
  t: {
    title: "La letra t",
    prompt: "¿Dónde está la raya de tu t?",
    options: {
      "uncrossed-t": ["Sin raya", "Una t sin barra"],
      "mid-t": ["Por el medio", "Una t cruzada a media altura"],
      "high-t": ["Arriba", "Una t cruzada cerca de la punta"],
    },
  },
  i: {
    title: "La letra i",
    prompt: "¿Dónde está el punto?",
    options: {
      "dotted-i-close": ["Punto cerca", "Una i con el punto pegado al asta"],
      "dotted-i-high": ["Punto alto", "Una i con el punto bien arriba"],
      "dotted-i-circle": ["Un círculo", "Una i con un círculo en vez de punto"],
    },
  },
  y: {
    title: "La letra y",
    prompt: "¿Cuál y se parece más a la tuya?",
    options: {
      "straight-y": ["Cola recta", "Una y con el descendente recto"],
      "looped-y": ["Cola con lazo", "Una y con un lazo debajo de la línea"],
    },
  },
  ampersand: {
    title: "El símbolo &",
    prompt: "¿Cuál & se parece más al tuyo?",
    options: {
      "plus-ampersand": ["Un más", "Un signo más usado en lugar de &"],
      "traditional-ampersand": ["La forma et", "El & tradicional, ligadura de la palabra latina et"],
      "flourished-ampersand": ["Con adorno", "Un & con un trazo de más"],
    },
  },
  spacing: {
    title: "Espacio entre palabras",
    prompt: "¿Qué tan anchos son los huecos entre tus palabras?",
    options: {
      "spacing-tight": ["Junto", "Dos palabras casi pegadas"],
      "spacing-even": ["Parejo", "Un hueco del ancho de una letra"],
      "spacing-wide": ["Amplio", "Dos palabras bien separadas"],
    },
  },
  slant: {
    title: "Inclinación",
    prompt: "¿Hacia dónde se inclinan tus trazos hacia abajo?",
    options: {
      "slant-left": ["A la izquierda", "Trazos hacia abajo, inclinados a la izquierda"],
      "slant-upright": ["Vertical", "Trazos hacia abajo, casi verticales"],
      "slant-right": ["A la derecha", "Trazos hacia abajo, inclinados a la derecha, como en la itálica"],
    },
  },
};

export function spanishQuestions() {
  return englishQuestions.map((question) => {
    const copy = questionCopy[question.id];
    return {
      ...question,
      title: copy.title,
      prompt: copy.prompt,
      options: question.options.map((option) => {
        const [label, alt] = copy.options[option.id];
        return { ...option, label, alt };
      }),
    };
  });
}

export const profiles = {
  "quiet-architect": {
    name: "Arquitecto callado",
    sentence: "Cierras las formas que se pueden cerrar.",
    aside: "El cuaderno asentiría. Ese gesto habla de los ojos de la letra, no de tu carácter.",
    practice: "Escribe una línea de 4 abiertos y otra de 4 cerrados a la misma velocidad. Quédate con la que todavía se lee.",
  },
  "everyday-minimalist": {
    name: "Mínimo cotidiano",
    sentence: "Paras el trazo cuando la letra ya se lee.",
    aside: "La pluma fichó la salida en cuanto la letra fue una letra.",
    practice: "Pon una raya a cinco 7 simples. Si la raya los aclara, déjala. Si solo adorna, quítala.",
  },
  "margin-storyteller": {
    name: "El ritmo del margen",
    sentence: "Los huecos y la inclinación marcan el paso de la línea.",
    aside: "Los huecos hablan tanto como las letras. Las letras no estaban de acuerdo.",
    practice: "En una hoja rayada, deja un hueco del ancho de una letra entre diez palabras. Después mira solo la inclinación de las astas.",
  },
  "beautiful-rebel": {
    name: "La marca de más",
    sentence: "Conservas una marca que el cuaderno básico no pide.",
    aside: "Algo en la página rechazó la versión simple. Todavía se lee, y ese es el truco.",
    practice: "Copia una palabra dos veces: una con la marca de más y otra sin ella. Quédate con la que un extraño lee con el brazo extendido.",
  },
  "daydream-doodler": {
    name: "Lazo y ritmo",
    sentence: "El adorno y el ritmo aparecen en la misma línea.",
    aside: "Aparecieron dos costumbres y ninguna quiso irse.",
    practice: "Escribe la misma frase en dos líneas. En la segunda, conserva los lazos y deja entre palabras el ancho de una letra.",
  },
  "instinctive-mixer": {
    name: "Sin una sola costumbre",
    sentence: "Ninguna costumbre manda en la página.",
    aside: "La página votó por varios modelos a la vez. Es una historia de manos, no un estado de ánimo.",
    practice: "Elige las dos formas que no coincidían y escribe cada una, despacio, en su propia línea. La mezcla puede quedarse.",
  },
};

const fig = (file, caption) => ({ file, caption });

export const guides = [
  {
    slug: "four",
    title: "4 abierto o 4 cerrado",
    description: "Cómo distinguir un 4 abierto de un 4 cerrado, dónde se enseña cada uno y qué no dice esa forma de una persona.",
    questionId: "four",
    figures: [
      fig("open-four.svg", "4 abierto: la barra y el asta dejan el lado izquierdo sin cerrar."),
      fig("closed-four.svg", "4 cerrado: la diagonal se une a la barra y forma un triángulo."),
    ],
    origin: [
      "El 4 abierto es la forma manuscrita habitual en gran parte de Estados Unidos. La pluma hace un asta, una barra y una diagonal que no tiene que juntarse.",
      "El 4 cerrado es común en muchos cuadernos europeos, y también lo enseñan algunos maestros americanos. El triángulo se parece más al número impreso.",
    ],
    limits: [
      "Un 4 abierto o cerrado no dice si alguien es creativo, rígido u honesto. Dice qué modelo practicó, y a veces qué modelo vio en un teclado o en la pizarra.",
      "Un número no es una personalidad. La misma persona cambia de forma en un párrafo cuando va más despacio o copia un dígito impreso.",
    ],
    faqs: [
      { q: "¿Qué es un 4 abierto?", a: "Un 4 que no cierra el hueco. Se ven el asta, la barra y la diagonal, y el lado izquierdo no forma un triángulo." },
      { q: "¿Qué es un 4 cerrado?", a: "Un 4 que une la diagonal con la barra, deja un triángulo arriba y sigue el asta hacia abajo." },
      { q: "¿El 4 abierto significa otra personalidad que el 4 cerrado?", a: "No. Son dos modelos que se enseñan en sitios distintos. Este sitio archiva la forma que elegiste. No lee un rasgo." },
      { q: "¿La misma persona puede escribir los dos?", a: "Sí. Una copia cuidadosa de un 4 impreso suele ser cerrada. Una nota rápida suele ser abierta. Las dos pueden estar en la misma página." },
    ],
  },
  {
    slug: "seven",
    title: "El 7 con raya",
    description: "Por qué algunas personas cruzan el 7, cómo ver esa raya y por qué no es una marca de personalidad.",
    questionId: "seven",
    figures: [
      fig("plain-seven.svg", "7 sin raya: dos trazos, una barra arriba y una diagonal."),
      fig("crossed-seven.svg", "7 con raya: una horizontal corta corta la diagonal para que no se confunda con el 1."),
    ],
    origin: [
      "La raya del 7 es una distinción práctica. Donde el 1 lleva una base o una bandera, un 7 sin raya se puede leer como 1. Esa barra es habitual en gran parte de Europa, de América Latina y en notas técnicas de otros sitios.",
      "El 7 sin raya es la forma en la que se detienen muchos cuadernos de Estados Unidos. No le falta nada. Se espera que el lector distinga el 7 del 1 por el contexto.",
    ],
    limits: [
      "La raya no mide el cuidado como rasgo. Es una convención, como cruzar la t. Se omite con prisa y se añade cuando el número tiene que ser inequívoco.",
      "No trates un 7 con raya en un formulario como una prueba sobre quien lo escribió. Es una prueba sobre el dígito.",
    ],
    faqs: [
      { q: "¿Por qué la gente cruza el 7?", a: "Para que el 7 no parezca un 1, sobre todo donde el 1 manuscrito tiene una base o un remate." },
      { q: "¿El 7 con raya es más correcto?", a: "Es correcto donde se enseñó ese modelo. El 7 sin raya es correcto donde no se enseñó. Los dos se leen." },
      { q: "¿Un 7 con raya indica una personalidad precisa?", a: "No. Indica un hábito para proteger un número. La precisión en un dígito no es la precisión como carácter." },
      { q: "Si solo a veces lo cruzo, ¿cuál elijo?", a: "Elige la forma de tus notas normales. Si de verdad usas las dos, cualquiera es justa, y puedes cambiarla en el resultado." },
    ],
  },
  {
    slug: "a",
    title: "La a de un ojo o de dos ojos",
    description: "La a manuscrita de un ojo, la a de imprenta de dos, y por qué la elección es un modelo y no un rasgo.",
    questionId: "a",
    figures: [
      fig("single-storey-a.svg", "Un ojo: un círculo y un trazo al lado, la a manuscrita habitual."),
      fig("double-storey-a.svg", "Dos ojos: la forma de casi toda la letra impresa."),
    ],
    origin: [
      "Casi todos los cuadernos en alfabeto latino enseñan la a de un ojo para escribir a mano. Es un círculo y un trazo corto. Se puede hacer sin levantar la pluma hacia un segundo ojo.",
      "La a de dos ojos es la letra impresa. Algunas personas la conservan porque copiaron un tipo, porque un estilo de rotulación la pedía, o porque escriben en letra de molde.",
    ],
    limits: [
      "La a de dos ojos no significa formalidad, y la de un ojo no significa soltura. La primera es una forma de imprenta. La segunda es una forma de escritura.",
      "Esta página es sobre la letra latina a. No tiene un trazo equivalente en la escritura china.",
    ],
    faqs: [
      { q: "¿Qué es una a de un ojo?", a: "Una a manuscrita con un solo espacio cerrado, como un círculo pequeño con un asta a la derecha." },
      { q: "¿Qué es una a de dos ojos?", a: "La a impresa, con un ojo pequeño arriba y otro más grande abajo. El texto tecleado usa esta forma." },
      { q: "¿Cuál a escriben la mayoría de los adultos?", a: "La mayoría de las a latinas a mano son de un ojo. La de dos ojos es menos común en notas corridas y más común en letra de molde." },
      { q: "¿Se puede juzgar la personalidad por la letra a?", a: "No. Se puede ver qué modelo sigue el trazo. No se ve el temperamento, la honestidad ni la capacidad." },
    ],
  },
  {
    slug: "g",
    title: "Cómo escribes la g minúscula",
    description: "El gancho abierto y el lazo cerrado de la g, de dónde sale el descendente y qué no puede predecir.",
    questionId: "g",
    figures: [
      fig("open-g.svg", "g abierta: el ojo queda en la línea y la cola engancha sin cerrarse."),
      fig("looped-g.svg", "g con lazo: el descendente vuelve y cierra un lazo bajo la línea."),
    ],
    origin: [
      "Los cuadernos no coinciden a propósito. Algunos modelos de molde dejan la cola abierta, cerca de la g impresa. La cursiva y la itálica suelen cerrar un lazo para que la pluma salga hacia la letra siguiente.",
      "El lazo es un camino de la pluma, no un adorno inventado. Quien aprendió la g cursiva la enlaza aunque el resto de la nota sea de molde.",
    ],
    limits: [
      "Una g con lazo no muestra imaginación, y una g abierta no muestra brusquedad. Las dos son terminaciones que se enseñan de niños.",
      "El lazo también cambia con la velocidad. Un lazo cerrado en el escritorio puede abrirse en una postal. Es la pluma yendo más rápido, no un cambio de personalidad.",
    ],
    faqs: [
      { q: "¿La g con lazo es la g cursiva?", a: "Es la terminación habitual de la cursiva y de la itálica. La pluma baja de la línea y sube para unirse a la letra siguiente." },
      { q: "¿Una g abierta está mal?", a: "No. Los modelos de molde y muchas manos adultas dejan la cola abierta. Sigue siendo una g si están el ojo y el descendente." },
      { q: "¿El lazo de la g significa que quien escribe es expresivo?", a: "No. El lazo es un camino motor aprendido. La expresividad no se ve en un descendente." },
      { q: "¿Y la g impresa de dos pisos?", a: "La g impresa tiene una oreja y un ojo inferior cerrado. Este test usa las dos terminaciones que la gente produce a mano: un gancho abierto y un lazo." },
    ],
  },
  {
    slug: "zero",
    title: "El cero con barra",
    description: "Cómo una barra en el 0 lo separa de la letra O, y por qué el hábito es técnico y no personal.",
    questionId: "zero",
    figures: [
      fig("plain-zero.svg", "0 simple: un óvalo cerrado, el número de siempre."),
      fig("slashed-zero.svg", "0 con barra: una diagonal atraviesa el óvalo para que no se lea como la letra O."),
    ],
    origin: [
      "Quien copia códigos tacha el cero porque la O y el 0 comparten el mismo esqueleto. La barra distingue, igual que la raya del 7. Llegó de la escritura técnica y de las fuentes que ya la traían.",
      "El cero simple sigue siendo la forma de la mayoría en prosa. El óvalo basta cuando alrededor hay palabras y no números de serie.",
    ],
    limits: [
      "Un cero con barra no muestra una personalidad precisa ni desconfiada. Muestra que quien escribe ha necesitado que el 0 sobreviva junto a la O.",
      "Una foto de la barra no dice la presión de la pluma. Se ve la línea. No se ve con qué fuerza se apoyó.",
    ],
    faqs: [
      { q: "¿Por qué la gente tacha el cero?", a: "Para que el número 0 no se lea como la letra O, sobre todo en códigos, fechas e identificadores escritos a mano." },
      { q: "¿Es lo mismo que el cero tachado de las fuentes?", a: "Hace el mismo trabajo. Las fuentes monoespaciadas tachan o puntean el cero por la misma razón que una persona con la pluma." },
      { q: "¿Un cero con barra significa que la persona trabaja en tecnología?", a: "A menudo lo aprendió ahí, pero no siempre. La marca solo dice que quería el 0 bien distinto. No es una biografía." },
      { q: "¿El análisis de la letra puede usar el cero tachado como signo de personalidad?", a: "No debería. La barra tiene un origen práctico. Tratarla como un rasgo ignora ese origen." },
    ],
  },
  {
    slug: "ampersand",
    title: "Cómo escribes el símbolo &",
    description: "El signo más, la ligadura et y el & con adorno: de dónde sale la marca y qué no se puede leer en ella.",
    questionId: "ampersand",
    figures: [
      fig("plus-ampersand.svg", "Un signo más en lugar de «y». Las notas rápidas suelen parar aquí."),
      fig("traditional-ampersand.svg", "El & tradicional: la palabra latina et reducida a una marca."),
      fig("flourished-ampersand.svg", "Un & con adorno: la misma ligadura y un trazo de más."),
    ],
    origin: [
      "El & no es una letra inventada para los tests. Es la palabra latina et, «y», comprimida en una marca. En la forma tradicional todavía se puede buscar la espalda y el cruce.",
      "Un signo más es un sustituto, no un & fallido. La gente lo usa porque + ya significa «y» en las notas. El adorno es rotulación: quien escribe vio & decorativos y se quedó con un trozo.",
    ],
    limits: [
      "El adorno no muestra una personalidad artística, y el signo más no muestra impaciencia como rasgo. Uno es decoración vista en letra impresa. El otro es un atajo.",
      "El & es una marca latina. No sirve para describir la escritura china.",
    ],
    faqs: [
      { q: "¿De dónde sale el símbolo &?", a: "De et, la palabra latina para «y». Las dos letras se ataron hasta volverse un solo signo." },
      { q: "¿Escribir un más en vez de & está mal?", a: "En una palabra formal es informal. En una nota es normal. El test lo trata como una forma que la gente usa de verdad." },
      { q: "¿Un & adornado significa una persona creativa?", a: "Significa un & adornado. La creatividad no se mide con un símbolo, y este sitio no lo intenta." },
      { q: "¿Cuántas formas de & hay en el test?", a: "Tres: un signo más, la forma et tradicional y una forma con adorno. Elige la más cercana, no una copia perfecta." },
    ],
  },
  {
    slug: "slant",
    title: "Inclinación de la letra",
    description: "Cómo ver la inclinación a la izquierda, vertical o a la derecha, y por qué el ángulo no es una lectura del ánimo.",
    questionId: "slant",
    figures: [
      fig("slant-left.svg", "A la izquierda de la vertical. La punta del trazo queda a la izquierda de la base."),
      fig("slant-upright.svg", "Casi vertical. Los trazos hacia abajo se mantienen derechos."),
      fig("slant-right.svg", "A la derecha de la vertical, la inclinación de la itálica y de muchos modelos de cursiva."),
    ],
    origin: [
      "La inclinación a la derecha está metida en la itálica y en mucha enseñanza de cursiva. El modelo se inclina, así que el alumno se inclina. La escritura vertical sigue los modelos de molde que dejan el asta derecha.",
      "La inclinación a la izquierda casi nunca es el modelo del cuaderno. Puede venir de una mano izquierda que tira de la pluma, de un desvío personal o del papel puesto en ángulo. La causa no se ve en el trazo ya hecho.",
    ],
    limits: [
      "La inclinación no dice si alguien es abierto, reservado u orientado al futuro. Esas son afirmaciones de la grafología. Los estudios controlados no encuentran que un extraño lea la personalidad en la inclinación mejor que el azar, de un modo estable.",
      "Una foto tampoco muestra la velocidad del trazo. Se ve la inclinación. No se ve lo rápido que se movió la mano, ni se recupera la presión a partir de la tinta.",
    ],
    faqs: [
      { q: "¿Qué significa la inclinación de la letra?", a: "En este sitio significa la inclinación visible de los trazos hacia abajo: izquierda, vertical o derecha. No significa un ánimo ni un estilo social." },
      { q: "¿Cómo miro la inclinación en una página?", a: "Mira los trazos hacia abajo de m, n, t o l contra la línea o el borde del papel. Una letra es una muestra débil. Una fila basta para ver la inclinación." },
      { q: "¿La inclinación a la derecha es la correcta?", a: "Es la de la itálica y de muchos cuadernos de cursiva. La vertical es la de la mayoría de los modelos de molde. La izquierda es un resultado real. Ninguna de las tres es un diagnóstico." },
      { q: "¿La inclinación puede cambiar en un día?", a: "Sí. El ángulo del papel, la pluma, el cansancio y el modelo que se copia la mueven. Un cambio de inclinación no es un cambio de personalidad." },
    ],
  },
  {
    slug: "spacing",
    title: "Espacio entre palabras en la letra",
    description: "Huecos juntos, parejos y amplios entre palabras, cómo se enseña el espacio y qué no revela un hueco.",
    questionId: "spacing",
    figures: [
      fig("spacing-tight.svg", "Junto: la palabra siguiente empieza casi donde terminó el último trazo."),
      fig("spacing-even.svg", "Parejo: el hueco tiene el ancho de una letra, el objetivo habitual del aula."),
      fig("spacing-wide.svg", "Amplio: queda una franja clara de papel entre las palabras."),
    ],
    origin: [
      "Los maestros suelen pedir un hueco del ancho de una letra: bastante para ver las palabras y no tanto como para romper la línea. El espacio parejo es un objetivo de clase, no un tipo de personalidad.",
      "El espacio junto aparece en notas rápidas y en sitios pequeños, como la casilla de un formulario. El amplio aparece cuando se colocan las palabras con cuidado, cuando la mano es grande o cuando la línea tiene sitio de sobra.",
    ],
    limits: [
      "Un espacio amplio no significa soledad, y uno junto no significa una mente abarrotada. Esas lecturas tratan el hueco como una metáfora. El hueco es una distancia en el papel.",
      "El espacio cambia con la herramienta. Una pluma gorda llena un hueco junto. Una pluma fina hace que el mismo movimiento parezca amplio. Compara el espacio dentro de una muestra antes de comparar a dos personas.",
    ],
    faqs: [
      { q: "¿Cuál es el espacio normal entre palabras?", a: "Los modelos escolares buscan un hueco del ancho de una letra como la n o la o. Las notas adultas se mueven alrededor de ese objetivo." },
      { q: "¿Qué significa un espacio amplio?", a: "Que las palabras están lejos en esa página. Puede ser el modelo, la prisa, la pluma o el tamaño del papel. No es un rasgo social." },
      { q: "¿Qué significa un espacio junto?", a: "Que la palabra siguiente empieza cerca de la anterior. La escritura rápida y las casillas pequeñas lo producen. Es un hecho de la página." },
      { q: "¿Puedo medir el espacio en una foto?", a: "Puedes comparar huecos dentro de esa foto si la página está plana y la cámara está frente a ella. Aun así no ves la presión ni la velocidad." },
    ],
  },
  {
    slug: "one",
    title: "Cómo escribes el número 1",
    description: "Un solo trazo, o un 1 con bandera y base: por qué existen esas marcas y qué no dicen de una persona.",
    questionId: "one",
    figures: [
      fig("plain-one.svg", "1 simple: un trazo hacia abajo. Lo distinguen las palabras de alrededor, o una raya en el 7."),
      fig("serif-one.svg", "1 con bandera y base: el extremo entra en ángulo y un pie corto queda en la línea."),
    ],
    origin: [
      "El 1 simple es un trazo. Muchos cuadernos de Estados Unidos se detienen ahí. El lector lo distingue del 7 y de la letra l por las palabras de alrededor, y a menudo por la raya del 7.",
      "La bandera y la base son la otra solución del mismo choque. Donde un asta desnuda se puede leer mal, la bandera marca el extremo y la base marca el suelo. Ese par es habitual en gran parte de Europa y en notas que no pueden permitirse un dígito equivocado.",
    ],
    limits: [
      "La bandera no mide el cuidado como rasgo, y el trazo simple no mide la prisa. Los dos son modelos. La misma persona puede usar el 1 con bandera en un formulario y el 1 simple en una nota.",
      "Un dígito no es una personalidad. Esta página es sobre el número 1. No describe los numerales chinos.",
    ],
    faqs: [
      { q: "¿Por qué algunas personas ponen una raya en el 1?", a: "La bandera de arriba y la base evitan que el 1 parezca la letra l o un 7 simple. Es una distinción, como la raya del 7." },
      { q: "¿Un 1 simple es incorrecto?", a: "No. Es la forma de muchos cuadernos. Se lee cuando el 7 lleva raya, o cuando la línea es texto y no un código suelto." },
      { q: "¿Un 1 con base indica una persona precisa?", a: "No. Indica que quien escribe aprendió un 1 que lleva sus propias marcas. La precisión en un dígito no es la precisión como carácter." },
      { q: "¿Qué 1 elijo en el test?", a: "El de las notas normales. Si usas los dos, cualquiera es justo, y puedes cambiarlo en el resultado." },
    ],
  },
  {
    slug: "t",
    title: "La barra de la t manuscrita",
    description: "Una t sin barra, una barra por el medio y una barra cerca de la punta: cómo ver cada una, y por qué la altura no es ambición.",
    questionId: "t",
    figures: [
      fig("uncrossed-t.svg", "Sin barra: el asta queda sola. Las notas rápidas pierden el cruce."),
      fig("mid-t.svg", "Por el medio: el cruce habitual del cuaderno, hacia la mitad del asta."),
      fig("high-t.svg", "Cerca de la punta: la barra queda alta y sigue tocando el asta."),
    ],
    origin: [
      "Los cuadernos cruzan la t. La barra es una horizontal corta a través del asta, a menudo hacia la mitad, para que la t no se confunda con la l. Una barra cerca de la punta es el mismo trazo, más arriba. El modelo no trata esa altura como un ánimo.",
      "La barra falta cuando la pluma no vuelve. Las notas con prisa, y las palabras en las que la letra siguiente ya deja clara la t, pierden el cruce. El asta sigue siendo una t si la palabra se lee.",
    ],
    limits: [
      "La grafología lee una barra alta como ambición. Esa lectura no está lo bastante apoyada para usarla. La altura es el sitio donde cruzó la pluma.",
      "Mira varias t. Una barra alta en una palabra rápida no es el hábito. Una foto muestra la tinta. No muestra con qué fuerza se apoyó la barra.",
    ],
    faqs: [
      { q: "¿Qué significa una barra alta en la t?", a: "En este sitio significa que la barra queda cerca de la punta del asta. No significa ambición, confianza ni una meta." },
      { q: "¿Una t sin barra sigue siendo una t?", a: "Dentro de una palabra, sí. La barra ausente es habitual al escribir rápido. El test la archiva como una forma, no como un fallo." },
      { q: "¿Dónde debe ir la barra de la t?", a: "Los cuadernos suelen ponerla a través del asta, hacia el medio o un poco más arriba. Alta y ausente son formas que la gente escribe. Ninguna de las tres es un diagnóstico." },
      { q: "¿La misma persona puede cruzar la t en sitios distintos?", a: "Sí. La prisa, la pluma y la letra anterior mueven la barra. Elige la altura que más ves en las notas normales." },
    ],
  },
  {
    slug: "i",
    title: "El punto de la i manuscrita",
    description: "Un punto cercano, un punto alto y un círculo en lugar del punto: de dónde sale cada uno y qué no puede probar un punto.",
    questionId: "i",
    figures: [
      fig("dotted-i-close.svg", "Punto cercano: una marca pequeña justo encima del asta, el sitio habitual del aula."),
      fig("dotted-i-high.svg", "Punto alto: la marca queda bien por encima del asta, a menudo cuando la mano ya siguió."),
      fig("dotted-i-circle.svg", "Un círculo: una marca redonda en lugar del punto."),
    ],
    origin: [
      "El punto es una marca aparte. Los cuadernos lo ponen cerca, encima del asta, después de la letra o después de la palabra. Un punto alto suele ser el mismo hábito hecho tarde: la mano ya avanzó y el punto cae más arriba en la página.",
      "Un círculo en lugar del punto es rotulación. Se copia de una mano que gustó, o de una época en la que cada i llevaba un anillo. Es un acabado aprendido, como un adorno en el &.",
    ],
    limits: [
      "La grafología lee un punto alto como imaginación y un círculo como ganas de que lo noten. Esas lecturas no están lo bastante apoyadas para usarlas. El sitio del punto es donde bajó la pluma.",
      "Las notas rápidas pierden el punto del todo. Un punto ausente es prisa, no una cuarta personalidad. Esta página es sobre la i latina. La escritura china no usa esta marca.",
    ],
    faqs: [
      { q: "¿Qué significa un punto alto en la i?", a: "Que el punto queda alto sobre el asta. No significa imaginación, atención ni un ánimo." },
      { q: "¿Por qué la gente hace un círculo en el punto de la i?", a: "Porque aprendió una marca redonda en lugar del punto. Es un acabado. No es una prueba de creatividad." },
      { q: "¿El punto cercano es el correcto?", a: "Es el sitio que muestran la mayoría de los cuadernos. El punto alto y el círculo son formas que la gente escribe de verdad. El test pide la más cercana, no la aprobada." },
      { q: "¿Y si a menudo olvido el punto?", a: "Es habitual con prisa. En el test, elige el punto que haces cuando sí lo haces." },
    ],
  },
  {
    slug: "y",
    title: "Cómo escribes la y minúscula",
    description: "Una cola recta o una cola con lazo en la y, de dónde sale el descendente y qué no puede predecir.",
    questionId: "y",
    figures: [
      fig("straight-y.svg", "Cola recta: el descendente sale de la línea y no vuelve."),
      fig("looped-y.svg", "Cola con lazo: el descendente vuelve y cierra un lazo bajo la línea."),
    ],
    origin: [
      "Los modelos de molde suelen acabar la y con un descendente recto, cerca de la letra impresa. La cursiva y la itálica cierran un lazo para que la pluma salga hacia la letra siguiente. El lazo es un camino, el mismo trabajo que el lazo de la g.",
      "Quien aprendió la y con lazo la enlaza aunque el resto de la nota sea de molde. Quien aprendió la cola recta la mantiene, salvo cuando copia una línea enlazada.",
    ],
    limits: [
      "Una y con lazo no muestra emoción ni imaginación, y una y recta no muestra brusquedad. Las dos son terminaciones que se enseñan de niños.",
      "La velocidad abre los lazos. Un lazo cerrado en el escritorio puede volverse una cola recta en una postal. Es la pluma yendo más rápido, no un cambio de personalidad.",
    ],
    faqs: [
      { q: "¿La y con lazo es la y cursiva?", a: "Es la terminación habitual de la cursiva y de la itálica. La pluma baja de la línea y sube para unirse a la letra siguiente." },
      { q: "¿Una y recta está mal?", a: "No. Los modelos de molde y muchas manos adultas dejan la cola recta. Sigue siendo una y si están la horquilla y el descendente." },
      { q: "¿El lazo de la y significa que quien escribe es expresivo?", a: "No. El lazo es un camino motor aprendido. La expresividad no se ve en un descendente." },
      { q: "¿En qué se diferencia del lazo de la g?", a: "Es el mismo tipo de terminación, en otra letra. El test pregunta la y por separado. Una g con lazo no decide la y." },
    ],
  },
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

export const scienceFaqs = [
  {
    q: "¿Sirve analizar la letra?",
    a: "Medir una marca visible sí sirve: se puede ver una inclinación, un hueco o un 4 cerrado. Deducir de esas marcas la personalidad, la salud, la honestidad, la inteligencia o la aptitud para un trabajo, no. Los estudios en los que expertos juzgan la personalidad por la letra no muestran una ventaja estable sobre el azar ni sobre alguien que no es experto.",
  },
  {
    q: "¿La grafología es real?",
    a: "La grafología afirma que la letra revela la personalidad de forma sistemática. Esa afirmación se ha puesto a prueba durante décadas y no se sostiene como método fiable. Este sitio no la practica. Los nombres de aquí son etiquetas para grupos de formas.",
  },
  {
    q: "¿Una foto de la letra muestra la presión o la velocidad?",
    a: "No. Una foto muestra la tinta que quedó en el papel, incluido lo oscuro que se ve un trazo. Lo oscuro no es presión, y la imagen no tiene reloj. La velocidad y la presión real desaparecen cuando la mano se levanta.",
  },
  {
    q: "¿Este test dice si alguien es honesto o un buen candidato?",
    a: "No. No uses un enlace de resultado, una inclinación o un lazo para juzgar honestidad, salud, inteligencia o si contratar a alguien.",
  },
  {
    q: "¿Qué hace este test en realidad?",
    a: "Eliges la forma más cercana en hasta doce signos. Ocho respuestas producen uno de seis nombres ficticios a partir de cuatro recuentos: estructura, terminaciones, ritmo de la página y adorno. Una ventaja de dos puntos pone el nombre. Si el adorno y el ritmo van juntos arriba, el nombre es Lazo y ritmo. Cualquier otro empate cercano es Sin una sola costumbre.",
  },
];
