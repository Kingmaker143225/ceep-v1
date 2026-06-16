export const mockQuestions = [
  {
    branch: "CSE",
    questions: [
      {
        question: "Which of the following sorting algorithms has the best worst-case time complexity?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
        correctIndex: 1,
        explanation: "Merge Sort has a worst-case time complexity of O(n log n), while Quick Sort's worst-case is O(n^2)."
      },
      {
        question: "What is the time complexity of searching an element in a balanced binary search tree?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctIndex: 2,
        explanation: "In a balanced BST, the search space is halved at each step, leading to O(log n) time complexity."
      }
    ]
  },
  {
    branch: "MBA",
    questions: [
      {
        question: "If A is taller than B, and B is taller than C, who is the shortest?",
        options: ["A", "B", "C", "Cannot be determined"],
        correctIndex: 2,
        explanation: "A > B > C. Therefore, C is the shortest."
      }
    ]
  }
];