const StaffForm = () => {
    return (
      <div className="container mt-4">
        <h2>Add/Edit Staff</h2>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label>Role</label>
            <input className="form-control" placeholder="Enter role" />
          </div>
          <button className="btn btn-success">Save</button>
        </form>
      </div>
    );
  };
  
  export default StaffForm;
  