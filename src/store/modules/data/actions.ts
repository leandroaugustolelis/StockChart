import { action } from 'typesafe-actions';

export default function loadchart({ data }: { data: [] }) {
  return action('@data/LOAD_DATA', {
    data,
  });
}
