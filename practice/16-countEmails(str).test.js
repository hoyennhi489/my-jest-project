const countEmails = require('./16-countEmails(str)');

describe('countEmails', () => {
  test('returns 1 for a valid email', () => {
    expect(countEmails('my email is abc@xyz.com')).toBe(1);
  });

  test('returns 0 for invalid email formats', () => {
    expect(countEmails('my email is a@a.com')).toBe(0);   
    expect(countEmails('@abc.com')).toBe(0);                
    expect(countEmails('abc@')).toBe(0);              
  });

  test('returns correct count for multiple valid emails', () => {
    const input = 'easy@frontend.com easy@frontend.vn test@abc.com.vn';
    expect(countEmails(input)).toBe(3);
  });
});