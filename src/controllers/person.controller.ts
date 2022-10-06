import express from 'express'
import person from "../models/person.model";

export const show = async(request:express.Request, response: express.Response) => {
  person.setName("zcode")
  person.setLastName("empty value")

  response.status(200).json(
    person
  )
}

export const years = async( request: express.Request, response: express.Response) => {
  let years: number

  person.setYearsOld(2+2*3*4)

  years = person.getYearsOld()

  response.status(200).json(
    years
  )
}
