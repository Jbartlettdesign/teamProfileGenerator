const Engineer = require('../lib/Engineer');
test('creates a engineer object', () => {
    const engineer = new Engineer('Frodo',1,"email","github");

    expect(engineer.name).toBe('Frodo');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
      
  });