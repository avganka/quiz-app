export type Category = {
  _id: string,
  packId: string,
  name: string,
  questions: Question[],
}

export type Question = {
  id: string,
  categoryId: string,
  type: string,
  text: string,
  answer: string,
  file: string,
  points: number,
}
