// salaries and work enviromental

export const typeOfContract = {
  labels: [
    "Contrato a término indefinido",
    "Contratista internacional",
    "Contrato a término indefinido con empresa local, pero trabajo para empresa extranjera",
    "Contrato a término fijo",
    "Contrato por prestación de servicio",
    "Contrato a término fijo con empresa local, pero trabajo para empresa extranjera",
    "contrato por obra y labor",
    "Contrato a termino fijo con empresa temporal",
  ],
  datasets: [882, 165, 154, 106, 23, 16, 7, 1],
  backgroundColor: [
    "rgb(255, 159, 64)",
  ],
  borderColor: [
    "rgba(255, 255, 255)"
  ],
  borderWidth: 1.5,


};

export const modeOfWork = {
  labels: [
    "Teletrabajo (100% trabajo en casa, debido a que así lo indica el contrato)",
    "Remoto (ocupa más del 70% de su tiempo trabajando en casa, cowork o un Café)",
    "Flexible (va a la oficina, pero puede trabajar desde casa cuando quiera)",
    "Presencial (ocupa más del 60% de su tiempo en una oficina)",
  ],
  datasets: [622, 430, 201, 106],
};

export const othersModeOfWork = {
  labels: [
    "Trabajo remoto",
    "Trabajo flexible",
    "Teletrabajo",
    "Trabajo en oficina",
  ],
  datasets: [641, 383, 320, 15],
};

//TODO:  timePerActivity

// Renumeraciones

// ¿A usted le pagan en pesos colombianos (COP) o dólares (USD)? COP: 1036; USD: 183

export const perksCompany = {
  labels: [
    "Hardware (computador, celular, etc)",
    "Medicina prepagada",
    "Educación (libros, cursos, etc)",
    "Clases de inglés",
    "Servicio de Internet",
    "seguro de vida",
    "Vacaciones adicionales a las de ley",
    "Salud mental (terapia, psicólogos)",
    "Alimentación (bonos, almuerzos, etc)",
    "Gimnasio",
    "Coworking",
    "otro",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [655, 619, 551, 451, 363, 348, 242, 229, 202, 196, 105, 74],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
        "rgba(255, 99, 132)",
      ],
    },
  ],
};

// ¿Usted preferiría que los beneficios (perks) anteriormente mencionados fuesen pagados en efectivo?
// No, están bien como están: 865; Sí, preferiría que fuera en efectivo: 315

export const hoursPerDay = {
  labels: [
    "8-12",
    "16-30",
    "32-37",
    "38-42",
    "43-47",
    "48-52",
    "55-68",
    "70-96",
    "100-160",
  ],
  datasets: [14, 52, 64, 722, 250, 208, 33, 13, 3],
};

export const objectCompany = {
  labels: [
    ["Consultoría", "y servicios", "de desarrollo de", "software a la medida"],
    [
      "Servicio habilitado", "por tecnología"
    ],
    ["Servicio", "no tecnológico",],
    [
      "Servicio o producto",
      "de tecnología ",
    ],
    "Otro",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [934, 277, 240, 230, 103],
      backgroundColor: [
        "rgb(75, 192, 192)"
      ],
      borderColor: "rgba(255, 255, 255)",
      borderColor: 1.5
    },
  ],
};

export const typeCompany = {
  labels: [
    ["Empresa", "extranjera"],
    ["Empresa", "Colombiana", "con mercado ", "Colombiano"],
    ["Empresa", "Colombiana", "con mercado ", "latinoamericano"],
    ["Empresa", "Colombiana", "con mercado ", "global"],
    ["Empresa", "Colombiana", "con mercado", "EEUU"],
    ["Soy", "independiente", "(freelance)"],
    [
      "Sector público",
      "colombiano",
      "(ministerios,",
      "secretarías,",
      "alcaldías, etc)",
    ],
  ],
  datasets: [
    {
      label: "respuestas",
      data: [690, 358, 235, 234, 190, 52, 25],
      backgroundColor: [
        "rgb(75, 192, 192)"
      ],
      borderColor: ["rgba(255, 255, 255)"],
      borderWidth: 1.5,
    },
  ],
};

export const fundCompany = {
  labels: [
    "< 1 año",
    "1 año",
    "2-5",
    "5-10",
    "> 10",
    ["Soy","independiente"],
  ],
  datasets: [
    {
      label: "respuestas",
      data: [28, 56, 397, 376, 910, 17],
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(255, 255, 255)",
      borderWidth: 1.5,
    },
  ],
};

