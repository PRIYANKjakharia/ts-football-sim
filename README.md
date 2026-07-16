# ⚽ Football Match Simulation (TypeScript OOP)

A command-line football match simulation built using **TypeScript** to demonstrate Object-Oriented Programming concepts such as **Abstraction, Inheritance, Encapsulation, Polymorphism, and Composition**.

The application simulates a football match between two teams with different player roles and multilingual commentary.

---

## Features

- Team creation
- Different player roles
  - Striker
  - Midfielder
  - Defender
  - Goalkeeper
- Goal tracking
- Match result generation
- Man of the Match support
- English and Hindi commentary
- Demonstrates major OOP principles

---

## OOP Concepts Used

### Abstraction
- `Player` is an abstract class.
- `Commentary` is an abstract class.

### Inheritance
- `Striker`
- `MidFielder`
- `Defender`
- `GoalKeeper`

inherit from `Player`.

`EnglishCommentary` and `HindiCommentary` inherit from `Commentary`.

### Encapsulation
Player statistics such as:

- Goals
- Saves
- Yellow Cards
- Red Cards
- Team

are maintained using private fields with getters and setters.

### Polymorphism
Each player implements its own version of `specialAbility()`.

Example:

- Striker shoots
- Goalkeeper saves
- Midfielder performs long passes
- Defender tackles

### Composition
- A `Team` contains multiple `Player` objects.
- A `Match` contains two `Team` objects, a `Score`, and a `Commentary` object.

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

## Class Overview

### Player
Base abstract class containing:

- Name
- Type
- Team
- Goals
- Saves
- Yellow Cards
- Red Cards

### Team

Maintains:

- Team name
- Player list
- Matches played
- Matches won
- Total goals
- Total saves
- Goalkeeper

### Match

Responsible for:

- Holding both teams
- Managing score
- Determining winner
- Man of the Match
- Commentary

### Score

Tracks goals scored by each team.

### Commentary

Provides match commentary.

Available implementations:

- English Commentary
- Hindi Commentary

---

## Technologies Used

- TypeScript
- Node.js

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Compile TypeScript

```bash
npx tsc
```

Run the project

```bash
node dist/main.js
```

---

## Sample Flow

- Create players
- Create Team A
- Create Team B
- Start match
- Players perform actions
- Commentary announces events
- Goals are updated
- Winner is declared

---

## Current Limitations

- Teams are hardcoded
- Players are hardcoded
- Match events are manually scripted

---

## Future Enhancements

- Interactive command-line interface
- Dynamic team creation
- Player selection using user input
- Match statistics
- League/Tournament mode
- File-based data storage
- Better scorecard generation
