/*
Explain in code, not comments. Write self describing code.
*/

// BAD code
// Check if hero can defeat the villain
if (
  hero.powers > villain.powers &&
  hero.energy > 10 &&
  !villain.monsterMode) {

}

// GOOD code
if (hero.canDefeat(villain)) {

}