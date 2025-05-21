// MILESTONE 01
// Crea un type alias Person per rappresentare una persona generica
type Person = {

  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string,

}

// MILESTONE 02
// Crea un type alias Actress che oltre a tutte le proprietà di Person, aggiunge le seguenti proprietà

type Nationality =
  | "American"
  | "British"
  | "Australian"
  | " Israeli-American"
  | "South African"
  | "French"
  | "Indian"
  | "Israeli"
  | "Spanish"
  | "South Korean"
  | "Chinese"



type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: Nationality
}
