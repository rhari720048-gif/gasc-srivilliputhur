const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Institutional Metadata
const collegeInfo = {
  name: "Government Arts and Science College, Srivilliputhur",
  nameTamil: "அரசு கலை மற்றும் அறிவியல் கல்லூரி, திருவில்லிபுத்தூர்",
  location: "Pillaiyarkulam, Srivilliputhur, Virudhunagar District, Tamil Nadu - 626125",
  establishmentYear: "2020–2021",
  inaugurationDate: "27 February 2024",
  inaugurationOrder: "G.O. No. 55 dated 06-05-2022",
  affiliation: "Madurai Kamaraj University",
  affiliationTamil: "மதுரை காமராசர் பல்கலைக்கழகம்",
  studentCount: "~800 Students",
  principal: {
    name: "Dr. Suba. Saravanan",
    qualification: "M.C.A., M.Phil., M.Tech., Ph.D.",
    designation: "Associate Professor of Computer Science & Principal (i/c)"
  },
  contact: {
    address: "Pillaiyarkulam Village Panchayat, Srivilliputhur Taluk, Virudhunagar District, Tamil Nadu - 626125",
    district: "Virudhunagar",
    state: "Tamil Nadu",
    email: "gasc.srivilliputhur@gmail.com",
    phone: "04563 - 260555",
    university: "Madurai Kamaraj University"
  }
};

// Verified Announcements / News Updates
const announcements = [
  {
    id: 1,
    title: "UG Admissions 2026–2027 Portal Open",
    category: "Admission",
    date: "June 01, 2026",
    summary: "Applications invited for B.A. Tamil, B.A. English, B.Com, B.Sc. Mathematics, and B.Sc. Computer Science for Academic Year 2026–2027.",
    isNew: true
  },
  {
    id: 2,
    title: "Odd Semester Reopening Date - Academic Year 2026–2027",
    category: "Academic",
    date: "June 15, 2026",
    summary: "College reopens for the first semester on 15.06.2026. All students are required to maintain compulsory attendance.",
    isNew: true
  },
  {
    id: 3,
    title: "TN Skills Programmes Orientation (Naan Mudhalvan)",
    category: "Events",
    date: "July 05, 2026",
    summary: "Special skill enhancement courses in AI Digital Marketing, Data Analytics, Cloud Computing, and Data Science with Python for all enrolled students.",
    isNew: false
  },
  {
    id: 4,
    title: "First Internal Assessment Examinations Schedule",
    category: "Examination",
    date: "August 10, 2026",
    summary: "The 1st Continuous Internal Assessment (CIA) tests start on August 10, 2026 as per the MKU academic schedule.",
    isNew: false
  },
  {
    id: 5,
    title: "Pudhumai Penn & Tamil Pudhalvan Assistance Scheme Notice",
    category: "Circulars",
    date: "August 02, 2026",
    summary: "Eligible government school students (Class 6-12) can submit bank details for ₹1000/month financial assistance scheme.",
    isNew: false
  }
];

// Academic Calendar Highlights 2026–2027
const calendarHighlights = [
  { date: "15 June 2026", day: "Monday", event: "Reopening Day for Odd Semester (I, III, V)", type: "Academic" },
  { date: "10 August 2026", day: "Monday", event: "First Internal Assessment Examinations Begin", type: "Examination" },
  { date: "15 August 2026", day: "Saturday", event: "Independence Day Celebration", type: "Event" },
  { date: "24 September 2026", day: "Thursday", event: "Second Internal Assessment Examinations Begin", type: "Examination" },
  { date: "15 October 2026", day: "Thursday", event: "Model Examinations Commencement", type: "Examination" },
  { date: "27 October 2026", day: "Tuesday", event: "Last Working Day for Odd Semester", type: "Academic" },
  { date: "23 November 2026", day: "Monday", event: "Reopening Day for Even Semester (II, IV, VI)", type: "Academic" },
  { date: "21 January 2027", day: "Thursday", event: "First Internal Assessment (Even Sem) Commencement", type: "Examination" },
  { date: "08 March 2027", day: "Monday", event: "Second Internal Assessment (Even Sem) Commencement", type: "Examination" },
  { date: "30 March 2027", day: "Tuesday", event: "Model Examinations Commencement (Even Sem)", type: "Examination" },
  { date: "07 April 2027", day: "Wednesday", event: "Last Working Day for Even Semester", type: "Academic" }
];

// Departments
const departments = [
  {
    code: "TAM",
    name: "Department of Tamil",
    nameTamil: "தமிழ்த்துறை",
    degree: "B.A. Tamil",
    description: "Fostering Tamil literature, classical linguistics, regional culture, and analytical writing skills."
  },
  {
    code: "ENG",
    name: "Department of English",
    nameTamil: "ஆங்கிலத்துறை",
    degree: "B.A. English",
    description: "Developing global communicative competence, literary appreciation, and language proficiency."
  },
  {
    code: "COM",
    name: "Department of Commerce",
    nameTamil: "வணிகவியல் துறை",
    degree: "B.Com",
    description: "Building strong foundations in accounting, corporate governance, auditing, banking, and financial management."
  },
  {
    code: "MAT",
    name: "Department of Mathematics",
    nameTamil: "கணிதத்துறை",
    degree: "B.Sc. Mathematics",
    description: "Cultivating logical reasoning, mathematical modeling, numerical analysis, and quantitative aptitude."
  },
  {
    code: "CSC",
    name: "Department of Computer Science",
    nameTamil: "கணிணி அறிவியல் துறை",
    degree: "B.Sc. Computer Science",
    description: "Imparting expertise in software engineering, programming logic, database management, and emerging web technologies."
  }
];

// API Endpoints
app.get('/api/college-info', (req, res) => {
  res.json({ success: true, data: collegeInfo });
});

app.get('/api/announcements', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = announcements.filter(a => a.category.toLowerCase() === category.toLowerCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: announcements.length, data: announcements });
});

app.get('/api/calendar', (req, res) => {
  res.json({ success: true, count: calendarHighlights.length, data: calendarHighlights });
});

app.get('/api/departments', (req, res) => {
  res.json({ success: true, count: departments.length, data: departments });
});

app.listen(PORT, () => {
  console.log(`GASC Srivilliputhur Backend running on port ${PORT}`);
});
