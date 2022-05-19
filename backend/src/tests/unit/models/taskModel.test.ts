import { expect } from "chai";
import * as Sinon from "sinon";
import TaskModel from "../../../models/TaskModel";

const Task = new TaskModel();

describe("Task Model Test", () => {
    describe("Create a Task with correct data", ()=> {
        before(()=> 
        Sinon.stub(Task, "create").resolves(TaskMock));
    })
})