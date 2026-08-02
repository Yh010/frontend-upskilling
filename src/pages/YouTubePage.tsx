import { ExternalLink, ListVideo, Play, Youtube } from "lucide-react";
import { useState } from "react";
import { youtubePlaylists } from "../content/writing";

const allVideos = youtubePlaylists.flatMap((playlist) => playlist.videos.map((video) => ({ ...video, playlist })));

function youtubeId(href: string) {
  return new URL(href).searchParams.get("v") ?? "";
}

export default function YouTubePage() {
  const [activePlaylist, setActivePlaylist] = useState("all");
  const [activeVideoId, setActiveVideoId] = useState(allVideos[0]?.id ?? "");
  const visiblePlaylists = activePlaylist === "all" ? youtubePlaylists : youtubePlaylists.filter((playlist) => playlist.id === activePlaylist);
  const visibleVideos = visiblePlaylists.flatMap((playlist) => playlist.videos.map((video) => ({ ...video, playlist })));
  const activeVideo = visibleVideos.find((video) => video.id === activeVideoId) ?? visibleVideos[0];

  const selectPlaylist = (playlistId: string) => {
    const videos = playlistId === "all" ? allVideos : youtubePlaylists.find((playlist) => playlist.id === playlistId)?.videos ?? [];
    setActivePlaylist(playlistId);
    setActiveVideoId(videos[0]?.id ?? "");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[var(--color-surface)]">
      <header className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-[1520px] px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">Video library</p>
              <h1 className="mt-2 font-display text-4xl tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl">Watch the work.</h1>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">Build notes, architecture lessons, and design studies—organized like documentation.</p>
          </div>
        </div>
        <nav className="overflow-x-auto border-t border-[var(--color-line)]" aria-label="Playlists">
          <div className="mx-auto flex min-w-max max-w-[1520px] px-5 sm:px-8 lg:px-12">
            <button type="button" onClick={() => selectPlaylist("all")} className={`border-b-2 px-4 py-4 text-sm font-medium transition ${activePlaylist === "all" ? "border-[var(--color-ink)] text-[var(--color-ink)]" : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"}`}>All playlists</button>
            {youtubePlaylists.map((playlist) => <button key={playlist.id} type="button" onClick={() => selectPlaylist(playlist.id)} className={`border-b-2 px-4 py-4 text-sm font-medium transition ${activePlaylist === playlist.id ? "border-[var(--color-ink)] text-[var(--color-ink)]" : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"}`}>{playlist.title}</button>)}
          </div>
        </nav>
      </header>

      <div className="mx-auto grid max-w-[1520px] lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="border-b border-[var(--color-line)] bg-[var(--color-surface-strong)] px-5 py-7 lg:min-h-[calc(100vh-256px)] lg:border-b-0 lg:border-r lg:px-6">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"><ListVideo className="h-4 w-4" /> Videos</div>
            <div className="mt-5 space-y-1">
              {visibleVideos.map((video) => {
                const active = video.id === activeVideo?.id;
                return <button key={video.id} type="button" onClick={() => setActiveVideoId(video.id)} className={`flex w-full items-start gap-3 rounded-md px-3 py-3 text-left transition ${active ? "bg-white text-[var(--color-ink)] shadow-sm" : "text-[var(--color-muted)] hover:bg-white/70 hover:text-[var(--color-ink)]"}`}>
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${active ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white" : "border-[var(--color-line-strong)]"}`}><Play className="ml-0.5 h-2.5 w-2.5 fill-current" /></span>
                  <span><span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">{video.playlist.title}</span><span className="mt-1 block text-sm leading-5">{video.title}</span></span>
                </button>;
              })}
            </div>
          </div>
        </aside>

        <main className="min-w-0 px-5 py-9 sm:px-8 lg:px-14 lg:py-12">
          {activeVideo ? <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-2 text-sm text-[var(--color-muted)]"><Youtube className="h-4 w-4" /> {activeVideo.playlist.title}</div>
            <div className="aspect-video overflow-hidden rounded-xl border border-[var(--color-line)] bg-black shadow-[var(--shadow-soft)]">
              <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${youtubeId(activeVideo.href)}`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="mt-9 border-b border-[var(--color-line)] pb-9">
              <h2 className="font-display text-3xl leading-tight tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl">{activeVideo.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">{activeVideo.description}</p>
              <a href={activeVideo.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-muted)]">Watch on YouTube <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div> : null}
        </main>
      </div>
    </div>
  );
}
