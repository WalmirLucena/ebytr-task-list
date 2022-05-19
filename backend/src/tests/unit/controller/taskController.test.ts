import { expect } from 'chai';
import * as Sinon from 'sinon';
import TaskController, { RequestWithBody } from '../../../controller/TaskController';
import { Task as ITask } from '../../../interfaces';
import { Request, Response } from 'express';
import { taskUpdated, validTask, validTaskArray } from '../../mocks/taskMocks';

describe("Task Controller", () => {
    let Task = new TaskController();
    
    describe('Create one task by req.body', () => {
        const req = {} as RequestWithBody<ITask>;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Task.service, 'create').resolves(validTask);
        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 201", async () => {
            req.body = validTask;
            await Task.create(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.equal(true);
        })
    })

    describe('Read all tasks', () => {
        const req = {} as Request;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Task.service, 'read').resolves(validTaskArray);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
            await Task.read(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })

    describe('ReadOne Task by id', () => {
        const id = validTask._id;
        const req = {} as Request<{id:string}>;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(validTask);
            Sinon.stub(Task.service, 'readOne').resolves(validTask);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
             req.params = {id};
            await Task.readOne(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })

    describe('Update a task by Id', () => {
        const id = validTask._id;
        const req = {} as Request<{id:string}> & RequestWithBody<ITask>;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(validTask);
            Sinon.stub(Task.service, 'update').resolves(validTask);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
            req.params = {id};
            req.body = taskUpdated;

            await Task.update(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })

    describe('Delete one taks by Id', () => {
        const id = validTask._id;
        const req = {} as Request<{id:string}>;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub();
            Sinon.stub(Task.service, 'delete').resolves(validTask);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
            req.params = {id};

            await Task.delete(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })
})