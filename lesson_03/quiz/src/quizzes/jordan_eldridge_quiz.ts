import {
    AnswerChoice,
    MultipleChoiceQuizQuestion,
    QuizQuestion,
    QuizQuestionProvider,
  } from 'codedifferently-instructional';
   export class JordanEldridgeQuiz implements QuizQuestionProvider {
    getProviderName(): string {
      return 'jordaneldridge';
    }
     makeQuizQuestions(): QuizQuestion[] {
      return [JordanEldridgeQuiz.makeQuestion0(), JordanEldridgeQuiz.makeQuestion1()];
    }
     private static makeQuestion0(): QuizQuestion {
      return new MultipleChoiceQuizQuestion(
        0,
        'What is the size of float and double in java?',
        new Map<AnswerChoice, string>([
          [AnswerChoice.A, '34 and 64'],
          [AnswerChoice.B, '32 and 32'],
          [
            AnswerChoice.C,
            '34 and 34',
          ],
          [AnswerChoice.D, '64 and 32'],
        ]),
        AnswerChoice.UNANSWERED,
      ); // Replace `UNANSWERED` with the correct answer.
    }
     private static makeQuestion1(): QuizQuestion {
      return new QuizQuestion(
        1,
        'What is a computer?',
        'A machine that automatically transforms input into output.',
      ); // Provide an answer.
    }
  }
 