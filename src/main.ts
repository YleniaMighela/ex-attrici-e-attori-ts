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


// MILESTONE 03
// Crea una funzione getActress che, dato un id, effettua una chiamata a:

// controllo se  i dati ricevuti hanno la struttura di Actress

function isActress(dati: unknown): dati is Actress {

  return (

    typeof dati === "object" &&
    dati !== null &&
    "id" in dati &&
    typeof dati.id === "number" &&
    "name" in dati &&
    typeof dati.name === "string" &&
    "birth_year" in dati &&
    typeof dati.birth_year === "number" &&
    "death_year" in dati &&
    typeof dati.death_year === "number" &&
    "biography" in dati &&
    typeof dati.biography === "string" &&
    "image" in dati &&
    typeof dati.image === "string" &&
    "most_famous_movies" in dati &&
    dati.most_famous_movies instanceof Array &&
    dati.most_famous_movies.length === 3 &&
    dati.most_famous_movies.every(movie => typeof movie === "string") &&
    "awards" in dati &&
    typeof dati.awards === "string" &&
    "nationality" in dati &&
    typeof dati.nationality === "string" &&
    [
      "American", "British", "Australian", "Israeli-American",
      "South African", "French", "Indian", "Israeli",
      "Spanish", "South Korean", "Chinese"
    ].includes(dati.nationality)
  )

}



async function getActress(id: number): Promise<Actress | null> {

  try {

    const response = await fetch(`http://localhost:3333/actresses/${id}`);

    const data: unknown = await response.json();
    // se è i dati sono diversi da quella di isACtress lancia l'aerrore
    if (!isActress(data)) {
      throw new Error("dati non validi")
    }
    // altrimenti ritornami i dati
    return data;

  } catch (err) {
    console.log(err);
    return null
  }
}