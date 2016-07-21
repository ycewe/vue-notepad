import firebase from 'firebase';
import EventEmitter from 'events';

class NoteRepository extends EventEmitter {
  constructor() {
    super();
    this.ref = firebase.database().ref('notes');
  }
  attachFirebaseListeners() {
    this.ref.on('child_added', this.onAdded, this);
    this.ref.on('child_removed', this.onRemoved, this);
    this.ref.on('child_changed', this.onChanged, this);
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
    this.ref.push({ title, content }, onComplete);
  }
  update({ key, title = '', content = '' }, onComplete) {
    this.ref.child(key).update({ title, content }, onComplete);
  }
  remove({ key }, onComplete) {
    this.ref.child(key).remove(onComplete);
  }
  findIndex(notes, key) {
    return notes.findIndex(note => note.key === key);
  }
  find(notes, key) {
    return notes.find(note => note.key === key);
  }
}

export default new NoteRepository();
