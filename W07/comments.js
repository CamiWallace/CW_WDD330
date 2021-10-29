class Comment{
    constructor(type){
        this.type = type;
        this.comment = this.readComments(type) || [];

    }
    readComments(type){
        return JSON.parse(window.localStorage.getItem(this.type));
    }

    writeComments(comment, hikeName){
        const newComment ={
            name: hikeName,
            nComment: comment,
            date: new Date()
        };
        window.localStorage.setItem(this.type, newComment);
    }
}