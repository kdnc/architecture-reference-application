/*
Replace magic Strings with constants
*/

// BAD code
resetDb() {
  this.http.post(`${api}/reset`).subscribe(() => {
      this.subject.next({
      eventType: 'EVENT_RESET',
      message: 'Reset the data'
    });
    this.toastService.activate('Reset the Data');
  });
}

// GOOD code
const resetMsg = {
  eventType: EVENTS.reset,
  message: 'Reset the data'
}
resetDb() {
  this.http.post(`${api}/reset`).subscribe(() => {
    this.subject.next(resetMsg);
    this.toastService.activate('Reset the Data');
  });
}