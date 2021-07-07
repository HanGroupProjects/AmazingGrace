export interface Questions {
  label: string;
  questions: Question[];
}

interface Question {
  type: TYPE,
  value: string,
  label: string,
  options: string[]
}


export enum TYPE {
  RADIO = "radio",
  INPUT = "input",
  CHECKBOX = "checkbox"
}
