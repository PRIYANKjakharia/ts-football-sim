import { Striker, Defender, MidFielder, GoalKeeper, Player } from "./player/index.js";
import { Team } from "./team/Team.js";
import { Match } from "./match/Match.js";
import { HindiCommentary } from "./commentary/HindiCommentary.js";


const p1: Player = new Striker("sunil");
const p2: Player = new Defender("romos");
const p3: Player = new MidFielder("messi");
const p4: Player = new GoalKeeper("dhoni");

const listA: Player[] = [p1, p2, p3, p4];
const teamA: Team = new Team("Barca", listA);

const t1: Player = new Striker("rolando");
const t2: Player = new Defender("zlatan");
const t3: Player = new MidFielder("mbappu");
const t4: Player = new GoalKeeper("rahul");


const listB: Player[] = [t1, t2, t3, t4];
const teamB: Team = new Team("Real Medrid", listB);

const match: Match = new Match(teamA, teamB, new HindiCommentary());

// Game simulation sequence
p3.specialAbility();
match.commentary.goodPass(p3);

p1.specialAbility();
match.commentary.goodShoot(p1);
match.commentary.Goal(p1);
match.score.addTeamAGoals(p1, teamA);

t3.specialAbility();
match.commentary.goodPass(t3);

t1.specialAbility();
match.commentary.badShoot(t1);

p4.specialAbility();
match.commentary.goodSave(p4);

p3.specialAbility();
match.commentary.goodPass(p3);

p1.specialAbility();
match.commentary.goodShoot(p1);
match.commentary.Goal(p1);
match.score.addTeamAGoals(p1, teamA);

match.setManOfTheMatch(p3);
match.getResult();
