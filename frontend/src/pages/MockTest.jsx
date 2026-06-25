
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  BookmarkPlus,
  Play,
} from "lucide-react";

import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { branches } from "@/data/branches";
import { mockQuestions } from "@/data/mockQuestions";

export default function MockTest() {
  const [state, setState] = useState("pick");
  const [branch, setBranch] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    let timer;

    if (state === "live" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            handleFinalSubmit();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const startTest = () => {
    const branchQs =
      mockQuestions.find((mq) => mq.branch === branch)?.questions || [];

    if (branchQs.length === 0) {
      alert("No questions available for this branch yet.");
      return;
    }

    setQuestions(branchQs);
    setAnswers({});
    setStatus({});
    setCurrentQ(0);
    setTimeLeft(600);
    setState("live");
  };

  const handleAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: Number(val) }));
  };

  const handleSaveNext = () => {
    if (answers[currentQ] !== undefined) {
      setStatus((prev) => ({ ...prev, [currentQ]: "answered" }));
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
    }
  };

  const handleMarkReview = () => {
    setStatus((prev) => ({ ...prev, [currentQ]: "marked" }));

    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
    }
  };

  const handleFinalSubmit = () => {
    setShowConfirm(false);
    setState("result");
  };

  const getScore = () => {
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) score++;
    });

    return score;
  };

  const baseBtn =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

  const primaryBtn = `${baseBtn} bg-primary text-primary-foreground hover:opacity-90`;
  const outlineBtn = `${baseBtn} border border-input bg-background hover:bg-muted`;

  const renderPick = () => (
    <div className="max-w-md mx-auto py-16">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 border-b">
          <h2 className="font-semibold leading-none tracking-tight">
            Select Branch for Mock Test
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="">Select a branch</option>
            {mockQuestions.map((mq) => {
              const b = branches.find((br) => br.code === mq.branch);
              return (
                <option key={mq.branch} value={mq.branch}>
                  {b?.code} - {b?.name}
                </option>
              );
            })}
          </select>

          <button
            onClick={() => setState("instructions")}
            disabled={!branch}
            className={`${primaryBtn} w-full`}
          >
            Proceed to Instructions
          </button>
        </div>
      </div>
    </div>
  );

  const renderInstructions = () => (
    <div className="max-w-3xl mx-auto py-12">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 border-b">
          <h2 className="text-2xl text-primary font-serif font-semibold">
            General Instructions
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
            <li>Total duration of the mock test is 10 minutes.</li>
            <li>The countdown timer will show the remaining time.</li>
            <li>When the timer reaches zero, the test submits automatically.</li>
            <li>The Question Palette shows the status of each question.</li>
            <li>Click “Save & Next” to save your answer and continue.</li>
            <li>Click “Mark for Review” to flag a question for later.</li>
          </ul>

          <div className="flex justify-end gap-4 pt-4 border-t">
            <button className={outlineBtn} onClick={() => setState("pick")}>
              Cancel
            </button>

            <button
              onClick={startTest}
              className={`${baseBtn} bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8`}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLive = () => {
    const q = questions[currentQ];

    return (
      <div className="max-w-6xl mx-auto py-6 grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
        <div className="lg:col-span-3 flex flex-col border bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="bg-muted px-6 py-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg">
              Question {currentQ + 1} of {questions.length}
            </h2>

            <div
              className={`flex items-center font-mono font-bold text-lg px-3 py-1 rounded border ${
                timeLeft < 60
                  ? "bg-red-100 text-red-700 border-red-200"
                  : "bg-background"
              }`}
            >
              <Clock className="w-5 h-5 mr-2" />
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-xl font-medium mb-8 leading-relaxed">
              {q.question}
            </h3>

            <div className="space-y-4">
              {q.options.map((opt, i) => (
                <label
                  key={i}
                  className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                    answers[currentQ] === i
                      ? "bg-primary/5 border-primary shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ}`}
                    value={i}
                    checked={answers[currentQ] === i}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="flex-1 text-base font-normal">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 p-4 border-t flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                className={outlineBtn}
                onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                disabled={currentQ === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <button
                className={`${outlineBtn} border-yellow-500 text-yellow-700 hover:bg-yellow-50`}
                onClick={handleMarkReview}
              >
                <BookmarkPlus className="w-4 h-4 mr-1" />
                Mark for Review
              </button>
            </div>

            {currentQ < questions.length - 1 ? (
              <button onClick={handleSaveNext} className={`${primaryBtn} px-8`}>
                Save & Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirm(true)}
                className={`${baseBtn} bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8`}
              >
                Submit Test
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col border bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
            Question Palette
          </div>

          <div className="p-4 flex-1">
            <div className="grid grid-cols-4 gap-2 mb-6">
              {questions.map((_, i) => {
                const s = status[i];

                let bg = "bg-muted text-muted-foreground border-muted-foreground/30";
                if (s === "answered") bg = "bg-green-500 text-white border-green-600";
                if (s === "marked") bg = "bg-yellow-500 text-white border-yellow-600";
                if (currentQ === i) bg += " ring-2 ring-offset-2 ring-primary";

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentQ(i)}
                    className={`h-10 rounded-md font-bold text-sm border flex items-center justify-center transition-all ${bg}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 text-xs border-t pt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500" /> Answered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500" /> Marked for Review
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-muted border border-muted-foreground/30" /> Not Visited / Unanswered
              </div>
            </div>
          </div>

          <div className="p-4 border-t bg-muted/30">
            <button
              onClick={() => setShowConfirm(true)}
              className={`${baseBtn} w-full bg-red-600 text-white hover:bg-red-700`}
            >
              End Test
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const score = getScore();
    const total = questions.length;
    const answeredCount = Object.keys(answers).length;

    return (
      <div className="max-w-4xl mx-auto py-12 space-y-8">
        <div className="border-t-4 border-t-primary shadow-lg overflow-hidden rounded-xl bg-card border">
          <div className="bg-primary/5 py-8 text-center border-b">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">
              Test Completed
            </h2>
            <p className="text-muted-foreground">
              Here is your performance summary for {branch} Mock Test
            </p>
          </div>

          <div className="p-8">
            <div className="grid sm:grid-cols-4 gap-6 text-center mb-10">
              <ResultBox title="Score" value={`${score}/${total}`} />
              <ResultBox title="Correct" value={score} color="green" />
              <ResultBox title="Incorrect" value={answeredCount - score} color="red" />
              <ResultBox title="Unattempted" value={total - answeredCount} />
            </div>

            <h3 className="text-xl font-bold mb-6 border-b pb-2">
              Detailed Review
            </h3>

            <div className="space-y-6">
              {questions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.correctIndex;
                const isSkipped = userAns === undefined;

                return (
                  <div key={i} className="border rounded-lg p-5 bg-muted/10">
                    <div className="flex gap-3 mb-4">
                      <div className="mt-1">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : isSkipped ? (
                          <AlertCircle className="w-5 h-5 text-gray-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>

                      <div>
                        <span className="font-bold text-sm text-muted-foreground mb-1 block">
                          Question {i + 1}
                        </span>
                        <p className="font-medium">{q.question}</p>
                      </div>
                    </div>

                    <div className="pl-8 space-y-2 mb-4">
                      {q.options.map((opt, optIdx) => {
                        let rowClass =
                          "p-3 rounded border text-sm flex justify-between items-center bg-card";
                        let badge = null;

                        if (optIdx === q.correctIndex) {
                          rowClass =
                            "p-3 rounded border border-green-500 bg-green-50 text-green-900 font-medium flex justify-between items-center";
                          badge = (
                            <Badge className="bg-green-100 text-green-700 border-green-300">
                              Correct Answer
                            </Badge>
                          );
                        } else if (optIdx === userAns) {
                          rowClass =
                            "p-3 rounded border border-red-500 bg-red-50 text-red-900 flex justify-between items-center";
                          badge = (
                            <Badge className="bg-red-100 text-red-700 border-red-300">
                              Your Selection
                            </Badge>
                          );
                        }

                        return (
                          <div key={optIdx} className={rowClass}>
                            <span>{opt}</span>
                            {badge}
                          </div>
                        );
                      })}
                    </div>

                    <div className="pl-8 text-sm text-muted-foreground bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <span className="font-semibold text-primary block mb-1">
                        Explanation:
                      </span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button onClick={() => setState("pick")} className={`${primaryBtn} text-base px-6 py-3`}>
                Take Another Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SiteLayout>
      <PageBanner title="Practice Mock Test" crumbs={[{ label: "Mock Test" }]} />

      <div className="min-h-[calc(100vh-300px)] bg-muted/20 pb-12">
        {state === "pick" && renderPick()}
        {state === "instructions" && renderInstructions()}
        {state === "live" && renderLive()}
        {state === "result" && renderResult()}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-lg bg-background p-6 shadow-lg">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Submit Mock Test?</h2>
              <div className="text-sm text-muted-foreground">
                Are you sure you want to submit your test? You will not be able
                to change your answers after submission.

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-muted p-2 rounded">
                    Answered:{" "}
                    <span className="font-bold text-green-600">
                      {Object.keys(answers).length}
                    </span>
                  </div>

                  <div className="bg-muted p-2 rounded">
                    Unattempted:{" "}
                    <span className="font-bold text-gray-600">
                      {questions.length - Object.keys(answers).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className={`${outlineBtn} mt-2 sm:mt-0`}
              >
                Resume Test
              </button>

              <button onClick={handleFinalSubmit} className={primaryBtn}>
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}

function ResultBox({ title, value, color }) {
  const colorClass =
    color === "green"
      ? "bg-green-50 border-green-200 text-green-600"
      : color === "red"
      ? "bg-red-50 border-red-200 text-red-600"
      : "bg-card text-primary";

  return (
    <div className={`border rounded-xl p-4 shadow-sm ${colorClass}`}>
      <div className="text-sm font-semibold uppercase mb-1 opacity-80">
        {title}
      </div>
      <div className="text-4xl font-bold">{value}</div>
    </div>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}