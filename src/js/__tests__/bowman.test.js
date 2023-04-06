import Bowman from '../character/Bowman';

describe('Tests class Bowman', () => {
  it('create object Bowman', () => {
    const b1 = new Bowman('Bow');
    const res = {
      name: 'Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(b1).toEqual(res);
  });

  it('create object Character with short name', () => {
    try {
      const jon = new Bowman('B');
      const res = {
        name: 'B',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Length name error');
    }
  });

  it('create object Character with not string name', () => {
    try {
      const jon = new Bowman(12);
      const res = {
        name: 12,
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Name is not string');
    }
  });

  it('create object Character with unsupported type', () => {
    try {
      const jon = new Bowman('Bow', 'Wolf');
      const res = {
        name: 'Bow',
        type: 'Wolf',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('This type does not exist');
    }
  });
});
