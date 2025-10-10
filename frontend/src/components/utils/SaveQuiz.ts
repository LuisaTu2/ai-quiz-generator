// Assuming quizData is your array
import { jsPDF } from "jspdf";
import type { Quiz } from "./constants";

// const checkmark = "✅";
// const checkmark ="✔️";

export function saveQuizAsPDF(quizData: Quiz) {
    const doc = new jsPDF();
    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Quiz Questions", 12, y);

    doc.setFont("helvetica", "normal");
    y += 10;

    quizData.questions.forEach((item: any, index: number) => {
      // Add question
      doc.setFontSize(15);
      doc.text(`${index + 1}. ${item.question}`, 10, y);
      y += 8;

      // Add options
      item.options.forEach((option: any, i: number) => {
        const isCorrect = option === item.answer
        const text = `${String.fromCharCode(97 + i)}. ${option}`
        if (isCorrect){
          doc.setTextColor(0, 128, 0); // green
          doc.setFont("helvetica", "bold");
        } else {
          doc.setTextColor(50, 50, 50); // normal gray/black
          doc.setFont("helvetica", "normal");
        }
        // doc.text(text, 12, y); // a), b), c), d)
        doc.text(text, 16, y);
        y += 6;
      });

      doc.setTextColor(0, 0, 0); // reset
      doc.setFont("helvetica", "normal");
      y += 4; // extra spacing between questions

      // Check if we need a new page
      if (y > 280) {
        doc.addPage();
        y = 10;
      }
      });

  // Save the PDF
  doc.save("quiz.pdf");
}
