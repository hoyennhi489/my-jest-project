const getDisplayedAddress = require('./17-getDisplayedAddress(address)');

describe('getDisplayedAddress', () => {
  test('returns full address when all fields present', () => {
    expect(getDisplayedAddress({
      number: 123,
      street: 'Nguyen Cong Tru',
      ward: 'Ward 11',
      district: 'Binh Thanh District',
      city: 'HCMC'
    })).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
  });

  test('returns address with only street and district', () => {
    expect(getDisplayedAddress({
      street: 'Nguyen Cong Tru',
      district: 'Binh Thanh District'
    })).toBe('Nguyen Cong Tru, Binh Thanh District');
  });

  test('returns address with only number', () => {
    expect(getDisplayedAddress({ number: 99 })).toBe('99');
  });

  test('returns empty string when no properties', () => {
    expect(getDisplayedAddress({})).toBe('');
  });

  test('returns street when only street present', () => {
    expect(getDisplayedAddress({ street: 'Le Loi' })).toBe('Le Loi');
  });
});