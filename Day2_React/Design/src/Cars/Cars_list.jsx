import Navbar from "../header/Navbar";

function Cars_list() {
    return(
        <>
            <Navbar/>
             <h3 align="center">Car List</h3>
      <div className="container">
      <table className="table table-success table-striped">
        <thead className="table-dark">
            <th scope="col">ID</th>
            <th scope="col">Number</th>
            <th scope="col">Model</th>
            <th scope="col">className</th>
            <th scope="col"></th>
        </thead>
        <tbody>
            <tr>
            <td scope="row">car1</td>
            <td>KA09AB123</td>
            <td>Zen</td>
            <td>Small-car</td>
            <td><a className="btn btn-success" href="/cars/view?id=car1">View</a></td>
            </tr>
            <tr>
            <td scope="row">car2</td>
            <td>KA09VD321</td>
            <td>Beatle</td>
            <td>Hatchback</td>
            <td><a className="btn btn-success" href="/cars/view?id=car2">View</a></td>
            </tr>
            <tr>
              <td scope="row">car3</td>
              <td>KA09WE678</td>
              <td>Beatle</td>
              <td>Hatchback</td>
              <td><a className="btn btn-success" href="/cars/view?id=car3">View</a></td>
              </tr>
        </tbody>
      </table>
      </div>
        </>
    );
}
export default Cars_list;