// stack developer and others

export const rolDeveloperAct = {
  labels: [
    "Software Engineer",
    "Full Stack Developer/ Engineer",
    "Frontend Developer/ Engineer",
    "Backend Developer/ Engineer",
    "Developer/ Engineer",
    "Mobile Developer",
    "Software Architect / Arquitecto de software",
    "Analyst / Analista",
    "Web Developer/ Engineer",
    "Data Scientist / Engineer",
    "QA / Tester Engineer",
    "DevOps / Ingeniero de Infraestructura",
    "CTO (Chief Technical Officer)",
    "Machine learning Specialist / Engineer",
    "Teacher | Coach | Mentor | Educator",
    "UX / UI developer/designer",
    "DBA",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [
        228, 226, 223, 195, 90, 78, 51, 49, 40, 37, 36, 35, 28, 25, 11, 3, 3, 1,
      ],
      backgroundColor: [
        "rgb(75, 192, 192)"
      ],
      borderColor: "rgba(255, 255, 255)",
      borderWidth: 1.5,
    },
  ],
};

export const rolDeveloperBefore = {
  labels: [
    "Full Stack Developer/ Engineer",
    "Software Engineer/ Ingeniero de software",
    "Mi trabajo actual es mi primer empleo",
    "Backend Developer/ Engineer",
    "Frontend Developer/ Engineer",
    "Developer/ Engineer",
    "Web Developer/ Engineer",
    "Analyst / Analista",
    "Mobile Developer",
    "Data Scientist / Engineer",
    "QA / Tester Engineer",
    "Software Architect / Arquitecto de software",
    "DevOps / Ingeniero de Infraestructura",
    "CTO (Chief Technical Officer)",
    "Teacher | Coach | Mentor | Educator",
    "UX / UI developer/designer",
    "Machine learning Specialist / Engineer",
  ],
  datasets: [
    {
      data: [
        223, 203, 169, 161, 148, 83, 56, 54, 54, 42, 27, 23, 21, 19, 11, 11, 7,
        6,
      ],
      backgroundColor: [
        "rgb(75, 192, 192)"
      ],
      borderColor: "rgba(255, 255, 255)",
      borderWidth: 1.5,
    },
  ],
};

export const seniority = {
  labels: [
    "Senior (Avanzado)",
    "Mid (intermedio)",
    "Junior (Principiante)",
    "Student (estudiante)",
    "Trainee (practicante)",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [568, 553, 216, 10, 9],
    },
  ],
};

export const isFounder = {
  labels: ["No", "Si"],
  datasets: [
    {
      label: "respuestas",
      data: [1289, 70],
    },
  ],
};

