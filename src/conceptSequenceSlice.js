import { createSlice } from '@reduxjs/toolkit';

const initialConceptSequence = [
  { id: '1', name: 'Concept 1', function: 'rhythmic' },
  { id: '2', name: 'Concept 2', function: 'melodic' },
  { id: '3', name: 'Concept 3', function: 'harmonic' }
];

const conceptSequenceSlice = createSlice({
  name: 'conceptSequence',
  initialState: {
    sequence: initialConceptSequence
  },
  reducers: {
    setConceptSequence: (state, action) => {
      state.sequence = action.payload;
    },
    reorderConceptSequence: (state, action) => {
      state.sequence = action.payload;
    }
  }
});

export const { setConceptSequence, reorderConceptSequence } = conceptSequenceSlice.actions;
export default conceptSequenceSlice.reducer;
