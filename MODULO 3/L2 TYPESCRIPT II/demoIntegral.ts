interface ISong {
  title: string;
  artist: string;
  duration: number;
}

interface IPodcast {
  title: string;
  host: string;
  episodes: number;
}

interface IAudiobook {
  title: string;
  author: string;
  duration: number;
}

interface IPlaylist {
  name: string;
  playlist: (ISong | IPodcast | IAudiobook)[];
}

const miArreglo: (number | string | boolean)[] = [1, 2, "hola", true];

const song1: ISong = {
  title: "song 1",
  artist: "artist 1",
  duration: 100,
};

const podcast1: IPodcast = {
  title: "podcast 1",
  host: "host 1",
  episodes: 10,
};

const audiobook1: IAudiobook = {
  title: "audiobook 1",
  author: "author 1",
  duration: 100,
};

const myPlaylist: IPlaylist = {
  name: "Mi Playlist",
  playlist: [song1, podcast1, audiobook1],
};

console.log(myPlaylist);
