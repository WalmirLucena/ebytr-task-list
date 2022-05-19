import { expect } from 'chai';
import * as Sinon from 'sinon';
import { Task as ITask } from '../../../interfaces';
import TasKService from '../../../services/TaskService';
import { taskUpdated, validTask, validTaskArray } from '../../mocks/taskMocks';

describe('Task Model Test', () => {

  let Task = new TasKService();
  describe('Create a Task with correct data', () => {
    before(() => {
        Sinon.stub(Task.model, 'create').resolves(validTask as ITask);
    });
  ;

  after(() => {
    Sinon.restore();
  });

  it('Return a new Task', async () => {
    const task = await Task.create(validTask);
    expect(task).to.be.deep.equal(validTask);
  });
  }
)

describe('Get Tasks with correct data', () => {
  before(() => {
      Sinon.stub(Task.model, 'read').resolves(validTaskArray as ITask[]);
  });


  after(() => {
    Sinon.restore();
  });

  it('Return a List of Tasks', async () => {
    const task = await Task.read();
  expect(task).to.be.deep.equal(validTaskArray);
  });
  })

  describe('List one Task', () => {
    describe('When the Task exist', () => {
        before(() => {
            Sinon.stub(Task.model, 'readOne').resolves(validTask as any);
        });

        after(() => {
            Sinon.restore();
        })

        it('Must return a Task object', async () => {
            const task = await Task.readOne(validTask._id);
            expect(task).to.deep.equal(validTask);
        })
    });

    describe('When the Task doesnt exist', () => {
        before(() => {
            Sinon.stub(Task.model, 'readOne').resolves(null);
        });

        after(() => {
            Sinon.restore();
        });

        it('Must return null', async () => {
            const task = await Task.readOne('12345');
            expect(task).to.be.null;
        })
    })

});

describe('Update an item on the task list', () => {
    describe('When exist the task', () => {
        before(() => {
        Sinon.stub(Task.model, 'update').resolves(validTask as ITask);
    });

    after(() => {
        Sinon.restore();
    });

    it('Must return the task to be updated', async () => {
        const task = await Task.update(validTask._id, taskUpdated);
        expect(task).to.deep.equal(validTask);
    })

})

describe('Delete one Task by Id', () => {
    describe('When the task exist', () => {
        before(() => {
        Sinon.stub(Task.model, 'delete').resolves(validTask as ITask);
    });

    after(() => {
        Sinon.restore();
    });

    it('Must return empty', async () => {
        const taskDeleted = await Task.delete(validTask._id);
        expect(taskDeleted).to.deep.equal(validTask);
    })

})
});
});
});
