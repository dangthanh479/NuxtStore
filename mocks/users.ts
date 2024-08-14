// mocks/user.ts
const usersList = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' }
];

const usersList2 = [
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' }
];

export default {
  post: (req: { data: { itemType: string; }; }) => {
    const itemType = req.data.itemType;

    if (itemType === "10") {
      return [200, usersList];
    }
    if (itemType === "11") {
      return [200, usersList2];
    }
  },
  get: () => [500, { message: "GET not support" }]
};
