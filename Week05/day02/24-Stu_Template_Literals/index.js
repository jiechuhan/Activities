const music = {
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  album: "Currents"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `<p>The song names ${music.title}.</p> <p>${music.artist} wrote this song.</p> <p>It belongs to the album ${music.album}.</p>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
