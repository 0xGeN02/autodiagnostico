// src/components/SurveyForm.tsx
import React, { useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import ProgressBar from './ProgressBar';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import '../styles/SurveyForm.css';
import { toast } from 'react-toastify';

type Answer = {
  questionId: number;
  answer: string;
};

const SurveyForm: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find((ans) => ans.questionId === questionId);
      if (existingAnswer) {
        return prevAnswers.map((ans) =>
          ans.questionId === questionId ? { ...ans, answer } : ans
        );
      } else {
        return [...prevAnswers, { questionId, answer }];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.length !== questions.length) {
      toast.info('Por favor responde todas las preguntas', { autoClose: 3000 });
      return;
    }
    // pathname = /results
    window.location.href = '/results';
  };

  const completionPercentage = (answers.length / questions.length) * 100;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <ProgressBar completionPercentage={completionPercentage} />
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Encuesta de Madurez Digital
        </Typography>
        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <Question
              key={q.id}
              id={q.id}
              question={q.question}
              options={q.options}
              handleChange={handleChange}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SurveyForm;