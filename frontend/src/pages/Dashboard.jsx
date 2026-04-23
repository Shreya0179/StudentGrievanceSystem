import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [grievances, setGrievances] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: ""
  });

  const fetchGrievances = async () => {
    try {
      const res = await API.get("/grievances");
      setGrievances(res.data || []);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchGrievances();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/grievances", form);
      fetchGrievances();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/grievances/${id}`);
    fetchGrievances();
  };

  const handleSearch = async () => {
    if (!search) return fetchGrievances();

    const res = await API.get(`/grievances/search?title=${search}`);
    setGrievances(res.data || []);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container dashboard">
      <h2>Dashboard</h2>

      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
        <input placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
        <input placeholder="Category" onChange={(e)=>setForm({...form,category:e.target.value})}/>
        <button>Add</button>
      </form>

      <h3>Search</h3>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={fetchGrievances}>Show All</button>

      <h3>Grievances</h3>

      {Array.isArray(grievances) && grievances.length > 0 ? (
        grievances.map((g) => (
          <div key={g._id} className="grievance">
            <span>{g.title}</span>
            <button onClick={() => handleDelete(g._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No grievances found</p>
      )}
    </div>
  );
}

export default Dashboard;