import { expect } from "chai";
import * as Sinon from "sinon";
import { Task as ITask } from "../../../interfaces";
import TaskModel from "../../../models/TaskModel";
import { validTask } from "../../mocks/taskMocks";

const Task = new TaskModel();

describe("Task Model Test", () => {
    describe("Create a Task with correct data", ()=> {
        before(()=> 
        Sinon.stub(Task, "create").resolves(validTask as ITask));
    })

    after(()=> {
        Sinon.restore();
    })

    it("Return a new Task", async () => {
        const task = await Task.create(validTask);
        expect(task).to.be.deep.equal(validTask);
    })
})