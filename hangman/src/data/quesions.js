const questions = [
  { id: 1, question: "Capital of France", answer: "paris" },
  { id: 2, question: "Largest planet in our solar system", answer: "jupiter" },
  { id: 3, question: "Element with the chemical symbol 'O'", answer: "oxygen" },
  { id: 4, question: "Country known for its kangaroos", answer: "aussie" },
  {
    id: 5,
    question: "Famous painting by Leonardo da Vinci",
    answer: "monalisa"
  },
  { id: 6, question: "Longest river in the world", answer: "amazon" },
  { id: 7, question: "Inventor of the lightbulb", answer: "edison" },
  { id: 8, question: "Currency used in Japan", answer: "yen" },
  { id: 9, question: "Element with the chemical symbol 'Fe'", answer: "iron" },
  {
    id: 10,
    question: "Mount Everest is located in which mountain range?",
    answer: "himalay"
  },
  { id: 11, question: "Shakespeare's play featuring Hamlet", answer: "hamlet" },
  { id: 12, question: "Largest ocean on Earth", answer: "pacific" },
  { id: 13, question: "First human to step on the moon", answer: "neilarm" },
  { id: 14, question: "Number of continents on Earth", answer: "seven" },
  { id: 15, question: "Inventor of the telephone", answer: "bell" },
  { id: 16, question: "Capital of Japan", answer: "tokyo" },
  {
    id: 17,
    question: "Famous detective created by Arthur Conan Doyle",
    answer: "sherlock"
  },
  { id: 18, question: "Deepest point in the ocean", answer: "trench" },
  { id: 19, question: "Author of 'Romeo and Juliet'", answer: "shakes" },
  {
    id: 20,
    question: "Element with the chemical symbol 'Na'",
    answer: "sodium"
  },
  { id: 21, question: "Country known for the Great Wall", answer: "china" },
  {
    id: 22,
    question: "Celsius and Fahrenheit are units for measuring what?",
    answer: "temp"
  },
  { id: 23, question: "Largest mammal on Earth", answer: "whale" },
  { id: 24, question: "Capital of Italy", answer: "rome" },
  { id: 25, question: "Inventor of the computer", answer: "turing" },
  { id: 26, question: "Largest desert in the world", answer: "arctic" },
  { id: 27, question: "Author of 'To Kill a Mockingbird'", answer: "harper" },
  { id: 28, question: "Chemical symbol for gold", answer: "aurum" },
  { id: 29, question: "Instrument played by Mozart", answer: "piano" },
  {
    id: 30,
    question: "First President of the United States",
    answer: "washington"
  },
  { id: 31, question: "Famous river in Egypt", answer: "nile" },
  { id: 32, question: "Inventor of the telephone", answer: "bell" },
  { id: 33, question: "Largest moon of Saturn", answer: "titan" },
  { id: 34, question: "Capital of Brazil", answer: "rio" },
  { id: 35, question: "Element with the chemical symbol 'H'", answer: "hydro" },
  { id: 36, question: "Author of '1984'", answer: "orwell" },
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
    answer: "aesop"
  },
  { id: 43, question: "Largest island in the world", answer: "green" },
  { id: 44, question: "First woman to win a Nobel Prize", answer: "marie" },
  { id: 45, question: "Chemical symbol for silver", answer: "silver" },
  { id: 46, question: "Author of 'Pride and Prejudice'", answer: "austen" },
  {
    id: 47,
    question: "Mountain range containing Mount Everest",
    answer: "himalay"
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
  { id: 50, question: "Largest city in the United States", answer: "newyork" },
  { id: 51, question: "Founder of Microsoft", answer: "gates" },
  {
    id: 52,
    question: "Country known for its tulips and windmills",
    answer: "dutch"
  },
  { id: 53, question: "Inventor of the World Wide Web", answer: "berners" },
  { id: 54, question: "Largest volcano on Earth", answer: "mauna" },
  { id: 55, question: "Famous painting by Vincent van Gogh", answer: "starry" },
  {
    id: 56,
    question: "Element with the chemical symbol 'K'",
    answer: "potash"
  },
  { id: 57, question: "Country known for its fjords", answer: "norway" },
  {
    id: 58,
    question: "Famous detective created by Agatha Christie",
    answer: "poirot"
  },
  { id: 59, question: "Instrument played by Jimi Hendrix", answer: "guitar" },
  { id: 60, question: "First human in space", answer: "gagarin" },
  { id: 61, question: "Author of 'The Great Gatsby'", answer: "fitz" },
  {
    id: 62,
    question: "Country known for the Pyramids of Giza",
    answer: "egypt"
  },
  { id: 63, question: "Element with the chemical symbol 'N'", answer: "nitro" },
  { id: 64, question: "Capital of South Korea", answer: "seoul" },
  { id: 65, question: "Famous ship that sank in 1912", answer: "titanic" },
  {
    id: 66,
    question: "Inventor of the theory of relativity",
    answer: "einstein"
  },
  { id: 67, question: "Capital of Canada", answer: "ottawa" },
  { id: 68, question: "Famous play by Tennessee Williams", answer: "desire" },
  { id: 69, question: "Element with the chemical symbol 'P'", answer: "phos" },
  {
    id: 70,
    question: "Country known for its samba and carnival",
    answer: "brazil"
  },
  { id: 71, question: "Largest waterfall in the world", answer: "angelfa" },
  { id: 72, question: "Inventor of the printing press", answer: "gutten" },
  { id: 73, question: "Famous novel by Jules Verne", answer: "twenty" },
  {
    id: 74,
    question: "Element with the chemical symbol 'S'",
    answer: "sulfur"
  },
  { id: 75, question: "Capital of South Africa", answer: "pretor" },
  { id: 76, question: "Famous play by William Shakespeare", answer: "romeo" },
  { id: 77, question: "Largest desert in Africa", answer: "sahara" },
  { id: 78, question: "Inventor of the telephone", answer: "bell" },
  { id: 79, question: "Famous novel by George Orwell", answer: "animal" },
  {
    id: 80,
    question: "Element with the chemical symbol 'Cl'",
    answer: "chlor"
  },
  { id: 81, question: "Country known for its tango", answer: "tango" },
  { id: 82, question: "Inventor of the lightbulb", answer: "edison" },
  {
    id: 83,
    question: "Famous physicist known for the theory of electromagnetism",
    answer: "maxwell"
  },
  { id: 84, question: "Capital of Germany", answer: "berlin" },
  { id: 85, question: "Element with the chemical symbol 'Mg'", answer: "mag" },
  { id: 86, question: "Famous opera by Giuseppe Verdi", answer: "opera" },
  { id: 87, question: "Largest lake in Africa", answer: "vic" },
  { id: 88, question: "Inventor of the polio vaccine", answer: "salk" },
  { id: 89, question: "Famous play by Arthur Miller", answer: "sales" },
  {
    id: 90,
    question: "Element with the chemical symbol 'Ar'",
    answer: "argon"
  },
  { id: 91, question: "Country known for its fjords", answer: "norway" },
  {
    id: 92,
    question: "First woman to win a Nobel Prize in two different fields",
    answer: "marie"
  },
  { id: 93, question: "Inventor of the steam engine", answer: "watt" },
  { id: 94, question: "Famous play by Anton Chekhov", answer: "seagull" },
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
  { id: 99, question: "Inventor of the telescope", answer: "galileo" },
  { id: 100, question: "Famous novel by Jane Austen", answer: "pride" }
];

export default questions;
