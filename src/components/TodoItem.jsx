function TodoItem({todoDate,todoName ,deleteBtn}){
    
    return(
<>
<div className="row my-row">
          <div className="col-6">
           {todoName}
          </div>
            <div className="col-4">
          {todoDate}
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=>{
              deleteBtn(todoName);
            }}>Delete</button>
            </div>
          </div>
          </>
    );
}

export default TodoItem