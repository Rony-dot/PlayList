import { PlayList } from "../utils/PlayList";

export const PlayListService = (requestConfig) => {
    switch (requestConfig.url) {
        case "/getPlayList":
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ data: PlayList });
                }, 1 * 1000);
            });
            break;

        case "/getCompletedCount":
            return new Promise((resolve, reject) => {
                var acc = 0;
                PlayList.forEach(group => {
                    const notCompletedVideos = group.videos.filter(videoItem => videoItem.completed !== false)
                    acc += notCompletedVideos.length;
                })
                resolve({ data: acc });
            });
            break;

        case "/getTotalVideosCount":
            return new Promise((resolve, reject) => {
                var acc = 0;
                PlayList.forEach(group => {
                    acc += group.videos.length;
                })
                resolve({ data: acc });
            });
            break;

        default:
            break;

    }
}