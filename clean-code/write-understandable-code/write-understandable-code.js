/*
Make code understandable within 5 seconds.
*/

// BAD code
getSessions() {
  this.sessionService.getSessions().subscribe(
    sessions => {
      this.sessions = this.filteredSessions = sessions;
      this.filterComponent.clear();
    },
    error => {
      console.log('error occurred here');
      console.log('error');
    },
    () => console.log('session retrieval completed');
  )
}

// GOOD code
getSessions() {
  this.sessionService.getSessions()
    .subscribe(
      this.mapSessions(),
      this.logSessionsError(),
      this.showToast()
    );
}