export interface Usuario {
  //opcional porque está vindo do backend então nao conseguimos garantir que tudo terá
  id ?: number;
  name?: string;
  email?: string;
}
