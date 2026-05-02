const { Player } = TextAliveApp;

const player = new Player({
  app: {
    token: "jM4JUWJ4ZQOVfpfL"
  }
});

const lyricsEl = document.getElementById("lyrics");
const playBtn = document.getElementById("playBtn");

// サンプル曲
player.createFromSongUrl("https://piapro.jp/t/4e0o");

playBtn.addEventListener("click", () => {
  player.requestPlay();
});

let lastChar = "";

player.addListener({
  onTimeUpdate: (position) => {
    const char = player.video.findChar(position);

    if (char && char.text !== lastChar) {
      lyricsEl.textContent = char.text;
      lastChar = char.text;
    }
  }
});