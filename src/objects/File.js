class File
{
    constructor(filename, content, path)
    {
        this.filename = filename;
        this.content = content;
        this.editedContent = content;
        this.path = path;
        this.saved = true;
    }
}

module.exports = {File};