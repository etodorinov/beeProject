import * as fetcher from "../utils/fetcher";

const baseUrl = "http://localhost:30303/notes";

export function createNoteInDatabase(hiveId, date, note) {
  const data = { hiveId, date, note };

  try {
    let createdNote = fetcher.post(baseUrl, data);

    return createdNote;
  } catch (error) {
    console.log(error);
  }
}

export function getAllNotesForSpecificHive(hiveId) {
  try {
    let notes = fetcher.get(baseUrl + `/${hiveId}`);

    return notes;
  } catch (error) {
    console.log(error);
  }
}

export function getSpecificNote(noteId) {
  try {
    let note = fetcher.get(baseUrl + `/note/${noteId}`);

    return note;
  } catch (error) {
    console.log(error);
  }
}

export function editNote(noteId, editedData) {
  try {
    let note = fetcher.put(baseUrl + `/note/${noteId}`, editedData);

    return note;
  } catch (error) {
    console.log(error);
  }
}

// export function getAllNotes() {
//   try {
//     let notes = fetcher.get(baseUrl);

//     return notes;
//   } catch (error) {
//     console.log(error);
//   }
// }
