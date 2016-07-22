import firebase from 'firebase';
import EventEmitter from 'events';

class NoteRepository extends EventEmitter {
  get uid() {
    return firebase.auth().currentUser.uid;
  }
  get notesRef() {
    return this.ref.child(`users/${this.uid}/notes`);
  }
  constructor() {
    super();
    this.ref = firebase.database().ref('notes');
  }
  attachFirebaseListeners() {
    this.notesRef.on('child_added', this.onAdded, this);
    this.notesRef.on('child_removed', this.onRemoved, this);
    this.notesRef.on('child_changed', this.onChanged, this);
  }
  detachFirebaseListeners() {
    this.notesRef.off('child_added', this.onAdded, this);
    this.notesRef.off('child_removed', this.onRemoved, this);
    this.notesRef.off('child_changed', this.onChanged, this);
  }
  onAdded(snapshot) {
    const note = this.snapshotToNote(snapshot);
    this.emit('added', note);
  }
  onRemoved(oldSnapshot) {
    const note = this.snapshotToNote(oldSnapshot);
    this.emit('removed', note);
  }
  onChanged(snapshot) {
    const note = this.snapshotToNote(snapshot);
    this.emit('changed', note);
  }
  snapshotToNote(snapshot) {
    const key = snapshot.key;
    const note = snapshot.val();
    note.key = key;
    return note;
  }
  create({ title = '', content = '' }, onComplete) {
    this.notesRef.push({ title, content }, onComplete);
  }
  update({ key, title = '', content = '' }, onComplete) {
    this.notesRef.child(key).update({ title, content }, onComplete);
  }
  remove({ key }, onComplete) {
    this.notesRef.child(key).remove(onComplete);
  }
  findIndex(notes, key) {
    return notes.findIndex(note => note.key === key);
  }
  find(notes, key) {
    return notes.find(note => note.key === key);
  }
}

export default new NoteRepository();
