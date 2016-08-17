
/** Class used to instantiate the the note_content */
class Note {
	constructor(){
		this.note_content = "";
		this.author = "";
		this._id = 0;
	}
}


class NoteApplication {
	/**Creates a new object and sets its properties 
	*  Takes in a parameter author as the author of the note and saves this as an instance variable.
	*  Create a notes list/array to store all the notes as an instance property.	
	*/ 	
	constructor (author) {
		this.author = author;
		this.allNotes = [];
	};

	/** Takes the note content as the parameter and adds it to the notes list of the object.*/
	create(note_content) {
		if(typeof note_content === 'string'){		
			var note = new Note(note_content);
			note._id += 1;
			note.author = this.author;
			note.note_content += note_content;
			this.allNotes.push(note);			
			console.log('note created successfully, note id is: ' + note._id);
		} else {
			console.log('Invalid input! Must be string')
		}
	}

	/**  Lists out each of the notes in the notes list */
	listNotes() {		
		this.allNotes.forEach(function (item) {
			console.log('note id : ' + item._id);
			console.log(item.note_content);
			console.log('Author by : ' + item.author);
		})
	}

	/** Takes a note_id which refers to the index of the note in the notes 
	* list and returns the content of that note as a string.
	*/
	get(note_id) {
		if( typeof note_id === 'number' && note_id > 0 ){
		this.allNotes.forEach(function (item) {
			if(note_id === item._id) {
				console.log(item.note_content);
			} else {
				console.log('no such content');
			}
		})

		} else {
			console.log('Invalid note id! Please enter a valid Number');
		}

	}

	/** Take a search string, search_text and returns all the notes with that text */
	search(search_text) {
		if(typeof search_text === 'string'){						
			this.allNotes.forEach(function(item){				
				if(search_text === item.note_content){
					console.log('Note Id : ' + item._id);
					console.log(item.note_content);
					console.log('Author by : ' + item.author);
				} else {
					console.log('No such content availabe');
				}		
			});
		} else {
			console.log('Invalid search input');
		}

	}

	/** Deletes the note at the index note_id of the notes list.*/
	delete(note_id) {
		if( typeof note_id === 'number' && note_id > 0 ) {
			for(var item = 0; item < this.allNotes.length; item++) {
				if(this.allNotes[item]._id === note_id){
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

	/** Replaces the content in the note at note_id with new_content.*/
	edit(note_id, new_content) {
		if(typeof note_id === 'number' && note_id > 0 && typeof new_content === 'string') {
			this.allNotes.forEach(function (item) {
				if (item._id === note_id) {
					item.note_content = new_content;
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



