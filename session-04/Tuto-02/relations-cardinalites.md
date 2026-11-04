# Relationships and Cardinalities

| Entity A | Cardinality A | Verb      | Cardinality B | Entity B | Management Rule                                                                            |
| -------- | ------------- | --------- | ------------- | -------- | ------------------------------------------------------------------------------------------ |
| CITY     | (1,N)         | reside    | (1,1)         | AUTHOR   | A city is home to one or more authors. An author lives in only one city.                   |
| AUTHOR   | (1,N)         | write  git status   | (1,1)         | ARTICLE  | An author writes one or more articles. An article is written by only one author.           |
| CATEGORY | (0,N)         | groups    | (1,1)         | ARTICLE  | A category groups zero or more articles. An article belongs to only one category.          |
| ARTICLE  | (0,N)         | possesses | (0,N)         | TAG      | An article can have zero or more tags. A tag can be associated with zero or more articles. |
