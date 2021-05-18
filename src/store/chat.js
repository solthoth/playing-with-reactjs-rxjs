import { Subject } from 'rxjs';

const subject = new Subject();

const initialState = {
    data: [],
    newDataCount: 0,
};

let state = initialState;

const chatStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState)
}