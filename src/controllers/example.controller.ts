import Person from "../models/example.model";

export const show = async(request, response) => {
  const person = new Person()

  person.setName("Junior")
  person.setLastName("Zapana")

  response.status(200).json(
    person
  )
}
