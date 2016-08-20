# MyNoteApp

##Javascript Class LOS/XVI Assignment

Endeavour to do this assignment yourself to gain the full benefit of learning how to use JavaScript to solve real life problems.
Note that content surrounded by [ and ] represent placeholder content and should be replaced by the actual content. e.g [NOTE_CONTENT] will represent the actual note content.

## Assignment 1
For this assignment you will be creating OOP code required for implementing a note taking application. Follow the steps listed to complete the assignment.

__Create a class called NotesApplication.__
__Create a constructor that does the following__
__Takes in a parameter author as the author of the note and saves this as an instance variable.__
__Create a notes list/array to store all the notes as an instance property.__
__Create the following functionality for the NotesApplication class__
- create(note_content) - This function takes the note content as the parameter and adds it to the notes list of the object.
- listNotes() - This function lists out each of the notes in the notes list in the following format. The note_id parameter below represents the -respective index of each of the items in the list, the NOTE_CONTENT represent the note content and the author represents the note author.
	
	Note ID: [note_id]
	[NOTE_CONTENT]

	By Author [author]
	
- get(note_id) - This function takes a note_id which refers to the index of the note in the notes list and returns the content of that note as a string.
- search(search_text) - This function take a search string, search_text and returns all the notes with that text within it in the following format

#### Showing results for search ‘[<search_text>]’

Note ID: [note_id]
	[NOTE_CONTENT]

	By Author [author]
 
- delete(note_id) - This function deletes the note at the index note_id of the notes list.
- edit(note_id, new_content) - This function replaces the content in the note at note_id with new_content.

### Ensure to put in the necessary validation every step of the way.