export const timeCurrentlyWork = {
  labels: [
    "Menos de 1 año",
    "1+ año",
    "10 - 15 años",
    "2+ años",
    "3 - 5 años",
    "5 - 10 años",
    "Más de 15 años",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [544, 240, 29, 224, 203, 113, 6],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export const yearsOfExperience = {
  labels: [
    "Menos de 1 año",
    "1+ año",
    "10 - 15 años",
    "2+ años",
    "3 - 5 años",
    "5 - 10 años",
    "Más de 15 años",
  ],
  datasets: [
    {
      label: "respuestas",
      data: [98, 126, 175, 147, 373, 391, 49],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};
// ¿En cuál de los siguientes lenguajes de programación ocupa la mayor parte de su tiempo laboral?Listado extraído de GitHut 2.0
// Si su respuesta es "otro" por favor use el nombre encontrado en List of programming languages in Wikipedia
export const tecnologiesInWork = {
  labels: [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "C#",
    "PHP",
    "Ruby",
    "Kotlin",
    "Go",
    "Ninguno, soy mánager 😭",
    "Swift",
    "SQL",
    "Dart",
    "Scala",
    "R",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [
        478, 169, 153, 126, 101, 94, 43, 32, 31, 28, 17, 16, 15, 6,4
      ],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",

      ],
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: 1.5,
    },
  ],
};
//¿En qué otros lenguajes/tecnologías de desarrollo ocupa su tiempo laboral?
// No incluya lenguajes que use en su tiempo libre o hobbies.

export const othersTecnologiesInWork = {
  labels: [
    "JavaScript",
    "SQL",
    "TypeScript",
    "Python",
    "Java",
    "PHP",
    "C#",
    "Shell",
    "Go",
    "PowerShell",
    "TSQL",
    "Ruby",
    "Kotlin",
    "VisualBasic.NET",
    "Dart",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [
        714, 502, 411, 277, 236, 170, 136, 100, 99, 52, 47, 46, 43, 38, 32,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export const frontendTecnologies = {
  labels: [
    "React",
    "Angular",
    "Vue.js",
    "JQuery",
    "VanillaJS",
    "Next.js",
    "Flutter",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [422, 208, 96, 80, 46, 33, 9],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(23, 193, 215)",
  
      ],
      borderColor: [
        "rgb(255, 255, 255)",
      ],
      borderWidth: 1.5,
    },
  ],
};

export const backendTecnologies = {
  labels: [
    "ExpressJS",
    "Spring",
    "ASP.Net",
    "Django",
    "Laravel",
    "Rails",
    "NestJS",
    "Flask",
    "FastAPI",
    "NodeJs",
    "Symfony",
    "Php",
    "Go",
    "Gin",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [206, 169, 115, 93, 82, 62, 58, 22, 14, 14, 12, 9, 7, 6],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(23, 193, 215)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderColor: [
        "rgb(255, 255, 255)",
      ],
      borderWidth: 1.5,
    },
  ],
};

export const dbTecnologiesInWork = {
  labels: [
    "PostgreSQL",
    "MySQL/MariaDB",
    "Microsoft SQL Server",
    "MongoDB",
    "Oracle",
    "DynamoDB",
    "Firebase",
    "SQLite",
    "Elasticsearch",
    "Redis",
    "BigQuery",
    "Snowflake",
    "Cassandra",
    "Cosmosdb",
    "Couchbase",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [372, 277, 143, 94, 76, 43, 41, 20, 10, 6, 5, 4, 3, 3, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(23, 193, 215)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(23, 193, 215)",
      ],
      borderColor: [
        "rgb(255, 255, 255)",
      ],
      borderWidth: 1,
    },
  ],
};

export const typeOfInterview = {
  labels: [
    "Home work (prueba técnica para desarrollar en casa)",
    "Q & A (preguntas hecha por una persona)",
    "LiveCoding (prueba técnica con supervisión)",
    "Online Test (prueba técnica sin supervisión)",
    "Code Review (revisar código fuente de otra persona)",
    "Otro",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [459, 398, 273, 154, 27, 48],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(45, 159, 64, 0.2)",
        "rgba(23, 78, 64, 0.2)",
        "rgba(234, 90, 64, 0.2)",
        "rgba(45, 150, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(45, 159, 64, 0.2)",
        "rgba(23, 78, 64, 0.2)",
        "rgba(234, 90, 64, 0.2)",
        "rgba(45, 160, 64, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

//Demographies

export const countryOrigin = {
  labels: [
    "Colombia",
    "Venezuela",
    "México",
    "Perú",
    "Bolivia",
    "Argentina",
    "Chile",
    "Guatemala",
    "Francia",
  ],
  datasets: [
    {
      label: "Respuestas",
      data: [1142, 51, 3, 2, 2, 1, 1, 1, 1],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(45, 159, 64)",
        "rgba(23, 78, 64)",
        "rgba(234, 90, 64)",
      ],
      borderColor: "rgba(255, 255, 255)",
      borderWidth: 1.5,
    },
  ],
};

export const minorities = {
  labels: ["Si", "No"],
  datasets: [
    {
      label: "LGBTIQ+",
      data: [25, 0],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Afrodecendiente",
      data: [13, 0],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
    },
    {
      label: "Migrante",
      data: [7, 0],
      backgroundColor: "rgba(255, 205, 86, 0.2)",
    },
    {
      label: "Desplazado por la violencia",
      data: [3, 0],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Si, no especifica cual",
      data: [2, 0],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
    },
    {
      label: "Indigena",
      data: [1, 0],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
    },
    {
      label: "Neurodivergente (ADHD/Autismo)",
      data: [1, 0],
      backgroundColor: "rgba(0, 159, 64, 0.2)",
    },
    {
      label: "Raizal",
      data: [1, 0],
      backgroundColor: "rgba(255, 0, 64, 0.2)",
    },
    {
      label: "No",
      data: [0, 823],
      backgroundColor: "rgba(78, 12, 200, 0.2)",
    },
  ],
};
