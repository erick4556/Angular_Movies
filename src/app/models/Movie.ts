export interface Movie {
  cover?: string; //? signigica no debe ser requerido
  created_at?: string; //? signigica no debe ser requerido
  id?: number; //? signigica no debe ser requerido
  synopsis: string;
  title: string;
  updated_at?: string; //? signigica no debe ser requerido
  year: number;
}
