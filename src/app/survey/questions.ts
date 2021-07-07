import { Questions, TYPE } from "./model";

let questions: Questions = {
  label: "Questions",
  questions: [
    {
      type: TYPE.RADIO,
      value: "priority",
      label: "What's your priority when you pick out outfits?",
      options: ["Fit", "Design", "Price", "Trend"]
    },
    {
      type: TYPE.RADIO,
      value: "time_effort",
      label: "How much time & effort do you put into choosing the right style?",
      options: ["Not a lot", "Some", "A lot"]
    },
    {
      type: TYPE.RADIO,
      value: "aspiring_style",
      label: "Which style do you most aspire to?",
      options: ["Romantic & Girly","Modern & Chic", "Sexy & Bold", "Classic & Formal", "Grunge & Vintage", "Sporty & Comfy", "I don't know"]
    },
    {
      type: TYPE.RADIO,
      value: "budget_everyday",
      label: "What is your style budget for everyday clothes?",
      options: ["$", "$$", "$$$"]
    },
    {
      type: TYPE.RADIO,
      value: "budget_specialday",
      label: "What is your style budget for special day clothes?",
      options: ["$", "$$", "$$$"]
    },
    {
      type: TYPE.INPUT,
      value: "height",
      label: "What is your height?",
      options: []
    },
    {
      type: TYPE.INPUT,
      value: "weight",
      label: "What is your weight?",
      options: []
    }
  ]

}


export { questions }
