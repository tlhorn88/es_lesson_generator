import { createSlice } from '@reduxjs/toolkit';

const initialConceptSequence = [
  { id: '1', name: 'tuneful singing', function: 'kinder' },
  { id: '2', name: 'beat', function: 'kinder' },
  { id: '3', name: 'loud and soft', function: 'kinder' },
  { id: '4', name: 'high and low chant', function: 'kinder' },
  { id: '5', name: 'fast and slow', function: 'kinder' },
  { id: '6', name: 'high and low melody', function: 'kinder' },
  { id: '7', name: 'long and short rhythm', function: 'kinder' },
  { id: '8', name: 'qsd', function: 'rhythmic' },
  { id: '9', name: 'sol mi', function: 'melodic' },
  { id: '10', name: 'Q', function: 'rhythmic' },
  { id: '11', name: 'l', function: 'melodic' },
  { id: '12', name: '2$', function: 'rhythmic' },
  { id: '13', name: 'd', function: 'melodic' },
  { id: '14', name: 'w', function: 'rhythmic' },
  { id: '15', name: 'r', function: 'melodic' },
  { id: '16', name: 'xxcc', function: 'rhythmic' },
  { id: '17', name: 'do pentatonic', function: 'melodic' },
  { id: '18', name: '4$', function: 'rhythmic' },
  { id: '19', name: 'l,', function: 'melodic' },
  { id: '20', name: 'sxc', function: 'rhythmic' },
  { id: '21', name: 's,', function: 'melodic' },
  { id: '22', name: 'xcd', function: 'rhythmic' },
  { id: '23', name: "d'", function: 'melodic' },
  { id: '24', name: 'internal upbeat', function: 'rhythmic' },
  { id: '25', name: 'external upbeat', function: 'rhythmic' },
  { id: '26', name: 'aqa', function: 'rhythmic' },
  { id: '27', name: 'f', function: 'melodic' },
  { id: '28', name: 'ra', function: 'rhythmic' },
  { id: '29', name: 't,', function: 'melodic' },
  { id: '30', name: 'triple meter', function: 'rhythmic' },
  { id: '31', name: "t'", function: 'melodic' },
  { id: '32', name: 'ga', function: 'rhythmic' },
  { id: '33', name: 'ra', function: 'rhythmic' }
];

const conceptSequenceSlice = createSlice({
  name: 'conceptSequence',
  initialState: {
    sequence: initialConceptSequence,
    filterdSongs: {},
    focusSongs: {},
  },
  reducers: {
    setConceptSequence: (state, action) => {
      state.sequence = action.payload;
    },
    reorderConceptSequence: (state, action) => {
      state.sequence = action.payload;
    },
    setFilteredSongs: (state, action) => {
      state.filteredSongs = action.payload;
    },
    setFocusSongs: (state, action) => {
      state.focusSongs = action.payload;
    },
    },
});

export const { setConceptSequence, reorderConceptSequence, setFilteredSongs, setFocusSongs } = conceptSequenceSlice.actions;
export default conceptSequenceSlice.reducer;
