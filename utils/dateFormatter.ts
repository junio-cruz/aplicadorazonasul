import { addHours, format } from 'date-fns';
import ptBr from 'date-fns/esm/locale/pt-BR';

export type FormatDateInput = {
  date: Date;
  dateFormat?: string;
};
export function dateFnsFormat({ date, dateFormat }: FormatDateInput) {
  return format(addHours(date, 3), dateFormat || 'dd/MM/yyyy', {
    locale: ptBr,
  });
}
