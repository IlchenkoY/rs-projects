const questions = [
  { id: 1, question: "Capital of France", answer: "paris" },
  { id: 2, question: "Largest planet in our solar system", answer: "jupiter" },
  { id: 3, question: "Element with the chemical symbol 'O'", answer: "oxygen" },
  { id: 4, question: "Country known for its kangaroos", answer: "australia" },
  {
    id: 5,
    question: "Famous painting by Leonardo da Vinci",
    answer: "mona lisa"
  },
  { id: 6, question: "Longest river in the world", answer: "nile" },
  { id: 7, question: "Inventor of the lightbulb", answer: "edison" },
  { id: 8, question: "Currency used in Japan", answer: "yen" },
  { id: 9, question: "Element with the chemical symbol 'Fe'", answer: "iron" },
  {
    id: 10,
    question: "Mount Everest is located in which mountain range?",
    answer: "himalayas"
  },
  { id: 11, question: "Shakespeare's play featuring Hamlet", answer: "hamlet" },
  { id: 12, question: "Largest ocean on Earth", answer: "pacific" },
  { id: 13, question: "First human to step on the moon", answer: "armstrong" },
  { id: 14, question: "Number of continents on Earth", answer: "seven" },
  { id: 15, question: "Inventor of the telephone", answer: "bell" },
  { id: 16, question: "Capital of Japan", answer: "tokyo" },
  {
    id: 17,
    question: "Famous detective created by Arthur Conan Doyle",
    answer: "sherlock holmes"
  },
  { id: 18, question: "Deepest point in the ocean", answer: "mariana trench" },
  { id: 19, question: "Author of 'Romeo and Juliet'", answer: "shakespeare" },
  {
    id: 20,
    question: "Element with the chemical symbol 'Na'",
    answer: "sodium"
  },
  { id: 21, question: "Country known for the Great Wall", answer: "china" },
  {
    id: 22,
    question: "Celsius and Fahrenheit are units for measuring what?",
    answer: "temperature"
  },
  { id: 23, question: "Largest mammal on Earth", answer: "blue whale" },
  { id: 24, question: "Capital of Italy", answer: "rome" },
  { id: 25, question: "Inventor of the computer", answer: "turing" },
  { id: 26, question: "Largest desert in the world", answer: "antarctica" },
  {
    id: 27,
    question: "Author of 'To Kill a Mockingbird'",
    answer: "harper lee"
  },
  { id: 28, question: "Chemical symbol for gold", answer: "au" },
  { id: 29, question: "Instrument played by Mozart", answer: "piano" },
  {
    id: 30,
    question: "First President of the United States",
    answer: "washington"
  },
  { id: 31, question: "Famous river in Egypt", answer: "nile" },
  { id: 32, question: "Inventor of the telephone", answer: "bell" },
  { id: 33, question: "Largest moon of Saturn", answer: "titan" },
  { id: 34, question: "Capital of Brazil", answer: "brasília" },
  {
    id: 35,
    question: "Element with the chemical symbol 'H'",
    answer: "hydrogen"
  },
  { id: 36, question: "Author of '1984'", answer: "george orwell" },
  { id: 37, question: "Home to the Eiffel Tower", answer: "paris" },
  { id: 38, question: "Greek god of thunder", answer: "zeus" },
  {
    id: 39,
    question: "Smallest planet in our solar system",
    answer: "mercury"
  },
  { id: 40, question: "Inventor of the lightbulb", answer: "edison" },
  { id: 41, question: "Capital of Russia", answer: "moscow" },
  {
    id: 42,
    question: "Famous playwright from ancient Greece",
    answer: "sophocles"
  },
  { id: 43, question: "Largest island in the world", answer: "greenland" },
  { id: 44, question: "First woman to win a Nobel Prize", answer: "curie" },
  { id: 45, question: "Chemical symbol for silver", answer: "ag" },
  {
    id: 46,
    question: "Author of 'Pride and Prejudice'",
    answer: "jane austen"
  },
  {
    id: 47,
    question: "Mountain range containing Mount Everest",
    answer: "himalayas"
  },
  {
    id: 48,
    question: "Element with the chemical symbol 'C'",
    answer: "carbon"
  },
  {
    id: 49,
    question: "Shakespeare's play featuring Macbeth",
    answer: "macbeth"
  },
  { id: 50, question: "Largest city in the United States", answer: "new york" },
  { id: 51, question: "Founder of Microsoft", answer: "bill gates" },
  {
    id: 52,
    question: "Country known for its tulips and windmills",
    answer: "netherlands"
  },
  {
    id: 53,
    question: "Inventor of the World Wide Web",
    answer: "tim berners-lee"
  },
  { id: 54, question: "Largest volcano on Earth", answer: "mauna loa" },
  {
    id: 55,
    question: "Famous painting by Vincent van Gogh",
    answer: "starry night"
  },
  {
    id: 56,
    question: "Element with the chemical symbol 'K'",
    answer: "potassium"
  },
  { id: 57, question: "Country known for its fjords", answer: "norway" },
  {
    id: 58,
    question: "Famous detective created by Agatha Christie",
    answer: "hercule poirot"
  },
  { id: 59, question: "Instrument played by Jimi Hendrix", answer: "guitar" },
  { id: 60, question: "First human in space", answer: "yuri gagarin" },
  {
    id: 61,
    question: "Author of 'The Great Gatsby'",
    answer: "f. scott fitzgerald"
  },
  {
    id: 62,
    question: "Country known for the Pyramids of Giza",
    answer: "egypt"
  },
  {
    id: 63,
    question: "Element with the chemical symbol 'N'",
    answer: "nitrogen"
  },
  { id: 64, question: "Capital of South Korea", answer: "seoul" },
  { id: 65, question: "Famous ship that sank in 1912", answer: "titanic" },
  {
    id: 66,
    question: "Inventor of the theory of relativity",
    answer: "albert einstein"
  },
  { id: 67, question: "Capital of Canada", answer: "ottawa" },
  {
    id: 68,
    question: "Famous play by Tennessee Williams",
    answer: "a streetcar named desire"
  },
  {
    id: 69,
    question: "Element with the chemical symbol 'P'",
    answer: "phosphorus"
  },
  {
    id: 70,
    question: "Country known for its samba and carnival",
    answer: "brazil"
  },
  { id: 71, question: "Largest waterfall in the world", answer: "angel falls" },
  {
    id: 72,
    question: "Inventor of the printing press",
    answer: "johannes gutenberg"
  },
  {
    id: 73,
    question: "Famous novel by Jules Verne",
    answer: "twenty thousand leagues under the sea"
  },
  {
    id: 74,
    question: "Element with the chemical symbol 'S'",
    answer: "sulfur"
  },
  { id: 75, question: "Capital of South Africa", answer: "pretoria" },
  {
    id: 76,
    question: "Famous play by William Shakespeare",
    answer: "romeo and juliet"
  },
  { id: 77, question: "Largest desert in Africa", answer: "sahara" },
  {
    id: 78,
    question: "Inventor of the telephone",
    answer: "alexander graham bell"
  },
  { id: 79, question: "Famous novel by George Orwell", answer: "animal farm" },
  {
    id: 80,
    question: "Element with the chemical symbol 'Cl'",
    answer: "chlorine"
  },
  { id: 81, question: "Country known for its tango", answer: "argentina" },
  { id: 82, question: "Inventor of the lightbulb", answer: "thomas edison" },
  {
    id: 83,
    question: "Famous physicist known for the theory of electromagnetism",
    answer: "maxwell"
  },
  { id: 84, question: "Capital of Germany", answer: "berlin" },
  {
    id: 85,
    question: "Element with the chemical symbol 'Mg'",
    answer: "magnesium"
  },
  { id: 86, question: "Famous opera by Giuseppe Verdi", answer: "la traviata" },
  { id: 87, question: "Largest lake in Africa", answer: "victoria" },
  { id: 88, question: "Inventor of the polio vaccine", answer: "jonas salk" },
  {
    id: 89,
    question: "Famous play by Arthur Miller",
    answer: "death of a salesman"
  },
  {
    id: 90,
    question: "Element with the chemical symbol 'Ar'",
    answer: "argon"
  },
  { id: 91, question: "Country known for its fjords", answer: "norway" },
  {
    id: 92,
    question: "First woman to win a Nobel Prize in two different fields",
    answer: "marie curie"
  },
  { id: 93, question: "Inventor of the steam engine", answer: "james watt" },
  { id: 94, question: "Famous play by Anton Chekhov", answer: "the seagull" },
  { id: 95, question: "Capital of Australia", answer: "canberra" },
  {
    id: 96,
    question: "Element with the chemical symbol 'Si'",
    answer: "silicon"
  },
  {
    id: 97,
    question: "Famous composer of 'The Four Seasons'",
    answer: "vivaldi"
  },
  {
    id: 98,
    question: "Largest island in the Mediterranean Sea",
    answer: "sicily"
  },
  { id: 99, question: "Inventor of the telescope", answer: "galileo galilei" },
  {
    id: 100,
    question: "Famous novel by Jane Austen",
    answer: "pride and prejudice"
  }
];

export default questions;
