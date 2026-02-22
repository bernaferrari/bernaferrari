export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Socially Aware Design of Games: an early workshop for game designers",
    authors: "B Ferrari, DP da Silva Junior, CM Oliveira, JSB Ortiz, R Pereira",
    venue: "Journal on Interactive Systems",
    year: 2020,
    citations: 25,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sJaFHJIAAAAJ&citation_for_view=sJaFHJIAAAAJ:u-x6o8ySG0sC",
  },
  {
    title:
      "Computational thinking and mental models: Promoting digital culture in the Youth and Adult Education",
    authors:
      "JSB Ortiz, C Moreira, K Menezes, B Ferrari, D Silva Junior, R Pereira",
    venue: "Interacting with Computers",
    year: 2023,
    citations: 9,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sJaFHJIAAAAJ&citation_for_view=sJaFHJIAAAAJ:UeHWp8X0CEIC",
  },
  {
    title:
      "Systemic view of human-data interaction: Analyzing a COVID-19 data visualization platform",
    authors: "B Ferrari, DPS Junior, R Pereira",
    venue: "Brazilian Symposium on Human Factors in Computing",
    year: 2020,
    citations: 5,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sJaFHJIAAAAJ&citation_for_view=sJaFHJIAAAAJ:d1gkVwhDpl0C",
  },
  {
    title: "Computational Thinking for Digital Culture Development",
    authors: "J Ortiz, C Moreira, K Menezes, B Ferrari, D Junior, R Pereira",
    venue: "Latin American Conference on Human Computer Interaction",
    year: 2021,
    citations: 2,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sJaFHJIAAAAJ&citation_for_view=sJaFHJIAAAAJ:9yKSN-GCB0IC",
  },
];
