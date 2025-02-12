import Navbar from "../header/Navbar";

function Cars_create() {
    return (
        <>
            <Navbar/>
            <h3><a href="cars_list.html" className="btn btn-light">Go Back</a>Add Car</h3>
      <div className="container">
        <div className="form-group mb-3">
          <label htmlFor="model" className="form-label">Car Number :</label>
          <input type="number" className="form-control" placeholder="Enter Car Number"/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="model" className="form-label">Car Model:</label>
          <input type="text" className="form-control" placeholder="Enter Car Model"/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="model" className="form-label">Car Type (SUV / CUV / Sedan):</label>
          <input type="text" className="form-control" placeholder="Enter Car Type"/>
        </div>
        <button className="btn btn-primary">Create Car</button>
      </div>
        </>
    );
}
export default Cars_create;