/*
Display the user's address
Write a function getDisplayedAddress(address) to concatenate strings from the properties of the address object into a complete address string.
The returned string should be in the format: "address.number address.street, address.ward, address.district, address.city"
Note that the address object may not always have all of the above properties.
Example:

getDisplayedAddress({
    number: 123,
    street: 'Nguyen Cong Tru',
    ward: 'Ward 11',
    district: 'Binh Thanh District',
    city: 'HCMC'
});
// should return '123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC'

getDisplayedAddress({
    street: 'Nguyen Cong Tru',
    district: 'Binh Thanh District'
});
// should return 'Nguyen Cong Tru, Binh Thanh District'
*/

function getDisplayedAddress(address) {
  const parts = [];

  // Concatenate house number + street name if both exist
  if (address.number && address.street) {
    parts.push(`${address.number} ${address.street}`);
  } else if (address.street) {
    parts.push(address.street);
  } else if (address.number) {
    parts.push(address.number.toString());
  }

  // Add the remaining parts if they exist
  if (address.ward) parts.push(address.ward);
  if (address.district) parts.push(address.district);
  if (address.city) parts.push(address.city);

  // Join all parts with commas
  return parts.join(', ');
}
module.exports = getDisplayedAddress;