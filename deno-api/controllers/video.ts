import {getVideos , addVideo , deleteVideo, updateVideo} from '../models/Video.ts';
import IVideo from '../interfaces/I_Video.ts';

const videos = getVideos();

const seachVideo = ( id:number ) : IVideo | null => videos.filter( i => Number(i.id) === id )[0];

const videoController = {
    index  : ({ response }: {response: any }) => {
        response.status = 200;
        response.body = videos;
    },
    show   : ({ params , response }: { params: { id : string}; response: any }) => {
        const video = seachVideo(Number(params.id))
        
        if ( video ){ 
            response.body = video; 
            response.status = 201 
        }else{
            response.status = 401;
            response.body = "NOT FOUND"
        }
    },
    store  : async ({ request , response }: {request: any; response: any} ) => {

        const body = await request.body();
        const video:IVideo = await body.value;

        const videoAlreadyExists = videos.filter(videof => videof.title === video.title)[0];
    
        // if ( videoAlreadyExists || videoAlreadyExists != undefined )  
        //     response.status = 401;
        //     response.body = {message: "Video already exists"};
        //     return;

        const newId = Number(videos.map((video, index , arr) => !arr[index+1] ? Number(video.id) + 1 : null ).pop() ?? 1);
        
        const videoWasCreated = addVideo({id: newId, title:video.title, text:video.text,time:video.time ,link:video.link});
        
        if (videoWasCreated){
            response.status = 201
            response.body = videoWasCreated;
            return;
        }else{
            response.status = 501
            response.body = {message:'error to create video'}
            return;
        }
    },
    delete : ({ params , response }: { params: { id : string}; response: any }) => {
        const wasDeleted = deleteVideo(Number(params.id))
    
        if(wasDeleted){
            response.status = 301
            response.body = {message:"deletado com sucesso!!"}
            return ;
        }else{
            response.status = 401
            response.body = {message:"video n existe!!"}
            return ;
        }
    },
    update : async ({ request, response}: {request:any, response:any}) => {
        const body = await request.body();
        
        const video:IVideo = await body.value;

        const videoWasUpdated = updateVideo(video)       
    
        if (videoWasUpdated) {
            response.status = 301
            response.body = {message:"video atualizado com sucesso!"}
        }else{
            response.status = 401
            response.body = {message:"erro ao atualizar o video!"}
        }
    }
}


export default videoController;