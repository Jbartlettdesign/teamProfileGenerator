const Manager = require('../lib/Manager');
test('creates a manager object', () => {
    const manager = new Manager('Gandalf',1,"email",1);

    expect(manager.name).toBe('Gandalf');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
      
  });