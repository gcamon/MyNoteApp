class NoteApplication {
	constructor(author) {
		this.author = author;
		this.list = [];
	}

	create(note_content) {
	 	if(typeof note_content === 'string') {
			this.note_id += 1;
			note = new SubObj();
			note['note_content'] = note_content;		
			note.author = this.author;
			note._id = this.note_id;
			this.allNotes.push(note);
		console.log('note created successfully, note id is: ' + note._id)
		} else {
			console.log('Error! Type of ' + note_content + ' not supported')
		}

	}

	listNotes() {
		this.allNotes.forEach(function (item) {
		console.log('note id :' + item._id);
		console.log(item.note_content)
		console.log('Author by : ' + item.author)
		})
	}

	get(note_id) {

		if(typeof note_id === 'number'){
		this.allNotes.forEach(function (item) {
			if(note_id === item._id) {
				console.log(item.note_content)
			} else {
				console.log('no such content')
			}
		})

	} else {
		console.log('Invalid note id! Please enter a valid Number')
	}

	}

	search(search_text) {
		if(typeof search_text === 'string'){
		var reg = /search_text/i;
		this.allNotes.forEach(function(item){	
			if(item.note_content.search(reg)){
				console.log('Note Id : ' + item._id);
				console.log(item.note_content);
				console.log('Author by : ' + item.author)
			} else {
				console.log('No such content availabe')
			}		
		})
	} else {
		console.log('Invalid search input')
	}

	}

	delete(note_id) {
		if(typeof note_id === 'number') {
		this.allNotes.forEach(function (item) {
			if(item._id === note_id){
				item.note_content = " ";
				console.log('note deleted successfully!')
			} else {
				console.log('No such note content available')
			}
		})
		} else {
			console.log('invalid input. Must be an integer')
		}

	}

	edit(note_id, new_content) {
		if(typeof note_id === 'number' && typeof new_content === 'string') {
		this.allNotes.forEach(function (item) {
			if (item._id === note_id) {
				item.note_content = new_content;
				console.log('content edited successfully!')
			} else {
				console.log('Invalid note ID')
			}
		})
		} else {
			console.log('invalid input format. Id Must be an integer and content must be string!')
		}
	}
}