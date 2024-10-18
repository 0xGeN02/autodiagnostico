// src/components/Question.tsx
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

type QuestionProps = {
  id: number;
  question: string;
  options: { text: string; weight: number }[];
  handleChange: (id: number, value: string, weight: number) => void;
};

const Question: React.FC<QuestionProps> = ({ id, question, options, handleChange }) => {
  return (
    <FormControl component="fieldset" margin="normal" sx={{ marginBottom: '1.5rem' }}>
      <FormLabel component="legend" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{`${id}. ${question}`}</FormLabel>
      <RadioGroup
        aria-label={question}
        name={`question-${id}`}
        onChange={(e) => {
          const selectedOption = options.find(option => option.text === e.target.value);
          if (selectedOption) {
            handleChange(id, selectedOption.text, selectedOption.weight);
          }
        }}
        sx={{ mt: 1 }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.text}
            control={<Radio />}
            label={option.text}
            sx={{ mb: 1 }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Question;