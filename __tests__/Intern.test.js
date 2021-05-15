const Intern = require('../lib/Intern');
test('creates a intern object', () => {
    const intern = new Intern('Sam',1,"email","school");

    expect(intern.name).toBe('Sam');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
      
  });