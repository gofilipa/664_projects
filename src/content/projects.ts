import { FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "The 1924 Project: A Python Workflow for Immigration Restriction History",
    creator: "Brendan O'Hagan",
    description:
      "2024 marks the 100th anniversary of the creation of the discriminatory national origins quota system. The main goal of this project is to create a workflow that can serve as a resource for obtaining historical data relating to immigration restrictions in the US. The general methodology is using the Python requests library to make API calls from archives or libraries that have relevant historical collections. Then, using the Pandas library to create a dataset, clean the data and analyze it to provide examples of the kinds of insights it can provide.",
    image: "/664_projects/immigration.png",
    links: [

      {
        name: "See on Github",
        url: "https://github.com/bohagenpratt/1924_Project",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Fatness Represented",
    creator: 'Tyler Vargas',
    description: "The rationale behind this project is to explore the frequency and art mediums that use fatness in the MET's digital collections over time. It interrogates the historical shifts in the meaning of fatness as well as which narratives of fatness are overrepresented by cultural institutions like the Met. ",
    image: "/664_projects/fatness.jpeg",
    links: [
      {
        name: "See project page",
        url: "https://boogs9.github.io/Fat_Art/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "See on Github",
        url: "https://github.com/slydragonn/markwriter",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Exploring AI Image Classification with Pulp Magazine Covers",
    creator: 'Alison Fengqi Long',
    description: "This project explores how different AI vision models classify visual information using pulp magazine cover art from speculative fiction pulp magazines (mostly 1920s–1950s). The interactive website of this project allows users to view data visualizations of generated tags from image-classification or captioning models such as google/vit-base-patch16-224, SmilingWolf/wd-v1-4-vit-tagger-v2. By comparing these tags between models and to the actual cover art content, users can observe the models’ inaccuracies, biases, and limitations.",
    image: "/664_projects/porn.png",
    links: [
      {
        name: "See project page",
        url: "https://ink2819.github.io/isfdb/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "See on Github",
        url: "https://github.com/ink2819/isfdb",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Index of First Lines",
    creator: 'Lawrence Joseph Giffin',
    description: "Shakespeare published 154 sonnets. This project seeks to automate the production of a poetic text constructed entirely from the first lines of Shakespeare's sonnets, totalling 11 new sonnets (154/14).",
    image: "/664_projects/firstlines.png",
    links: [
      {
        name: "See project page",
        url: "https://peirce-arrow.github.io/first-lines/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "See on Github",
        url: "https://github.com/peirce-arrow/index-of-first-lines",
        icon: FaGithub,
      },
    ],
  },

]
