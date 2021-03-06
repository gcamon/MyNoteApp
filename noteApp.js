
/** Class used to instantiate the the note_content
*	@param{number,string,string} initializes the object with
* 	user id, author's name and the note.
*/
class Note {
	constructor(id,author,content){
		this.content = content;
		this.author = author;
		this.id = id;
	}
}


class NoteApplication {
	/**Creates a new object and sets its properties 
	*  Takes in a parameter author as the author of the note and saves this as an instance variable.
	*  Create a notes list/array to store all the notes as an instance property.
	*  @param{string}	
	*/ 	
	constructor (author) {
		this.author = author;
		this.allNotes = [];
	};

	/** Takes the note content as the parameter and adds it to the notes list @allNotes of the object.
	*   @param{object} the instance of the Note class.
	*/
	create(note_content) {
	    note_content.author	= this.author;	
		note_content.id++;
		var note = new Note(note_content.id,note_content.author, note_content.content);			
		this.allNotes.push(note);			
		console.log('note created successfully, note id is: ' + note.id);	
	}

	/**  Lists out each of the notes in the notes list */
	listNotes() {		
		this.allNotes.forEach(function (item) {
			console.log('note id : ' + item.id);
			console.log(item.content);
			console.log('Author by : ' + item.author);
		})
	}

	/** Takes a note_id which refers to the index of the note in the notes 
	*   list and returns the content of that note as a string.
	*   @param{integer} that identifies the note id of the note content.
	*/
	get(note_id) {
		if( typeof note_id === 'number' && note_id > 0 ){
		this.allNotes.forEach(function (item) {
			if(note_id === item.id) {
				console.log(item.content);
			} else {
				console.log('no such content');
			}
		})

		} else {
			console.log('Invalid note id! Please enter a valid Number');
		}

	}
	/** Take a search string, search_text and returns all the notes with that text
	*	@param{string} this expects to return note content that exactly the input.
	*/
	search(search_text) {
		if(typeof search_text === 'string'){						
			this.allNotes.forEach(function(item){				
				if(item.content.indexOf(search_text) !== -1){
					console.log('Note Id : ' + item.id);
					console.log(item.content);
					console.log('Author by : ' + item.author);
				} else {
					console.log('No such content availabe');
				}		
			});
		} else {
			console.log('Invalid search input');
		}

	}

	/** Deletes the note at the index note_id of the notes list 
	*   @param{number} the note id to be deleted.
	*/
	delete(note_id) {
		if( typeof note_id === 'number' && note_id > 0 ) {
			for(var item = 0; item < this.allNotes.length; item++) {
				if(this.allNotes[item].id === note_id){
					this.allNotes.splice( item, 1 );
					console.log('note deleted successfully!');
				} else {
					console.log('No such note content available');
				}
			}
		} else {
			console.log('invalid input. Must be an integer');
		}

	}

	/** Replaces the content in the note at note_id with new_content.
	*	@param{number,string} the id and the new text to replace the existing note content.
	*/
	edit(note_id, new_content) {
		if(typeof note_id === 'number' && note_id > 0 && typeof new_content === 'string') {
			this.allNotes.forEach(function (item) {
				if (item.id === note_id) {
					item.content = new_content;
					console.log('content edited successfully!');
				} else {
					console.log('Invalid note ID');
				}
			})
		} else {
			console.log('invalid input format. Id Must be an integer and content must be string!');
		}
	}
}





