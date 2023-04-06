export default class Character {
  static typeCharacter = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Length name error');
    } else if (typeof name !== 'string') {
      throw new Error('Name is not string');
    } else {
      this.name = name;
    }

    if (!Character.typeCharacter.includes(type)) {
      throw new Error('This type does not exist');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
