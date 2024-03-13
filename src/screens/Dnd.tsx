import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Dnd() {
  const toDos = [1, 2, 3, 4, 5, 6];
  const onDragEnd = (args: any) => {
    console.log(args);
  };
  return (
    <div className="flex justify-center w-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-4/6">
          <Droppable droppableId="one">
            {(provided) => (
              <ul
                className="space-y-2 bg-red-300"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <Draggable
                    key={toDo}
                    draggableId={toDo.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="bg-blue-300"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default Dnd;
