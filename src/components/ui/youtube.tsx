export default function Youtube({ video_src }: { video_src: string }) {
    return (
        <div>
            <iframe width="204" height="115" src={video_src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

    )
}
