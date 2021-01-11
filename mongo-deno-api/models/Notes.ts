import db from "../config/mongodb.ts";

interface NoteSchema{
    _id: { 
        $oid: string 
    };
    title: string;
    text: string;
    createdAt: Date;
};

const Notes = db.collection<NoteSchema>("notes");

export default Notes;