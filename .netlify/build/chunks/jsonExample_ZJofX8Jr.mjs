const title = "Album Example";
const description = "This is an example album.";
const cover = "https://picsum.photos/800/600?random=1";
const date = "2025-01-01T00:00:00.000Z";
const location = "Unknown";
const tags = ["example"];
const layout = "masonry";
const columns = 3;
const photos = [{"src":"./智子_ASK.jpg","alt":"智子","title":"智子 by ASK","description":"This is a beautiful image from local file","tags":["human"]},{"src":"https://picsum.photos/800/600?random=2","alt":"random image","title":"Random Image","description":"This is a beautiful image from external link","tags":["scenary"]}];
const visible = true;
const jsonExample = {
  title,
  description,
  cover,
  date,
  location,
  tags,
  layout,
  columns,
  photos,
  visible,
};

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    columns,
    cover,
    date,
    default: jsonExample,
    description,
    layout,
    location,
    photos,
    tags,
    title,
    visible
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };
