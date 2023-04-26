interface Todo {
    intitule: string;
    done: boolean;
  }
  
  export default class TodoImpl implements Todo {
    constructor(public intitule: string, public done = false) {}
  }