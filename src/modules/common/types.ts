export interface IExercicio {
  categoria: string;
  nome: string;
  video: string; // url do video
  series: number;
  repeticoes: number;
  descanso: number;
}

export interface ITreino {
  sequencia: number;
  nome: string; // serie A - peito e triceps
  exercicios: IExercicio[];
}

export interface IWorkout {
  nome: string;
  validade: number; // em semanas
  treinos: ITreino[];
}
