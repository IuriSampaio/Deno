import Notes from "../models/Notes.ts"

const NotesController = {
    index: async({ response }: {response: any })=> {
        const notes = await Notes.find();
        response.body = notes;
    },
    store:async ({ request , response }: {request: any; response: any})=> {
        const {value:{title, text}} = await request.body();

        const id = await Notes.insertOne({
            title, text , createdAt: new Date()
        });

        console.log(id);

        response.status = 201;
        response.body = id;
    },
}

export default NotesController;