
class Note {
	//Note content constructor
	//initializes an instance of the note content  with properties when called.
	constructor(properties){
		this.properties = properties;
	}
}

class NoteApplication {
	//Initialize an instance of an Object
	constructor(author) {
		this.allNotes = [];
		this.author = author;
		this.note_id = 0;	
	}

	create(note_content) { 
		// Method to create note content with properties.
		//Will create an object with property of the note content.
	 	if(typeof note_content === 'object') {
			var note = new Note(note_content);
			note.properties._id += 1;
			this.allNotes.push(note);			
			console.log('note created successfully, note id is: ' + note.properties._id);
		} else {
			console.log('Error! Type of ' + note_content + ' not supported');
		}

	}

	listNotes() {
		//Will list all the notes save to array.
		// and display accordingly.
		this.allNotes.forEach(function (item) {
			console.log(item);
			console.log('note id :' + item.properties._id);
			console.log(item.properties.note);
			console.log('Author by : ' + item.properties.author);
		})
	}

	get(note_id) {
		//This gets the particular note content by the id passed as argument;
		if(typeof note_id === 'number'){
		this.allNotes.forEach(function (item) {
			if(note_id === item.properties._id) {
				console.log(item.properties.note);
			} else {
				console.log('no such content');
			}
		})

		} else {
			console.log('Invalid note id! Please enter a valid Number');
		}

	}

	search(search_text) {
		//this searches the note itself by the string of text passed as an argument.
		if(typeof search_text === 'string'){
		var reg = /search_text/i;
		this.allNotes.forEach(function(item){	
			if(item.properties.note.match(reg)){
				console.log('Note Id : ' + item.properties._id);
				console.log(item.properties.note);
				console.log('Author by : ' + item.properties.author);
			} else {
				console.log('No such content availabe');
			}		
		})
		} else {
			console.log('Invalid search input');
		}

	}

	delete(note_id) {
		//Simply deletes the note by the id passed as an argument.
		if(typeof note_id === 'number') {
		this.allNotes.forEach(function (item) {
			if(item.properties._id === note_id){
				item.properties.note = " ";
				console.log('note deleted successfully!');
			} else {
				console.log('No such note content available');
			}
		})
		} else {
			console.log('invalid input. Must be an integer');
		}

	}

	edit(note_id, new_content) {
		//simply edits the note with the new_content passed as an argument by the note id.
		if(typeof note_id === 'number' && typeof new_content === 'string') {
		this.allNotes.forEach(function (item) {
			if (item.properties._id === note_id) {
				item.properties.note = new_content;
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

var note = {
	author: "Obinna",
	_id : 0,
	note : "i have a dream"
};

var obinna = new NoteApplication("obinna");
obinna.create(note);
obinna.listNotes();
obinna.get(1);
obinna.edit(1, 'i have a dream');

var tony = {
	author: "uche",
	_id : 0,
	note : "He saw a Ghost"
}

var uche = new NoteApplication('uche')
uche.create(tony)
