const UserTableData = {
  sortEmployees: jest.fn((newSorted, column, shiftKey) => {
    return newSorted[0];
  }),
  patchEmployee: jest.fn(),
  deleteEmployee: jest.fn(),
  employees: [
    {
      id: 12,
      first_name: 'john',
      last_name: 'smith',
      email: 'john@smith.com',
      phone: '111-111-1111',
      state_id: 1,
      street_address: '123 e main',
      city: 'Bozeman',
      zip_code: '59715',
      status: 'inactive',
      state_abbreviation: 'MT',
    },
    {
      id: 13,
      first_name: 'jane',
      last_name: 'smith',
      email: 'jane@smith.com',
      phone: '111-111-1111',
      state_id: 1,
      street_address: '123 e main',
      city: 'Bozeman',
      zip_code: '59715',
      status: 'active',
      state_abbreviation: 'MT',
    },
  ],
};

export default UserTableData;
