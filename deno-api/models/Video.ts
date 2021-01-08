import IVideo from "../interfaces/I_Video.ts";

const videos : Array<IVideo> = [];

const getVideos = ( ): Array<IVideo> => {
    return videos
};

const addVideo = ( video:IVideo ):IVideo => {
    videos.push( video );
    return video;
};

const deleteVideo = ( id:number ):Boolean => {
    const videoToDelete = videos.filter(video => video.id === id)[0];
    
    const wasDeleted = videos.splice( videos.indexOf( videoToDelete ) , 1 );
    
    return wasDeleted ? true : false; 
};

const updateVideo = ( video:IVideo ):Boolean => {
    return videos.map( thisVideo => {
        if (thisVideo.id === video.id){
            videos[videos.indexOf( thisVideo )] = video;
            return true;
        }
        return false;
    }) ? true : false;
};

export {getVideos, addVideo, deleteVideo, updateVideo};