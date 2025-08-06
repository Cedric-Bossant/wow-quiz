### Table `classe`
| Champ       | Type     | Clé  |
|-------------|----------|------|
| id          | integer  | PK   |
| name        | string   |      |
| icon        | string   |      |
| description | text     |      |

---

### Table `question`
| Champ     | Type     | Clé  |
|-----------|----------|------|
| id        | integer  | PK   |
| content   | text     |      |
| number    | integer  |      |

---

### Table `answer`
| Champ       | Type     | Clé  |
|-------------|----------|------|
| id          | integer  | PK   |
| answer      | string   |      |
| question_id | integer  | FK   |

---

### Table `class_score` 
| Champ       | Type     | Clé  |
|-------------|----------|------|
| id          | integer  | PK   |
| score       | integer  |      |
| class_id    | integer  | FK   |
| answer_id   | integer  | FK   |

---

### Table `quiz_result`
| Champ      | Type     | Clé  |
|------------|----------|------|
| id         | integer  | PK   |
| username   | string   |      |
| class_id   | integer  | FK   |

---
### relations

- A `question` has many `answers`
- An `answer` belongs to one `question`
- An `answer` can affect multiple `classes` through `class_score`
- A `class` can be associated with multiple `class_score` entries
- A `quiz_result` is linked to a single `class`


    