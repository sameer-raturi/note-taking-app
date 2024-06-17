export type Tag = {
  id: string;
  label: string;
};

export type NoteData = {
  title: string;
  tags: Tag[];
  body: string;
};

// here it will have id and add all the NoteData type in it
export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  tagIds: string[];
  body: string;
};
