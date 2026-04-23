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

    <h3>Grievances</h3>

    {grievances.map((g) => (
      <div className="grievance" key={g._id}>
        <span>{g.title}</span>
        <button onClick={()=>handleDelete(g._id)}>Delete</button>
      </div>
    ))}
  </div>
);