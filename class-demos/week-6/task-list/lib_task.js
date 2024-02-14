"use strict";
class Task {
    constructor({ description, dueDate }) { // uses destructuring
        this.description = description;
        if (dueDate) {
            this.dueDate = new Date(dueDate);
        } else {
            this.dueDate = new Date();
            this.dueDate.setMonth(this.dueDate.getMonth() + 1);
        }
    }
    get isValid() {
        if (this.description === "") {
            return false;
        }
        const today = new Date();
        if (this.dueDate.getTime() <= today.getTime()) {
            return false;
        }
        return true;
    }
    toString() {
        return `${this.description}<br>
    Due Date: ${this.dueDate.toDateString()}`;
    }
}