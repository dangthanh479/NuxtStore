const categories = [
  {
    slug: "jacket",
    name: "jacket",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20231220_DE2xCWFO7t.jpeg",
      altText: "Jacket",
      title: "Jacket",
    },
  },
  {
    slug: "jeans",
    name: "Jeans",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20240809_JEVt8CrBAr.jpeg",
      altText: "Jeans",
      title: "Jeans",
    },
  },
  {
    slug: "set",
    name: "Set",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20240809_aT9c8gQp60.jpeg",
      altText: "Set",
      title: "Set",
    },
  },
  {
    slug: "Shirt",
    name: "Shirt",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20240717_qlfGwBXF66.jpeg",
      altText: "Shirt",
      title: "Shirt",
    },
  },
  {
    slug: "Sport-Set",
    name: "Sport Set",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20231116_5jObqGtBfk.jpeg",
      altText: "Sport Set",
      title: "Sport Set",
    },
  },
  {
    slug: "T-Shirst",
    name: "T Shirst",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20240809_2JnzLbmQbQ.jpeg",
      altText: "T Shirst",
      title: "T Shirst",
    },
  },
  {
    slug: "Vest",
    name: "Vest",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20230505_gh2PN5u1Ny.jpeg",
      altText: "Vest",
      title: "Vest",
    },
  },
  {
    slug: "short-pants",
    name: "Short Pants",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20220929_eMTVWTBf6RCIuwwtRhlknSRk.jpg",
      altText: "Short Pants",
      title: "Short Pants",
    },
  },
  {
    slug: "ao-dai",
    name: "Ao Dai",
    image: {
      sourceUrl:
        "https://pos.nvncdn.com/312d68-57499/ps/20231213_aL2CHctaT9.jpeg",
      altText: "Ao Dai",
      title: "Ao Dai",
    },
  },
];

export default {
  get: () => {
    return [200, categories];
  },
  post: () => [500, { message: "POST Method is not support" }],
};
