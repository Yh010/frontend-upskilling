import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { youtubePlaylists } from "../content/writing";

export default function YouTubePage() {
  const [activePlaylist, setActivePlaylist] = useState("all");
  const visiblePlaylists =
    activePlaylist === "all"
      ? youtubePlaylists
      : youtubePlaylists.filter((playlist) => playlist.id === activePlaylist);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-14">
        <Reveal>
          <SectionIntro
            eyebrow="YouTube"
            title="Videos grouped by the work and ideas behind them."
            body="Playlists collect build notes and learning videos in one place."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2" aria-label="Filter playlists">
            <button
              type="button"
              onClick={() => setActivePlaylist("all")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activePlaylist === "all"
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
              }`}
            >
              All playlists
            </button>
            {youtubePlaylists.map((playlist) => (
              <button
                key={playlist.id}
                type="button"
                onClick={() => setActivePlaylist(playlist.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activePlaylist === playlist.id
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
                }`}
              >
                {playlist.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-14">
          {visiblePlaylists.map((playlist, playlistIndex) => (
            <section key={playlist.id} className="space-y-6">
              <Reveal delay={playlistIndex * 0.05}>
                <div className="flex flex-col gap-3 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Playlist</p>
                    <h2 className="mt-2 font-display text-3xl text-[var(--color-ink)] sm:text-4xl">{playlist.title}</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">{playlist.description}</p>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2">
                {playlist.videos.map((video, videoIndex) => (
                  <Reveal key={video.id} delay={0.08 + videoIndex * 0.05}>
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[var(--shadow-panel)]"
                    >
                      <div className="relative aspect-video overflow-hidden bg-[var(--color-surface-strong)]">
                        <img src={video.thumbnail} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.45))]" />
                        <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-lg">
                          <Play className="ml-0.5 h-4 w-4 fill-current" />
                        </span>
                      </div>
                      <div className="space-y-3 p-6">
                        <h3 className="font-display text-2xl text-[var(--color-ink)]">{video.title}</h3>
                        <p className="text-sm leading-7 text-[var(--color-muted)]">{video.description}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">Watch on YouTube <ExternalLink className="h-4 w-4" /></span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
