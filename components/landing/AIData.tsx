export const aiMessages = [
  { role: "user" as const, text: "Which students have attendance below 75%?" },
  {
    role: "assistant" as const,
    text: "8 students currently fall below the 75% threshold across 3 subjects — Data Structures (4), Computer Networks (2), and Operating Systems (2).",
  },
  {
    role: "assistant" as const,
    cards: [
      { label: "Data Structures", count: "4 students", pct: "68-74%" },
      { label: "Computer Networks", count: "2 students", pct: "70-73%" },
    ],
  },
];

export const aiCapabilities = [
  "Query attendance by student, subject, or date range",
  "Summarize attendance trends across classes",
  "Find students below attendance thresholds",
  "Assist with quiz and task creation workflows",
  "Answer questions about campus data and schedules",
  "Perform authorized actions through the backend",
];
