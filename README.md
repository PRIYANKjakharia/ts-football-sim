# ⚽ Football Match Simulator

A command-line football match simulator built using **TypeScript** that demonstrates core **Object-Oriented Programming (OOP)** concepts. Users can create teams, assign player roles, choose commentary language, and simulate football actions through an interactive terminal menu.

---

## Features

- Interactive command-line interface
- Dynamic team creation
- Custom player creation
- Multiple player roles
  - Striker
  - MidFielder
  - Defender
  - GoalKeeper
- English and Hindi commentary
- Live scoreboard
- Goal tracking
- Save tracking
- Winner declaration
- Man of the Match selection

---

## OOP Concepts Demonstrated

### Abstraction
- `Player`
- `Commentary`

Both are implemented as abstract classes.

### Inheritance

Player hierarchy:

- Striker
- MidFielder
- Defender
- GoalKeeper

Commentary implementations:

- EnglishCommentary
- HindiCommentary

### Encapsulation

Player statistics such as goals, saves, cards, and team information are maintained using private fields with controlled access through getters and setters.

### Polymorphism

Each player role overrides `specialAbility()` to perform role-specific actions.

Examples:

- Striker → Shoot
- Defender → Tackle
- MidFielder → Long Pass
- GoalKeeper → Save

### Composition

- A Team is composed of multiple Player objects.
- A Match contains two Team objects, a Score object, and a Commentary object.

---

## Project Structure

```
src
│
├── commentary
│   ├── Commentary.ts
│   ├── EnglishCommentary.ts
│   └── HindiCommentary.ts
│
├── match
│   ├── Match.ts
│   └── Score.ts
│
├── player
│   ├── Player.ts
│   ├── Striker.ts
│   ├── MidFielder.ts
│   ├── Defender.ts
│   ├── GoalKeeper.ts
│   └── index.ts
│
├── team
│   └── Team.ts
│
└── main.ts
```

---

## Gameplay

When the application starts, users can:

1. Create Team 1
2. Create Team 2
3. Add players dynamically
4. Assign player roles
5. Select commentary language
6. Simulate the match using the interactive menu

---

## Available Actions

- Pass
- Shoot
- Save
- Tackle
- Long Pass
- Run
- Celebrate
- Show Score
- End Match

### Role-specific Actions

| Role | Special Ability |
|------|-----------------|
| Striker | Shoot |
| Defender | Tackle |
| MidFielder | Long Pass |
| GoalKeeper | Save |

---

## Technologies Used

- TypeScript
- Node.js

---

## Installation

Install dependencies

```bash
npm install
```

Compile TypeScript

```bash
npx tsc
```

Run the application

```bash
node dist/main.js
```

---

## Sample Workflow

```text
Create Team
↓

Add Players
↓

Select Player Roles
↓

Choose Commentary Language
↓

Start Match
↓

Perform Match Actions
↓

View Live Score
↓

End Match
↓

Winner & Man of the Match
```

---

## Future Improvements

- Match history
- Player statistics dashboard
- Input validation improvements
- Save/load matches