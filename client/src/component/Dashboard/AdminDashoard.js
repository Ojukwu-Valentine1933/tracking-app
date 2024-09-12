import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetAllRidersMutation } from "../../lib/apis/riderApi";
import "../../App.css";

const AdminDashboard = () => {
  const [getAllRider, { data: ridersData }] = useGetAllRidersMutation();

  useEffect(() => {
    getAllRider();
  }, []);

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <button>Registered Riders</button>
          </li>
        </ul>
      </nav>

      <section className="all-riders">
        <h2>All Registered Riders</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ridersData?.riders.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>
                <td>
                  {rider.firstName} {rider.lastName}
                </td>
                <td>{rider?.onTransit ? "On Transit" : "Not on Transit"}</td>

                <td>
                  {rider?.onTransit ? (
                    <NavLink
                      className="btn btn-secondary"
                      to={`/routes/${rider.email}`}
                    >
                      Check Direction
                    </NavLink>
                  ) : (
                    <NavLink
                      className="btn btn-secondary"
                      to={`/track/${rider.email}`}
                    >
                      Check Direction
                    </NavLink>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
