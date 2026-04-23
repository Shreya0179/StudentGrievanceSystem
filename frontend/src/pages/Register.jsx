return (
  <div className="container">
    <h2>Register</h2>

    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Register</button>
    </form>

    <p className="link" onClick={() => navigate("/login")}>
      Already have an account? Login
    </p>
  </div>
);